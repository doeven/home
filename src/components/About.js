import React from 'react';
import{ 
    Flex,
    Box,
    Text,
    Heading,
    Image,
} from '@chakra-ui/react';
import PrimaryButton from './buttons/PrimaryButton';



const About = () => {
    return (
        <Flex
        direction={['column']}
       
        
        >
            <Flex
             bg="#FFFAE5"
             direction={['column', 'row']}
             h={['70vh']}
             justifyContent="center"
             alignItems="center"
             textAlign="center"
            >
                <Box>
                    <Heading as="h3" fontSize={["2em", "3em"]} color="#016056">About Us</Heading>
                    <Text width={["80%", "80%", "80%"]} margin="auto" opacity="0.6" fontSize={["1em", "1.3em", "1.5em"]} my={[10]}>{`${process.env.REACT_APP_NAME_STANDARD}`} is an active trading company registered in Canada with Business Number (784850687RC0001 ), founded by a group of experts at the end of 2013. More on us <a href={`${process.env.REACT_APP_WEB_APP_URL}/about`} target="_blank">here</a></Text>
                    
                    <Box>
                        <a href={`${process.env.REACT_APP_WEB_APP_URL}/login`} target="_blank">
                            <PrimaryButton
                            text="Get started for free"
                            size="lg"
                            bg="#FFCE00"
                            color="#000"
                            bgHover="rgba(255, 206, 0, 0.8)"
                            />
                        </a>
                    </Box>
                </Box>
                {/* <Atlas/> */}
            </Flex>
            
            
        </Flex>
    )
}

export default About
