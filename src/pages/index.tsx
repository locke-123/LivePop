import Image from "next/image";
import logoImg from "../../public/livepop.png"
import { Container ,Wrapper, TopWrapper, MiddleWrapper, Logo,
  MainCard, DetailWrapper } from '../styles/home'
import { useEffect, useState } from "react";


export default function Home(){
  const [isFirstRender, setIsFirstRender] = useState(false);

  useEffect(() => {
    setIsFirstRender(true);
  }, [])

  return (
    <Container>
      <Wrapper>
        <TopWrapper>
          <Logo $isFirstRender={isFirstRender}>
            <Image priority={true} src={logoImg} alt="logo" />
          </Logo>
        </TopWrapper>
        <MiddleWrapper>
          <MainCard>관광특구</MainCard>
          <MainCard>고궁·문화유산</MainCard>
          <MainCard>인구밀집지역</MainCard>
          <MainCard>발달상권</MainCard>
          <MainCard>공원</MainCard>
        </MiddleWrapper>
        <DetailWrapper $isFirstRender={isFirstRender}>
          ddd
        </DetailWrapper>
      </Wrapper>
    </Container>
  )
}