import IResponse from '../IResponse';
import ICoreSettingsConfiguration from './Models/ICoreSettingsConfiguration';
import Request from '../Request';
import IGetGroupsForMemberResponse from '../GroupsV2/IGetGroupsForMemberResponse';

export default class Common {
    static async getCommonSettings(): Promise<ICoreSettingsConfiguration> {
        const request = new Request(`/Settings/`);
        const response = await request.get<ICoreSettingsConfiguration>();

        return response.Response;
    }
}