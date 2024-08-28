import { accordionData, AccordionProps } from '../data/data';
import CustomAccordion from './ui/accordion';

const FaqSection: React.FC = () => {
    return (
        <section className='max-w-7xl mx-auto'>
            <div className="pt-24 pb-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
                <div className="flex flex-col text-left basis-1/2">
                    <p className="inline-block font-semibold text-primary mb-4 text-[#537bf8]">FAQ</p>
                    <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
                        Frequently Asked Questions
                    </p>
                </div>

                <div className="basis-1/2">
                    {accordionData.map((item: AccordionProps) => (
                        <CustomAccordion
                            title={item.title}
                            content={item.content}
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
