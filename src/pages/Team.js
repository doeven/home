import React, {useEffect} from 'react';
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
import team from '../assets/images/pages/team.jpeg'
import packages from '../assets/images/packages.jpg';
import avatar_male from '../assets/images/avatar_male.png';
import avatar_female from '../assets/images/avatar_female.png';


const Team = () => {

	document.title = `Meet the Team -  ${process.env.REACT_APP_NAME_STANDARD}`;


    useEffect(()=> {
        window.scrollTo(0, 0);
    });

    return (
        <>
       <Box  
        height="70vh"
        bg="#000"
        overflow="hidden"
        backgroundImage={team}
        backgroundSize="cover"
        >
        <Nav/>
        <Flex my={10} justifyContent="center" h="80vh"  alignItems="center">
            <Heading mt={[10]} as='h1' size='xl' color='white'>Meat the Team</Heading>
        </Flex>
        </Box>

        <Flex
        direction="column"
        mb={10}
        mt={10}
        >
            <Flex 
            justifyContent="center"
            alignItems="center"
            direction="column"
            >
                {/* <Heading width={["80%","60%"]} textAlign="center" mt={["5%"]} fontSize={["2em", "3em"]}>Privacy</Heading> */}
                
                <SimpleGrid columns={[1, 2, 2, 4]} spacing='10px' width={["100%", "90%", "90%", "80%"]}>
                    <Box>
                        <TeamCard
                        img={avatar_male}
                        name="John Reels"
                        preview="John is a serial investor, and has invested in many profitable assets over the years. He manages our investments to make sure that we are investing in the right thing. His vast knowledge of people and businesses makes him special to the team. With an array of abilities within him, he can always step up to handle our negotiations and bring back good deals to the company. Being proficient at handling finances, he also provides financial advice to the company which has helped to earn the trust of the company’s clients."
                        title="CEO & Founder"
                        mr={[0,10]}
                        mb={[10,0]}
                        />
                    </Box>

                    <Box>
                        <TeamCard
                        img={avatar_male}
                        name="Henry Bowers"
                        preview="Henry is our CTO and Co-Founder; he has 18 years of experience in Trading and Arbitrage. His experience in the field has granted him the initiative in handling situations ranging from devising strategies, managing functions and dealing with technological advancements. Over the years, he has worked in various firms revolving around business strategies, finances, technology and more. He has anchored strategic/tech sectors in the past and his work is still standing as a reflection of his competence. And to the company, he has contributed immensely to company’s influence in the industry."
                        title="Co-Founder"
                        mr={[0,10]}
                        mb={[10,0]}
                        />
                    </Box>

                    <Box>
                        <TeamCard
                        img={avatar_male}
                        name="John Cater"
                        preview="With an eloquence of high level of proficiency, John has really got a way with words that makes him so skilled at marketing himself effortlessly. He is responsible for various successful marketing strategies which has proved valuable to the company. Being very objective in his approach towards situations, he is always able to research, plan, develop and implement result-oriented strategies capable of securing a spot for the company in the marketplace. And speaking of public relation tactics, John still got a knack for it."
                        title="Chief Marketing Officer"
                        mr={[0,10]}
                        mb={[10,0]}
                        />
                    </Box>

                    <Box>
                        <TeamCard
                        img={avatar_female}
                        name="Tanya Rios"
                        preview="Tanya is a web engineer with 20 years of experience. She has mastered the blockchain technology and understands how to leverage from trading over the years. Being an asset to the company, she has used her skills overtime to help enhance and facilitate the company’s working process, also promoting good working relationship at the same time. Needless to say, she’s good at what she does, granting her an undeniable spot in the team. Tanya is also recognized for her respect towards the company’s ethics and other working culture, applying them on every level of her dealings."
                        title="Investment Manager"
                        mr={[0,10]}
                        mb={[10,0]}
                        />
                    </Box>

                    <Box>
                        <TeamCard
                        img={avatar_male}
                        name="Blake Fletcher"
                        preview="With over 10 years of experience as a software developer, Blake Rios has been able to build a lot of softwares and has been able to partner in building major software project. Blake is our lead developer here at {`${process.env.REACT_APP_NAME_STANDARD}`} and he’s been proving his worth undyingly. Blake is not just the regular type of developer, he’s always improving and updating our digital assets by working with only the most recent technologies, offering us high level securities. Far be it from any form of exaggeration but as a matter of fact, Blake is one of the best we’ve got on board"
                        title="Chief Software Engineer"
                        mr={[0,10]}
                        mb={[10,0]}
                        />
                    </Box>
                </SimpleGrid>
                
                
            </Flex>




        </Flex>

        <Footer />
       
       </>
    )
}

export default Team;
