import { Select } from '@chakra-ui/react'
const Events: React.FC = () => {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-r from-primary to-indigo-600 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-4">
                        <p className="text-indigo-200 hover:text-white transition-colors duration-200">Hosted By [Club name]</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Morning Run</h1>
                        <Select placeholder='RSVP' className=''>
                            <option value='option1'>Going</option>
                            <option value='option2'>Not going</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Events