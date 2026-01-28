export const FooterBrand = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur-sm opacity-60"></div>
          <img
            src="/dashurLogo.png"
            alt="Dashur AI Logo"
            className="relative h-12 w-auto rounded-lg"
          />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          dashur AI
        </span>
      </div>
      
      <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
        Empowering businesses through innovative AI solutions and digital transformation. 
        We connect the future with cutting-edge technology to drive your success.
      </p>

      <div className="space-y-4">
        <div className="flex items-center space-x-3 text-gray-300 text-sm hover:text-white transition-colors duration-200 cursor-pointer group">
          <svg className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          <span className="group-hover:underline">contact@dashur.ai</span>
        </div>
        
        <div className="flex items-center space-x-3 text-gray-300 text-sm hover:text-white transition-colors duration-200 cursor-pointer group">
          <svg className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          <span className="group-hover:underline">+1 (555) 123-4567</span>
        </div>
        
        <div className="flex items-center space-x-3 text-gray-300 text-sm hover:text-white transition-colors duration-200 cursor-pointer group">
          <svg className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
          </svg>
          <span className="group-hover:underline">The Place No One Will Know</span>
        </div>
      </div>

      <div className="pt-4">
        <p className="text-xs text-gray-400 mb-3">© 2026 Dashur AI. All rights reserved.</p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-900/30 text-green-400 border border-green-800/50">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></div>
            ISO 27001
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-900/30 text-blue-400 border border-blue-800/50">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-1.5"></div>
            GDPR Compliant
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-900/30 text-purple-400 border border-purple-800/50">
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-1.5"></div>
            SOC 2 Type II
          </span>
        </div>
      </div>
    </div>
  );
};
