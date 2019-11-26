import GroupsV2 from './GroupsV2/GroupsV2';
import User from './User/User';
import Destiny2 from './Destiny2/Destiny2';
import BungieMembershipType from './BungieMembershipType';
import DestinyComponentType from './Destiny/DestinyComponentType';
import ActivityModeType from './Destiny/Definitions/ActivityModeType';
import Request from './Request';
import Common from './Common/Common';
import ClanBanner from '../ClanBanner';
import Destiny from './Destiny/Destiny';

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
    jest.setTimeout(30000);

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

it('should get common settings', async () => {
    let settings = await Common.getCommonSettings();

    expect(settings).not.toBe(undefined);
});

it('should get destiny manifest', async () => {
    let manifest = await Destiny2.getDestinyManifest();

    expect(manifest).not.toBe(undefined);
});

it('should get ru definitions', async () => {
    const activity = (await Destiny.getAllDefinitions('ru')).DestinyActivityDefinition;

    expect(activity).not.toBe(undefined);
});

it('should get ru all definitions', async () => {
    jest.setTimeout(30000);
    const definitions = await Destiny.getAllDefinitions('ru');

    expect(definitions).not.toBe(undefined);
});

it('should get specific raid data', async () => {
    jest.setTimeout(30000);
    const activity = (await Destiny.getAllDefinitions('ru')).DestinyActivityDefinition;
    let userAccounts = await Destiny2.getLinkedProfiles(18454839, BungieMembershipType.All);
    let profile = await Destiny2.getProfile(userAccounts.profiles[0].membershipId, DestinyComponentType.Profiles, BungieMembershipType.TigerSteam);
    let history = await Destiny2.getActivityHistory(userAccounts.profiles[0].membershipId, profile.profile.data.characterIds[0], ActivityModeType.Raid);

    let act = activity[history.activities[0].activityDetails.referenceId];

    const activityTypes = (await Destiny.getAllDefinitions('ru')).DestinyActivityTypeDefinition;

    const actType = activityTypes[act.activityTypeHash];

    expect(actType).not.toBe(undefined);
    let raids = [];

    for (let a in activity) {
        if (activity[a].directActivityModeType === 4 && activity[a].tier === 0) {
            raids.push(activity[a]);
        }
    }

    console.log(raids);

    expect(raids).not.toBe(undefined);
});

it('should return database data', async () => {
    jest.setTimeout(30000);
    const clan = await GroupsV2.getClan(3990079);
    const cb = new ClanBanner(clan.detail.clanInfo.clanBannerData);

    const data = await cb.render();

    expect(data).not.toBe(undefined);
});