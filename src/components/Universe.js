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
// import ppp from '../assets/images/ppp.webp';
import universe from '../assets/svgs/universe.svg';
import arrow from '../assets/svgs/arrow-right.svg';



const Universe = () => {
    return (
        <Flex
        direction={['column']}
        backgroundImage={universe}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
       
        
        >
            <Flex
             direction={['column', 'row']}
             justifyContent="center"
             alignItems="center"
             flexGrow="1"
             pl="1em"
             pr="1em"
            >
                <Flex
                    direction="column"
                    p={[".5rem", "2rem", "3rem", "5rem"]}
                >
                    <Box>
                        <Heading as="h3" fontSize={["2em", "3em"]} mt="10px !important" mb="10px !important" color="#016056">{`${process.env.REACT_APP_NAME_STANDARD}`}</Heading>
                        <Heading as="h3" fontSize={["2em", "3em"]} mt="10px !important" mb="10px !important" color="#000 !important">Crypto is Oxygen To Us</Heading>
                    </Box>

                    <Box>
                        <Text width={["90%", "80%", "41%", "41%"]} opacity="0.6" fontSize={["0.7rem", "1rem", "1rem"]} mt="20px" my={[5]}>Over here in doeven investment and trading, We are in the business of creating mind-blowing solutions. We like to think of ourselves as superheroes here at doeven investment and trading. We use our creativity to develop new ideas and solutions to problems. This simple process is based on separating divergent and convergent thinking styles, so that you can focus your mind on creating at the first stage, and then evaluating at the second stage.
We are in the business of involving a solid structure of identifying problems, generating new ideas, evaluating options, and then formulating a plan for successful implementation. many tools and resources that you'll find here at Doeven investment and trading. Subscribe to our free newsletter, or join us and really supercharge your career!.</Text>
                    </Box>
                    
                    <Box position="relative" p="1.5rem" w={["fit-content", "fit-content", "fit-content", "fit-content"]}>
                        <Box style={{ zIndex: "1", backgroundColor: "#DADEE6", borderRadius: "4rem", bottom: "0", left: "1.5rem", position: "absolute", right: "1.5rem", top: "0" }} borderRadius="4rem"></Box>
                        <Box style={{ zIndex: "2", backgroundColor: "#F3F3F3", borderRadius: "4rem", inset: "0 0.5rem 0.5rem 0.75rem ", position: "absolute", boxShadow: "var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)" }} borderRadius="4rem"></Box>
                        
                        <Box style={{ zIndex: "3", background: "#FFF", boxShadow:"1px 1px #EEE"}} borderRadius="4rem" position="relative">
                            {/* <Image
                            src={ppp} /> */}
                            
                            <Box p="40px 10px 0 10px" style={{ margin: "10px auto" }}  display={["none", "block", "block", "block"]}>
                                        <iframe width="430" height="315" src="https://www.youtube.com/embed/TGH8URlRMAc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Box>

                            <Box p="40px 5px 0 10px" style={{ margin: "10px auto" }}  display={["block", "none", "none", "none"]}>
                                        <iframe width="300" height="250" src="https://www.youtube.com/embed/TGH8URlRMAc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Box>

                            <Flex pl="2rem" pr="3.5rem" pt="1rem" pb="1rem" position="relative">
                                {/* <Heading fontSize={ [ "1rem", "1.2rem", "1.75rem", "2rem" ] }>Meet the Humans of Patricia</Heading> */}
                                <Box>
                                    {/* <Image 
                                        position="absolute" style={{ top: "50%" }} pl="1rem" pr="1rem"
                                    src={arrow} w={["60px", "60px", "70px", "150px"]}/> */}
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
                {/* <Atlas/> */}
            </Flex>
            
        </Flex>
    )
}

export default Universe
