import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        "Flutter", "Dart", "Provider", "Riverpod", "GetX", "MVVM",
        "RESTful APIs", "Postman", "API ML", "ML Model integration in Flutter",
        "Firebase", "Java Spring Boot", "Node.js (Basic)", "Express.js",
        "MySQL", "MongoDB", "Git & GitHub", "Android Studio", "VS Code"
    ];

    const education = [
        {
            degree: "Bachelor of Science in Computer Science (BSCS)",
            school: "University of Management and Technology (UMT), Lahore",
            year: "2021 – 2025" // Updated from Graduated as per user request (corrected 2012 typo to 2021 based on Intermediate dates)
        },
        {
            degree: "Intermediate (FSC)",
            school: "Punjab Groups of Colleges",
            year: "2019 – 2021"
        }
    ];

    const experience = [
        {
            role: "Flutter Developer (Cross-Platform Mobile & Web)",
            company: "Dictalabs, Lahore",
            period: "May 2024 – June 2025",
            description: "Building cross-platform mobile, web, and desktop apps using Flutter & Dart. Implementing state management (Provider, Riverpod, GetX) and integrating RESTful APIs. Worked on the VSCRAWL app project."
        },
        {
            role: "Flutter Developer (Project)",
            company: "AutoCare Project",
            period: "Project Based",
            description: "Developed a Vehicle Management & Service Tracking System. Implemented real-time data features and secure user authentication."
        },
        {
            role: "Flutter Developer (Project)",
            company: "Organ Speed Metro (OSM)",
            period: "Project Based",
            description: "Developed a route management and tracking application for efficient transit systems. Integrated Maps API and real-time tracking features."
        },
        {
            role: "Flutter Developer & ML Integration",
            company: "Dog Breed Identification",
            period: "Project Based",
            description: "Built an ML-powered mobile app to identify dog breeds using camera/scanner. Integrated TensorFlow Lite for real-time classification and comprehensive breed information."
        }
    ];

    return (
        <section className="py-20 bg-transparent" id="about">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold text-center text-white mb-12">About Me</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg shadow-blue-500/5">
                            <h3 className="text-2xl font-bold text-cyan-300 mb-4">Professional Summary</h3>
                            <p className="text-lg text-blue-100/90 leading-relaxed mb-6">
                                Passionate and results-oriented Flutter Developer with hands-on experience in building cross-platform mobile, web, and desktop applications using Flutter & Dart.
                                Skilled in creating responsive and user-friendly UI/UX, implementing state management (Provider, Riverpod, GetX, MVVM), and integrating RESTful APIs.
                                Possess a strong foundation in backend technologies and database architecture, enabling the delivery of complete full-stack solutions when required.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg shadow-blue-500/5">
                            <h3 className="text-2xl font-bold text-cyan-300 mb-6">Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-900/50 text-blue-200 px-4 py-2 rounded-full text-sm font-medium border border-blue-700/50 hover:bg-blue-800/50 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg shadow-blue-500/5">
                            <h3 className="text-2xl font-bold text-cyan-300 mb-6">Languages</h3>
                            <ul className="space-y-3 text-blue-100/80">
                                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span><strong>English:</strong> <span className="ml-2 text-blue-200/70">Fluent</span></li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span><strong>Urdu:</strong> <span className="ml-2 text-blue-200/70">Native</span></li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span><strong>German:</strong> <span className="ml-2 text-blue-200/70">A1 – Beginner</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-cyan-500">Experience</h3>
                        <div className="space-y-8">
                            {experience.map((exp, index) => (
                                <div key={index} className="bg-white/5 p-8 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all hover:bg-white/10">
                                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                    <p className="text-cyan-400 font-medium mb-3">{exp.company} | {exp.period}</p>
                                    <p className="text-blue-100/80">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-blue-500">Education</h3>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div key={index} className="bg-white/5 border border-white/5 p-8 rounded-xl hover:border-blue-500/30 transition-all hover:bg-white/10">
                                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                                    <p className="text-blue-300">{edu.school}</p>
                                    <p className="text-sm text-blue-200/60 mt-2">{edu.year}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
