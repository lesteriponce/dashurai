export const FooterBrand = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <img
          src="/dashurLogo.png"
          alt="Dashur AI Logo"
          className="h-10 w-auto"
        />
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Dashur AI
        </span>
      </div>
      
      <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
        Empowering businesses through innovative AI solutions and digital transformation. 
        We connect the future with cutting-edge technology to drive your success.
      </p>

      <div className="space-y-3">
        <div className="flex items-center space-x-3 text-gray-300 text-sm">
          <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          <span>contact@dashur.ai</span>
        </div>
        
        <div className="flex items-center space-x-3 text-gray-300 text-sm">
          <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          <span>+1 (555) 123-4567</span>
        </div>
        
        <div className="flex items-center space-x-3 text-gray-300 text-sm">
          <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
          </svg>
          <span>San Francisco, CA | New York, NY | London, UK</span>
        </div>
      </div>

      <div className="flex items-center space-x-4 pt-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
          </div>
          <span className="text-xs text-gray-400">ISO 27001</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
            </svg>
          </div>
          <span className="text-xs text-gray-400">GDPR Compliant</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100 4h2a1 1 0 100 2 2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2z" clipRule="evenodd"/>
            </svg>
          </div>
          <span className="text-xs text-gray-400">SOC 2 Type II</span>
        </div>
      </div>
    </div>
  );
};
