import React from 'react';
import{ 
    Button,
    
} from '@chakra-ui/react'
import $ from 'jquery';


const NavButton = ({text,to,size, onClose} ) => {
    return (
        <Button
        bg="rgba(0,0,0,0)"
        color="#00"
        cursor="pointer"
        as="a"
        href={to}
        fontSize={size}
       
        _hover={{
            bg: 'rgba(0,0,0,0.1)',
         

        }}

        onClick={ e=>{onClose()} } 
        >
            {text}
        </Button>
    )
}

export default NavButton
