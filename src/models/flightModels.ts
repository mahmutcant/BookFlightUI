// Schiphol API'dan dönen yanıtlara göre oluşturulan modeller 
export interface Flight {
    scheduleDate: string;
    scheduleTime: string;
    route: Route;
    estimatedLandingTime?: string;
    flightDirection: string;
    prefixICAO: string;
}

interface Route {
    destinations: string[];
}

export interface Airline {
    publicName: string;
}

export interface FilterModel {
    fromDateTime?: string;
    toDateTime?:string;
    page: number;
}

export interface DestinationsDetail {
    city: string;
    country: string;
    publicName: {
        english: string;
    }
}