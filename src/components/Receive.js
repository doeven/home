import React, {useState, useEffect} from 'react';
import{ 
    Flex,
    Box,
    Text,
    Heading,
    Image,
    Grid,
    Input,
    Select,
    Button,
    SimpleGrid
} from '@chakra-ui/react';
import $ from 'jquery';
import {http} from '../funcs';
import PrimaryButton from './buttons/PrimaryButton';
import arrow_vj5315 from '../assets/svgs/arrow_vj5315.svg';
import coin_new_rsd6xw from '../assets/svgs/coin_new_rsd6xw.svg';
import bitcoin_hands from '../assets/images/bitcoin_hands.jpg';

const Receive = () => {

    return (
        <Flex
        direction="column"
        mb={10}
        >




            
            <Flex width={["100%", "60%"]} textAlign="center" margin="auto" my={[3, 10, 10, 10]} style={{ padding: "0rem 0.75rem 1.5rem", textAlign: "center", justifyContent:"center", width: "100%" }}>
                <Heading as="h3" color="#000 !important" fontSize={["2em", "3.375rem"]} fontWeight="800" >More Awesome Products In Our Universe</Heading>
            </Flex>
           
            <Flex
            bg="#1D1E2C"
            direction={["column", "row"]}
            color="#fff"
            p={[3, 10, 10, 10]}
            >
                <Flex direction={["column"]} width={["90%", "60%"]} margin="auto">
                    <Heading as="h3" fontSize={["2em", "3em"]} >Receive your Payments In Crypto</Heading>
                    <Text my={[10]} fontSize={["0.7rem", "1em", "1em", "1em"]}>{`${process.env.REACT_APP_NAME_STANDARD}`} and trading helps you make the best investment decision to quickly and most efficiently make the most return on investment with your crypto asset. After investment maturity period, we pay directly into your crypto wallet automatically and seamlessly.</Text>
                    <Box width={["80%", "50%"]}>
                        <a href={`${process.env.REACT_APP_WEB_APP_URL}/register`} target="_blank">
                            <PrimaryButton
                            text="Register"
                            size="lg"
                            bg="#FFCE00"
                            color="#000"
                            bgHover="rgba(255, 206, 0, 0.8)"
                            />
                        </a>
                    </Box>
                </Flex>
                <Flex justifyContent="center" direction={["column", "row"]}>
                    <Box mt={[0, "100px"]} mr={[10]} display={["none", "none", "none", "flex"]}>
                        <Image width="100%" src={arrow_vj5315} />
                        <Image src={coin_new_rsd6xw.svg}/>
                    </Box>
                    <Image src={bitcoin_hands}  p="10px" />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Receive
