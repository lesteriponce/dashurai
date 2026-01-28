export const FooterBottom = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-sm">All Systems Operational</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              Enterprise Grade Security
            </div>
          </div>
          
          <div className="mt-4 text-gray-400 text-xs max-w-2xl">
            Dashur AI is committed to responsible AI development and ethical data practices. 
            Our platform complies with international standards including GDPR, CCPA, and SOC 2 Type II.
          </div>
        </div>
        
        <div className="flex flex-col items-end space-y-4">
          <div className="flex flex-wrap justify-end gap-x-6 gap-y-2 text-sm">
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
          </div>
          
          <div className="flex items-center space-x-3">
            <a
              href="#app-store"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="App Store"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </a>
            
            <a
              href="#google-play"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Google Play"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5c.28 0 .55.08.79.24l14.5 9.5c.65.43.83 1.3.4 1.95c-.11.16-.25.3-.4.4l-14.5 9.5c-.65.43-1.52.25-1.95-.4c-.16-.24-.24-.51-.24-.79z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
