// Type definitions for [~NavitiaSDK~] [~OPTIONAL VERSION NUMBER~]
// Project: [~Navitia SDK~]
// Definitions by: [~Kisio Digital~] <[~https://navitia.io/~]>

declare module "navitia-sdk" {
    export class NavitiaSDKApi {
        init(token: string, success?: () => void, error?: (errorMessage: string) => void): void;
        calendars: CalendarsApi;
        commercialModes: CommercialModesApi;
        companies: CompaniesApi;
        contributors: ContributorsApi;
        coverage: CoverageApi;
        datasets: DatasetsApi;
        disruptions: DisruptionsApi;
        geoStatus: GeoStatusApi;
        graphicalIsochrone: GraphicalIsochroneApi;
        heatMap: HeatMapApi;
        journeyPatternPoints: JourneyPatternPointsApi;
        journeyPatterns: JourneyPatternsApi;
        journeys: JourneysApi;
        lineGroups: LineGroupsApi;
        lineReports: LineReportsApi;
        lines: LinesApi;
        networks: NetworksApi;
        nextArrivals: NextArrivalsApi;
        nextDepartures: NextDeparturesApi;
        physicalModes: PhysicalModesApi;
        places: PlacesApi;
        placesNearby: PlacesNearbyApi;
        poiTypes: PoiTypesApi;
        pois: PoisApi;
        ptobjects: PtobjectsApi;
        routeSchedules: RouteSchedulesApi;
        routes: RoutesApi;
        status: StatusApi;
        stopAreas: StopAreasApi;
        stopPoints: StopPointsApi;
        stopSchedules: StopSchedulesApi;
        trafficReport: TrafficReportApi;
        trips: TripsApi;
        vehicleJourneys: VehicleJourneysApi;
    }
    export class Address {
        name: string;
        house_number: number;
        coord: Coord;
        label: string;
        administrative_regions: Array<Admin>;
        id: string;
    }

    export class Admin {
        insee: string;
        name: string;
        level: number;
        coord: Coord;
        label: string;
        id: string;
        zip_code: string;
    }

    export class Amount {
        value: number;
        unit: string;
    }

    export class Arrivals {
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        arrivals: Array<Passage>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
    }

    export class Autocomplete {
        class: string;
        timeout: number;
    }

    export class BetaEndpoints {
        message: string;
        id: string;
    }

    export class CO2 {
        co2_emission: Amount;
    }

    export class Calendar {
        active_periods: Array<CalendarPeriod>;
        name: string;
        validity_pattern: ValidityPattern;
        exceptions: Array<CalendarException>;
        week_pattern: WeekPattern;
        id: string;
    }

    export class CalendarException {
        type: string;
        datetime: string;
    }

    export class CalendarPeriod {
        begin: string;
        end: string;
    }

    export class Calendars {
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        calendars: Array<Calendar>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
    }

    export class CellLatSchema {
        min_lat: number;
        max_lat: number;
        center_lat: number;
    }

    export class CellLonSchema {
        min_lon: number;
        center_lon: number;
        max_lon: number;
    }

    export class Channel {
        content_type: string;
        id: string;
        types: Array<string>;
        name: string;
    }

    export class CircuitBreaker {
        fail_counter: number;
        current_state: string;
        reset_timeout: number;
    }

    export class Code {
        type: string;
        value: string;
    }

    export class CommercialMode {
        id: string;
        name: string;
    }

    export class CommercialModes {
        pagination: Pagination;
        commercial_modes: Array<CommercialMode>;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
    }

    export class Companie {
        codes: Array<Code>;
        id: string;
        name: string;
    }

    export class Companies {
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        companies: Array<Companie>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
    }

    export class Context {
        car_direct_path: CO2;
    }

    export class Contributor {
        website: string;
        id: string;
        license: string;
        name: string;
    }

    export class Contributors {
        pagination: Pagination;
        contributors: Array<Contributor>;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
    }

    export class Coord {
        lat: string;
        lon: string;
    }

    export class Cost {
        currency: string;
        value: string;
    }

    export class Coverage {
        status: string;
        dataset_created_at: string;
        name: string;
        start_production_date: string;
        shape: string;
        end_production_date: string;
        error: CoverageError;
        last_load_at: string;
        id: string;
    }

    export class CoverageError {
        code: string;
        value: string;
    }

    export class Coverages {
        regions: Array<Coverage>;
    }

    export class Dataset {
        realtime_level: string;
        description: string;
        system: string;
        start_validation_date: string;
        end_validation_date: string;
        contributor: Contributor;
        id: string;
    }

    export class Datasets {
        pagination: Pagination;
        datasets: Array<Dataset>;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
    }

    export class DateTimeType {
        date_time: string;
        additional_informations: Array<string>;
        base_date_time: string;
        data_freshness: string;
        links: Array<LinkSchema>;
    }

    export class Departures {
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        departures: Array<Passage>;
        error: ModelError;
    }

    export class Disruption {
        disruption_id: string;
        status: string;
        severity: Severity;
        tags: Array<string>;
        application_periods: Array<Period>;
        impact_id: string;
        messages: Array<Message>;
        updated_at: string;
        uri: string;
        impacted_objects: Array<Impacted>;
        id: string;
        contributor: string;
        category: string;
        cause: string;
        disruption_uri: string;
    }

    export class Disruptions {
        disruptions: Array<Disruption>;
        pagination: Pagination;
        error: ModelError;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
    }

    export class Durations {
        walking: number;
        total: number;
    }

    export class Exception {
        date: string;
        type: string;
        id: string;
    }

    export class Fare {
        found: boolean;
        total: Cost;
        links: Array<LinkSchema>;
    }

    export class FeedPublisher {
        url: string;
        id: string;
        license: string;
        name: string;
    }

    export class GeoStatus {
        nb_admins_from_cities: number;
        street_network_sources: Array<string>;
        poi_sources: Array<string>;
        nb_addresses: number;
        nb_admins: number;
        nb_pois: number;
        nb_ways: number;
    }

    export class GeoStatus_1 {
        geo_status: GeoStatus;
    }

    export class GraphicalIsrochone {
        max_duration: number;
        from: Place;
        geojson: GraphicalIsrochone_geojson;
        min_duration: number;
        min_date_time: string;
        to: Place;
        requested_date_time: string;
        max_date_time: string;
    }

    export class GraphicalIsrochone_1 {
        isochrones: Array<GraphicalIsrochone>;
        feed_publishers: Array<FeedPublisher>;
        warnings: Array<BetaEndpoints>;
        links: Array<LinkSchema>;
        error: ModelError;
    }

    export class GraphicalIsrochone_geojson {
        coordinates: Array<Array<Array<Array<number>>>>;
    }

    export class Header {
        display_informations: VJDisplayInformation;
        additional_informations: Array<string>;
        links: Array<LinkSchema>;
    }

    export class HeatMap {
        to: Place;
        requested_date_time: string;
        from: Place;
        heat_matrix: HeatMatrixSchema;
    }

    export class HeatMap_1 {
        feed_publishers: Array<FeedPublisher>;
        warnings: Array<BetaEndpoints>;
        heat_maps: Array<HeatMap>;
        links: Array<LinkSchema>;
        error: ModelError;
    }

    export class HeatMatrixSchema {
        line_headers: Array<LineHeadersSchema>;
        lines: Array<LinesSchema>;
    }

    export class Impacted {
        impacted_stops: Array<ImpactedStop>;
        pt_object: PtObject;
        impacted_section: ImpactedSection;
    }

    export class ImpactedSection {
        to: PtObject;
        from: PtObject;
    }

    export class ImpactedStop {
        amended_arrival_time: string;
        stop_point: StopPoint;
        stop_time_effect: string;
        departure_status: string;
        amended_departure_time: string;
        base_arrival_time: string;
        cause: string;
        base_departure_time: string;
        arrival_status: string;
    }

    export class Journey {
        status: string;
        fare: Fare;
        from: Place;
        tags: Array<string>;
        nb_transfers: number;
        durations: Durations;
        arrival_date_time: string;
        calendars: Array<Calendar>;
        departure_date_time: string;
        to: Place;
        requested_date_time: string;
        co2_emission: Amount;
        type: string;
        duration: number;
        sections: Array<Section>;
        debug: JourneyDebug;
    }

    export class JourneyDebug {
        nb_vj_extentions: number;
        nb_sections: number;
        internal_id: string;
        streetnetwork_duration: number;
        transfer_duration: number;
        min_waiting_duration: number;
    }

    export class JourneyPattern {
        route: Route;
        journey_pattern_points: Array<JourneyPatternPoint>;
        name: string;
        id: string;
    }

    export class JourneyPatternPoint {
        stop_point: StopPoint;
        id: string;
    }

    export class JourneyPatternPoints {
        pagination: Pagination;
        journey_pattern_points: Array<JourneyPatternPoint>;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
    }

    export class JourneyPatterns {
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        journey_patterns: Array<JourneyPattern>;
        error: ModelError;
    }

    export class Journeys {
        tickets: Array<Ticket>;
        links: Array<LinkSchema>;
        journeys: Array<Journey>;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        context: Context;
        error: ModelError;
        exceptions: Array<Exception>;
    }

    export class Line {
        comment: string;
        properties: Array<Property>;
        code: string;
        network: Network;
        links: Array<LinkSchema>;
        color: string;
        routes: Array<Route>;
        geojson: MultiLineStringSchema;
        text_color: string;
        physical_modes: Array<PhysicalMode>;
        codes: Array<Code>;
        comments: Array<ModelComment>;
        closing_time: string;
        opening_time: string;
        commercial_mode: CommercialMode;
        id: string;
        line_groups: Array<LineGroup>;
        name: string;
    }

    export class LineGroup {
        name: string;
        lines: Array<Line>;
        main_line: Line;
        comments: Array<ModelComment>;
        id: string;
    }

    export class LineGroups {
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
        line_groups: Array<LineGroup>;
    }

    export class LineHeadersSchema {
        cell_lat: CellLatSchema;
    }

    export class LineReport {
        line: Line;
        pt_objects: Array<PtObject>;
    }

    export class LineReports {
        pagination: Pagination;
        warnings: Array<BetaEndpoints>;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        line_reports: Array<LineReport>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
    }

    export class Lines {
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        lines: Array<Line>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
    }

    export class LinesSchema {
        duration: Array<number>;
        cell_lon: CellLonSchema;
    }

    export class LinkSchema {
        title: string;
        internal: boolean;
        rel: string;
        templated: boolean;
        type: string;
        id: string;
    }

    export class Message {
        text: string;
        channel: Channel;
    }

    export class ModelComment {
        type: string;
        value: string;
    }

    export class ModelError {
        message: string;
        id: string;
    }

    export class MultiLineStringSchema {
        type: string;
        coordinates: Array<Array<Array<number>>>;
    }

    export class Network {
        codes: Array<Code>;
        lines: Line;
        id: string;
        links: Array<LinkSchema>;
        name: string;
    }

    export class Networks {
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
        networks: Array<Network>;
    }

    export class Note {
        category: string;
        type: string;
        id: string;
        value: string;
    }

    export class Pagination {
        start_page: number;
        items_on_page: number;
        items_per_page: number;
        total_result: number;
    }

    export class Parameters {
        min_car: number;
        max_duration: number;
        journey_order: string;
        min_tc_with_bss: number;
        max_bss_duration_to_pt: number;
        max_nb_transfers: number;
        bike_speed: number;
        walking_transfer_penalty: number;
        max_additional_connections: number;
        walking_speed: number;
        max_duration_fallback_mode: string;
        priority: number;
        car_speed: number;
        min_tc_with_car: number;
        min_tc_with_bike: number;
        successive_physical_mode_to_limit_id: string;
        min_bike: number;
        max_walking_duration_to_pt: number;
        night_bus_filter_base_factor: number;
        max_bike_duration_to_pt: number;
        max_duration_criteria: string;
        bss_provider: boolean;
        scenario: string;
        max_car_duration_to_pt: number;
        min_bss: number;
        min_duration_too_long_journey: number;
        night_bus_filter_max_factor: number;
        factor_too_long_journey: number;
        bss_speed: number;
    }

    export class Passage {
        display_informations: VJDisplayInformation;
        stop_point: StopPoint;
        route: Route;
        links: Array<LinkSchema>;
        stop_date_time: StopDateTime;
    }

    export class Path {
        duration: number;
        direction: number;
        length: number;
        name: string;
    }

    export class Period {
        begin: string;
        end: string;
    }

    export class PhysicalMode {
        id: string;
        name: string;
    }

    export class PhysicalModes {
        pagination: Pagination;
        physical_modes: Array<PhysicalMode>;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
    }

    export class Place {
        embedded_type: string;
        stop_point: StopPoint;
        administrative_region: Admin;
        name: string;
        address: Address;
        poi: Poi;
        quality: number;
        id: string;
        stop_area: StopArea;
    }

    export class PlaceNearby {
        embedded_type: string;
        stop_point: StopPoint;
        administrative_region: Admin;
        name: string;
        distance: string;
        address: Address;
        poi: Poi;
        quality: number;
        id: string;
        stop_area: StopArea;
    }

    export class Places {
        disruptions: Array<Disruption>;
        error: ModelError;
        places: Array<Place>;
        feed_publishers: Array<FeedPublisher>;
    }

    export class PlacesNearby {
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
        places_nearby: Array<PlaceNearby>;
    }

    export class Poi {
        poi_type: PoiType;
        name: string;
        coord: Coord;
        label: string;
        administrative_regions: Array<Admin>;
        address: Address;
        id: string;
        properties: Array<string>;
        stands: Stands;
    }

    export class PoiType {
        id: string;
        name: string;
    }

    export class PoiTypes {
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
        poi_types: Array<PoiType>;
    }

    export class Pois {
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        pois: Array<Poi>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
    }

    export class Property {
        name: string;
        value: string;
    }

    export class PtObject {
        embedded_type: string;
        stop_point: StopPoint;
        name: string;
        route: Route;
        stop_area: StopArea;
        commercial_mode: CommercialMode;
        id: string;
        line: Line;
        quality: number;
        trip: Trip;
        network: Network;
    }

    export class PtObjects {
        disruptions: Array<Disruption>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
        pt_objects: Array<PtObject>;
    }

    export class Route {
        direction: Place;
        codes: Array<Code>;
        name: string;
        links: Array<LinkSchema>;
        physical_modes: Array<PhysicalMode>;
        is_frequence: string;
        comments: Array<ModelComment>;
        direction_type: string;
        geojson: MultiLineStringSchema;
        stop_points: Array<StopPoint>;
        line: Line;
        id: string;
    }

    export class RouteDisplayInformation {
        direction: string;
        code: string;
        network: string;
        links: Array<LinkSchema>;
        color: string;
        label: string;
        commercial_mode: string;
        text_color: string;
        name: string;
    }

    export class RouteSchedule {
        display_informations: RouteDisplayInformation;
        table: Table;
        additional_informations: string;
        geojson: MultiLineStringSchema;
        links: Array<LinkSchema>;
    }

    export class RouteSchedules {
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
        route_schedules: Array<RouteSchedule>;
    }

    export class Routes {
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
        routes: Array<Route>;
    }

    export class Row {
        stop_point: StopPoint;
        date_times: Array<DateTimeType>;
    }

    export class Section {
        transfer_type: string;
        from: Place;
        links: Array<LinkSchema>;
        arrival_date_time: string;
        additional_informations: Array<string>;
        departure_date_time: string;
        display_informations: VJDisplayInformation;
        to: Place;
        base_arrival_date_time: string;
        base_departure_date_time: string;
        co2_emission: Amount;
        geojson: SectionGeoJsonSchema;
        duration: number;
        path: Array<Path>;
        stop_date_times: Array<StopDateTime>;
        type: string;
        id: string;
        data_freshness: string;
        mode: string;
    }

    export class SectionGeoJsonSchema {
        type: string;
        coordinates: Array<Array<number>>;
    }

    export class Severity {
        color: string;
        priority: number;
        name: string;
        effect: string;
    }

    export class Stands {
        available_places: number;
        available_bikes: number;
        total_stands: number;
    }

    export class Status {
        status: string;
        dataset_created_at: string;
        traveler_profiles: Array<TravelerProfiles>;
        is_realtime_loaded: boolean;
        parameters: Parameters;
        kraken_version: string;
        start_production_date: string;
        is_open_service: boolean;
        nb_threads: number;
        is_connected_to_rabbitmq: boolean;
        autocomplete: Autocomplete;
        data_version: number;
        last_load_at: string;
        end_production_date: string;
        realtime_proxies: Array<string>;
        publication_date: string;
        realtime_contributors: Array<string>;
        street_networks: Array<StreetNetwork>;
        last_load_status: boolean;
        is_open_data: boolean;
        last_rt_data_loaded: string;
    }

    export class Status_1 {
        status: Status;
    }

    export class StopArea {
        comment: string;
        codes: Array<Code>;
        name: string;
        links: Array<LinkSchema>;
        physical_modes: Array<PhysicalMode>;
        comments: Array<ModelComment>;
        label: string;
        commercial_modes: Array<CommercialMode>;
        coord: Coord;
        administrative_regions: Array<Admin>;
        timezone: string;
        stop_points: Array<StopPoint>;
        id: string;
    }

    export class StopAreas {
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
        stop_areas: Array<StopArea>;
    }

    export class StopDateTime {
        stop_point: StopPoint;
        links: Array<LinkSchema>;
        arrival_date_time: string;
        additional_informations: Array<string>;
        departure_date_time: string;
        base_arrival_date_time: string;
        base_departure_date_time: string;
        data_freshness: string;
    }

    export class StopPoint {
        comment: string;
        codes: Array<Code>;
        name: string;
        links: Array<LinkSchema>;
        physical_modes: Array<PhysicalMode>;
        coord: Coord;
        label: string;
        equipments: Array<string>;
        commercial_modes: Array<CommercialMode>;
        comments: Array<ModelComment>;
        administrative_regions: Array<Admin>;
        address: Address;
        id: string;
        stop_area: StopArea;
    }

    export class StopPoints {
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
        stop_points: Array<StopPoint>;
    }

    export class StopSchedule {
        stop_point: StopPoint;
        links: Array<LinkSchema>;
        date_times: Array<DateTimeType>;
        route: Route;
        additional_informations: string;
        display_informations: RouteDisplayInformation;
    }

    export class StopSchedules {
        stop_schedules: Array<StopSchedule>;
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
    }

    export class StopTime {
        stop_point: StopPoint;
        headsign: string;
        journey_pattern_point: JourneyPatternPoint;
        departure_time: string;
        arrival_time: string;
    }

    export class StreetNetwork {
        id: string;
        modes: Array<string>;
        class: string;
        timeout: number;
        circuit_breaker: CircuitBreaker;
    }

    export class Table {
        headers: Array<Header>;
        rows: Array<Row>;
    }

    export class Ticket {
        comment: string;
        name: string;
        links: Array<LinkSchema>;
        cost: Cost;
        found: boolean;
        id: string;
    }

    export class TrafficReport {
        vehicle_journeys: Array<VehicleJourney>;
        lines: Array<Line>;
        network: Network;
        stop_areas: Array<StopArea>;
    }

    export class TrafficReports {
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        traffic_reports: Array<TrafficReport>;
        error: ModelError;
    }

    export class TravelerProfiles {
        last_section_mode: Array<string>;
        walking_speed: number;
        is_from_db: boolean;
        traveler_type: string;
        wheelchair: boolean;
        max_bss_duration_to_pt: number;
        max_walking_duration_to_pt: number;
        first_section_mode: Array<string>;
        max_bike_duration_to_pt: number;
        bike_speed: number;
        car_speed: number;
        max_car_duration_to_pt: number;
        bss_speed: number;
    }

    export class Trip {
        id: string;
        name: string;
    }

    export class Trips {
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
        trips: Array<Trip>;
    }

    export class VJDisplayInformation {
        direction: string;
        code: string;
        network: string;
        links: Array<LinkSchema>;
        color: string;
        name: string;
        physical_mode: string;
        headsign: string;
        label: string;
        equipments: Array<string>;
        text_color: string;
        headsigns: Array<string>;
        commercial_mode: string;
        description: string;
    }

    export class ValidityPattern {
        beginning_date: string;
        days: string;
    }

    export class VehicleJourney {
        comment: string;
        codes: Array<Code>;
        name: string;
        journey_pattern: JourneyPattern;
        disruptions: Array<LinkSchema>;
        calendars: Array<Calendar>;
        stop_times: Array<StopTime>;
        comments: Array<ModelComment>;
        validity_pattern: ValidityPattern;
        id: string;
        trip: Trip;
    }

    export class VehicleJourneys {
        pagination: Pagination;
        disruptions: Array<Disruption>;
        notes: Array<Note>;
        feed_publishers: Array<FeedPublisher>;
        error: ModelError;
        vehicle_journeys: Array<VehicleJourney>;
    }

    export class WeekPattern {
        monday: boolean;
        tuesday: boolean;
        friday: boolean;
        wednesday: boolean;
        thursday: boolean;
        sunday: boolean;
        saturday: boolean;
    }

    export class CalendarsApi {
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionCalendarsRequestBuilder(): CoverageRegionCalendarsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionCalendarsIdRequestBuilder(): CoverageRegionCalendarsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriCalendarsRequestBuilder(): CoverageRegionUriCalendarsRequestBuilder;
    }

    export class CommercialModesApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatCommercialModesRequestBuilder(): CoverageLonLatCommercialModesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withId(id: string)
         */
        coverageLonLatCommercialModesIdRequestBuilder(): CoverageLonLatCommercialModesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriCommercialModesRequestBuilder(): CoverageLonLatUriCommercialModesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageLonLatUriCommercialModesIdRequestBuilder(): CoverageLonLatUriCommercialModesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionCommercialModesRequestBuilder(): CoverageRegionCommercialModesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionCommercialModesIdRequestBuilder(): CoverageRegionCommercialModesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriCommercialModesRequestBuilder(): CoverageRegionUriCommercialModesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageRegionUriCommercialModesIdRequestBuilder(): CoverageRegionUriCommercialModesIdRequestBuilder;
    }

    export class CompaniesApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatCompaniesRequestBuilder(): CoverageLonLatCompaniesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withId(id: string)
         */
        coverageLonLatCompaniesIdRequestBuilder(): CoverageLonLatCompaniesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriCompaniesRequestBuilder(): CoverageLonLatUriCompaniesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageLonLatUriCompaniesIdRequestBuilder(): CoverageLonLatUriCompaniesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionCompaniesRequestBuilder(): CoverageRegionCompaniesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionCompaniesIdRequestBuilder(): CoverageRegionCompaniesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriCompaniesRequestBuilder(): CoverageRegionUriCompaniesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageRegionUriCompaniesIdRequestBuilder(): CoverageRegionUriCompaniesIdRequestBuilder;
    }

    export class ContributorsApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatContributorsRequestBuilder(): CoverageLonLatContributorsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withId(id: string)
         */
        coverageLonLatContributorsIdRequestBuilder(): CoverageLonLatContributorsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriContributorsRequestBuilder(): CoverageLonLatUriContributorsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageLonLatUriContributorsIdRequestBuilder(): CoverageLonLatUriContributorsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionContributorsRequestBuilder(): CoverageRegionContributorsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionContributorsIdRequestBuilder(): CoverageRegionContributorsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriContributorsRequestBuilder(): CoverageRegionUriContributorsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageRegionUriContributorsIdRequestBuilder(): CoverageRegionUriContributorsIdRequestBuilder;
    }

    export class CoverageApi {
        /**
         * Mandatory parameters:
         */
        coverageRequestBuilder(): CoverageRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatRequestBuilder(): CoverageLonLatRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionRequestBuilder(): CoverageRegionRequestBuilder;
    }

    export class DatasetsApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatDatasetsRequestBuilder(): CoverageLonLatDatasetsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withId(id: string)
         */
        coverageLonLatDatasetsIdRequestBuilder(): CoverageLonLatDatasetsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriDatasetsRequestBuilder(): CoverageLonLatUriDatasetsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageLonLatUriDatasetsIdRequestBuilder(): CoverageLonLatUriDatasetsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionDatasetsRequestBuilder(): CoverageRegionDatasetsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionDatasetsIdRequestBuilder(): CoverageRegionDatasetsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriDatasetsRequestBuilder(): CoverageRegionUriDatasetsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageRegionUriDatasetsIdRequestBuilder(): CoverageRegionUriDatasetsIdRequestBuilder;
    }

    export class DisruptionsApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatDisruptionsRequestBuilder(): CoverageLonLatDisruptionsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withId(id: string)
         */
        coverageLonLatDisruptionsIdRequestBuilder(): CoverageLonLatDisruptionsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriDisruptionsRequestBuilder(): CoverageLonLatUriDisruptionsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageLonLatUriDisruptionsIdRequestBuilder(): CoverageLonLatUriDisruptionsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionDisruptionsRequestBuilder(): CoverageRegionDisruptionsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionDisruptionsIdRequestBuilder(): CoverageRegionDisruptionsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriDisruptionsRequestBuilder(): CoverageRegionUriDisruptionsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageRegionUriDisruptionsIdRequestBuilder(): CoverageRegionUriDisruptionsIdRequestBuilder;
    }

    export class GeoStatusApi {
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionGeoStatusRequestBuilder(): CoverageRegionGeoStatusRequestBuilder;
    }

    export class GraphicalIsochroneApi {
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionIsochronesRequestBuilder(): CoverageRegionIsochronesRequestBuilder;
    }

    export class HeatMapApi {
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionHeatMapsRequestBuilder(): CoverageRegionHeatMapsRequestBuilder;
    }

    export class JourneyPatternPointsApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatJourneyPatternPointsRequestBuilder(): CoverageLonLatJourneyPatternPointsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withId(id: string)
         */
        coverageLonLatJourneyPatternPointsIdRequestBuilder(): CoverageLonLatJourneyPatternPointsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriJourneyPatternPointsRequestBuilder(): CoverageLonLatUriJourneyPatternPointsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageLonLatUriJourneyPatternPointsIdRequestBuilder(): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionJourneyPatternPointsRequestBuilder(): CoverageRegionJourneyPatternPointsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionJourneyPatternPointsIdRequestBuilder(): CoverageRegionJourneyPatternPointsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriJourneyPatternPointsRequestBuilder(): CoverageRegionUriJourneyPatternPointsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageRegionUriJourneyPatternPointsIdRequestBuilder(): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;
    }

    export class JourneyPatternsApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatJourneyPatternsRequestBuilder(): CoverageLonLatJourneyPatternsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withId(id: string)
         */
        coverageLonLatJourneyPatternsIdRequestBuilder(): CoverageLonLatJourneyPatternsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriJourneyPatternsRequestBuilder(): CoverageLonLatUriJourneyPatternsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageLonLatUriJourneyPatternsIdRequestBuilder(): CoverageLonLatUriJourneyPatternsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionJourneyPatternsRequestBuilder(): CoverageRegionJourneyPatternsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionJourneyPatternsIdRequestBuilder(): CoverageRegionJourneyPatternsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriJourneyPatternsRequestBuilder(): CoverageRegionUriJourneyPatternsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageRegionUriJourneyPatternsIdRequestBuilder(): CoverageRegionUriJourneyPatternsIdRequestBuilder;
    }

    export class JourneysApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatJourneysRequestBuilder(): CoverageLonLatJourneysRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionJourneysRequestBuilder(): CoverageRegionJourneysRequestBuilder;
        /**
         * Mandatory parameters:
         */
        journeysRequestBuilder(): JourneysRequestBuilder;
    }

    export class LineGroupsApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatLineGroupsRequestBuilder(): CoverageLonLatLineGroupsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withId(id: string)
         */
        coverageLonLatLineGroupsIdRequestBuilder(): CoverageLonLatLineGroupsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriLineGroupsRequestBuilder(): CoverageLonLatUriLineGroupsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageLonLatUriLineGroupsIdRequestBuilder(): CoverageLonLatUriLineGroupsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionLineGroupsRequestBuilder(): CoverageRegionLineGroupsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionLineGroupsIdRequestBuilder(): CoverageRegionLineGroupsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriLineGroupsRequestBuilder(): CoverageRegionUriLineGroupsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageRegionUriLineGroupsIdRequestBuilder(): CoverageRegionUriLineGroupsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withExternalCode(externalCode: string)
         */
        lineGroupsRequestBuilder(): LineGroupsRequestBuilder;
    }

    export class LineReportsApi {
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionLineReportsRequestBuilder(): CoverageRegionLineReportsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriLineReportsRequestBuilder(): CoverageRegionUriLineReportsRequestBuilder;
    }

    export class LinesApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatLinesRequestBuilder(): CoverageLonLatLinesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withId(id: string)
         */
        coverageLonLatLinesIdRequestBuilder(): CoverageLonLatLinesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriLinesRequestBuilder(): CoverageLonLatUriLinesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageLonLatUriLinesIdRequestBuilder(): CoverageLonLatUriLinesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionLinesRequestBuilder(): CoverageRegionLinesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionLinesIdRequestBuilder(): CoverageRegionLinesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriLinesRequestBuilder(): CoverageRegionUriLinesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageRegionUriLinesIdRequestBuilder(): CoverageRegionUriLinesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withExternalCode(externalCode: string)
         */
        linesRequestBuilder(): LinesRequestBuilder;
    }

    export class NetworksApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatNetworksRequestBuilder(): CoverageLonLatNetworksRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withId(id: string)
         */
        coverageLonLatNetworksIdRequestBuilder(): CoverageLonLatNetworksIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriNetworksRequestBuilder(): CoverageLonLatUriNetworksRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageLonLatUriNetworksIdRequestBuilder(): CoverageLonLatUriNetworksIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionNetworksRequestBuilder(): CoverageRegionNetworksRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionNetworksIdRequestBuilder(): CoverageRegionNetworksIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriNetworksRequestBuilder(): CoverageRegionUriNetworksRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageRegionUriNetworksIdRequestBuilder(): CoverageRegionUriNetworksIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withExternalCode(externalCode: string)
         */
        networksRequestBuilder(): NetworksRequestBuilder;
    }

    export class NextArrivalsApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatArrivalsRequestBuilder(): CoverageLonLatArrivalsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriArrivalsRequestBuilder(): CoverageLonLatUriArrivalsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionArrivalsRequestBuilder(): CoverageRegionArrivalsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriArrivalsRequestBuilder(): CoverageRegionUriArrivalsRequestBuilder;
    }

    export class NextDeparturesApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatDeparturesRequestBuilder(): CoverageLonLatDeparturesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriDeparturesRequestBuilder(): CoverageLonLatUriDeparturesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionDeparturesRequestBuilder(): CoverageRegionDeparturesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriDeparturesRequestBuilder(): CoverageRegionUriDeparturesRequestBuilder;
    }

    export class PhysicalModesApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatPhysicalModesRequestBuilder(): CoverageLonLatPhysicalModesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withId(id: string)
         */
        coverageLonLatPhysicalModesIdRequestBuilder(): CoverageLonLatPhysicalModesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriPhysicalModesRequestBuilder(): CoverageLonLatUriPhysicalModesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageLonLatUriPhysicalModesIdRequestBuilder(): CoverageLonLatUriPhysicalModesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionPhysicalModesRequestBuilder(): CoverageRegionPhysicalModesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionPhysicalModesIdRequestBuilder(): CoverageRegionPhysicalModesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriPhysicalModesRequestBuilder(): CoverageRegionUriPhysicalModesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageRegionUriPhysicalModesIdRequestBuilder(): CoverageRegionUriPhysicalModesIdRequestBuilder;
    }

    export class PlacesApi {
        /**
         * Mandatory parameters:
         * - withQ(q: string)
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatPlacesRequestBuilder(): CoverageLonLatPlacesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withQ(q: string)
         * - withRegion(region: string)
         */
        coverageRegionPlacesRequestBuilder(): CoverageRegionPlacesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withQ(q: string)
         */
        placesRequestBuilder(): PlacesRequestBuilder;
    }

    export class PlacesNearbyApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coordLonLatPlacesNearbyRequestBuilder(): CoordLonLatPlacesNearbyRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coordsLonLatPlacesNearbyRequestBuilder(): CoordsLonLatPlacesNearbyRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatPlacesNearbyRequestBuilder(): CoverageLonLatPlacesNearbyRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriPlacesNearbyRequestBuilder(): CoverageLonLatUriPlacesNearbyRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionPlacesNearbyRequestBuilder(): CoverageRegionPlacesNearbyRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriPlacesNearbyRequestBuilder(): CoverageRegionUriPlacesNearbyRequestBuilder;
    }

    export class PoiTypesApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatPoiTypesRequestBuilder(): CoverageLonLatPoiTypesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withId(id: string)
         */
        coverageLonLatPoiTypesIdRequestBuilder(): CoverageLonLatPoiTypesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriPoiTypesRequestBuilder(): CoverageLonLatUriPoiTypesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageLonLatUriPoiTypesIdRequestBuilder(): CoverageLonLatUriPoiTypesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionPoiTypesRequestBuilder(): CoverageRegionPoiTypesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionPoiTypesIdRequestBuilder(): CoverageRegionPoiTypesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriPoiTypesRequestBuilder(): CoverageRegionUriPoiTypesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageRegionUriPoiTypesIdRequestBuilder(): CoverageRegionUriPoiTypesIdRequestBuilder;
    }

    export class PoisApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatPoisRequestBuilder(): CoverageLonLatPoisRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withId(id: string)
         */
        coverageLonLatPoisIdRequestBuilder(): CoverageLonLatPoisIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriPoisRequestBuilder(): CoverageLonLatUriPoisRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageLonLatUriPoisIdRequestBuilder(): CoverageLonLatUriPoisIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionPoisRequestBuilder(): CoverageRegionPoisRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionPoisIdRequestBuilder(): CoverageRegionPoisIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriPoisRequestBuilder(): CoverageRegionUriPoisRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageRegionUriPoisIdRequestBuilder(): CoverageRegionUriPoisIdRequestBuilder;
    }

    export class PtobjectsApi {
        /**
         * Mandatory parameters:
         * - withQ(q: string)
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatPtObjectsRequestBuilder(): CoverageLonLatPtObjectsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withQ(q: string)
         * - withRegion(region: string)
         */
        coverageRegionPtObjectsRequestBuilder(): CoverageRegionPtObjectsRequestBuilder;
    }

    export class RouteSchedulesApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriRouteSchedulesRequestBuilder(): CoverageLonLatUriRouteSchedulesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriRouteSchedulesRequestBuilder(): CoverageRegionUriRouteSchedulesRequestBuilder;
        /**
         * Mandatory parameters:
         */
        routeSchedulesRequestBuilder(): RouteSchedulesRequestBuilder;
    }

    export class RoutesApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatRoutesRequestBuilder(): CoverageLonLatRoutesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withId(id: string)
         */
        coverageLonLatRoutesIdRequestBuilder(): CoverageLonLatRoutesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriRoutesRequestBuilder(): CoverageLonLatUriRoutesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageLonLatUriRoutesIdRequestBuilder(): CoverageLonLatUriRoutesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionRoutesRequestBuilder(): CoverageRegionRoutesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionRoutesIdRequestBuilder(): CoverageRegionRoutesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriRoutesRequestBuilder(): CoverageRegionUriRoutesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageRegionUriRoutesIdRequestBuilder(): CoverageRegionUriRoutesIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withExternalCode(externalCode: string)
         */
        routesRequestBuilder(): RoutesRequestBuilder;
    }

    export class StatusApi {
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionStatusRequestBuilder(): CoverageRegionStatusRequestBuilder;
    }

    export class StopAreasApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatStopAreasRequestBuilder(): CoverageLonLatStopAreasRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withId(id: string)
         */
        coverageLonLatStopAreasIdRequestBuilder(): CoverageLonLatStopAreasIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriStopAreasRequestBuilder(): CoverageLonLatUriStopAreasRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageLonLatUriStopAreasIdRequestBuilder(): CoverageLonLatUriStopAreasIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionStopAreasRequestBuilder(): CoverageRegionStopAreasRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionStopAreasIdRequestBuilder(): CoverageRegionStopAreasIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriStopAreasRequestBuilder(): CoverageRegionUriStopAreasRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageRegionUriStopAreasIdRequestBuilder(): CoverageRegionUriStopAreasIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withExternalCode(externalCode: string)
         */
        stopAreasRequestBuilder(): StopAreasRequestBuilder;
    }

    export class StopPointsApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatStopPointsRequestBuilder(): CoverageLonLatStopPointsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withId(id: string)
         */
        coverageLonLatStopPointsIdRequestBuilder(): CoverageLonLatStopPointsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriStopPointsRequestBuilder(): CoverageLonLatUriStopPointsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageLonLatUriStopPointsIdRequestBuilder(): CoverageLonLatUriStopPointsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionStopPointsRequestBuilder(): CoverageRegionStopPointsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionStopPointsIdRequestBuilder(): CoverageRegionStopPointsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriStopPointsRequestBuilder(): CoverageRegionUriStopPointsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageRegionUriStopPointsIdRequestBuilder(): CoverageRegionUriStopPointsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withExternalCode(externalCode: string)
         */
        stopPointsRequestBuilder(): StopPointsRequestBuilder;
    }

    export class StopSchedulesApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriStopSchedulesRequestBuilder(): CoverageLonLatUriStopSchedulesRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriStopSchedulesRequestBuilder(): CoverageRegionUriStopSchedulesRequestBuilder;
        /**
         * Mandatory parameters:
         */
        stopSchedulesRequestBuilder(): StopSchedulesRequestBuilder;
    }

    export class TrafficReportApi {
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionTrafficReportsRequestBuilder(): CoverageRegionTrafficReportsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriTrafficReportsRequestBuilder(): CoverageRegionUriTrafficReportsRequestBuilder;
    }

    export class TripsApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatTripsRequestBuilder(): CoverageLonLatTripsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withId(id: string)
         */
        coverageLonLatTripsIdRequestBuilder(): CoverageLonLatTripsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriTripsRequestBuilder(): CoverageLonLatUriTripsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageLonLatUriTripsIdRequestBuilder(): CoverageLonLatUriTripsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionTripsRequestBuilder(): CoverageRegionTripsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionTripsIdRequestBuilder(): CoverageRegionTripsIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriTripsRequestBuilder(): CoverageRegionUriTripsRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageRegionUriTripsIdRequestBuilder(): CoverageRegionUriTripsIdRequestBuilder;
    }

    export class VehicleJourneysApi {
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         */
        coverageLonLatUriVehicleJourneysRequestBuilder(): CoverageLonLatUriVehicleJourneysRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageLonLatUriVehicleJourneysIdRequestBuilder(): CoverageLonLatUriVehicleJourneysIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         */
        coverageLonLatVehicleJourneysRequestBuilder(): CoverageLonLatVehicleJourneysRequestBuilder;
        /**
         * Mandatory parameters:
         * - withLat(lat: number)
         * - withLon(lon: number)
         * - withId(id: string)
         */
        coverageLonLatVehicleJourneysIdRequestBuilder(): CoverageLonLatVehicleJourneysIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         */
        coverageRegionUriVehicleJourneysRequestBuilder(): CoverageRegionUriVehicleJourneysRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withUri(uri: string)
         * - withId(id: string)
         */
        coverageRegionUriVehicleJourneysIdRequestBuilder(): CoverageRegionUriVehicleJourneysIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         */
        coverageRegionVehicleJourneysRequestBuilder(): CoverageRegionVehicleJourneysRequestBuilder;
        /**
         * Mandatory parameters:
         * - withRegion(region: string)
         * - withId(id: string)
         */
        coverageRegionVehicleJourneysIdRequestBuilder(): CoverageRegionVehicleJourneysIdRequestBuilder;
        /**
         * Mandatory parameters:
         * - withExternalCode(externalCode: string)
         */
        vehicleJourneysRequestBuilder(): VehicleJourneysRequestBuilder;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionCalendarsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionCalendarsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionCalendarsRequestBuilder;

        /**
         * Number of calendars per page
         */
        withCount(count: number): CoverageRegionCalendarsRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageRegionCalendarsRequestBuilder;

        /**
         * Start date
         */
        withStartDate(startDate: string): CoverageRegionCalendarsRequestBuilder;

        /**
         * End date
         */
        withEndDate(endDate: string): CoverageRegionCalendarsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionCalendarsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionCalendarsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionCalendarsRequestBuilder;

        get(success: (response: Calendars) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionCalendarsIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionCalendarsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionCalendarsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionCalendarsIdRequestBuilder;

        /**
         * Number of calendars per page
         */
        withCount(count: number): CoverageRegionCalendarsIdRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageRegionCalendarsIdRequestBuilder;

        /**
         * Start date
         */
        withStartDate(startDate: string): CoverageRegionCalendarsIdRequestBuilder;

        /**
         * End date
         */
        withEndDate(endDate: string): CoverageRegionCalendarsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionCalendarsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionCalendarsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionCalendarsIdRequestBuilder;

        get(success: (response: Calendars) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriCalendarsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriCalendarsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriCalendarsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriCalendarsRequestBuilder;

        /**
         * Number of calendars per page
         */
        withCount(count: number): CoverageRegionUriCalendarsRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageRegionUriCalendarsRequestBuilder;

        /**
         * Start date
         */
        withStartDate(startDate: string): CoverageRegionUriCalendarsRequestBuilder;

        /**
         * End date
         */
        withEndDate(endDate: string): CoverageRegionUriCalendarsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriCalendarsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriCalendarsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriCalendarsRequestBuilder;

        get(success: (response: Calendars) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatCommercialModesRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatCommercialModesRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatCommercialModesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatCommercialModesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatCommercialModesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatCommercialModesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatCommercialModesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatCommercialModesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatCommercialModesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatCommercialModesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatCommercialModesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatCommercialModesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatCommercialModesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatCommercialModesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatCommercialModesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatCommercialModesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatCommercialModesRequestBuilder;

        get(success: (response: CommercialModes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withId(id: string)
     */
    export class CoverageLonLatCommercialModesIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatCommercialModesIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatCommercialModesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatCommercialModesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatCommercialModesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatCommercialModesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatCommercialModesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatCommercialModesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatCommercialModesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatCommercialModesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatCommercialModesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatCommercialModesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatCommercialModesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatCommercialModesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatCommercialModesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatCommercialModesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatCommercialModesIdRequestBuilder;

        get(success: (response: CommercialModes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriCommercialModesRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriCommercialModesRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriCommercialModesRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriCommercialModesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriCommercialModesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriCommercialModesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriCommercialModesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriCommercialModesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriCommercialModesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriCommercialModesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriCommercialModesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriCommercialModesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriCommercialModesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriCommercialModesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriCommercialModesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriCommercialModesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriCommercialModesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatUriCommercialModesRequestBuilder;

        get(success: (response: CommercialModes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageLonLatUriCommercialModesIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriCommercialModesIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriCommercialModesIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriCommercialModesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatUriCommercialModesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriCommercialModesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriCommercialModesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriCommercialModesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriCommercialModesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriCommercialModesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriCommercialModesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriCommercialModesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriCommercialModesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriCommercialModesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriCommercialModesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriCommercialModesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriCommercialModesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriCommercialModesIdRequestBuilder;

        get(success: (response: CommercialModes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionCommercialModesRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionCommercialModesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionCommercialModesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionCommercialModesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionCommercialModesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionCommercialModesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionCommercialModesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionCommercialModesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionCommercialModesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionCommercialModesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionCommercialModesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionCommercialModesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionCommercialModesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionCommercialModesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionCommercialModesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionCommercialModesRequestBuilder;

        get(success: (response: CommercialModes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionCommercialModesIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionCommercialModesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionCommercialModesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionCommercialModesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionCommercialModesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionCommercialModesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionCommercialModesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionCommercialModesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionCommercialModesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionCommercialModesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionCommercialModesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionCommercialModesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionCommercialModesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionCommercialModesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionCommercialModesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionCommercialModesIdRequestBuilder;

        get(success: (response: CommercialModes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriCommercialModesRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriCommercialModesRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriCommercialModesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriCommercialModesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriCommercialModesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriCommercialModesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriCommercialModesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriCommercialModesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriCommercialModesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriCommercialModesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriCommercialModesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriCommercialModesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriCommercialModesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriCommercialModesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriCommercialModesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriCommercialModesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionUriCommercialModesRequestBuilder;

        get(success: (response: CommercialModes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageRegionUriCommercialModesIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriCommercialModesIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriCommercialModesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionUriCommercialModesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriCommercialModesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriCommercialModesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriCommercialModesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriCommercialModesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriCommercialModesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriCommercialModesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriCommercialModesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriCommercialModesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriCommercialModesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriCommercialModesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriCommercialModesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriCommercialModesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriCommercialModesIdRequestBuilder;

        get(success: (response: CommercialModes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatCompaniesRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatCompaniesRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatCompaniesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatCompaniesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatCompaniesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatCompaniesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatCompaniesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatCompaniesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatCompaniesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatCompaniesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatCompaniesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatCompaniesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatCompaniesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatCompaniesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatCompaniesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatCompaniesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatCompaniesRequestBuilder;

        get(success: (response: Companies) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withId(id: string)
     */
    export class CoverageLonLatCompaniesIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatCompaniesIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatCompaniesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatCompaniesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatCompaniesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatCompaniesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatCompaniesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatCompaniesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatCompaniesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatCompaniesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatCompaniesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatCompaniesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatCompaniesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatCompaniesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatCompaniesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatCompaniesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatCompaniesIdRequestBuilder;

        get(success: (response: Companies) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriCompaniesRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriCompaniesRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriCompaniesRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriCompaniesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriCompaniesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriCompaniesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriCompaniesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriCompaniesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriCompaniesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriCompaniesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriCompaniesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriCompaniesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriCompaniesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriCompaniesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriCompaniesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriCompaniesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriCompaniesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatUriCompaniesRequestBuilder;

        get(success: (response: Companies) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageLonLatUriCompaniesIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriCompaniesIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriCompaniesIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriCompaniesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatUriCompaniesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriCompaniesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriCompaniesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriCompaniesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriCompaniesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriCompaniesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriCompaniesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriCompaniesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriCompaniesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriCompaniesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriCompaniesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriCompaniesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriCompaniesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriCompaniesIdRequestBuilder;

        get(success: (response: Companies) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionCompaniesRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionCompaniesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionCompaniesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionCompaniesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionCompaniesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionCompaniesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionCompaniesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionCompaniesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionCompaniesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionCompaniesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionCompaniesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionCompaniesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionCompaniesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionCompaniesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionCompaniesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionCompaniesRequestBuilder;

        get(success: (response: Companies) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionCompaniesIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionCompaniesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionCompaniesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionCompaniesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionCompaniesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionCompaniesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionCompaniesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionCompaniesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionCompaniesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionCompaniesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionCompaniesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionCompaniesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionCompaniesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionCompaniesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionCompaniesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionCompaniesIdRequestBuilder;

        get(success: (response: Companies) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriCompaniesRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriCompaniesRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriCompaniesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriCompaniesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriCompaniesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriCompaniesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriCompaniesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriCompaniesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriCompaniesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriCompaniesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriCompaniesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriCompaniesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriCompaniesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriCompaniesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriCompaniesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriCompaniesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionUriCompaniesRequestBuilder;

        get(success: (response: Companies) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageRegionUriCompaniesIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriCompaniesIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriCompaniesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionUriCompaniesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriCompaniesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriCompaniesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriCompaniesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriCompaniesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriCompaniesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriCompaniesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriCompaniesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriCompaniesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriCompaniesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriCompaniesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriCompaniesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriCompaniesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriCompaniesIdRequestBuilder;

        get(success: (response: Companies) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatContributorsRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatContributorsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatContributorsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatContributorsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatContributorsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatContributorsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatContributorsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatContributorsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatContributorsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatContributorsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatContributorsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatContributorsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatContributorsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatContributorsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatContributorsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatContributorsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatContributorsRequestBuilder;

        get(success: (response: Contributors) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withId(id: string)
     */
    export class CoverageLonLatContributorsIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatContributorsIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatContributorsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatContributorsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatContributorsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatContributorsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatContributorsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatContributorsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatContributorsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatContributorsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatContributorsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatContributorsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatContributorsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatContributorsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatContributorsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatContributorsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatContributorsIdRequestBuilder;

        get(success: (response: Contributors) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriContributorsRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriContributorsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriContributorsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriContributorsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriContributorsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriContributorsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriContributorsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriContributorsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriContributorsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriContributorsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriContributorsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriContributorsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriContributorsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriContributorsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriContributorsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriContributorsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriContributorsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatUriContributorsRequestBuilder;

        get(success: (response: Contributors) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageLonLatUriContributorsIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriContributorsIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriContributorsIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriContributorsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatUriContributorsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriContributorsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriContributorsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriContributorsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriContributorsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriContributorsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriContributorsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriContributorsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriContributorsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriContributorsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriContributorsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriContributorsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriContributorsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriContributorsIdRequestBuilder;

        get(success: (response: Contributors) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionContributorsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionContributorsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionContributorsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionContributorsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionContributorsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionContributorsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionContributorsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionContributorsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionContributorsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionContributorsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionContributorsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionContributorsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionContributorsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionContributorsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionContributorsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionContributorsRequestBuilder;

        get(success: (response: Contributors) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionContributorsIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionContributorsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionContributorsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionContributorsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionContributorsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionContributorsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionContributorsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionContributorsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionContributorsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionContributorsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionContributorsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionContributorsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionContributorsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionContributorsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionContributorsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionContributorsIdRequestBuilder;

        get(success: (response: Contributors) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriContributorsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriContributorsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriContributorsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriContributorsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriContributorsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriContributorsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriContributorsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriContributorsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriContributorsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriContributorsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriContributorsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriContributorsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriContributorsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriContributorsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriContributorsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriContributorsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionUriContributorsRequestBuilder;

        get(success: (response: Contributors) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageRegionUriContributorsIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriContributorsIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriContributorsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionUriContributorsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriContributorsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriContributorsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriContributorsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriContributorsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriContributorsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriContributorsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriContributorsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriContributorsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriContributorsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriContributorsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriContributorsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriContributorsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriContributorsIdRequestBuilder;

        get(success: (response: Contributors) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     */
    export class CoverageRequestBuilder {
        /**
         * hide the coverage geojson to reduce response size
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRequestBuilder;

        get(success: (response: Coverages) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatRequestBuilder;

        /**
         * hide the coverage geojson to reduce response size
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatRequestBuilder;

        get(success: (response: Coverages) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionRequestBuilder;

        /**
         * hide the coverage geojson to reduce response size
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionRequestBuilder;

        get(success: (response: Coverages) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatDatasetsRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatDatasetsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatDatasetsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatDatasetsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatDatasetsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatDatasetsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatDatasetsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatDatasetsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatDatasetsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatDatasetsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatDatasetsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatDatasetsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatDatasetsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatDatasetsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatDatasetsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatDatasetsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatDatasetsRequestBuilder;

        get(success: (response: Datasets) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withId(id: string)
     */
    export class CoverageLonLatDatasetsIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatDatasetsIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatDatasetsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatDatasetsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatDatasetsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatDatasetsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatDatasetsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatDatasetsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatDatasetsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatDatasetsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatDatasetsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatDatasetsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatDatasetsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatDatasetsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatDatasetsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatDatasetsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatDatasetsIdRequestBuilder;

        get(success: (response: Datasets) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriDatasetsRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriDatasetsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriDatasetsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriDatasetsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriDatasetsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriDatasetsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriDatasetsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriDatasetsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriDatasetsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriDatasetsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriDatasetsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriDatasetsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriDatasetsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriDatasetsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriDatasetsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriDatasetsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriDatasetsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatUriDatasetsRequestBuilder;

        get(success: (response: Datasets) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageLonLatUriDatasetsIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriDatasetsIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriDatasetsIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriDatasetsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatUriDatasetsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriDatasetsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriDatasetsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriDatasetsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriDatasetsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriDatasetsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriDatasetsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriDatasetsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriDatasetsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriDatasetsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriDatasetsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriDatasetsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriDatasetsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriDatasetsIdRequestBuilder;

        get(success: (response: Datasets) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionDatasetsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionDatasetsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionDatasetsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionDatasetsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionDatasetsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionDatasetsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionDatasetsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionDatasetsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionDatasetsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionDatasetsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionDatasetsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionDatasetsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionDatasetsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionDatasetsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionDatasetsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionDatasetsRequestBuilder;

        get(success: (response: Datasets) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionDatasetsIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionDatasetsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionDatasetsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionDatasetsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionDatasetsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionDatasetsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionDatasetsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionDatasetsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionDatasetsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionDatasetsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionDatasetsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionDatasetsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionDatasetsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionDatasetsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionDatasetsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionDatasetsIdRequestBuilder;

        get(success: (response: Datasets) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriDatasetsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriDatasetsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriDatasetsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriDatasetsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriDatasetsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriDatasetsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriDatasetsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriDatasetsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriDatasetsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriDatasetsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriDatasetsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriDatasetsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriDatasetsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriDatasetsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriDatasetsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriDatasetsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionUriDatasetsRequestBuilder;

        get(success: (response: Datasets) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageRegionUriDatasetsIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriDatasetsIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriDatasetsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionUriDatasetsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriDatasetsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriDatasetsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriDatasetsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriDatasetsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriDatasetsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriDatasetsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriDatasetsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriDatasetsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriDatasetsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriDatasetsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriDatasetsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriDatasetsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriDatasetsIdRequestBuilder;

        get(success: (response: Datasets) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatDisruptionsRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatDisruptionsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatDisruptionsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatDisruptionsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatDisruptionsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatDisruptionsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatDisruptionsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatDisruptionsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatDisruptionsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatDisruptionsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatDisruptionsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatDisruptionsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatDisruptionsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatDisruptionsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatDisruptionsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatDisruptionsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatDisruptionsRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatDisruptionsRequestBuilder;

        get(success: (response: Disruptions) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withId(id: string)
     */
    export class CoverageLonLatDisruptionsIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatDisruptionsIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatDisruptionsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatDisruptionsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatDisruptionsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatDisruptionsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatDisruptionsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatDisruptionsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatDisruptionsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatDisruptionsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatDisruptionsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatDisruptionsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatDisruptionsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatDisruptionsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatDisruptionsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatDisruptionsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatDisruptionsIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatDisruptionsIdRequestBuilder;

        get(success: (response: Disruptions) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriDisruptionsRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriDisruptionsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriDisruptionsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriDisruptionsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriDisruptionsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriDisruptionsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriDisruptionsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriDisruptionsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriDisruptionsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriDisruptionsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriDisruptionsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriDisruptionsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriDisruptionsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriDisruptionsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriDisruptionsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriDisruptionsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriDisruptionsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatUriDisruptionsRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatUriDisruptionsRequestBuilder;

        get(success: (response: Disruptions) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageLonLatUriDisruptionsIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriDisruptionsIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriDisruptionsIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriDisruptionsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatUriDisruptionsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriDisruptionsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriDisruptionsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriDisruptionsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriDisruptionsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriDisruptionsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriDisruptionsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriDisruptionsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriDisruptionsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriDisruptionsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriDisruptionsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriDisruptionsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriDisruptionsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriDisruptionsIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatUriDisruptionsIdRequestBuilder;

        get(success: (response: Disruptions) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionDisruptionsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionDisruptionsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionDisruptionsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionDisruptionsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionDisruptionsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionDisruptionsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionDisruptionsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionDisruptionsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionDisruptionsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionDisruptionsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionDisruptionsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionDisruptionsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionDisruptionsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionDisruptionsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionDisruptionsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionDisruptionsRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionDisruptionsRequestBuilder;

        get(success: (response: Disruptions) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionDisruptionsIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionDisruptionsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionDisruptionsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionDisruptionsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionDisruptionsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionDisruptionsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionDisruptionsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionDisruptionsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionDisruptionsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionDisruptionsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionDisruptionsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionDisruptionsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionDisruptionsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionDisruptionsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionDisruptionsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionDisruptionsIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionDisruptionsIdRequestBuilder;

        get(success: (response: Disruptions) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriDisruptionsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriDisruptionsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriDisruptionsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriDisruptionsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriDisruptionsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriDisruptionsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriDisruptionsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriDisruptionsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriDisruptionsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriDisruptionsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriDisruptionsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriDisruptionsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriDisruptionsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriDisruptionsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriDisruptionsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriDisruptionsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionUriDisruptionsRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionUriDisruptionsRequestBuilder;

        get(success: (response: Disruptions) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageRegionUriDisruptionsIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriDisruptionsIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriDisruptionsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionUriDisruptionsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriDisruptionsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriDisruptionsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriDisruptionsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriDisruptionsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriDisruptionsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriDisruptionsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriDisruptionsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriDisruptionsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriDisruptionsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriDisruptionsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriDisruptionsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriDisruptionsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriDisruptionsIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionUriDisruptionsIdRequestBuilder;

        get(success: (response: Disruptions) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionGeoStatusRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionGeoStatusRequestBuilder;

        get(success: (response: GeoStatus_1) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionIsochronesRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionIsochronesRequestBuilder;

        /**
         * The id of the departure of your journey. If not provided an isochrone is computed.
         */
        withFrom(from: string): CoverageRegionIsochronesRequestBuilder;

        /**
         * The id of the arrival of your journey. If not provided an isochrone is computed.
         */
        withTo(to: string): CoverageRegionIsochronesRequestBuilder;

        /**
         * Date and time to go/arrive (see &#x60;datetime_represents&#x60;). Note: the datetime must be in the coverage’s publication period.
         */
        withDatetime(datetime: string): CoverageRegionIsochronesRequestBuilder;

        /**
         * Determine how datetime is handled.  Possible values:  * &#39;departure&#39; - Compute journeys starting after datetime  * &#39;arrival&#39; - Compute journeys arriving before datetime
         */
        withDatetimeRepresents(datetimeRepresents: string): CoverageRegionIsochronesRequestBuilder;

        /**
         * Maximum number of transfers in each journey
         */
        withMaxNbTransfers(maxNbTransfers: number): CoverageRegionIsochronesRequestBuilder;

        /**
         * Minimum number of transfers in each journey
         */
        withMinNbTransfers(minNbTransfers: number): CoverageRegionIsochronesRequestBuilder;

        /**
         * Force the first section mode if the first section is not a public transport one. &#x60;bss&#x60; stands for bike sharing system. Note 1: It’s an array, you can give multiple modes. Note 2: Choosing &#x60;bss&#x60; implicitly allows the walking mode since you might have to walk to the bss station. Note 3: The parameter is inclusive, not exclusive, so if you want to forbid a mode, you need to add all the other modes. Eg: If you never want to use a car, you need: &#x60;first_section_mode[]&#x3D;walking&amp;first_section_mode[]&#x3D;bss&amp;first_section_mode[]&#x3D;bike&amp;last_section_mode[]&#x3D;walking&amp;last_section_mode[]&#x3D;bss&amp;last_section_mode[]&#x3D;bike&#x60;
         */
        withFirstSectionMode(firstSectionMode: Array<string>): CoverageRegionIsochronesRequestBuilder;

        /**
         * Same as first_section_mode but for the last section.
         */
        withLastSectionMode(lastSectionMode: Array<string>): CoverageRegionIsochronesRequestBuilder;

        /**
         * Maximal duration of non public transport in second
         */
        withMaxDurationToPt(maxDurationToPt: number): CoverageRegionIsochronesRequestBuilder;

        /**
         * Maximal duration of walking on public transport in second
         */
        withMaxWalkingDurationToPt(maxWalkingDurationToPt: number): CoverageRegionIsochronesRequestBuilder;

        /**
         * Maximal duration of bike on public transport in second
         */
        withMaxBikeDurationToPt(maxBikeDurationToPt: number): CoverageRegionIsochronesRequestBuilder;

        /**
         * Maximal duration of bss on public transport in second
         */
        withMaxBssDurationToPt(maxBssDurationToPt: number): CoverageRegionIsochronesRequestBuilder;

        /**
         * Maximal duration of car on public transport in second
         */
        withMaxCarDurationToPt(maxCarDurationToPt: number): CoverageRegionIsochronesRequestBuilder;

        /**
         * Walking speed for the fallback sections. Speed unit must be in meter/second
         */
        withWalkingSpeed(walkingSpeed: number): CoverageRegionIsochronesRequestBuilder;

        /**
         * Biking speed for the fallback sections. Speed unit must be in meter/second
         */
        withBikeSpeed(bikeSpeed: number): CoverageRegionIsochronesRequestBuilder;

        /**
         * Speed while using a bike from a bike sharing system for the fallback sections. Speed unit must be in meter/second
         */
        withBssSpeed(bssSpeed: number): CoverageRegionIsochronesRequestBuilder;

        /**
         * Driving speed for the fallback sections. Speed unit must be in meter/second
         */
        withCarSpeed(carSpeed: number): CoverageRegionIsochronesRequestBuilder;

        /**
         * If you want to avoid lines, modes, networks, etc. Note: the forbidden_uris[] concern only the public transport objects. You can’t for example forbid the use of the bike with them, you have to set the fallback modes for this (first_section_mode[] and last_section_mode[])
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionIsochronesRequestBuilder;

        /**
         * If you want to use only a small subset of the public transport objects in your solution. Note: The constraint intersects with forbidden_uris[]. For example, if you ask for &#x60;allowed_id[]&#x3D;line:A&amp;forbidden_uris[]&#x3D;physical_mode:Bus&#x60;, only vehicles of the line A that are not buses will be used.
         */
        withAllowedId(allowedId: Array<string>): CoverageRegionIsochronesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;data_freshness&#x60;. If true the algorithm takes the disruptions into account, and thus avoid disrupted public transport. Nota: &#x60;disruption_active&#x3D;true&#x60; &lt;&#x3D;&gt; &#x60;data_freshness&#x3D;realtime&#x60;
         */
        withDisruptionActive(disruptionActive: boolean): CoverageRegionIsochronesRequestBuilder;

        /**
         * Define the freshness of data to use to compute journeys. When using the following parameter &#x60;&amp;data_freshness&#x3D;base_schedule&#x60; you can get disrupted journeys in the response. You can then display the disruption message to the traveler and make a &#x60;realtime&#x60; request to get a new undisrupted solution.  Possible values:  * &#39;base_schedule&#39; - Use theoric schedule information  * &#39;adapted_schedule&#39; - Use of adapted schedule information (like strike adjusting, etc.). Prefer &#x60;realtime&#x60; for traveler information as it will also contain adapted information schedule.  * &#39;realtime&#39; - Use all realtime information
         */
        withDataFreshness(dataFreshness: string): CoverageRegionIsochronesRequestBuilder;

        /**
         * Maximum duration of journeys in secondes. Really useful when computing an isochrone.
         */
        withMaxDuration(maxDuration: number): CoverageRegionIsochronesRequestBuilder;

        /**
         * If true the traveler is considered to be using a wheelchair, thus only accessible public transport are used. Be warned: many data are currently too faint to provide acceptable answers with this parameter on.
         */
        withWheelchair(wheelchair: boolean): CoverageRegionIsochronesRequestBuilder;

        /**
         * Define speeds and accessibility values for different kind of people. Each profile also automatically determines appropriate first and last section modes to the covered area. Note: this means that you might get car, bike, etc. fallback routes even if you set &#x60;forbidden_uris[]&#x60;! You can overload all parameters (especially speeds, distances, first and last modes) by setting all of them specifically. We advise that you don’t rely on the traveler_type’s fallback modes (&#x60;first_section_mode[]&#x60; and &#x60;last_section_mode[]&#x60;) and set them yourself.
         */
        withTravelerType(travelerType: string): CoverageRegionIsochronesRequestBuilder;

        /**
         * Specify if direct path should be suggested
         */
        withDirectPath(directPath: string): CoverageRegionIsochronesRequestBuilder;

        /**
         *
         */
        withMinDuration(minDuration: number): CoverageRegionIsochronesRequestBuilder;

        /**
         *
         */
        withBoundaryDuration(boundaryDuration: Array<number>): CoverageRegionIsochronesRequestBuilder;

        get(success: (response: GraphicalIsrochone_1) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionHeatMapsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionHeatMapsRequestBuilder;

        /**
         * The id of the departure of your journey. If not provided an isochrone is computed.
         */
        withFrom(from: string): CoverageRegionHeatMapsRequestBuilder;

        /**
         * The id of the arrival of your journey. If not provided an isochrone is computed.
         */
        withTo(to: string): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Date and time to go/arrive (see &#x60;datetime_represents&#x60;). Note: the datetime must be in the coverage’s publication period.
         */
        withDatetime(datetime: string): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Determine how datetime is handled.  Possible values:  * &#39;departure&#39; - Compute journeys starting after datetime  * &#39;arrival&#39; - Compute journeys arriving before datetime
         */
        withDatetimeRepresents(datetimeRepresents: string): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Maximum number of transfers in each journey
         */
        withMaxNbTransfers(maxNbTransfers: number): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Minimum number of transfers in each journey
         */
        withMinNbTransfers(minNbTransfers: number): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Force the first section mode if the first section is not a public transport one. &#x60;bss&#x60; stands for bike sharing system. Note 1: It’s an array, you can give multiple modes. Note 2: Choosing &#x60;bss&#x60; implicitly allows the walking mode since you might have to walk to the bss station. Note 3: The parameter is inclusive, not exclusive, so if you want to forbid a mode, you need to add all the other modes. Eg: If you never want to use a car, you need: &#x60;first_section_mode[]&#x3D;walking&amp;first_section_mode[]&#x3D;bss&amp;first_section_mode[]&#x3D;bike&amp;last_section_mode[]&#x3D;walking&amp;last_section_mode[]&#x3D;bss&amp;last_section_mode[]&#x3D;bike&#x60;
         */
        withFirstSectionMode(firstSectionMode: Array<string>): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Same as first_section_mode but for the last section.
         */
        withLastSectionMode(lastSectionMode: Array<string>): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Maximal duration of non public transport in second
         */
        withMaxDurationToPt(maxDurationToPt: number): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Maximal duration of walking on public transport in second
         */
        withMaxWalkingDurationToPt(maxWalkingDurationToPt: number): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Maximal duration of bike on public transport in second
         */
        withMaxBikeDurationToPt(maxBikeDurationToPt: number): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Maximal duration of bss on public transport in second
         */
        withMaxBssDurationToPt(maxBssDurationToPt: number): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Maximal duration of car on public transport in second
         */
        withMaxCarDurationToPt(maxCarDurationToPt: number): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Walking speed for the fallback sections. Speed unit must be in meter/second
         */
        withWalkingSpeed(walkingSpeed: number): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Biking speed for the fallback sections. Speed unit must be in meter/second
         */
        withBikeSpeed(bikeSpeed: number): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Speed while using a bike from a bike sharing system for the fallback sections. Speed unit must be in meter/second
         */
        withBssSpeed(bssSpeed: number): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Driving speed for the fallback sections. Speed unit must be in meter/second
         */
        withCarSpeed(carSpeed: number): CoverageRegionHeatMapsRequestBuilder;

        /**
         * If you want to avoid lines, modes, networks, etc. Note: the forbidden_uris[] concern only the public transport objects. You can’t for example forbid the use of the bike with them, you have to set the fallback modes for this (first_section_mode[] and last_section_mode[])
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionHeatMapsRequestBuilder;

        /**
         * If you want to use only a small subset of the public transport objects in your solution. Note: The constraint intersects with forbidden_uris[]. For example, if you ask for &#x60;allowed_id[]&#x3D;line:A&amp;forbidden_uris[]&#x3D;physical_mode:Bus&#x60;, only vehicles of the line A that are not buses will be used.
         */
        withAllowedId(allowedId: Array<string>): CoverageRegionHeatMapsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;data_freshness&#x60;. If true the algorithm takes the disruptions into account, and thus avoid disrupted public transport. Nota: &#x60;disruption_active&#x3D;true&#x60; &lt;&#x3D;&gt; &#x60;data_freshness&#x3D;realtime&#x60;
         */
        withDisruptionActive(disruptionActive: boolean): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Define the freshness of data to use to compute journeys. When using the following parameter &#x60;&amp;data_freshness&#x3D;base_schedule&#x60; you can get disrupted journeys in the response. You can then display the disruption message to the traveler and make a &#x60;realtime&#x60; request to get a new undisrupted solution.  Possible values:  * &#39;base_schedule&#39; - Use theoric schedule information  * &#39;adapted_schedule&#39; - Use of adapted schedule information (like strike adjusting, etc.). Prefer &#x60;realtime&#x60; for traveler information as it will also contain adapted information schedule.  * &#39;realtime&#39; - Use all realtime information
         */
        withDataFreshness(dataFreshness: string): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Maximum duration of journeys in secondes. Really useful when computing an isochrone.
         */
        withMaxDuration(maxDuration: number): CoverageRegionHeatMapsRequestBuilder;

        /**
         * If true the traveler is considered to be using a wheelchair, thus only accessible public transport are used. Be warned: many data are currently too faint to provide acceptable answers with this parameter on.
         */
        withWheelchair(wheelchair: boolean): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Define speeds and accessibility values for different kind of people. Each profile also automatically determines appropriate first and last section modes to the covered area. Note: this means that you might get car, bike, etc. fallback routes even if you set &#x60;forbidden_uris[]&#x60;! You can overload all parameters (especially speeds, distances, first and last modes) by setting all of them specifically. We advise that you don’t rely on the traveler_type’s fallback modes (&#x60;first_section_mode[]&#x60; and &#x60;last_section_mode[]&#x60;) and set them yourself.
         */
        withTravelerType(travelerType: string): CoverageRegionHeatMapsRequestBuilder;

        /**
         * Specify if direct path should be suggested
         */
        withDirectPath(directPath: string): CoverageRegionHeatMapsRequestBuilder;

        /**
         *
         */
        withResolution(resolution: number): CoverageRegionHeatMapsRequestBuilder;

        get(success: (response: HeatMap_1) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatJourneyPatternPointsRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatJourneyPatternPointsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatJourneyPatternPointsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatJourneyPatternPointsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatJourneyPatternPointsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatJourneyPatternPointsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatJourneyPatternPointsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatJourneyPatternPointsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatJourneyPatternPointsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatJourneyPatternPointsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatJourneyPatternPointsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatJourneyPatternPointsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatJourneyPatternPointsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatJourneyPatternPointsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatJourneyPatternPointsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatJourneyPatternPointsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatJourneyPatternPointsRequestBuilder;

        get(success: (response: JourneyPatternPoints) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withId(id: string)
     */
    export class CoverageLonLatJourneyPatternPointsIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatJourneyPatternPointsIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatJourneyPatternPointsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatJourneyPatternPointsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatJourneyPatternPointsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatJourneyPatternPointsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatJourneyPatternPointsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatJourneyPatternPointsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatJourneyPatternPointsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatJourneyPatternPointsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatJourneyPatternPointsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatJourneyPatternPointsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatJourneyPatternPointsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatJourneyPatternPointsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatJourneyPatternPointsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatJourneyPatternPointsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatJourneyPatternPointsIdRequestBuilder;

        get(success: (response: JourneyPatternPoints) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriJourneyPatternPointsRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriJourneyPatternPointsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriJourneyPatternPointsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriJourneyPatternPointsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriJourneyPatternPointsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriJourneyPatternPointsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriJourneyPatternPointsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriJourneyPatternPointsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriJourneyPatternPointsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriJourneyPatternPointsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriJourneyPatternPointsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriJourneyPatternPointsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriJourneyPatternPointsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriJourneyPatternPointsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriJourneyPatternPointsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriJourneyPatternPointsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriJourneyPatternPointsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatUriJourneyPatternPointsRequestBuilder;

        get(success: (response: JourneyPatternPoints) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageLonLatUriJourneyPatternPointsIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriJourneyPatternPointsIdRequestBuilder;

        get(success: (response: JourneyPatternPoints) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionJourneyPatternPointsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionJourneyPatternPointsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionJourneyPatternPointsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionJourneyPatternPointsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionJourneyPatternPointsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionJourneyPatternPointsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionJourneyPatternPointsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionJourneyPatternPointsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionJourneyPatternPointsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionJourneyPatternPointsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionJourneyPatternPointsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionJourneyPatternPointsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionJourneyPatternPointsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionJourneyPatternPointsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionJourneyPatternPointsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionJourneyPatternPointsRequestBuilder;

        get(success: (response: JourneyPatternPoints) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionJourneyPatternPointsIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionJourneyPatternPointsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionJourneyPatternPointsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionJourneyPatternPointsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionJourneyPatternPointsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionJourneyPatternPointsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionJourneyPatternPointsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionJourneyPatternPointsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionJourneyPatternPointsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionJourneyPatternPointsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionJourneyPatternPointsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionJourneyPatternPointsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionJourneyPatternPointsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionJourneyPatternPointsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionJourneyPatternPointsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionJourneyPatternPointsIdRequestBuilder;

        get(success: (response: JourneyPatternPoints) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriJourneyPatternPointsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriJourneyPatternPointsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriJourneyPatternPointsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriJourneyPatternPointsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriJourneyPatternPointsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriJourneyPatternPointsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriJourneyPatternPointsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriJourneyPatternPointsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriJourneyPatternPointsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriJourneyPatternPointsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriJourneyPatternPointsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriJourneyPatternPointsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriJourneyPatternPointsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriJourneyPatternPointsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriJourneyPatternPointsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriJourneyPatternPointsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionUriJourneyPatternPointsRequestBuilder;

        get(success: (response: JourneyPatternPoints) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageRegionUriJourneyPatternPointsIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriJourneyPatternPointsIdRequestBuilder;

        get(success: (response: JourneyPatternPoints) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatJourneyPatternsRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatJourneyPatternsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatJourneyPatternsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatJourneyPatternsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatJourneyPatternsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatJourneyPatternsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatJourneyPatternsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatJourneyPatternsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatJourneyPatternsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatJourneyPatternsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatJourneyPatternsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatJourneyPatternsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatJourneyPatternsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatJourneyPatternsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatJourneyPatternsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatJourneyPatternsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatJourneyPatternsRequestBuilder;

        get(success: (response: JourneyPatterns) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withId(id: string)
     */
    export class CoverageLonLatJourneyPatternsIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatJourneyPatternsIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatJourneyPatternsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatJourneyPatternsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatJourneyPatternsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatJourneyPatternsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatJourneyPatternsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatJourneyPatternsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatJourneyPatternsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatJourneyPatternsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatJourneyPatternsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatJourneyPatternsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatJourneyPatternsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatJourneyPatternsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatJourneyPatternsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatJourneyPatternsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatJourneyPatternsIdRequestBuilder;

        get(success: (response: JourneyPatterns) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriJourneyPatternsRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriJourneyPatternsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriJourneyPatternsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriJourneyPatternsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriJourneyPatternsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriJourneyPatternsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriJourneyPatternsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriJourneyPatternsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriJourneyPatternsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriJourneyPatternsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriJourneyPatternsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriJourneyPatternsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriJourneyPatternsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriJourneyPatternsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriJourneyPatternsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriJourneyPatternsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriJourneyPatternsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatUriJourneyPatternsRequestBuilder;

        get(success: (response: JourneyPatterns) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageLonLatUriJourneyPatternsIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriJourneyPatternsIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriJourneyPatternsIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriJourneyPatternsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatUriJourneyPatternsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriJourneyPatternsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriJourneyPatternsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriJourneyPatternsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriJourneyPatternsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriJourneyPatternsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriJourneyPatternsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriJourneyPatternsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriJourneyPatternsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriJourneyPatternsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriJourneyPatternsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriJourneyPatternsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriJourneyPatternsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriJourneyPatternsIdRequestBuilder;

        get(success: (response: JourneyPatterns) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionJourneyPatternsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionJourneyPatternsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionJourneyPatternsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionJourneyPatternsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionJourneyPatternsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionJourneyPatternsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionJourneyPatternsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionJourneyPatternsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionJourneyPatternsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionJourneyPatternsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionJourneyPatternsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionJourneyPatternsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionJourneyPatternsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionJourneyPatternsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionJourneyPatternsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionJourneyPatternsRequestBuilder;

        get(success: (response: JourneyPatterns) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionJourneyPatternsIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionJourneyPatternsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionJourneyPatternsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionJourneyPatternsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionJourneyPatternsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionJourneyPatternsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionJourneyPatternsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionJourneyPatternsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionJourneyPatternsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionJourneyPatternsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionJourneyPatternsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionJourneyPatternsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionJourneyPatternsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionJourneyPatternsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionJourneyPatternsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionJourneyPatternsIdRequestBuilder;

        get(success: (response: JourneyPatterns) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriJourneyPatternsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriJourneyPatternsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriJourneyPatternsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriJourneyPatternsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriJourneyPatternsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriJourneyPatternsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriJourneyPatternsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriJourneyPatternsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriJourneyPatternsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriJourneyPatternsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriJourneyPatternsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriJourneyPatternsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriJourneyPatternsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriJourneyPatternsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriJourneyPatternsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriJourneyPatternsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionUriJourneyPatternsRequestBuilder;

        get(success: (response: JourneyPatterns) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageRegionUriJourneyPatternsIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriJourneyPatternsIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriJourneyPatternsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionUriJourneyPatternsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriJourneyPatternsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriJourneyPatternsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriJourneyPatternsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriJourneyPatternsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriJourneyPatternsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriJourneyPatternsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriJourneyPatternsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriJourneyPatternsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriJourneyPatternsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriJourneyPatternsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriJourneyPatternsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriJourneyPatternsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriJourneyPatternsIdRequestBuilder;

        get(success: (response: JourneyPatterns) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatJourneysRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatJourneysRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatJourneysRequestBuilder;

        /**
         * The id of the departure of your journey. If not provided an isochrone is computed.
         */
        withFrom(from: string): CoverageLonLatJourneysRequestBuilder;

        /**
         * The id of the arrival of your journey. If not provided an isochrone is computed.
         */
        withTo(to: string): CoverageLonLatJourneysRequestBuilder;

        /**
         * Date and time to go/arrive (see &#x60;datetime_represents&#x60;). Note: the datetime must be in the coverage’s publication period.
         */
        withDatetime(datetime: string): CoverageLonLatJourneysRequestBuilder;

        /**
         * Determine how datetime is handled.  Possible values:  * &#39;departure&#39; - Compute journeys starting after datetime  * &#39;arrival&#39; - Compute journeys arriving before datetime
         */
        withDatetimeRepresents(datetimeRepresents: string): CoverageLonLatJourneysRequestBuilder;

        /**
         * Maximum number of transfers in each journey
         */
        withMaxNbTransfers(maxNbTransfers: number): CoverageLonLatJourneysRequestBuilder;

        /**
         * Minimum number of transfers in each journey
         */
        withMinNbTransfers(minNbTransfers: number): CoverageLonLatJourneysRequestBuilder;

        /**
         * Force the first section mode if the first section is not a public transport one. &#x60;bss&#x60; stands for bike sharing system. Note 1: It’s an array, you can give multiple modes. Note 2: Choosing &#x60;bss&#x60; implicitly allows the walking mode since you might have to walk to the bss station. Note 3: The parameter is inclusive, not exclusive, so if you want to forbid a mode, you need to add all the other modes. Eg: If you never want to use a car, you need: &#x60;first_section_mode[]&#x3D;walking&amp;first_section_mode[]&#x3D;bss&amp;first_section_mode[]&#x3D;bike&amp;last_section_mode[]&#x3D;walking&amp;last_section_mode[]&#x3D;bss&amp;last_section_mode[]&#x3D;bike&#x60;
         */
        withFirstSectionMode(firstSectionMode: Array<string>): CoverageLonLatJourneysRequestBuilder;

        /**
         * Same as first_section_mode but for the last section.
         */
        withLastSectionMode(lastSectionMode: Array<string>): CoverageLonLatJourneysRequestBuilder;

        /**
         * Maximal duration of non public transport in second
         */
        withMaxDurationToPt(maxDurationToPt: number): CoverageLonLatJourneysRequestBuilder;

        /**
         * Maximal duration of walking on public transport in second
         */
        withMaxWalkingDurationToPt(maxWalkingDurationToPt: number): CoverageLonLatJourneysRequestBuilder;

        /**
         * Maximal duration of bike on public transport in second
         */
        withMaxBikeDurationToPt(maxBikeDurationToPt: number): CoverageLonLatJourneysRequestBuilder;

        /**
         * Maximal duration of bss on public transport in second
         */
        withMaxBssDurationToPt(maxBssDurationToPt: number): CoverageLonLatJourneysRequestBuilder;

        /**
         * Maximal duration of car on public transport in second
         */
        withMaxCarDurationToPt(maxCarDurationToPt: number): CoverageLonLatJourneysRequestBuilder;

        /**
         * Walking speed for the fallback sections. Speed unit must be in meter/second
         */
        withWalkingSpeed(walkingSpeed: number): CoverageLonLatJourneysRequestBuilder;

        /**
         * Biking speed for the fallback sections. Speed unit must be in meter/second
         */
        withBikeSpeed(bikeSpeed: number): CoverageLonLatJourneysRequestBuilder;

        /**
         * Speed while using a bike from a bike sharing system for the fallback sections. Speed unit must be in meter/second
         */
        withBssSpeed(bssSpeed: number): CoverageLonLatJourneysRequestBuilder;

        /**
         * Driving speed for the fallback sections. Speed unit must be in meter/second
         */
        withCarSpeed(carSpeed: number): CoverageLonLatJourneysRequestBuilder;

        /**
         * If you want to avoid lines, modes, networks, etc. Note: the forbidden_uris[] concern only the public transport objects. You can’t for example forbid the use of the bike with them, you have to set the fallback modes for this (first_section_mode[] and last_section_mode[])
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatJourneysRequestBuilder;

        /**
         * If you want to use only a small subset of the public transport objects in your solution. Note: The constraint intersects with forbidden_uris[]. For example, if you ask for &#x60;allowed_id[]&#x3D;line:A&amp;forbidden_uris[]&#x3D;physical_mode:Bus&#x60;, only vehicles of the line A that are not buses will be used.
         */
        withAllowedId(allowedId: Array<string>): CoverageLonLatJourneysRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;data_freshness&#x60;. If true the algorithm takes the disruptions into account, and thus avoid disrupted public transport. Nota: &#x60;disruption_active&#x3D;true&#x60; &lt;&#x3D;&gt; &#x60;data_freshness&#x3D;realtime&#x60;
         */
        withDisruptionActive(disruptionActive: boolean): CoverageLonLatJourneysRequestBuilder;

        /**
         * Define the freshness of data to use to compute journeys. When using the following parameter &#x60;&amp;data_freshness&#x3D;base_schedule&#x60; you can get disrupted journeys in the response. You can then display the disruption message to the traveler and make a &#x60;realtime&#x60; request to get a new undisrupted solution.  Possible values:  * &#39;base_schedule&#39; - Use theoric schedule information  * &#39;adapted_schedule&#39; - Use of adapted schedule information (like strike adjusting, etc.). Prefer &#x60;realtime&#x60; for traveler information as it will also contain adapted information schedule.  * &#39;realtime&#39; - Use all realtime information
         */
        withDataFreshness(dataFreshness: string): CoverageLonLatJourneysRequestBuilder;

        /**
         * Maximum duration of journeys in secondes. Really useful when computing an isochrone.
         */
        withMaxDuration(maxDuration: number): CoverageLonLatJourneysRequestBuilder;

        /**
         * If true the traveler is considered to be using a wheelchair, thus only accessible public transport are used. Be warned: many data are currently too faint to provide acceptable answers with this parameter on.
         */
        withWheelchair(wheelchair: boolean): CoverageLonLatJourneysRequestBuilder;

        /**
         * Define speeds and accessibility values for different kind of people. Each profile also automatically determines appropriate first and last section modes to the covered area. Note: this means that you might get car, bike, etc. fallback routes even if you set &#x60;forbidden_uris[]&#x60;! You can overload all parameters (especially speeds, distances, first and last modes) by setting all of them specifically. We advise that you don’t rely on the traveler_type’s fallback modes (&#x60;first_section_mode[]&#x60; and &#x60;last_section_mode[]&#x60;) and set them yourself.
         */
        withTravelerType(travelerType: string): CoverageLonLatJourneysRequestBuilder;

        /**
         * Specify if direct path should be suggested
         */
        withDirectPath(directPath: string): CoverageLonLatJourneysRequestBuilder;

        /**
         * Fixed number of different journeys
         */
        withCount(count: number): CoverageLonLatJourneysRequestBuilder;

        /**
         * True when &#39;/journeys&#39; is called to computethe same journey schedules and it&#39;ll override some specific parameters
         */
        withIsJourneySchedules(isJourneySchedules: boolean): CoverageLonLatJourneysRequestBuilder;

        /**
         * Minimum number of different suggested journeys
         */
        withMinNbJourneys(minNbJourneys: number): CoverageLonLatJourneysRequestBuilder;

        /**
         * Maximum number of different suggested journeys
         */
        withMaxNbJourneys(maxNbJourneys: number): CoverageLonLatJourneysRequestBuilder;

        /**
         * Show bss stands availability in the bicycle_rental pois of response
         */
        withBssStands(bssStands: boolean): CoverageLonLatJourneysRequestBuilder;

        /**
         * Show more information about the poi if it&#39;s available, for instance, show BSS/car park availability in the pois(BSS/car park) of response
         */
        withAddPoiInfos(addPoiInfos: Array<string>): CoverageLonLatJourneysRequestBuilder;

        get(success: (response: Journeys) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionJourneysRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionJourneysRequestBuilder;

        /**
         * The id of the departure of your journey. If not provided an isochrone is computed.
         */
        withFrom(from: string): CoverageRegionJourneysRequestBuilder;

        /**
         * The id of the arrival of your journey. If not provided an isochrone is computed.
         */
        withTo(to: string): CoverageRegionJourneysRequestBuilder;

        /**
         * Date and time to go/arrive (see &#x60;datetime_represents&#x60;). Note: the datetime must be in the coverage’s publication period.
         */
        withDatetime(datetime: string): CoverageRegionJourneysRequestBuilder;

        /**
         * Determine how datetime is handled.  Possible values:  * &#39;departure&#39; - Compute journeys starting after datetime  * &#39;arrival&#39; - Compute journeys arriving before datetime
         */
        withDatetimeRepresents(datetimeRepresents: string): CoverageRegionJourneysRequestBuilder;

        /**
         * Maximum number of transfers in each journey
         */
        withMaxNbTransfers(maxNbTransfers: number): CoverageRegionJourneysRequestBuilder;

        /**
         * Minimum number of transfers in each journey
         */
        withMinNbTransfers(minNbTransfers: number): CoverageRegionJourneysRequestBuilder;

        /**
         * Force the first section mode if the first section is not a public transport one. &#x60;bss&#x60; stands for bike sharing system. Note 1: It’s an array, you can give multiple modes. Note 2: Choosing &#x60;bss&#x60; implicitly allows the walking mode since you might have to walk to the bss station. Note 3: The parameter is inclusive, not exclusive, so if you want to forbid a mode, you need to add all the other modes. Eg: If you never want to use a car, you need: &#x60;first_section_mode[]&#x3D;walking&amp;first_section_mode[]&#x3D;bss&amp;first_section_mode[]&#x3D;bike&amp;last_section_mode[]&#x3D;walking&amp;last_section_mode[]&#x3D;bss&amp;last_section_mode[]&#x3D;bike&#x60;
         */
        withFirstSectionMode(firstSectionMode: Array<string>): CoverageRegionJourneysRequestBuilder;

        /**
         * Same as first_section_mode but for the last section.
         */
        withLastSectionMode(lastSectionMode: Array<string>): CoverageRegionJourneysRequestBuilder;

        /**
         * Maximal duration of non public transport in second
         */
        withMaxDurationToPt(maxDurationToPt: number): CoverageRegionJourneysRequestBuilder;

        /**
         * Maximal duration of walking on public transport in second
         */
        withMaxWalkingDurationToPt(maxWalkingDurationToPt: number): CoverageRegionJourneysRequestBuilder;

        /**
         * Maximal duration of bike on public transport in second
         */
        withMaxBikeDurationToPt(maxBikeDurationToPt: number): CoverageRegionJourneysRequestBuilder;

        /**
         * Maximal duration of bss on public transport in second
         */
        withMaxBssDurationToPt(maxBssDurationToPt: number): CoverageRegionJourneysRequestBuilder;

        /**
         * Maximal duration of car on public transport in second
         */
        withMaxCarDurationToPt(maxCarDurationToPt: number): CoverageRegionJourneysRequestBuilder;

        /**
         * Walking speed for the fallback sections. Speed unit must be in meter/second
         */
        withWalkingSpeed(walkingSpeed: number): CoverageRegionJourneysRequestBuilder;

        /**
         * Biking speed for the fallback sections. Speed unit must be in meter/second
         */
        withBikeSpeed(bikeSpeed: number): CoverageRegionJourneysRequestBuilder;

        /**
         * Speed while using a bike from a bike sharing system for the fallback sections. Speed unit must be in meter/second
         */
        withBssSpeed(bssSpeed: number): CoverageRegionJourneysRequestBuilder;

        /**
         * Driving speed for the fallback sections. Speed unit must be in meter/second
         */
        withCarSpeed(carSpeed: number): CoverageRegionJourneysRequestBuilder;

        /**
         * If you want to avoid lines, modes, networks, etc. Note: the forbidden_uris[] concern only the public transport objects. You can’t for example forbid the use of the bike with them, you have to set the fallback modes for this (first_section_mode[] and last_section_mode[])
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionJourneysRequestBuilder;

        /**
         * If you want to use only a small subset of the public transport objects in your solution. Note: The constraint intersects with forbidden_uris[]. For example, if you ask for &#x60;allowed_id[]&#x3D;line:A&amp;forbidden_uris[]&#x3D;physical_mode:Bus&#x60;, only vehicles of the line A that are not buses will be used.
         */
        withAllowedId(allowedId: Array<string>): CoverageRegionJourneysRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;data_freshness&#x60;. If true the algorithm takes the disruptions into account, and thus avoid disrupted public transport. Nota: &#x60;disruption_active&#x3D;true&#x60; &lt;&#x3D;&gt; &#x60;data_freshness&#x3D;realtime&#x60;
         */
        withDisruptionActive(disruptionActive: boolean): CoverageRegionJourneysRequestBuilder;

        /**
         * Define the freshness of data to use to compute journeys. When using the following parameter &#x60;&amp;data_freshness&#x3D;base_schedule&#x60; you can get disrupted journeys in the response. You can then display the disruption message to the traveler and make a &#x60;realtime&#x60; request to get a new undisrupted solution.  Possible values:  * &#39;base_schedule&#39; - Use theoric schedule information  * &#39;adapted_schedule&#39; - Use of adapted schedule information (like strike adjusting, etc.). Prefer &#x60;realtime&#x60; for traveler information as it will also contain adapted information schedule.  * &#39;realtime&#39; - Use all realtime information
         */
        withDataFreshness(dataFreshness: string): CoverageRegionJourneysRequestBuilder;

        /**
         * Maximum duration of journeys in secondes. Really useful when computing an isochrone.
         */
        withMaxDuration(maxDuration: number): CoverageRegionJourneysRequestBuilder;

        /**
         * If true the traveler is considered to be using a wheelchair, thus only accessible public transport are used. Be warned: many data are currently too faint to provide acceptable answers with this parameter on.
         */
        withWheelchair(wheelchair: boolean): CoverageRegionJourneysRequestBuilder;

        /**
         * Define speeds and accessibility values for different kind of people. Each profile also automatically determines appropriate first and last section modes to the covered area. Note: this means that you might get car, bike, etc. fallback routes even if you set &#x60;forbidden_uris[]&#x60;! You can overload all parameters (especially speeds, distances, first and last modes) by setting all of them specifically. We advise that you don’t rely on the traveler_type’s fallback modes (&#x60;first_section_mode[]&#x60; and &#x60;last_section_mode[]&#x60;) and set them yourself.
         */
        withTravelerType(travelerType: string): CoverageRegionJourneysRequestBuilder;

        /**
         * Specify if direct path should be suggested
         */
        withDirectPath(directPath: string): CoverageRegionJourneysRequestBuilder;

        /**
         * Fixed number of different journeys
         */
        withCount(count: number): CoverageRegionJourneysRequestBuilder;

        /**
         * True when &#39;/journeys&#39; is called to computethe same journey schedules and it&#39;ll override some specific parameters
         */
        withIsJourneySchedules(isJourneySchedules: boolean): CoverageRegionJourneysRequestBuilder;

        /**
         * Minimum number of different suggested journeys
         */
        withMinNbJourneys(minNbJourneys: number): CoverageRegionJourneysRequestBuilder;

        /**
         * Maximum number of different suggested journeys
         */
        withMaxNbJourneys(maxNbJourneys: number): CoverageRegionJourneysRequestBuilder;

        /**
         * Show bss stands availability in the bicycle_rental pois of response
         */
        withBssStands(bssStands: boolean): CoverageRegionJourneysRequestBuilder;

        /**
         * Show more information about the poi if it&#39;s available, for instance, show BSS/car park availability in the pois(BSS/car park) of response
         */
        withAddPoiInfos(addPoiInfos: Array<string>): CoverageRegionJourneysRequestBuilder;

        get(success: (response: Journeys) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     */
    export class JourneysRequestBuilder {
        /**
         * The id of the departure of your journey. If not provided an isochrone is computed.
         */
        withFrom(from: string): JourneysRequestBuilder;

        /**
         * The id of the arrival of your journey. If not provided an isochrone is computed.
         */
        withTo(to: string): JourneysRequestBuilder;

        /**
         * Date and time to go/arrive (see &#x60;datetime_represents&#x60;). Note: the datetime must be in the coverage’s publication period.
         */
        withDatetime(datetime: string): JourneysRequestBuilder;

        /**
         * Determine how datetime is handled.  Possible values:  * &#39;departure&#39; - Compute journeys starting after datetime  * &#39;arrival&#39; - Compute journeys arriving before datetime
         */
        withDatetimeRepresents(datetimeRepresents: string): JourneysRequestBuilder;

        /**
         * Maximum number of transfers in each journey
         */
        withMaxNbTransfers(maxNbTransfers: number): JourneysRequestBuilder;

        /**
         * Minimum number of transfers in each journey
         */
        withMinNbTransfers(minNbTransfers: number): JourneysRequestBuilder;

        /**
         * Force the first section mode if the first section is not a public transport one. &#x60;bss&#x60; stands for bike sharing system. Note 1: It’s an array, you can give multiple modes. Note 2: Choosing &#x60;bss&#x60; implicitly allows the walking mode since you might have to walk to the bss station. Note 3: The parameter is inclusive, not exclusive, so if you want to forbid a mode, you need to add all the other modes. Eg: If you never want to use a car, you need: &#x60;first_section_mode[]&#x3D;walking&amp;first_section_mode[]&#x3D;bss&amp;first_section_mode[]&#x3D;bike&amp;last_section_mode[]&#x3D;walking&amp;last_section_mode[]&#x3D;bss&amp;last_section_mode[]&#x3D;bike&#x60;
         */
        withFirstSectionMode(firstSectionMode: Array<string>): JourneysRequestBuilder;

        /**
         * Same as first_section_mode but for the last section.
         */
        withLastSectionMode(lastSectionMode: Array<string>): JourneysRequestBuilder;

        /**
         * Maximal duration of non public transport in second
         */
        withMaxDurationToPt(maxDurationToPt: number): JourneysRequestBuilder;

        /**
         * Maximal duration of walking on public transport in second
         */
        withMaxWalkingDurationToPt(maxWalkingDurationToPt: number): JourneysRequestBuilder;

        /**
         * Maximal duration of bike on public transport in second
         */
        withMaxBikeDurationToPt(maxBikeDurationToPt: number): JourneysRequestBuilder;

        /**
         * Maximal duration of bss on public transport in second
         */
        withMaxBssDurationToPt(maxBssDurationToPt: number): JourneysRequestBuilder;

        /**
         * Maximal duration of car on public transport in second
         */
        withMaxCarDurationToPt(maxCarDurationToPt: number): JourneysRequestBuilder;

        /**
         * Walking speed for the fallback sections. Speed unit must be in meter/second
         */
        withWalkingSpeed(walkingSpeed: number): JourneysRequestBuilder;

        /**
         * Biking speed for the fallback sections. Speed unit must be in meter/second
         */
        withBikeSpeed(bikeSpeed: number): JourneysRequestBuilder;

        /**
         * Speed while using a bike from a bike sharing system for the fallback sections. Speed unit must be in meter/second
         */
        withBssSpeed(bssSpeed: number): JourneysRequestBuilder;

        /**
         * Driving speed for the fallback sections. Speed unit must be in meter/second
         */
        withCarSpeed(carSpeed: number): JourneysRequestBuilder;

        /**
         * If you want to avoid lines, modes, networks, etc. Note: the forbidden_uris[] concern only the public transport objects. You can’t for example forbid the use of the bike with them, you have to set the fallback modes for this (first_section_mode[] and last_section_mode[])
         */
        withForbiddenUris(forbiddenUris: Array<string>): JourneysRequestBuilder;

        /**
         * If you want to use only a small subset of the public transport objects in your solution. Note: The constraint intersects with forbidden_uris[]. For example, if you ask for &#x60;allowed_id[]&#x3D;line:A&amp;forbidden_uris[]&#x3D;physical_mode:Bus&#x60;, only vehicles of the line A that are not buses will be used.
         */
        withAllowedId(allowedId: Array<string>): JourneysRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;data_freshness&#x60;. If true the algorithm takes the disruptions into account, and thus avoid disrupted public transport. Nota: &#x60;disruption_active&#x3D;true&#x60; &lt;&#x3D;&gt; &#x60;data_freshness&#x3D;realtime&#x60;
         */
        withDisruptionActive(disruptionActive: boolean): JourneysRequestBuilder;

        /**
         * Define the freshness of data to use to compute journeys. When using the following parameter &#x60;&amp;data_freshness&#x3D;base_schedule&#x60; you can get disrupted journeys in the response. You can then display the disruption message to the traveler and make a &#x60;realtime&#x60; request to get a new undisrupted solution.  Possible values:  * &#39;base_schedule&#39; - Use theoric schedule information  * &#39;adapted_schedule&#39; - Use of adapted schedule information (like strike adjusting, etc.). Prefer &#x60;realtime&#x60; for traveler information as it will also contain adapted information schedule.  * &#39;realtime&#39; - Use all realtime information
         */
        withDataFreshness(dataFreshness: string): JourneysRequestBuilder;

        /**
         * Maximum duration of journeys in secondes. Really useful when computing an isochrone.
         */
        withMaxDuration(maxDuration: number): JourneysRequestBuilder;

        /**
         * If true the traveler is considered to be using a wheelchair, thus only accessible public transport are used. Be warned: many data are currently too faint to provide acceptable answers with this parameter on.
         */
        withWheelchair(wheelchair: boolean): JourneysRequestBuilder;

        /**
         * Define speeds and accessibility values for different kind of people. Each profile also automatically determines appropriate first and last section modes to the covered area. Note: this means that you might get car, bike, etc. fallback routes even if you set &#x60;forbidden_uris[]&#x60;! You can overload all parameters (especially speeds, distances, first and last modes) by setting all of them specifically. We advise that you don’t rely on the traveler_type’s fallback modes (&#x60;first_section_mode[]&#x60; and &#x60;last_section_mode[]&#x60;) and set them yourself.
         */
        withTravelerType(travelerType: string): JourneysRequestBuilder;

        /**
         * Specify if direct path should be suggested
         */
        withDirectPath(directPath: string): JourneysRequestBuilder;

        /**
         * Fixed number of different journeys
         */
        withCount(count: number): JourneysRequestBuilder;

        /**
         * True when &#39;/journeys&#39; is called to computethe same journey schedules and it&#39;ll override some specific parameters
         */
        withIsJourneySchedules(isJourneySchedules: boolean): JourneysRequestBuilder;

        /**
         * Minimum number of different suggested journeys
         */
        withMinNbJourneys(minNbJourneys: number): JourneysRequestBuilder;

        /**
         * Maximum number of different suggested journeys
         */
        withMaxNbJourneys(maxNbJourneys: number): JourneysRequestBuilder;

        /**
         * Show bss stands availability in the bicycle_rental pois of response
         */
        withBssStands(bssStands: boolean): JourneysRequestBuilder;

        /**
         * Show more information about the poi if it&#39;s available, for instance, show BSS/car park availability in the pois(BSS/car park) of response
         */
        withAddPoiInfos(addPoiInfos: Array<string>): JourneysRequestBuilder;

        get(success: (response: Journeys) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatLineGroupsRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatLineGroupsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatLineGroupsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatLineGroupsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatLineGroupsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatLineGroupsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatLineGroupsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatLineGroupsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatLineGroupsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatLineGroupsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatLineGroupsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatLineGroupsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatLineGroupsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatLineGroupsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatLineGroupsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatLineGroupsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatLineGroupsRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatLineGroupsRequestBuilder;

        get(success: (response: LineGroups) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withId(id: string)
     */
    export class CoverageLonLatLineGroupsIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatLineGroupsIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatLineGroupsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatLineGroupsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatLineGroupsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatLineGroupsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatLineGroupsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatLineGroupsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatLineGroupsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatLineGroupsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatLineGroupsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatLineGroupsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatLineGroupsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatLineGroupsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatLineGroupsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatLineGroupsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatLineGroupsIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatLineGroupsIdRequestBuilder;

        get(success: (response: LineGroups) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriLineGroupsRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriLineGroupsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriLineGroupsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriLineGroupsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriLineGroupsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriLineGroupsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriLineGroupsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriLineGroupsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriLineGroupsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriLineGroupsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriLineGroupsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriLineGroupsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriLineGroupsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriLineGroupsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriLineGroupsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriLineGroupsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriLineGroupsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatUriLineGroupsRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatUriLineGroupsRequestBuilder;

        get(success: (response: LineGroups) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageLonLatUriLineGroupsIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriLineGroupsIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriLineGroupsIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriLineGroupsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatUriLineGroupsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriLineGroupsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriLineGroupsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriLineGroupsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriLineGroupsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriLineGroupsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriLineGroupsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriLineGroupsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriLineGroupsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriLineGroupsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriLineGroupsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriLineGroupsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriLineGroupsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriLineGroupsIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatUriLineGroupsIdRequestBuilder;

        get(success: (response: LineGroups) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionLineGroupsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionLineGroupsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionLineGroupsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionLineGroupsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionLineGroupsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionLineGroupsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionLineGroupsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionLineGroupsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionLineGroupsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionLineGroupsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionLineGroupsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionLineGroupsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionLineGroupsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionLineGroupsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionLineGroupsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionLineGroupsRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionLineGroupsRequestBuilder;

        get(success: (response: LineGroups) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionLineGroupsIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionLineGroupsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionLineGroupsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionLineGroupsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionLineGroupsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionLineGroupsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionLineGroupsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionLineGroupsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionLineGroupsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionLineGroupsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionLineGroupsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionLineGroupsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionLineGroupsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionLineGroupsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionLineGroupsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionLineGroupsIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionLineGroupsIdRequestBuilder;

        get(success: (response: LineGroups) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriLineGroupsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriLineGroupsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriLineGroupsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriLineGroupsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriLineGroupsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriLineGroupsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriLineGroupsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriLineGroupsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriLineGroupsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriLineGroupsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriLineGroupsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriLineGroupsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriLineGroupsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriLineGroupsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriLineGroupsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriLineGroupsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionUriLineGroupsRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionUriLineGroupsRequestBuilder;

        get(success: (response: LineGroups) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageRegionUriLineGroupsIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriLineGroupsIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriLineGroupsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionUriLineGroupsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriLineGroupsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriLineGroupsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriLineGroupsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriLineGroupsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriLineGroupsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriLineGroupsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriLineGroupsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriLineGroupsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriLineGroupsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriLineGroupsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriLineGroupsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriLineGroupsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriLineGroupsIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionUriLineGroupsIdRequestBuilder;

        get(success: (response: LineGroups) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withExternalCode(externalCode: string)
     */
    export class LineGroupsRequestBuilder {
        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): LineGroupsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): LineGroupsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): LineGroupsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): LineGroupsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): LineGroupsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): LineGroupsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): LineGroupsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): LineGroupsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): LineGroupsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): LineGroupsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): LineGroupsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): LineGroupsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): LineGroupsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): LineGroupsRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): LineGroupsRequestBuilder;

        get(success: (response: LineGroups) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionLineReportsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionLineReportsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionLineReportsRequestBuilder;

        /**
         * Number of objects per page
         */
        withCount(count: number): CoverageRegionLineReportsRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageRegionLineReportsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionLineReportsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionLineReportsRequestBuilder;

        get(success: (response: LineReports) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriLineReportsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriLineReportsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriLineReportsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriLineReportsRequestBuilder;

        /**
         * Number of objects per page
         */
        withCount(count: number): CoverageRegionUriLineReportsRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageRegionUriLineReportsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriLineReportsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriLineReportsRequestBuilder;

        get(success: (response: LineReports) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatLinesRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatLinesRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatLinesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatLinesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatLinesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatLinesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatLinesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatLinesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatLinesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatLinesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatLinesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatLinesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatLinesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatLinesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatLinesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatLinesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatLinesRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatLinesRequestBuilder;

        get(success: (response: Lines) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withId(id: string)
     */
    export class CoverageLonLatLinesIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatLinesIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatLinesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatLinesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatLinesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatLinesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatLinesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatLinesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatLinesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatLinesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatLinesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatLinesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatLinesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatLinesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatLinesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatLinesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatLinesIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatLinesIdRequestBuilder;

        get(success: (response: Lines) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriLinesRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriLinesRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriLinesRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriLinesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriLinesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriLinesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriLinesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriLinesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriLinesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriLinesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriLinesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriLinesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriLinesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriLinesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriLinesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriLinesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriLinesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatUriLinesRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatUriLinesRequestBuilder;

        get(success: (response: Lines) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageLonLatUriLinesIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriLinesIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriLinesIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriLinesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatUriLinesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriLinesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriLinesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriLinesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriLinesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriLinesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriLinesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriLinesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriLinesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriLinesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriLinesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriLinesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriLinesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriLinesIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatUriLinesIdRequestBuilder;

        get(success: (response: Lines) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionLinesRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionLinesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionLinesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionLinesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionLinesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionLinesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionLinesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionLinesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionLinesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionLinesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionLinesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionLinesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionLinesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionLinesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionLinesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionLinesRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionLinesRequestBuilder;

        get(success: (response: Lines) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionLinesIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionLinesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionLinesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionLinesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionLinesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionLinesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionLinesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionLinesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionLinesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionLinesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionLinesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionLinesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionLinesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionLinesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionLinesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionLinesIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionLinesIdRequestBuilder;

        get(success: (response: Lines) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriLinesRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriLinesRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriLinesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriLinesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriLinesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriLinesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriLinesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriLinesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriLinesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriLinesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriLinesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriLinesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriLinesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriLinesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriLinesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriLinesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionUriLinesRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionUriLinesRequestBuilder;

        get(success: (response: Lines) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageRegionUriLinesIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriLinesIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriLinesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionUriLinesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriLinesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriLinesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriLinesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriLinesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriLinesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriLinesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriLinesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriLinesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriLinesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriLinesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriLinesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriLinesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriLinesIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionUriLinesIdRequestBuilder;

        get(success: (response: Lines) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withExternalCode(externalCode: string)
     */
    export class LinesRequestBuilder {
        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): LinesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): LinesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): LinesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): LinesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): LinesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): LinesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): LinesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): LinesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): LinesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): LinesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): LinesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): LinesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): LinesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): LinesRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): LinesRequestBuilder;

        get(success: (response: Lines) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatNetworksRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatNetworksRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatNetworksRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatNetworksRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatNetworksRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatNetworksRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatNetworksRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatNetworksRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatNetworksRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatNetworksRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatNetworksRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatNetworksRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatNetworksRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatNetworksRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatNetworksRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatNetworksRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatNetworksRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatNetworksRequestBuilder;

        get(success: (response: Networks) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withId(id: string)
     */
    export class CoverageLonLatNetworksIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatNetworksIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatNetworksIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatNetworksIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatNetworksIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatNetworksIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatNetworksIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatNetworksIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatNetworksIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatNetworksIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatNetworksIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatNetworksIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatNetworksIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatNetworksIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatNetworksIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatNetworksIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatNetworksIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatNetworksIdRequestBuilder;

        get(success: (response: Networks) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriNetworksRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriNetworksRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriNetworksRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriNetworksRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriNetworksRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriNetworksRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriNetworksRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriNetworksRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriNetworksRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriNetworksRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriNetworksRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriNetworksRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriNetworksRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriNetworksRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriNetworksRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriNetworksRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriNetworksRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatUriNetworksRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatUriNetworksRequestBuilder;

        get(success: (response: Networks) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageLonLatUriNetworksIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriNetworksIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriNetworksIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriNetworksIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatUriNetworksIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriNetworksIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriNetworksIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriNetworksIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriNetworksIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriNetworksIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriNetworksIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriNetworksIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriNetworksIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriNetworksIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriNetworksIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriNetworksIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriNetworksIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriNetworksIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatUriNetworksIdRequestBuilder;

        get(success: (response: Networks) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionNetworksRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionNetworksRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionNetworksRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionNetworksRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionNetworksRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionNetworksRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionNetworksRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionNetworksRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionNetworksRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionNetworksRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionNetworksRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionNetworksRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionNetworksRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionNetworksRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionNetworksRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionNetworksRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionNetworksRequestBuilder;

        get(success: (response: Networks) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionNetworksIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionNetworksIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionNetworksIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionNetworksIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionNetworksIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionNetworksIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionNetworksIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionNetworksIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionNetworksIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionNetworksIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionNetworksIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionNetworksIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionNetworksIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionNetworksIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionNetworksIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionNetworksIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionNetworksIdRequestBuilder;

        get(success: (response: Networks) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriNetworksRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriNetworksRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriNetworksRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriNetworksRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriNetworksRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriNetworksRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriNetworksRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriNetworksRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriNetworksRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriNetworksRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriNetworksRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriNetworksRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriNetworksRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriNetworksRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriNetworksRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriNetworksRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionUriNetworksRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionUriNetworksRequestBuilder;

        get(success: (response: Networks) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageRegionUriNetworksIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriNetworksIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriNetworksIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionUriNetworksIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriNetworksIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriNetworksIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriNetworksIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriNetworksIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriNetworksIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriNetworksIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriNetworksIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriNetworksIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriNetworksIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriNetworksIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriNetworksIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriNetworksIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriNetworksIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionUriNetworksIdRequestBuilder;

        get(success: (response: Networks) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withExternalCode(externalCode: string)
     */
    export class NetworksRequestBuilder {
        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): NetworksRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): NetworksRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): NetworksRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): NetworksRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): NetworksRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): NetworksRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): NetworksRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): NetworksRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): NetworksRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): NetworksRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): NetworksRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): NetworksRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): NetworksRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): NetworksRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): NetworksRequestBuilder;

        get(success: (response: Networks) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatArrivalsRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatArrivalsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatArrivalsRequestBuilder;

        /**
         *
         */
        withFilter(filter: string): CoverageLonLatArrivalsRequestBuilder;

        /**
         * The datetime from which you want the schedules
         */
        withFromDatetime(fromDatetime: string): CoverageLonLatArrivalsRequestBuilder;

        /**
         * The datetime until which you want the schedules
         */
        withUntilDatetime(untilDatetime: string): CoverageLonLatArrivalsRequestBuilder;

        /**
         * Maximum duration between datetime and the retrieved stop time
         */
        withDuration(duration: number): CoverageLonLatArrivalsRequestBuilder;

        /**
         *
         */
        withDepth(depth: number): CoverageLonLatArrivalsRequestBuilder;

        /**
         * Number of schedules per page
         */
        withCount(count: number): CoverageLonLatArrivalsRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageLonLatArrivalsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;items_per_schedule&#x60;
         */
        withMaxDateTimes(maxDateTimes: number): CoverageLonLatArrivalsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatArrivalsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatArrivalsRequestBuilder;

        /**
         * Id of the calendar
         */
        withCalendar(calendar: string): CoverageLonLatArrivalsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatArrivalsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatArrivalsRequestBuilder;

        /**
         * freshness of the data. base_schedule is the long term planned schedule. adapted_schedule is for planned ahead disruptions (strikes, maintenances, ...). realtime is to have the freshest possible data
         */
        withDataFreshness(dataFreshness: string): CoverageLonLatArrivalsRequestBuilder;

        /**
         * maximum number of date_times per schedule
         */
        withItemsPerSchedule(itemsPerSchedule: number): CoverageLonLatArrivalsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatArrivalsRequestBuilder;

        get(success: (response: Arrivals) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriArrivalsRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriArrivalsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriArrivalsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriArrivalsRequestBuilder;

        /**
         *
         */
        withFilter(filter: string): CoverageLonLatUriArrivalsRequestBuilder;

        /**
         * The datetime from which you want the schedules
         */
        withFromDatetime(fromDatetime: string): CoverageLonLatUriArrivalsRequestBuilder;

        /**
         * The datetime until which you want the schedules
         */
        withUntilDatetime(untilDatetime: string): CoverageLonLatUriArrivalsRequestBuilder;

        /**
         * Maximum duration between datetime and the retrieved stop time
         */
        withDuration(duration: number): CoverageLonLatUriArrivalsRequestBuilder;

        /**
         *
         */
        withDepth(depth: number): CoverageLonLatUriArrivalsRequestBuilder;

        /**
         * Number of schedules per page
         */
        withCount(count: number): CoverageLonLatUriArrivalsRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageLonLatUriArrivalsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;items_per_schedule&#x60;
         */
        withMaxDateTimes(maxDateTimes: number): CoverageLonLatUriArrivalsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriArrivalsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriArrivalsRequestBuilder;

        /**
         * Id of the calendar
         */
        withCalendar(calendar: string): CoverageLonLatUriArrivalsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriArrivalsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriArrivalsRequestBuilder;

        /**
         * freshness of the data. base_schedule is the long term planned schedule. adapted_schedule is for planned ahead disruptions (strikes, maintenances, ...). realtime is to have the freshest possible data
         */
        withDataFreshness(dataFreshness: string): CoverageLonLatUriArrivalsRequestBuilder;

        /**
         * maximum number of date_times per schedule
         */
        withItemsPerSchedule(itemsPerSchedule: number): CoverageLonLatUriArrivalsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriArrivalsRequestBuilder;

        get(success: (response: Arrivals) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionArrivalsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionArrivalsRequestBuilder;

        /**
         *
         */
        withFilter(filter: string): CoverageRegionArrivalsRequestBuilder;

        /**
         * The datetime from which you want the schedules
         */
        withFromDatetime(fromDatetime: string): CoverageRegionArrivalsRequestBuilder;

        /**
         * The datetime until which you want the schedules
         */
        withUntilDatetime(untilDatetime: string): CoverageRegionArrivalsRequestBuilder;

        /**
         * Maximum duration between datetime and the retrieved stop time
         */
        withDuration(duration: number): CoverageRegionArrivalsRequestBuilder;

        /**
         *
         */
        withDepth(depth: number): CoverageRegionArrivalsRequestBuilder;

        /**
         * Number of schedules per page
         */
        withCount(count: number): CoverageRegionArrivalsRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageRegionArrivalsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;items_per_schedule&#x60;
         */
        withMaxDateTimes(maxDateTimes: number): CoverageRegionArrivalsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionArrivalsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionArrivalsRequestBuilder;

        /**
         * Id of the calendar
         */
        withCalendar(calendar: string): CoverageRegionArrivalsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionArrivalsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionArrivalsRequestBuilder;

        /**
         * freshness of the data. base_schedule is the long term planned schedule. adapted_schedule is for planned ahead disruptions (strikes, maintenances, ...). realtime is to have the freshest possible data
         */
        withDataFreshness(dataFreshness: string): CoverageRegionArrivalsRequestBuilder;

        /**
         * maximum number of date_times per schedule
         */
        withItemsPerSchedule(itemsPerSchedule: number): CoverageRegionArrivalsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionArrivalsRequestBuilder;

        get(success: (response: Arrivals) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriArrivalsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriArrivalsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriArrivalsRequestBuilder;

        /**
         *
         */
        withFilter(filter: string): CoverageRegionUriArrivalsRequestBuilder;

        /**
         * The datetime from which you want the schedules
         */
        withFromDatetime(fromDatetime: string): CoverageRegionUriArrivalsRequestBuilder;

        /**
         * The datetime until which you want the schedules
         */
        withUntilDatetime(untilDatetime: string): CoverageRegionUriArrivalsRequestBuilder;

        /**
         * Maximum duration between datetime and the retrieved stop time
         */
        withDuration(duration: number): CoverageRegionUriArrivalsRequestBuilder;

        /**
         *
         */
        withDepth(depth: number): CoverageRegionUriArrivalsRequestBuilder;

        /**
         * Number of schedules per page
         */
        withCount(count: number): CoverageRegionUriArrivalsRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageRegionUriArrivalsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;items_per_schedule&#x60;
         */
        withMaxDateTimes(maxDateTimes: number): CoverageRegionUriArrivalsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriArrivalsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriArrivalsRequestBuilder;

        /**
         * Id of the calendar
         */
        withCalendar(calendar: string): CoverageRegionUriArrivalsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriArrivalsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriArrivalsRequestBuilder;

        /**
         * freshness of the data. base_schedule is the long term planned schedule. adapted_schedule is for planned ahead disruptions (strikes, maintenances, ...). realtime is to have the freshest possible data
         */
        withDataFreshness(dataFreshness: string): CoverageRegionUriArrivalsRequestBuilder;

        /**
         * maximum number of date_times per schedule
         */
        withItemsPerSchedule(itemsPerSchedule: number): CoverageRegionUriArrivalsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriArrivalsRequestBuilder;

        get(success: (response: Arrivals) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatDeparturesRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatDeparturesRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatDeparturesRequestBuilder;

        /**
         *
         */
        withFilter(filter: string): CoverageLonLatDeparturesRequestBuilder;

        /**
         * The datetime from which you want the schedules
         */
        withFromDatetime(fromDatetime: string): CoverageLonLatDeparturesRequestBuilder;

        /**
         * The datetime until which you want the schedules
         */
        withUntilDatetime(untilDatetime: string): CoverageLonLatDeparturesRequestBuilder;

        /**
         * Maximum duration between datetime and the retrieved stop time
         */
        withDuration(duration: number): CoverageLonLatDeparturesRequestBuilder;

        /**
         *
         */
        withDepth(depth: number): CoverageLonLatDeparturesRequestBuilder;

        /**
         * Number of schedules per page
         */
        withCount(count: number): CoverageLonLatDeparturesRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageLonLatDeparturesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;items_per_schedule&#x60;
         */
        withMaxDateTimes(maxDateTimes: number): CoverageLonLatDeparturesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatDeparturesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatDeparturesRequestBuilder;

        /**
         * Id of the calendar
         */
        withCalendar(calendar: string): CoverageLonLatDeparturesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatDeparturesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatDeparturesRequestBuilder;

        /**
         * freshness of the data. base_schedule is the long term planned schedule. adapted_schedule is for planned ahead disruptions (strikes, maintenances, ...). realtime is to have the freshest possible data
         */
        withDataFreshness(dataFreshness: string): CoverageLonLatDeparturesRequestBuilder;

        /**
         * maximum number of date_times per schedule
         */
        withItemsPerSchedule(itemsPerSchedule: number): CoverageLonLatDeparturesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatDeparturesRequestBuilder;

        get(success: (response: Departures) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriDeparturesRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriDeparturesRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriDeparturesRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriDeparturesRequestBuilder;

        /**
         *
         */
        withFilter(filter: string): CoverageLonLatUriDeparturesRequestBuilder;

        /**
         * The datetime from which you want the schedules
         */
        withFromDatetime(fromDatetime: string): CoverageLonLatUriDeparturesRequestBuilder;

        /**
         * The datetime until which you want the schedules
         */
        withUntilDatetime(untilDatetime: string): CoverageLonLatUriDeparturesRequestBuilder;

        /**
         * Maximum duration between datetime and the retrieved stop time
         */
        withDuration(duration: number): CoverageLonLatUriDeparturesRequestBuilder;

        /**
         *
         */
        withDepth(depth: number): CoverageLonLatUriDeparturesRequestBuilder;

        /**
         * Number of schedules per page
         */
        withCount(count: number): CoverageLonLatUriDeparturesRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageLonLatUriDeparturesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;items_per_schedule&#x60;
         */
        withMaxDateTimes(maxDateTimes: number): CoverageLonLatUriDeparturesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriDeparturesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriDeparturesRequestBuilder;

        /**
         * Id of the calendar
         */
        withCalendar(calendar: string): CoverageLonLatUriDeparturesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriDeparturesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriDeparturesRequestBuilder;

        /**
         * freshness of the data. base_schedule is the long term planned schedule. adapted_schedule is for planned ahead disruptions (strikes, maintenances, ...). realtime is to have the freshest possible data
         */
        withDataFreshness(dataFreshness: string): CoverageLonLatUriDeparturesRequestBuilder;

        /**
         * maximum number of date_times per schedule
         */
        withItemsPerSchedule(itemsPerSchedule: number): CoverageLonLatUriDeparturesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriDeparturesRequestBuilder;

        get(success: (response: Departures) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionDeparturesRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionDeparturesRequestBuilder;

        /**
         *
         */
        withFilter(filter: string): CoverageRegionDeparturesRequestBuilder;

        /**
         * The datetime from which you want the schedules
         */
        withFromDatetime(fromDatetime: string): CoverageRegionDeparturesRequestBuilder;

        /**
         * The datetime until which you want the schedules
         */
        withUntilDatetime(untilDatetime: string): CoverageRegionDeparturesRequestBuilder;

        /**
         * Maximum duration between datetime and the retrieved stop time
         */
        withDuration(duration: number): CoverageRegionDeparturesRequestBuilder;

        /**
         *
         */
        withDepth(depth: number): CoverageRegionDeparturesRequestBuilder;

        /**
         * Number of schedules per page
         */
        withCount(count: number): CoverageRegionDeparturesRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageRegionDeparturesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;items_per_schedule&#x60;
         */
        withMaxDateTimes(maxDateTimes: number): CoverageRegionDeparturesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionDeparturesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionDeparturesRequestBuilder;

        /**
         * Id of the calendar
         */
        withCalendar(calendar: string): CoverageRegionDeparturesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionDeparturesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionDeparturesRequestBuilder;

        /**
         * freshness of the data. base_schedule is the long term planned schedule. adapted_schedule is for planned ahead disruptions (strikes, maintenances, ...). realtime is to have the freshest possible data
         */
        withDataFreshness(dataFreshness: string): CoverageRegionDeparturesRequestBuilder;

        /**
         * maximum number of date_times per schedule
         */
        withItemsPerSchedule(itemsPerSchedule: number): CoverageRegionDeparturesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionDeparturesRequestBuilder;

        get(success: (response: Departures) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriDeparturesRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriDeparturesRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriDeparturesRequestBuilder;

        /**
         *
         */
        withFilter(filter: string): CoverageRegionUriDeparturesRequestBuilder;

        /**
         * The datetime from which you want the schedules
         */
        withFromDatetime(fromDatetime: string): CoverageRegionUriDeparturesRequestBuilder;

        /**
         * The datetime until which you want the schedules
         */
        withUntilDatetime(untilDatetime: string): CoverageRegionUriDeparturesRequestBuilder;

        /**
         * Maximum duration between datetime and the retrieved stop time
         */
        withDuration(duration: number): CoverageRegionUriDeparturesRequestBuilder;

        /**
         *
         */
        withDepth(depth: number): CoverageRegionUriDeparturesRequestBuilder;

        /**
         * Number of schedules per page
         */
        withCount(count: number): CoverageRegionUriDeparturesRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageRegionUriDeparturesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;items_per_schedule&#x60;
         */
        withMaxDateTimes(maxDateTimes: number): CoverageRegionUriDeparturesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriDeparturesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriDeparturesRequestBuilder;

        /**
         * Id of the calendar
         */
        withCalendar(calendar: string): CoverageRegionUriDeparturesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriDeparturesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriDeparturesRequestBuilder;

        /**
         * freshness of the data. base_schedule is the long term planned schedule. adapted_schedule is for planned ahead disruptions (strikes, maintenances, ...). realtime is to have the freshest possible data
         */
        withDataFreshness(dataFreshness: string): CoverageRegionUriDeparturesRequestBuilder;

        /**
         * maximum number of date_times per schedule
         */
        withItemsPerSchedule(itemsPerSchedule: number): CoverageRegionUriDeparturesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriDeparturesRequestBuilder;

        get(success: (response: Departures) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatPhysicalModesRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatPhysicalModesRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatPhysicalModesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatPhysicalModesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatPhysicalModesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatPhysicalModesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatPhysicalModesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatPhysicalModesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatPhysicalModesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatPhysicalModesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatPhysicalModesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatPhysicalModesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatPhysicalModesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatPhysicalModesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatPhysicalModesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatPhysicalModesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatPhysicalModesRequestBuilder;

        get(success: (response: PhysicalModes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withId(id: string)
     */
    export class CoverageLonLatPhysicalModesIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatPhysicalModesIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatPhysicalModesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatPhysicalModesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatPhysicalModesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatPhysicalModesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatPhysicalModesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatPhysicalModesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatPhysicalModesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatPhysicalModesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatPhysicalModesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatPhysicalModesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatPhysicalModesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatPhysicalModesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatPhysicalModesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatPhysicalModesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatPhysicalModesIdRequestBuilder;

        get(success: (response: PhysicalModes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriPhysicalModesRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriPhysicalModesRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriPhysicalModesRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriPhysicalModesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriPhysicalModesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriPhysicalModesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriPhysicalModesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriPhysicalModesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriPhysicalModesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriPhysicalModesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriPhysicalModesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriPhysicalModesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriPhysicalModesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriPhysicalModesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriPhysicalModesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriPhysicalModesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriPhysicalModesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatUriPhysicalModesRequestBuilder;

        get(success: (response: PhysicalModes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageLonLatUriPhysicalModesIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriPhysicalModesIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriPhysicalModesIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriPhysicalModesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatUriPhysicalModesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriPhysicalModesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriPhysicalModesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriPhysicalModesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriPhysicalModesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriPhysicalModesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriPhysicalModesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriPhysicalModesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriPhysicalModesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriPhysicalModesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriPhysicalModesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriPhysicalModesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriPhysicalModesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriPhysicalModesIdRequestBuilder;

        get(success: (response: PhysicalModes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionPhysicalModesRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionPhysicalModesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionPhysicalModesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionPhysicalModesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionPhysicalModesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionPhysicalModesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionPhysicalModesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionPhysicalModesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionPhysicalModesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionPhysicalModesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionPhysicalModesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionPhysicalModesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionPhysicalModesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionPhysicalModesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionPhysicalModesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionPhysicalModesRequestBuilder;

        get(success: (response: PhysicalModes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionPhysicalModesIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionPhysicalModesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionPhysicalModesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionPhysicalModesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionPhysicalModesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionPhysicalModesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionPhysicalModesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionPhysicalModesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionPhysicalModesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionPhysicalModesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionPhysicalModesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionPhysicalModesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionPhysicalModesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionPhysicalModesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionPhysicalModesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionPhysicalModesIdRequestBuilder;

        get(success: (response: PhysicalModes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriPhysicalModesRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriPhysicalModesRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriPhysicalModesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriPhysicalModesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriPhysicalModesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriPhysicalModesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriPhysicalModesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriPhysicalModesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriPhysicalModesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriPhysicalModesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriPhysicalModesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriPhysicalModesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriPhysicalModesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriPhysicalModesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriPhysicalModesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriPhysicalModesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionUriPhysicalModesRequestBuilder;

        get(success: (response: PhysicalModes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageRegionUriPhysicalModesIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriPhysicalModesIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriPhysicalModesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionUriPhysicalModesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriPhysicalModesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriPhysicalModesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriPhysicalModesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriPhysicalModesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriPhysicalModesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriPhysicalModesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriPhysicalModesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriPhysicalModesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriPhysicalModesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriPhysicalModesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriPhysicalModesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriPhysicalModesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriPhysicalModesIdRequestBuilder;

        get(success: (response: PhysicalModes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withQ(q: string)
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatPlacesRequestBuilder {
        /**
         * The data to search
         */
        withQ(q: string): CoverageLonLatPlacesRequestBuilder;

        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatPlacesRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatPlacesRequestBuilder;

        /**
         * The type of data to search
         */
        withType(type: Array<string>): CoverageLonLatPlacesRequestBuilder;

        /**
         * The maximum number of places returned
         */
        withCount(count: number): CoverageLonLatPlacesRequestBuilder;

        /**
         * If filled, will restrain the search within the given admin uris
         */
        withAdminUri(adminUri: Array<string>): CoverageLonLatPlacesRequestBuilder;

        /**
         * The depth of objects
         */
        withDepth(depth: number): CoverageLonLatPlacesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatPlacesRequestBuilder;

        /**
         * Coordinates longitude;latitude used to prioritize the objects around this coordinate
         */
        withFrom(from: string): CoverageLonLatPlacesRequestBuilder;

        /**
         * Geographical shape to limit the search.
         */
        withShape(shape: string): CoverageLonLatPlacesRequestBuilder;

        get(success: (response: Places) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withQ(q: string)
     * - withRegion(region: string)
     */
    export class CoverageRegionPlacesRequestBuilder {
        /**
         * The data to search
         */
        withQ(q: string): CoverageRegionPlacesRequestBuilder;

        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionPlacesRequestBuilder;

        /**
         * The type of data to search
         */
        withType(type: Array<string>): CoverageRegionPlacesRequestBuilder;

        /**
         * The maximum number of places returned
         */
        withCount(count: number): CoverageRegionPlacesRequestBuilder;

        /**
         * If filled, will restrain the search within the given admin uris
         */
        withAdminUri(adminUri: Array<string>): CoverageRegionPlacesRequestBuilder;

        /**
         * The depth of objects
         */
        withDepth(depth: number): CoverageRegionPlacesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionPlacesRequestBuilder;

        /**
         * Coordinates longitude;latitude used to prioritize the objects around this coordinate
         */
        withFrom(from: string): CoverageRegionPlacesRequestBuilder;

        /**
         * Geographical shape to limit the search.
         */
        withShape(shape: string): CoverageRegionPlacesRequestBuilder;

        get(success: (response: Places) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withQ(q: string)
     */
    export class PlacesRequestBuilder {
        /**
         * The data to search
         */
        withQ(q: string): PlacesRequestBuilder;

        /**
         * The type of data to search
         */
        withType(type: Array<string>): PlacesRequestBuilder;

        /**
         * The maximum number of places returned
         */
        withCount(count: number): PlacesRequestBuilder;

        /**
         * If filled, will restrain the search within the given admin uris
         */
        withAdminUri(adminUri: Array<string>): PlacesRequestBuilder;

        /**
         * The depth of objects
         */
        withDepth(depth: number): PlacesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): PlacesRequestBuilder;

        /**
         * Coordinates longitude;latitude used to prioritize the objects around this coordinate
         */
        withFrom(from: string): PlacesRequestBuilder;

        /**
         * Geographical shape to limit the search.
         */
        withShape(shape: string): PlacesRequestBuilder;

        get(success: (response: Places) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoordLonLatPlacesNearbyRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoordLonLatPlacesNearbyRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoordLonLatPlacesNearbyRequestBuilder;

        /**
         * Type of the objects to return
         */
        withType(type: Array<string>): CoordLonLatPlacesNearbyRequestBuilder;

        /**
         * Filter your objects
         */
        withFilter(filter: string): CoordLonLatPlacesNearbyRequestBuilder;

        /**
         * Distance range of the query in meters
         */
        withDistance(distance: number): CoordLonLatPlacesNearbyRequestBuilder;

        /**
         * Elements per page
         */
        withCount(count: number): CoordLonLatPlacesNearbyRequestBuilder;

        /**
         * Maximum depth on objects
         */
        withDepth(depth: number): CoordLonLatPlacesNearbyRequestBuilder;

        /**
         * The page number of the ptref result
         */
        withStartPage(startPage: number): CoordLonLatPlacesNearbyRequestBuilder;

        /**
         * Show bss stands availability
         */
        withBssStands(bssStands: boolean): CoordLonLatPlacesNearbyRequestBuilder;

        /**
         * Show more information about the poi if it&#39;s available, for instance, show BSS/car park availability in the pois(BSS/car park) of response
         */
        withAddPoiInfos(addPoiInfos: Array<string>): CoordLonLatPlacesNearbyRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoordLonLatPlacesNearbyRequestBuilder;

        get(success: (response: PlacesNearby) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoordsLonLatPlacesNearbyRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoordsLonLatPlacesNearbyRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoordsLonLatPlacesNearbyRequestBuilder;

        /**
         * Type of the objects to return
         */
        withType(type: Array<string>): CoordsLonLatPlacesNearbyRequestBuilder;

        /**
         * Filter your objects
         */
        withFilter(filter: string): CoordsLonLatPlacesNearbyRequestBuilder;

        /**
         * Distance range of the query in meters
         */
        withDistance(distance: number): CoordsLonLatPlacesNearbyRequestBuilder;

        /**
         * Elements per page
         */
        withCount(count: number): CoordsLonLatPlacesNearbyRequestBuilder;

        /**
         * Maximum depth on objects
         */
        withDepth(depth: number): CoordsLonLatPlacesNearbyRequestBuilder;

        /**
         * The page number of the ptref result
         */
        withStartPage(startPage: number): CoordsLonLatPlacesNearbyRequestBuilder;

        /**
         * Show bss stands availability
         */
        withBssStands(bssStands: boolean): CoordsLonLatPlacesNearbyRequestBuilder;

        /**
         * Show more information about the poi if it&#39;s available, for instance, show BSS/car park availability in the pois(BSS/car park) of response
         */
        withAddPoiInfos(addPoiInfos: Array<string>): CoordsLonLatPlacesNearbyRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoordsLonLatPlacesNearbyRequestBuilder;

        get(success: (response: PlacesNearby) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatPlacesNearbyRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatPlacesNearbyRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatPlacesNearbyRequestBuilder;

        /**
         * Type of the objects to return
         */
        withType(type: Array<string>): CoverageLonLatPlacesNearbyRequestBuilder;

        /**
         * Filter your objects
         */
        withFilter(filter: string): CoverageLonLatPlacesNearbyRequestBuilder;

        /**
         * Distance range of the query in meters
         */
        withDistance(distance: number): CoverageLonLatPlacesNearbyRequestBuilder;

        /**
         * Elements per page
         */
        withCount(count: number): CoverageLonLatPlacesNearbyRequestBuilder;

        /**
         * Maximum depth on objects
         */
        withDepth(depth: number): CoverageLonLatPlacesNearbyRequestBuilder;

        /**
         * The page number of the ptref result
         */
        withStartPage(startPage: number): CoverageLonLatPlacesNearbyRequestBuilder;

        /**
         * Show bss stands availability
         */
        withBssStands(bssStands: boolean): CoverageLonLatPlacesNearbyRequestBuilder;

        /**
         * Show more information about the poi if it&#39;s available, for instance, show BSS/car park availability in the pois(BSS/car park) of response
         */
        withAddPoiInfos(addPoiInfos: Array<string>): CoverageLonLatPlacesNearbyRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatPlacesNearbyRequestBuilder;

        get(success: (response: PlacesNearby) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriPlacesNearbyRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriPlacesNearbyRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriPlacesNearbyRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriPlacesNearbyRequestBuilder;

        /**
         * Type of the objects to return
         */
        withType(type: Array<string>): CoverageLonLatUriPlacesNearbyRequestBuilder;

        /**
         * Filter your objects
         */
        withFilter(filter: string): CoverageLonLatUriPlacesNearbyRequestBuilder;

        /**
         * Distance range of the query in meters
         */
        withDistance(distance: number): CoverageLonLatUriPlacesNearbyRequestBuilder;

        /**
         * Elements per page
         */
        withCount(count: number): CoverageLonLatUriPlacesNearbyRequestBuilder;

        /**
         * Maximum depth on objects
         */
        withDepth(depth: number): CoverageLonLatUriPlacesNearbyRequestBuilder;

        /**
         * The page number of the ptref result
         */
        withStartPage(startPage: number): CoverageLonLatUriPlacesNearbyRequestBuilder;

        /**
         * Show bss stands availability
         */
        withBssStands(bssStands: boolean): CoverageLonLatUriPlacesNearbyRequestBuilder;

        /**
         * Show more information about the poi if it&#39;s available, for instance, show BSS/car park availability in the pois(BSS/car park) of response
         */
        withAddPoiInfos(addPoiInfos: Array<string>): CoverageLonLatUriPlacesNearbyRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriPlacesNearbyRequestBuilder;

        get(success: (response: PlacesNearby) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionPlacesNearbyRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionPlacesNearbyRequestBuilder;

        /**
         * Type of the objects to return
         */
        withType(type: Array<string>): CoverageRegionPlacesNearbyRequestBuilder;

        /**
         * Filter your objects
         */
        withFilter(filter: string): CoverageRegionPlacesNearbyRequestBuilder;

        /**
         * Distance range of the query in meters
         */
        withDistance(distance: number): CoverageRegionPlacesNearbyRequestBuilder;

        /**
         * Elements per page
         */
        withCount(count: number): CoverageRegionPlacesNearbyRequestBuilder;

        /**
         * Maximum depth on objects
         */
        withDepth(depth: number): CoverageRegionPlacesNearbyRequestBuilder;

        /**
         * The page number of the ptref result
         */
        withStartPage(startPage: number): CoverageRegionPlacesNearbyRequestBuilder;

        /**
         * Show bss stands availability
         */
        withBssStands(bssStands: boolean): CoverageRegionPlacesNearbyRequestBuilder;

        /**
         * Show more information about the poi if it&#39;s available, for instance, show BSS/car park availability in the pois(BSS/car park) of response
         */
        withAddPoiInfos(addPoiInfos: Array<string>): CoverageRegionPlacesNearbyRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionPlacesNearbyRequestBuilder;

        get(success: (response: PlacesNearby) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriPlacesNearbyRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriPlacesNearbyRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriPlacesNearbyRequestBuilder;

        /**
         * Type of the objects to return
         */
        withType(type: Array<string>): CoverageRegionUriPlacesNearbyRequestBuilder;

        /**
         * Filter your objects
         */
        withFilter(filter: string): CoverageRegionUriPlacesNearbyRequestBuilder;

        /**
         * Distance range of the query in meters
         */
        withDistance(distance: number): CoverageRegionUriPlacesNearbyRequestBuilder;

        /**
         * Elements per page
         */
        withCount(count: number): CoverageRegionUriPlacesNearbyRequestBuilder;

        /**
         * Maximum depth on objects
         */
        withDepth(depth: number): CoverageRegionUriPlacesNearbyRequestBuilder;

        /**
         * The page number of the ptref result
         */
        withStartPage(startPage: number): CoverageRegionUriPlacesNearbyRequestBuilder;

        /**
         * Show bss stands availability
         */
        withBssStands(bssStands: boolean): CoverageRegionUriPlacesNearbyRequestBuilder;

        /**
         * Show more information about the poi if it&#39;s available, for instance, show BSS/car park availability in the pois(BSS/car park) of response
         */
        withAddPoiInfos(addPoiInfos: Array<string>): CoverageRegionUriPlacesNearbyRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriPlacesNearbyRequestBuilder;

        get(success: (response: PlacesNearby) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatPoiTypesRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatPoiTypesRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatPoiTypesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatPoiTypesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatPoiTypesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatPoiTypesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatPoiTypesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatPoiTypesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatPoiTypesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatPoiTypesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatPoiTypesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatPoiTypesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatPoiTypesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatPoiTypesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatPoiTypesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatPoiTypesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatPoiTypesRequestBuilder;

        get(success: (response: PoiTypes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withId(id: string)
     */
    export class CoverageLonLatPoiTypesIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatPoiTypesIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatPoiTypesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatPoiTypesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatPoiTypesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatPoiTypesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatPoiTypesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatPoiTypesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatPoiTypesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatPoiTypesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatPoiTypesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatPoiTypesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatPoiTypesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatPoiTypesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatPoiTypesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatPoiTypesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatPoiTypesIdRequestBuilder;

        get(success: (response: PoiTypes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriPoiTypesRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriPoiTypesRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriPoiTypesRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriPoiTypesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriPoiTypesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriPoiTypesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriPoiTypesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriPoiTypesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriPoiTypesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriPoiTypesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriPoiTypesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriPoiTypesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriPoiTypesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriPoiTypesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriPoiTypesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriPoiTypesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriPoiTypesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatUriPoiTypesRequestBuilder;

        get(success: (response: PoiTypes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageLonLatUriPoiTypesIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriPoiTypesIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriPoiTypesIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriPoiTypesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatUriPoiTypesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriPoiTypesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriPoiTypesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriPoiTypesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriPoiTypesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriPoiTypesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriPoiTypesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriPoiTypesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriPoiTypesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriPoiTypesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriPoiTypesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriPoiTypesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriPoiTypesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriPoiTypesIdRequestBuilder;

        get(success: (response: PoiTypes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionPoiTypesRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionPoiTypesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionPoiTypesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionPoiTypesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionPoiTypesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionPoiTypesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionPoiTypesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionPoiTypesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionPoiTypesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionPoiTypesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionPoiTypesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionPoiTypesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionPoiTypesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionPoiTypesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionPoiTypesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionPoiTypesRequestBuilder;

        get(success: (response: PoiTypes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionPoiTypesIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionPoiTypesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionPoiTypesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionPoiTypesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionPoiTypesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionPoiTypesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionPoiTypesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionPoiTypesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionPoiTypesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionPoiTypesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionPoiTypesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionPoiTypesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionPoiTypesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionPoiTypesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionPoiTypesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionPoiTypesIdRequestBuilder;

        get(success: (response: PoiTypes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriPoiTypesRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriPoiTypesRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriPoiTypesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriPoiTypesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriPoiTypesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriPoiTypesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriPoiTypesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriPoiTypesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriPoiTypesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriPoiTypesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriPoiTypesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriPoiTypesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriPoiTypesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriPoiTypesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriPoiTypesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriPoiTypesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionUriPoiTypesRequestBuilder;

        get(success: (response: PoiTypes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageRegionUriPoiTypesIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriPoiTypesIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriPoiTypesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionUriPoiTypesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriPoiTypesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriPoiTypesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriPoiTypesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriPoiTypesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriPoiTypesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriPoiTypesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriPoiTypesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriPoiTypesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriPoiTypesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriPoiTypesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriPoiTypesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriPoiTypesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriPoiTypesIdRequestBuilder;

        get(success: (response: PoiTypes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatPoisRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatPoisRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatPoisRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatPoisRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatPoisRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatPoisRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatPoisRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatPoisRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatPoisRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatPoisRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatPoisRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatPoisRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatPoisRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatPoisRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatPoisRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatPoisRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatPoisRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatPoisRequestBuilder;

        /**
         * Show bss stands availability
         */
        withBssStands(bssStands: boolean): CoverageLonLatPoisRequestBuilder;

        /**
         * Show more information about the poi if it&#39;s available, for instance, show BSS/car park availability in the pois(BSS/car park) of response
         */
        withAddPoiInfos(addPoiInfos: Array<string>): CoverageLonLatPoisRequestBuilder;

        get(success: (response: Pois) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withId(id: string)
     */
    export class CoverageLonLatPoisIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatPoisIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatPoisIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatPoisIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatPoisIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatPoisIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatPoisIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatPoisIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatPoisIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatPoisIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatPoisIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatPoisIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatPoisIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatPoisIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatPoisIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatPoisIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatPoisIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatPoisIdRequestBuilder;

        /**
         * Show bss stands availability
         */
        withBssStands(bssStands: boolean): CoverageLonLatPoisIdRequestBuilder;

        /**
         * Show more information about the poi if it&#39;s available, for instance, show BSS/car park availability in the pois(BSS/car park) of response
         */
        withAddPoiInfos(addPoiInfos: Array<string>): CoverageLonLatPoisIdRequestBuilder;

        get(success: (response: Pois) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriPoisRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriPoisRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriPoisRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriPoisRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriPoisRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriPoisRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriPoisRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriPoisRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriPoisRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriPoisRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriPoisRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriPoisRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriPoisRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriPoisRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriPoisRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriPoisRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriPoisRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatUriPoisRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatUriPoisRequestBuilder;

        /**
         * Show bss stands availability
         */
        withBssStands(bssStands: boolean): CoverageLonLatUriPoisRequestBuilder;

        /**
         * Show more information about the poi if it&#39;s available, for instance, show BSS/car park availability in the pois(BSS/car park) of response
         */
        withAddPoiInfos(addPoiInfos: Array<string>): CoverageLonLatUriPoisRequestBuilder;

        get(success: (response: Pois) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageLonLatUriPoisIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         * Show bss stands availability
         */
        withBssStands(bssStands: boolean): CoverageLonLatUriPoisIdRequestBuilder;

        /**
         * Show more information about the poi if it&#39;s available, for instance, show BSS/car park availability in the pois(BSS/car park) of response
         */
        withAddPoiInfos(addPoiInfos: Array<string>): CoverageLonLatUriPoisIdRequestBuilder;

        get(success: (response: Pois) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionPoisRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionPoisRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionPoisRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionPoisRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionPoisRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionPoisRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionPoisRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionPoisRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionPoisRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionPoisRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionPoisRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionPoisRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionPoisRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionPoisRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionPoisRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionPoisRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionPoisRequestBuilder;

        /**
         * Show bss stands availability
         */
        withBssStands(bssStands: boolean): CoverageRegionPoisRequestBuilder;

        /**
         * Show more information about the poi if it&#39;s available, for instance, show BSS/car park availability in the pois(BSS/car park) of response
         */
        withAddPoiInfos(addPoiInfos: Array<string>): CoverageRegionPoisRequestBuilder;

        get(success: (response: Pois) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionPoisIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionPoisIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionPoisIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionPoisIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionPoisIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionPoisIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionPoisIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionPoisIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionPoisIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionPoisIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionPoisIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionPoisIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionPoisIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionPoisIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionPoisIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionPoisIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionPoisIdRequestBuilder;

        /**
         * Show bss stands availability
         */
        withBssStands(bssStands: boolean): CoverageRegionPoisIdRequestBuilder;

        /**
         * Show more information about the poi if it&#39;s available, for instance, show BSS/car park availability in the pois(BSS/car park) of response
         */
        withAddPoiInfos(addPoiInfos: Array<string>): CoverageRegionPoisIdRequestBuilder;

        get(success: (response: Pois) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriPoisRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriPoisRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriPoisRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriPoisRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriPoisRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriPoisRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriPoisRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriPoisRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriPoisRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriPoisRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriPoisRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriPoisRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriPoisRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriPoisRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriPoisRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriPoisRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionUriPoisRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionUriPoisRequestBuilder;

        /**
         * Show bss stands availability
         */
        withBssStands(bssStands: boolean): CoverageRegionUriPoisRequestBuilder;

        /**
         * Show more information about the poi if it&#39;s available, for instance, show BSS/car park availability in the pois(BSS/car park) of response
         */
        withAddPoiInfos(addPoiInfos: Array<string>): CoverageRegionUriPoisRequestBuilder;

        get(success: (response: Pois) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageRegionUriPoisIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriPoisIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriPoisIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionUriPoisIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriPoisIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriPoisIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriPoisIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriPoisIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriPoisIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriPoisIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriPoisIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriPoisIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriPoisIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriPoisIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriPoisIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriPoisIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriPoisIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionUriPoisIdRequestBuilder;

        /**
         * Show bss stands availability
         */
        withBssStands(bssStands: boolean): CoverageRegionUriPoisIdRequestBuilder;

        /**
         * Show more information about the poi if it&#39;s available, for instance, show BSS/car park availability in the pois(BSS/car park) of response
         */
        withAddPoiInfos(addPoiInfos: Array<string>): CoverageRegionUriPoisIdRequestBuilder;

        get(success: (response: Pois) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withQ(q: string)
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatPtObjectsRequestBuilder {
        /**
         * The data to search
         */
        withQ(q: string): CoverageLonLatPtObjectsRequestBuilder;

        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatPtObjectsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatPtObjectsRequestBuilder;

        /**
         * The type of data to search
         */
        withType(type: Array<string>): CoverageLonLatPtObjectsRequestBuilder;

        /**
         * The maximum number of ptobjects returned
         */
        withCount(count: number): CoverageLonLatPtObjectsRequestBuilder;

        /**
         * If filled, will restrained the search within the given admin uris
         */
        withAdminUri(adminUri: Array<string>): CoverageLonLatPtObjectsRequestBuilder;

        /**
         * The depth of objects
         */
        withDepth(depth: number): CoverageLonLatPtObjectsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatPtObjectsRequestBuilder;

        get(success: (response: PtObjects) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withQ(q: string)
     * - withRegion(region: string)
     */
    export class CoverageRegionPtObjectsRequestBuilder {
        /**
         * The data to search
         */
        withQ(q: string): CoverageRegionPtObjectsRequestBuilder;

        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionPtObjectsRequestBuilder;

        /**
         * The type of data to search
         */
        withType(type: Array<string>): CoverageRegionPtObjectsRequestBuilder;

        /**
         * The maximum number of ptobjects returned
         */
        withCount(count: number): CoverageRegionPtObjectsRequestBuilder;

        /**
         * If filled, will restrained the search within the given admin uris
         */
        withAdminUri(adminUri: Array<string>): CoverageRegionPtObjectsRequestBuilder;

        /**
         * The depth of objects
         */
        withDepth(depth: number): CoverageRegionPtObjectsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionPtObjectsRequestBuilder;

        get(success: (response: PtObjects) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriRouteSchedulesRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriRouteSchedulesRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriRouteSchedulesRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriRouteSchedulesRequestBuilder;

        /**
         *
         */
        withFilter(filter: string): CoverageLonLatUriRouteSchedulesRequestBuilder;

        /**
         * The datetime from which you want the schedules
         */
        withFromDatetime(fromDatetime: string): CoverageLonLatUriRouteSchedulesRequestBuilder;

        /**
         * The datetime until which you want the schedules
         */
        withUntilDatetime(untilDatetime: string): CoverageLonLatUriRouteSchedulesRequestBuilder;

        /**
         * Maximum duration between datetime and the retrieved stop time
         */
        withDuration(duration: number): CoverageLonLatUriRouteSchedulesRequestBuilder;

        /**
         *
         */
        withDepth(depth: number): CoverageLonLatUriRouteSchedulesRequestBuilder;

        /**
         * Number of schedules per page
         */
        withCount(count: number): CoverageLonLatUriRouteSchedulesRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageLonLatUriRouteSchedulesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;items_per_schedule&#x60;
         */
        withMaxDateTimes(maxDateTimes: number): CoverageLonLatUriRouteSchedulesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriRouteSchedulesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriRouteSchedulesRequestBuilder;

        /**
         * Id of the calendar
         */
        withCalendar(calendar: string): CoverageLonLatUriRouteSchedulesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriRouteSchedulesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriRouteSchedulesRequestBuilder;

        /**
         * freshness of the data. base_schedule is the long term planned schedule. adapted_schedule is for planned ahead disruptions (strikes, maintenances, ...). realtime is to have the freshest possible data
         */
        withDataFreshness(dataFreshness: string): CoverageLonLatUriRouteSchedulesRequestBuilder;

        /**
         * maximum number of date_times per schedule
         */
        withItemsPerSchedule(itemsPerSchedule: number): CoverageLonLatUriRouteSchedulesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriRouteSchedulesRequestBuilder;

        get(success: (response: RouteSchedules) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriRouteSchedulesRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriRouteSchedulesRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriRouteSchedulesRequestBuilder;

        /**
         *
         */
        withFilter(filter: string): CoverageRegionUriRouteSchedulesRequestBuilder;

        /**
         * The datetime from which you want the schedules
         */
        withFromDatetime(fromDatetime: string): CoverageRegionUriRouteSchedulesRequestBuilder;

        /**
         * The datetime until which you want the schedules
         */
        withUntilDatetime(untilDatetime: string): CoverageRegionUriRouteSchedulesRequestBuilder;

        /**
         * Maximum duration between datetime and the retrieved stop time
         */
        withDuration(duration: number): CoverageRegionUriRouteSchedulesRequestBuilder;

        /**
         *
         */
        withDepth(depth: number): CoverageRegionUriRouteSchedulesRequestBuilder;

        /**
         * Number of schedules per page
         */
        withCount(count: number): CoverageRegionUriRouteSchedulesRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageRegionUriRouteSchedulesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;items_per_schedule&#x60;
         */
        withMaxDateTimes(maxDateTimes: number): CoverageRegionUriRouteSchedulesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriRouteSchedulesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriRouteSchedulesRequestBuilder;

        /**
         * Id of the calendar
         */
        withCalendar(calendar: string): CoverageRegionUriRouteSchedulesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriRouteSchedulesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriRouteSchedulesRequestBuilder;

        /**
         * freshness of the data. base_schedule is the long term planned schedule. adapted_schedule is for planned ahead disruptions (strikes, maintenances, ...). realtime is to have the freshest possible data
         */
        withDataFreshness(dataFreshness: string): CoverageRegionUriRouteSchedulesRequestBuilder;

        /**
         * maximum number of date_times per schedule
         */
        withItemsPerSchedule(itemsPerSchedule: number): CoverageRegionUriRouteSchedulesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriRouteSchedulesRequestBuilder;

        get(success: (response: RouteSchedules) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     */
    export class RouteSchedulesRequestBuilder {
        /**
         *
         */
        withFilter(filter: string): RouteSchedulesRequestBuilder;

        /**
         * The datetime from which you want the schedules
         */
        withFromDatetime(fromDatetime: string): RouteSchedulesRequestBuilder;

        /**
         * The datetime until which you want the schedules
         */
        withUntilDatetime(untilDatetime: string): RouteSchedulesRequestBuilder;

        /**
         * Maximum duration between datetime and the retrieved stop time
         */
        withDuration(duration: number): RouteSchedulesRequestBuilder;

        /**
         *
         */
        withDepth(depth: number): RouteSchedulesRequestBuilder;

        /**
         * Number of schedules per page
         */
        withCount(count: number): RouteSchedulesRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): RouteSchedulesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;items_per_schedule&#x60;
         */
        withMaxDateTimes(maxDateTimes: number): RouteSchedulesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): RouteSchedulesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): RouteSchedulesRequestBuilder;

        /**
         * Id of the calendar
         */
        withCalendar(calendar: string): RouteSchedulesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): RouteSchedulesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): RouteSchedulesRequestBuilder;

        /**
         * freshness of the data. base_schedule is the long term planned schedule. adapted_schedule is for planned ahead disruptions (strikes, maintenances, ...). realtime is to have the freshest possible data
         */
        withDataFreshness(dataFreshness: string): RouteSchedulesRequestBuilder;

        /**
         * maximum number of date_times per schedule
         */
        withItemsPerSchedule(itemsPerSchedule: number): RouteSchedulesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): RouteSchedulesRequestBuilder;

        get(success: (response: RouteSchedules) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatRoutesRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatRoutesRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatRoutesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatRoutesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatRoutesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatRoutesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatRoutesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatRoutesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatRoutesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatRoutesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatRoutesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatRoutesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatRoutesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatRoutesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatRoutesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatRoutesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatRoutesRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatRoutesRequestBuilder;

        get(success: (response: Routes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withId(id: string)
     */
    export class CoverageLonLatRoutesIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatRoutesIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatRoutesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatRoutesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatRoutesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatRoutesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatRoutesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatRoutesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatRoutesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatRoutesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatRoutesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatRoutesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatRoutesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatRoutesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatRoutesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatRoutesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatRoutesIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatRoutesIdRequestBuilder;

        get(success: (response: Routes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriRoutesRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriRoutesRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriRoutesRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriRoutesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriRoutesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriRoutesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriRoutesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriRoutesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriRoutesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriRoutesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriRoutesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriRoutesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriRoutesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriRoutesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriRoutesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriRoutesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriRoutesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatUriRoutesRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatUriRoutesRequestBuilder;

        get(success: (response: Routes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageLonLatUriRoutesIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriRoutesIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriRoutesIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriRoutesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatUriRoutesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriRoutesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriRoutesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriRoutesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriRoutesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriRoutesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriRoutesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriRoutesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriRoutesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriRoutesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriRoutesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriRoutesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriRoutesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriRoutesIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatUriRoutesIdRequestBuilder;

        get(success: (response: Routes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionRoutesRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionRoutesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionRoutesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionRoutesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionRoutesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionRoutesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionRoutesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionRoutesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionRoutesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionRoutesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionRoutesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionRoutesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionRoutesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionRoutesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionRoutesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionRoutesRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionRoutesRequestBuilder;

        get(success: (response: Routes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionRoutesIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionRoutesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionRoutesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionRoutesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionRoutesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionRoutesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionRoutesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionRoutesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionRoutesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionRoutesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionRoutesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionRoutesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionRoutesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionRoutesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionRoutesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionRoutesIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionRoutesIdRequestBuilder;

        get(success: (response: Routes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriRoutesRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriRoutesRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriRoutesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriRoutesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriRoutesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriRoutesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriRoutesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriRoutesRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriRoutesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriRoutesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriRoutesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriRoutesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriRoutesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriRoutesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriRoutesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriRoutesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionUriRoutesRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionUriRoutesRequestBuilder;

        get(success: (response: Routes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageRegionUriRoutesIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriRoutesIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriRoutesIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionUriRoutesIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriRoutesIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriRoutesIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriRoutesIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriRoutesIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriRoutesIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriRoutesIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriRoutesIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriRoutesIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriRoutesIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriRoutesIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriRoutesIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriRoutesIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriRoutesIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionUriRoutesIdRequestBuilder;

        get(success: (response: Routes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withExternalCode(externalCode: string)
     */
    export class RoutesRequestBuilder {
        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): RoutesRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): RoutesRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): RoutesRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): RoutesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): RoutesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): RoutesRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): RoutesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): RoutesRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): RoutesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): RoutesRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): RoutesRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): RoutesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): RoutesRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): RoutesRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): RoutesRequestBuilder;

        get(success: (response: Routes) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionStatusRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionStatusRequestBuilder;

        get(success: (response: Status_1) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatStopAreasRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatStopAreasRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatStopAreasRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatStopAreasRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatStopAreasRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatStopAreasRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatStopAreasRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatStopAreasRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatStopAreasRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatStopAreasRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatStopAreasRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatStopAreasRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatStopAreasRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatStopAreasRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatStopAreasRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatStopAreasRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatStopAreasRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatStopAreasRequestBuilder;

        get(success: (response: StopAreas) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withId(id: string)
     */
    export class CoverageLonLatStopAreasIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatStopAreasIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatStopAreasIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatStopAreasIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatStopAreasIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatStopAreasIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatStopAreasIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatStopAreasIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatStopAreasIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatStopAreasIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatStopAreasIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatStopAreasIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatStopAreasIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatStopAreasIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatStopAreasIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatStopAreasIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatStopAreasIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatStopAreasIdRequestBuilder;

        get(success: (response: StopAreas) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriStopAreasRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriStopAreasRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriStopAreasRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriStopAreasRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriStopAreasRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriStopAreasRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriStopAreasRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriStopAreasRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriStopAreasRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriStopAreasRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriStopAreasRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriStopAreasRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriStopAreasRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriStopAreasRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriStopAreasRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriStopAreasRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriStopAreasRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatUriStopAreasRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatUriStopAreasRequestBuilder;

        get(success: (response: StopAreas) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageLonLatUriStopAreasIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriStopAreasIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriStopAreasIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriStopAreasIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatUriStopAreasIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriStopAreasIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriStopAreasIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriStopAreasIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriStopAreasIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriStopAreasIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriStopAreasIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriStopAreasIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriStopAreasIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriStopAreasIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriStopAreasIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriStopAreasIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriStopAreasIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriStopAreasIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatUriStopAreasIdRequestBuilder;

        get(success: (response: StopAreas) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionStopAreasRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionStopAreasRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionStopAreasRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionStopAreasRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionStopAreasRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionStopAreasRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionStopAreasRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionStopAreasRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionStopAreasRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionStopAreasRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionStopAreasRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionStopAreasRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionStopAreasRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionStopAreasRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionStopAreasRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionStopAreasRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionStopAreasRequestBuilder;

        get(success: (response: StopAreas) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionStopAreasIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionStopAreasIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionStopAreasIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionStopAreasIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionStopAreasIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionStopAreasIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionStopAreasIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionStopAreasIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionStopAreasIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionStopAreasIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionStopAreasIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionStopAreasIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionStopAreasIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionStopAreasIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionStopAreasIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionStopAreasIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionStopAreasIdRequestBuilder;

        get(success: (response: StopAreas) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriStopAreasRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriStopAreasRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriStopAreasRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriStopAreasRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriStopAreasRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriStopAreasRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriStopAreasRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriStopAreasRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriStopAreasRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriStopAreasRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriStopAreasRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriStopAreasRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriStopAreasRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriStopAreasRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriStopAreasRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriStopAreasRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionUriStopAreasRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionUriStopAreasRequestBuilder;

        get(success: (response: StopAreas) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageRegionUriStopAreasIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriStopAreasIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriStopAreasIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionUriStopAreasIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriStopAreasIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriStopAreasIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriStopAreasIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriStopAreasIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriStopAreasIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriStopAreasIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriStopAreasIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriStopAreasIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriStopAreasIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriStopAreasIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriStopAreasIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriStopAreasIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriStopAreasIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionUriStopAreasIdRequestBuilder;

        get(success: (response: StopAreas) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withExternalCode(externalCode: string)
     */
    export class StopAreasRequestBuilder {
        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): StopAreasRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): StopAreasRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): StopAreasRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): StopAreasRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): StopAreasRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): StopAreasRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): StopAreasRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): StopAreasRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): StopAreasRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): StopAreasRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): StopAreasRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): StopAreasRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): StopAreasRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): StopAreasRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): StopAreasRequestBuilder;

        get(success: (response: StopAreas) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatStopPointsRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatStopPointsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatStopPointsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatStopPointsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatStopPointsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatStopPointsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatStopPointsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatStopPointsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatStopPointsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatStopPointsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatStopPointsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatStopPointsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatStopPointsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatStopPointsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatStopPointsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatStopPointsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatStopPointsRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatStopPointsRequestBuilder;

        get(success: (response: StopPoints) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withId(id: string)
     */
    export class CoverageLonLatStopPointsIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatStopPointsIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatStopPointsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatStopPointsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatStopPointsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatStopPointsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatStopPointsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatStopPointsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatStopPointsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatStopPointsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatStopPointsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatStopPointsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatStopPointsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatStopPointsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatStopPointsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatStopPointsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatStopPointsIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatStopPointsIdRequestBuilder;

        get(success: (response: StopPoints) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriStopPointsRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriStopPointsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriStopPointsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriStopPointsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriStopPointsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriStopPointsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriStopPointsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriStopPointsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriStopPointsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriStopPointsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriStopPointsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriStopPointsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriStopPointsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriStopPointsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriStopPointsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriStopPointsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriStopPointsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatUriStopPointsRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatUriStopPointsRequestBuilder;

        get(success: (response: StopPoints) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageLonLatUriStopPointsIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriStopPointsIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriStopPointsIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriStopPointsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatUriStopPointsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriStopPointsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriStopPointsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriStopPointsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriStopPointsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriStopPointsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriStopPointsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriStopPointsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriStopPointsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriStopPointsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriStopPointsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriStopPointsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriStopPointsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriStopPointsIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageLonLatUriStopPointsIdRequestBuilder;

        get(success: (response: StopPoints) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionStopPointsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionStopPointsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionStopPointsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionStopPointsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionStopPointsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionStopPointsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionStopPointsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionStopPointsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionStopPointsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionStopPointsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionStopPointsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionStopPointsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionStopPointsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionStopPointsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionStopPointsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionStopPointsRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionStopPointsRequestBuilder;

        get(success: (response: StopPoints) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionStopPointsIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionStopPointsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionStopPointsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionStopPointsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionStopPointsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionStopPointsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionStopPointsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionStopPointsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionStopPointsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionStopPointsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionStopPointsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionStopPointsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionStopPointsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionStopPointsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionStopPointsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionStopPointsIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionStopPointsIdRequestBuilder;

        get(success: (response: StopPoints) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriStopPointsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriStopPointsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriStopPointsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriStopPointsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriStopPointsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriStopPointsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriStopPointsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriStopPointsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriStopPointsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriStopPointsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriStopPointsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriStopPointsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriStopPointsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriStopPointsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriStopPointsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriStopPointsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionUriStopPointsRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionUriStopPointsRequestBuilder;

        get(success: (response: StopPoints) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageRegionUriStopPointsIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriStopPointsIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriStopPointsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionUriStopPointsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriStopPointsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriStopPointsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriStopPointsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriStopPointsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriStopPointsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriStopPointsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriStopPointsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriStopPointsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriStopPointsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriStopPointsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriStopPointsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriStopPointsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriStopPointsIdRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): CoverageRegionUriStopPointsIdRequestBuilder;

        get(success: (response: StopPoints) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withExternalCode(externalCode: string)
     */
    export class StopPointsRequestBuilder {
        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): StopPointsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): StopPointsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): StopPointsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): StopPointsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): StopPointsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): StopPointsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): StopPointsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): StopPointsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): StopPointsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): StopPointsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): StopPointsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): StopPointsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): StopPointsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): StopPointsRequestBuilder;

        /**
         * original uri of the object you want to query
         */
        withOriginalId(originalId: string): StopPointsRequestBuilder;

        get(success: (response: StopPoints) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriStopSchedulesRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriStopSchedulesRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriStopSchedulesRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriStopSchedulesRequestBuilder;

        /**
         *
         */
        withFilter(filter: string): CoverageLonLatUriStopSchedulesRequestBuilder;

        /**
         * The datetime from which you want the schedules
         */
        withFromDatetime(fromDatetime: string): CoverageLonLatUriStopSchedulesRequestBuilder;

        /**
         * The datetime until which you want the schedules
         */
        withUntilDatetime(untilDatetime: string): CoverageLonLatUriStopSchedulesRequestBuilder;

        /**
         * Maximum duration between datetime and the retrieved stop time
         */
        withDuration(duration: number): CoverageLonLatUriStopSchedulesRequestBuilder;

        /**
         *
         */
        withDepth(depth: number): CoverageLonLatUriStopSchedulesRequestBuilder;

        /**
         * Number of schedules per page
         */
        withCount(count: number): CoverageLonLatUriStopSchedulesRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageLonLatUriStopSchedulesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;items_per_schedule&#x60;
         */
        withMaxDateTimes(maxDateTimes: number): CoverageLonLatUriStopSchedulesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriStopSchedulesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriStopSchedulesRequestBuilder;

        /**
         * Id of the calendar
         */
        withCalendar(calendar: string): CoverageLonLatUriStopSchedulesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriStopSchedulesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriStopSchedulesRequestBuilder;

        /**
         * freshness of the data. base_schedule is the long term planned schedule. adapted_schedule is for planned ahead disruptions (strikes, maintenances, ...). realtime is to have the freshest possible data
         */
        withDataFreshness(dataFreshness: string): CoverageLonLatUriStopSchedulesRequestBuilder;

        /**
         * maximum number of date_times per schedule
         */
        withItemsPerSchedule(itemsPerSchedule: number): CoverageLonLatUriStopSchedulesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriStopSchedulesRequestBuilder;

        get(success: (response: StopSchedules) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriStopSchedulesRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriStopSchedulesRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriStopSchedulesRequestBuilder;

        /**
         *
         */
        withFilter(filter: string): CoverageRegionUriStopSchedulesRequestBuilder;

        /**
         * The datetime from which you want the schedules
         */
        withFromDatetime(fromDatetime: string): CoverageRegionUriStopSchedulesRequestBuilder;

        /**
         * The datetime until which you want the schedules
         */
        withUntilDatetime(untilDatetime: string): CoverageRegionUriStopSchedulesRequestBuilder;

        /**
         * Maximum duration between datetime and the retrieved stop time
         */
        withDuration(duration: number): CoverageRegionUriStopSchedulesRequestBuilder;

        /**
         *
         */
        withDepth(depth: number): CoverageRegionUriStopSchedulesRequestBuilder;

        /**
         * Number of schedules per page
         */
        withCount(count: number): CoverageRegionUriStopSchedulesRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageRegionUriStopSchedulesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;items_per_schedule&#x60;
         */
        withMaxDateTimes(maxDateTimes: number): CoverageRegionUriStopSchedulesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriStopSchedulesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriStopSchedulesRequestBuilder;

        /**
         * Id of the calendar
         */
        withCalendar(calendar: string): CoverageRegionUriStopSchedulesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriStopSchedulesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriStopSchedulesRequestBuilder;

        /**
         * freshness of the data. base_schedule is the long term planned schedule. adapted_schedule is for planned ahead disruptions (strikes, maintenances, ...). realtime is to have the freshest possible data
         */
        withDataFreshness(dataFreshness: string): CoverageRegionUriStopSchedulesRequestBuilder;

        /**
         * maximum number of date_times per schedule
         */
        withItemsPerSchedule(itemsPerSchedule: number): CoverageRegionUriStopSchedulesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriStopSchedulesRequestBuilder;

        get(success: (response: StopSchedules) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     */
    export class StopSchedulesRequestBuilder {
        /**
         *
         */
        withFilter(filter: string): StopSchedulesRequestBuilder;

        /**
         * The datetime from which you want the schedules
         */
        withFromDatetime(fromDatetime: string): StopSchedulesRequestBuilder;

        /**
         * The datetime until which you want the schedules
         */
        withUntilDatetime(untilDatetime: string): StopSchedulesRequestBuilder;

        /**
         * Maximum duration between datetime and the retrieved stop time
         */
        withDuration(duration: number): StopSchedulesRequestBuilder;

        /**
         *
         */
        withDepth(depth: number): StopSchedulesRequestBuilder;

        /**
         * Number of schedules per page
         */
        withCount(count: number): StopSchedulesRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): StopSchedulesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;items_per_schedule&#x60;
         */
        withMaxDateTimes(maxDateTimes: number): StopSchedulesRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): StopSchedulesRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): StopSchedulesRequestBuilder;

        /**
         * Id of the calendar
         */
        withCalendar(calendar: string): StopSchedulesRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): StopSchedulesRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): StopSchedulesRequestBuilder;

        /**
         * freshness of the data. base_schedule is the long term planned schedule. adapted_schedule is for planned ahead disruptions (strikes, maintenances, ...). realtime is to have the freshest possible data
         */
        withDataFreshness(dataFreshness: string): StopSchedulesRequestBuilder;

        /**
         * maximum number of date_times per schedule
         */
        withItemsPerSchedule(itemsPerSchedule: number): StopSchedulesRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): StopSchedulesRequestBuilder;

        get(success: (response: StopSchedules) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionTrafficReportsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionTrafficReportsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionTrafficReportsRequestBuilder;

        /**
         * Number of objects per page
         */
        withCount(count: number): CoverageRegionTrafficReportsRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageRegionTrafficReportsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionTrafficReportsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionTrafficReportsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionTrafficReportsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionTrafficReportsRequestBuilder;

        get(success: (response: TrafficReports) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriTrafficReportsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriTrafficReportsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriTrafficReportsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriTrafficReportsRequestBuilder;

        /**
         * Number of objects per page
         */
        withCount(count: number): CoverageRegionUriTrafficReportsRequestBuilder;

        /**
         * The current page
         */
        withStartPage(startPage: number): CoverageRegionUriTrafficReportsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriTrafficReportsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriTrafficReportsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriTrafficReportsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriTrafficReportsRequestBuilder;

        get(success: (response: TrafficReports) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatTripsRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatTripsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatTripsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatTripsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatTripsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatTripsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatTripsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatTripsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatTripsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatTripsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatTripsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatTripsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatTripsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatTripsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatTripsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatTripsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatTripsRequestBuilder;

        get(success: (response: Trips) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withId(id: string)
     */
    export class CoverageLonLatTripsIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatTripsIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatTripsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatTripsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatTripsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatTripsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatTripsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatTripsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatTripsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatTripsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatTripsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatTripsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatTripsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatTripsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatTripsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatTripsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatTripsIdRequestBuilder;

        get(success: (response: Trips) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriTripsRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriTripsRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriTripsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriTripsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriTripsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriTripsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriTripsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriTripsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriTripsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriTripsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriTripsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriTripsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriTripsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriTripsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriTripsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriTripsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriTripsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatUriTripsRequestBuilder;

        get(success: (response: Trips) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageLonLatUriTripsIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriTripsIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriTripsIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriTripsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatUriTripsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriTripsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriTripsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriTripsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriTripsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriTripsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriTripsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriTripsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriTripsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriTripsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriTripsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriTripsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriTripsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriTripsIdRequestBuilder;

        get(success: (response: Trips) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionTripsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionTripsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionTripsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionTripsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionTripsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionTripsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionTripsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionTripsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionTripsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionTripsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionTripsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionTripsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionTripsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionTripsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionTripsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionTripsRequestBuilder;

        get(success: (response: Trips) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionTripsIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionTripsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionTripsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionTripsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionTripsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionTripsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionTripsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionTripsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionTripsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionTripsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionTripsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionTripsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionTripsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionTripsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionTripsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionTripsIdRequestBuilder;

        get(success: (response: Trips) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriTripsRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriTripsRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriTripsRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriTripsRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriTripsRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriTripsRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriTripsRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriTripsRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriTripsRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriTripsRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriTripsRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriTripsRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriTripsRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriTripsRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriTripsRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriTripsRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionUriTripsRequestBuilder;

        get(success: (response: Trips) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageRegionUriTripsIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriTripsIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriTripsIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionUriTripsIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriTripsIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriTripsIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriTripsIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriTripsIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriTripsIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriTripsIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriTripsIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriTripsIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriTripsIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriTripsIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriTripsIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriTripsIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriTripsIdRequestBuilder;

        get(success: (response: Trips) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     */
    export class CoverageLonLatUriVehicleJourneysRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriVehicleJourneysRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriVehicleJourneysRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriVehicleJourneysRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriVehicleJourneysRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriVehicleJourneysRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriVehicleJourneysRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriVehicleJourneysRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriVehicleJourneysRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriVehicleJourneysRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriVehicleJourneysRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriVehicleJourneysRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriVehicleJourneysRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriVehicleJourneysRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriVehicleJourneysRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriVehicleJourneysRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriVehicleJourneysRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatUriVehicleJourneysRequestBuilder;

        get(success: (response: VehicleJourneys) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageLonLatUriVehicleJourneysIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatUriVehicleJourneysIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatUriVehicleJourneysIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageLonLatUriVehicleJourneysIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatUriVehicleJourneysIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatUriVehicleJourneysIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatUriVehicleJourneysIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatUriVehicleJourneysIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatUriVehicleJourneysIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatUriVehicleJourneysIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatUriVehicleJourneysIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatUriVehicleJourneysIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatUriVehicleJourneysIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatUriVehicleJourneysIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatUriVehicleJourneysIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatUriVehicleJourneysIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatUriVehicleJourneysIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatUriVehicleJourneysIdRequestBuilder;

        get(success: (response: VehicleJourneys) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     */
    export class CoverageLonLatVehicleJourneysRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatVehicleJourneysRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatVehicleJourneysRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatVehicleJourneysRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatVehicleJourneysRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatVehicleJourneysRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatVehicleJourneysRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatVehicleJourneysRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatVehicleJourneysRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatVehicleJourneysRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatVehicleJourneysRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatVehicleJourneysRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatVehicleJourneysRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatVehicleJourneysRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatVehicleJourneysRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatVehicleJourneysRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageLonLatVehicleJourneysRequestBuilder;

        get(success: (response: VehicleJourneys) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withLat(lat: number)
     * - withLon(lon: number)
     * - withId(id: string)
     */
    export class CoverageLonLatVehicleJourneysIdRequestBuilder {
        /**
         *  The latitude of where the coord you want to query
         */
        withLat(lat: number): CoverageLonLatVehicleJourneysIdRequestBuilder;

        /**
         *  The longitude of where the coord you want to query
         */
        withLon(lon: number): CoverageLonLatVehicleJourneysIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageLonLatVehicleJourneysIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageLonLatVehicleJourneysIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageLonLatVehicleJourneysIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageLonLatVehicleJourneysIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageLonLatVehicleJourneysIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageLonLatVehicleJourneysIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageLonLatVehicleJourneysIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageLonLatVehicleJourneysIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageLonLatVehicleJourneysIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageLonLatVehicleJourneysIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageLonLatVehicleJourneysIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageLonLatVehicleJourneysIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageLonLatVehicleJourneysIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageLonLatVehicleJourneysIdRequestBuilder;

        get(success: (response: VehicleJourneys) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     */
    export class CoverageRegionUriVehicleJourneysRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriVehicleJourneysRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriVehicleJourneysRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriVehicleJourneysRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriVehicleJourneysRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriVehicleJourneysRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriVehicleJourneysRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriVehicleJourneysRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriVehicleJourneysRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriVehicleJourneysRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriVehicleJourneysRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriVehicleJourneysRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriVehicleJourneysRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriVehicleJourneysRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriVehicleJourneysRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriVehicleJourneysRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionUriVehicleJourneysRequestBuilder;

        get(success: (response: VehicleJourneys) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withUri(uri: string)
     * - withId(id: string)
     */
    export class CoverageRegionUriVehicleJourneysIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionUriVehicleJourneysIdRequestBuilder;

        /**
         * First part of the uri
         */
        withUri(uri: string): CoverageRegionUriVehicleJourneysIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionUriVehicleJourneysIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionUriVehicleJourneysIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionUriVehicleJourneysIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionUriVehicleJourneysIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionUriVehicleJourneysIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionUriVehicleJourneysIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionUriVehicleJourneysIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionUriVehicleJourneysIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionUriVehicleJourneysIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionUriVehicleJourneysIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionUriVehicleJourneysIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionUriVehicleJourneysIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionUriVehicleJourneysIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionUriVehicleJourneysIdRequestBuilder;

        get(success: (response: VehicleJourneys) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     */
    export class CoverageRegionVehicleJourneysRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionVehicleJourneysRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionVehicleJourneysRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionVehicleJourneysRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionVehicleJourneysRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionVehicleJourneysRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionVehicleJourneysRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionVehicleJourneysRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionVehicleJourneysRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionVehicleJourneysRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionVehicleJourneysRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionVehicleJourneysRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionVehicleJourneysRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionVehicleJourneysRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionVehicleJourneysRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): CoverageRegionVehicleJourneysRequestBuilder;

        get(success: (response: VehicleJourneys) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withRegion(region: string)
     * - withId(id: string)
     */
    export class CoverageRegionVehicleJourneysIdRequestBuilder {
        /**
         *  The region you want to query
         */
        withRegion(region: string): CoverageRegionVehicleJourneysIdRequestBuilder;

        /**
         * Id of the object you want to query
         */
        withId(id: string): CoverageRegionVehicleJourneysIdRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): CoverageRegionVehicleJourneysIdRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): CoverageRegionVehicleJourneysIdRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): CoverageRegionVehicleJourneysIdRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): CoverageRegionVehicleJourneysIdRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): CoverageRegionVehicleJourneysIdRequestBuilder;

        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): CoverageRegionVehicleJourneysIdRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): CoverageRegionVehicleJourneysIdRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): CoverageRegionVehicleJourneysIdRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): CoverageRegionVehicleJourneysIdRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): CoverageRegionVehicleJourneysIdRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): CoverageRegionVehicleJourneysIdRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): CoverageRegionVehicleJourneysIdRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): CoverageRegionVehicleJourneysIdRequestBuilder;

        get(success: (response: VehicleJourneys) => void, error: (errorMessage: string) => void): void;
    }

    /**
     * Mandatory parameters:
     * - withExternalCode(externalCode: string)
     */
    export class VehicleJourneysRequestBuilder {
        /**
         * An external code to query
         */
        withExternalCode(externalCode: string): VehicleJourneysRequestBuilder;

        /**
         * The page where you want to start
         */
        withStartPage(startPage: number): VehicleJourneysRequestBuilder;

        /**
         * Number of objects you want on a page
         */
        withCount(count: number): VehicleJourneysRequestBuilder;

        /**
         * The depth of your object
         */
        withDepth(depth: number): VehicleJourneysRequestBuilder;

        /**
         * DEPRECATED, replaced by &#x60;forbidden_uris[]&#x60;
         */
        withForbiddenId(forbiddenId: Array<string>): VehicleJourneysRequestBuilder;

        /**
         * forbidden uris
         */
        withForbiddenUris(forbiddenUris: Array<string>): VehicleJourneysRequestBuilder;

        /**
         * filter vehicle journeys on headsign
         */
        withHeadsign(headsign: string): VehicleJourneysRequestBuilder;

        /**
         * show more identification codes
         */
        withShowCodes(showCodes: boolean): VehicleJourneysRequestBuilder;

        /**
         * odt level
         */
        withOdtLevel(odtLevel: string): VehicleJourneysRequestBuilder;

        /**
         * Distance range of the query. Used only if a coord is in the query
         */
        withDistance(distance: number): VehicleJourneysRequestBuilder;

        /**
         * filters objects not valid before this date
         */
        withSince(since: string): VehicleJourneysRequestBuilder;

        /**
         * filters objects not valid after this date
         */
        withUntil(until: string): VehicleJourneysRequestBuilder;

        /**
         * remove geojson from the response
         */
        withDisableGeojson(disableGeojson: boolean): VehicleJourneysRequestBuilder;

        /**
         * The filter parameter
         */
        withFilter(filter: string): VehicleJourneysRequestBuilder;

        get(success: (response: VehicleJourneys) => void, error: (errorMessage: string) => void): void;
    }
}
