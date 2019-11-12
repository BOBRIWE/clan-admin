import GroupsV2 from './GroupsV2/GroupsV2';
import User from './User/User';
import Destiny2 from './Destiny2/Destiny2';
import BungieMembershipType from './BungieMembershipType';
import DestinyComponentType from './Destiny/DestinyComponentType';
import ActivityModeType from './Destiny/Definitions/ActivityModeType';
import Request from './Request';

it('should fetch clan', async () => {
    let clan = await GroupsV2.getClan(3990079);

    expect(clan).not.toBe(undefined);
});

it('should fetch clan members', async () => {
    let clanMembers = await GroupsV2.getClanMembers(3990079);

    expect(clanMembers).not.toBe(undefined);
});

it('should fetch user general data', async () => {
    let user  = await User.getBungieNetUserById(18454839);

    expect(user).not.toBe(undefined);
});

it('should fetch linked accounts', async () => {
    let userAccounts = await Destiny2.getLinkedProfiles(18454839, BungieMembershipType.All);

    expect(userAccounts).not.toBe(undefined);
});

it('should fetch activity history', async () => {
    let userAccounts = await Destiny2.getLinkedProfiles(18454839, BungieMembershipType.All);
    let profile = await Destiny2.getProfile(userAccounts.profiles[0].membershipId, DestinyComponentType.Profiles, BungieMembershipType.TigerSteam);
    let history = await Destiny2.getActivityHistory(userAccounts.profiles[0].membershipId, profile.profile.data.characterIds[0], ActivityModeType.Raid);

    expect(history).not.toBe(undefined);
});

it('should fetch team stats', async () => {
    let userAccounts = await Destiny2.getLinkedProfiles(18454839, BungieMembershipType.All);
    let profile = await Destiny2.getProfile(userAccounts.profiles[0].membershipId, DestinyComponentType.Profiles, BungieMembershipType.TigerSteam);
    let history = await Destiny2.getActivityHistory(userAccounts.profiles[0].membershipId, profile.profile.data.characterIds[0], ActivityModeType.Raid);
    let activityStats = await Destiny2.getPostGameCarnageReport(history.activities[0].activityDetails.instanceId);

    expect(activityStats).not.toBe(undefined);
});

it('should fetch banned', async () => {
    let banned = await GroupsV2.getBannedMembersOfGroup(3990079);

    expect(banned).not.toBe(undefined);
});

it('should get access token', async () => {
    let token = await Request.getAccessToken();

    expect(token).not.toBe(undefined);
});

// https://localhost:3000/?code=8b126e045f766a35b13fea3c13a59b00&state=6i0mkLx79Hp91nzWVeHrzHG4