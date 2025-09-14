import { useState } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! How can I help you today? 👋",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
      return "Hello! I'm here to help you with any questions about our services or projects.";
    } else if (input.includes("project") || input.includes("work")) {
      return "I'd be happy to discuss our projects! You can view our portfolio on this site or contact us directly for custom work.";
    } else if (input.includes("contact") || input.includes("hire")) {
      return "Great! You can reach out through our contact form, email, or click the WhatsApp button below for instant messaging.";
    } else if (input.includes("price") || input.includes("cost")) {
      return "Pricing depends on the project scope. Let's discuss your requirements! Feel free to contact us for a personalized quote.";
    } else {
      return "Thank you for your message! For detailed assistance, please use our contact form or reach out via WhatsApp.";
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = "+918096008421";
    const message = "Hi! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-14"
          >
            <Card className="w-80 h-96 shadow-lg border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-medium">
                  Chat Support
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex flex-col h-full">
                <ScrollArea className="flex-1 pr-2">
                  <div className="space-y-3">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.isUser ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                            message.isUser
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {message.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="mt-4 space-y-2">
                  <div className="flex gap-2 mb-2">
                    <Input
                      placeholder="Type your message..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleSendMessage()
                      }
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>

                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="w-full text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-950"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Continue on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  );
};

export default ChatBot;
