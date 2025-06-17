import { useState, useEffect } from "react";
import FeedbackEmail from "../config/feedbackEmail";

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await FeedbackEmail(templateParams);
      console.log("Email sent successfully!");
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 pb-12 pt-[8rem]">
        {/* Header Section */}
        <div
          className={`text-center mb-8 transform transition-all duration-1000 delay-200 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'd love to hear from you. Whether you have questions about my
            books, want to discuss a story, or just want to say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Email Me
                    </h3>
                    <p className="text-gray-600">vikaspatwari345@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Book Discussions
                    </h3>
                    <p className="text-gray-600">
                      Love talking about stories, characters, and writing
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Perfect for book clubs and readers
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Reviews & Feedback
                    </h3>
                    <p className="text-gray-600">
                      Your thoughts on my books mean everything
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Honest feedback helps me grow as a writer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4 opacity-50">"</div>
              <p className="text-lg italic leading-relaxed mb-4">
                Every reader brings their own story to the books they read. I
                write to create a space where those stories can meet, dance, and
                create something beautiful together.
              </p>
              <p className="font-semibold">— Vikas Patwari</p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transform transition-all duration-1000 delay-600 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Me a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell me what's on your mind... Questions about my books, story ideas, or just want to chat about literature?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    You can also reach me on social media or through my
                    publisher. All messages are read personally by me.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div
          className={`mt-16 transform transition-all duration-1000 delay-800 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                Do you offer signed copies?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes! I regularly offer signed copies through special events and
                my website. Follow my social media for announcements.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                Book club discussions?
              </h3>
              <p className="text-gray-600 text-sm">
                I love connecting with book clubs! Reach out to schedule a
                virtual discussion or get discussion guides for my books.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                When is your next book coming out?
              </h3>
              <p className="text-gray-600 text-sm">
                I'm currently working on my next novel. Subscribe to my
                newsletter for updates and exclusive previews.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                Writing advice for aspiring authors?
              </h3>
              <p className="text-gray-600 text-sm">
                I share writing tips and advice regularly. Feel free to ask
                specific questions - I love helping fellow writers!
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative z-10 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500">© 2025 VPBooks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
