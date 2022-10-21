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
import dictionary from '../assets/images/pages/dictionary.jpg';
import avatar_male from '../assets/images/avatar_male.png';
import avatar_female from '../assets/images/avatar_female.png';

const Dictionary = () => {

	document.title = `Dictionary and Crypto Terms -  ${process.env.REACT_APP_NAME_STANDARD}`;


    useEffect(()=> {
        window.scrollTo(0, 0);
    });

    return (
        <>
       <Box  
        height="70vh"
        bg="#000"
        overflow="hidden"
        backgroundImage={dictionary}
        backgroundSize="cover"
        >
        <Nav/>
        <Flex my={10} justifyContent="center" h="80vh"  alignItems="center">
            <Heading mt={[10]} as='h1' size='xl' color='white'>Dictionary</Heading>
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
                <Flex width={["80%", "65%"]} direction={["column", "column"]} m={[10]}>

                    
            <Text fontWeight="bold">
              B
            </Text> 
            
            
            <Box p="30px" _hover={{
                            bg:"#EEE",
                            boxShadow:"#457",
                            borderRadius: "5px"
                        }}>
                        <Text fontWeight="bold">
                            Bear
                        </Text> <Text>This refers to the people who are expecting the price of a crypto asset to fall.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Bearish
                        </Text> <Text>This refers to the sentiments of a trader who thinks a crypto asset will depreciate in price.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Bitcoin Core
                        </Text> <Text>This is the main software that allows users to interact with the Bitcoin blockchain network.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Bitcoin Halving 
                        </Text> <Text>This is when the miner's bitcoin reward is cut in half.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Block Height
                        </Text> <Text>Block height is a measurement of the number of blocks that came before a particular block in a blockchain network.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Block Reward
                        </Text> <Text>A block reward is a payment awarded to a blockchain network miner upon successfully validating a new block.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Block Size
                        </Text> <Text>In blockchain technology, block size refers to the amount of data about transactions a single block in the chain can carry.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Block Time
                        </Text> <Text>Block time refers to the amount of time it takes for a new block to be added to a blockchain.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Brain Wallet
                        </Text> <Text>A brain wallet refers to a crypto private key or seed phrase that has been memorized by its owner.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Brute Force Attack
                        </Text> <Text>This refers to an attack in which the attacker tries to bypass an accounts security.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Bubble
                        </Text> <Text>A bubble occurs when the prices of an asset get really inflated and then crashes,</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            BUIDLER
                        </Text> <Text>this refers to members of the blockchain and crypto community who are helping to improve adoption by contributing to the construction of blockchain infrastructure over time.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Bull Market
                        </Text> <Text>A bull market is a market that is on the rise and where the economy is sound.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Bull Run
                        </Text> <Text>A bull run is a specific time period in a financial market cycle during which asset prices can experience a significant upward trend.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Bull Trap
                        </Text> <Text>A bull trap is a market signal that signifies an initial recovery in the price of a declining asset, followed by a further decline.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Bullish
                        </Text> <Text>A person who is bullish on bitcoin may also be referred to as a bitcoin "bull."</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Burn/Burning
                        </Text> <Text>In this process, the miners and developers intentionally remove the coins from circulation.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Buy the Dip / Buying the dip
                        </Text> <Text>In this sense, a dip is regarded as a Crypto flash sale that should be taken advantage of to acquire more of the said Crypto=asset.</Text></Box>


                                                <Text fontWeight="bold">
                                    C
                                    </Text> 
                                    
                                    
                                    
                                    <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Cardano (ADA)
                        </Text> <Text>Cardano is a public open-source and decentralized blockchain platform. it is designed to be a more efficient alternative to proof of work systems.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Central Bank
                        </Text> <Text>A central bank controls the monetary policy and currency of a nation-state.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Central Bank Digital Currency (CBDC)
                        </Text> <Text>A central bank digital currency (CBDC) is a digital version of a country's fiat currency.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Centralization
                        </Text> <Text>This refers to the level of privilege and distribution of nodes verifying and managing a blockchain network.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Chainlink (LINK)
                        </Text> <Text>Chainlink is the "oracle network" that serves real-time data to smart contracts on the blockchain.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Ciphertext
                        </Text> <Text>Ciphertext refers to encrypted text that is unreadable without authorized access.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Circulating Supply
                        </Text> <Text>This refers to the total number of tokens of any cryptocurrencies that are available on the market at a given time.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Coin Swap (or Token Swap)
                        </Text> <Text>This happens when a platform replaces an existing token with a significantly updated one.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Cold Storage
                        </Text> <Text>This is the offline storage of cryptocurrencies.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Cold Wallet
                        </Text> <Text>A cold wallet is a cryptocurrency wallet that is not connected to the internet.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Confirmation 
                        </Text> <Text>This is the measurement of how many blocks have been finalized since a transaction was sent from one address to another.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Confirmation Time
                        </Text> <Text>The is the time frame it takes for transactions sent from one address to another to be finalized.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Consensus Mechanism
                        </Text> <Text>This is an algorithm that participants in a blockchain network use to reach an agreement on the state of the blockchain ledger.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Correction
                        </Text> <Text>This is an occurrence that signifies that the market or a specific asset has just had a large drop in price from its recent higher price.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Cost Basis
                        </Text> <Text>The is the pegged starting value of a cryptocurrency that you own.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Counterparty
                        </Text> <Text>This protocol allows the issuance of tokens on the Bitcoin blockchain.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Crypto Ransomware
                        </Text> <Text>In this case, a user's access to their data is blocked by an attacker using malware.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Crypto Trading Pairs
                        </Text> <Text>This means that you can view the value of one cryptocurrency asset against another.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Crypto-Backed Loan
                        </Text> <Text>This lives on the blockchain and requires borrowers to provide cryptocurrency as collateral.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Crypto-Backed Stablecoin
                        </Text> <Text>They are pegged to the value of an underlying cryptocurrency asset.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Crypto-Collateralized Loan
                        </Text> <Text>For this loan, the lender takes a cryptocurrency deposit as collateral to issue a loan in another cryptocurrency or fiat currency.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Crypto-jacking
                        </Text> <Text>in this instance, the victim's computer, or other hardware, is made a crypto mine without their knowledge</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Cryptoart
                        </Text> <Text>is native to a blockchain and has its own particular aesthetic.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Cryptocurrency
                        </Text> <Text>Cryptocurrency is a digital asset that circulates on the internet as a medium of exchange.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Cryptocurrency Exchange
                        </Text> <Text>This is an exchange where digital assets can be sold traded and bought, sold, for fiat currency or other cryptocurrencies.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Cryptocurrency Pair (Trading Pair)
                        </Text> <Text>This is a function available on exchanges that allow users to view the value of one cryptocurrency asset against another.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Cryptocurrency Wallet
                        </Text> <Text>Has a public address that people can use to send you digital assets, and a private key to confirm the transfer of digital assets to others.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Cryptographic Proof
                        </Text> <Text>This is used to prove and verify` data without revealing any other details about the data itself.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Cryptomining
                        </Text> <Text>This process allows network nodes on a Proof-of-Work consensus mechanism to verify transactions and add new blocks to the blockchain.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Cryptosis
                        </Text> <Text>This refers to the endless desire to consume every bit of available information on cryptocurrencies.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Custodial Wallet
                        </Text> <Text>Here a third party holds a user's private keys and cryptocurrency funds.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Cyber Attack
                        </Text> <Text>This is an intrusion on online data carried out by criminals against a computer network, or related software/hardware device.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Cybersecurity
                        </Text> <Text>This is also known as computer security or information technology (IT) security.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Cypherpunk
                        </Text> <Text>This includes individuals (cypherpunks) who advocate the widespread use of cryptography, blockchain, as a means for engendering social and political change.</Text></Box>


                        <Text fontWeight="bold">
                                    D
                                    </Text> <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            DAO (Decentralized Autonomous Organization )
                        </Text> <Text>This is a blockchain-based organization that is democratically managed by members through self-executing open-source code and formalized by smart contracts.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            dAPI
                        </Text> <Text>This stands for Decentralized Application Programming Interface</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            DApps
                        </Text> <Text>This stands for Decentralized Applications which refers to applications designed by developers and deployed on a blockchain to carry out actions without intermediaries.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Day Trading
                        </Text> <Text>This involves taking a position in the market and exiting that same day or within a 24-hour timeframe.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            DCA (Dollar Cost Averaging) 
                        </Text> <Text>This is the short form of "Dollar Cost Averaging" which is an investing strategy where an investor invests a total sum of money in small increments over a period of time, in a crypto asset.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Dead Coin
                        </Text> <Text>These cryptocurrencies have been abandoned by non-functioning projects.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Decentralization 
                        </Text> <Text>This simply refers to the distribution of power away from a central point.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Decryption
                        </Text> <Text>Often relates to methods of unencrypting data manually, through a unique identifier code, or using specialized cryptographic keys.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            DeFi
                        </Text> <Text>This is the short form of Decentralized Finance which refers to financial activities that are conducted without the involvement of an intermediary like a bank, the government or other financial institution.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Delegated Proof of Stake (DPoS)
                        </Text> <Text>This encourages users to confirm network data and ensure system security by staking collateral.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Delisting
                        </Text> <Text>This is the removal of a crypto asset from an exchange.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Desktop Wallet
                        </Text> <Text>This kind of software wallet is downloaded directly onto a computing device. They are almost always non-custodial in nature,</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Digital Asset
                        </Text> <Text>All cryptocurrencies are digital assets, while not all digital assets are cryptocurrencies.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Digital Dollar
                        </Text> <Text>This is the tokenized version of the United States Dollar.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Digital Signature
                        </Text> <Text>In cryptocurrency, this process involves using a private key to digitally sign a transaction.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Distributed Ledger
                        </Text> <Text>This refers to a system of recording information that is distributed or spread across several devices.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Distributed Ledger Technology (DLT)
                        </Text> <Text>is a shared database upon which transactions and associated details are recorded by different parties all at once.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Do Your Own Research (DYOR)
                        </Text> <Text>This term is used to encourage potential investors to study, analyze, and research thoroughly before investing.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Double-Spend Problem
                        </Text> <Text>This refers to a critical risk with digital currencies, in which the same funds can be copied and spent more than once.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Due Diligence 
                        </Text> <Text>This refers to a thorough investigation, audit, or review performed to confirm the facts of a matter under consideration.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Dump
                        </Text> <Text>This refers to the crash in the price of a crypto asset which is triggered by massive sell-offs after an associated spread of fear, uncertainty and doubt.</Text></Box>

                        <Text fontWeight="bold">
                                    E-G
                                    </Text> <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Enhanced Due Diligence (EDD)
                        </Text> <Text>This is (KYC) process provides a better background knowledge of potential business partnerships and highlights risks that cannot be detected via  Due Diligence (DD) alone.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Escrow
                        </Text> <Text>This refers to a third party that holds the financial resources presented for a transaction on behalf of other parties when both parties involved in the transaction may not trust each other.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Ether (ETH)
                        </Text> <Text>Ether (ETH) is the native cryptocurrency of the Ethereum blockchain and plays an integral role in the Ethereum ecosystem.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Ethereum
                        </Text> <Text>Launched in 2015 as a decentralized, blockchain-based global supercomputer to serve as the foundation for an ecosystem of interoperable, decentralized applications (dApps) powered by token economies and automated smart contracts.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Ethereum 2.0
                        </Text> <Text>This is a significant set of updates to the Ethereum blockchain intended to vastly improve its scalability and broader utility.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Exchange
                        </Text> <Text>A digital marketplace that facilities the buying and selling of cryptocurrencies.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Fair Launch
                        </Text> <Text>This is the equitable and transparent initial distribution of coins in a blockchain project.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Fear of Missing Out (FOMO)
                        </Text> <Text>Is an acronym that refers to the feeling that follows missing out on a specific investment opportunity after the price of a cryptocurrency or another asset substantially rises.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Fiat Currencies
                        </Text> <Text>These are traditional currencies or paper money, minted by the Central Banks or Federal Reserves of Countries.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            FOMO
                        </Text> <Text>This stands for "Fear of Missing Out".</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Fractal
                        </Text> <Text>This is a pattern of price movement which has occurred earlier and is likely to occur again.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            FUD
                        </Text> <Text>This stands for Fear, Uncertainty and Doubt. T</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Gas
                        </Text> <Text>This refers to a fee that is being paid to use a service on a blockchain network.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Genesis Block
                        </Text> <Text>This refers to the first block of a cryptocurrency ever mined.</Text></Box>

                        <Text fontWeight="bold">
                                    H
                                    </Text> <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Halving
                        </Text> <Text>This refers to when the amount of new Bitcoin entering circulation gets halved.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Hash
                        </Text> <Text>This is a unique string of numbers and letters that identify blocks or transactions done on a blockchain.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            HODL 
                        </Text> <Text>This stands for “Hold on For Dear Life”</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Hot Wallet
                        </Text> <Text>This is a software-based cryptocurrency wallet that is connected to the internet.</Text></Box>

                        <Text fontWeight="bold">
                                    I
                                    </Text> <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            ICO
                        </Text> <Text>This  stands for "Initial Coin Offering"</Text></Box>

                        <Text fontWeight="bold">
                                    K
                                    </Text> <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            KYC:
                        </Text> <Text>This  stands for “Know Your Customer”</Text></Box>

                        <Text fontWeight="bold">
                                    L
                                    </Text> <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Leverage
                        </Text> <Text>This is the extra amount of asset bought or sold which is over your capital.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Limit Order
                        </Text> <Text>A limit order is an order to buy or sell a crypto asset at a specific price or desired price.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Liquidation
                        </Text> <Text>This happens when the trade or position goes the opposite direction.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Liquidity
                        </Text> <Text>This refers to the measure of how actively a crypto asset is being traded in the market.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Long Position
                        </Text> <Text>This is simply a buy position with leverage. You enter a long position when you expect the price of a crypto asset to rise.</Text></Box>

                        <Text fontWeight="bold">
                                    U-Z
                                    </Text> 

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            Volatility
                        </Text> <Text>This is the degree of uncertainty about the future price of a crypto asset.</Text></Box>

                        <Box p="30px" _hover={{
                                                    bg:"#EEE",
                                                    boxShadow:"#457",
                                                    borderRadius: "5px"
                                                }}>
                                                <Text fontWeight="bold">
                            White Paper
                        </Text> <Text>This refers to documents that are created by the developers of a certain digital asset. These documents offer comprehensive information on the digital asset as well as its underlying technology.</Text></Box>





                </Flex>
                
            </Flex>




        </Flex>

        <Footer />
       
       </>
    )
}

export default Dictionary;
