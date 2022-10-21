import React from 'react';
import{ 
    Flex,
    Image,
    Text,
    Link,
     Heading,
} from '@chakra-ui/react';

const NewsCard = ({title, image, preview, my, mx, url}) => {
    return (
        <Flex
        direction="column"
        borderRadius="lg"
        boxShadow="xl"
        bg="white"
        p={[4, 8, 8, 8]}
        my={my}
        mx={mx}
        >
            <Image src={image} width={"50%"} />
            <Heading
            color="#016056"
            fontSize="lg"
            my={[8]}
            ><Link href={url} target="_blank">{title}</Link></Heading>
            <Text fontSize={["0.8em", "1em", "1em", "1em"]}>{preview}</Text>
        </Flex>
    )
}

export default NewsCard
