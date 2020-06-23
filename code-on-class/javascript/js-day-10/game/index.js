var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

var imgPlayer = document.createElement("img");
imgPlayer.src = "../media/player.png";
var imgTrap = document.createElement("img");
imgTrap.src = "../media/trap.png";
var imgCoin = document.createElement("img");
imgCoin.src = "../media/coin.png";

var screenWidth = 500; // chiều dài px của map
var screenHeight = 500;
var cellWidth = 50; // chiều dài px của 1 ô trong map
var cellHeight = 50;
var lengthWidth = screenWidth / cellWidth; // tổng số ô trong map
var lengthHeight = screenHeight / cellHeight;

var map = [
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, -1, 0, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, -1, 0, 0, 0, 0],
  [0, 0, 0, -1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]; // 1 là đại diện cho vị trí nhân vật, -1 là đại diện cho trap

var removeCoin = (x, y) => {
  map[x][y] = 0;
};

// vị trí nhân vật bắt đầu xuất hiện
var playerXIndex = 0;
var playerYIndex = 0;

for (let y = 0; y < lengthHeight; y++) {
  for (let x = 0; x < lengthWidth; x++) {
    if (map[y][x] == 1) {
      playerXIndex = x;
      playerYIndex = y;
      break; // nếu map[y][x] == 1 thì nhân vật xuất hiện ở đó
    }
  }
}

// function vẽ coin và trap trên map
var drawMap = () => {
  for (let y = 0; y < lengthHeight; y++) {
    for (let x = 0; x < lengthWidth; x++) {
      if (map[y][x] == -1) {
        context.drawImage(
          imgTrap,
          x * cellWidth,
          y * cellHeight,
          cellWidth,
          cellHeight
        );
      }
      if (map[y][x] == 2) {
        context.drawImage(
          imgCoin,
          x * cellWidth,
          y * cellHeight,
          cellWidth,
          cellHeight
        );
      }
    }
  }
};

var player = {
  ctx: context,
  x: playerXIndex * cellWidth,
  y: playerYIndex * cellHeight,
  width: 50,
  height: 50,
  img: imgPlayer,
  coinCollect: 0,
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  },
  moveRight() {
    if (this.x < screenWidth - cellWidth) {
      this.x += cellWidth;
      this.checkWin()
    }
  },
  moveLeft() {
    if (this.x > 0) {
      this.x -= cellWidth;
      this.checkWin()
    }
  },
  moveTop() {
    if (this.y > 0) {
      this.y -= cellHeight;
      this.checkWin()
    }
  },
  moveDown() {
    if (this.y < screenHeight - cellHeight) {
      this.y += cellHeight;
      this.checkWin()
    }
  },
  checkWin() {
    var xIndex = this.x / cellWidth;
    var yIndex = this.y / cellHeight;
    if(map[yIndex][xIndex] == 2){
      this.coinCollect++;
      removeCoin(yIndex, xIndex);
    }
  },
};

var clearScreen = (ctx) => {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, screenWidth, screenHeight);
};

window.onload = () => {
  // context.drawImage(
  //   player.img,
  //   player.x,
  //   player.y,
  //   player.width,
  //   player.height
  // );
  player.draw();
  // setInterval(() => {
  //   clearScreen(context);
  //   // player.x += 30;
  //   // player.y += 30;
  //   player.moveRight();
  //   player.draw();
  // }, 1000);
  setInterval(() => {
    clearScreen(context);
    player.draw();
    drawMap();
  }, 1000); // fps luc nay la 1000
};

window.addEventListener("keydown", (e) => {
  // console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
      // console.log("Arrow left");
      // clearScreen(context);
      player.moveLeft();
      // player.draw();
      break;
    case 38:
      // console.log("Arrow top");
      // clearScreen(context);
      player.moveTop();
      // player.draw();
      break;
    case 39:
      // console.log("Arrow right");
      // clearScreen(context);
      player.moveRight();
      // player.draw();
      break;
    case 40:
      // console.log("Arrow down");
      // clearScreen(context);
      player.moveDown();
      // player.draw();
      break;
  }
});
