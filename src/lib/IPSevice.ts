import fetch from 'isomorphic-unfetch';

export interface IPData {
    ip: string,
    city: string,
    region: string,
    region_code: string,
    country: string,
    country_name: string,
    continent_code: string,
    in_eu: boolean,
    postal: string,
    latitude: number,
    longitude: number,
    timezone: string,
    utc_offset: string,
    country_calling_code: string,
    currency: string,
    languages: string,
    asn: string,
    org: string
}


class IPServiceClass {

    CACHED_IP_DATA?: IPData;

    getIPData = async (): Promise<IPData> => {
        if (!this.CACHED_IP_DATA) {
            const IPDataResult = await fetch('https://ipapi.co/json')
            this.CACHED_IP_DATA = await IPDataResult.json()
        }
        return this.CACHED_IP_DATA as IPData
    }
}

export const IPService = new IPServiceClass()