const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const background1 = document.getElementById("background1");
const background2 = document.getElementById("background2");

let backgroundPosition = 0;
let gameOver = false;

const player = {
  x: 50,
  y: canvas.height - 50,
  size: 20,
  speed: 5,
  gravity: 1,
  velocity: 0,
  jumpHeight: 10,
  grounded: true,
};

const ghost = {
  x: 300,
  y: canvas.height - 50,
  size: 20,
  speed: 3,
};

const obstacles = [
  { x: 200, y: canvas.height - 60, width: 10, height: 10 },
  { x: 400, y: canvas.height - 60, width: 10, height: 10 },
];

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && player.grounded) {
    player.velocity = -player.jumpHeight;
    player.grounded = false;
  }
});

function drawPlayer() {
  ctx.fillStyle = "#f00";
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

function drawGhost() {
  ctx.fillStyle = "#0f0";
  ctx.fillRect(ghost.x, ghost.y, ghost.size, ghost.size);
}

function drawObstacles() {
  ctx.fillStyle = "#00f";
  obstacles.forEach((obstacle) => {
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  });
}

function drawBackground() {
  background1.style.display = "none";
  background2.style.display = "block";
  background2.style.left = backgroundPosition + "px";
  background1.style.display = "block";
  background1.style.left = backgroundPosition + canvas.width + "px";
}

function updateGhostPosition() {
  if (player.x + player.size > ghost.x) {
    ghost.x += ghost.speed;
  }
}

function updatePlayerPosition() {
  player.velocity += player.gravity;
  player.y += player.velocity;

  if (player.y > canvas.height - 50) {
    player.y = canvas.height - 50;
    player.grounded = true;
  }

  obstacles.forEach((obstacle) => {
    if (
      player.x < obstacle.x + obstacle.width &&
      player.x + player.size > obstacle.x &&
      player.y < obstacle.y + obstacle.height &&
      player.y + player.size > obstacle.y
    ) {
      gameOver = true;
    }
  });
}

function updateBackground() {
  backgroundPosition -= player.speed;

  if (-backgroundPosition > canvas.width) {
    backgroundPosition = 0;
  }
}

function checkGameOver() {
  if (
    player.x < ghost.x + ghost.size &&
    player.x + player.size > ghost.x &&
    player.y < ghost.y + ghost.size &&
    player.y + player.size > ghost.y
  ) {
    gameOver = true;
  }
}

function gameLoop() {
  if (!gameOver) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    updateGhostPosition();
    updatePlayerPosition();
    updateBackground();
    checkGameOver();

    drawBackground();
    drawGhost();
    drawPlayer();
    drawObstacles();

    requestAnimationFrame(gameLoop);
  } else {
    alert("게임 종료");
  }
}

gameLoop();
