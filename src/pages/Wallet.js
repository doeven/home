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
import wallet from '../assets/images/pages/wallet.jpeg';
import avatar_male from '../assets/images/avatar_male.png';
import avatar_female from '../assets/images/avatar_female.png';

const Wallet = () => {

	document.title = `Wallet -  ${process.env.REACT_APP_NAME_STANDARD}`;


    useEffect(()=> {
        window.scrollTo(0, 0);
    });

    return (
        <>
       <Box  
        height="70vh"
        bg="#000"
        overflow="hidden"
        backgroundImage={wallet}
        backgroundSize="cover"
        >
        <Nav/>
        <Flex my={10} justifyContent="center" h="80vh"  alignItems="center">
            <Heading mt={[10]} as='h1' size='xl' color='white'>Wallet</Heading>
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

                    <p className="myabtP">Your wallet address is similar to a bank account number. It’s a unique 26-35 digit combination Of letters and numbers and it looks something like this:
                    <strong>1Hv2iwosGhU2xXzYrMgktkQjRnNGMD3CTd</strong>. <br/><br/>
                    You can share your wallets address with others. With this, they will be able to send you Cryptocurrency funds. Your wallet address can also be represented as a QR code. If somebody wishes to send funds to you, they can scan the code using their wallets and send funds to your wallet. When you sign up and create your wallet you’ll be assigned your own unique wallet address. Any Cryptocurrency sent to this address will be added to</p>

                    </div>



                </Flex>
                
            </Flex>




        </Flex>

        <Footer />
       
       </>
    )
}

export default Wallet;
