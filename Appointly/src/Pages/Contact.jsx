import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-amber-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Let’s Talk!
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Have questions, feedback, or want to partner with us? Drop us a message — we’re here to help you plan your perfect stay!
          </p>
          <div className="space-y-4 text-gray-700">
            <p><strong>Email:</strong> support@appointly.com</p>
            <p><strong>Phone:</strong> +1 (800) 123‑4567</p>
            <p><strong>Office:</strong> 123 Appointly Avenue, Downtown, NY 10001</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Message</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                rows="5"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-xl transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
