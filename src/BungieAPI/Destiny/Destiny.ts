import Destiny2 from '../Destiny2/Destiny2';
import SupportedDefinitions from './Definitions/SupportedDefinitions';
import BungieAPICredentials from '../BungieAPICredentials';

export default class Destiny {
    static async getDefinition<TDefinition>(definition: SupportedDefinitions, language: string): Promise<TDefinition> {
        const manifest = await Destiny2.getDestinyManifest();

        const fetchResponse = await fetch(BungieAPICredentials.bungieRoot + manifest.jsonWorldComponentContentPaths[language][definition]);

        if (!fetchResponse.ok) {
            throw new Error(fetchResponse.statusText);
        }

        return await fetchResponse.json();
    }

    static async getAllDefinitions(language: string): Promise<string> {
        const manifest = await Destiny2.getDestinyManifest();

        const fetchResponse = await fetch(BungieAPICredentials.bungieRoot + manifest.jsonWorldContentPaths[language]);

        if (!fetchResponse.ok) {
            throw new Error(fetchResponse.statusText);
        }

        return await fetchResponse.json();
    }
}