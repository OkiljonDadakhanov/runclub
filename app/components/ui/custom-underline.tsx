
interface CustomUnderlineProps {
    text: string;
}


const CustomUnderline: React.FC<CustomUnderlineProps> = ({ text }) => {
    return (
        <div className="relative inline-block group">
            <span className="relative z-10 ">{text}</span>
            <span className="absolute inset-x-0 bottom-0 h-4 rounded-full bg-beige -z-1"></span>
        </div>
    );
};

export default CustomUnderline;
