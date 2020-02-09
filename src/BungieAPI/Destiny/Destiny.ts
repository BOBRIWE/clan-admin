import Destiny2 from '../Destiny2/Destiny2';
import BungieAPICredentials from '../BungieAPICredentials';
import {ISupportedDefinitions} from "./Definitions/SupportedDefinitions";
import Cacher from '../Cacher';

export default class Destiny {
    static async getAllDefinitions(language: string): Promise<ISupportedDefinitions> {
        const manifest = await Destiny2.getDestinyManifest();
        const requestString = BungieAPICredentials.bungieRoot + manifest.jsonWorldContentPaths[language];

        const cacher = new Cacher();
        const defString = await cacher.get<ISupportedDefinitions>(requestString);

        if (defString === undefined) {
            const fetchResponse = await fetch(requestString);

            if (!fetchResponse.ok) {
                throw new Error(fetchResponse.statusText);
            }



            const json = await fetchResponse.json() as ISupportedDefinitions;

            const cutDefs: ISupportedDefinitions = {
                DestinyActivityDefinition: json.DestinyActivityDefinition,
                DestinyActivityTypeDefinition: json.DestinyActivityTypeDefinition
            };

            await cacher.save<ISupportedDefinitions>(requestString, cutDefs);

            return cutDefs;
        }


        return defString as unknown as ISupportedDefinitions;
    }
}