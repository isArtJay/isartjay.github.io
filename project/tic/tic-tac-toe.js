/*
 * @Author: Bian YuJie
 * @Date: 2020-03-31 17:39:45
 * @Last Modified by: Bian YuJie
 * @Last Modified time: 2020-03-31 20:46:45
 */

//  8种胜利条件
var winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
var squareCount = 9; //格子数量
var difficulty = "moron"; //游戏初始难度
var gameOver = false; //游戏状态，游戏是否结束
var squares = document.getElementsByClassName("square"); //获取格子

// -----显示游戏反馈信息，比如：你赢了，你输了-----
var setMessageBox = function(caption) {
  var messageBox = document.getElementById("messageBox");
  messageBox.innerHTML = caption;
};

var findClaimedSquares = function(marker) {
  var claimedSquares = [];
  var value;

  for (var id = 0; id < squareCount; id++) {
    value = document.getElementById(id).innerHTML;
    if (value === marker) {
      claimedSquares.push(id);
    }
  }

  return claimedSquares;
};

// -----重置游戏-----
var resetGame = function() {
  gameOver = false;
  setMessageBox("请选择一个格子");

  // 清除每个格子的内容，将格子的背景色回归到游戏开始状态
  for (var id = 0; id < squareCount; id++) {
    var square = document.getElementById(id);
    square.innerHTML = "";
    square.style.backgroundColor = "rgba(26, 148, 188, 0.8)";
  }
};

// -----检查是否胜利函数，-----
var checkForWinCondition = function(marker) {
  // 如果我们胜利了，将返回一个包含获胜组合的数组。如果输掉游戏返回 false
  var claimedSquares = findClaimedSquares(marker);

  var win = false;
  for (var i = 0; i < winConditions.length; i++) {
    win = winConditions[i].every(
      element => claimedSquares.indexOf(element) > -1
    );
    if (win) {
      win = winConditions[i];
      break;
    }
  }
  return win;
};

// -----AI算法-----
var secureWin = function() {
  return makeMove("O");
};

var preventDefeat = function() {
  return makeMove("X");
};

var makeMove = function(marker) {
  var moveMade = false;
  for (var i = 0; i < winConditions.length; i++) {
    var count = 0;
    for (var j = 0; j < winConditions[i].length; j++) {
      if (marker === document.getElementById(winConditions[i][j]).innerHTML) {
        count++;
      }
    }

    if (count == 2) {
      for (j = 0; j < winConditions[i].length; j++) {
        var square = document.getElementById(winConditions[i][j]);
        if (squareIsOpen(square)) {
          square.innerHTML = "O";
          moveMade = true;
          break;
        }
      }
    }

    if (moveMade) {
      break;
    }
  }
  return moveMade;
};

var opponentMove = function() {
  if (difficulty === "moron") {
    makeMoveAtFirstAvailableSquare();
  } else {
    var moveMade = secureWin();
    if (!moveMade) {
      moveMade = preventDefeat();
      if (!moveMade) {
        var center = document.getElementById(4);
        if (squareIsOpen(center)) {
          center.innerHTML = "O";
        } else {
          makeMoveAtFirstAvailableSquare();
        }
      }
    }
  }
};

var makeMoveAtFirstAvailableSquare = function() {
  for (var id = 0; id < squareCount; id++) {
    square = document.getElementById(id);
    if (squareIsOpen(square)) {
      square.innerHTML = "O";
      break;
    }
  }
};

// -----检查格子是否是被占用状态-----
var squareIsOpen = function(square) {
  return square.innerHTML !== "X" && square.innerHTML !== "O";
};

// -----将获胜格子变为绿色，并设置获胜消息-----
var highlightWinningSquares = function(winningSquares, color) {
  for (var i = 0; i < winningSquares.length; i++) {
    document.getElementById(winningSquares[i]).style.backgroundColor = color;
  }
};

// -----检查是否平局-----
var checkForDraw = function() {
  var draw = true;
  for (var id = 0; id < squareCount; id++) {
    if (squareIsOpen(document.getElementById(id))) {
      draw = false;
      break;
    }
  }
  return draw;
};

// -----选择格子主函数-----
var chooseSquare = function() {
  // 获取到游戏级别
  difficulty = document.getElementById("difficulty").value;

  // 先判断游戏是否结束
  if (!gameOver) {
    // 默认显示给玩家的信息
    setMessageBox("请选择一个格子");

    // 获取到玩家选择的格子的id
    var id = this.getAttribute("id");
    var square = document.getElementById(id);

    // 通过调用 squareIsOpen 函数检查格子是否是被占用状态
    if (squareIsOpen(square)) {
      // 因为这里格子是开放状态的，我们将格子标记设为 “ X ”
      square.innerHTML = "X";

      // 通过调用 checkForWinCondition 函数检查我们是否胜利
      var win = checkForWinCondition("X");
      if (!win) {
        // 如果玩家没有赢得比赛，那游戏继续
        opponentMove();
        var lost = checkForWinCondition("O");
        if (!lost) {
          var draw = checkForDraw();
          if (draw) {
            gameOver = true;
            setMessageBox("平局");
          }
        } else {
          gameOver = true;
          highlightWinningSquares(lost, "rgb(229, 55, 55)");
          setMessageBox("你输了");
        }
      } else {
        gameOver = true;
        highlightWinningSquares(win, "rgb(42, 178, 72)");
        setMessageBox("你赢了");
      }
    } else {
      // 检查格子是否是被占用时，如果格子已经被标记，玩家就不能对格子进行操作，在这里提示他信息。
      setMessageBox("请选择空白格子");
    }
  }
};

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", chooseSquare, false);
}
