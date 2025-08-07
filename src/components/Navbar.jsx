import { CgProfile } from "react-icons/cg";
import React from 'react'
import { FaUtensils, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const Navbar = () => {
    const navigate=useNavigate()
    return (
        <nav className="bg-black bg-opacity-80 py-4 px-8 flex justify-between items-center sticky top-0 z-50 shadow-lg">
            <motion.div
                className="text-3xl font-extrabold flex items-center gap-3 cursor-pointer"
                onClick={()=>navigate('/')}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <FaUtensils className="text-orange-500" /> <span className="text-white">Tasty <span className="text-orange-500">Bites</span></span>
            </motion.div>
            <motion.button

                className="bg-orange-500 hover:bg-orange-600 transition text-4xl rounded-full font-semibold flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <CgProfile />
            </motion.button>
        </nav>
    )
}

export default Navbar
