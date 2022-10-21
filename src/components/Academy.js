import React from 'react';
import{ 
    Flex,
    Box,
    Text,
    Heading,
    Image,
    SimpleGrid,
    Button
} from '@chakra-ui/react';
import { CgQuote } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import avatar_male from '../assets/images/avatar_male.png';
import avatar_female from '../assets/images/avatar_female.png';
import PrimaryButton from './buttons/PrimaryButton';
import academy from '../assets/svgs/academy.svg';
import universe from '../assets/svgs/universe.svg';
import arrow from '../assets/svgs/arrow-right.svg';
// import ppp from '../assets/images/ppp.webp';
import cryptofees from '../assets/images/crypto_fees.jpeg';


const Academy = () => {
    return (
        <Flex
            direction={["column"]}
            bg="#f7f7f7"
        >
        <SimpleGrid columns={[1, 1, 2, 2]} spacing='5px' width={["100%", "100%", "90%", "100%"]}>

            <Flex direction={["column"]} p={["2rem", "2rem", "4rem", "4rem"]}>
                <Image src={academy} w="84px" h="70px" />
                <Heading as="h1" fontSize={["2rem", "2rem", "3.5rem", "3.5rem"]} fontWeight="800" lineHeight={["1", "1.5", "3.875rem", "3.875rem"]}>The {`${process.env.REACT_APP_NAME_STANDARD }`} Academy</Heading>
                <Text pt={["1rem", "1rem", "2rem", "2rem"]} pb={["1rem", "1rem", "2rem", "2rem"]}>Teaching you everything you need to know about Crypto</Text>
                <a href={`${process.env.REACT_APP_WEB_APP_URL}/register`} target="_blank">
                            <PrimaryButton
                            text="Get Started"
                            size="lg"
                            bg="#FFCE00"
                            color="#000"
                            bgHover="rgba(255, 206, 0, 0.8)"
                            />
                        </a>
            </Flex>

            <Flex position="relative" pb="1.5rem" w={["98%", "90%", "90%", "90%"]}>
                        <Box  display={["none", "none", "block", "block"]} style={{ zIndex: "1", backgroundColor: "#DADEE6", borderRadius: "1.5rem", bottom: "2.5rem", left: "2rem", position: "absolute", right: "-1.5rem", top: "2.5rem" }} borderRadius="1.5rem"></Box>
                        <Box  display={["none", "none", "block", "block"]} style={{ zIndex: "2", backgroundColor: "#F3F3F3", borderRadius: "1.5rem", inset: "0.5rem -1.2rem 0.5rem 2 ", position: "absolute", boxShadow: "var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)" }} borderRadius="1.5rem"></Box>
                        
                        <Box style={{ zIndex: "3", background: "#FFF", boxShadow:"1px 1px #EEE"}} borderRadius="1.5rem" position="relative">
                            
                            
                            <SimpleGrid columns={[1, 1, 2, 2]} spacing='5px' width={["100%", "100%", "90%", "100%"]}>
                            
                                        {/* <Image
                                        src={cryptofees} /> */}
                                        <Box backgroundImage={cryptofees} 
                                        style={{ backgroundPosition: "top", backgroundRepeat: "no-repeat" }}
                                        ></Box>
                                        <Flex pl="2rem" pr="3.5rem" pt="1rem" pb="1rem" position="relative" direction="column">
                                            <Heading fontSize={ [ "1rem", "1.2rem", "1.75rem", "2rem" ] }>All You Need to Know About Crypto Fees.</Heading>

                                            <Text fontSize=".875rem">Apart from the market price of bitcoin, each exchange charges their clients a sort of commission for using their services in the crypto space. These fees include Maker which adds to the order book liquidity through limit orders) and Taker which subtracts liquidity from an order book through market orders fees.</Text>
                                            <Text fontSize=".5rem">Cryptocurrency  1min</Text>
                                            
                                                <Box>
                                                    <Image 
                                                        position="absolute" style={{ bottom: "3%", left: "50%" }} pl="1rem" pr="1rem"
                                                    src={arrow} w={["30%", "10%", "10%", "30%"]} />
                                                </Box>
                                                

                                        </Flex>
                            </SimpleGrid>
                        </Box>
            </Flex>



        </SimpleGrid>
        </Flex>
    )
}

export default Academy;
