/**
 * Function that converts minutes to seconds
 * @param hours - Amount of hours that is to be converted to seconds
 * @var seconds - Variable for the amount of seconds since its being reused
 * @returns Hours input times 60
 */

let seconds = 60

export const hoursToSeconds = (hours: number): number => {
  return Math.floor(hours * seconds * seconds)
}
