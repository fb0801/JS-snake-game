import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 1

const snakeBody =[
    {x: 11, y: 11},
    {x: 11, y: 11},
    {x: 12, y: 11}
]

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