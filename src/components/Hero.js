import React, {useState, useEffect} from 'react';
import{ 
    Flex,
    Box,
    Text,
    Grid,
    Heading,
    Image,
    Spacer,
    SimpleGrid
} from '@chakra-ui/react';
import axios from 'axios';
import hero_smartphone from '../assets/images/hero_smartphone.png';
import avatar_male from '../assets/images/avatar_male.png';
import avatar_female from '../assets/images/avatar_female.png';
import arrowup from '../assets/svgs/arrow-up.svg';
import btccoin from '../assets/svgs/btc-coin.svg';


import Nav from './Nav';

import HeroCard from './cards/HeroCard';

const Hero = () => {
    const [btcPrice, setBtcPrice] = useState([]);
    const [allPrices, setAllPrices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  
  
  useEffect(() => {
    axios
      .get('https://www.blockchain.com/ticker')
      .then((response) => {
        // console.log((1 / response.data.USD.last).toFixed(8));
        // console.log(response.data);
        setAllPrices(response.data);
        setBtcPrice((1 / response.data.USD.last).toFixed(8));
        setIsLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    return (
        <Flex
        direction="column"
        bgImage='url("./images/homepagebg.png")'
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height={["70vh", "70vh", "100%", "90vh"]}
        color="white"
        overflow="hidden"
        >
            <Nav />
            
            {/* header text */}
            <Flex
            direction={['column',"row"]}
            justifyContent="center"
            alignItems="center"
            height="100%"
            >

        <SimpleGrid columns={[1, 1, 3, 3]} spacing='5px' width={["100%", "100%", "90%", "100%"]}>


                <Box display={["none", "none", "block", "block"]} mt={["20%", 0]} ml={[8]} style={{ position: "relative", top: "30%" }}>
                    <Box>
                        <Image src={btccoin} width="100px" />
                    </Box>
                    <Box pt="20px">
                        <Image src={arrowup} />
                    </Box>
                </Box>
                
                <Box mt={["-30px", "0", "0", 0]} ml={[8]} position="relative" style={{ top: "30%" }}>
                    <Heading as="h1" fontSize={["2em", "2em", "2em", "3.5em"]} fontWeight="extrabold">
                        Global Leading Investment Firm
                    </Heading>
                    <Text fontSize={["0.8em", "1em", "1em", "1.2em"]}>{process.env.REACT_APP_NAME_STANDARD} and Trading. Financial freedom is oxygen to us.</Text>
                </Box>
                <Box mt={[10]}  display={["none", "none", "block", "block"]} position="relative" top={["10%", "10%", "13%", "2%"]}>
                    <Image  src={hero_smartphone} />
                </Box>
        </SimpleGrid>


            </Flex>

            
            <Box
            px={4}
            py={4}
            position="sticky"
            width="100%"
            bottom="0"
            borderTop="1px solid #fff"
            display={['none', 'none', 'none', 'block']}
            >
                <Grid templateColumns={["repeat(2, 1fr)", "repeat(2, 3fr)", "repeat(2, 3fr)", "repeat(7, 1fr)"]} gap={2}  >
                {
                    isLoading && 
                
                    <>
                    <HeroCard 
                    btcName={`BTC/${allPrices.USD.symbol}`}
                    amount={`${allPrices.USD.symbol} ${allPrices.USD.last}`}
                    />
                    <HeroCard 
                    btcName={`BTC/${allPrices.GBP.symbol}`}
                    amount={`${allPrices.GBP.symbol} ${allPrices.GBP.last}`}
                    />
                    <HeroCard 
                    btcName={`BTC/${allPrices.CAD.symbol}`}
                    amount={`${allPrices.CAD.symbol} ${allPrices.CAD.last}`}
                    />
                    <HeroCard 
                    btcName={`BTC/${allPrices.EUR.symbol}`}
                    amount={`${allPrices.EUR.symbol} ${allPrices.EUR.last}`}
                    />
                    <HeroCard 
                    btcName={`BTC/${allPrices.AUD.symbol}`}
                    amount={`${allPrices.AUD.symbol} ${allPrices.AUD.last}`}
                    />
                    <HeroCard 
                    btcName={`BTC/${allPrices.CNY.symbol}`}
                    amount={`${allPrices.CNY.symbol} ${allPrices.CNY.last}`}
                    />
                    <HeroCard 
                    btcName={`BTC/${allPrices.JPY.symbol}`}
                    amount={`${allPrices.JPY.symbol} ${allPrices.JPY.last}`}
                    />
                    </>

                    }
                </Grid>
            </Box>

           


        </Flex>
    )
}

export default Hero
