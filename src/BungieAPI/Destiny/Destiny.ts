import Destiny2 from '../Destiny2/Destiny2';
import BungieAPICredentials from '../BungieAPICredentials';
import {ISupportedDefinitions} from "./Definitions/SupportedDefinitions";

export default class Destiny {
    static async getAllDefinitions(language: string): Promise<ISupportedDefinitions> {
        const manifest = await Destiny2.getDestinyManifest();
        const fetchResponse = await fetch(BungieAPICredentials.bungieRoot + manifest.jsonWorldContentPaths[language]);

        if (!fetchResponse.ok) {
            throw new Error(fetchResponse.statusText);
        }

        return await fetchResponse.json();
    }
}