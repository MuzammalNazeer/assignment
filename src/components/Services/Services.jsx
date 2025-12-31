import React from 'react';

const Services = () => {
    const services = [
        {
            title: 'Cross-Platform App Dev',
            description: 'Building high-performance mobile, web, and desktop applications using Flutter & Dart with clean architecture.',
            icon: '📱',
        },
        {
            title: 'State Management',
            description: 'Expertise in implementing robust state management solutions using Provider, Riverpod, GetX, and MVVM patterns.',
            icon: '⚡',
        },
        {
            title: 'Backend & APIs',
            description: 'Integrating RESTful APIs, Firebase services, and building backend solutions with Node.js, Express.js, and Java Spring Boot.',
            icon: '🔌',
        },
        {
            title: 'Database Integration',
            description: 'Designing and optimizing database schemas with MySQL and MongoDB for scalable applications.',
            icon: '🗄️',
        },
        {
            title: 'API Testing & Tools',
            description: 'Ensuring API reliability and performance using Postman for automated testing, documentation, and environment management.',
            icon: '🚀',
        },
    ];

    return (
        <section className="bg-transparent py-20" id="services">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-8">My Services</h2>
                <p className="text-xl text-center text-blue-100/80 mb-12 max-w-2xl mx-auto">
                    Delivering complete full-stack solutions with a focus on scalable, high-performance applications.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300 hover:bg-white/10 hover:border-cyan-500/30 group">
                            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                            <p className="text-blue-100/70 group-hover:text-blue-100 transition-colors">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
