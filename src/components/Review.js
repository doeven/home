import React from 'react';
import{ 
    Flex,
    Box,
    Text,
    Heading,
    Image,
    SimpleGrid
} from '@chakra-ui/react';
import { CgQuote } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import avatar_male from '../assets/images/avatar_male.png';
import avatar_female from '../assets/images/avatar_female.png';

const Review = () => {
    return (
        <Flex
            direction={["column"]}
            bg="#f7f7f7"
        >
        <SimpleGrid columns={[1, 1, 2, 2]} spacing='5px' width={["100%", "100%", "90%", "100%"]}>

            <Box>
                <Image src="./images/testimonials.jpg"/>
            </Box>

            <Flex direction="column" justifyContent="center" ml={[0, "5%"]} p={[6,0]}>
                <Heading as="h3" fontSize={["2em", "3em"]} color="#016056">Testimonials</Heading>
                <Text my={[5, 10, 10, 10]} opacity="0.5">Some reviews from our customers over time.</Text>
                
                
                {/* <Box color="#016056" fontWeight="bold" fontSize="3em"><CgQuote /></Box> */}
                <Text my={[3, 10, 10, 10]} fontSize={["0.8em","1em","1em","1em"]}>“Since investing with {`${process.env.REACT_APP_NAME_STANDARD}`}, they have worked to get a clear understandable plan for our future which gives us confidence and security knowing what kind of lifestyle we can lead. In addition, we have seen gains in our portfolio in a short space of time which is a reassuring indicator. Our meetings are consultative and personal with all decisions made after full discussion and clear explanation.”</Text>
                <Flex bg="#fff" p={[4]} borderRadius="3px" width={["60%","40%"]}>
                    <Image src={avatar_female} width="30px" height="30px" borderRadius="50%"/>
                    <Box ml="10px" ><Text color="#016056">Amy Hendrick</Text>
                        <Flex color="#FBB03B">
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </Flex>
                    </Box>
                </Flex>


                {/* <Box color="#016056" fontWeight="bold" fontSize="3em"><CgQuote /></Box> */}
                <Text my={[3, 10, 10, 10]} fontSize={["0.8em","1em","1em","1em"]}>"We have been with {`${process.env.REACT_APP_NAME_STANDARD}`} now for three years. They have made an effort to get to know us and so the service we receive feels very personal. {`${process.env.REACT_APP_NAME_STANDARD}`} has helped us to focus on what we want out of life and is helping us realise our plans. The peace of mind we have from knowing our finances are being so well managed is priceless."</Text>
                <Flex bg="#fff" p={[4]} borderRadius="3px" width={["60%","40%"]}>
                    <Image src={avatar_male} width="30px" height="30px" borderRadius="50%"/>
                    <Box ml="10px" ><Text color="#016056">Bob Johnson</Text>
                        <Flex color="#FBB03B">
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </Flex>
                    </Box>
                </Flex>




            </Flex>

        </SimpleGrid>
        </Flex>
    )
}

export default Review
