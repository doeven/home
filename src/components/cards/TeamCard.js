import {
    Flex,
    Text,
    Image,

    Box
} from "@chakra-ui/react";




const LearnCard = ({img,name,title,preview, mr,mb}) => {
    return (
       <Flex
       direction="column"
       borderRadius='20px'
     
       cursor='pointer'
       boxShadow="lg"
       mr={mr}
       mb={mb}
       >
           <Image borderRadius="50%" flex="1"  src={img}  _hover={{ transform:'scale(1.004)',transition: '0.4s' , transitionTimingFunction: 'ease-out-in'}}/>
           <Box p='3' flex="2">
            <Flex   >
            
                <Text>{title}</Text> 
            
            </Flex>
            <Text color="#016056"fontSize='1.2em' fontWeight='bold'  mt='4'>{name}</Text>
            <Text fontSize='sm' color='#333'mt='4'>{preview}</Text>
            </Box>
       </Flex>
    )
}

export default LearnCard