import {onSnake, expandSnake} from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 2

export function update(){
    //update the food
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
    
}

export function draw(gameBoard){
    //to draw the food


        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classlist.add('food')
        gameBoard.appendChild(foodElement)
 
}

function getRandomFoodPosition(){
    //make the food appear somewhere on the grid that wont be on the snake
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}