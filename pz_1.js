const rectangle = {
    topLeft: {
        x: 0, 
        y: 0,
    },

    bottomRight: {
        x: 10, 
        y: 15,
    }
}

// --------------------------------------------------------------------------------

function getInfoAboutRect(rect){
    console.log(rect.topLeft.x + rect.topLeft.y)
    console.log(rect.bottomRight.x + rect.bottomRight.y)
}

// --------------------------------------------------------------------------------

function getWidth(rect){
    console.log(rect.bottomRight.x - rect.topLeft.x) 
}

// --------------------------------------------------------------------------------

function getHeigh(rect){
    console.log(rect.bottomRight.y - rect.topLeft.y) 
}

// --------------------------------------------------------------------------------

function getArea(rect){
    console.log(rect.getHeigh * rect.getWidth)
}

// --------------------------------------------------------------------------------

function gerPerimetr(rect){
    console.log(2 * (rect.getHeigh + rect.getWidth))
}

// --------------------------------------------------------------------------------

function changeHeigh(rect, newHeigh){
    console.log(rect.topLeft.y += newHeigh)
}

// --------------------------------------------------------------------------------

function changeWidth(rect, newWidth){
    console.log(rect.topLeft.x += newHeigh)
}

// --------------------------------------------------------------------------------

function moveX(rect, move){
    console.log(rect.topLeft.x += move)
    console.log(rect.bottomRight.x += move)
}

// --------------------------------------------------------------------------------

function moveY(rect, move){
    console.log(rect.topLeft.y += move)
    console.log(rect.bottomRight.y += move)
}

// --------------------------------------------------------------------------------

function moveXY(rect, moveX, moveY){
    rect.topLeft.x += moveX;
    rect.bottomRight.x += moveX;
    rect.topLeft.y += moveY;
    rect.bottomRight.y += moveY
}

// --------------------------------------------------------------------------------

function isPointInRect(rect, x, y){
    if(x >= rect.topLeft.x && x <= rect.bottomRight.x && y <= rect.topLeft.y && y <= bottomRight.y){
        return true
    } else{
        return false
    }
}

// --------------------------------------------------------------------------------