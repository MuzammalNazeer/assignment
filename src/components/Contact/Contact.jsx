import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedInput, setFocusedInput] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFocus = (name) => setFocusedInput(name);
    const handleBlur = () => setFocusedInput(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Frontend-Only approach: Use mailto link
        const { name, email, subject, message } = formData;
        const mailtoLink = `mailto:nazirmuzmmal28@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        // Open default email client
        window.location.href = mailtoLink;

        setStatus({
            type: 'success',
            message: ' Opening your email client...'
        });

        setTimeout(() => setIsSubmitting(false), 2000);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    const inputClasses = "w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white/5 backdrop-blur-sm border-white/10 text-white focus:border-blue-400 focus:bg-white/10 placeholder-white/30";

    return (
        <section className="py-24 relative overflow-hidden" id="contact">
            {/* Background Decor */}
            {/* Background Decor */}
            {/* Background Decor */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black -z-20"></div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500 rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <motion.span variants={itemVariants} className="inline-block py-1 px-3 rounded-full bg-blue-900/50 text-blue-300 border border-blue-700/50 text-sm font-semibold mb-4 tracking-wide uppercase">
                            Get In Touch
                        </motion.span>
                        <motion.h2 variants={itemVariants} className="text-5xl font-extrabold text-white mb-6 tracking-tight">
                            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Together</span>
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
                            Have a project in mind or want to collaborate? I'd love to hear from you.
                        </motion.p>
                    </div>

                    <div className="bg-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20 backdrop-blur-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-5 h-full">

                            {/* Contact Info Side (2/5) */}
                            <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-cyan-700 p-12 text-white relative overflow-hidden flex flex-col justify-between">
                                {/* Decor circles */}
                                <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                                <div className="absolute bottom-[-20px] left-[-20px] w-32 h-32 bg-white/10 rounded-full blur-xl"></div>

                                <div>
                                    <h3 className="text-3xl font-bold mb-2">Contact Info</h3>
                                    <p className="text-blue-100 mb-10">Reach out directly via these channels.</p>

                                    <div className="space-y-8">
                                        {[
                                            { icon: "📍", title: "Location", lines: ["Johar Town, Lahore"] },
                                            { icon: "✉️", title: "Email", lines: ["nazirmuzmmal28@gmail.com"] },
                                            { icon: "📱", title: "Phone / WhatsApp", lines: ["+92 326 4414694 (WA)", "0327 7236294 (WA+Sim)"] },
                                            { icon: "💼", title: "LinkedIn", lines: ["linkedin.com/in/muzammal-nazir"], link: "https://www.linkedin.com/in/muzammal-nazir-b052b3250" }
                                        ].map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ x: 5 }}
                                                className="flex items-start space-x-5 group"
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl backdrop-blur-md group-hover:bg-white/20 transition-colors">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-white/90 text-lg mb-1">{item.title}</h4>
                                                    {item.lines.map((line, lIdx) => (
                                                        item.link ? (
                                                            <a key={lIdx} href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-100 font-light tracking-wide hover:text-white transition-colors">
                                                                {line}
                                                            </a>
                                                        ) : (
                                                            <p key={lIdx} className="text-blue-100 font-light tracking-wide">{line}</p>
                                                        )
                                                    ))}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-white/10">
                                    <p className="text-sm text-blue-200/80">
                                        &copy; 2025 Muzammal Nazir. All rights reserved.
                                    </p>
                                </div>
                            </div>

                            {/* Form Side (3/5) */}
                            <div className="lg:col-span-3 p-12 bg-white/5 backdrop-blur-md">
                                <form onSubmit={handleSubmit} className="space-y-6">

                                    {status.message && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-4 rounded-xl bg-green-50 border border-green-100 text-green-700 flex items-center gap-3 shadow-sm"
                                        >
                                            <span className="text-xl">✅</span>
                                            <span className="font-medium">{status.message}</span>
                                        </motion.div>
                                    )}

                                    <div className="space-y-6">
                                        <div className="relative group">
                                            <label className={`absolute left-5 transition-all duration-300 pointer-events-none ${focusedInput === 'name' || formData.name ? '-top-2.5 text-xs bg-blue-900/80 px-2 text-blue-300 font-medium rounded' : 'top-4 text-gray-400'}`}>
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('name')}
                                                onBlur={handleBlur}
                                                required
                                                className={`${inputClasses} ${focusedInput === 'name' ? 'border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'border-white/10'}`}
                                            />
                                        </div>

                                        <div className="relative group">
                                            <label className={`absolute left-5 transition-all duration-300 pointer-events-none ${focusedInput === 'email' || formData.email ? '-top-2.5 text-xs bg-blue-900/80 px-2 text-blue-300 font-medium rounded' : 'top-4 text-gray-400'}`}>
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('email')}
                                                onBlur={handleBlur}
                                                required
                                                className={`${inputClasses} ${focusedInput === 'email' ? 'border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'border-white/10'}`}
                                            />
                                        </div>

                                        <div className="relative group">
                                            <label className={`absolute left-5 transition-all duration-300 pointer-events-none ${focusedInput === 'subject' || formData.subject ? '-top-2.5 text-xs bg-blue-900/80 px-2 text-blue-300 font-medium rounded' : 'top-4 text-gray-400'}`}>
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('subject')}
                                                onBlur={handleBlur}
                                                required
                                                className={`${inputClasses} ${focusedInput === 'subject' ? 'border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'border-white/10'}`}
                                            />
                                        </div>

                                        <div className="relative group">
                                            <label className={`absolute left-5 transition-all duration-300 pointer-events-none ${focusedInput === 'message' || formData.message ? '-top-2.5 text-xs bg-blue-900/80 px-2 text-blue-300 font-medium rounded' : 'top-4 text-gray-400'}`}>
                                                Your Message
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('message')}
                                                onBlur={handleBlur}
                                                required
                                                rows="5"
                                                className={`${inputClasses} resize-none ${focusedInput === 'message' ? 'border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'border-white/10'}`}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.5)" }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full py-5 rounded-xl font-bold text-lg text-white transition-all shadow-lg shadow-blue-300/50
                                            ${isSubmitting
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:to-cyan-500'
                                            }`}
                                    >
                                        <div className="flex items-center justify-center gap-2">
                                            {isSubmitting ? (
                                                <span>Opening Email Client...</span>
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <span className="text-xl"></span>
                                                </>
                                            )}
                                        </div>
                                    </motion.button>
                                </form>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
