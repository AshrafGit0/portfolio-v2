import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "./use-toast";

const useContactLogic = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setLoading(true);
  console.log("Service ID:", import.meta.env.VITE_EMAILJS_SECRET);
  console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE);
  console.log("Public Key:", import.meta.env.VITE_EMAILJS_API_KEY);

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
            title:"Email has been sent successfully",
          })
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
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
