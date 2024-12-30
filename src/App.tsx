import { useRef } from 'react';
import circle from './assets/circle.png';
import mininggif from './assets/200w.gif';
import styled from 'styled-components';
import work from './assets/work.gif';
import LineChart from './chart';

function App() {
  const miningRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const coinRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  const handleMiningClick = () => {
    if (miningRef.current) {
      miningRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWorkClick = () => {
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCoinClick = () => {
    if (coinRef.current) {
      coinRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSupportClick = () => {
    if (supportRef.current) {
      supportRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HashMiner>
      <Header>
        <LogoContainer>
          <img src='https://cdn.prod.website-files.com/64199d190fc7afa82666d89c/6603c4ea5a43b51c5132b71e_Web_Crypto_Digital_Assets_1108x1174_hero_image.webp' />
          <Label>HashMiner</Label>
        </LogoContainer>
        <NavLinks>
          <NavLink onClick={handleMiningClick}>Easy Mining</NavLink>
          <NavLink onClick={handleWorkClick}>How it works</NavLink>
          <NavLink onClick={handleCoinClick}>Hash Coin</NavLink>
          <NavLink onClick={handleSupportClick}>Support</NavLink>
        </NavLinks>
        <DownloadLink style={{marginLeft: 'auto'}}>Download Apk</DownloadLink>
      </Header>

      <ContentWrapper $flip={false} style={{height: '93vh'}}>
        <LeftContent>
          <MainTitle>Mine. Earn. Exchange – The Future of Virtual Wealth.</MainTitle>
          <SubTitle>
            HashMiner is your gateway to the digital mining revolution. Buy a virtual
            mining rig, start mining HashCoins, and effortlessly exchange them for real
            money. Experience the power of mining made simple, secure, and rewarding!
          </SubTitle>
        </LeftContent>
        <ImageContainer>
          <img src={circle} />
        </ImageContainer>
      </ContentWrapper>

      <ContentWrapper $flip={true} ref={miningRef}>
        <ImageContainer>
          <img src={mininggif} style={{width: '60%'}} />
        </ImageContainer>
        <RightContent>
          <SectionTitle>Easy Mining</SectionTitle>
          <Description>
            At HashMiner, we’ve revolutionized the way mining works by making it simple,
            efficient, and accessible for everyone. Forget about expensive hardware,
            complicated setups, or high electricity costs. With just a few clicks, you can
            purchase a virtual mining rig and begin your journey into the world of
            cryptocurrency mining.
            <br />
            <br />
            Our intuitive interface and streamlined process ensure that even first-time users
            can start earning HashCoins effortlessly. Whether you're a tech enthusiast or just
            looking for a way to generate passive income, HashMiner makes mining easy, fun, and
            rewarding.
          </Description>
        </RightContent>
      </ContentWrapper>

      <ContentWrapper $flip={false} ref={workRef}>
        <LeftContent>
          <SectionTitle>How It Works</SectionTitle>
          <Description>
            <strong>Purchase Your Virtual Rig:</strong> Select from a range of virtual mining rigs,
            each tailored to meet your mining goals and budget. From beginner-friendly rigs to
            advanced options for serious miners, there’s something for everyone.
            <br />
            <br />
            <strong>Start Mining:</strong> Once your rig is active, it gets to work immediately,
            generating HashCoins 24/7. Monitor your mining progress in real-time through our
            user-friendly dashboard.
            <br />
            <br />
            <strong>Exchange Your HashCoins:</strong> Convert your mined HashCoins into real money
            with just a few taps. We’ve partnered with secure payment gateways to ensure fast and
            reliable transactions.
            <br />
            <br />
            With HashMiner, mining isn’t just a process—it’s an experience designed to maximize
            your rewards with minimal effort.
          </Description>
        </LeftContent>
        <ImageContainer>
          <img src={work} style={{width: '70%'}} />
        </ImageContainer>
      </ContentWrapper>

      <ContentWrapper $flip={true} ref={coinRef}>
        <ImageContainer>
          <LineChart/>
        </ImageContainer>
        <RightContent>
          <SectionTitle>Hash Coin</SectionTitle>
          <Description>
            HashCoin is the heart of the HashMiner ecosystem. Earned through virtual mining,
            HashCoin represents your hard work and dedication. It’s not just a virtual currency;
            it’s a bridge between the digital and real worlds.
            <br />
            <br />
            Every HashCoin you mine can be exchanged for real money, making it a tangible and
            rewarding achievement. Our system ensures that HashCoins are secure, trackable, and
            easy to manage. As you mine, you’ll watch your balance grow and your goals come
            closer to reality.
            <br />
            <br />
            With HashCoin, you’re not just mining—you’re building a sustainable and profitable
            future in the world of virtual finance.
          </Description>
        </RightContent>
      </ContentWrapper>

      <ContentWrapper $flip={false} ref={supportRef}>
        <LeftContent>
          <SectionTitle>Support</SectionTitle>
          <Description>
            We believe in providing a seamless experience, and that extends to our support
            system. Whether you have a question about setting up your rig, need help with your
            mining progress, or want to learn more about exchanging HashCoins, our 24/7 support
            team is here to assist you. You can reach us anytime at{' '}
            <ContactEmail>hashminerinfo@gmail.com</ContactEmail> for prompt assistance.
            <br />
            <br />
            Getting started is simple! Download the APK today to unlock the full potential of
            HashMiner. Experience hassle-free mining, intuitive navigation, and a suite of features
            designed to make mining as enjoyable as it is profitable.
            <br />
            <br />
            Join thousands of satisfied users and take your first step into the future of mining.
            With HashMiner, your mining journey is just a tap away.
          </Description>
        </LeftContent>
        <ImageContainer>
          <img src={circle} />
        </ImageContainer>
      </ContentWrapper>
    </HashMiner>
  );
}

const HashMiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
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

  @media (min-width: 1440px) {
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;

    > * {
      scroll-snap-align: start;
    }
  }
`;

const Header = styled.div`
  width: 100%;
  min-height: 7%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 100;
  background-color: black;
  margin-bottom: 5%;

  @media (min-width: 1440px) {
    position: fixed;
    margin-bottom: 0%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0.5rem;
  
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 600;
  color: rgba(225, 225, 225, 0.7);
`;

const NavLinks = styled.div`
  display: none;
  gap: 1.5rem;
  margin-left: 10%;

  @media (min-width: 1440px) {
    display: flex;
  }
`;

const NavLink = styled.label`
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
`;

const DownloadLink = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: rgba(225, 225, 225, 0.7);
  margin-left: auto;
  cursor: pointer;
`;

const ContentWrapper = styled.div<{$flip: boolean}>`
  width: 100vw;
  min-height: fit-content;
  display: flex;
  flex-direction: ${(p) => p.$flip ? 'column-reverse' : 'column'};
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;

  @media (min-width: 1440px) {
    flex-direction: row;
    min-height: 100vh;
  }
`;

const LeftContent = styled.div`
  width: 95%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 0rem;
  gap: 2rem;
  overflow: hidden;

  @media (min-width: 1440px) {
    width: 50%;
    height: 100%;
    padding-left: 6rem;
  }
`;

const RightContent = styled.div`
  width: 95%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-right: 0rem;
  gap: 2rem;
  overflow: hidden;

  @media (min-width: 1440px) {
    width: 50%;
    height: 100%;
    padding-right: 6rem;
  }
`;

const ImageContainer = styled.div`
  width: 95%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    filter: blur(2px);
  }

  @media (min-width: 1440px) {
    width: 50%;
    height: 100%;
  }
`;

const SectionTitle = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(225, 225, 225, 0.7);
`;

const MainTitle = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(225, 225, 225, 0.7);
`;

const SubTitle = styled.label`
  font-size: 1rem;
  font-weight: 400;
`;

const Description = styled.label`
  font-size: 1rem;
  font-weight: 400;
  color: rgba(225, 225, 225, 0.9);
  line-height: 1.5;
`;

const ContactEmail = styled.span`
  color: #00f;
`;

export default App;
