export const SNAKE_SPEED = 1

const snakeBody =[
    {x: 11, y: 11},
    {x: 11, y: 11},
    {x: 12, y: 11}
]

export function update(){
    //update the snake
    //moving the snakebody
    for(let i = snakeBody.length - 2; i >=0; i--){
        snakeBody[i + 1] ={ ...snakeBody[i] }
    }

    snakeBody[0].x +=1
    snakeBody[0].y +=0
}

export function draw(gameBoard){
    //to draw the snake
    snakeBody.forEach(segment =>{

        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y
        snakeElement.classlist.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}