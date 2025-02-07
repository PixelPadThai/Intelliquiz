import React, { useState } from 'react';
import { 
  Brain, 
  Users, 
  GraduationCap, 
  Building2, 
  BookOpen,
  ChevronRight,
  Sparkles,
  Globe,
  Users2,
  Trophy,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock
} from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen font-raleway bg-gradient-to-b from-gray-50 to-white">
      {/* Contact Hero Section */}
      <section className="relative  pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 animate-slide-up">
              Have questions about IntelliQuiz? We're here to help you elevate your learning experience.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold ml-4">Email Us</h3>
              </div>
              <p className="text-gray-600">support@intelliquiz.com</p>
              <p className="text-gray-600">info@intelliquiz.com</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold ml-4">Call Us</h3>
              </div>
              <p className="text-gray-600">+91- 9322916728</p>
              
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold ml-4">Visit Us</h3>
              </div>
              <p className="text-gray-600">123 Innovation Drive</p>
              <p className="text-gray-600">Tech Valley</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 bg-indigo-600 p-12 text-white">
                <div className="max-w-md">
                  <h3 className="text-2xl font-bold mb-6">Let's Start a Conversation</h3>
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <MessageSquare className="w-6 h-6" />
                      <div>
                        <h4 className="font-semibold">Chat with Us</h4>
                        <p className="text-indigo-200">Our friendly team is here to help.</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Clock className="w-6 h-6" />
                      <div>
                        <h4 className="font-semibold">24/7 Support</h4>
                        <p className="text-indigo-200">Round the clock assistance.</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Globe className="w-6 h-6" />
                      <div>
                        <h4 className="font-semibold">Global Reach</h4>
                        <p className="text-indigo-200">Supporting learners worldwide.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Brain className="w-6 h-6" /> IntelliQuiz
              </h3>
              <p className="text-sm">Elevate your learning with AI-driven quizzes.</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex justify-center md:justify-end space-x-8">
                <a href="#" className="hover:text-white transition">Home</a>
                <a href="#" className="hover:text-white transition">Features</a>
                <a href="#" className="hover:text-white transition">About Us</a>
                <a href="#" className="hover:text-white transition">Contact</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            © 2025 IntelliQuiz. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;