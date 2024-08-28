import ButtonMenu from "./ui/button";

const RunnersJourney: React.FC = () => {
    return (
        <>
            <section className="mt-9 relative">
                <h1 className="text-4xl font-bold text-center text-gray-900">Your Stride Seekers Journey</h1>
                <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mt-4">Embark on a running adventure that is uniquely yours</p>
                <div className=" w-[80%] m-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 md:items-start space-y-12 md:space-y-0 mt-[60px]">
                    <div className="journey-card flex flex-col items-center gap-3 max-w-xs ">
                        <div className="rounded-full p-6 bg-blue-100 shadow-lg mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </div>
                        <h1 className="text-gray-800 font-semibold text-2xl">Discover</h1>
                        <p className="text-center text-gray-600">Find local running clubs and events tailored to your preferences.</p>
                    </div>

                    <div className="journey-card flex flex-col items-center gap-3 max-w-xs">
                        <div className="rounded-full p-6 bg-green-100 shadow-lg mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        </div>
                        <h1 className="text-gray-800 font-semibold text-2xl">Connect</h1>
                        <p className="text-center text-gray-600">Join clubs, make friends, and build your running community.</p>
                    </div>

                    <div className="journey-card flex flex-col items-center gap-3 max-w-xs">
                        <div className="rounded-full p-6 bg-yellow-100 shadow-lg mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></svg>
                        </div>
                        <h1 className="text-gray-800 font-semibold text-2xl">Participate</h1>
                        <p className="text-center text-gray-600">Attend events, group runs, and push your limits together.</p>
                    </div>
                </div>
                <svg className="w-[86%] h-64 m-auto absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 1200 128" preserveAspectRatio="none"><path d="M0,64 C300,128 900,0 1200,64" fill="none" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round" strokeDasharray="1px 1px" pathLength="1" strokeDashoffset="0px"></path><path d="M0,64 C300,128 900,0 1200,64" fill="none" stroke="#818CF8" strokeWidth="4" strokeLinecap="round" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path></svg>
                <div className="text-center mt-14">
                    <ButtonMenu
                        buttonColor="white"
                        colorScheme="blue"
                        className="py-7 px-9 rounded-full text-lg hover:bg-indigo-600 "
                    >
                        Start your journey
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-move-right ml-2"
                        >
                            <path d="M18 8L22 12L18 16" />
                            <path d="M2 12H22" />
                        </svg>
                    </ButtonMenu>
                </div>

            </section>

        </>
    )
}

export default RunnersJourney;