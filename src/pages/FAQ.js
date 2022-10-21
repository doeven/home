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
import faq from '../assets/images/pages/faq.jpg'

const FAQ = () => {

	document.title = `Frequently Asked Questions (FAQs) -  ${process.env.REACT_APP_NAME_STANDARD}`;


    useEffect(()=> {
        window.scrollTo(0, 0);
    });

    return (
        <>
       <Box  
        height="70vh"
        bg="#000"
        overflow="hidden"
        backgroundImage={faq}
        backgroundSize="cover"
        >
        <Nav/>
        <Flex my={10} justifyContent="center" h="80vh"  alignItems="center">
            <Heading mt={[10]} as='h1' size='xl' color='white'>Frequently Asked Questions</Heading>
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

                <div className="faq-section">
                                                                                        <div className="panel-group" id="accordion">
                                                                                                <div className="panel panel-default">
                                                                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                                                                                        <div className="panel-heading">
                                                                                                            <h4 className="panel-title">How does your order process work?</h4>
                                                                                                        </div>
                                                                                                    </a>
                                                                                                    <div id="collapse1" className="panel-collapse collapse">
                                                                                                        <div className="panel-body"> When buying cryptocurrency
                                                                                                        <ul>

                                                                                                            <li>Order opened with your account</li>
                                                                                                            <li>After sending funds to generated address</li>
                                                                                                            <li>Deposit is locked in and trade executed</li>
                                                                                                            <li>Funds clear on our end (typically with 24 hours)</li>
                                                                                                            <li>Coins are released to your nominated wallet</li>
                                                                                                        </ul>
                                                                                                            
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>


                                                                                                <div className="panel panel-default">
                                                                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                                                                                                        <div className="panel-heading">
                                                                                                            <h4 className="panel-title">What are your prices based on?</h4>
                                                                                                        </div>
                                                                                                    </a>
                                                                                                    <div id="collapse2" className="panel-collapse collapse">
                                                                                                        <div className="panel-body"> 
                                                                                                        We determine the price for the cryptocurrencies in the most fair way possible – using the highest liquidity exchanges as global benchmarks.
                                                                                                            <ol>
                                                                                                            <li>Bitcoin’s price is determined by an average of the highest liquidity exchanges globally</li>
                                                                                                            <li>For other cryptocurrencies, the price is based on the exchange with the largest trading volume</li>
                                                                                                            </ol>
                                                                                                        To reward frequent clients, our variable fee rate decreases as your trading volume with us increases. Contact your broker today.
                                                                                                        
                                                                                                        
                                                                                                        
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>


                                                                                                <div className="panel panel-default">
                                                                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                                                                                                        <div className="panel-heading">
                                                                                                            <h4 className="panel-title">Do you support overseas clients?</h4>
                                                                                                        </div>
                                                                                                    </a>
                                                                                                    <div id="collapse3" className="panel-collapse collapse">
                                                                                                        <div className="panel-body"> Yes!  we’ve had many happy clients from the United States, New Zealand, United Kingdom, Canada, Singapore, and Switzerland, amongst many others.</div>
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div className="panel panel-default">
                                                                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                                                                                                        <div className="panel-heading">
                                                                                                            <h4 className="panel-title">Do you support trading as an entity, such as a company?</h4>
                                                                                                        </div>
                                                                                                    </a>
                                                                                                    <div id="collapse4" className="panel-collapse collapse">
                                                                                                        <div className="panel-body"> Yes. We are able to facilitate trading with all entity structures, such as companies, trusts, and superannuation funds.</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                        </div> 

                                                                                        <div className="panel-group" id="accordion2">
                                                                                                <div className="panel panel-default">
                                                                                                    <a data-toggle="collapse" data-parent="#accordion2" href="#collapse111">
                                                                                                        <div className="panel-heading">
                                                                                                            <h4 className="panel-title">What's your minimum transaction?</h4>
                                                                                                        </div>
                                                                                                    </a>
                                                                                                    <div id="collapse111" className="panel-collapse collapse">
                                                                                                        <div className="panel-body"> We encourage you to start with a minimum amount of $1,000 for the first trial period which last for 7 days, thereafter you will be recommended to upgrade to our minimum trade of $10,000.</div>
                                                                                                    </div>
                                                                                                </div>


                                                                                                <div className="panel panel-default">
                                                                                                    <a data-toggle="collapse" data-parent="#accordion2" href="#collapse112">
                                                                                                        <div className="panel-heading">
                                                                                                            <h4 className="panel-title">What does the error 'This number/email was registered in the past' mean?</h4>
                                                                                                        </div>
                                                                                                    </a>
                                                                                                    <div id="collapse112" className="panel-collapse collapse">
                                                                                                        <div className="panel-body"> If you receive this message then it means that your number or email was already used to register with DEI.<br/>
                                                                                                            If you’ve forgotten your password, you can follow the steps to creating a new password here.<br/>
                                                                                                            You should note that you are only allowed to open one DEI account. You can open additional trading accounts and access other products and services in DEI.</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="panel panel-default">
                                                                                                    <a data-toggle="collapse" data-parent="#accordion2" href="#collapse113">
                                                                                                        <div className="panel-heading">
                                                                                                            <h4 className="panel-title">How can I reset my DEI Password?</h4>
                                                                                                        </div>
                                                                                                    </a>
                                                                                                    <div id="collapse113" className="panel-collapse collapse">
                                                                                                        <div className="panel-body"> You can reset your password in 3 simple steps:
                                                                                                        <ol>
                                                                                                            <li>Enter your email</li>
                                                                                                            <li>Enter PIN</li>
                                                                                                            <li>Enter new password</li>
                                                                                                            </ol>
                                                                                                            Please make sure that you keep your password in a safe place and do not disclose it to any third parties.
</div>
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div className="panel panel-default">
                                                                                                    <a data-toggle="collapse" data-parent="#accordion2" href="#collapse114">
                                                                                                        <div className="panel-heading">
                                                                                                            <h4 className="panel-title">How do I become a verified client?</h4>
                                                                                                        </div>
                                                                                                    </a>
                                                                                                    <div id="collapse114" className="panel-collapse collapse">
                                                                                                        <div className="panel-body"> 

                                                                                                        Once you become a verified client, you will have access to all of DEI products and services. Verify your profile by uploading clear colour copies (mobile photo or a scan) of the following documents:<br/>
                                                                                                        1.  Proof of identity – passport, national identity card or driving license (if your identification document also states your correct residential address, then an additional proof of address document may not be required.)<br/>
                                                                                                        2. Proof of address – bank/card statement or utility bill. Examples of documents which can be provided are:<br/>
                                                                                                        * Water/gas/electric/internet/telephone bill.<br/>
                                                                                                        * Residency certificate or tenancy contract.
                                                                                                        
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                        </div> 

                                                                                        <div className="panel-group" id="accordion1">
                                                                                                <div className="panel panel-default">
                                                                                                    <a data-toggle="collapse" data-parent="#accordion1" href="#collapse11">
                                                                                                        <div className="panel-heading">
                                                                                                            <h4 className="panel-title">What are your trading accounts minimum deposits?</h4>
                                                                                                        </div>
                                                                                                    </a>
                                                                                                    <div id="collapse11" className="panel-collapse collapse">
                                                                                                        <div className="panel-body"> 

                                                                                                            *  Investment: $,000<br/>
                                                                                                            *  Investment: $,000<br/>
                                                                                                            *  Investment: $,000<br/>
                                                                                                        
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>


                                                                                                <div className="panel panel-default">
                                                                                                    <a data-toggle="collapse" data-parent="#accordion1" href="#collapse12">
                                                                                                        <div className="panel-heading">
                                                                                                            <h4 className="panel-title">What deposit/withdrawal methods do you offer?</h4>
                                                                                                        </div>
                                                                                                    </a>
                                                                                                    <div id="collapse12" className="panel-collapse collapse">
                                                                                                        <div className="panel-body"> DEI offers a variety of cryptocurrency payment methods including Bitcoin, Bitcoin Cash and Etherum.<br/>You should note that we do not accept cash deposits.</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="panel panel-default">
                                                                                                    <a data-toggle="collapse" data-parent="#accordion1" href="#collapse13">
                                                                                                        <div className="panel-heading">
                                                                                                            <h4 className="panel-title">Where can I find the status of my deposit/withdrawal/internal transfer?</h4>
                                                                                                        </div>
                                                                                                    </a>
                                                                                                    <div id="collapse13" className="panel-collapse collapse">
                                                                                                        <div className="panel-body"> You can find full details on your transactions in DEI by following the steps below.<br/>
1. Go to ‘My Transfers’.<br/>
2. Find the relevant transaction.<br/>
3. Click on the transaction ID number.</div>
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div className="panel panel-default">
                                                                                                    <a data-toggle="collapse" data-parent="#accordion1" href="#collapse14">
                                                                                                        <div className="panel-heading">
                                                                                                            <h4 className="panel-title">How does joint account work?</h4>
                                                                                                        </div>
                                                                                                    </a>
                                                                                                    <div id="collapse14" className="panel-collapse collapse">
                                                                                                        <div className="panel-body"> Creating a joint account means having a mutual understanding between two or more parties in investing in one of our esteemed portfolios. Both parties must have agreed on the percentage (ROI%) he or she would receive at the end of each investment.<br/>
Note: Pending debt by any party gets a limited time of three (3) months to pay up hence, the account would be suspended till debt is paid. This is to ensure income stability</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                        </div> 
                                                                        
                                                                        </div>
                </Flex>
                
            </Flex>




        </Flex>

        <Footer />
       
       </>
    )
}

export default FAQ;
