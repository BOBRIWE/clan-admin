import BungieAPI from './BungieAPI';

it('should fetch', async () => {
    let api = new BungieAPI();
    let response = await api.getClan();
    let json = await response.json();

    console.log(json);
});

it('should fetch members', async () => {
    let api = new BungieAPI();
    let response = await api.getClanMembers(3990079);
    let json = await response.json();

    console.log(json);
});