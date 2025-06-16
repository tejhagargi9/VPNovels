import { useState, useEffect } from 'react';

export default function Homeage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center pt-20 pb-8 sm:pt-24 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 mt-4 text-center lg:text-left">
              <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  ✨ NEW RELEASE
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                  She Texted Me After Death
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-2">
                  by <span className="font-semibold text-gray-900">Vikas Patwari</span>
                </p>
              </div>

              <div className={`transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  A haunting tale of redemption and discovery that follows Emma's journey through the forgotten corners of memory. When the past whispers secrets, will she have the courage to listen?
                </p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                <button className="bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base">
                  Read Now - $12.99
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 text-sm sm:text-base">
                  Free Preview
                </button>
              </div>

              <div className={`flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-500 transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400 text-sm sm:text-base">★★★★★</span>
                  <span className="ml-1 sm:ml-2">4.8</span>
                </div>
                <div className="h-3 sm:h-4 w-px bg-gray-300"></div>
                <div className="text-center sm:text-left">Available in Amazon Kindle & Pothi</div>
              </div>
            </div>

            {/* Book Display Section */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className={`relative transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                
                {/* Book Cover */}
                <div 
                  className="relative group cursor-pointer"
                  style={{
                    transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`
                  }}
                >
                  <div className="w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-lg shadow-2xl transform group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
                    
                    {/* Book spine highlight */}
                    <div className="absolute top-0 left-0 w-1.5 sm:w-2 h-full bg-gradient-to-b from-blue-400 to-purple-600"></div>
                    
                    {/* Book title on cover */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 sm:p-6 md:p-8">
                      <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 tracking-wider">
                        SHE
                      </div>
                      <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 tracking-wider leading-tight">
                        TEXTED ME
                      </div>
                      <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 tracking-wider">
                        AFTER DEATH
                      </div>
                      <div className="text-gray-300 text-sm sm:text-base md:text-lg font-light tracking-widest">
                        VIKAS PATWARI
                      </div>
                    </div>

                    {/* Subtle overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Floating shadow */}
                  <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-48 sm:w-56 md:w-64 h-4 sm:h-6 md:h-8 bg-black/20 rounded-full blur-xl group-hover:w-52 sm:group-hover:w-60 md:group-hover:w-72 transition-all duration-500"></div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-green-500 text-white text-xs font-bold px-2 sm:px-3 py-1 sm:py-2 rounded-full shadow-lg animate-bounce">
                  Bestseller
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} px-4`}>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-500 text-xs sm:text-sm text-center">
          <span>Discover more literary journeys</span>
          <div className="hidden sm:block w-8 h-px bg-gray-300"></div>
          <button className="hover:text-gray-700 transition-colors">Explore Collection →</button>
        </div>
      </div>
    </div>
  );
}