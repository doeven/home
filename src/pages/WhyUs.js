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
import whyus from '../assets/images/pages/whyus.jpeg';
import avatar_male from '../assets/images/avatar_male.png';
import avatar_female from '../assets/images/avatar_female.png';

const WhyUs = () => {

	document.title = `We Choose Us -  ${process.env.REACT_APP_NAME_STANDARD}`;

    useEffect(()=> {
        window.scrollTo(0, 0);
    });

    return (
        <>
       <Box  
        height="70vh"
        bg="#000"
        overflow="hidden"
        backgroundImage={whyus}
        backgroundSize="cover"
        >
        <Nav/>
        <Flex my={10} justifyContent="center" h="80vh"  alignItems="center">
            <Heading mt={[10]} as='h1' size='xl' color='white'>Why Choose Us</Heading>
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

							<h4>Why Invest in DEI</h4>                                                        
                            <p className="myabtP">{`${process.env.REACT_APP_NAME_STANDARD}`} is a diverse and fully integrated alternative asset manager. With experienced teams across North America, Europe and Asia, we have the breadth and depth to source ideas, evaluate opportunities and allocate capital across strategies and geographies. Our investment model benefits from full collaboration among our tenured investment team. Bringing to bear all of our resources, technology and market perspectives helps to ensure maximum intellectual honesty. We are a purpose-driven company, bound together by our commitment to what we do and how we work together. We come to this business from many different perspectives, but we all hold common values that we bring to our work. We are constantly engaged in research and development which generates unique investment ideas, creative structures and underwriting for the fullest range of scenarios.</p>
						    
                            <h4>A Differentiated Philosophy</h4>                                                        
                            <p className="myabtP">Our differentiated philosophy supports our singular effort to generate attractive risk-adjusted returns for our clients. We strive to capture significant upside in rising markets and to preserve capital in declining markets.</p>
                            
                            <h4>Performance Driven Culture Rooted in Collaborative Partnership</h4>                                                        
                            <p className="myabtP">Our investment model benefits from collaboration among our investment team and brings to bear all of our diverse resources and perspectives. We have a proven track record of generating attractive risk-adjusted returns across market cycles.</p>
                            
                            <h4>Flexible & Highly Opportunistic Investment Approach</h4>                                                        
                            <p className="myabtP">Our distinct process gives us flexibility to source high conviction investments across asset classes and geographies. The portfolio is comprised of our best ideas across strategies without artificial constraints or biases.</p>
                            
                            <h4>Motivated & Aligned Leadership</h4>                                                        
                            <p className="myabtP">Culture of hiring junior professionals and investing in them through significant development and training, combined with incentive structures that firmly align our interests to those of Limited Partners, has resulted in a core group of 14 investment partners who have worked together for an average of 13 years.</p>
                            
                            <h4>True Partnership with our Clients</h4>                                                        
                            <p className="myabtP">We build transparent, thoughtful and enduring partnerships that are grounded in a deep understanding of our client’s objectives and expectations through candid communication. Our goal is to deliver unique solutions where clients can leverage firm wide capabilities.</p>
                            
                            <h4>Empowered Risk Management</h4>                                                        
                            <p className="myabtP">Our intellectually honest, integrated approach to risk management complements and enhances our investment process, which drives better decision making and the ability to build robust portfolios that focus on capital preservation and attractive risk adjusted returns over the cycle.</p>
                            
                            <h4>Disciplined Focus on Core Competencies</h4>                                                        
                            <p className="myabtP">Ensure firm resources and capital remain focused on investment capabilities where we have proven ability, high conviction and edge. We remain disciplined without losing our aptitude for innovation.</p>







                    </div>



                </Flex>
                
            </Flex>




        </Flex>

        <Footer />
       
       </>
    )
}

export default WhyUs;
