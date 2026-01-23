export const FooterBottom = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="text-gray-400 text-sm">
            © 2026 Dashur AI. All rights reserved.
          </div>
          
          <div className="flex flex-wrap items-center space-x-6 text-sm">
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Cookie Policy
            </a>
            <a
              href="#accessibility"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Accessibility
            </a>
            <a
              href="#security"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Security
            </a>
            <a
              href="#compliance"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Compliance
            </a>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400 text-sm">All Systems Operational</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="#app-store"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="App Store"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 2a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2H2zm4.5 3.5a.5.5 0 01.5.5v8a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 0a.5.5 0 01.5.5v8a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 0a.5.5 0 01.5.5v8a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z"/>
              </svg>
            </a>
            
            <a
              href="#google-play"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Google Play"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 2a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2H2zm4.5 3.5a.5.5 0 01.5.5v8a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 0a.5.5 0 01.5.5v8a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 0a.5.5 0 01.5.5v8a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-xs max-w-2xl">
            Dashur AI is committed to responsible AI development and ethical data practices. 
            Our platform complies with international standards including GDPR, CCPA, and SOC 2 Type II.
          </div>
          
          <div className="flex items-center space-x-4">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234B5563'%3E%3Cpath d='M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z'/%3E%3C/svg%3E"
              alt="Security Shield"
              className="w-5 h-5 opacity-60"
            />
            <span className="text-gray-400 text-xs">Enterprise Grade Security</span>
          </div>
        </div>
      </div>
    </div>
  );
};
