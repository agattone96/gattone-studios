import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <label className="block text-cosmic-light/90">Your Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20 
                   text-cosmic-light focus:border-cosmic-accent/60 focus:outline-none transition-colors"
          placeholder="Share your name"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-cosmic-light/90">Your Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20 
                   text-cosmic-light focus:border-cosmic-accent/60 focus:outline-none transition-colors"
          placeholder="Share your email"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-cosmic-light/90">Your Message</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20 
                   text-cosmic-light focus:border-cosmic-accent/60 focus:outline-none transition-colors h-32"
          placeholder="Share your cosmic message"
          required
        />
      </div>

      <button type="submit" className="btn mx-auto">
        <strong>SEND MESSAGE</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>
        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </button>
    </motion.form>
  );
};