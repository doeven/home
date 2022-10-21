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

const Cfd = () => {

	document.title = `CFD -  ${process.env.REACT_APP_NAME_STANDARD}`;


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
            <Heading mt={[10]} as='h1' size='xl' color='white'>NFP</Heading>
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


                        <p className="myabtP">CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 87.28% of private retail investor accounts lose money when trading CFDs on their own. You should consider whether you understand how investments work and whether you can afford to take the high risk of losing your money.
                        Legal Information: {`${[process.env.REACT_APP_NAME_STANDARD]}`}  and trading is authorized and regulated by the SEC
                        (license no. CRD# 270002 ).</p>

                        <p className="myabtP">{`${[process.env.REACT_APP_NAME_STANDARD]}`} and trading is the holding company of {`${[process.env.REACT_APP_NAME_STANDARD]}`}  and trading Management LLC</p>


                        
                    </div>



                </Flex>
                
            </Flex>




        </Flex>

        <Footer />
       
       </>
    )
}

export default Cfd;
