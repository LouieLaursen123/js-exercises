//Exercise 1 import
import { minutesToSeconds } from './exercises/exercise-1-minutes-to-seconds'
//Exercise 2 import
import { incrementNumber } from './exercises/exercise-2-increment-number'
//Exercise 3 import
import { triangleArea } from './exercises/exercise-3-triangle'
//Exercise 4 import
import { ageToDays } from './exercises/exercise-4-age-to-days'
//Exercise 6 import
import { getFirstIndex } from './exercises/exercise-6-first-element-array'

//Array for exercise 6
const getFirstValue = [90, 50, 7, 100, 150]
const [firstValue] = getFirstValue

//Exervise 1
console.log(minutesToSeconds(10))
//Exercise 2
console.log(incrementNumber(0))
//Exercise 3
console.log(triangleArea(3, 5))
//Exercise 4
console.log(ageToDays(20))
//Exercise 6
console.log(getFirstIndex(firstValue))
