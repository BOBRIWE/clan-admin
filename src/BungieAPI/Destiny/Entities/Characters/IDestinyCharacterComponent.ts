import DestinyGender from '../../Responses/DestinyGender';
import DestinyRace from '../../DestinyRace';
import BungieMembershipType from '../../../BungieMembershipType';
import DestinyClass from '../../DestinyClass';
import IDestinyColor from '../../Misc/IDestinyColor';
import IDestinyProgression from '../../IDestinyProgression';

export default interface IDestinyCharacterComponent {
    membershipId: number
    membershipType: BungieMembershipType
    characterId: number
    dateLastPlayed: string
    minutesPlayedThisSession: number
    minutesPlayedTotal: number
    light: number
    stats: number[]
    raceHash: number
    genderHash: number
    classHash: number
    raceType: DestinyRace
    classType: DestinyClass
    genderType: DestinyGender
    emblemPath: string
    emblemBackgroundPath: string
    emblemHash: number
    emblemColor: IDestinyColor
    levelProgression: IDestinyProgression
    baseCharacterLevel: number
    percentToNextLevel: number
    titleRecordHash: number
}