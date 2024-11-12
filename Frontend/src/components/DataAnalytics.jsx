import React, { useState } from "react";
import services3 from "../assets/cognitive.jpg";
import services1 from "../assets/services1.jpg";
import services5 from "../assets/services5.jpg";
import services2 from "../assets/services2.jpeg";

// Data for services
const data = [
    {
        title: "Cognitive Business Operations",
        subtitle: "Harnessing AI to enhance operational efficiency and decision-making.",
        image: services3,
        link: "/cognitive-business-operations",
    },
    {
        title: "Artificial Intelligence",
        subtitle: "Transforming industries with intelligent automation and data-driven insights.",
        image: services1,
        link: "/artificial-intelligence",
    },
    {
        title: "Cloud",
        subtitle: "Enabling scalable solutions and seamless collaboration through cloud technology.",
        image: services2,
        link: "/cloud",
    },
    {
        title: "Cybersecurity",
        subtitle: "Protecting organizations from evolving cyber threats and ensuring data integrity.",
        image: services5,
        link: "/cybersecurity",
    },
];

// Challenges and Solutions data
const dataChallenges = [
    {
        challengeTitle: "Data Integration & Automation",
        solutionTitle: "Data Integration & Automation",
        solutionContent:
            "We help businesses streamline their data pipelines by integrating and automating data flow across various platforms. Our solutions ensure that data is consistently available, accurate, and up-to-date, driving operational efficiency and better decision-making.",
    },
    {
        challengeTitle: "Advanced Data Analytics",
        solutionTitle: "Advanced Data Analytics",
        solutionContent:
            "Leverage advanced analytics techniques such as machine learning and AI to gain deeper insights from your data. Our solutions help businesses identify trends, predict future outcomes, and optimize processes for improved performance.",
    },
    {
        challengeTitle: "Business Intelligence (BI) Solutions",
        solutionTitle: "Business Intelligence (BI) Solutions",
        solutionContent:
            "Our BI solutions empower organizations to visualize data through interactive dashboards and reports. By transforming raw data into actionable insights, businesses can track key performance indicators (KPIs) and make informed decisions quickly.",
    },
    {
        challengeTitle: "Big Data & Cloud Analytics",
        solutionTitle: "Big Data & Cloud Analytics",
        solutionContent:
            "Harness the power of big data in the cloud to process and analyze large volumes of data at scale. Our cloud-based data analytics solutions offer high-performance computing, real-time data analysis, and scalable infrastructure to handle complex data workloads.",
    },
    {
        challengeTitle: "Predictive Analytics & Forecasting",
        solutionTitle: "Predictive Analytics & Forecasting",
        solutionContent:
            "With predictive analytics, we help businesses forecast future trends and behaviors based on historical data. This empowers organizations to anticipate changes in the market, optimize resource allocation, and minimize risks.",
    },
    {
        challengeTitle: "Data Governance & Quality",
        solutionTitle: "Data Governance & Quality",
        solutionContent:
            "Ensure the accuracy, consistency, and security of your data with our data governance solutions. We provide best practices for data management, compliance, and quality control, ensuring that your data remains trustworthy and reliable for analytics.",
    },
];

const DataAnalytics = () => {
    const [selectedChallenge, setSelectedChallenge] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('');

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
            {/* Image Section */}
            <div className="relative h-[85vh] mt-16 image-container">
                <img
                    src="/src/assets/data.jpg"
                    alt="Data Analytics"
                    className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start z-20 px-10 md:px-20">
                    <h2 className="text-sm font-semibold text-white uppercase tracking-widest mb-2">Services / Data Analytics</h2>
                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">Data Analytics</h1>
                    <p className="text-lg lg:text-xl text-white max-w-[80%] lg:max-w-[40%] mb-6 leading-relaxed">
                        Olcademy harnesses the power of data to help businesses uncover insights, optimize processes, and make informed decisions.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center h-[80vh] bg-white">
    <div className="max-w-3xl text-center">
        <h2 className="text-4xl mb-4 text-gray-800 font-semibold">
            Data Analytics
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Data Analytics empowers organizations to harness insights from vast amounts of data, driving strategic decisions and operational excellence. Our analytics solutions enable businesses to unlock the potential of data, enhance performance, and stay ahead in an increasingly data-driven world.
        </p>
    </div>
</div>

            {/* Text Section */}
            <div className="flex flex-col lg:flex-row items-start p-8 text-gray-900 mt-8 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col justify-center w-full lg:w-1/2 pr-6">
                    <h2 className="text-4xl mb-4 text-black">Partner with us for data analytics transformation.</h2>
                    <h3 className="text-sm font-bold uppercase mb-2 text-gray-500">Your Data Challenges</h3>
                    <div className="space-y-4">
                        {dataChallenges.map((item, index) => (
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
                                        {item.challengeTitle}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Solutions Section */}
                <div className="flex flex-col justify-center w-full lg:w-1/2 pl-6 mt-8 lg:mt-0">
                    <h3 className="text-sm font-bold uppercase mb-2 text-gray-500">Our Solutions</h3>
                    {selectedChallenge !== null && (
                        <>
                            <div className="text-2xl font-semibold text-black mb-2">
                                {dataChallenges[selectedChallenge].solutionTitle}
                            </div>
                            <p className="text-gray-700 mb-4">
                                {dataChallenges[selectedChallenge].solutionContent}
                            </p>
                        </>
                    )}
                </div>
            </div>

            {/* Services Section */}
            <div className="pt-16 pb-4 w-full px-10 bg-[#1E2222]">
                <h2 className="text-3xl font-bold text-white uppercase tracking-wide pt-5">Services</h2>
                <div className="mt-12 grid grid-cols-1 xl:grid-cols-4 gap-4">
                    {data.map((item, index) => (
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
                                    <p className="text-white mt-2 mb-2 text-sm">{item.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
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

export default DataAnalytics;
