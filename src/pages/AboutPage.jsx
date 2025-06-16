import { useState, useEffect } from "react";
import profilephoto from "../assets/images/writer-photo.jpg";

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative mt-[5rem] z-10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div
              className={`transform transition-all duration-1000 delay-200 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ✍️ AUTHOR SPOTLIGHT
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Meet the Mind Behind
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  {" "}
                  the Stories
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover the journey, inspiration, and creative process of Vikas
                Patwari, an author who transforms ordinary moments into
                extraordinary narratives.
              </p>
            </div>
          </div>

          {/* Author Profile Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Author Photo */}
            <div className="flex justify-center lg:justify-start">
              <div
                className={`relative transform transition-all duration-1000 delay-400 ${
                  isLoaded
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-20 opacity-0"
                }`}
              >
                <div
                  className="relative group"
                  style={{
                    transform: `perspective(1000px) rotateY(${
                      mousePosition.x * 0.02
                    }deg)`,
                  }}
                >
                  {/* Author Photo */}
                  <div className="w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden relative group-hover:shadow-3xl transition-all duration-500">
                    <img
                      src={profilephoto}
                      alt="Vikas Patwari - Author"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextElementSibling.style.display = "flex";
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800"
                      style={{ display: "none" }}
                    >
                      <div className="text-center text-gray-300">
                        <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium">Vikas Patwari</p>
                        <p className="text-xs">Author Photo</p>
                      </div>
                    </div>

                    {/* Decorative frame */}
                    <div className="absolute inset-0 border-4 border-white rounded-2xl"></div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Floating shadow */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-12 bg-black/10 rounded-full blur-xl group-hover:w-72 transition-all duration-500"></div>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="space-y-8">
              <div
                className={`transform transition-all duration-1000 delay-600 ${
                  isLoaded
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }`}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Vikas Patwari
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    I have recently completed my Bachelor of Commerce and am
                    currently pursuing Chartered Accountancy. I have
                    successfully cleared the CA Foundation and Group A of the
                    Intermediate level.
                  </p>
                  <p>
                    Apart from academics, I am also a writer with a passion for
                    storytelling. I have written novels and enjoy creating
                    motivational quotes to inspire and encourage others.
                  </p>
                  <p>
                    I believe in balancing knowledge and creativity. My goal is
                    to grow in both finance and writing, and to make a positive
                    impact through my work and words.
                  </p>
                </div>
              </div>

              <div
                className={`transform transition-all duration-1000 delay-800 ${
                  isLoaded
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }`}
              >
                <div className="flex flex-wrap gap-4">
                  <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Contemporary Fiction
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Psychological Drama
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Literary Fiction
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Achievements */}
          <div
            className={`grid md:grid-cols-3 gap-8 mb-20 transform transition-all duration-1000 delay-1000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Readers Worldwide</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-gray-900 mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-gray-900 mb-2">2+</div>
              <div className="text-gray-600">Years Writing</div>
            </div>
          </div>

          {/* Writing Philosophy */}
          <div
            className={`max-w-4xl mx-auto text-center mb-20 transform transition-all duration-1000 delay-1200 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Writing Philosophy
            </h3>
            <blockquote className="text-2xl text-gray-700 italic leading-relaxed mb-8">
              "Every story begins with a whisper from the unconscious mind. My
              role as a writer is to listen closely and translate these whispers
              into words that resonate with the universal human experience."
            </blockquote>
            <cite className="text-gray-500 font-semibold">— Vikas Patwari</cite>
          </div>

          {/* Contact CTA */}
          <div
            className={`text-center transform transition-all duration-1000 delay-1400 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Interested in book readings, interviews, or collaborations? I'd
              love to hear from fellow readers and writers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Send Message
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200">
                Follow on Social
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-8 mb-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Goodreads
            </a>
          </div>
          <p className="text-gray-500">
            © 2025 Vikas Patwari. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
