import { update as updateSnake, draw as drawSnake, SNAKE_SPEED} from './snake.js'

let lastRenderTime =0
const gameBoard = document.getElementById('game-board')



function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRendor = (currentTime - lastRenderTime) / 1000
     if (secondsSinceLastRendor < 1 / SNAKE_SPEED) return


     lastRenderTime = currentTime


     update()
     draw()
    }
  
  

window.requestAnimationFrame(main)


function update(){
    //update food and snake
    updateSnake()
}

function draw(){
//draw the snake and food
    drawSnake(gameBoard)


}