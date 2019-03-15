import * as React from 'react'
import styled from 'styled-components';

import { Page } from '../components/common'
import { IPService, SlackBot } from '../lib/slackBot';

const Title = styled.h1`
    margin-top: 50px;  
    font-family: 'Arimo', sans-serif;
`

const SubTitle = styled.h2`
    font-family: 'Arimo', sans-serif;
    text-align: center;
    font-weight: 400;
    margin-top: 0;
    margin-bottom:20px;
    font-size: large;
`

const ProfileImageStyled = styled.div`
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    height: 150px;
    width: 150px;
    border-radius: 100%;
    background-position: center;
    background-size: cover;
`

const Flex = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`

const Blurb = styled.p`
    padding: 1em 2em;
    text-align: left;
    font-family: 'Arimo', sans-serif;
    line-height: 1.85em;
`

const CTA = styled.button`
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

const ProfileImage: React.FunctionComponent<{ src: string }> = ({ src }) => (
    <ProfileImageStyled style={{ backgroundImage: `url(${src})` }} />
)

const Footer = styled.div`
    bottom: 0;
    left:0;
    margin-top: 60px;
    width: calc(100vw - 2em);
    font-family: 'Arimo', sans-serif;
    height: 50px;
    background: #F2F2F2;
    padding: 0.25em 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CTA_COPY = {
    subject: `Let's talk about video`,
    body: 'Hi Angelica! %0D%0A%0D%0AIf I could describe my organization\'s video strategy in one word it would be ...'
}

const Fist = () => (
    <img height='25px' style={{ marginRight: '15px' }} src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/155/fisted-hand-sign_emoji-modifier-fitzpatrick-type-3_1f44a-1f3fc_1f3fc.png' />
)



class Index extends React.Component {

    componentDidMount() {
        const ipData = IPService.getIpData()
        const gMapsLink = `https://www.google.com/maps/?q=${ipData.postal} ${ipData.city} ${ipData.country_name}`
        SlackBot.sendTextMessage(`⚡️ Site visit from <${gMapsLink}|${ipData.city}, ${ipData.country_name}>`)
    }

    triggerCtaNotification = () => {
        console.log('yo wtf')

        const href = `mailto:asilva@brightcove.com?subject=${CTA_COPY.subject}&body=${CTA_COPY.body}`
        window.open(href)

        const ipData = IPService.getIpData()
        const gMapsLink = `https://www.google.com/maps/?q=${ipData.postal} ${ipData.city} ${ipData.country_name}`
        SlackBot.sendTextMessage(`📣 User just triggered CTA <${gMapsLink}|${ipData.city}, ${ipData.country_name}>`)
    }

    render() {
        return (
            <Page>

                <Flex>

                    <ProfileImage src='/static/profile.png' />

                    <Title>Angelica Silva</Title>
                    <SubTitle>Account Manager, Enterprise Brightcove </SubTitle>

                    <Blurb>
                        It was great to connect with you! I hope you enjoyed Oracle MCX. As a Brightcove Account Manager, my goal is to constantly <strong style={{ fontFamily: 'sans-serif' }}>learn</strong> more from our customers, <strong style={{ fontFamily: 'sans-serif' }}>grow</strong> with the industry, and learn how your team defines <strong style={{ fontFamily: 'sans-serif' }}>success</strong> with video.
                <br />
                        I’d love to continue our conversation.
            </Blurb>

                    <a href={`mailto:asilva@brightcove.com?subject=${CTA_COPY.subject}&body=${CTA_COPY.body}`}><CTA><Fist /> Reach out!</CTA></a>

                </Flex>

                <Footer>
                    <a href='mailto:asilva@brightcove.com'>asilva@brightcove.com</a>
                    <a href='tel:1-617-245-6055'>617-245-6055</a>
                </Footer>

            </Page>
        )
    }
}

export default Index
