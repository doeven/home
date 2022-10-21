import React from 'react';
import{ 
    Flex,
    Box,
    Text,
    Heading,
    Image,
} from '@chakra-ui/react';
import PrimaryButton from './buttons/PrimaryButton';
import values from '../assets/images/values.jpg';
import bgvalue from '../assets/svgs/bg-value.svg';



const Value = () => {
    return (
        <Flex
        direction={['column']}       
        bg="#016056"
        backgroundImage={bgvalue}
        style={{ backgroundPosition: "0 100%, 100% 100%", backgroundRepeat: "no-repeat", backgroundSize: "auto 40%,auto 60%"  }}
        
        >
            <Flex
            color="#fff"
            direction={['column', 'row']}
            >
                <Flex flex="2" direction="column" p={["5%", "5%", "5%", "10%"]} >
                    
                    <Heading as="h3" fontSize={["2em", "2em", "2em", "3em"]} color="#FFFFFF !important">Your Gateway To Crypto</Heading>
                    <Text mt={["0", "0", "0", "10"]} fontSize={["0.8em", "1em", "1em", "1em"]}>We are with you every step of the way, providing you with tips and tricks to becoming a crypto guru.</Text>
                </Flex>
               
                <Box width={["100%","50%"]}><Image src={values} /></Box>

            </Flex>
            
        </Flex>
    )
}

export default Value
