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
import SimpleCards from './cards/SimpleCards';
import wallet_money from '../assets/images/wallet_money.jpg';
import plane_yellow_oyov7j from '../assets/svgs/plane_yellow_oyov7j.svg';
import howImage from '../assets/svgs/howImage.svg';

const How = () => {

    return (
        <Flex
        direction="column"
        mb={10}
        >

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

            <Flex
            mt={["5%", "8%"]}
            direction={["column", "row-reverse"]}
            px={[4]}
            py={[10]}
            bgColor="#fff"
            id="how"
        
            >
               <Flex flex="1" mr={[0, 10]}
                backgroundImage={howImage}
                style={{ backgroundPosition: "top", backgroundSize: "18%", backgroundRepeat: "no-repeat" }}
               >
               <Image width="100%" mr={[0, 10]} src={wallet_money} />
               {/* <Image width="45%" src={coin_laptop}/>  */}
               </Flex>
               <Box flex="1" mt={[10]} ml={[0, 8, 8, 8]}>
                <Heading as="h3" fontSize={["2em", "3em"]} >How it works!</Heading>
                <Text my={[10]} opacity="0.5">
                    The process to using our platform to earn money from your investment is quite straight to the point.</Text>
                <Grid width={["100%" , "70%"]} templateColumns={["repeat(1, 4fr)"]} gap={4}  >
                    <SimpleCards  
                    text="Fund your account"
                    src={plane_yellow_oyov7j}
                    />
                    <SimpleCards  
                    text="Invest in a package"
                    src={plane_yellow_oyov7j}
                    />
                    <SimpleCards  
                    text="Earn interest daily"
                    src={plane_yellow_oyov7j}
                    />
                    
                </Grid>
               </Box>
            </Flex>




        </Flex>
    )
}

export default How;
