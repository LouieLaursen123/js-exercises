/**
 * Function that calculates power
 * @param voltage - The amount of voltage
 * @param currentPower - The amount of current power
 * @returns The calculated power
 */

export const powerCalculator = (
  voltage: number,
  currentPower: number
): number => {
  return voltage * currentPower
}
