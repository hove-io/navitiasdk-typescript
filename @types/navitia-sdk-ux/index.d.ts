// Type definitions for [~NavitiaSDK~] [~OPTIONAL VERSION NUMBER~]
// Project: [~Navitia SDK~]
// Definitions by: [~Kisio Digital~] <[~https://navitia.io/~]>

declare module "navitia-sdk-ux" {
    export class NavitiaSDKUXApi {
        init(configuration: NavitiaSDKUXConfiguration, success?: () => void, error?: (errorMessage: string) => void): void;
        invokeJourneyResults(journeyParams: JourneysUXParameters, success: () => void, error: (errorMessage: string) => void): void;
    }

    export class NavitiaSDKUXConfiguration {
        token: string;
    }

    export class JourneysUXParameters {
        originId: string;
        destinationId: string;
        originLabel?: string;
        destinationLabel?: string;
        datetime?: string;
        datetimeRepresents?: 'departure' | 'arrival';
        forbiddenUris?: Array<string>;
        firstSectionModes?: Array<'walking' | 'bike' | 'car' | 'bss'>;
        lastSectionModes?: Array<'walking' | 'bike' | 'car' | 'bss'>;
        count?: number;
        minNbJourneys?: number;
        maxNbJourneys?: number;
    }
}

