import ButtonMenu from "./ui/button"
import Link from 'next/link'

const Newsletter: React.FC = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-r from-[#537BF8] to-indigo-600 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">

                    </div>
                    <div className="lg:w-1/2 bg-white p-8 lg:p-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Stay in the Loop</h2>
                        <p className="text-lg text-gray-600 mb-6">Subscribe to our newsletter for the latest updates on running events, tips, and exclusive club content.</p>
                        <div className="">
                            <form action="" className="flex flex-col sm:flex-row gap-4 mt-4 mb-2">
                                <input required autoComplete='email' type="email" className="flex-grow border px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#537BF8]" placeholder='Please enter your email' />
                                <ButtonMenu children='Subscribe' buttonColor="white" colorScheme="#537BF8" className="bg-[#537BF8] text-white font-bold py-6 px-7 rounded-lg transition-colors duration-300 hover:bg-indigo-600" />
                            </form>
                        </div>
                        <span className="text-gray-400 text-sm italic">Your email is safe with us, we don't spam.</span>
                        <Link href='instagram.com'>
                            <span className="flex gap-2 items-center justify-start mt-8 text-[#w] hover:text-indigo-600 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                <p>Follow us on Instagram</p>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter