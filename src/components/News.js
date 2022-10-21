import React from 'react';
import{ 
    Flex,
    Box,
    Text,
    Heading,
    Input,
    SimpleGrid
} from '@chakra-ui/react';
import NewsCard from './cards/NewsCard';
import { GrMail } from "react-icons/gr";
import PrimaryButton from './buttons/PrimaryButton';

const News = () => {
    return (
        <Flex
        direction="column"
        >
            {/* news section */}
            <Box
             p={[5, 10, 10, 10]}
            >
                <Heading my={[6, 10]} fontSize={["2em", "3em", "3em", "3em"]} fontWeight={["800"]} textAlign="center">In The News</Heading>
                <Flex
                // justifyContent="space-around"
               direction={["column", "row"]}
               pb={[10]}
                >
                <SimpleGrid columns={[1, 1, 2, 3]} spacing='5px' width={["100%", "100%", "90%", "100%"]}>

                    <NewsCard
                    url="https://edition.cnn.com"
                    title="CNN"
                    preview="Here's how you can receive your tax refund in crypto- 
                    The start of 2022 means it is tax season and taxpayers across the USA are filing their returns for the 2021 calendar year. Many are expecting to receive tax refunds and those who are due money back from the IRS can now get their refund in cryptocurrency.
                    Last week, Coinbase and TurboTax announced a partnership that will allow users to have their tax return converted into one of over 100 different cryptocurrencies, with Bitcoin and Ethereum both included."
                    image=""
                    />
                    <NewsCard
                    mx={[0,4]}
                    my={[4,0]}
                    url="https://coindesk.com"
                    title="Coindesk.com"
                    preview="Bitcoin Stalls Near Resistance; Lower Support at $40K- 
                    Bitcoin (BTC) reached a high of $45,488 over the past 24 hours, near a key resistance zone that preceded the current pullback. The cryptocurrency could find lower support at $40,000 into the Asia trading day.
                    The relative strength index (RSI) on the four-hour chart is declining from overbought territory, similar to what occurred in late December amid a short-term downtrend. This time, however, bitcoin has broken above previous resistance levels, which means the current pullback could stabilize soon."
                    image=""
                    />
                    <NewsCard
                    url="https://aljazeera.com"
                    title="Aljazeera.com"
                    preview="Crypto spring? Bitcoin hits $44,000, gains for five straight days

                    Bitcoin rose for a fifth consecutive day, the longest winning streak since September, as investors begin to re-embrace risk assets across global markets.
                    The largest cryptocurrency by market value gained as much as 5.8% to $44,110. XRP jumped as much as 17% to around 78 cents as so-called alt coins rallied more. Shiba Inu led memecoins higher, surging around 50% to around 0.000034 cents, according to CoinMarketCap."
                    image=""
                    />
                    </SimpleGrid>
                </Flex>
            </Box>
            {/* subsscribe to our newsletter */}
           
            <Box
            p={[2,10]}
            bgColor="#f7f7f7"
            >
                <Flex justifyContent="center" fontSize={["3em","4em"]}>
                    <GrMail color="#FFCE00" />
                </Flex>
                <Flex
                flexDirection="column"
                // justifyContent={["center"]}
                bgColor="#FCF1DA"
                py={[2,10]}
                // p={[10]}
                borderRadius={["10px", "40px"]}
                >   <Box width={["90%", "80%", "80%", "80%"]} margin="auto">
                    <Heading py={[3, 6, 10, 10]} fontSize={["1.5em","2em","3em","3em"]} fontWeight={["800"]} textAlign="center">Subscribe To Our Newsletter</Heading>
                    <Text textAlign="center" pb={[6,10]} opacity="0.5" fontStyle={["600"]} lineHeight={["1.4em", "2em", "2em", "2em"]} fontSize={["0.8em", "1em", "1em", "1em"]}>
                    Apart from a man tripping down the different crypto dips, there's a lot to explore in the Crypto space and we'd love to share that with you. Be it our product update, a new crypto fact, or a random recipe we pasted by accident.
                    </Text>
                    <Flex
                    direction={["column", "row"]}
                  
                    >
                        <Input
                        h={["2m", "3em"]}
                        placeholder="Enter your email"
                        bgColor="#fff"
                        mr={[0,8]}
                        p={[2]}
                        borderRadius={["5px", "10px"]}
                        my={[6,0]}
                        />
                        <PrimaryButton
                        text="Subscribe for free"
                        bg="#000"
                        color="#fff"
                        size={["sm", "lg"]}
                        px={[6,8]}
                        py={[4, 6]}
                        />
                    </Flex>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}

export default News
