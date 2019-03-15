import styled, { keyframes } from 'styled-components'

const BackgroundAnimation = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`

export const Page = styled.div`
    /* background: linear-gradient(230deg,#D189FF,#9971E8, #847CFF); */
    /* animation: ${BackgroundAnimation} 15s ease infinite; */
    position: absolute;
	background-size: 300% 300%;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
` 