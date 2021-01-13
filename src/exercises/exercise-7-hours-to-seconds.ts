/**
 * Function that converts minutes to seconds
 * @param minutes - Amount of minutes that is to be converted to seconds
 * @returns minutes input times 60
 */

let seconds = 60

export const hoursToSeconds = (hours: number): number => {
  return Math.floor(hours * seconds * seconds)
}
