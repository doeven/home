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
import security from '../assets/images/pages/security.jpg'

const Security = () => {

	document.title = `Security -  ${process.env.REACT_APP_NAME_STANDARD}`;


    useEffect(()=> {
        window.scrollTo(0, 0);
    });

    return (
        <>
       <Box  
        height="70vh"
        bg="#000"
        overflow="hidden"
        backgroundImage={security}
        backgroundSize="cover"
        >
        <Nav/>
        <Flex my={10} justifyContent="center" h="80vh"  alignItems="center">
            <Heading mt={[10]} as='h1' size='xl' color='white'>Security</Heading>
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
                    <h4>How You Can Protect Yourself</h4>
    

                    <p className="myabtP">Beware Fraudulent E-Mails and Web Sites “Phishing” is a rampant Internet scam that relies on “spoofed” e-mails, purportedly from well known firms, to lure individuals to fraudulent Web sites that look and feel like the well known firm’s Web site. At such Web sites, victims are asked to provide personal information about themselves, such as their name, address and credit card number. These fraudulent e-mails and Web sites may also try to install malicious software on your computer that monitors your activities and sends sensitive personal information (your passwords, for example) to a remote location. With that information, criminals can commit identity theft, credit card fraud and other crimes. You can protect yourself by following these best practices when using the Internet:</p>
                    
                    <p className="myabtP">* Be aware that e-mail is insecure and easy to forge. E-mail that appears to be from a friend or company you do business with may be fraudulent and designed to trick you into providing personal information about yourself or installing dangerous software.</p>

                    <p className="myabtP">Do not respond to e-mails or pop-up messages that solicit your personal information: name, address, Social Security number, etc.</p>

                    <p className="myabtP">nly access trusted Web sites that you found other than by clicking on a Web site address in an e-mail and then added to your browser’s bookmarks. Otherwise, manually type the address into your browser and then bookmark it. When you receive an e-mail, rather than clicking on a Web site address in the e-mail, which can bring you to a fraudulent site, use the bookmark to access that site.</p>
                    
                    <p className="myabtP">If you receive an e-mail from daily green partners you are uncertain about, or which you believe to be fraudulent, please forward it to abuse@{`${process.env.REACT_APP_NAME_ULR}`}. daily green partners will investigate the e-mail and respond back to you. If you are a client of the firm, please notify your sales representative or investment professional, as well. Please be advised that from time to time external parties may pose as daily green partners through fraudulent communications via email and phone calls in scams to market fake prospectus documents and to solicit monetary payments.  It is important to know that any communication you receive from daily green partners would come from an @dailygreenpartners.org e-mail address (not from a free email account such as Yahoo, Gmail or any other domain outside of “@dailygreenpartners.org”) and/or be found on the dailygreenpartners.org website.  If you receive a communication that you believe may not be from daily green partners, please contact us. Personal Computer Security Tips No security practice is foolproof. You can, however, help protect yourself by following these best practices to secure your personal computer:</p>
                    
                    <p className="myabtP">Install antivirus and anti-spyware software on your computer and make sure it is up to date with the most recent virus/spyware signatures.</p>
                    <p className="myabtP">Make sure your computer is up to date with the most recent software patches. Patches are software updates that often address software vulnerabilities that phishing scams and viruses exploit.</p>
                    <p className="myabtP">Install a firewall between your computer and the Internet. A firewall is software or hardware that acts as a buffer between your computer and the Internet that limits access to your computer and blocks communications from unauthorized sources.</p>
                    
                    <p className="myabtP">Kindly contact the manufacturer of your computer for additional information and recommendations.</p>
                    
                    <h4>Glossary of Terms</h4>
                    
                    
                    <p className="myabtP">* Firewall: A system designed to prevent unauthorised access to or from a private network. Firewalls can be implemented in both hardware and software, or a combination of both. Firewalls are frequently used to prevent unauthorised Internet users from accessing private networks connected to the Internet, </p>
                    
                    <p className="myabtP">* Patch: Also called a service patch, a fix to a program bug. A patch is an actual piece of object code that is inserted into (patched into) an executable program. Patches typically are available as downloads over the Internet.</p>
                    
                    <p className="myabtP">* Antivirus Software: A utility that searches a hard disk for viruses and removes any that are found. Most antivirus programs include an auto-update feature that enables the program to download profiles of new viruses so that it can check for the new viruses as soon as they are discovered.</p>
                    
                    <p className="myabtP">* URL: Abbreviation of Uniform Resource Locator, the global address of documents and other resources on the World Wide Web.</p>
                    
                    <p className="myabtP">* Spoof: To fool. In networking, the term is used to describe a variety of ways in which hardware and software can be fooled. </p>
                    
                    <p className="myabtP">* Phishing: Phishing attacks use ”spoofed” e-mails and fraudulent Web sites designed to fool recipients into divulging personal financial data such as credit card numbers, account usernames and passwords, Social Security numbers, etc. By hijacking the trusted brands of well-known banks, online retailers and credit card companies, phishers are able to convince up to 5% of recipients to respond to them.</p>

                    <p className="myabtP">* Computer Virus: A program or piece of code that is loaded onto your computer without your knowledge and runs against your wishes. Viruses can also replicate themselves. All computer viruses are manmade. An even more dangerous type of virus is one capable of transmitting itself across networks and bypassing security systems.</p>

                    
                                                                                                                                                                                
                                                                                        </div>

                </Flex>
                
            </Flex>




        </Flex>

        <Footer />
       
       </>
    )
}

export default Security;
