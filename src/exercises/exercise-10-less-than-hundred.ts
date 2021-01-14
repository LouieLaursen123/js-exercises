/**
 * Function that converts minutes to seconds
 * @param minutes - Amount of minutes that is to be converted to seconds
 * @returns minutes input times 60
 */

export const lessThanHundred = (sumOne: number, sumTwo: number): boolean => {
  return sumOne + sumTwo > 100 ? false : true
}
