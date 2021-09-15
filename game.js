import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js'
import { update as updateFood, draw as drawFood} from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime =0
const gameBoard = document.getElementById('game-board')
let gameOver = false


function main(currentTime){

if (gameOver){
    //allows us to restart the game after it comes to a end
    if (confirm('you lost. Press ok to restart')){
        window.location = '/'
    }
    return 
}

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
    updateFood()
    checkDeath()
}

function draw(){
//draw the snake and food

gameBoard.innerHTML = ''//clear our view of the snake previous body
    drawSnake(gameBoard)
    drawFood(gameBoard)

}


function checkDeath(){
    //to end the game if outside or hit its self

    gameOver = outsideGrid(getSnakeHead) || snakeIntersection()
}