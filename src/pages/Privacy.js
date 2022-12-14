import React, {useEffect} from 'react';
import{ 
    Box,
    Heading,
    Flex,
    Text,
    Image,
    Grid,
    Input
} from '@chakra-ui/react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './Pages.css';
import privacy from '../assets/images/pages/privacy.jpeg'

const Privacy = () => {

	document.title = `Privacy Policy -  ${process.env.REACT_APP_NAME_STANDARD}`;


    useEffect(()=> {
        window.scrollTo(0, 0);
    });
    
    return (
        <>
       <Box  
        height="70vh"
        bg="#000"
        overflow="hidden"
        backgroundImage={privacy}
        backgroundSize="cover"
        >
        <Nav/>
        <Flex my={10} justifyContent="center" h="80vh"  alignItems="center">
            <Heading mt={[10]} as='h1' size='xl' color='white'>Privacy Policy</Heading>
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
                <h4>Our privacy obligations </h4>
    <p className="myabtP">DEI takes privacy seriously and cares about personal information.</p>
    <p className="myabtP">‘Personal information’ means information or an opinion about an identified individual, or an individual who is reasonably identifiable. {process.env.REACT_APP_NAME_STANDARD} Privacy Policy applies to personal information collected and/or held by {`${process.env.REACT_APP_NAME_ULR}`} </p>
    <p className="myabtP">This Privacy Policy also explains how we process ‘personal data’ about people in the European Union (EU), as required under the General Data Protection Regulation (GDPR).</p>
    <p className="myabtP">We will review this policy regularly, and we may update it from time to time.</p>
    
    <h4>The types of personal information we collect and hold</h4>
    
    <p className="myabtP">We collect personal information about our users in order provide our products, services, and customer support. Our products, services, and customer support are provided through many platforms including but not limited to: websites, email, and telephone. The specific platform and product, service, or support you interact with may affect the personal data we collect.</p>
    
    <p className="myabtP">Not all information requested, collected, and processed by us is “Personal Information” as it does not identify you as a specific natural person. This will include majority of “User Generated Content” that you provide us with the intention of sharing with other users inside a transaction. Such “Non-Personal Information” is not covered by this privacy policy. However, as non-personal information may be used in aggregate or be linked with existing personal information; when in this form it will be treated as personal information. As such, this privacy policy will list both types of information for the sake of transparency.</p>
    
    <p className="myabtP">In some situation users may provide us with personal information without us asking for it, or through means not intended for the collection of particular types of information. Whilst we may take reasonable steps to protect this data, the user will have bypassed our systems, processes, and control and thus the information provided will not be governed by this privacy policy.</p>
    
    <h4>Information we collect as you use our service</h4>
    
    <p className="myabtP">We maintain records of the interactions we have with our users, including the products, services and customer support we have provided. This includes the interactions our users have with our platform such as when a user has viewed a page or clicked a button. When we are contacted we may collect personal information that is intrinsic to the communication. For example, if we are contacted via email, we will collect the email address used.We may collect or process the following (mostly non PII) information:</p>    
    
    <ul>
        <li>Metadata – IP address, computer and connection information, referring web page, standard web log information, language settings, timezone, etc.</li>
        <li>Device Information – device identifier, device type, device plugins, hardware capabilities, etc</li>
        <li>Actions – pages viewed, buttons clicked, time spent viewing, search keywords, etc</li>
    </ul>
    
    <h4>Links to other sites</h4>
    
    <p className="myabtP">On our website, you will encounter links to third party websites. These links may be from us, or they may appear as content generated by other users. These linked sites are not under our control and thus we are not responsible for their actions. Before providing your personal information via any other website, we advise you to examine the terms and conditions of using that website and its privacy policy.</p>
    
    <h4>HOW WE USE PERSONAL INFORMATION</h4>
    
    <p className="myabtP">The information we request, collect, and process is primarily used to provide users with the product or service they have requested. More specifically, we may use your personal information for the following purposes:</p>

    <ul>
        <li>to provide the service or product you have requested;</li>
        <li>to facilitate the creation of {process.env.REACT_APP_NAME_STANDARD} Agreements;</li>
        <li>to provide technical or other support to you;</li>
        <li>to answer enquiries about our services, or to respond to a complaint;</li>
        <li>to promote our other programs, products or services which may be of interest to you (unless you have opted out from such communications);</li>
        <li>to allow for debugging, testing and otherwise operate our platforms;</li>
        <li>to conduct data analysis, research and otherwise build and improve our platforms;</li>
        <li>to comply with legal and regulatory obligations;</li>
    </ul>
    
    <h4>When we disclose personal information to other parties in your transactions</h4>
    <p className="myabtP">We may disclose your personal information to third parties that participate in a transaction with you, including but not limited to:</p>

    <li>counterparties,</li>
    <li>brokers; and,</li>
    <li>affiliates involved in origination of the transaction.</li>
     
    <h4>Our third party service providers</h4>
    <p className="myabtP">The personal information of users may be held or processed on our behalf outside Australia, including ‘in the cloud’, by our third party service providers. Our third party service providers are bound by contract to only use your personal information on our behalf, under our instructions.
    Our third party service providers include:</p>
    

    <ul>
        <li>Cloud hosting, storage, networking and related providers</li>
        <li>SMS providers</li>
        <li>Payment and Banking providers</li>
        <li>Marketing and analytics providers</li>
        <li>Security providers</li>
        <li>Chat providers</li>
        <li>Email providers</li>
    </ul>
    <h4>Other disclosures and transfers</h4>
    <p className="myabtP">We may also disclose your personal information to third parties for the following purposes:</p>

    <ul>
        <li>if necessary to provide the service or product you have requested;</li>
        <li>We receive court orders, subpoenas or other requests for information by law enforcement,</li>
        <li>if otherwise permitted or required by law; or</li>
        <li>for other purposes with your consent.</li>
    </ul>

    <p className="myabtP">As we are a global company, with offices around the world, your personal information may be processed by staff in any of our offices. Escrow currently has offices in The United States of America, Australia, The Philippines, Canada, and Argentina.</p>
                                                                                                                                                                                
                                                                                        </div>



                </Flex>
                
            </Flex>




        </Flex>

        <Footer />
       
       </>
    )
}

export default Privacy;
