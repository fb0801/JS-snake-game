import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 5

const snakeBody =[
    {x: 11, y: 11}]
let newSegments = 0

export function update(){
    //update the snake
    //moving the snakebody

    const inputDirection = getInputDirection()
    for(let i = snakeBody.length - 2; i >=0; i--){
        snakeBody[i + 1] ={ ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard){
    //to draw the snake
    snakeBody.forEach(segment =>{

        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classlist.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    newSegments +=amount
}

export function onSnake(position){
    //if the position is on the snake
    return snakeBody.some(segment => {
    return equalPositions(segment, position)       
    })
}


function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}