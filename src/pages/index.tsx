import Image from "next/image";
import logoImg from "../../public/livepop.png"
import { Container ,Wrapper, TopWrapper, MiddleWrapper, Logo,
  MainCard, DetailWrapper, BottomWrapper } from '../styles/home'
import { useEffect, useState } from "react";


export default function Home(){
  const [isFirstRender, setIsFirstRender] = useState(false);
  const [clickCard, setClickCard] = useState(false);

  useEffect(() => {
    setIsFirstRender(true);
  }, [])

  const onClickCard = () => {
    setClickCard(true);
  }

  console.log(clickCard);

  return (
    <Container>
      <Wrapper>
        <TopWrapper>
          <Logo $isFirstRender={isFirstRender}>
            <Image priority={true} src={logoImg} alt="logo" />
          </Logo>
        </TopWrapper>
        <MiddleWrapper>
          <MainCard onClick={onClickCard} $isFirstRender={isFirstRender}>관광특구</MainCard>
          <MainCard onClick={onClickCard} $isFirstRender={isFirstRender}>고궁·문화유산</MainCard>
          <MainCard onClick={onClickCard} $isFirstRender={isFirstRender}>인구밀집지역</MainCard>
          <MainCard onClick={onClickCard} $isFirstRender={isFirstRender}>발달상권</MainCard>
          <MainCard onClick={onClickCard} $isFirstRender={isFirstRender}>공원</MainCard>
        </MiddleWrapper>
        <DetailWrapper $clickCard={clickCard} $isFirstRender={isFirstRender}>
          ddd
        </DetailWrapper>
      </Wrapper>
      <BottomWrapper>
        
      </BottomWrapper>
    </Container>
  )
}