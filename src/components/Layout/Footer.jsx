import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-gray-900/50 backdrop-blur-md border-t border-white/10 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Portfolio.</h3>
                        <p className="text-blue-200/60">
                            Building digital experiences with passion and purpose.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2 text-blue-200/60">
                            <li><a href="/" className="hover:text-cyan-400 transition-colors">Home</a></li>
                            <li><a href="/about" className="hover:text-cyan-400 transition-colors">About</a></li>
                            <li><a href="/projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
                            <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all text-gray-300 hover:text-white" aria-label="GitHub">
                                <span>GH</span>
                            </a>
                            <a href="https://www.linkedin.com/in/muzammal-nazir-b052b3250" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all text-gray-300 hover:text-white" aria-label="LinkedIn">
                                <span>LI</span>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all text-gray-300 hover:text-white" aria-label="Twitter">
                                <span>TW</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Muzammal Nazir. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
