let disc4 = document.getElementById("disc4");

let disc3 = document.getElementById("disc3");

let disc2 = document.getElementById("disc2");

let disc1 = document.getElementById("disc1");

document.getElementById("tower1").addEventListener("click", whichTower);
document.getElementById("tower2").addEventListener("click", whichTower);
document.getElementById("tower3").addEventListener("click", whichTower);

let clickNumber = 1;

function whichTower() {
  let tower = event.currentTarget;
  console.log(tower);
  let child = tower.childElementCount;
  console.log(child);
  if (clickNumber === 2) {
    console.log(tower.lastElementChild);
    console.log(topDisk.offsetWidth);
    if (tower.lastElementChild === null) {
      tower.appendChild(topDisk);
      topDisk.classList.remove("rotate");
      clickNumber = 1;
    } else if (topDisk.offsetWidth > tower.lastElementChild.offsetWidth) {
      topDisk.classList.remove("rotate");
      clickNumber = 1;
    } else {
      tower.appendChild(topDisk);
      topDisk.classList.remove("rotate");
      clickNumber = 1;
      checkWinner();
    }
  } else if (clickNumber === 1) {
    topDisk = tower.lastElementChild;
    topDisk.classList.add("rotate");
    clickNumber = 2;
  }
}
function checkWinner() {
  console.log(document.getElementById("tower3").lastElementChild);
  let lasttower = document.getElementById("tower3");
  if (lasttower.childElementCount === 4) alert("You Won!");
}
