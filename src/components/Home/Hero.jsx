import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
            {/* Background Animations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative inline-block"
                >
                    <div className="w-40 h-40 md:w-56 md:h-56 mx-auto bg-gradient-to-tr from-blue-500 to-cyan-400 p-1 rounded-full shadow-2xl shadow-cyan-500/20">
                        <img
                            src="/profile-mountain.png"
                            alt="Muzammal Nazir"
                            className="w-full h-full object-cover rounded-full border-4 border-gray-900"
                        />
                    </div>
                    <motion.span
                        animate={{ rotate: [0, 20, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute bottom-2 right-2 text-4xl"
                    >
                        👋
                    </motion.span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
                >
                    Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 text-transparent bg-clip-text">Muzammal Nazir</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-3xl text-cyan-200 mb-8 font-light"
                >
                    <TypeAnimation
                        sequence={[
                            'Flutter Developer',
                            2000,
                            'Mobile App ',
                            2000,
                            'Web Developer',
                            2000,

                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        to="/projects"
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                    >
                        View My Work
                    </Link>
                    <Link
                        to="/contact"
                        className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold text-lg hover:bg-white/20 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
