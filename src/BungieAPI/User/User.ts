import IGeneralUser from './IGeneralUser';
import Request from '../Request';

export default class User {
    static async getBungieNetUserById(userId: number): Promise<IGeneralUser> {
        const request = new Request(`/User/GetBungieNetUserById/${userId}/`);
        const response = await request.get<IGeneralUser>();

        return response.Response;
    }
}