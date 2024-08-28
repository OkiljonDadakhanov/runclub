import Image from 'next/image'
import img from '../../public/assets/run.jpg'
const JoinUs: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-20 px-4 sm:px-6 lg:px-8 mt-[120px]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between" style={{ opacity: 1, willChange: 'auto' }}>
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <h2 className="text-4xl font-bold text-white mb-6" style={{ opacity: 1, transform: 'none', willChange: 'auto' }}>
                            Join the Running Revolution
                        </h2>
                        <p className="text-xl text-white mb-8" style={{ opacity: 1, transform: 'none', willChange: 'auto' }}>
                            Connect with fellow runners, discover exciting events, and push your limits. Your next great run is just a click away.
                        </p>
                        <div className="space-y-4" style={{ opacity: 1, transform: 'none', willChange: 'auto' }}>
                            <div className="flex items-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6 mr-3">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                                <span>Join a vibrant community of runners</span>
                            </div>
                            <div className="flex items-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-6 h-6 mr-3">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                </svg>
                                <span>Participate in local events</span>
                            </div>
                            <div className="flex items-center text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-6 h-6 mr-3">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                                <span>Discover new running routes and clubs</span>
                            </div>
                            <div>
                                <button className="text-[#537bf8] bg-white font-bold py-3 px-8 rounded-full text-lg self-center">
                                    Sign Up Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center" >
                        {/* <Image
                            src={img}
                            height={500}
                            width={500}
                            alt='Images'
                        /> */}

                    </div>
                </div>
            </div>
        </section >
    );
}

export default JoinUs;
