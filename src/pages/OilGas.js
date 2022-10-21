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
import oil from '../assets/images/pages/oil-gas.jpg';
import avatar_male from '../assets/images/avatar_male.png';
import avatar_female from '../assets/images/avatar_female.png';

const OilGas = () => {

	document.title = `Oil and Gas -  ${process.env.REACT_APP_NAME_STANDARD}`;


    useEffect(()=> {
        window.scrollTo(0, 0);
    });

    return (
        <>
       <Box  
        height="70vh"
        bg="#000"
        overflow="hidden"
        backgroundImage={oil}
        backgroundSize="cover"
        >
        <Nav/>
        <Flex my={10} justifyContent="center" h="80vh"  alignItems="center">
            <Heading mt={[10]} as='h1' size='xl' color='white'>Oil and Gas</Heading>
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

                            <p className="myabtP">
                                    When it comes to valuing assets and companies in the oil and gas industry, the valuation tools that are typically used in other industries may not be adequate or appropriate for the valuation of an exploration and production (E&P) or midstream company. That’s why it’s critical to work with valuation professionals who have specific and significant experience and expertise in the industry – those who understand how commodity volatility, changes in production, and federal laws and regulations, as well as the scientific and technical data and characteristics, impact the evaluation of an E&P or midstream company.
                                    DEI is recognized as an independent valuation leader in the oil and gas industry. Our professionals are located by key producing areas and have:</p>

                                    <ul>
                                        <li>Valued properties in every major U.S. shale play and legacy conventional basin</li>
                                        <li>An alliance relationship with a petroleum engineering firm</li>
                                        <li>Worked with public and private E&Ps located throughout the U.S. and around the world</li>
                                        <li>Access to leading energy industry databases and information services</li>
                                        <li>We help our clients understand the nature of the oil and gas properties owned, property locations and current activities in the area, and market value of the properties using relevant valuation methodologies.</li>
                                    </ul>

                                    <h4>Our Services</h4>

                                    <ul>
                                    <li>Fair market value for tax- and management-incentive purposes</li>
                                    <li>Fair value for financial reporting purposes</li>
                                    <li>Transaction advisory services for mineral owners and trustees</li>
                                    <li>Fairness opinions and solvency opinions</li>
                                    <li>Valuation advisory services in bankruptcies and disputes</li>
                                    </ul>

                                    <h4>Who We Serve</h4>

                                    <ul>
                                        <li>Public and privately held E&P and midstream companies</li>
                                        <li>Private equity</li>
                                        <li>Mineral investment funds</li>
                                        <li>Mineral and royalty owners and trustees</li>
                                    </ul>

                                    <p className="myabtP">Considered being the biggest sector in the world in terms of dollar value, the oil and gas sector is a global powerhouse using hundreds of thousands of workers worldwide and generating hundreds of billions of dollars globally each year. We have a deep specialisation in natural resources, including oil & gas, where we offer extensive financial solutions clients require across the oil and gas value chain.</p>

                                    <p className="myabtP">We offer comprehensive financial services and products to meet the evolving financials needs of both international and local oil & gas companies operating in our presence countries. In addition, our on-the-ground specialist teams can support you in identifying opportunities that further drive the development of the broader oil & gas ecosystem.  With over eleven years of experience, serving a range of clients, from public corporations to privately held companies in numerous industries. </p>

                                    <p className="myabtP">Our clients and their advisors rely on our premier expertise, deep industry knowledge, and unparalleled responsiveness on complex matters. We recognise our employee contribution and are proud to have many employees who have been with us for five plus years contributing to our quality service.  We are always looking for new and innovative ways to deliver better service to our customers and welcome new challenges and opportunities.</p>

                                    <h4>Summary</h4>

                                    <p className="myabtP">The second quarter of 2021 revealed continued momentum for energy-sector benchmarks. U.S. crude oil prices increased 24.2% during the quarter to $73.47 per barrel by June 30th. crude oil prices rose steadily through the quarter as strong economic activity and increasing travel drove hydrocarbon demand. The drilling rig count rose by 53 rigs (per Baker Hughes) during the second quarter of 2021, which represented another solid quarterly rig count expansion (driven primarily by private oil & gas companies) continuing the trend that began in 2020. Completion activity continued to increase with the number of active frac spreads expanding from approximately 200 spreads in March 2021 to more than 230 spreads by the end of June 2021 (per Primary Vision). Natural gas prices also accelerated during the quarter, rising from $2.52 at the end of the first quarter to $3.65 by June 30th (representing a 44.8% increase). </p>
                                    <p className="myabtP">Overall, bankruptcies decreased compared to Q4 2021 as COVID-19 impacts continues to subside and oil prices further increase (yielding greater cash flow). Similar to previous quarters, recent M&A activity within the energy service and equipment segment has been largely focused on production and well services.</p>

                                    <h4>Crude Oil and Natural Gas Prices Materially Increased During Quarter</h4>
                                    <p className="myabtP">DEI crude front month oil prices closed the second quarter 24.2% higher than the first quarter, increasing from $59.16 per barrel to $73.47. Research analysts have forecasted median prices of $67.00 and $66.51 for the third and fourth quarters of 2021, respectively. U.S. crude production is expected to remain between 11.2 and 11.4 million barrels per day through 2021.</p>
                                    <p className="myabtP">Natural gas prices are expected to average $3.73 per MMBtu through the end of 2021. The EIA is forecasting natural gas production to remain relatively flat, increasing 0.6% from June to December 2021 to 101.1 BCF per day.</p>




                    </div>



                </Flex>
                
            </Flex>




        </Flex>

        <Footer />
       
       </>
    )
}

export default OilGas;
