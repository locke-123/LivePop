import axios from 'axios';
import logo from '../../../public/livepop.png'
import { Container, UpperWrapper, UpperWrapperContent, Logo, MainText,
    ImgContainer, DetailWrapper, BasicInfoWrapper, BasicInfoIcon, BasicInfoText,
    CurrentPeopleWrapper, CurrentPeopleAmount, CurrentPeopleTime, LineWrapper,
    PieWrapper, BarWrapper, TitleDivider } from '../../styles/info';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { averageCalc } from './infoFunctions';
import { InitialDataProps } from './infoTypes';
import { LineComponent, PieComponent, PieComponent2, BarComponent } from './ChartComponent';

const fetcher = async (AreaCode: string) => {
    const url = `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_SEOUL_API_KEY}/json/citydata_ppltn/1/1/${AreaCode}`;
    const response = await axios.get(url).then((response) => {
        return response.data["SeoulRtd.citydata_ppltn"][0];
    }).catch((reason) => {console.error(reason); return null;});
    return response;
}

// import testData from './test.json';
// const fetcher = async (AreaCode: string) => {
//     return testData;
// }

export default function InfoPage({ initialData, AreaCode }: InitialDataProps){
    const [currentAmount, setCurrentAmount] = useState(0);

    useEffect(() => {
        setCurrentAmount(averageCalc(initialData.AREA_PPLTN_MAX, initialData.AREA_PPLTN_MIN));
    }, [initialData])

    return (
        <Container>
            <UpperWrapper>
                <UpperWrapperContent>
                    <Logo><Image sizes='30px' fill src={logo} alt='logo' /></Logo>
                    <MainText>{initialData.AREA_NM}</MainText>
                </UpperWrapperContent>
                <ImgContainer>
                    <Image sizes='30vw' fill src={(Number(AreaCode.split('')[4])*10 + Number(AreaCode.split('')[5])) >= 13 && (Number(AreaCode.split('')[4])*10 + Number(AreaCode.split('')[5])) <= 56 ? '/3th-image.png' : `/thumbnail/${AreaCode}.png`} alt=''/>
                </ImgContainer>
            </UpperWrapper>
            <DetailWrapper>
                <BasicInfoWrapper>
                    <BasicInfoIcon $level={initialData.AREA_CONGEST_LVL}>{initialData.AREA_CONGEST_LVL}</BasicInfoIcon>
                    <BasicInfoText>{initialData.AREA_CONGEST_MSG}</BasicInfoText>
                </BasicInfoWrapper>
                <CurrentPeopleWrapper>
                    <CurrentPeopleAmount>현재 약 <span style={{fontSize: '36px'}}>{currentAmount}</span>명</CurrentPeopleAmount>
                    <CurrentPeopleTime>측정 시간: {initialData.PPLTN_TIME.split(' ')[1]}</CurrentPeopleTime>
                </CurrentPeopleWrapper>
                {initialData.FCST_YN == 'Y' ? <><TitleDivider>예측 실시간 인구 지표</TitleDivider>
                <LineWrapper><LineComponent initialData={initialData} AreaCode='' /></LineWrapper></> : ''}
                <TitleDivider><div>남/여 인구 비율</div><div>상주/비상주 인구 비율</div></TitleDivider>
                <PieWrapper>
                    <PieComponent initialData={initialData} AreaCode='' />
                    <PieComponent2 initialData={initialData} AreaCode='' />
                </PieWrapper>
                <TitleDivider>연령별 인구 비율</TitleDivider>
                <BarWrapper><BarComponent initialData={initialData} AreaCode='' /></BarWrapper>
            </DetailWrapper>
        </Container>
    )
}

export async function getServerSideProps(context: { query: { AreaCode: string; }; }) {
    const AreaCode = context.query.AreaCode;
    const data = await fetcher(AreaCode);
    return {
        props: {
            initialData: data,
            AreaCode: AreaCode,
        }
    }
}