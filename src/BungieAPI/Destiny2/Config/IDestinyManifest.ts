import IImagePyramidEntry from './IImagePyramidEntry';
import IGearAssetDataBaseDefinition from './IGearAssetDataBaseDefinition';

export interface IDestinyManifest {
    version: string
    mobileAssetContentPath: string
    mobileGearAssetDataBases: IGearAssetDataBaseDefinition[]
    mobileWorldContentPaths: string[]
    jsonWorldContentPaths: string[]
    mobileClanBannerDatabasePath: string
    mobileGearCDN: string[]
    iconImagePyramidInfo: IImagePyramidEntry[]
}