import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "./use-toast";

const useContactLogic = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SECRET,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        {
          subject: formData.subject,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        },
        import.meta.env.VITE_EMAILJS_API_KEY
      )
      .then(
        () => {
          setLoading(false);
          setFormData({ name: "", email: "", message: "", subject: "" });
          toast({
            title: "Email has been sent successfully",
          });
        },
        () => {
          setLoading(false);
          toast({
            title: "Some Error Occurred!",
          });
        }
      );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return { formData, handleSubmit, handleInputChange, loading };
};

export default useContactLogic;
