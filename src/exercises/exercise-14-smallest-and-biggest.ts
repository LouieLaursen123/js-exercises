/**
 * Function that finds the minimum number and the maximum number
 * @returns A new array with only the minimum number and the maximum number
 */

const numbersList = [1, 3, 7, 11, 21]

export const minMax = () => {
  return [Math.min(...numbersList), Math.max(...numbersList)]
}
