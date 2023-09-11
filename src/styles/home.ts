import styled, { css, keyframes } from "styled-components";

const LogoKeyframes = keyframes`
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0px);
  }
`

const CardKeyframes = keyframes`
  0% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(0px);
  }
`

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 1300px;
  background-color: #aaa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`

export const TopWrapper = styled.div`
  width: 100%;
  background-color: #bbb;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`

export const Logo = styled.div<{$isFirstRender?: boolean}>`
  background-color: white;
  padding: 20px;
  display: flex;
  justify-content: center;
  width: 500px;
  ${props => props.$isFirstRender ? css`
    transition: opacity 0.6s ease-in-out;
    opacity: 1;
    animation: ${LogoKeyframes} 0.6s ease-in-out;`
      : css`
    transition: none;
    opacity: 0;
    animation: none;
    ` 
  };
`

export const MiddleWrapper = styled.div`
  background-color: #ccc;
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
`

export const MainCard = styled.div<{$isFirstRender?: boolean}>`
  width: 200px;
  height: 200px;
  background-color: blue;
  transform-origin: bottom;
  &:first-child {
    ${props => props.$isFirstRender ? css`
      transition: opacity 0.5s ease-in-out 0.5s, transform 0.5s ease-in-out;
      opacity: 1;
      animation: ${CardKeyframes} 0.5s ease-in-out 0.5s`
        : css`
      transition: none;
      opacity: 0;
      animation: none;
      `
    };
  }
  &:nth-child(2) {
    ${props => props.$isFirstRender ? css`
      transition: opacity 0.5s ease-in-out 0.6s, transform 0.5s ease-in-out;
      opacity: 1;
      animation: ${CardKeyframes} 0.5s ease-in-out 0.6s`
        : css`
      transition: none;
      opacity: 0;
      animation: none;
      `
    };
  }
  &:nth-child(3) {
    ${props => props.$isFirstRender ? css`
      transition: opacity 0.5s ease-in-out 0.7s, transform 0.5s ease-in-out;
      opacity: 1;
      animation: ${CardKeyframes} 0.5s ease-in-out 0.7s`
        : css`
      transition: none;
      opacity: 0;
      animation: none;
      `
    };
  }
  &:nth-child(4) {
    ${props => props.$isFirstRender ? css`
      transition: opacity 0.5s ease-in-out 0.8s, transform 0.5s ease-in-out;
      opacity: 1;
      animation: ${CardKeyframes} 0.5s ease-in-out 0.8s`
        : css`
      transition: none;
      opacity: 0;
      animation: none;
      `
    };
  }
  &:last-child {
    ${props => props.$isFirstRender ? css`
      transition: opacity 0.5s ease-in-out 0.9s, transform 0.5s ease-in-out;
      opacity: 1;
      animation: ${CardKeyframes} 0.5s ease-in-out 0.9s`
        : css`
      transition: none;
      opacity: 0;
      animation: none;
      `
    };
  }
  &:hover {
    transform: scale(1.2);
  }
`

export const DetailWrapper = styled.div<{$clickCard?: boolean, $detailData?: {title: string; type: number;list: { name: string; }[];}}>`
  background-color: #eee;
  margin-top: 50px;
  width: 1200px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px;
  ${props => props.$clickCard ? css`
    transition: opacity 0.5s ease-in-out, height 0.5s ease-in-out;
    opacity: 1;
    animation: ${LogoKeyframes} 0.5s ease-in-out
    `
      : css`
    transition: none;
    opacity: 0;
    animation: none;
    `
  };
  height: ${props => props.$detailData?.type === 1 ? '650px' : props.$detailData?.type === 2 ? '400px' : props.$detailData?.type === 3 ? '600px' : '0px'}
`

export const DetailCardType1 = styled.div`
  width: 200px;
  height: 225px;
  margin: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  overflow: hidden;
  border-radius: 12px;
`

export const BottomWrapper = styled.div`
  background-color: #edd48f;
  width: 100%;
  height: 200px;
`

export const DetailCardType1Img = styled.div`
  transition: transform 0.2s ease-in-out;
  width: 200px;
  height: 200px;
  &:hover {
    transform: scale(1.1);
  }
`

export const DetailCardType1Text = styled.div`
  width: 200px;
  height: 25px;
  background-color: #eee;
  z-index: 1;
  text-align: center;
`