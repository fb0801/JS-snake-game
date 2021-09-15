


let food = {x: 10, y: 1}
const EXPANSION_RATE = 1

export function update(){
    //update the food
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = {x:20, y: 10}
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