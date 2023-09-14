import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
    background-color: orange;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const UpperWrapper = styled.div`
    overflow: hidden;
    height: 30vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: wheat;
    width: 100%;
`

export const ImgContainer = styled.div`
    position: relative;
    width: 500px;
    height: 500px;
    box-shadow: 0px 0px 10px 2px gray;
`

export const UpperWrapperContent = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.div`
    position: absolute;
    left: 50px;
    width: 110px;
    height: 100px;
`

export const MainText = styled.div`
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 36px;
    padding: 10px;
    border-radius: 12px;
`

export const DetailWrapper = styled.div`
    background-color: white;
    width: 80vw;
`

export const BasicInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const BasicInfoIcon = styled.div<{$level?: string}>`
    width: 100px;
    height: 50px;
    background-color: ${props => props.$level === "여유" ? "#00d369ff" : props.$level === "보통" ? "#ffb100ff" : props.$level === "붐빔" ? "#dd1f3dff" : "#ff8040ff"};
    border-radius: 40px;
    box-shadow: 0px 0px 2px 1px #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    border: 1px solid #bbb;
    margin: 20px;
`

export const BasicInfoText = styled.div`

`

export const CurrentPeopleWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    padding: 10px;
`

export const CurrentPeopleAmount = styled.div`
    font-size: 24px;
`

export const CurrentPeopleTime = styled.div`
    position: absolute;
    right: 50px;
    font-size: 16px;
`

export const LineWrapper = styled.div`
    height: 350px;
    display: flex;
    justify-content: center;
    padding: 20px;
`