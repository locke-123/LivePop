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
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`

export const TopWrapper = styled.div`
  width: 100%;
  background-color: white;
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

export const InfoText = styled.div<{$isFirstRender?: boolean}>`
  color: #555;
  margin-bottom: 20px;
  ${props => props.$isFirstRender ? css`
    transition: opacity 1s ease-in-out 1.2s;
    opacity: 1;
    animation: ${LogoKeyframes} 1s ease-in-out 1.2s;`
      : css`
    transition: none;
    opacity: 0;
    animation: none;
    ` 
  };
`

export const MiddleWrapper = styled.div`
  background-color: wheat;
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 0px 12px 1px #eee;
`

export const MainCard = styled.div<{$isFirstRender?: boolean}>`
  width: 200px;
  height: 200px;
  background-color: blue;
  transform-origin: bottom;
  position: relative;
  box-shadow: 0px 0px 2px 1px gray;
  cursor: pointer;
  &:first-child {
    ${props => props.$isFirstRender ? css`
      transition: opacity 0.5s ease-in-out 0.5s, transform 0.2s ease-in-out;
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
      transition: opacity 0.5s ease-in-out 0.6s, transform 0.2s ease-in-out;
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
      transition: opacity 0.5s ease-in-out 0.7s, transform 0.2s ease-in-out;
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
      transition: opacity 0.5s ease-in-out 0.8s, transform 0.2s ease-in-out;
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
      transition: opacity 0.5s ease-in-out 0.9s, transform 0.2s ease-in-out;
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
    transform: scale(1.1);
  }
`

export const MainCardText = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  background-color: rgba(0,0,0,0.5);
  font-size: 24px;
  text-align: center;
  color: white;
`

export const MainCardImg = styled.div`
  top: 0px;
`

export const DetailWrapper = styled.div<{$clickCard?: boolean, $detailData?: {title: string; type: number;list: { name: string; }[];}}>`
  background-color: #eee;
  margin-top: 50px;
  width: 1200px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 30px;
  box-shadow: 0px 0px 10px 1px #ccc;
  ${props => props.$clickCard ? css`
    transition: opacity 0.5s ease-in-out, height 0.2s ease-in-out;
    opacity: 1;
    animation: ${LogoKeyframes} 0.5s ease-in-out
    `
      : css`
    transition: none;
    opacity: 0;
    animation: none;
    `
  };
  height: ${props => props.$detailData?.type === 1 ? '600px' : props.$detailData?.type === 2 ? '700px' : props.$detailData?.type === 3 ? '800px' : '0px'}
`

export const DetailCardType1 = styled.div`
  width: 200px;
  height: 235px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`

export const DetailCardType1ImgBox = styled.div`
  border-radius: 16px;
  overflow: hidden;
  width: 200px;
  height: 200px;
  cursor: pointer;
  box-shadow: 0px 0px 5px 1px #ccc;
`

export const DetailCardType1Img = styled.div`
  border-radius: 16px;
  transition: transform 0.2s ease-in-out;
  width: 200px;
  height: 200px;
  &:hover {
    transform: scale(1.1);
  }
`

export const DetailCardType1Text = styled.div`
  width: 200px;
  height: 35px;
  z-index: 1;
  text-align: center;
  margin: 5px;
`

export const DetailCardType2 = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #ddd;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  transition: background-color 0.3s ease-in-out;
  box-shadow: 0px 0px 5px 1px #bbb;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`

export const DetailCardType2Icon = styled.div<{$color?: string}>`
  margin: 4px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
  font-weight: 600;
`

export const DetailCardType3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 75px;
  margin: 10px;
  background-color: #ddd;
  box-shadow: 0px 0px 3px 1px #ccc;
  transition: background-color 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`

export const DetailCardType3Text = styled.div`
  margin: 0px 10px;
`