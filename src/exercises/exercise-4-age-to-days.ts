/**
 * Function that converts ages to days
 * @param age - The amount of ages
 * @returns The converted days from ages, by the amount of days there is for one age
 */
export const ageToDays = (age: number): number => {
  return age * 365
}
