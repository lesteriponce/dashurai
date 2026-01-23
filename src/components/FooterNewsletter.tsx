export const FooterNewsletter = () => {
  return (
    <div className="py-12 border-b border-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Connected
          </h3>
          <p className="text-gray-300 mb-6">
            Get the latest updates on AI innovations, industry insights, and exclusive content delivered to your inbox.
          </p>
          
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/dashur"
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </a>
            
            <a
              href="https://twitter.com/dashur"
              className="w-10 h-10 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </a>
            
            <a
              href="https://www.instagram.com/dashur"
              className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-200"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.5 2H7.5C4.462 2 2 4.462 2 7.5v5C2 15.538 4.462 18 7.5 18h5c3.038 0 5.5-2.462 5.5-5.5v-5C18 4.462 15.538 2 12.5 2zM16 7.5v5c0 1.93-1.57 3.5-3.5 3.5h-5C5.57 16 4 14.43 4 12.5v-5C4 5.57 5.57 4 7.5 4h5c1.93 0 3.5 1.57 3.5 3.5zM10 6.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM10 12a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm3.5-6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
              </svg>
            </a>
            
            <a
              href="https://www.youtube.com/dashur"
              className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.5 3.5A1.5 1.5 0 014 2h12a1.5 1.5 0 011.5 1.5v13a1.5 1.5 0 01-1.5 1.5H4a1.5 1.5 0 01-1.5-1.5v-13zM8 7.5v5l4-2.5-4-2.5z"/>
              </svg>
            </a>
            
            <a
              href="https://github.com/dashur"
              className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
          <h4 className="text-lg font-semibold text-white mb-3">
            Subscribe to Our Newsletter
          </h4>
          <p className="text-gray-400 text-sm mb-4">
            Join 10,000+ professionals getting AI insights weekly
          </p>
          
          <form className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-gray-400">
              By subscribing, you agree to our Privacy Policy and consent to receive marketing communications.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
