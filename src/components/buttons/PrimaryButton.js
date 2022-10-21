import React from 'react';
import{ 
    Button,
    
} from '@chakra-ui/react'

const PrimaryButton = ({text,boxShadow,size, bg, color, bgHover, px, py, onClose}) => {
    return (
        <Button
        bg={bg}
        px={px}
        py={py}
        color={color}
        cursor="pointer"
        size={size}
        _hover={{
            bg:{bgHover},
            boxShadow:{boxShadow}

        }}
        onClick={ e=>{onClose()} } 
        >
            {text}
        </Button>
    )
}

export default PrimaryButton
