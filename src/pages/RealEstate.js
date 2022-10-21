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
import about from '../assets/images/pages/about.jpg';
import avatar_male from '../assets/images/avatar_male.png';
import avatar_female from '../assets/images/avatar_female.png';

const WhyUs = () => {

	document.title = `Real Estate -  ${process.env.REACT_APP_NAME_STANDARD}`;


    useEffect(()=> {
        window.scrollTo(0, 0);
    });

    return (
        <>
       <Box  
        height="70vh"
        bg="#000"
        overflow="hidden"
        backgroundImage={about}
        backgroundSize="cover"
        >
        <Nav/>
        <Flex my={10} justifyContent="center" h="80vh"  alignItems="center">
            <Heading mt={[10]} as='h1' size='xl' color='white'>Real Estate</Heading>
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

                            <p className="myabtP">We are a unique online real estate investing platform that was designed to give investors, both big and small, an equal opportunity to invest in real estate. At its core, Streitwise is a real estate investment trust, but it’s one of the few online real estate investing platforms that is available to non-accredited investors. We understand that when it comes time to select a real estate advisor, there are several factors to consider. Finding a qualified appraiser is an important first step to the process but finding one who has the appropriate experience to address the complexities that can and will arise is critical. </p>

                            <p className="myabtP">Whether office or industrial, retail or healthcare, a single property or a global portfolio, Stout provides independent and reliable real estate consulting designed to fit your needs, throughout Netherland and internationally. Our professionals are real estate appraisers who hold the following designations:</p>

                            <ul>
                                <li>Accredited Senior Appraiser (ASA)</li>
                                <li>Appraisal Institute (MAI)</li>
                                <li>Counselor of Real Estate (CRE)</li>
                                <li>Appraisal Institute – General Review Specialist (AI-GRS)</li>
                                <li>Fellow/Member of The Royal Institution of Chartered Surveyors (FRICS/MRICS)</li>
                            </ul>

                            <p className="myabtP">Our professionals have been retained as experts across the U.S. and have testified in both Federal and State Jurisdictions throughout the country. As a result, our reports are designed and developed to withstand scrutiny in the most adversarial legal proceedings. Our track record of success in a litigation setting is unmatched in our industry</p>

                            <p className="myabtP">While most real estate platforms and REITs focus on commercial properties, we focus also on single-family homes as its source of rental income.</p>

                            <p className="myabtP">This focus on smaller properties allows Arrived Homes to sell ownership shares on individual properties to non-accredited investors giving small-to-medium-sized investors access to real estate investment opportunities that typically require 6-figure minimum investments. We do this by pooling multiple investor contributions into 1 bundle large enough to satisfy the minimum investment requirements of the best institutional private equity real estate investment funds.</p>

                            <h4>Financial Reporting and Tax</h4>

                            <p className="myabtP">For 30 years, we have provided valuation services for financial reporting requirements using industry-leading methodologies and techniques. In an industry that is constantly evolving, we are leaders in utilizing globally recognized standards through our participation in, or adoption of guidance from, a number of prominent and recognizable governing bodies and boards including the:</p>

                            <ul>
                                <li>International Valuation Standards Council</li>
                                <li>Royal Institution of Chartered Surveyors</li>
                                <li>Appraisal Institute</li>
                                <li>International Accounting Standards Board</li>
                                <li>Financial Accounting Standards Board</li>
                            </ul>

                            <p className="myabtP">In addition to our vast experience in financial reporting related valuation services, we routinely provide our clients with corporate tax planning and compliance consistent with Internal Revenue Service guidance as well as that of other domestic and international taxing authorities.</p>



                    </div>



                </Flex>
                
            </Flex>




        </Flex>

        <Footer />
       
       </>
    )
}

export default WhyUs;
