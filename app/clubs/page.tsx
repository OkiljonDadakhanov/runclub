import { Input } from '@chakra-ui/react'
import FeaturedRunClubs from '../components/featured-run-clubs'

const Clubs: React.FC = () => {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-r from-[#537BF8] to-indigo-600">
                <div className="max-w-screen-lg mx-auto py-16 px-4 sm:px-6 lg:px-8 text-left">
                    <h1 className="text-4xl md:text-5xl mb-4 text-white leading-tight font-bold">Discover Your Perfect Run Club</h1>
                    <p className="text-lg md:text-xl text-white md:w-3/4 lg:w-2/3">Explore clubs near you, find popular groups, or match your experience level. Your next great run is just around the corner.</p>
                </div>
            </section>
            <section className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                        <div className='flex items-center mb-4 md:mb-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-footprints"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" /><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" /><path d="M16 17h4" /><path d="M4 13h4" /></svg>
                            <div className='flex flex-col ml-2'>
                                <h1 className='text-lg font-bold text-gray-800'>Find a run club near you</h1>
                                <p className='text-sm text-gray-600'>Search by club name or location.</p>
                            </div>

                        </div>
                    </div>
                    <div className="md:flex md:flex-row gap-3 w-full">
                        <Input placeholder='Search club name' size='lg' />
                        <Input placeholder='Enter location' size='lg' />
                    </div>
                </div>
                <FeaturedRunClubs />
            </section>
        </main>
    )
}

export default Clubs