import React from 'react';
import{ 
Button
} from '@chakra-ui/react'

const SecondaryButton = ({size,text,to,mr, ml, onClose}) => {
    return (
        <Button
     
        bg="#fff"
        color="#013324"
        cursor="pointer"
        href={to}
        size={size}
        _hover={{
            bg:"rgba(255, 255, 255, 0.7)",
        }}
        mr={mr}
        ml={ml}
        mt="5px"
        mb="5px"
        onClick={ e=>{onClose()} } 
        border="1px solid #bbb"
        >
            {text}
        </Button>
    )
}

export default SecondaryButton
