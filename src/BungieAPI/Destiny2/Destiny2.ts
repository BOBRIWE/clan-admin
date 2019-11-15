import IDestinyLinkedProfilesResponse from '../Destiny/Responses/IDestinyLinkedProfilesResponse';
import Request from '../Request';
import BungieMembershipType from '../BungieMembershipType';
import IDestinyProfileResponse from '../Destiny/Responses/IDestinyProfileResponse';
import DestinyComponentType from '../Destiny/DestinyComponentType';
import ActivityModeType from '../Destiny/Definitions/ActivityModeType';
import IDestinyActivityHistoryResults from '../Destiny/HistoricalStats/IDestinyActivityHistoryResults';
import IDestinyPostGameCarnageReportData from '../Destiny/HistoricalStats/IDestinyPostGameCarnageReportData';
import {IDestinyManifest} from './Config/IDestinyManifest';

export default class Destiny2 {
    static async getLinkedProfiles(userId: number, membershipType: BungieMembershipType = -1): Promise<IDestinyLinkedProfilesResponse> {
        const request = new Request(`/Destiny2/${membershipType}/Profile/${userId}/LinkedProfiles/`);
        const response = await request.get();

        return response.Response as IDestinyLinkedProfilesResponse;
    }

    static async getActivityHistory(
        membershipId: number,
        characterId: number,
        mode: ActivityModeType = ActivityModeType.AllPvE,
        page: number = 0,
        count: number = 25,
        membershipType: BungieMembershipType = -1
    ): Promise<IDestinyActivityHistoryResults> {
        const request = new Request(`/Destiny2/${membershipType}/Account/${membershipId}/Character/${characterId}/Stats/Activities/?mode=${mode}&count=${count}&page=${page}`);
        const response = await request.get();

        return response.Response as IDestinyActivityHistoryResults;
    }

    static async getProfile(destinyMembershipId: number, components: DestinyComponentType = DestinyComponentType.Profiles, membershipType: BungieMembershipType = BungieMembershipType.All): Promise<IDestinyProfileResponse> {
        const request = new Request(`/Destiny2/${membershipType}/Profile/${destinyMembershipId}/?components=${components}`);
        const response = await request.get();

        return response.Response as IDestinyProfileResponse;
    }

    static async getPostGameCarnageReport(activityId: number): Promise<IDestinyPostGameCarnageReportData> {
        const request = new Request(`/Destiny2/Stats/PostGameCarnageReport/${activityId}/`);
        const response = await request.get();

        return response.Response as IDestinyPostGameCarnageReportData;
    }

    static async getDestinyManifest() : Promise<IDestinyManifest> {
        const request = new Request(`/Destiny2/Manifest/`);
        const response = await request.get<IDestinyManifest>();

        return response.Response;
    }
}