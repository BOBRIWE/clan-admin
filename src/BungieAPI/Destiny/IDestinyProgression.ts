import IDestinyProgressionResetEntry from './IDestinyProgressionResetEntry';

export default interface IDestinyProgression {
    progressionHash: number
    dailyProgress: number
    dailyLimit: number
    weeklyProgress: number
    weeklyLimit: number
    currentProgress: number
    level: number
    levelCap: number
    stepIndex: number
    progressToNextLevel: number
    nextLevelAt: number
    currentResetCount: number
    seasonResets: IDestinyProgressionResetEntry
    rewardItemStates: number[]
}