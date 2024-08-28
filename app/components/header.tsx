import ButtonMenu from "./ui/button";
import Link from 'next/link'

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center w-[85%] m-auto h-[5rem] bg-white shadow-md relative z-50">
            <Link href='/'>
                <h1 className="text-2xl text-[#5379f5]">RunHub</h1>
            </Link>
            <nav>
                <ul className="flex gap-4">
                    <Link href='/clubs'>
                        <li className="cursor-pointer hover:text-[#5379f5]">Clubs</li>
                    </Link>
                    <Link href='/events'>
                        <li className="cursor-pointer hover:text-[#5379f5]">Events</li>
                    </Link>

                    <Link href='/sign-up'>
                        <li className="cursor-pointer hover:text-[#5379f5]">Dashboard</li>
                    </Link>
                </ul>
            </nav>

            <ButtonMenu colorScheme="blue" size="lg" buttonColor="white">
                Get started
            </ButtonMenu>


        </header>
    );
};


export default Header