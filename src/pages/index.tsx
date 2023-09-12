import Image from "next/image";
import logoImg from "../../public/livepop.png";
import { Container ,Wrapper, TopWrapper, MiddleWrapper, Logo,
  MainCard, DetailWrapper, DetailCardType1, DetailCardType1ImgBox,
   DetailCardType1Text, DetailCardType1Img, DetailCardType2, DetailCardType2Icon,
   DetailCardType3, DetailCardType3Text, MainCardText, InfoText  } from '../styles/home';
import { useEffect, useState } from "react";
import { data } from "../../datas/homeMenuList";
import Link from "next/link";

interface MainCardDataType {
  title: string; 
  type: number;
  list: { name: string; src: string; areaCd: string;}[];
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
              <Link href={'/info/' + el.areaCd}>
                <DetailCardType1ImgBox>
                  <DetailCardType1Img>
                    <Image height={200} width={200} src={el.src} alt={el.name} />
                  </DetailCardType1Img>
                </DetailCardType1ImgBox>
              </Link>
              <DetailCardType1Text>
                {el.name}
              </DetailCardType1Text>
            </DetailCardType1>
          ))
          setContents(a);
          break;
        case 2:
          const b = detailData.list.map((el, key) => (
            <Link style={{textDecoration: 'none', color: 'black'}} key={key} href={'/info/' + el.areaCd}>
              <DetailCardType2>
                {el.src.split('|').map((el, key) => (
                <DetailCardType2Icon $color={el.split(':')[1]} key={key}>{el.split(':')[0]}</DetailCardType2Icon>
                ))}
                {el.name}
              </DetailCardType2>
            </Link>
          ))
          setContents(b);
          break;
        case 3:
          const c = detailData.list.map((el, key) => (
            <Link style={{textDecoration: 'none', color: 'black'}} key={key} href={'/info/' + el.areaCd}>
              <DetailCardType3>
                <Image height={75} width={75} src={el.src} alt={el.name} />
                <DetailCardType3Text>
                  {el.name}
                </DetailCardType3Text>
              </DetailCardType3>
            </Link>
          ))
          setContents(c);
          break;
      }
    }
  }, [detailData])

  return (
    <Container>
      <Wrapper>
        <TopWrapper>
          <Logo $isFirstRender={isFirstRender}>
            <Image priority={true} src={logoImg} alt="logo" />
          </Logo>
        </TopWrapper>
        <InfoText $isFirstRender={isFirstRender}>서울시 실시간 인구 조회 서비스</InfoText>
        <MiddleWrapper>
          <MainCard onClick={onClickCard} $isFirstRender={isFirstRender} id="0">
            <MainCardText>관광특구</MainCardText>
            <Image width={200} height={200} priority={true} src={"/maincard1/Gangnam MICE Special Tourist Zone.png"} alt="관광특구" />
          </MainCard>
          <MainCard onClick={onClickCard} $isFirstRender={isFirstRender} id="1">
            <MainCardText>고궁·문화유산</MainCardText>
            <Image width={200} height={200} priority={true} src={"/maincard2/Gyeongbokgung Palace.png"} alt="고궁·문화유산" />
          </MainCard>
          <MainCard onClick={onClickCard} $isFirstRender={isFirstRender} id="2">
            <MainCardText>인구밀집지역</MainCardText>
            <Image width={200} height={200} priority={true} src={"/3th-image.png"} alt="인구밀집지역" />
          </MainCard>
          <MainCard onClick={onClickCard} $isFirstRender={isFirstRender} id="3">
            <MainCardText>발달상권</MainCardText>
            <Image width={200} height={200} priority={true} src={"/maincard3/Bangbae Food Alley.png"} alt="발달상권" />
          </MainCard>
          <MainCard onClick={onClickCard} $isFirstRender={isFirstRender} id="4">
            <MainCardText>공원</MainCardText>
            <Image width={200} height={200} priority={true} src={"/maincard4/Nanji Hangang Park.png"} alt="공원" />
          </MainCard>
        </MiddleWrapper>
        <DetailWrapper $clickCard={clickCard} $detailData={detailData}>
          {contents}
        </DetailWrapper>
      </Wrapper>
    </Container>
  )
}