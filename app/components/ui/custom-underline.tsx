'use client'
import { motion } from 'framer-motion';
interface CustomUnderlineProps {
    text: string;
}


const CustomUnderline: React.FC<CustomUnderlineProps> = ({ text }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }}
        >
            <div className="relative inline-block group">
                <span className="relative z-10 ">{text}</span>
                <span className="absolute inset-x-0 bottom-0 h-4 rounded-full bg-beige -z-1"></span>
            </div>
        </motion.div>
    );
};

export default CustomUnderline;
