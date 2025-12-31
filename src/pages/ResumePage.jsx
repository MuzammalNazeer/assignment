import React from 'react';
import { motion } from 'framer-motion';

const ResumePage = () => {
    return (
        <div className="pt-24 pb-20 bg-transparent min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 backdrop-blur-md shadow-2xl rounded-2xl p-8 md:p-12 border border-white/10"
                >

                    {/* Header */}
                    <div className="border-b border-white/10 pb-8 mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">MUZAMMAL NAZIR</h1>
                        <p className="text-xl text-cyan-400 font-semibold mb-6">Flutter Developer (Cross-Platform Mobile & Web)</p>

                        <div className="flex flex-wrap gap-4 text-sm text-blue-100/70">
                            <span className="flex items-center gap-1">📧 nazirmuzammal28@gmail.com</span>
                            <span className="flex items-center gap-1">📱 +92 326 4414694 (WA)</span>
                            <span className="flex items-center gap-1">📍 Johar Town, Lahore</span>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4 mb-4">PROFESSIONAL SUMMARY</h2>
                        <p className="text-blue-100/80 leading-relaxed text-justify">
                            Passionate and results-oriented Flutter Developer with hands-on experience in building cross-platform mobile, web, and desktop applications using Flutter & Dart.
                            Skilled in creating responsive and user-friendly UI/UX, implementing state management (Provider, Riverpod, GetX, MVVM), and integrating RESTful APIs.
                            Possess a strong foundation in backend technologies and database architecture, enabling the delivery of complete full-stack solutions when required.
                            Dedicated to building scalable, high-performance applications that offer seamless user experiences and align with business goals.
                        </p>
                    </div>

                    {/* Core Competencies */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-4 mb-6">CORE COMPETENCIES</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="list-disc list-inside space-y-2 text-blue-100/80">
                                <li><strong>Cross-Platform Development:</strong> Flutter, Dart (Mobile, Web & Desktop)</li>
                                <li><strong>State Management:</strong> Provider, Riverpod, GetX, MVVM</li>
                                <li><strong>Backend & APIs:</strong> Node.js, Express.js, Java Spring Boot, RESTful APIs, Firebase, Postman</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-2 text-blue-100/80">
                                <li><strong>Databases:</strong> MySQL, MongoDB (Design, Optimization & Integration)</li>
                                <li><strong>UI/UX:</strong> Responsive design, Material Design, Clean Architecture</li>
                                <li><strong>Tools:</strong> Android Studio, VS Code, Git & GitHub, API ML Integration</li>
                            </ul>
                        </div>
                    </div>

                    {/* Work Experience */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4 mb-6">WORK EXPERIENCE</h2>

                        {/* Dictalabs */}
                        <div className="mb-8 p-6 bg-white/5 rounded-xl border border-white/5">
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold text-white">Flutter Developer (Cross-Platform Mobile & Web)</h3>
                                <span className="text-sm font-semibold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full">May 2024 – June 2025</span>
                            </div>
                            <p className="text-blue-300 font-medium mb-3">Dictalabs, Lahore</p>
                            <ul className="list-disc list-inside space-y-2 text-blue-100/70 ml-2">
                                <li>Built cross-platform apps using Flutter & Dart (Mobile, Web, Desktop).</li>
                                <li>Implemented state management (Provider, Riverpod, GetX) and RESTful APIs.</li>
                                <li>Worked on the VSCRAWL app project (Digital documentation & e-signature).</li>
                                <li>Focused on clean architecture for scalable and maintainable solutions.</li>
                            </ul>
                        </div>

                        {/* Dog Breed */}
                        <div className="mb-8 p-6 bg-white/5 rounded-xl border border-white/5">
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold text-white">Flutter Developer & ML Integration</h3>
                                <span className="text-sm font-semibold text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full">Project Based</span>
                            </div>
                            <p className="text-cyan-400 font-medium mb-3">Dog Breed Identification</p>
                            <ul className="list-disc list-inside space-y-2 text-blue-100/70 ml-2">
                                <li>Built an ML-powered mobile app to identify dog breeds using camera/scanner.</li>
                                <li>Integrated TensorFlow Lite for real-time classification.</li>
                                <li>Developed comprehensive breed information database features.</li>
                            </ul>
                        </div>

                        {/* OSM */}
                        <div className="mb-8 p-6 bg-white/5 rounded-xl border border-white/5">
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold text-white">Flutter Developer (Project)</h3>
                                <span className="text-sm font-semibold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full">Project Based</span>
                            </div>
                            <p className="text-blue-300 font-medium mb-3">Organ Speed Metro (OSM)</p>
                            <ul className="list-disc list-inside space-y-2 text-blue-100/70 ml-2">
                                <li>Developed a route management and tracking application for efficient transit systems.</li>
                                <li>Integrated Maps API and implemented real-time tracking features.</li>
                                <li>Focused on high-performance transit data processing.</li>
                            </ul>
                        </div>

                        {/* AutoCare */}
                        <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold text-white">Flutter Developer (Project) — AutoCare Project</h3>
                                <span className="text-sm font-semibold text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full">Project Based</span>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-blue-100/70 ml-2">
                                <li>Developed a Vehicle Management & Service Tracking System.</li>
                                <li>Implemented real-time data features and secure user authentication.</li>
                                <li>Focused on clean UI/UX and modular code structure.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4 mb-6">EDUCATION</h2>
                        <div className="mb-4 p-4 bg-white/5 rounded-lg border border-white/5">
                            <h3 className="text-lg font-bold text-white">Bachelor of Science in Computer Science (BSCS)</h3>
                            <p className="text-blue-300">University of Management and Technology (UMT), Lahore</p>
                            <p className="text-sm text-blue-100/50 mt-1">2021 – 2025</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                            <h3 className="text-lg font-bold text-white">Intermediate (FSC)</h3>
                            <p className="text-blue-300">Punjab Groups of Colleges | 2019 – 2021</p>
                        </div>
                    </div>

                    {/* Languages & Certificates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-4 mb-6">LANGUAGES</h2>
                            <ul className="space-y-3 text-blue-100/80">
                                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-cyan-400 rounded-full"></span> English (Fluent)</li>
                                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Urdu (Native)</li>
                                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-cyan-400 rounded-full"></span> German (A1 – Beginner)</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4 mb-6">CERTIFICATES</h2>
                            <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                <p className="text-blue-100/80">Flutter Developer – UET, Lahore (2022)</p>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default ResumePage;

