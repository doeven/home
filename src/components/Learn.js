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
import SimpleCards from './cards/SimpleCards';
import PrimaryButton from './buttons/PrimaryButton';
import arrow_vj5315 from '../assets/svgs/arrow_vj5315.svg';
import coin_new_rsd6xw from '../assets/svgs/coin_new_rsd6xw.svg';
import phone_calculator from '../assets/images/phone_calculator.png';
import packages_img from '../assets/images/packages.jpg';
import trading_small from '../assets/images/trading_small.jpg';
import wallet_money from '../assets/images/wallet_money.jpg';
import coin_laptop from '../assets/images/coin_laptop.jpg';
import bitcoin_hands from '../assets/images/bitcoin_hands.jpg';
import plane_yellow_oyov7j from '../assets/svgs/plane_yellow_oyov7j.svg';
import secure_rr3m3s from '../assets/images/secure_rr3m3s.png';
import easy_to_use_qfvf7w from '../assets/images/easy_to_use_qfvf7w.png';
import built_for_you_lcrfdg from '../assets/images/built_for_you_lcrfdg.png';
import calcbg from '../assets/svgs/calcbg.svg';

const Learn = () => {

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
    
        const calcAll = (e)=>{
            let amountTag = $('#calc_amount').val();
            let multiplier  = $('#package_id').val();
            let total = (parseFloat(amountTag) + (parseFloat(amountTag)*(parseFloat(multiplier)/100))).toFixed(2);
    
            if(multiplier == NaN){ $('#total_btn').html(`<span className="text">Select a Valid Package </span>`);}else{
                $('#total_btn').html(`<span className="text">Total: $${total} </span>`);
            }
    
    
        }

    return (
        <Flex
        direction="column"
        mb={10}
        backgroundImage={calcbg}
        style={{ backgroundPosition: "0 100%,calc(100% + 45px) 100px", backgroundSize: "auto,150px" }}
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
            mt={["5%", "5%"]}
            direction={["column", "row"]}
            px={[4]}
            py={[10]}
    
            >
               <Box flex="1" mr={[0, 10]}>
               <Image  src={phone_calculator} /> 
               </Box>
               <Box flex="3" mt={[10]}>
                <Heading as="h3" fontSize={["1.5em", "2em", "2em", "3em"]} mt={["10px !important",0,0,0]} mb={["10px !important",0,0,0]} color="#016056">Fund</Heading>
                <Heading as="h3" fontSize={["1.5em", "2em", "2em", "3em"]} mt={["10px !important",0,0,0]} mb={["10px !important",0,0,0]} >Calculator</Heading>
                <Text my={[3, 10, 10, 10]} fontSize={["0.8em", "1em", "1em", "1em"]}>
                    {`${process.env.REACT_APP_NAME_STANDARD}`} has been given the trust to manage a total of over 18 billion funds. This fund currently runs actively.</Text>
                <Grid width={["100%" , "70%"]} templateColumns={["repeat(1, 4fr)","repeat(2, 2fr)"]} gap={4}  >
                    
                    <Input
                        h={["2m", "3em"]}
                        placeholder="Enter Amount"
                        bgColor="#fff"
                        mr={[0,8]}
                        p={[2]}
                        borderRadius={["5px", "10px"]}
                        my={[6,0]}
                        id="calc_amount"
                        />

                    <Select placeholder='Select Package' onChange={ e=> calcAll() } id="package_id">
                        {Object.keys(packages).length === 0 ? 
                        null 
                        : packages.map(
                            (element)=>{
                                return <option name={element.title} id={element.title} value={element.percent}>{element.title}</option>
                            })
                        }
                    </Select>

                    <Button
                        bg="#000"
                        px="5px"
                        py="30px"
                        color="#FFF"
                        cursor="pointer"
                        size="100px"
                        _hover={{
                            bg:"#444",
                            boxShadow:"#457"

                        }}
                        id="total_btn"
                        >
                            $0
                    </Button>
                    {/* <SimpleCards  
                    text="Crypto answers at your fingertips"
                    src="https://res.cloudinary.com/sophire/image/upload/v1637357931/Personal/fff-bbb/plane_wm4vvx.svg"
                    /> */}
                </Grid>
               </Box>
            </Flex>

            
        </Flex>
    )
}

export default Learn
