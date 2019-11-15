import ICoreSetting from './ICoreSetting';
import ICoreSystem from './ICoreSystem';
import IDestiny2CoreSettings from './IDestiny2CoreSettings';
import IEmailSettings from '../../User/IEmailSettings';

export default interface ICoreSettingsConfiguration {
    environment: string
    systems: Map<string, ICoreSystem>
    ignoreReasons: ICoreSetting[]
    forumCategories: ICoreSetting[]
    groupAvatars: ICoreSetting[]
    destinyMembershipTypes: ICoreSetting[]
    recruitmentPlatformTags: ICoreSetting[]
    recruitmentMiscTags: ICoreSetting[]
    recruitmentActivities: ICoreSetting[]
    userContentLocales: ICoreSetting[]
    systemContentLocales: ICoreSetting[]
    clanBannerDecals: ICoreSetting[]
    clanBannerDecalColors: ICoreSetting[]
    clanBannerGonfalons: ICoreSetting[]
    clanBannerGonfalonColors: ICoreSetting[]
    clanBannerGonfalonDetails: ICoreSetting[]
    clanBannerGonfalonDetailColors: ICoreSetting[]
    clanBannerStandards: ICoreSetting[]
    destiny2CoreSettings: IDestiny2CoreSettings[]
    emailSettings: IEmailSettings
}