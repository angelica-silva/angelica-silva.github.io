import * as React from 'react';
import { Blurb, CTA, Fist, Flex, Footer, Page, ProfileImage, SubTitle, Title, HeaderHighlight } from '../components';
import { SlackBot } from '../lib/SlackBot';


const CTA_COPY = {
    subject: `Let's talk about video`,
    body: 'Hi Angelica! %0D%0A%0D%0AIf I could describe my organization\'s video strategy in one word it would be ...'
}

class Index extends React.Component {

    async componentDidMount() {
        SlackBot.sendSiteVisitNotification()
    }

    openEmail = () => {
        const href = `mailto:asilva@brightcove.com?subject=${CTA_COPY.subject}&body=${CTA_COPY.body}`
        window.open(href)
        SlackBot.sendCtaNotification()
    }

    render() {
        return (
            <>
                <HeaderHighlight />
                <Page>

                    <Flex>

                        <ProfileImage src='/static/profile.png' />

                        <Title>Angelica Silva</Title>
                        <SubTitle>Account Manager, Enterprise Brightcove </SubTitle>

                        <Blurb>
                            It was great to connect with you! I hope you enjoyed Oracle MCX. As a Brightcove Account Manager,
                            my goal is to constantly <strong style={{ fontFamily: 'sans-serif' }}>learn</strong> more from our
                            customers, <strong style={{ fontFamily: 'sans-serif' }}>grow</strong> with the industry, and learn
                            how your team defines <strong style={{ fontFamily: 'sans-serif' }}>success</strong> with video.
                            I’d love to continue our conversation.
                        </Blurb>

                        <CTA onClick={this.openEmail} ><Fist /> Reach out!</CTA>

                    </Flex>


                </Page>
                <Footer>
                    <a href='mailto:asilva@brightcove.com'>asilva@brightcove.com</a>
                    <a href='tel:1-617-245-6055'>617-245-6055</a>
                </Footer>
            </>
        )
    }
}

export default Index
