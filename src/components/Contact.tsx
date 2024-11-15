import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
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
    <section className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-[#2A1F3D] to-cosmic-dark opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl mb-6">
            <span className="bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent bg-clip-text text-transparent">
              Connect Across the Stars
            </span>
          </h2>
          <p className="text-cosmic-light/90 text-lg">
            Ready to embark on a creative journey together? Let's make something extraordinary.
          </p>
        </div>

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

          <button
            type="submit"
            className="w-full cosmic-button group"
          >
            <span className="relative z-10">Send Message</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple via-cosmic-accent to-cosmic-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.form>

        <div className="mt-16 text-center">
          <h3 className="font-cinzel text-2xl mb-6 text-cosmic-accent">Follow My Journey</h3>
          <div className="flex justify-center space-x-6">
            {['Twitter', 'Instagram', 'LinkedIn', 'GitHub'].map((platform) => (
              <motion.a
                key={platform}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20 
                         flex items-center justify-center text-cosmic-light hover:border-cosmic-accent/60 transition-colors"
              >
                {platform[0]}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};