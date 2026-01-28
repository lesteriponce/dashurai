import { useDarkMode } from "../hooks/useDarkMode";

export const AboutPage = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated heading */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className={`font-bold text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight ${
              isDarkMode ? 'from-blue-400 to-purple-400' : ''
            }`}>
              Transforming Business Through AI Innovation
            </h1>
          </div>

          {/* Subtitle with enhanced typography */}
          <div className="mb-12 animate-fade-in-up animation-delay-200">
            <p className={`text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              We build intelligent systems that reason, predict, and assist human expertise.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 animate-fade-in-up animation-delay-400">
            <div className={`p-6 rounded-2xl backdrop-blur-sm border ${
              isDarkMode 
                ? 'bg-gradient-to-br from-blue-950/85 to-black/95 border-blue-950' 
                : 'bg-gradient-to-br from-blue-900/75 to-blue-950/85 border-blue-900'
            } hover:shadow-xl transition-all duration-300 hover:scale-105`}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mb-4 mx-auto flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Intelligent Systems
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Advanced AI solutions that learn and adapt
              </p>
            </div>

            <div className={`p-6 rounded-2xl backdrop-blur-sm border ${
              isDarkMode 
                ? 'bg-gradient-to-br from-blue-950/85 to-black/95 border-blue-950' 
                : 'bg-gradient-to-br from-blue-900/75 to-blue-950/85 border-blue-900'
            } hover:shadow-xl transition-all duration-300 hover:scale-105`}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4 mx-auto flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Predictive Analytics
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Data-driven insights for better decisions
              </p>
            </div>

            <div className={`p-6 rounded-2xl backdrop-blur-sm border ${
              isDarkMode 
                ? 'bg-gradient-to-br from-blue-950/85 to-black/95 border-blue-950' 
                : 'bg-gradient-to-br from-blue-900/75 to-blue-950/85 border-blue-900'
            } hover:shadow-xl transition-all duration-300 hover:scale-105`}>
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg mb-4 mx-auto flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Expert Assistance
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                AI-powered tools that enhance human capabilities
              </p>
            </div>
          </div>

          {/* AI Principles Section */}
          <div className="mb-16 animate-fade-in-up animation-delay-800">
            <div className={`p-8 rounded-3xl backdrop-blur-md border ${
              isDarkMode 
                ? 'bg-gradient-to-br from-blue-950/90 to-black/98 border-blue-950 shadow-2xl' 
                : 'bg-gradient-to-br from-blue-900/85 to-blue-950/95 border-blue-900 shadow-2xl'
            } shadow-2xl`}>
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
                <h2 className={`text-8xl md:text-[12.72rem] font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>AI</h2>
                <ul className="space-y-2">
                  <li className={`text-xl md:text-2xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>should reason.</li>
                  <li className={`text-xl md:text-2xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>should complement humans.</li>
                  <li className={`text-xl md:text-2xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>should operate in complexity.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Movie Credits Style Text */}
          <div className="flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8 animate-fade-in-up animation-delay-1200">
            <div className="max-w-3xl text-center">
              <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                While dedicated to the development of advanced automated solutions, our goal is to
                imbue these systems with a nuanced form of reasoning reminiscent of human
                cognition, thereby enhancing individual talents and capabilities.
              </p>
              <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Our specialization lies in addressing intricate challenges within demanding
                environments, fostering a reliance on AI for decision-making that compliments
                human expertise. Acknowledging the widespread demand across diverse markets,
                we aim to provide cutting-edge solutions with real-time situational awareness,
                predictive analytics, and human-like acumen.
              </p>
            </div>
          </div>

          {/* How We Work Section */}
          <div className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in-up animation-delay-1400">
            
            <div className="grid md:grid-cols-1 gap-12 items-center text-center">
              <div>
                <div className="mb-8 pb-8 border-b border-gray-700">
                  <h3 className={`text-3xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Situational Awareness</h3>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Real-time understanding of complex environments and contexts.</p>
                </div>
                <div className="mb-8 pb-8 border-b border-gray-700">
                  <h3 className={`text-3xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Predictive Analytics</h3>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Anticipating outcomes before they occur through intelligent pattern recognition.</p>
                </div>
                <div className="pb-8">
                  <h3 className={`text-3xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Human-like Reasoning</h3>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Systems that think, adapt, and make decisions with nuanced cognition.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="animate-fade-in-up animation-delay-1000">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Discover Our Solutions
            </button>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-1400 {
          animation-delay: 1.4s;
        }
      `}</style>
    </div>
  );
};
