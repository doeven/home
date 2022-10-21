import {
    Flex,
    Text,
    Image,

    Box
} from "@chakra-ui/react";




const LearnCard = ({img,title,duration,min, max, description, mr,mb, roiAll,roiDay}) => {
    return (
       <Flex
       direction="column"
       borderRadius='20px'
     
       cursor='pointer'
       boxShadow="lg"
       mr={mr}
       mb={mb}
       >
           <Image borderRadius="20px 20px 0 0" flex="1"  src={img}  _hover={{ transform:'scale(1.004)',transition: '0.4s' , transitionTimingFunction: 'ease-out-in'}} maxHeight="170px" />
           {/* <Box borderRadius="20px 20px 0 0" flex="1" style={{ backgroundImage: "url("+img+")", backgroundPosition: "center", backgroundSize: "cover", opacity: "1", height: "170px", width: "contain", backgroundRepeat: "no-repeat" }}></Box> */}

           <Box p='10' flex="2">
           <Text color="#016056"fontSize='1.2em' fontWeight='bold'  mb='2'>{title}</Text>

            <Flex mt="10px" mb="10px" >
                <Text>Min: <strong>${min}</strong></Text> 
                <Text mx={[4]}>Max: $<strong>{max}</strong> </Text> 
            </Flex>

            <Flex mt="10px" mb="10px" p="10px" borderTop="1px solid #01605633" borderBottom="1px solid #01605633">
                <Text>Time: <strong>{duration}</strong></Text> 
            </Flex>

            <Flex mt="10px" mb="10px" >
                <Text>ROI: <strong>{roiAll}%</strong></Text> 
                <Text mx={[4]}>Daily: <strong>{roiDay}%</strong> </Text>   
            </Flex>
            
            <Text fontSize='sm' color='#333'mt='4'>{description}</Text>
            </Box>
       </Flex>
    )
}

export default LearnCard