import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePortfolio } from '../../context/PortfolioContext';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    // theme toggling is handled globally for now, removing unused local refs

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                ? 'bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-white/10 py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Portfolio.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className={`text-sm font-medium transition-colors hover:text-cyan-300 ${location.pathname === item.path ? 'text-cyan-300' : 'text-gray-300'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <a
                        href="/resume"
                        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 hover:text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-gray-900/95 backdrop-blur-xl border-b border-white/10"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className={`py-2 text-base font-medium ${location.pathname === item.path ? 'text-blue-400' : 'text-gray-300'
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <a
                                href="/resume"
                                className="block w-full text-center py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;