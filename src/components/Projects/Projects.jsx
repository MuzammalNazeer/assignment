import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Dog Breed Identification",
            description: "ML-powered mobile app using camera/scanner to identify dog breeds with real-time classification and breed information.",
            tech: ["Flutter", "Dart", "Machine Learning", "TensorFlow Lite", "Camera API"],
            link: "#",
            image: "/dog-breed-main.png",
            screenshots: ["/dog-breed-screens.png"],
            fullDescription: "A comprehensive mobile application that uses advanced machine learning algorithms to identify dog breeds in real-time. The app features camera integration for instant scanning, detailed breed information, and a beautiful UI with both light and dark mode support. The application includes multiple screens showing splash screen, onboarding, profile setup, breed selection, scanning interface, and detailed breed information displays in both light and dark themes.",
            features: [
                "Real-time dog breed identification using camera",
                "TensorFlow Lite integration for on-device ML",
                "Comprehensive breed information database",
                "Light and Dark mode UI themes",
                "Scan history and favorites",
                "Beautiful onboarding experience",
                "User profile management",
                "Breed comparison and details"
            ]
        },
        {
            title: "VSCRAWL App",
            description: "A digital documentation and e-signature system built with Flutter.",
            tech: ["Flutter", "Dart", "Digital Signature"],
            link: "#",
            image: "/vscrawl-app.png",
            screenshots: ["/vscrawl-app.png"],
            fullDescription: "A professional digital documentation platform that enables secure electronic signatures and document management. VSCRAWL allows users to sign documents instantly with a beautiful and intuitive interface.",
            features: [
                "Digital signature capture and verification",
                "Document management system",
                "Secure authentication",
                "Cloud storage integration",
                "Instant signing workflow"
            ]
        },
        {
            title: "Organ Speed Metro (OSM)",
            description: "Route management and tracking application for efficient transit systems.",
            tech: ["Flutter", "Dart", "Maps Integration", "Tracking"],
            link: "#",
            image: "/osm-app.png",
            screenshots: ["/osm-app.png"],
            fullDescription: "A comprehensive transit management system designed for efficient route planning and real-time tracking. OSM helps commuters navigate metro systems with ease and efficiency.",
            features: [
                "Real-time GPS tracking",
                "Route optimization",
                "Interactive maps",
                "Schedule management",
                "Live transit updates"
            ]
        },
        {
            title: "AutoCare Project",
            description: "Vehicle management & service tracking system with real-time status updates and secure authentication.",
            tech: ["Flutter", "Dart", "Real-time DB", "Auth"],
            link: "#",
            image: "/autocare-app.png",
            screenshots: ["/autocare-app.png"],
            fullDescription: "A complete vehicle service management platform with real-time updates and comprehensive tracking capabilities. AutoCare keeps your vehicle maintenance organized and on schedule.",
            features: [
                "Service history tracking",
                "Real-time status updates",
                "Secure user authentication",
                "Maintenance reminders",
                "Service provider integration"
            ]
        }
    ];

    return (
        <section className="py-20 bg-transparent" id="projects">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-16">Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all hover:shadow-cyan-500/10"
                        >
                            <div className="h-48 bg-gradient-to-br from-blue-900 to-cyan-900 flex items-center justify-center text-cyan-300 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-cyan-600/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-4xl transform group-hover:scale-125 transition-transform duration-500">📱</span>
                                )}
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                                <p className="text-blue-100/70 mb-6">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-semibold bg-blue-900/50 text-cyan-200 px-3 py-1 rounded-full border border-blue-700/30">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group"
                                >
                                    View Details
                                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-cyan-600 p-6 flex justify-between items-center">
                                <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl transition-colors"
                                >
                                    ×
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8">
                                {/* Project Screenshots Gallery */}
                                {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-cyan-300 mb-4">App Output</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {selectedProject.screenshots.map((screenshot, idx) => (
                                                <div key={idx} className="rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all">
                                                    <img
                                                        src={screenshot}
                                                        alt={`${selectedProject.title} screenshot ${idx + 1}`}
                                                        className="w-full h-auto"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Full Description */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-cyan-300 mb-4">About This Project</h3>
                                    <p className="text-blue-100/80 text-lg leading-relaxed">
                                        {selectedProject.fullDescription}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-cyan-300 mb-4">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.tech.map((t, i) => (
                                            <span key={i} className="text-sm font-semibold bg-blue-900/50 text-cyan-200 px-4 py-2 rounded-full border border-blue-700/30">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-cyan-300 mb-4">Key Features</h3>
                                    <ul className="space-y-3">
                                        {selectedProject.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-blue-100/80">
                                                <span className="text-cyan-400 mr-3 text-xl">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
