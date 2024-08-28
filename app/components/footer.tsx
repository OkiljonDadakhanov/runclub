import Link from 'next/link'
const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href='/'>
                            RunClubs
                        </Link>
                        <p className='mt-3 text-sm text-gray-600'>Connect with local run clubs and events near you. Discover, join, and participate in running communities and clubs tailored to your preferences and fitness level.</p>
                    </div>
                    <div className="">
                        <h3 className='font-semibold text-sm text-gray-800 uppercase tracking-wider mb-4'>Quick Links</h3>
                        <ul className='space-y-2'>
                            <li className='flex items-center text-gray-600 hover:text-[#537BF8] transition-colors cursor-pointer '> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail "><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> <span className='ml-1'>Support</span> </li>
                            <li className='flex items-center text-gray-600 hover:text-[#537BF8] transition-colors cursor-pointer'>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram "><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg><span className='ml-2'>Instagram</span></li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className='font-semibold text-sm text-gray-800 uppercase tracking-wider mb-4'>Legal</h3>
                        <ul className='space-y-2'>
                            <li className='text-gray-600 hover:text-[#537BF8] transition-colors cursor-pointer'>Terms of Service</li>
                            <li className='text-gray-600 hover:text-primary transition-colors cursor-pointer'>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                    <p className="text-sm text-gray-500">&copy; 2024 - All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer