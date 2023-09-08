import Image from "next/image";
import logoImg from "../../public/livepop.png"
import { Container ,Wrapper, TopWrapper, MiddleWrapper, Logo } from '../styles/home'
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
          <Logo isFirstRender={isFirstRender}>
            <Image src={logoImg} alt="logo" />
          </Logo>
        </TopWrapper>
        <MiddleWrapper>
          ddd
        </MiddleWrapper>
      </Wrapper>
    </Container>
  )
}