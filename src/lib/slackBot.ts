function getIPData() {
    const request = new XMLHttpRequest();
    request.open("GET", "https://ipapi.co/json", false)
    request.send(null);

    if (request.status === 200)
        return JSON.parse(request.responseText)
    else return null

}

export const IPService = {
    getIpData: () => {
        return getIPData()
    }
}

function sendPayloadToSlack(payload: any) {

    const url = "https://hooks.slack.com/services/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";
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.onload = function () {
        if (xhr.status !== 200) {
            console.error("Slack Hook failed");
        }
    };
    xhr.send(JSON.stringify(payload));
}

function sendTextMessage(text: string) {
    sendPayloadToSlack({ text })
}

export class SlackBot {
    static sendPayloadToSlack = sendPayloadToSlack
    static sendTextMessage = sendTextMessage
}
