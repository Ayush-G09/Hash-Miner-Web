import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from './assets/logo.png';
import Chart from './Chart';

type CoinsData = {
  name: string;
  symbol: string;
  price: number;
  change: number;
  image: string;
};

type State = {
  bitcoin: CoinsData;
  ethereum: CoinsData;
  bnb: CoinsData;
  xrp: CoinsData;
  solana: CoinsData;
  hashcoin: CoinsData;
};

function App() {
  const [state, setState] = useState<State>({
    bitcoin: {} as CoinsData,
    ethereum: {} as CoinsData,
    bnb: {} as CoinsData,
    xrp: {} as CoinsData,
    solana: {} as CoinsData,
    hashcoin: {
      name: 'Hashcoin',
      symbol: 'hsc',
      price: 0,
      change: 0,
      image: logo,
    },
  });

  useEffect(() => {
    const fetchCoinsData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "bitcoin,ethereum,binancecoin,ripple,solana",
              vs_currencies: "usd",
              include_market_cap: false,
              include_24hr_change: true,
              include_last_updated_at: false,
            },
          }
        );

        setState((prev) => ({...prev, 
          bitcoin: {
            name: "Bitcoin",
            symbol: "BTC",
            price: response.data.bitcoin.usd,
            change: response.data.bitcoin.usd_24h_change,
            image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
          },
          ethereum: {
            name: "Ethereum",
            symbol: "ETH",
            price: response.data.ethereum.usd,
            change: response.data.ethereum.usd_24h_change,
            image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
          },
          bnb: {
            name: "Binance Coin",
            symbol: "BNB",
            price: response.data.binancecoin.usd,
            change: response.data.binancecoin.usd_24h_change,
            image: "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png",
          },
          xrp: {
            name: "XRP",
            symbol: "XRP",
            price: response.data.ripple.usd,
            change: response.data.ripple.usd_24h_change,
            image: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
          },
          solana: {
            name: "Solana",
            symbol: "SOL",
            price: response.data.solana.usd,
            change: response.data.solana.usd_24h_change,
            image: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
          },
        }));
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    const fetchHashData = async () => {
      try {
        const response = await axios.get("https://hash-miner-backend.vercel.app/api/auth/get-prices?period=1w");
        const length = response.data.prices.length;
        const change = (response.data.prices[length-1].price - response.data.prices[length-2].price)/response.data.prices[length-2].price*100;
        setState((prev) => ({...prev, hashcoin: {...prev.hashcoin, price: response.data.prices[length-3].price, change: change}}));
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchHashData();
    fetchCoinsData();
  }, []);

  return (
    <HashMiner>
      <div style={{width: '100%', minHeight: '7vh', display: 'flex', alignItems: 'center', boxSizing: 'border-box', padding: '0 1rem'}}>
        <label style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#F0B90B'}}>HashMiner</label>
      </div>
      <div style={{width: '100%', minHeight: '93vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem', boxSizing: 'border-box'}}>
        <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'start', justifyContent: 'center', boxSizing: 'border-box', padding: '3rem'}}>
          <div style={{width: '50%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', gap: '1rem'}}>
            <label style={{fontSize: '3.5rem', fontWeight: 'bold', color: 'white'}}>Empowering <span style={{color: '#F0B90B'}}>Millions</span> Around the Globe</label>
            <label style={{fontSize: '1.8rem'}}>✅ Your Trusted Partner In Virtual Mining</label>
            <div style={{padding: '0.5rem 2rem', marginTop: '6rem', fontSize: '1.5rem', fontWeight: 500, color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F0B90B', borderRadius: '5px', boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.5)', cursor: 'pointer'}}>Download</div>
          </div>
          <div style={{width: '50%', height: '100%', gap: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: '70%', boxSizing: 'border-box', padding: '0.5rem 1rem', backgroundColor: '#1E2329', borderRadius: '10px', boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
              {Object.values(state).map((coin) => (
                <div key={coin.name} style={{width: '100%', padding: '0.5rem 0', display: 'flex', alignItems: 'start'}}>
                  <div style={{width: '60%', display: 'flex'}}>
                    <img src={coin.image} width='30px' />      
                    <label style={{color: 'white', fontSize: '1rem', fontWeight: 500, marginLeft: '10px'}}>{coin.symbol}</label>
                    <label style={{fontSize: '0.8rem', marginLeft: '5px'}}>{coin.name}</label>
                  </div>
                  <label style={{color: 'white', fontSize: '1rem', fontWeight: 500, width: '30%'}}>${coin.price}</label>
                  <label style={{width: '15%', textAlign: 'end', fontSize: '1rem', fontWeight: 500, color: coin.change < 0 ? 'crimson' : 'limegreen'}}>{(coin.change)?.toFixed(2)}%</label>
                </div>
              ))}
            </div>
            <div style={{width: '70%', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', padding: '1rem', backgroundColor: '#1E2329', borderRadius: '10px', boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.5)'}}>
              <Chart/>
            </div>
          </div>
        </div>
      </div>
      <div style={{width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box', padding: '1rem'}}>
        <div style={{display: 'flex', alignItems: 'start', justifyContent: 'center', gap: '10%', marginTop: '5%'}}>
          <div style={{width: '38%', display: 'flex', flexDirection: 'column'}}>
            <label style={{fontSize: '2rem', color: '#F0B90B', fontWeight: 'bold'}}>How It Works</label>
            <label>Purchase Your Virtual Rig: Select from a range of virtual mining rigs, each tailored to meet your mining goals and budget. From beginner-friendly rigs to advanced options for serious miners, there’s something for everyone.
<br/><br/>Start Mining: Once your rig is active, it gets to work immediately, generating HashCoins 24/7. Monitor your mining progress in real-time through our user-friendly dashboard.
<br/><br/>Exchange Your HashCoins: Convert your mined HashCoins into real money with just a few taps. We’ve partnered with secure payment gateways to ensure fast and reliable transactions.
<br/><br/>With HashMiner, mining isn’t just a process—it’s an experience designed to maximize your rewards with minimal effort.
            </label>
          </div>
          <div style={{width: '38%', display: 'flex', flexDirection: 'column'}}>
            <label style={{fontSize: '2rem', color: '#F0B90B', fontWeight: 'bold'}}>Easy Mining</label>
            <label>At HashMiner, we’ve revolutionized the way mining works by making it simple, efficient, and accessible for everyone. Forget about expensive hardware, complicated setups, or high electricity costs. With just a few clicks, you can purchase a virtual mining rig and begin your journey into the world of cryptocurrency mining.<br/><br/>Our intuitive interface and streamlined process ensure that even first-time users can start earning HashCoins effortlessly. Whether you're a tech enthusiast or just looking for a way to generate passive income, HashMiner makes mining easy, fun, and rewarding.</label>
          </div>
        </div>
        <div style={{width: '100%', display: 'flex', boxSizing: 'border-box', padding: '1rem'}}>
          <div style={{width: '70%', display: 'flex', flexDirection: 'column'}}>
            <label style={{fontSize: '1.2rem', color: '#F0B90B', fontWeight: 'bold'}}>Support</label>
            <label>We believe in providing a seamless experience, and that extends to our support system. Whether you have a question about setting up your rig, need help with your mining progress, or want to learn more about exchanging HashCoins, our 24/7 support team is here to assist you. You can reach us anytime at hashminerinfo@gmail.com for prompt assistance.</label>
          </div>
          <div style={{width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{padding: '0.5rem 2rem', fontSize: '1.5rem', fontWeight: 500, color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F0B90B', borderRadius: '5px', boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.5)', cursor: 'pointer'}}>Download</div>
          </div>
        </div>
      </div>
    </HashMiner>
  );
}

const HashMiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #181A20;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  overflow: hidden;
  box-sizing: border-box;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default App;
