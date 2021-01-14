/**
 * Function that takes two boolean values and return true or false
 * @param valueOne - The first boolean parameter
 * @param valueTwo - The second boolean parameter
 * @returns Returns true, if both booleans are true, otherwise return false
 */

export const andOperator = (valueOne: boolean, valueTwo: boolean): boolean => {
  if (valueOne && valueTwo) {
    return true
  } else {
    return false
  }
}
