import React, { useEffect } from 'react';
import{ 
    Box,
    Heading,
    Flex,
    Text,
    Grid,
    Image,
    Input,
    Link,
    SimpleGrid

} from '@chakra-ui/react';
import TeamCard from '../components/cards/TeamCard';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './Pages.css';
import about from '../assets/images/pages/about.jpg';
import avatar_male from '../assets/images/avatar_male.png';
import avatar_female from '../assets/images/avatar_female.png';
import image1 from '../assets/images/team/image1.jpg';
import image2 from '../assets/images/team/image2.jpg';
import image3 from '../assets/images/team/image3.jpg';
import image4 from '../assets/images/team/image4.jpg';
import image5 from '../assets/images/team/image5.jpeg';
import image7 from '../assets/images/team/image7.jpg';

const About = () => {

	document.title = `About Us -  ${process.env.REACT_APP_NAME_STANDARD}`;


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
            <Heading mt={[10]} as='h1' size='xl' color='white'>About Us</Heading>
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
                                                                                    
                                                                                            <p className="myabtP">Welcome To {`${process.env.REACT_APP_NAME_STANDARD}`}. {`${process.env.REACT_APP_NAME_STANDARD}`} is a long term, stable, and active Investment securities and wealth management company registered in Netherland in 2010. We deal with major oil producing corporations & cooperatives involved in oil operations, Agricultural Investments, Gold Investments, Stocks, Real Estate Investments, Forex, NFP and Renewable Energy. Profits from these investments are used to enhance our program and increase our stability for a successful long term company. Our high skilled and talented team of field experts with unique tactics and strategies based on invaluable wealth of experience will Provide 100% money back with guaranteed profits under our skilled and careful management.</p>
                                                                                            <Flex 
            justifyContent="center"
            alignItems="center"
            direction="column"
            >
                {/* <Heading width={["80%","60%"]} textAlign="center" mt={["5%"]} fontSize={["2em", "3em"]}>Privacy</Heading> */}
                
                <SimpleGrid columns={[1, 2, 2, 2]} spacing='10px' width={["100%", "90%", "90%", "80%"]}>
                    <Box>
                        <TeamCard
                        img={image4}
                        name="Anthony Dubois"
                        preview="Anthony is considered a thoughtful leader in the philosophical and existencial implications of this emerging technology, and is a regular speaker at industry conferences. His specialized knowledge in crypo-related accounting allows him to stay ontop of taxation laws within the crypto-space and to educate clients on staying complaint with changing crypo tax laws."
                        title="CEO & Founder"
                        mr={[0,10]}
                        mb={[10,0]}
                        />
                    </Box>

                    <Box>
                        <TeamCard
                        img={image2}
                        name="Henry Bowers"
                        preview="A position he has held since February 2019. He is responsible for the company’s Financial management and supply and trading operating units. Previously, Steven was president of Finance and Trading where he was responsible for DoevenInvestment's global trading activities for feedstocks, cryptocurrency and Gold to support the company’s production operations and refining and marketing network."
                        title="Chief Financial Officer (CFO)"
                        mr={[0,10]}
                        mb={[10,0]}
                        />
                    </Box>

                    <Box>
                        <TeamCard
                        img={image5}
                        name="Gary Eduardo Arthur"
                        preview="Gary Arthur as a software engineer has earned a bachelor’s degree and a master’s degree in software development and application engineering at Universitat de Valéncia-UV. He is well experienced in the AI and business technology, delivery of major capital projects, procurement, information technology, complex process facilities, business and real estate services, digital initiatives, and talent selection in support of Doeven Investment’s upstream, downstream and midstream businesses."
                        title="Executive President of Technology, Projects and Services"
                        mr={[0,10]}
                        mb={[10,0]}
                        />
                    </Box>

                    <Box>
                        <TeamCard
                        img={image1}
                        name="Nadine Caspari"
                        preview="Nadine combines his decades long career and experience from sitting on boards of major hedge funds around Europe with his people management and leadership skills. A graduate of the Australian Graduate School of Management, Nadine leads the Service Department at Doeven Investment. Our clients have experienced the most seamless investment and follow-up customer care model in all of Malta."
                        title="Head of Service Department, Doeven Investment"
                        mr={[0,10]}
                        mb={[10,0]}
                        />
                    </Box>

                    <Box>
                        <TeamCard
                        img={image7}
                        name="Laurent Foeb"
                        preview="Laurent is well versed in the field of digital currency and its applications across a number of alternative sectors; Chief of which is luxury estate around the Mediterranean. He has spent the past two decades making deals and getting his global clients the very best offers."
                        title="Head of Strategic Development"
                        mr={[0,10]}
                        mb={[10,0]}
                        />
                    </Box>

                    <Box>
                        <TeamCard
                        img={image3}
                        name="Bill Guillaum"
                        preview="A position he assumed in February 2018. He is responsible for overseeing public affairs, social investment and performance, and the company’s worldwide efforts to protect and enhance its reputation. Bill has served in a number of leadership positions with increasing responsibility and is considered fit for the position he currently holds in the DoevenInvestments community."
                        title="President of Corporate Affairs"
                        mr={[0,10]}
                        mb={[10,0]}
                        />
                    </Box>
                </SimpleGrid>
                
                
            </Flex>
                                                                                        </div>



                </Flex>
                
            </Flex>




        </Flex>

        <Footer />
       
       </>
    )
}

export default About;
