import Image from "next/image";
import logoImg from "../../public/livepop.png"
import { Container ,Wrapper, TopWrapper, MiddleWrapper, Logo,
  MainCard, DetailWrapper, BottomWrapper, DetailCardType1, DetailCardType1Img, DetailCardType1Text } from '../styles/home'
import { useEffect, useState } from "react";
import { data } from "../../datas/homeMenuList";

interface MainCardDataType {
  title: string; 
  type: number;
  list: { name: string; src: string; }[];
}


export default function Home(){
  const [isFirstRender, setIsFirstRender] = useState(false);
  const [clickCard, setClickCard] = useState(false);
  const [detailData, setDetailData] = useState<MainCardDataType>();
  const [contents, setContents] = useState<React.JSX.Element[]>();

  useEffect(() => {
    setIsFirstRender(true);
  }, [])

  const onClickCard = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const id = Number(event.currentTarget.id);
    setClickCard(true);
    setDetailData(data[id])
  }

  useEffect(() => {
    if(detailData !== undefined) {
      switch (detailData.type) {
        case 1:
          const a = detailData.list.map((el, key) => (
            <DetailCardType1 key={key}>
              <DetailCardType1Img>
                <Image height={200} width={200} src={el.src} alt={el.name} />
              </DetailCardType1Img>
              <DetailCardType1Text>
                {el.name}
              </DetailCardType1Text>
            </DetailCardType1>
          ))
          setContents(a);
          break;
        case 2:
          const b = detailData.list.map((el, key) => (
            <DetailCardType1 key={key}>{el.name}</DetailCardType1>
          ))
          setContents(b);
          break;
        case 3:
          break;
      }
    }
  }, [detailData])

  console.log(clickCard);
  console.log(detailData);

  return (
    <Container>
      <Wrapper>
        <TopWrapper>
          <Logo $isFirstRender={isFirstRender}>
            <Image priority={true} src={logoImg} alt="logo" />
          </Logo>
        </TopWrapper>
        <MiddleWrapper>
          <MainCard onClick={onClickCard} $isFirstRender={isFirstRender} id="0">관광특구</MainCard>
          <MainCard onClick={onClickCard} $isFirstRender={isFirstRender} id="1">고궁·문화유산</MainCard>
          <MainCard onClick={onClickCard} $isFirstRender={isFirstRender} id="2">인구밀집지역</MainCard>
          <MainCard onClick={onClickCard} $isFirstRender={isFirstRender} id="3">발달상권</MainCard>
          <MainCard onClick={onClickCard} $isFirstRender={isFirstRender} id="4">공원</MainCard>
        </MiddleWrapper>
        <DetailWrapper $clickCard={clickCard} $detailData={detailData}>
          {contents}
        </DetailWrapper>
      </Wrapper>
      <BottomWrapper>
        
      </BottomWrapper>
    </Container>
  )
}