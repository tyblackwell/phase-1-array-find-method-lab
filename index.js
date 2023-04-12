// code your solution here
function superbowlWin(arr) {
  const win = arr.find(game => game.result === "W");
  return win ? win.year : undefined;
}