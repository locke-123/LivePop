import axios from 'axios';
import logo from '../../../public/livepop.png'
import testData from './test.json';
import { Container, UpperWrapper, UpperWrapperContent, Logo, MainText,
    ImgContainer, DetailWrapper, BasicInfoWrapper, BasicInfoIcon, BasicInfoText,
    CurrentPeopleWrapper, CurrentPeopleAmount, CurrentPeopleTime, LineWrapper } from '../../styles/info';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

const fetcher = async (AreaCode: string) => {
    const url = `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_SEOUL_API_KEY}/json/citydata_ppltn/1/1/${AreaCode}`;
    const response = await axios.get(url).then((response) => {
        return response.data["SeoulRtd.citydata_ppltn"][0];
    }).catch((reason) => {console.error(reason); return null;});
    return response;
}

// const fetcher = async (AreaCode: string) => {
//     return testData;
// }

interface InitialDataProps {
    initialData: {
        AREA_NM: string;
        AREA_CD: string;
        AREA_CONGEST_LVL: string;
        AREA_CONGEST_MSG: string;
        AREA_PPLTN_MIN: string;
        AREA_PPLTN_MAX: string;
        MALE_PPLTN_RATE: string;
        FEMALE_PPLTN_RATE: string;
        PPLTN_RATE_0: string;
        PPLTN_RATE_10: string;
        PPLTN_RATE_20: string;
        PPLTN_RATE_30: string;
        PPLTN_RATE_40: string;
        PPLTN_RATE_50: string;
        PPLTN_RATE_60: string;
        PPLTN_RATE_70: string;
        RESNT_PPLTN_RATE: string;
        NON_RESNT_PPLTN_RATE: string;
        REPLACE_YN: string;
        PPLTN_TIME: string;
        FCST_YN: string;
        FCST_PPLTN: {
            FCST_TIME: string;
            FCST_CONGEST_LVL: string;
            FCST_PPLTN_MIN: string;
            FCST_PPLTN_MAX: string;
        }[];
    }
}

const averageCalc = (arg1: string, arg2: string): number => {
    const numArg1 = Number(arg1);
    const numArg2 = Number(arg2);
    const result = (numArg1 + numArg2) / 2;
    return result;
}

const colorPick = (arg1: string): string => {
    switch (arg1) {
        case "여유":
            return "rgb(0, 211, 105)"
        case "보통":
            return "rgb(130, 211, 0)"
        case "붐빔":
            return "rgb(211, 120, 0)"
        default:
            return "rgb(211, 25, 0)"
    }
}

Chart.register(...registerables);

export default function InfoPage({ initialData }: InitialDataProps){
    const [currentAmount, setCurrentAmount] = useState(0);
    const [lineData, setLineData] = useState({
        labels: ['0'],
        datasets: [{
          data: [0],
          borderWidth: 2,
          backgroundColor: ['rgba(0, 0, 0, 0.5)'],
          borderColor: 'rgba(0, 0, 0, 0.5)',
          pointRadius: 10,
          pointHoverRadius: 7,
        }]
    });

    useEffect(() => {
        if(initialData.FCST_PPLTN !== null){
            setLineData({
                labels: initialData.FCST_PPLTN.map((el) => el.FCST_TIME.split(" ")[1]),
                datasets: [{
                  data: initialData.FCST_PPLTN.map((el) => averageCalc(el.FCST_PPLTN_MAX, el.FCST_PPLTN_MIN)),
                  borderWidth: 2,
                  backgroundColor: initialData.FCST_PPLTN.map((el) => colorPick(el.FCST_CONGEST_LVL)),
                  borderColor: 'rgba(0, 0, 0, 0.5)',
                  pointRadius: 10,
                  pointHoverRadius: 7,
                }]
            });
        }
        setCurrentAmount(averageCalc(initialData.AREA_PPLTN_MAX, initialData.AREA_PPLTN_MIN));
    }, [initialData])
    console.log(initialData);
    
    const options = {
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            y: {
                beginAtZero: false,
            },
        },
    };

    return (
        <Container>
            <UpperWrapper>
                <UpperWrapperContent>
                    <Logo><Image fill src={logo} alt='logo' /></Logo>
                    <MainText>{initialData.AREA_NM}</MainText>
                </UpperWrapperContent>
                <ImgContainer>
                    <Image fill src={'/3th-image.png'} alt=''/>
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
                <LineWrapper><Line data={lineData} options={options} /></LineWrapper>
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
        }
    }
}