import IImagePyramidEntry from './IImagePyramidEntry';
import IGearAssetDataBaseDefinition from './IGearAssetDataBaseDefinition';

export interface IDestinyManifest {
    version: string
    mobileAssetContentPath: string
    mobileGearAssetDataBases: IGearAssetDataBaseDefinition[]
    mobileWorldContentPaths: { [key: string]: string }
    jsonWorldContentPaths: { [key: string]: string }
    jsonWorldComponentContentPaths: { [key: string]: { [key: string]: string } } // TODO: Not documented by bungie, be careful
    mobileClanBannerDatabasePath: string
    mobileGearCDN: { [key: string]: string }
    iconImagePyramidInfo: IImagePyramidEntry[]
}