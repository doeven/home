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
import agric from '../assets/images/pages/agric.jpeg';
import avatar_male from '../assets/images/avatar_male.png';
import avatar_female from '../assets/images/avatar_female.png';

const Agric = () => {

	document.title = `Agriculture & Consumer Products -  ${process.env.REACT_APP_NAME_STANDARD}`;


    useEffect(()=> {
        window.scrollTo(0, 0);
    });

    return (
        <>
       <Box  
        height="70vh"
        bg="#000"
        overflow="hidden"
        backgroundImage={agric}
        backgroundSize="cover"
        >
        <Nav/>
        <Flex my={10} justifyContent="center" h="80vh"  alignItems="center">
            <Heading mt={[10]} as='h1' size='xl' color='white'>Agriculture and Consumer Products</Heading>
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


                            <p className="myabtP">DEI is well-versed across the numerous sectors that comprise the Consumer industry. An ever-changing landscape due to multiple factors – evolving consumer preferences, the rise of e-commerce channels, continued commodity input exposure, and the risks and opportunities inherent in operating within a global economy – has driven transaction activity for buyers and sellers of all sizes.
                            Our clients include companies with operations throughout the supply chain, including processing, manufacturing, wholesale distribution, and retailing. End markets serviced by our clients consist of the sale of both branded and private-label consumer products on a regional, national, and international basis.</p>

                            <p className="myabtP">Our experience includes:</p>
                            <h4>FOOD AND BEVERAGE</h4>
                            <ul>
                                <li>Agricultural products</li>
                                <li>Baked/snack</li>
                                <li>Alcoholic and nonalcoholic beverage</li>
                                <li>Branded and private label</li>
                                <li>Dairy</li>
                                <li>Distribution</li>
                                <li>Ingredients</li>
                                <li>Protein</li>
                                <li>Nutraceuticals</li>
                            </ul>

                            <h4>WHY AGRICULTURE </h4>

                            <p className="myabtP">Investment in agriculture is relatively a low-risk portfolio diversification; offering profitable returns financially and also ensuring food security in the economy. Presently, crude agricultural practices has been discouraged with the advent of precision agriculture.</p>

                            <h4>BENEFITS OF AGRICULTURE & INFRASTRUCTURE INVESTMENT</h4>


                            <h5>MULTIPLE REVENUE SOURCES</h5>

                            <p className="myabtP">* Farmland is a unique investment insofar as it has multiple income sources. The value of the land itself is perhaps the largest source of potential income for investors, but it’s far from the only one. When you invest in farmland, you’re also opening up your portfolio to gains through other revenue streams. For example, you’re entitled to a share of the profit when goods go to market, and enjoy a stake in the farm upon which the land sits. When either of these two generate income or revenue, a portion of that goes to you as a partial owner.</p>
                            <h5>BUILT-IN SCARCITY</h5>

                            <p className="myabtP">* When you invest in gold, you’re investing in a finite resource. The amount of farmland in the United States is decreasing every year, and yet the country’s farms make up 10 percent of the world’s farmland. Coupled with a growing population and a demand for food that’s not decreasing anytime soon, the need for farmland is only going to increase over time—even if there’s less of it than ever.</p>
                            <h5>INFLATION HEDGING</h5>

                            <p className="myabtP">* Finding good cover from inflation can be challenging enough for the average investor. Add market volatility and near-zero interest rates into the mix, and this task gets significantly harder. Savvy investors usually seek shelter by way of inflation-hedged investments. Essentially, these investments can provide a position that is either less affected or positively affected by inflation than your usual market pick.</p>

                            <h5>AGRICULTURE IS MORE SUSTAINABLE</h5>

                            <p className="myabtP">When you invest in agriculture, you are  investing in a physical plot of land. This land’s value only appreciates, unlike stocks in businesses. Investing in agriculture is typically a long term venture. Returns vary depending not only on commodity prices, but on how much and how fast the land appreciates. Depending on the farm’s location, current commodity prices and other factors, returns on investment range from 3-5% for commodity based land, or 10-15% for specialty crops. Because agriculture investments are long term, they can be set up to be kept in the investor’s family and passed down to future generations. Agricultural investments can appreciate indefinitely.</p>

                            <h5>OUR WORD</h5>

                            <p className="myabtP">Investing in agriculture and farmers keeps people fed and clothed. We all need to eat. Trends show that the amount of food, especially protein, people take in per day is steadily increasing. At the same time, some experts fear that at the rate of the population’s consumption, soil could become a scarce commodity, making the demand for fertile agricultural land even larger.</p>

                    </div>



                </Flex>
                
            </Flex>




        </Flex>

        <Footer />
       
       </>
    )
}

export default Agric;
