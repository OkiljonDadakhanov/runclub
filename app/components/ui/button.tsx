import { Button } from '@chakra-ui/react';
import { ClassNames } from '@emotion/react';

interface ButtonMenuProps {
    children: React.ReactNode;
    size?: string;
    colorScheme?: string;
    buttonColor?: string;
    className?: string;
}

const ButtonMenu: React.FC<ButtonMenuProps> = ({ children, size, colorScheme, buttonColor, className }) => {
    const buttonStyle = {
        color: buttonColor,
    };

    return (
        <Button
            colorScheme={colorScheme}
            size={size}
            style={buttonStyle}
            className={className}
        >
            {children}
        </Button>
    );
};

export default ButtonMenu;
