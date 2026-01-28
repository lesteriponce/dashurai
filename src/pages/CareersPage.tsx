import { useState } from "react";

export const CareersPage = () => {
  const [activeTab, setActiveTab] = useState("positions");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Join Our Team Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-blue-300 bg-blue-950/50 rounded-full border border-blue-700/50 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Join Our Team
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
                Build the Future
              </span>
              <br />
              <span className="text-white">With Us</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join a team of innovators, creators, and problem-solvers who are passionate about 
              shaping the future of AI and technology. We're not just building products; we're 
              building tomorrow's possibilities.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 rounded-2xl bg-blue-950/30 backdrop-blur-sm border border-blue-800/30">
                <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-gray-300">Open Positions</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-blue-950/30 backdrop-blur-sm border border-blue-800/30">
                <div className="text-4xl font-bold text-blue-500 mb-2">100%</div>
                <div className="text-gray-300">Remote Friendly</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-blue-950/30 backdrop-blur-sm border border-blue-800/30">
                <div className="text-4xl font-bold text-cyan-600 mb-2">24/7</div>
                <div className="text-gray-300">Innovation</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-700 to-cyan-800 text-white font-semibold rounded-xl hover:from-blue-800 hover:to-cyan-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
                View Open Positions
              </button>
              <button className="px-8 py-4 bg-transparent text-blue-300 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-950/50 transition-all duration-300">
                Learn About Culture
              </button>
            </div>

            {/* Join Our Innovative Team Section */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
                  Join Our Innovative Team
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
                Be part of a team that's shaping the future of AI and technology. We're looking for passionate individuals who want to make a difference.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-700 to-cyan-800 text-white font-semibold rounded-xl hover:from-blue-800 hover:to-cyan-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Career Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-blue-950/50 p-1 backdrop-blur-sm border border-blue-800/30">
            <button
              onClick={() => setActiveTab("positions")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "positions"
                  ? "bg-gradient-to-r from-blue-700 to-cyan-800 text-white"
                  : "text-blue-300 hover:text-white"
              }`}
            >
              Open Positions
            </button>
            <button
              onClick={() => setActiveTab("culture")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "culture"
                  ? "bg-gradient-to-r from-blue-700 to-cyan-800 text-white"
                  : "text-blue-300 hover:text-white"
              }`}
            >
              Our Culture
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-blue-950/30 backdrop-blur-sm rounded-2xl border border-blue-800/30 p-8">
          {activeTab === "positions" && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Current Openings</h2>
              <div className="space-y-4">
                {[
                  { title: "Software Developer", department: "Engineering", type: "Full-time" },
                  { title: "Backend Engineer", department: "Research", type: "Full-time" },
                  { title: "Mobile Developer", department: "Design", type: "Full-time" },
                  { title: "QA Engineer", department: "Engineering", type: "Full-time" },
                  { title: "iOS Engineer", department: "Analytics", type: "Full-time" },
                ].map((job, index) => (
                  <div key={index} className="bg-blue-950/50 rounded-xl p-6 border border-blue-800/30 hover:bg-blue-950/70 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/20 hover:border-blue-700/50 group">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <h3 className="text-[24px] font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">{job.title}</h3>
                        <div className="flex gap-4 text-[18px] text-blue-300">
                          <span className="group-hover:text-blue-200 transition-colors duration-300">{job.department}</span>
                          <span className="group-hover:text-blue-200 transition-colors duration-300">•</span>
                          <span className="group-hover:text-blue-200 transition-colors duration-300">{job.type}</span>
                        </div>
                      </div>
                      <button className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-700/30">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "culture" && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Culture</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-950/50 rounded-xl p-6 border border-blue-800/30">
                  <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
                  <p className="text-blue-200">We encourage creative thinking and bold ideas. Every team member has the power to shape our future.</p>
                </div>
                <div className="bg-blue-950/50 rounded-xl p-6 border border-blue-800/30">
                  <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning</h3>
                  <p className="text-blue-200">We invest in your growth with dedicated learning budgets, conferences, and internal knowledge sharing.</p>
                </div>
                <div className="bg-blue-950/50 rounded-xl p-6 border border-blue-800/30">
                  <h3 className="text-xl font-semibold text-white mb-3">Work-Life Harmony</h3>
                  <p className="text-blue-200">Flexible schedules and remote-first approach ensure you can do your best work while living your best life.</p>
                </div>
                <div className="bg-blue-950/50 rounded-xl p-6 border border-blue-800/30">
                  <h3 className="text-xl font-semibold text-white mb-3">Diverse & Inclusive</h3>
                  <p className="text-blue-200">We celebrate different perspectives and backgrounds. Your unique experiences make us stronger.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
