import GroupsV2 from './GroupsV2/GroupsV2';

it('should fetch clan', async () => {
    let clan = await GroupsV2.getClan(3990079);

    expect(clan).not.toBe(undefined);
});

it('should fetch clan members', async () => {
    let clanMembers = await GroupsV2.getClanMembers(3990079);

    expect(clanMembers).not.toBe(undefined);
});