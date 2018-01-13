// Type definitions for [~NavitiaSDK~] [~OPTIONAL VERSION NUMBER~]
// Project: [~Navitia SDK~]
// Definitions by: [~Kisio Digital~] <[~https://navitia.io/~]>

declare module "navitia-sdk-ux" {
    export class NavitiaSDKUXApi {
        init(token: NavitiaSDKUXConfiguration): void;
        invokeJourneyResults(journeyParams: JourneysUXParameters, success: () => void, error: (error: string) => void): void;
    }

    export class NavitiaSDKUXConfiguration {
        token: string;
    }

    export enum DatetimeRepresents {
        DEPARTURE = 'departure',
        ARRIVAL = 'arrival'
    }

    export enum SectionMode {
        WALKING = 'walking',
        BIKE = 'bike',
        CAR = 'car',
        BSS = 'bss'
    }

    export class JourneysUXParameters {
        originId: string;
        destinationId: string;
        originLabel?: string;
        destinationLabel?: string;
        datetime?: string;
        datetimeRepresents?: DatetimeRepresents;
        forbiddenUris?: Array<string>;
        firstSectionModes?: Array<SectionMode>;
        lastSectionModes?: Array<SectionMode>;
        count?: number;
        minNbJourneys?: number;
        maxNbJourneys?: number;
    }
}

