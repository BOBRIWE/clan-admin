import IGroupFeatures from './IGroupFeatures';
import IGroupV2ClanInfoAndInvestment from './IGroupV2ClanInfoAndInvestment';

export default interface IGroupV2 {
    groupId: number;
    name: string;
    groupType: number;
    membershipIdCreated: number;
    creationDate: number;
    modificationDate: number;
    about: string;
    tags: string[];
    memberCount: string;
    isPublic: boolean;
    isPublicTopicAdminOnly: boolean;
    motto: string;
    allowChat: boolean;
    isDefaultPostPublic: boolean;
    chatSecurity: number;
    locale: string;
    avatarImageIndex: number;
    homepage: number;
    membershipOption: number;
    defaultPublicity: number;
    theme: string;
    bannerPath: string;
    avatarPath: string;
    conversationId: number;
    enableInvitationMessagingForAdmins: boolean;
    banExpireDate: Date;
    features: IGroupFeatures
    clanInfo: IGroupV2ClanInfoAndInvestment
}