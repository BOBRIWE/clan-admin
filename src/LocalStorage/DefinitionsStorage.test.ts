import Destiny from "../BungieAPI/Destiny/Destiny";
import DefinitionsStorage from "./DefinitionsStorage";


describe('DefinitionsStorage', () => {
    it('should save and retrieve definitions', async () => {
        jest.setTimeout(30000);

        // @ts-ignore
        window.indexedDB = require("fake-indexeddb");

        const definitions = await Destiny.getAllDefinitions('ru');
        await DefinitionsStorage.update(definitions);

        const gotDefinitions = await DefinitionsStorage.getDefinitions();

        expect(gotDefinitions).toEqual(definitions);
    });
});