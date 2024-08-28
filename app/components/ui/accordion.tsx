'use client'

import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
} from '@chakra-ui/react';

import { MinusIcon, AddIcon } from '@chakra-ui/icons';

interface CustomAccordionProps {
    title: string;
    content: React.ReactNode;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({ title, content }) => {
    return (
        <Accordion allowMultiple>
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton
                                _expanded={{ color: '#537bf8' }}
                                p={4}
                            >
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    fontWeight="semibold"
                                    fontSize="lg"
                                >
                                    {title}
                                </Box>
                                <Box ml="auto" color="black"> {/* Ensures icons do not inherit text color */}
                                    {isExpanded ? (
                                        <MinusIcon fontSize="16px" /> // Larger icon size
                                    ) : (
                                        <AddIcon fontSize="16px" /> // Larger icon size
                                    )}
                                </Box>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {content}
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        </Accordion>
    );
};

export default CustomAccordion;
