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
import forex from '../assets/images/pages/forex.jpg';
import avatar_male from '../assets/images/avatar_male.png';
import avatar_female from '../assets/images/avatar_female.png';

const Forex = () => {

	document.title = `Forex -  ${process.env.REACT_APP_NAME_STANDARD}`;


    useEffect(()=> {
        window.scrollTo(0, 0);
    });

    return (
        <>
       <Box  
        height="70vh"
        bg="#000"
        overflow="hidden"
        backgroundImage={forex}
        backgroundSize="cover"
        >
        <Nav/>
        <Flex my={10} justifyContent="center" h="80vh"  alignItems="center">
            <Heading mt={[10]} as='h1' size='xl' color='white'>Forex</Heading>
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

                        <p className="myabtP">Forex, also known as foreign exchange, FX or currency trading, is a decentralised global market where all the world's currencies trade. The forex market is the largest, most liquid market in the world with an average daily trading volume exceeding $5 trillion. All the world's combined stock markets don't even come close to this. But what does that mean to you? Take a closer look at forex trading and you may find some exciting trading opportunities unavailable with other investments.
                        Just like stocks, you can trade currency based on what you think its value is (or where it's headed). But the big difference with forex is that you can trade up or down just as easily. If you think a currency will increase in value, you can buy it. If you think it will decrease, you can sell it. With a market this large, finding a buyer when you're selling and a seller when you're buying is much easier than in in other markets. Maybe you hear on the news that China is devaluing its currency to draw more foreign business into its country. If you think that trend will continue, you could make a forex trade by selling the Chinese currency against another currency, say, the US dollar. The more the Chinese currency devalues against the US dollar, the higher your profits. If the Chinese currency increases in value while you have your sell position open, then your losses increase and you want to get out of the trade.</p>
                        <p className="myabtP">Forex Investment Plans is an investment system designed specifically for online investors. To make it easier for you and to reduce administrative expenses, we use the so-called e-currencies (also referred to as digital currencies or electronic payment systems) in our operations. Thus, you do not need to have a bank account, do not have to incur various hidden fees in order to benefit from investing your funds with us. Investing with us is absolutely hassle-free and requires no paperwork.
                        Forex Investment Plans is an offshore investment company with a widely diversified portfolio. We trade stocks of companies in internet, FOREX. And we traditionally place gold trading in the very top of our investment activities. We seek long-term appreciation of our assets through investing in not only financial instruments, but also in real offline projects. we are a typical offshore investment company with traders and market researchers working all over the globe.</p>
                        <p className="myabtP">There are several details daily green Investment consider before trading forex.</p>

                        <h4>TRADING HOURS</h4>

                        <p className="myabtP">One of the major benefits of forex is the near consistent trading we do. You can trade forex 24 hours a day, Monday through Friday, as global markets open and close.</p>

                        <h4>ROLLOVER</h4>

                        <p className="myabtP">Rollover is the interest paid or earned for holding a position overnight. A credit or debit for each position open at the end of the day is applied directly to our account balance. Our trading platform automatically calculates our rollover amounts.</p>

                        <h4>MARGIN REQUIREMENTS</h4>

                        <p className="myabtP">Margin is a portion of our account equity set aside as a deposit for our trade. Margin requirements are updated at least once a month to account for price fluctuations. we can keep track of Used and Usable Margin on our trading platforms.
                        In the equities market, fundamental analysis looks to measure a company's true value and to base investments upon this type of calculation. To some extent, the same is done in the retail forex market, where forex fundamental traders evaluate currencies, and their countries, like companies and use economic announcements to gain an idea of the currency's true value.</p>
                        <p className="myabtP">All of the news reports, economic data and political events that come out about a country are similar to news that comes out about a stock in that it is used by investors to gain an idea of value. This value changes over time due to many factors, including economic growth and financial strength. Fundamental traders look at all of this information to evaluate a country's currency.
                        Given that there are practically unlimited forex fundamentals trading strategies based on fundamental data, one could write a book on this subject. To give you a better idea of a tangible trading opportunity, let's go over one of the most well-known situations, the forex carry trade.</p>

                        <h4>A Breakdown of the Forex Carry Trade</h4>

                        <p className="myabtP">The currency carry trade is a strategy in which a trader sells a currency that is offering lower interest rates and purchases a currency that offers a higher interest rate. In other words, you borrow at a low rate, and then lend at a higher rate. The trader using the strategy captures the difference between the two rates. When highly leveraging the trade, even a small difference between two rates can make the trade highly profitable. Along with capturing the rate difference, investors also will often see the value of the higher currency rise as money flows into the higher-yielding currency, which bids up its value.
                        Real-life examples of a yen carry trade can be found starting in 1999, when Japan decreased its interest rates to almost zero. Investors would capitalize upon these lower interest rates and borrow a large sum of Japanese yen. The borrowed yen is then converted into U.S. dollars, which are used to buy U.S. Treasury bonds with yields and coupons at around 4.5-5%. Since the Japanese interest rate was essentially zero, the investor would be paying next to nothing to borrow the Japanese yen and earn almost all the yield on his or her U.S. Treasury bonds. But with leverage, you can greatly increase the return.</p>

                        <p className="myabtP">For example, 10 times leverage would create a return of 30% on a 3% yield. If you have $1,000 in your account and have access to 10 times leverage, you will control $10,000. If you implement the currency carry trade from the example above, you will earn 3% per year. At the end of the year, your $10,000 investment would equal $10,300, or a $300 gain. Because you only invested $1,000 of your own money, your real return would be 30% ($300/$1,000). However this strategy only works if the currency pair's value remains unchanged or appreciates. Therefore, most forex carry traders look not only to earn the interest rate differential, but also capital appreciation. While we've greatly simplified this transaction, the key thing to remember here is that a small difference in interest rates can result in huge gains when leverage is applied. Most currency brokers require a minimum margin to earn interest for carry trades.
                        However, this transaction is complicated by changes to the exchange rate between the two countries. If the lower-yielding currency appreciates against the higher-yielding currency, the gain earned between the two yields could be eliminated. The major reason that this can happen is that the risks of the higher-yielding currency are too much for investors, so they choose to invest in the lower-yielding, safer currency. Because carry trades are longer term in nature, they are susceptible to a variety of changes over time, such as rising rates in the lower-yielding currency, which attracts more investors and can lead to currency appreciation, diminishing the returns of the carry trade. This makes the future direction of the currency pair just as important as the interest rate differential itself.</p>

                        <p className="myabtP">To clarify this further, imagine that the interest rate in the U.S. was 5%, while the same interest rate in Russia was 10%, providing a carry trade opportunity for traders to short the U.S. dollar and to long the Russian ruble. Assume the trader borrows $1,000 US at 5% for a year and converts it into Russian rubles at a rate of 25 USD/RUB (25,000 rubles), investing the proceeds for a year. Assuming no currency changes, the 25,000 rubles grows to 27,500 and, if converted back to U.S. dollars, will be worth $1,100 US. But because the trader borrowed $1,000 US at 5%, he or she owes $1,050 US, making the net proceeds of the trade only $50.
                        However, imagine that there was another crisis in Russia, such as the one that was seen in 1998 when the Russian government defaulted on its debt and there was large currency devaluation in Russia as market participants sold off their Russian currency positions. If, at the end of the year the exchange rate was 50 USD/RUB, your 27,500 rubles would now convert into only $550 US (27,500 RUB x 0.02 RUB/USD). Because the trader owes $1,050 US, he or she will have lost a significant percentage of the original investment on this carry trade because of the currency's fluctuation - even though the interest rates in Russia were higher than the U.S.
                        Another good example of forex fundamental analysis is based on commodity prices.</p>

                        <p className="myabtP">You should now have an idea of some of the basic economic and fundamental ideas that underlie the forex and impact the movement of currencies. The most important thing that should be taken away from this section is that currencies and countries, like companies, are constantly changing in value based on fundamental factors such as economic growth and interest rates. You should also, based on the economic theories mentioned above, have an idea how certain economic factors impact a country's currency. We will now move on to technical analysis, the other school of analysis that can be used to pick trades in the forex market
                        Daily green investment Stratagy is based on</p>
                        <ol>
                            <li>Making only the highest probability trades, utilizing sophisticated analytical models that determine and identify opportunities with regards to specific trading instruments</li>
                            <li>Judicious risk management principles that are applied to all of our trading accounts. We generate a quantitative trade model that improves the long-term consistency of our trades</li>
                            <li>Trading strategies that are proprietary to the trader and used on a risk management scale, with a predetermined exposure limit set for the overall trading strategy</li>
                            <li>Trades that are monitored 24 hours each and every day — which ensures the safety of our client’s funds</li>
                        </ol>

                        <h4>Why trade with us:</h4>


                        <ul>
                            <li>ULTRA-COMPETITIVE PRICING: Trade US stocks from USD 1 and HK stocks from HKD 60 with even lower rates for active traders</li>

                            <li>ACCESS 20,000+ STOCKS: Trade over 30,000+ stocks on 60+ exchanges across the world with the same DEI Account.</li>

                            <li>AWARD WINNING PLATFORM: Trade stocks in multiple ways on a platform designed for and by traders.  
                                <ul>
                                    <li>Benefit from extensive charting with 50+ technical indicators, integrated Trade Signals and innovative risk management tools.</li>
                                    <li>Access 40,000+ instruments. Trade stocks, bonds, ETFs, futures, listed options and other leveraged products from a single cross-margin, multi-currency account.</li>
                                </ul>
                            </li>
                            <li>EXPERT SERVICE, TRUSTED FOR
                                <ul>
                                    <li>With 810,000+ satisfied customers,DEI world-class service around the clock.</li>
                                    <li>We adhere to the strictest regulatory standards, and are fully licensed and regulated in 15 jurisdictions across Europe, the Middle East and Asia.</li>
                                    <li>We’re a financially stable company with a robust balance sheet. We serve clients in 170 countries, processing 1m transactions daily.</li>
                                </ul>
                            </li>
                        </ul>
                        <h4>Crypto </h4>

                        <p className="myabtP">Ten years ago, if someone told you that a mysterious cryptographer code-named Satoshi Nakamoto was going to devise a system that would change the world of finance, you probably would not have believed it. Yet today, that very system, Bitcoin (XBT), is worth more than $10 billion, is accepted by Amazon and other major retailers, and is built on the most powerful computer network in the world. This article provides information to help individuals and businesses alike decide whether to use or invest in Bitcoin.</p>

                        <h4>What is Bitcoin?</h4>

                        <p className="myabtP">At its core, Bitcoin is a mathematical method that solves a basic problem: the inability to trust information without a known central authority vouching for it. In practice, Bitcoin is a form of digital money, or “cryptocurrency,” that enables monetary transactions to occur without a middleman, such as a central bank or a trusted third party, confirming each transaction. This decentralised trust model is what makes a cryptocurrency like Bitcoin a game changer.</p>

                        <h4>How does Bitcoin work?</h4>

                        <p className="myabtP">The Bitcoin protocol is built on a public ledger called the blockchain that records all transactions, including historical activity going back to the first Bitcoin exchange. When one party wants to transfer Bitcoin to a recipient, everyone on the Bitcoin network has the opportunity to review and validate the transaction. If it is validated, the transaction goes through and is permanently written into the blockchain. Transaction confirmation is accomplished through a process called mining.</p>


                        <h4>What is mining?</h4>

                        <p className="myabtP">Mining is the elegant process by which new XBT are created, or “mined,” simultaneously with the validation of Bitcoin transactions.</p>

                        <h4>Are there any security risks in Bitcoin?</h4>

                        <p className="myabtP">When assessing the security of Bitcoin, it is important to differentiate between the Bitcoin protocol and the institutions and software surrounding it. The Bitcoin protocol — the mathematics created by Nakamoto — is considered secure. The potential risks come from the systems adjacent to the protocol: the software that runs it, the exchanges that trade it and the people who use it.</p>

                        <h4>Blockchain</h4>

                        <p className="myabtP">A blockchain is a digital, decentralized ledger of cryptocurrency transactions. The Bitcoin and Ethereum networks are both blockchains where all transactions are recorded. Where assets tied to governments were formerly backed by gold or silver, Bitcoin and Ethereum are backed by their respective networks.</p>

                        <p className="myabtP">Common Crypto Currencies That daily green Investment In.</p>

                        <h4>Bitcoin</h4>

                        <p className="myabtP">Bitcoin, created in 2009, is the first decentralized cryptocurrency. Like many cryptocurrencies, it’s not tied to any government or issuing authority, and there’s no middleman involved when it’s used to purchase goods. Most of its concepts have been applied to other fields, and replicated in other cryptocurrencies. Bitcoin denotes both the name of the network and the currency that’s built on top of it. Its symbol is BTC</p>

                        <h4>Bitcoin Cash</h4>

                        <p className="myabtP">Bitcoin Cash, launched in 2017, was created as an offshoot of Bitcoin that allows faster transactions on the network. Similar to Bitcoin, Bitcoin Cash is capped at 21 million coins. Its symbol is BCH</p>

                        <h4>Dogecoin</h4>

                        <p className="myabtP">Dogecoin, introduced in 2013, is known for its playful take on the cryptocurrency phenomenon. It’s typically used in online communities to “tip” users for content that’s particularly witty or useful. It’s also become a popular cryptocurrency for donating to charities. Dogecoin’s symbol is DOGE</p>

                        <h4>Ethereum</h4>

                        <p className="myabtP">Like Bitcoin, Ethereum is a digital currency based on a blockchain technology. Though the applications of Ethereum extend beyond currency, the coin, technically called an Ether. Its symbol is ETH</p>

                        <p className="myabtP">WE HAVE OVER 1500 OTHER COINS EXISTING. WE ARE GOING TO INVEST MORE ON NUMEROUS COINS CONSIDERING IT’S MARKET POTENTIAL AND IF IT WILL GENERATE PROFIT FOR Cline Investment Firm IN FUTURE: WE’RE SERIOUSLY CONSIDERING THE FOLLOWING TO YEILD MUCH PROFIT FOR US IN NEAR FUTURE.</p>

                        <ul>
                            <li> RIPPLE (XRP)</li>
                            <li> EOS(EOS)</li>
                            <li> NEO(NEO)</li>
                            <li> TRON(TRX)</li>
                            <li> STELLER(XLM)</li>
                            <li> NEM(XEM)</li>
                        </ul>

                        <h4>Volatility</h4>

                        <p className="myabtP">The prices of cryptocurrencies are volatile largely because they’re a new asset class, and there’s no consensus on their overall worth as a currency or investment.</p>




                    </div>



                </Flex>
                
            </Flex>




        </Flex>

        <Footer />
       
       </>
    )
}

export default Forex;
