import React, {useState, useEffect} from 'react';
import{ 
    Flex,
    Box,
    Text,
    Grid,
    Heading,
    Image,
} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import {http} from '../funcs';

import Wave from '../assets/svgs/wavy.svg'
import logo_dark from '../assets/images/logo-dark.png';
import bitcoin_3d_m9dz2v from '../assets/svgs/bitcoin_3d_m9dz2v.svg';


const Footer = () => {


    const [settings, setSettings] = useState({});

        useEffect(() => {
            http.get(`api/settings`).then( response => {
                console.log(response);
                setSettings(response.data);
            })
            .catch(error => { console.log(error);  });    
        }, []);


    return (
        <Flex
        bgColor="#016056"
        minH="100vh"
        color="#fff"
        bgImage={Wave}
        backgroundRepeat="no-repeat"
        bgRepeat="no-repeat"
        bgPosition="bottom"
        direction="column"
        px={[5, 8, 8, 8]}
        py={['6%']}
        fontSize={['lg']}
        >
            <Flex
            direction="column"
            mb={[10]}
            >
                <Box>
                    {/* <Heading>Brand Name</Heading> */}
                    <Image 
                                src={logo_dark}
                                mt="5px"
                                mb="5px"
                              />
                </Box>
                <Flex
                direction={['column', 'row']}
                >
                    <Box mr={[0, 10, 10, 10]}>
                        <h4>Risk Warning</h4>
                        <Text my={[0, 6, 6, 6]} fontSize={["0.8em", "1em", "1em", "1em"]}>
                        The financial products offered via this website include digitals, contracts for difference (CFDs), and other complex derivatives and financial products. Trading options may not be suitable for everyone. Trading CFDs carries a high level of risk without proper leverage and can work to your disadvantage. As a result, the products offered on this website is suitable for all investors because of the little risk of losing your invested capital. You should never try to invest money on your own that you cannot afford to lose, and never trade yourself with borrowed money, we are in it for you. Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about Secure and responsible trading. Click here to read {`${process.env.REACT_APP_NAME_STANDARD}`} <Link to="/privacy">PRIVACY POLICY</Link>
                        </Text>
                    </Box>
                    <Image src={bitcoin_3d_m9dz2v} width={["20%"]}/>
                </Flex>
            </Flex>
            <hr style={{opacity:0.5}} />
            {/* <Flex> */}
                <Grid templateColumns={["repeat(2, 2fr)","repeat(4, 1fr)"]} gap={6} mt={[5, 10, 10, 10]}  >
                    <Box>
                    
                        <Heading fontSize={["1em", "1.2em", "1.2em", "1.2em"]} mb={[4]}>Let's Begin</Heading>
                        <Box><Link to="/"><Text fontSize={["0.8em", "1em", "1em", "1em"]}>Home</Text></Link></Box>
                        <Box><a href={`${process.env.REACT_APP_WEB_APP_URL}/register`} target="_blank"><Text fontSize={["0.8em", "1em", "1em", "1em"]}>Register</Text></a></Box>
                        <Box><a href={`${process.env.REACT_APP_WEB_APP_URL}/login`} target="_blank"><Text fontSize={["0.8em", "1em", "1em", "1em"]}>Login</Text></a></Box>

                        <Flex fontSize="14px" margin="15px auto" TextAling="center">&copy; 2022 {process.env.REACT_APP_NAME_STANDARD} and Trading<br/> All Rights Reserved.</Flex>
                    
                        
                    </Box>
                    <Box>
                        <Heading fontSize={["1em", "1.2em", "1.2em", "1.2em"]} mb={[4]}>About Us</Heading>
                        <Box><Link to="/#how"><Text fontSize={["0.8em", "1em", "1em", "1em"]}>Our Services</Text></Link></Box>
                        <Box><Link to="/faq"><Text fontSize={["0.8em", "1em", "1em", "1em"]}>FAQs</Text></Link></Box>
                        <Box><Link to="/about"><Text fontSize={["0.8em", "1em", "1em", "1em"]}>About Us</Text></Link></Box>
                        <Box><Link to="/why-choose-us"><Text fontSize={["0.8em", "1em", "1em", "1em"]}>News Room</Text></Link></Box>

                        {settings &&
                            <>
                                <Box><Link to="#"><Text fontSize={["0.8em", "1em", "1em", "1em"]}>Phone: {settings?.mobile}</Text></Link></Box>
                                <Box><a href={`mailto:${settings.email}`}><Text fontSize={["0.8em", "1em", "1em", "1em"]}>Email: {settings?.email}</Text></a></Box>
                            </>
                        }
                        
                      
                    </Box>
                    <Box>
                        <Heading fontSize={["1em", "1.2em", "1.2em", "1.2em"]} mb={[4]}>Diversified Portfolios</Heading>
                        <Box><Link to="/oil-and-gas"><Text fontSize={["0.8em", "1em", "1em", "1em"]}>Oil & Gas</Text></Link></Box>
                        <Box><Link to="/forex"><Text fontSize={["0.8em", "1em", "1em", "1em"]}>Forex</Text></Link></Box>
                        <Box><Link to="/agric-and-infrastructure"><Text fontSize={["0.8em", "1em", "1em", "1em"]}>Agriculture</Text></Link></Box>
                        <Box><Link to="/real-estate"><Text fontSize={["0.8em", "1em", "1em", "1em"]}>Real Estate</Text></Link></Box>
                        <Box><Link to="/gold"><Text fontSize={["0.8em", "1em", "1em", "1em"]}>Gold</Text></Link></Box>
                    </Box>
                    <Box>
                        <Heading fontSize={["1em", "1.2em", "1.2em", "1.2em"]} mb={[4]}>Learn</Heading>
                        <Box><Link to="/privacy"><Text fontSize={["0.8em", "1em", "1em", "1em"]}>Privacy Policy</Text></Link></Box>
                        <Box><Link to="/security"><Text fontSize={["0.8em", "1em", "1em", "1em"]}>Security</Text></Link></Box>
                        <Box><Link to="/resources/dictionary"><Text fontSize={["0.8em", "1em", "1em", "1em"]}>Dictionary</Text></Link></Box>
                        <Box><Link to="/affiliates"><Text fontSize={["0.8em", "1em", "1em", "1em"]}>Affiliates</Text></Link></Box>
                        <Box><Link to="/wallet"><Text fontSize={["0.8em", "1em", "1em", "1em"]}>Wallet</Text></Link></Box>
                    </Box>
                    
                </Grid>
            {/* </Flex> */}

            
        </Flex>
    )
}

export default Footer
// 016056