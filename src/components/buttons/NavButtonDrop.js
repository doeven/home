import React from 'react';
import{ 
    Button,
    Box,
    Text,
    Flex,
    
} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import $ from 'jquery';


const NavButtonDrop = ({text,to,size, onClose} ) => {
    return (
        <Flex position="">
            <Button
            bg="rgba(0,0,0,0)"
            color="#00"
            cursor="pointer"
            as="a"
            _hover={{
                bg: 'rgba(0,0,0,0.1)',
                
            

            }}
            fontSize={size}

            onClick={ e=>{
                $('#menu1').toggle();
                $('#menuBtnProducts').toggleClass('menuBtnNinetyFlip');
                $('#menu2').hide();
                // onClose();
            } } 
            >
                <span style={{ padding: "0 5px 00" }}>
                    {text}
                </span>
                <svg width="10" height="15" viewBox="0 0 10 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="menuBtnProducts" className="menuBtnNinety">
                    <path d="M2.42891 1.27587L9.32695 6.69827C9.82026 7.0864 9.82026 7.94982 9.32695 8.33795L2.42891 13.7603C1.93521 14.1485 1.24422 14.4736 0.847359 13.7603C0.523501 12.5098 1.7606 11.0037 1.7606 7.319C1.7606 4.09615 0.503677 1.89265 0.847359 1.27587C1.05361 0.477269 1.93521 0.888129 2.42891 1.27587Z"></path>
                </svg>
            </Button>
            
            <Box id="menu1" w="170px" background="#FFF" mt="40px" ml="5px" position="absolute" border="1px solid #ddd" borderRadius="20px" style={{ display:"none" }}>
                <Box width="100%" borderBottom="1px solid #ddd" as={Link} to="/oil-and-gas">
                    <Text p="10px" color="#000" fontSize="12px"  _hover={{
                            bg:"#eee", borderRadius:"50px"}}>Oil & Gas</Text>
                </Box>
                <Box width="100%" borderBottom="1px solid #ddd" as={Link} to="/forex">
                    <Text p="10px" color="#000" fontSize="12px"  _hover={{
                            bg:"#eee", borderRadius:"50px"}}>Forex</Text>
                </Box>
                <Box width="100%" borderBottom="1px solid #ddd" as={Link} to="/agric-and-infrastructure">
                    <Text p="10px" color="#000" fontSize="12px"  _hover={{
                            bg:"#eee", borderRadius:"50px"}}>Agriculture</Text>
                </Box>
                <Box width="100%" borderBottom="1px solid #ddd" as={Link} to="/real-estate">
                    <Text p="10px" color="#000" fontSize="12px"  _hover={{
                            bg:"#eee", borderRadius:"50px"}}>Real Estate</Text>
                </Box>
                <Box width="100%" borderBottom="1px solid #ddd" as={Link} to="/gold">
                    <Text p="10px" color="#000" fontSize="12px"  _hover={{
                            bg:"#eee", borderRadius:"50px"}}>Gold</Text>
                </Box>
            </Box>
            </Flex>

    )
}

export default NavButtonDrop
