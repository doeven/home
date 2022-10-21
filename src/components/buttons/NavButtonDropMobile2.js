import React from 'react';
import{ 
    Button,
    Box,
    Text,
    Flex
    
} from '@chakra-ui/react';
import { Link as Reactlink } from 'react-router-dom';


import { FcFaq, FcAddressBook, FcRadarPlot, FcEngineering } from "react-icons/fc";

import $ from 'jquery';


const NavButtonDropMobile2 = ({text,to,size, onClose} ) => {
    return (
        <>
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
                $('#menu4').toggle();
                $('#menuBtnResources').toggleClass('menuBtnNinetyFlip');
                $('#menu3').hide();

                // onClose();
            } } 
            >
                <span style={{ padding: "0 5px 0 0" }}>
                    {text}
                </span>
                <svg width="10" height="15" viewBox="0 0 10 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="menuBtnResources" className="menuBtnNinety">
                    <path d="M2.42891 1.27587L9.32695 6.69827C9.82026 7.0864 9.82026 7.94982 9.32695 8.33795L2.42891 13.7603C1.93521 14.1485 1.24422 14.4736 0.847359 13.7603C0.523501 12.5098 1.7606 11.0037 1.7606 7.319C1.7606 4.09615 0.503677 1.89265 0.847359 1.27587C1.05361 0.477269 1.93521 0.888129 2.42891 1.27587Z"></path>
                </svg>
            </Button>
            
            <Box id="menu4" w="85vw" background="#FFF"  mt="40px" ml="-110px" position="relative" border="1px solid #ddd" style={{ display:"none" }}>
                <Flex as={Reactlink} to="/faq" direction="row" p="5px" style={{ alignItems: "center", borderBottom: "1px solid #DDD" }}  _hover={{bg:"#f4f4f4", borderRadius:"50px"}} >
                    <FcFaq fontSize="25px" pl="10px" /> <Text fontWeight="500" p="10px" fontSize="12px" color="#000">FAQs</Text>
                </Flex>
                <Flex as={Reactlink} to="/resources/dictionary" direction="row" p="5px" style={{ alignItems: "center", borderBottom: "1px solid #DDD" }}  _hover={{bg:"#f4f4f4", borderRadius:"50px"}} >
                    <FcAddressBook fontSize="25px" pl="10px"  /> <Text fontWeight="500" p="10px" fontSize="12px" color="#000">Dictionary</Text>
                </Flex>
                <Flex as={Reactlink} to="/affiliates" direction="row" p="5px" style={{ alignItems: "center", borderBottom: "1px solid #DDD" }}  _hover={{bg:"#f4f4f4", borderRadius:"50px"}} >
                    <FcRadarPlot fontSize="25px" pl="10px"  /> <Text fontWeight="500" p="10px" fontSize="12px" color="#000">Affiliates</Text>
                </Flex>
                <Flex as={Reactlink} to="/security" direction="row" p="5px" style={{ alignItems: "center"}}  _hover={{bg:"#f4f4f4", borderRadius:"50px"}} >
                    <FcEngineering fontSize="25px" pl="10px"  /> <Text fontWeight="500" p="10px" fontSize="12px" color="#000">Security</Text>
                </Flex>

            </Box>
            </Flex>
        </>
    )
}

export default NavButtonDropMobile2
