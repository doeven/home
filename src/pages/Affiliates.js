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
import affiliates from '../assets/images/pages/affiliates.jpeg';
import avatar_male from '../assets/images/avatar_male.png';
import avatar_female from '../assets/images/avatar_female.png';

const Affiliates = () => {

	document.title = `Affiliates -  ${process.env.REACT_APP_NAME_STANDARD}`;


    useEffect(()=> {
        window.scrollTo(0, 0);
    });

    return (
        <>
       <Box  
        height="70vh"
        bg="#000"
        overflow="hidden"
        backgroundImage={affiliates}
        backgroundSize="cover"
        >
        <Nav/>
        <Flex my={10} justifyContent="center" h="80vh"  alignItems="center">
            <Heading mt={[10]} as='h1' size='xl' color='white'>Affiliates</Heading>
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

                    <h4>Linear bonus</h4>
                    <p className="myabtP">Linear bonus – is a commission awarded to an IBPA for the sale of a company’s service or product in the affiliate structure. The marketing structure is not limited in width and is represented by 5 lines in depth. Under this program, the inviting partner receives not only a reward percentage (Linear bonus) for the investment of the invited partner, but also a percentage of the investment profitability of this partner.
                        The number of available levels depends on the volume of personal investment packages purchased. Accordingly, the larger the volume of your personal investment packages, the more levels for the Line Bonus program are available to you. The reward percentage for an attracted deposit depends on its size. Accordingly, the larger the investment package you have attracted, the higher the reward percentage you will receive. The reward percentage for the Linear bonus can be increased by fulfilling the conditions of the Leadership bonus.</p>              

                            <div className="vc_col-sm-12">
                                <div className="vc_col-sm-4" style={{ padding: "10px", border: "1px solid #bbb", fontSize: "25px", display: "flex", flexDirection: "column", alignContent: "center" }}><i className="fas fa-users"></i> 3%<br/><span style={{ fontSize: "16px" }}>Direct Referral</span></div>
                                <div className="vc_col-sm-4" style={{ padding: "10px", border: "1px solid #bbb", fontSize: "25px", display: "flex", flexDirection: "column", alignContent: "center" }}><i className="fas fa-users"></i> 1%<br/><span style={{ fontSize: "16px" }}>Second Level Referral</span></div>
                                <div className="vc_col-sm-4" style={{ padding: "10px", border: "1px solid #bbb", fontSize: "25px", display: "flex", flexDirection: "column", alignContent: "center" }}><i className="fas fa-users"></i> 0.5%<br/><span style={{ fontSize: "16px" }}>Third Level Referral</span></div>
                                <div className="vc_col-sm-4" style={{ padding: "10px", border: "1px solid #bbb", fontSize: "25px", display: "flex", flexDirection: "column", alignContent: "center" }}><i className="fas fa-users"></i> 0.2%<br/><span style={{ fontSize: "16px" }}>Fourth Level Referral</span></div>
                                <div className="vc_col-sm-4" style={{ padding: "10px", border: "1px solid #bbb", fontSize: "25px", display: "flex", flexDirection: "column", alignContent: "center" }}><i className="fas fa-users"></i> 0.1%<br/><span style={{ fontSize: "16px" }}>Fifth Level Referral</span></div>
                            </div>


                            <h4>Mentor bonus</h4>

                            <p className="myabtP">Mentor bonus – is a commission reward that an IBPA receives for fulfilling certain conditions to achieve the Mentor career status in the company. The fulfillment of certain conditions is the sale of the company's services or products in the affiliate network. The premium is paid upon achievement of a certain Mentor career status. Time for achieving the status is unlimited.</p>


                            <h4>Level Bonuses</h4>
								<p className="myabtP">1. <strong>Sergeant :</strong> An investor becomes a sergeant when he/she has over 50 people in his team. He doesn't get money for reaching there but when the team has up to $500,000 in investments, the sergeant gets a cash prize of $1000</p><br/>
								<p className="myabtP">2. <strong>Commander:</strong> An investor becomes a commander when he/she has over 500 people in his team. He doesn't get money for reaching there but when the team has up to $1,000,000 in deposits, the sergeant gets a cash prize of $3,000</p><br/>
								<p className="myabtP">3. <strong>General:</strong> An investor becomes a General when he/she has over 3000 people in his team. He  gets $1000 for reaching there but when the team has up to $10,000,000 in deposits, the sergeant gets a cash prize of $5,000 and a 2-weeks trip to any country of his/her choice worth $5000.</p><br/>
								<p className="myabtP">4. <strong>Major:</strong> An investor becomes a Major when he/she has over 20,000 people in his team. He  gets $1500  for reaching there but when the team has up to $50,000,000 in deposit, the mahor gets a cash prize of $5,000 and a car of his/her choice worth $5,000.</p><br/>
								<p className="myabtP">5. <strong>Global Ambassador:</strong> An investor becomes a Global Ambassador when he/she has over 50,000 people in his team. He  gets $5,000 for reaching there and when the team has up to $100,000,000 in investments, the Global Ambassador gets a cash prize of $50,000 and a house in any country worth $100,000.</p><br/>



                    </div>



                </Flex>
                
            </Flex>




        </Flex>

        <Footer />
       
       </>
    )
}

export default Affiliates;
