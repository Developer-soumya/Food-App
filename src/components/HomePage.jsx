import React from "react";
import { useNavigate } from "react-router";
import { FaUtensils, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const HomePage = () => {
    const navigate = useNavigate();

    // Animation variants for smooth transitions
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">

            {/* Hero Section */}
            <motion.section
                className="relative flex items-center justify-center h-[calc(100vh-80px)] bg-cover bg-center"
                style={{ backgroundImage: "url('https://source.unsplash.com/1920x1080/?food,gourmet')" }}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 bg-black bg-opacity-70 p-12 rounded-2xl text-center max-w-3xl mx-4">
                    <motion.h1
                        className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500"
                        variants={fadeIn}
                    >
                        Discover Culinary Delights
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl mb-8 text-gray-200"
                        variants={fadeIn}
                    >
                        Savor handpicked recipes crafted with fresh ingredients and bursting with flavor. Your food adventure starts here!
                    </motion.p>
                    <motion.button
                        onClick={() => navigate("/allfoods")}
                        className="bg-orange-500 hover:bg-orange-600 transition px-10 py-4 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        variants={fadeIn}
                    >
                        Start Your Searching <FaArrowRight />
                    </motion.button>
                </div>
            </motion.section>

            {/* Featured Dishes Section */}
            <motion.section
                className="bg-gray-100 text-gray-800 py-20 px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <motion.h2
                    className="text-4xl font-bold text-center mb-12 text-gray-900"
                    variants={fadeIn}
                >
                    Our Signature Dishes
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {[
                        { img: "https://thumbs.dreamstime.com/b/fettuccine-pasta-creamy-truffle-sauce-sliced-mushrooms-dish-garnished-fresh-herbs-served-black-bowl-gourmet-meal-385668601.jpg", name: "Creamy Truffle Pasta" },
                        { img: "https://www.shutterstock.com/image-photo/homemade-hamburger-burger-fresh-vegetables-600nw-1129340393.jpg", name: "Gourmet Angus Burger" },
                        { img: "https://media.istockphoto.com/id/1442481963/photo/sushi-food.jpg?s=612x612&w=0&k=20&c=u56Zuu4sE9-D4BipjEQ2zVmcVXgP0fToltGeXph8oK4=", name: "Fresh Sushi Platter" },
                        { img: "https://media.istockphoto.com/id/2149878697/photo/quinoa-salad-with-roasted-vegetables-and-fresh-herbs-and-tomatoes.jpg?s=612x612&w=0&k=20&c=pyC-AbXkRMaZqBwUrgaFejiIyJGmaf4Z398BVOsnu5c=", name: "Mediterranean Salad" },
                        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUflvtXGefe5kVSCe5lwnMpsQCLiajTFG3g&s", name: "Artisan Margherita Pizza" },
                        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-SkP1fj5PDbqM_omKAdAgo-TQDbczjV2RQ&s", name: "Decadent Chocolate Cake" },
                        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLDqlpihOjSaYQFMrqZSXEcbH5WM-M5Vfiw&s", name: "Spicy Street Tacos" },
                        { img: "https://foodess.com/wp-content/uploads/2022/10/Foodess-Best-Butter-Chicken-1-2.jpg", name: "Butter Chicken Curry" },
                    ].map((dish, index) => (
                        <motion.div
                            key={index}
                            className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                            variants={fadeIn}
                        >
                            <img src={dish.img} alt={dish.name} className="w-full h-72 object-cover" />
                            <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-4 text-white">
                                <h3 className="text-lg font-semibold">{dish.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Call to Action Section */}
            <motion.section
                className="bg-orange-500 text-white py-16 px-4 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Hungry for More?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                    Dive into a world of flavors with our exclusive recipes and culinary tips. Join our community of food lovers today!
                </p>
                <motion.button
                    onClick={() => navigate("/allfoods")}
                    className="bg-white text-orange-500 hover:bg-gray-100 transition px-10 py-4 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Explore All Recipes <FaArrowRight />
                </motion.button>
            </motion.section>

            {/* Footer */}
            <footer className="bg-black bg-opacity-90 text-center text-white py-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <p className="text-sm">&copy; 2025 TastyBites. All Rights Reserved.</p>
                    <p className="text-xs mt-2">Crafted with 🍽️ for food lovers worldwide</p>
                </motion.div>
            </footer>
        </div>
    );
};

export default HomePage;