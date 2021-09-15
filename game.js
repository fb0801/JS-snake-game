
let lastRenderTime =0
const SNAKE_SPEED = 1

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRendor = (currentTime - lastRenderTime) / 1000
     if (secondsSinceLastRendor < 1 / SNAKE_SPEED) return



     console.log('Render')
     lastRenderTime = currentTime
    }
  
  

window.requestAnimationFrame(main)