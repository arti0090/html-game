function updateGameArea() {
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    myObstacle.y += 2;
    if (myObstacle.y > 300)
    {
        myObstacle.y = 0;
    }

    if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -5; }
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 5; }
    if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -5; }
    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 5; }
    myObstacle.update();
    myGamePiece.newPos();
    myGamePiece.update();
}