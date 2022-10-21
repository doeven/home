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
import LearnCard from './cards/LearnCard';
import packages_img from '../assets/images/packages.jpg';

const Packages = () => {

        // const [calculated, setCalculated] = useState('0');
        const [amount, setAmount] = useState(0);
        const [multiplier, setMultiplier] = useState(0);
        const [total, setTotal] = useState(0);

        

        const [packages, setPacakges] = useState({});

        useEffect(() => {
            http.get(`packages/active`).then( response => {
                console.log(response);
                setPacakges(response.data);
            })
            .catch(error => { console.log(error);  });    
        }, []);
        
        const calculateForm = () => {
            setTotal(amount * multiplier);
            console.log(`Total: ${total}, multiplier: ${multiplier}, amount: ${amount}`);
    
        }

        const timeDaysNum = (x) => {
            let days = x/24;
            return days;
        }

        const timeDays = (x) => {
            let days = x/24;
            return `${days} days`;
        }

        const percDaily = (x, y) => {
            // x is percentage
            // y is time in days

            let perc = x/y;

            return perc.toFixed(2);

        }
    
        

    return (
        <Flex
        direction="column"
        mb={10}
        >
            <Flex 
            justifyContent="center"
            alignItems="center"
            direction="column"
            >
                <Heading width={["80%","60%"]} textAlign="center" mt={["5%"]} fontSize={["1.5em", "2.5em"]}>Our Packages</Heading>
                
                <SimpleGrid columns={[1, 2, 2, 4]} spacing='10px' width={["100%", "90%", "90%", "80%"]}>


                {Object.keys(packages).length === 0 ? 
                null 
                : packages.map(
                    (element)=>{
                                            return <Box key={element.id}>
                                            <LearnCard
                                            img={element.img}
                                            title={element.title}
                                            description={element.description}
                                            duration={timeDays(element.time_hours)}
                                            min={element.min}
                                            max={element.max}
                                            mr={[0]}
                                            mb={[10,0]}
                                            roiAll={element.percent}
                                            roiDay={percDaily(element.percent, timeDaysNum(element.time_hours))}
                                            />
                                        </Box>
                                                

                    })
                }

                
                </SimpleGrid>
                
                
                
                <Flex width={["80%", "65%"]}  m={[10]}>

                

            



                </Flex>
                
            </Flex>
{/*


            <Flex
            mt={["5%", "8%"]}
            direction={["column", "row"]}
            px={[4]}
            py={[10]}
            // maxHeight={["100vh"]}
            
            >
                <Box mb={[10, 0]}>
                <Heading as="h3" fontSize={["2em", "3em"]} color="#016056">Let's Help You Hit The Ground Running</Heading>
                <Text opacity="0.5" my={[10]}>
                Paired with our 24/7/365 customer support, we provide you with tips, guides, and updates on new features to ensure every question you may ever have is answered
                </Text>
                <Image src="https://res.cloudinary.com/sophire/image/upload/v1637353751/Personal/fff-bbb/hub_eoisjf.webp"/>
                </Box>

                <Box ml={[0, "15%"]} >
                    <video width="90%" src="https://res.cloudinary.com/sophire/video/upload/v1637353768/Personal/fff-bbb/night_mmpx9u.mp4" />
                </Box>

            </Flex>


*/}



        </Flex>
    )
}

export default Packages;
