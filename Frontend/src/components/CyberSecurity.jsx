import React, { useState } from "react";
import services1 from "../assets/services1.png"; // Adjust the path as needed
import services2 from "../assets/services2.jpeg"; // Adjust the path as needed
import services3 from "../assets/services3.png"; // Adjust the path as needed
import services4 from "../assets/services4.jpeg"; // Adjust the path as needed

const servicesData = [
    {
        title: "Network Security",
        subtitle: "Protecting your networks from unauthorized access and attacks.",
        image: services4,
        link: "/network-security",
    },
    {
        title: "Data Protection",
        subtitle: "Ensuring data integrity and security against breaches.",
        image: services1,
        link: "/data-protection",
    },
    {
        title: "Incident Response",
        subtitle: "Rapidly addressing security breaches to minimize damage.",
        image: services2,
        link: "/incident-response",
    },
    {
        title: "Compliance Management",
        subtitle: "Helping organizations comply with security regulations.",
        image: services3,
        link: "/compliance-management",
    },
];

const CyberSecurity = () => {
    const [selectedChallenge, setSelectedChallenge] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('');
    
    const solutionData = [
        {
            solutionTitle: "Advanced Threat Detection & Prevention",
            solutionContent:
                "Our cybersecurity solutions leverage AI-driven technologies to detect and prevent advanced threats in real-time. By continuously monitoring systems for suspicious activities, we enable businesses to proactively defend against cyber-attacks and minimize risks.",
        },
        {
            solutionTitle: "Data Protection & Privacy",
            solutionContent:
                "We help businesses protect sensitive data by implementing robust encryption, access control, and data masking strategies. Our solutions ensure compliance with data privacy regulations and safeguard customer trust by securing personal and financial information.",
        },
        {
            solutionTitle: "Incident Response & Recovery",
            solutionContent:
                "Our incident response teams are equipped to quickly identify and mitigate the impact of cyber incidents. We offer comprehensive recovery solutions to help businesses restore operations and data after a breach, minimizing downtime and damage.",
        },
        {
            solutionTitle: "Security Risk Assessment & Compliance",
            solutionContent:
                "We conduct thorough security risk assessments to identify vulnerabilities within your infrastructure. By aligning cybersecurity strategies with industry standards, we ensure businesses remain compliant with relevant regulations and maintain a secure environment.",
        },
    ];
    
    const handleClick = (index) => {
        setSelectedChallenge(selectedChallenge === index ? null : index);
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Simulate an API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setSubmissionStatus("Thank you for contacting us. We will get back to you soon.");
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmissionStatus("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <div className="w-full h-auto bg-white">
            {/* Hero Section */}
            <div className="relative h-[85vh] mt-16 image-container">
                <img
                    src="/src/assets/cyber.jpg" // Correct the image path here
                    className="absolute inset-0 object-cover w-full h-full"
                    alt="Cybersecurity"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start z-20 px-10 md:px-20">
                    <h2 className="text-sm font-semibold text-white uppercase tracking-widest mb-2">Services /  CyberSecurity</h2>
                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                        CyberSecurity
                    </h1>
                    <p className="text-lg lg:text-xl text-white max-w-[80%] lg:max-w-[40%] mb-6 leading-relaxed">
                        Olcademy empowers businesses to scale and innovate with cutting-edge cloud technologies.
                    </p>
                </div>
            </div>

            {/* Text Section */}
            <div className="flex flex-col items-center justify-center h-[80vh] bg-white">
                <div className="max-w-3xl text-center">
                    <h2 className="text-4xl mb-4 text-gray-800 font-semibold">
                        Cybersecurity Excellence
                    </h2>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                        In today’s digital world, cybersecurity is more important than ever. Our solutions are designed to safeguard your business against evolving cyber threats, ensuring your data, systems, and operations remain secure.
                    </p>
                </div>
            </div>

            {/* Information Section */}
            <div className="flex flex-col lg:flex-row items-start p-8 text-gray-900 mt-8 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col justify-center w-full lg:w-1/2 pr-6">
                    <h2 className="text-4xl mb-4 text-black">
                        Partner with us for robust cybersecurity solutions.
                    </h2>
                    <h3 className="text-sm font-bold uppercase mb-2 text-gray-500">Your Challenge</h3>
                    <div className="space-y-4">
                        {solutionData.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center p-4 rounded-lg border transition-all duration-300 ${
                                    selectedChallenge === index ? "bg-blue-100 border-[#15a7e7]" : "bg-gray-50 border-gray-300"
                                }`}
                            >
                                <button
                                    className={`text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 ${
                                        selectedChallenge === index ? "bg-[#15a7e7] text-white" : "bg-gray-300 text-black"
                                    }`}
                                    onClick={() => handleClick(index)}
                                >
                                    {index + 1}
                                </button>
                                <div className="ml-4">
                                    <h4
                                        className="text-lg font-semibold cursor-pointer"
                                        onClick={() => handleClick(index)}
                                    >
                                        {item.solutionTitle}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Solutions Section */}
                <div className="flex flex-col justify-center w-full lg:w-1/2 pl-6 mt-8 lg:mt-0">
                    <h3 className="text-sm font-bold uppercase mb-2 text-gray-500">Our Cybersecurity Solutions</h3>
                    {selectedChallenge !== null && (
                        <>
                            <div className="text-2xl font-semibold text-black mb-2">
                                {solutionData[selectedChallenge].solutionTitle}
                            </div>
                            <p className="text-gray-700 mb-4">
                                {solutionData[selectedChallenge].solutionContent}
                            </p>
                        </>
                    )}
                </div>
            </div>

            {/* Services Section */}
            <div className="pt-16 pb-4 w-full px-10 bg-[#1E2222]">
                <h2 className="text-3xl font-bold text-white uppercase tracking-wide pt-5">Services</h2>
                <div className="mt-12 grid grid-cols-1 xl:grid-cols-4 gap-4">
                    {servicesData.map((item, index) => (
                        <div
                            className="group mt-2 relative cursor-pointer"
                            key={index}
                            onClick={() => (window.location.href = item.link)}
                        >
                            <div className="relative rounded-2xl overflow-hidden transition-all duration-300 transform group-hover:-translate-y-2">
                                <img
                                    src={item.image}
                                    className="w-full h-[350px] object-cover rounded-2xl transition-all duration-300 group-hover:blur-sm"
                                    alt={item.title}
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70">
                                    <h2 className="text-white text-2xl">{item.title}</h2>
                                    <p className="text-gray-300 text-lg">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-lg mt-16 mx-10">
                <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
                {submissionStatus && <div className="bg-green-500 text-white p-2 mb-4 rounded-md">{submissionStatus}</div>}
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label className="text-gray-300 font-semibold mb-2">Your Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="p-2 mb-4 rounded-md bg-gray-700 text-white focus:outline-none" required />

                    <label className="text-gray-300 font-semibold mb-2">Your Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="p-2 mb-4 rounded-md bg-gray-700 text-white focus:outline-none" required />

                    <label className="text-gray-300 font-semibold mb-2">Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="p-2 mb-4 rounded-md bg-gray-700 text-white focus:outline-none" required></textarea>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CyberSecurity;
