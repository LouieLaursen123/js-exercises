/**
 * Function sorts the drinks in a ascending order by price
 * @returns A new array with the drinks having a ascending order by price
 */

const drinks = [
  { name: 'lemonade', price: 50 },
  { name: 'lime', price: 10 },
  { name: 'cola', price: 25 },
]

export const sortDrinksByPrice = () => {
  const sortedPrices = drinks.sort(
    (cheapest, expensive) => cheapest.price - expensive.price
  )
  return sortedPrices
}
