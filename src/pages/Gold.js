import React, { useEffect } from 'react';
import{ 
    Box,
    Heading,
    Flex,
    Text,
    Image,
    Grid,
    Input,
    SimpleGrid

} from '@chakra-ui/react';
import TeamCard from '../components/cards/TeamCard';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './Pages.css';
import gold from '../assets/images/pages/gold.jpeg';
import avatar_male from '../assets/images/avatar_male.png';
import avatar_female from '../assets/images/avatar_female.png';

const Gold = () => {

	document.title = `Gold -  ${process.env.REACT_APP_NAME_STANDARD}`;


    useEffect(()=> {
        window.scrollTo(0, 0);
    });

    return (
        <>
       <Box  
        height="70vh"
        bg="#000"
        overflow="hidden"
        backgroundImage={gold}
        backgroundSize="cover"
        >
        <Nav/>
        <Flex my={10} justifyContent="center" h="80vh"  alignItems="center">
            <Heading mt={[10]} as='h1' size='xl' color='white'>Gold</Heading>
        </Flex>
        </Box>

        <Flex
        direction="column"
        mb={10}
        >
            <Flex 
            justifyContent="center"
            alignItems="center"
            direction="column"
            >
                {/* <Heading width={["80%","60%"]} textAlign="center" mt={["5%"]} fontSize={["2em", "3em"]}>Privacy</Heading> */}
                <Flex width={["80%", "65%"]} direction={["column", "row"]} m={[10]}>

                    <div className="myAbtSec">

                    <p className="myabtP">In order to fully understand the purpose of gold, one must look back to the start of the gold market. While gold's history began in 3000 B.C, when the ancient Egyptians started forming jewellery, it wasn't until 560 B.C. that gold started to act as a currency. At that time, merchants wanted to create a standardised and easily transferable form of money that would simplify trade. The creation of a gold coin stamped with a seal seemed to be the answer, as gold jewellery was already widely accepted and recognised throughout various corners of the earth.</p>

<p className="myabtP">Following the advent of gold as money, its importance continued to grow throughout Europe and the U.K., with relics from the Greek and Roman empires prominently displayed in museums around the world, and Great Britain developing its own metals-based currency in 1066. The British pound (symbolising a pound of sterling silver), shillings and pence were all based on the amount of gold (or silver) that it represented. Eventually, gold symbolised wealth throughout Europe, Asia, Africa, and the Americas.</p>

<h4>We Preserve Wealth with Gold</h4>

<p className="myabtP">The reasons for gold's importance in the modern economy centers on the fact that it has successfully preserved wealth throughout thousands of generations. The same, however, cannot be said about paper-denominated currencies. To put things into perspective, consider the following example:</p>

<p className="myabtP">In the early 1970s, one ounce of gold equaled $35. Let's say that at that time, you had a choice of either holding an ounce of gold or simply keeping the $35. They would both buy you the same things, like a brand new business suit or fancy bicycle. However, if you had an ounce of gold today and converted it for today's prices, it would still be enough to buy a brand new suit, but the same cannot be said for the $35. In short, you would have lost a substantial amount of your wealth if you decided to hold the $35 as opposed to the one ounce of gold because the value of gold has increased, while the value of a dollar has been eroded by inflation.</p>

<h4>Gold as a Hedge Against the Dollar</h4>

<p className="myabtP">The idea that gold preserves wealth is even more important in an economic environment where investors are faced with a declining U.S. dollar and rising inflation. Historically, gold has served as a hedge against both of these scenarios. With rising inflation, gold typically appreciates. When investors realise that their money is losing value, they will start positioning their investments in a hard asset that has traditionally maintained its value. The 1970s present a prime example of rising gold prices in the midst of rising inflation.
</p>
<p className="myabtP">The reason gold benefits from a declining U.S. dollar is because gold is priced in U.S. dollars globally. There are two reasons for this relationship. First, investors who are looking at buying gold (i.e., central banks) must sell their U.S. dollars to make this transaction. This ultimately drives the U.S. dollar lower as global investors seek to diversify out of the dollar. The second reason has to do with the fact that a weakening dollar makes gold cheaper for investors who hold other currencies. This results in greater demand from investors who hold currencies that have appreciated relative to the U.S. dollar.</p>

<h4>Gold as a Safe Haven</h4>

<p className="myabtP">Whether it is the tensions in the Middle East, Africa or elsewhere, it is becoming increasingly obvious that political and economic uncertainty is another reality of our modern economic environment. For this reason, investors typically look at gold as a safe haven during times of political and economic uncertainty. Why is this? Well, history is full of collapsing empires, political coups, and the collapse of currencies. During such times, investors who held gold were able to successfully protect their wealth and, in some cases, even use the commodity to escape from all of the turmoil. Consequently, whenever there are news events that hint at some type of global economic uncertainty, investors will often buy gold as a safe haven.</p>

<h4>Gold as a Diversifying Investment</h4>

<p className="myabtP">In general, gold is seen as a diversifying investment. It is clear that gold has historically served as an investment that can add a diversifying component to your portfolio, regardless of whether you are worried about inflation, a declining U.S. dollar, or even protecting your wealth. If your focus is simply diversification, gold is not correlated to stocks, bonds, and real estate.</p>

<h4>Gold as a Dividend-Paying Asset</h4>

<p className="myabtP">Gold stocks are typically more appealing to growth investors than to income investors. Gold stocks generally rise and fall with the price of gold, but there are well-managed mining companies that are profitable even when the price of gold is down. Increases in the price of gold are often magnified in gold stock prices. A relatively small increase in the price of gold can lead to significant gains in the best gold stocks and owners of gold stocks typically obtain a much higher return on investment (ROI) than owners of physical gold.</p>

<p className="myabtP">Even those investors focused primarily on growth rather than steady income can benefit from choosing gold stocks that demonstrate historically strong dividend performance. Stocks that pay dividends tend to show higher gains when the sector is rising and fare better – on average, nearly twice as well – than non-dividend-paying stocks when the overall sector is in a downturn.
There are both advantages and disadvantages to every investment. If you are opposed to holding physical gold, buying shares in a gold mining company may be a safer alternative. If you believe gold could be a safe bet against inflation, investing in coins, bullion, or jewellery are paths that you should take to gold-based prosperity.</p>


<h4>BENEFITS OF GOLD INVESTMENTS</h4>

<h5>GOLD RETAINS ITS VALUE</h5>

<p className="myabtP">* Unlike common coins, paper currencies, or other types of assets, gold is known for maintaining its value over centuries. The unique physical properties of gold are also highly esteemed. The precious metal is known for its resistance to corrosion and the fact that it can be melted. This allows it to be worked with very quickly or stamped as a coin.</p>
<h4>DIFFERENT WAYS TO HOLD GOLD</h4>

<p className="myabtP">* It is usually a good idea to hold some physical gold in the form of coins or bars. However, there are also other convenient options available for anyone looking to invest in gold. One way to profit from gold is to invest in gold mining shares. This allows you to reap the benefits of gold price increases without the hassle of storing the physical metal. During gold bull markets, mining shares often outpace the price of gold.</p>

<h4>HEDGE AGAINST INFLATION</h4>

<p className="myabtP">* Gold has a well-earned reputation for making a great hedge against the inflation that can eat away at the value of paper assets. No matter what happens to gold, it will retain the value that it took to mine and produce it, while paper assets can theoretically go to zero.</p>
<h4>POLITICAL INSTABILITY</h4>

<p className="myabtP">* Markets hate uncertainty. Gold is historically known for retaining its value regardless of external political conditions. Whenever there is a political crisis, gold tends to take off. People love the safety that investing in gold delivers.</p>
<h4>CONSTRAINTS ON SUPPLY</h4>

<p className="myabtP">* Much of the available gold supply is the result of global central banks selling gold bullion. Generally, when the amount of gold decreases, the price of gold increased.</p>

<h4>HIGHER DEMAND</h4>

<p className="myabtP">* Emerging markets, like highly populated India and China, have increased the demand for gold. Gold typically has a more prominent place in the culture of these types of countries. Gold demand in China has been steady among those who view gold bars as a traditional type of savings. In India, gold is highly valued during the wedding season, increasing the global demand for gold.</p>
<h4>OUR WORD</h4>

<p className="myabtP">If you're ready to diversify and protect your wealth in these uncertain times, we encourage you to join us today. Take advantage of the safe harbour that only gold can provide.</p>

                    </div>



                </Flex>
                
            </Flex>




        </Flex>

        <Footer />
       
       </>
    )
}

export default Gold;
