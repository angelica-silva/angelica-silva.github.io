import styled, { keyframes } from 'styled-components'

const BackgroundAnimation = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`

export const HeaderHighlight = styled.div`
    background: linear-gradient(90deg, #44E8A2, #FF722A, #F70A2E, #44E8A2, #FF722A, #F70A2E, #44E8A2);
    animation: ${BackgroundAnimation} 15s ease infinite;
    background-size: 300% 300%;
    height: 3px;
    position: fixed;
    top:0;
    left:0;
    width: 100vw;
`

export const Page = styled.div`
    top:0;
    left:0;
    width: 100vw;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
    padding-bottom: 60px;
`

export const Title = styled.h1`
    margin-top: 50px;  
    font-family: 'Arimo', sans-serif;
`

export const SubTitle = styled.h2`
    font-family: 'Arimo', sans-serif;
    text-align: center;
    font-weight: 400;
    margin-top: 0;
    margin-bottom:20px;
    font-size: large;
`

export const ProfileImageStyled = styled.div`
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    height: 150px;
    width: 150px;
    border-radius: 100%;
    background-position: center;
    background-size: cover;
`

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`

export const Blurb = styled.p`
    padding: 1em 2em;
    text-align: left;
    font-family: 'Arimo', sans-serif;
    line-height: 1.85em;
`

export const CTA = styled.button`
    color:white;
    margin-top:25px;
    border: solid 1px #eee;
    border-radius: 4px;
    font-size:larger;
    padding: 0.5em 1em;
    background : #1A5FDE;
    display: flex;
    align-items: center;
`

export const ProfileImage: React.FunctionComponent<{ src: string }> = ({ src }) => (
    <ProfileImageStyled style={{ backgroundImage: `url(${src})` }} />
)

export const Footer = styled.div`
    bottom: 0;
    left:0;
    background : white;
    width: calc(100vw - 2em);
    font-family: 'Arimo', sans-serif;
    height: 30px;
    border-top: solid 1px #F2F2F2;
    padding: 0.25em 1em;
    display: flex;
    position: fixed;
    bottom:0 ;
    justify-content: space-between;
    align-items: center;
`

export const Fist = () => (
    <img height='25px' style={{ marginRight: '15px' }} src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/155/fisted-hand-sign_emoji-modifier-fitzpatrick-type-3_1f44a-1f3fc_1f3fc.png' />
)
