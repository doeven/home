import React from 'react';
import{ 
    Flex,
    Box,
    Text,
    Heading,
    Image,
    Button,
} from '@chakra-ui/react';
import PrimaryButton from './buttons/PrimaryButton';
import globe from '../assets/svgs/globe.svg';
// import globeHome from '../assets/images/globeHome.png';
import globeHome from '../assets/images/bitcoinSpin.gif';
import brands from '../assets/svgs/brands.svg';
import bitcoin_3d_m9dz2v from '../assets/svgs/bitcoin_3d_m9dz2v.svg';




const Clutter = () => {
    return (
        <Flex
        direction={['column']}
        backgroundColor="#FFFAE5"
        
        >
            <Flex
            color="#000"
            direction={['column', 'row']}
            >
                <Flex flex="2" direction="column" p={["1.5em", "5%", "5%", "10%"]} >
                    
                    <Heading as="h3" fontSize={["1em", "2em", "2em", "3em"]} color="#016056 !important">Crypto Without the<br/>Clutter</Heading>
                    <Text mt={["0", "0", "0", "10"]} mb={["5", "0", "0", "10"]} fontSize={["0.7em", "0.9em", "1em", "1rem"]} w={["90%", "85%", "75%", "75%"]}>Ever imagined crypto being fun as well as functional? Well, we too have, and we have created Doeven investment and trading to do just that. Come on board and experience crypto the redefined way. </Text>

                        <a href={`${process.env.REACT_APP_WEB_APP_URL}/register`} target="_blank">
                            <PrimaryButton
                            text="Register"
                            size="lg"
                            bg="#FFCE00"
                            color="#000"
                            bgHover="rgba(255, 206, 0, 0.8)"
                            />
                        </a>
                    <Box>
                        <Image scr={brands} />
                    </Box>
                </Flex>
               
                <Box width={["100%","50%"]} mt={["20px", "50px", "70px", "200px"]} 
                    pt={["10px", "10px", "10px", "10px"]} 
                    pb={["10px", "10px", "10px", "10px"]} 
                    pl={["10", "10px", "10px", "10px"]} 
                    pr={["10px", "10px", "10px", "10px"]} 
                    
                    >
                    <Image src={bitcoin_3d_m9dz2v} w={["200px", "150px", "300px", "300px"]} ml={["20px", "50px", "100px", "180px"]} />
                </Box>

            </Flex>
            
        </Flex>
    )
}

export default Clutter
