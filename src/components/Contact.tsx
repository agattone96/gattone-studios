export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="font-cinzel text-4xl md:text-5xl mb-12 text-center">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-cosmic-light mb-2" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 rounded-lg bg-cosmic-dark/50 border border-cosmic-accent/20 focus:outline-none focus:border-cosmic-accent transition-colors" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-cosmic-light mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 rounded-lg bg-cosmic-dark/50 border border-cosmic-accent/20 focus:outline-none focus:border-cosmic-accent transition-colors" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-cosmic-light mb-2" htmlFor="message">Message</label>
            <textarea 
              id="message" 
              className="w-full px-4 py-2 rounded-lg bg-cosmic-dark/50 border border-cosmic-accent/20 focus:outline-none focus:border-cosmic-accent transition-colors" 
              rows={4} 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full px-6 py-3 bg-cosmic-accent text-white rounded-lg hover:bg-cosmic-accent/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
