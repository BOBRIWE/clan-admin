import IDestinyLinkedProfilesResponse from '../Destiny/Responses/IDestinyLinkedProfilesResponse';
import Request from '../Request';
import BungieMembershipType from '../BungieMembershipType';
import IDestinyProfileResponse from '../Destiny/Responses/IDestinyProfileResponse';
import DestinyComponentType from '../Destiny/DestinyComponentType';
import ActivityModeType from '../Destiny/Definitions/ActivityModeType';
import IDestinyActivityHistoryResults from '../Destiny/HistoricalStats/IDestinyActivityHistoryResults';
import IDestinyPostGameCarnageReportData from '../Destiny/HistoricalStats/IDestinyPostGameCarnageReportData';
import {IDestinyManifest} from './Config/IDestinyManifest';
import Cacher from '../Cacher';
import IResponse from '../IResponse';

export default class Destiny2 {
    static async getLinkedProfiles(userId: string, membershipType: BungieMembershipType = -1): Promise<IDestinyLinkedProfilesResponse> {
        const request = new Request(`/Destiny2/${membershipType}/Profile/${userId}/LinkedProfiles/`);
        const response = await request.get<IDestinyLinkedProfilesResponse>();

        return response.Response;
    }

    static async getActivityHistory(
        membershipId: string,
        characterId: string,
        mode: ActivityModeType = ActivityModeType.AllPvE,
        page: number = 0,
        count: number = 25,
        membershipType: BungieMembershipType = -1
    ): Promise<IDestinyActivityHistoryResults> {
        const request = new Request(`/Destiny2/${membershipType}/Account/${membershipId}/Character/${characterId}/Stats/Activities/?mode=${mode}&count=${count}&page=${page}`);
        const response = await request.get<IDestinyActivityHistoryResults>();

        return response.Response;
    }

    static async getProfile(destinyMembershipId: string, components: DestinyComponentType = DestinyComponentType.Profiles, membershipType: BungieMembershipType = BungieMembershipType.TigerSteam): Promise<IDestinyProfileResponse> {
        const request = new Request(`/Destiny2/${membershipType}/Profile/${destinyMembershipId}/?components=${components}`);
        const response = await request.get<IDestinyProfileResponse>();

        return response.Response;
    }

    static async getPostGameCarnageReport(activityId: string): Promise<IDestinyPostGameCarnageReportData> {
        const requestString = `/Destiny2/Stats/PostGameCarnageReport/${activityId}/`;

        const cacher = new Cacher();
        const cachedReport = await cacher.get<IResponse<IDestinyPostGameCarnageReportData>>(requestString);

        if (cachedReport !== undefined) {
            return cachedReport.Response;
        }

        const request = new Request(requestString);
        const response = await request.get<IDestinyPostGameCarnageReportData>();

        await cacher.save<IResponse<IDestinyPostGameCarnageReportData>>(requestString, response);

        return response.Response;
    }

    static async getDestinyManifest() : Promise<IDestinyManifest> {
        const request = new Request(`/Destiny2/Manifest/`);
        const response = await request.get<IDestinyManifest>();

        return response.Response;
    }
}