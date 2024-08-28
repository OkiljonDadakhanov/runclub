import CustomUnderline from "./ui/custom-underline";
import '../styles/hero.module.css'
import Link from "next/link";
import RunnersJourney from "./runners-journey";
import UpcomingEvents from "./upcoming-events";
import FeaturedRunClubs from "./featured-run-clubs";
import JoinUs from "./join-us";
import FaqSection from "./faq-section";
import Newsletter from "./newsletter";
import Footer from "./footer";

const Hero: React.FC = () => {
    return (
        <>
            <main className="bg-[#5379f7] text-white min-h-[480px] relative">
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,50 Q25,45 50,50 T100,50" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="none" opacity="1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                    <path d="M0,55 Q25,50 50,55 T100,55" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="none" opacity="1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                </svg>
                <div className="container w-[50%] m-auto pt-[55px] flex flex-col justify-between gap-3  ">

                    <h1 className="font-extrabold text-5xl text-center">
                        Find Your Stride: Discover <CustomUnderline text="Run Clubs" /> Near You
                    </h1>

                    <h3 className="text-xl leading-7 mb-6 text-center my-[40px]">
                        Embark on Your Running Journey: Connect with Like-Minded Runners for Fitness, Fun, and Friendship
                    </h3>

                    <button className="text-[#537bf8] bg-white font-bold py-3 px-8 rounded-full text-lg self-center cursor-pointer">
                        Explore more clubs
                    </button>
                    <section className="flex flex-col gap-3 mt-6">
                        <p className="flex gap-3 self-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide inline-block lucide-calendar"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></svg>
                            <span>Next event: Morning Run on 31/15/2024</span>


                        </p>
                        <p className="flex gap-3 self-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            <span>4d 22h 55m</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            <Link href='/' className="hover:underline text-yellow-300 cursor-pointer    ">
                                View Details
                            </Link>
                        </p>
                    </section>
                </div>
            </main>

            <UpcomingEvents />

            <FeaturedRunClubs />

            <RunnersJourney />

            <JoinUs />

            <FaqSection />

            <Newsletter />


        </>
    );
}

export default Hero;
