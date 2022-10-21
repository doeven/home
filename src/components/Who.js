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

const Who = () => {

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
            let total = (parseFloat(amountTag) + (parseFloat(amountTag)*(parseFloat(multiplier)))).toFixed(2);
    
            if(multiplier == NaN){ $('#total_btn').html(`<span className="text">Select a Valid Package </span>`);}else{
                $('#total_btn').html(`<span className="text">Total: $${total} </span>`);
            }
    
    
        }

    return (
        <Flex
        direction="column"
        mb={10}
        >


            <Flex minH={["100vh","80vh"]}  bg="#DDF4F2" justifyContent="center" alignItems="center" px={[10]}>
                <Grid  textAlign="center"  templateColumns={["repeat(1, 3fr)", "repeat(3, 1fr)"]} gap={6}>

                    <Box>
                        <Flex justifyContent="center">
                            <Image src={secure_rr3m3s} />
                        </Flex>
                        <Heading my={[10]} as="h3" fontSize={["1.5em", "1.7em"]} >We are secure and trustworthy</Heading>
                        <Text opacity="0.5" fontSize="0.8em">This platform is globally trusted for crypto and commodity investments. You should be confident to say that your crypto is in the right hands.</Text>
                    </Box>
                    <Box borderRight={["none","1px solid #B7D7D3"]} borderLeft={["none","1px solid #B7D7D3"]} px={[0,6]}>
                        <Flex justifyContent="center">  
                            <Image src={easy_to_use_qfvf7w} />
                        </Flex>
                        <Heading my={[10]} as="h3" fontSize={["1.5em", "1.7em"]} >We are easy-to-use</Heading>
                        <Text opacity="0.5" fontSize="0.8em">Of course, we all love easy-to-use platforms, that is the major reason providing you with seamless services you can enjoy without breaking a sweat is our top priority.</Text>
                    </Box>
                    <Box>
                        <Flex justifyContent="center">
                            <Image src={built_for_you_lcrfdg} />
                        </Flex>
                        <Heading my={[10]} as="h3" fontSize={["1.5em", "1.7em"]} >Built with User in mind</Heading>
                        <Text opacity="0.5" fontSize="0.8em">Every one of our services is built with you in mind. We can assure all users the best crypto experience there is around this space.</Text>
                    </Box>
                </Grid>
            </Flex>

            
        </Flex>
    )
}

export default Who;
