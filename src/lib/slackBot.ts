import fetch from 'isomorphic-unfetch';
import { IPService } from './IPSevice';

type SlackEmoji =
    ':ghost:'               // 👻
    | ':tada:'              // 🎉
    | ':zap:'               // ⚡️
    | ':fire:'              // 🔥 
    | ':ocean:'             // 🌊
    | ':octopus:'           // 🐙
    | ':t-rex:'             // 🦖
    | ':earth_africa:'      // 🌍
    | ':rocket:'            // 🚀
    | ':satellite:'         // 🛰
    | ':airplane:'          // ✈️
    | ':x:'                 // ❌
    | ':white_check_mark:'  // ✅
    | ':100:'               // 💯
    | ':warning:'           // ⚠️
    | ':seedling:'          // 🌱
    | ':e-mail:'            // 📧
    | ':euro:'              // 💶
    | ':dollar:'            // 💵
    | ':pound:'             // 💷
    | ':floppy_disk:'       // 💾
    | ':wave:'              // 👋
    | ':clap:'              // 👏
    | ':raised_hands:'      // 🙌
    | ':grin:'              // 😁
    | ':confused:'          // 😕

interface SlackAttachmentAction {
    name: string
    text: string
    value: string
    type: "button"
    style: "default" | "primary" | "danger"
}

interface SlackAttachmentField {
    title: string
    value: string
    short: boolean
}

interface SlackAttachment {
    fallback: string
    color: string
    author_name?: string
    title?: string
    text?: string
    actions?: SlackAttachmentAction[]
    fields?: SlackAttachmentField[]
}

interface SlackPayload {
    text?: string;
    username?: string;
    icon_url?: string
    icon_emoji?: SlackEmoji
    attachments?: SlackAttachment[]
}

class SlackBotClass {

    hook: string

    constructor(hookUrl: string) {
        this.hook = hookUrl
    }

    async sendPayloadToSlack(payload: SlackPayload): Promise<boolean> {
        try {
            await fetch(this.hook, {
                method: 'POST',
                body: JSON.stringify(payload)
            })
            return true
        }
        catch (error) {
            console.warn(error)
            return false
        }
    }

    link = (url: string, label: string) => ` <${url}|${label}>`

    mapsUrl = (city: string, country: string, postal: string) => `https://www.google.com/maps/?q=${city}, ${country} ${postal}`

    mapsLink = (city: string, country: string, postal: string) => `<${this.mapsUrl(city, country, postal)}|${city}, ${country}>`

    generateVisitorID = (): string => `_${Math.random().toString(36).substr(2, 9)}`

    sendTextMessage = (text: string) => this.sendPayloadToSlack({ text })

    sendSiteVisitNotification = async () => {

        const ipData = await IPService.getIPData()

        let siteVisitorId = localStorage.getItem('SITE_VISITOR_ID')
        let newSiteVisit = !siteVisitorId
        if (!siteVisitorId) {
            siteVisitorId = this.generateVisitorID()
            localStorage.setItem('SITE_VISITOR_ID', siteVisitorId)
        }

        const message = `${newSiteVisit ? 'New' : 'Returning'} Site visit`
        const location = this.mapsLink(ipData.city, ipData.country_name, ipData.postal)

        this.sendPayloadToSlack({
            icon_emoji: newSiteVisit ? ':seedling:' : ':zap:',
            username: message,
            attachments: [
                {
                    color: newSiteVisit ? '#46C977' : '#FFAD2C',
                    fallback: message,
                    fields: [
                        {
                            title: 'Location',
                            value: location,
                            short: false
                        },
                        {
                            title: 'Visitor ID',
                            value: siteVisitorId,
                            short: false
                        }
                    ],
                }
            ]
        })
    }

    sendCtaNotification = async () => {

        const ipData = await IPService.getIPData()

        let siteVisitorId = localStorage.getItem('SITE_VISITOR_ID') as string

        const message = `User triggered CTA`
        const location = this.mapsLink(ipData.city, ipData.country_name, ipData.postal)

        this.sendPayloadToSlack({
            icon_emoji: ':e-mail:',
            username: message,
            attachments: [
                {
                    color: '#4546E8',
                    fallback: message,
                    fields: [
                        {
                            title: 'Location',
                            value: location,
                            short: false
                        },
                        {
                            title: 'Visitor ID',
                            value: siteVisitorId,
                            short: false
                        }
                    ],
                }
            ]
        })
    }

}

const angelicaSlackHook = "https://hooks.slack.com/services/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"
export const SlackBot = new SlackBotClass(angelicaSlackHook) 
