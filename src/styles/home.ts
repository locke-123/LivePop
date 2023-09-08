import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    height: 2000px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const Wrapper = styled.div`
    width: 1300px;
    background-color: #aaa;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TopWrapper = styled.div`
    width: 100%;
    background-color: #bbb;
    margin-bottom: 50px;
`

export const Logo = styled.div<{isFirstRender: boolean}>`
    background-color: blue;
    padding: 20px;

    ${props => props.isFirstRender && css`animation: ${myAnimation} 1s ease-in-out;`}
`

export const MiddleWrapper = styled.div`
    background-color: #ccc;
`

const myAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    transform: translateY(100);
    opacity: 1;
  }
`;