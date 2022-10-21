import React, {useState} from 'react';
import{ 
    Flex,
    Box,
    Text,
    Heading,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Image,
} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import $ from 'jquery';

import { GiHamburgerMenu } from "react-icons/gi";
import logo_light from '../assets/images/logo-light.png'
import logo_dark from '../assets/images/logo-dark.png'


import PrimaryButton from './buttons/PrimaryButton';
import NavButton from './buttons/NavButton';
import NavButtonDrop from './buttons/NavButtonDrop';
import NavButtonDrop2 from './buttons/NavButtonDrop2';
import NavButtonDropMobile from './buttons/NavButtonDropMobile';
import NavButtonDropMobile2 from './buttons/NavButtonDropMobile2';
import SecondaryButton from './buttons/SecondaryButton';

const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const burgerRef = React.useRef()
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <>
        <Box
            position="fixed"
            width="100%"
            py={'2px'}
            px={4}
            bgColor={colorChange ? '#fff' : 'transparent'}
            color={colorChange ? 'black' : 'white'}
            zIndex="1"
           
            >
                <Flex 
                justifyContent="space-between"
                >
                    <Box>
                        <Text as={Link} to='/' fontSize="4xl" fontWeight="bold" cursor="pointer">
                            <Image 
                                src={logo_light}
                                mt="10px"
                              />
                        </Text>

                    </Box>
                     {/* {mobile nav open} */}
                     <Box
                    ref={burgerRef} onClick={onOpen}
                    display={["flex","flex", "flex", "none"]}
                    alignSelf='center'
                    >
                    <GiHamburgerMenu fontSize='1.5em' />
                    
                    </Box>
                    <Flex
                    display={["none","none", "none", "flex"]}
                    justifyContent="center"
                    alignItems="center"
                    >
                        <NavButton text="Home" as={Link} to='/' size="13px" />
                        <NavButton text="About Us" as={Link} to='/about' size="13px" />
                        <NavButtonDrop text="Products" as={Link} to='/about' size="13px" />
                        <NavButton text="How it works"  as={Link} to='/#how' size="13px" />
                        <NavButtonDrop2 text="Resources" as={Link} to='/#resources' size="13px" />
                        <NavButton text="Wallet" as={Link} to='/wallet' size="13px" />
                        <div id="google_translate_element"></div>
                        
                    </Flex>
                    <Flex
                    justifyContent="center"
                    alignItems="center"
                    display={["none","none", "none", "flex"]}
                    >
                        <a href={`${process.env.REACT_APP_WEB_APP_URL}/login`} target="_blank">
                            <SecondaryButton text="Sign In" size="sm" mr={4}/>
                        </a>
                        <a href={`${process.env.REACT_APP_WEB_APP_URL}/register`} target="_blank">
                            <PrimaryButton
                            text="Create Account"
                            size="sm"
                            bg="#FFCE00"
                            color="#000"
                            bgHover="rgba(255, 206, 0, 0.8)"
                            />
                        </a>
                    </Flex>
                </Flex>
            </Box>
            {/* mobile nav */}

            <Box  bgColor="#bafff8">
                
                <Drawer
                    isOpen={isOpen}
                    placement="top"
                    onClose={onClose}
                    finalFocusRef={burgerRef}
                    display={['none', 'none', 'flex']} 
                    direction='column'
                    mr='10'
                    borderRight='1px solid #c7c7c7'
                    py={['2','2','10']}
                    px={['10']}
                    fontWeight='600'
                   
                >
                    <DrawerOverlay />
                    
                    <DrawerContent bgColor='#f7f7f7' >
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Box
                            borderBottom='1px solid #e7e7e7'
                           
                            >
                              {/* <Heading>Brand Name</Heading>  */}
                              <Image 
                                src={logo_dark}
                                mt="5px"
                                mb="5px"
                              />
                        </Box>
                    </DrawerHeader>

                    <DrawerBody
                    >
                        <Flex
                        direction="column"
                        my={['1']}
                        justifyContent="left"
                        alignItems="baseline"
                       
                        >
                            <NavButton text="Home" as={Link} to='/' size="12px" />
                            <NavButton text="About Us" as={Link} to='/about' size="12px" />
                            <NavButtonDropMobile text="Products" as={Link} to='/about' size="12px" />
                            <NavButton text="How it works"  as={Link} to='/#how' size="12px" />
                            <NavButtonDropMobile2 text="Resources" as={Link} to='/#resources' size="12px" />
                            <NavButton text="Wallet" as={Link} to='/wallet' size="12px" />
                        </Flex>
                        
                          
                   
                    </DrawerBody>
                    <DrawerFooter >
                        <Flex
                        // justifyContent="center"
                        // alignItems="center"
                        direction="column"
                      
                        width="100%"
                        >
                            <div id="google_translate_element"></div>

                            <a href={`${process.env.REACT_APP_WEB_APP_URL}/login`} target="_blank">
                                <SecondaryButton text="Sign In" size="sm"  onClose={onClose}/>
                            </a>
                            <a href={`${process.env.REACT_APP_WEB_APP_URL}/register`} target="_blank">
                                <PrimaryButton
                                text="Create Account"
                                size="sm"
                                bg="#FFCE00"
                                color="#000"
                                bgHover="rgba(255, 206, 0, 0.8)"
                                onClose={onClose}
                                />
                            </a>
                        </Flex>
                    </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Box>
        </>
    )
}

export default Nav
