let term = 0;
let tagi = document.querySelectorAll("i");
let item3 = {
  item11: [],
  king: [],
};
let bob = document.getElementById("000");
let tot = document.getElementById("fff");
function kingfind() {
  item3.king = [];
  tagi.forEach((i) => {
    if (i.className.includes("king")) {
      item3.king.push(i);
    }
  });
}
kingfind();
// color
function coloring() {
  tagi.forEach((item) => {
    getid = item.id;
    arr = Array.from(getid);
    rdif = eval(arr.shift());
    ston = eval(arr.pop());
    a = ston + rdif;
    if (a % 2 == 0) {
      item.style.backgroundColor = " rgb(187, 137, 44)";
    }
    if (a % 2 == 1) {
      item.style.backgroundColor = "rgb(87, 13, 13)";
    }
  });
}
coloring();
// clear
function clear1() {
  tagi.forEach((i) => {
    i.classList.remove("chose");
  });
  tagi.forEach((i) => {
    i.classList.remove("kill");
  });
  tagi.forEach((i) => {
    i.classList.remove("move");
  });
  tagi.forEach((i) => {
    i.classList.remove("freind");
  });
  tagi.forEach((i) => {
    i.classList.remove("updat");
  });
}
// color find
function colorfind(item) {
  if (item.className.includes("qa")) {
    color = "qa";
    return color;
  } else if (item.className.includes("qb")) {
    color = "qa";
    return color;
  } else {
    color = "";
    return color;
  }
}
// search
function search(rr, ss) {
  id = rr * 10 + ss;
  macan = document.getElementById(id);
  return macan;
}
// nobat
function nobat() {
  let nobat = document.querySelector("#nobat");
  if (term % 2 == 0) {
    nobat.innerText = "نوبت سفید";
  } else {
    nobat.innerText = "نوبت سیاه";
  }
}
//kody
function kody() {
  if (term % 2 == 0) {
    nob = "qb";
    return nob;
  } else {
    not = "qa";
    return not;
  }
}
//nokhoddy
function nokhody() {
  if (term % 2 == 0) {
    nob = "qa";
    return nob;
  } else {
    not = "qb";
    return not;
  }
}
//win
function win() {
  if (item3.king.length == 1) {
    let nobat = document.querySelector("#nobat");
    if (term % 2 == 1) {
      nobat.innerText = "سفید برد";
      tagi.forEach((item) => {
        item.removeEventListener("click", chose);
      });
    } else {
      nobat.innerText = "سیاه برد";
      tagi.forEach((item) => {
        item.removeEventListener("click", chose);
      });
    }
  }
}
//move pis
function move00(newpis) {
  item3.item11[0].className = "fas box";
  if (term % 2 == 0) {
    bob.style.visibility = "visible";
    bob.addEventListener(
      "click",
      (e) => {
        newpis.target.className = `fas box qb ${e.target.classList[3]} `;
        bob.style.visibility = "hidden";
        clear1();
        term++;
        move();
        nobat();
        kingfind();
        win();
      },
      { once: true }
    );
  } else {
    tot.style.visibility = "visible";
    tot.addEventListener(
      "click",
      (e) => {
        newpis.target.className = `fas box qa ${e.target.classList[3]} `;
        tot.style.visibility = "hidden";
        clear1();
        term++;
        move();
        nobat();
        kingfind();
        win();
      },
      { once: true }
    );
  }
}
function move0(e) {
  clear1();
  move();
  nobat();
  kingfind();
  win();
}
function move1(e) {
  e.target.className = item3.item11[0].className;
  item3.item11[0].className = "fas box";
  clear1();
  term++;
  move();
  nobat();
  kingfind();
  win();
}
function move2(e) {
  e.target.className = item3.item11[0].className;
  item3.item11[0].className = "fas box";
  clear1();
  term++;
  move();
  nobat();
  kingfind();
  win();
}
//addEventListener
function move(item) {
  item3.item11 = [];
  item3.item11.push(item);
  tagi.forEach((hadaf) => {
    if (hadaf.className.includes("kill")) {
      hadaf.addEventListener("click", move2, { once: true });
    } else {
      hadaf.removeEventListener("click", move2, { once: true });
    }
    if (hadaf.className.includes("freind")) {
      hadaf.addEventListener("click", move0, { once: true });
    }
    if (hadaf.className.includes("move")) {
      hadaf.addEventListener("click", move1, { once: true });
    } else {
      hadaf.removeEventListener("click", move1, { once: true });
    }
    if (hadaf.className.includes("updat")) {
      hadaf.addEventListener("click", move00, { once: true });
    } else {
      hadaf.removeEventListener("click", move00, { once: true });
    }
  });
}
// chose
function chose(e) {
  if (term % 2 == 0 && e.target.className.includes("qb")) {
    clear1();
    move(e.target);
    e.target.classList.add("chose");
    //color = colorfind(e.target);
    option(e.target);
    move(e.target);
  } else if (term % 2 == 1 && e.target.className.includes("qa")) {
    clear1();
    move(e.target);
    e.target.classList.add("chose");
    // color = colorfind(e.target);
    option(e.target);
    move(e.target);
  } else if (e.target.classList.length <= 2) {
    clear1();
    move();
  }
}
tagi.forEach((item) => {
  item.addEventListener("click", chose);
});
//option
function option(item) {
  name2 = item.className;
  list1 = item.classList;
  id = item.id;
  arr = Array.from(id);
  rr = eval(arr[0]);
  ss = eval(arr[1]);
  // rook
  if (name2.includes("rook")) {
    for (let i = 1; i < 9; i++) {
      if (
        i < rr &&
        !search(rr - i, ss).className.includes(kody()) &&
        !search(rr - i, ss).className.includes(nokhody())
      ) {
        //bottom
        item2 = search(rr - i, ss);
        item2.classList.add("move");
      } else if (i < rr && search(rr - i, ss).className.includes(kody())) {
        //freind
        item2 = search(rr - i, ss);
        item2.classList.add("freind");
        break;
      } else if (i < rr && search(rr - i, ss).className.includes(kody())) {
        //kill
        item2 = search(rr - i, ss);
        item2.classList.add("kill");
        break;
      } else if (i < rr && search(rr - i, ss).className.includes(nokhody())) {
        //kill
        item2 = search(rr - i, ss);
        item2.classList.add("kill");
        break;
      } else if (i < rr && search(rr - i, ss).className.includes(nokhody())) {
        //freind
        item2 = search(rr - i, ss);
        item2.classList.add("freind");
        break;
      }
    }
    for (let i = 1; i < 9; i++) {
      if (
        rr < i &&
        !search(i, ss).className.includes(kody()) &&
        !search(i, ss).className.includes(nokhody())
      ) {
        //top
        item2 = search(i, ss);
        item2.classList.add("move");
      } else if (rr < i && search(i, ss).className.includes(kody())) {
        //freind
        item2 = search(i, ss);
        item2.classList.add("freind");
        break;
      } else if (rr < i && search(i, ss).className.includes(kody())) {
        //kill
        item2 = search(i, ss);
        item2.classList.add("kill");
        break;
      } else if (rr < i && search(i, ss).className.includes(nokhody())) {
        //kill
        item2 = search(i, ss);
        item2.classList.add("kill");
        break;
      } else if (rr < i && search(i, ss).className.includes(nokhody())) {
        //freind
        item2 = search(i, ss);
        item2.classList.add("freind");
        break;
      }
    }
    for (let i = 1; i < 9; i++) {
      if (
        i < ss &&
        !search(rr, ss - i).className.includes(kody()) &&
        !search(rr, ss - i).className.includes(nokhody())
      ) {
        //right
        item2 = search(rr, ss - i);
        item2.classList.add("move");
      } else if (i < ss && search(rr, ss - i).className.includes(kody())) {
        //freind
        item2 = search(rr, ss - i);
        item2.classList.add("freind");
        break;
      } else if (i < ss && search(rr, ss - i).className.includes(kody())) {
        //kill
        item2 = search(rr, ss - i);
        item2.classList.add("kill");
        break;
      } else if (i < ss && search(rr, ss - i).className.includes(nokhody())) {
        //kill
        item2 = search(rr, ss - i);
        item2.classList.add("kill");
        break;
      } else if (i < ss && search(rr, ss - i).className.includes(nokhody())) {
        //freind
        item2 = search(rr, ss - i);
        item2.classList.add("freind");
        break;
      }
    }
    for (let i = 1; i < 9; i++) {
      if (
        ss < i &&
        !search(rr, i).className.includes(kody()) &&
        !search(rr, i).className.includes(nokhody())
      ) {
        //lift
        item2 = search(rr, i);
        item2.classList.add("move");
      } else if (ss < i && search(rr, i).className.includes(kody())) {
        //freind
        item2 = search(rr, i);
        item2.classList.add("freind");
        break;
      } else if (ss < i && search(rr, i).className.includes(kody())) {
        //kill
        item2 = search(rr, i);
        item2.classList.add("kill");
        break;
      } else if (ss < i && search(rr, i).className.includes(nokhody())) {
        //kill
        item2 = search(rr, i);
        item2.classList.add("kill");
        break;
      } else if (ss < i && search(rr, i).className.includes(nokhody())) {
        //freind
        item2 = search(rr, i);
        item2.classList.add("freind");
        break;
      }
    }
  }
  if (name2.includes("bishop")) {
    for (let i = 1; i < 9; i++) {
      if (
        rr - i > 0 &&
        ss - i > 0 &&
        !search(rr - i, ss - i).className.includes(kody()) &&
        !search(rr - i, ss - i).className.includes(nokhody())
      ) {
        //bottom right
        console.log(ss - i);
        item2 = search(rr - i, ss - i);
        item2.classList.add("move");
      } else if (
        rr - i > 0 &&
        ss - i > 0 &&
        search(rr - i, ss - i).className.includes(kody())
      ) {
        //freind
        item2 = search(rr - i, ss - i);
        item2.classList.add("freind");
        break;
      } else if (
        rr - i > 0 &&
        ss - i > 0 &&
        search(rr - i, ss - i).className.includes(kody())
      ) {
        //kill
        item2 = search(rr - i, ss - i);
        item2.classList.add("kill");
        break;
      } else if (
        rr - i > 0 &&
        ss - i > 0 &&
        search(rr - i, ss - i).className.includes(nokhody())
      ) {
        //kill
        item2 = search(rr - i, ss - i);
        item2.classList.add("kill");
        break;
      } else if (
        rr - i > 0 &&
        ss - i > 0 &&
        search(rr - i, ss - i).className.includes(nokhody())
      ) {
        //freind
        item2 = search(rr - i, ss - ii);
        item2.classList.add("freind");
        break;
      }
    }
    for (let i = 1; i < 9; i++) {
      if (
        rr - i > 0 &&
        ss + i < 9 &&
        !search(rr - i, ss + i).className.includes(kody()) &&
        !search(rr - i, ss + i).className.includes(nokhody())
      ) {
        //bottom lift
        item2 = search(rr - i, ss + i);
        item2.classList.add("move");
      } else if (
        rr - i > 0 &&
        ss + i < 9 &&
        search(rr - i, ss + i).className.includes(kody())
      ) {
        //freind
        item2 = search(rr - i, ss + i);
        item2.classList.add("freind");
        break;
      } else if (
        rr - i > 0 &&
        ss + i < 9 &&
        search(rr - i, ss + i).className.includes(kody())
      ) {
        //kill
        item2 = search(rr - i, ss + i);
        item2.classList.add("kill");
        break;
      } else if (
        rr - i > 0 &&
        ss + i < 9 &&
        search(rr - i, ss + i).className.includes(nokhody())
      ) {
        //kill
        item2 = search(rr - i, ss + i);
        item2.classList.add("kill");
        break;
      } else if (
        rr - i > 0 &&
        ss + i < 9 &&
        search(rr - i, ss + i).className.includes(nokhody())
      ) {
        //freind
        item2 = search(rr - i, ss + i);
        item2.classList.add("freind");
        break;
      }
    }
    for (let i = 1; i < 9; i++) {
      if (
        rr + i < 9 &&
        ss - i > 0 &&
        !search(rr + i, ss - i).className.includes(kody()) &&
        !search(rr + i, ss - i).className.includes(nokhody())
      ) {
        // top right
        //console.log(ss-i)
        item2 = search(rr + i, ss - i);
        item2.classList.add("move");
      } else if (
        rr + i < 9 &&
        ss - i > 0 &&
        search(rr + i, ss - i).className.includes(kody())
      ) {
        //freind
        item2 = search(rr + i, ss - i);
        item2.classList.add("freind");
        break;
      } else if (
        rr + i < 9 &&
        ss - i > 0 &&
        search(rr + i, ss - i).className.includes(kody())
      ) {
        //kill
        item2 = search(rr + i, ss - i);
        item2.classList.add("kill");
        break;
      } else if (
        rr + i < 9 &&
        ss - i > 0 &&
        search(rr + i, ss - i).className.includes(nokhody())
      ) {
        //kill
        item2 = search(rr + i, ss - i);
        item2.classList.add("kill");
        break;
      } else if (
        rr + i < 9 &&
        ss - i > 0 &&
        search(rr + i, ss - i).className.includes(nokhody())
      ) {
        //freind
        item2 = search(rr + i, ss - ii);
        item2.classList.add("freind");
        break;
      }
    }
    for (let i = 1; i < 9; i++) {
      if (
        rr + i < 9 &&
        ss + i < 9 &&
        !search(rr + i, ss + i).className.includes(kody()) &&
        !search(rr + i, ss + i).className.includes(nokhody())
      ) {
        //top left
        item2 = search(rr + i, ss + i);
        item2.classList.add("move");
      } else if (
        rr + i < 9 &&
        ss + i < 9 &&
        search(rr + i, ss + i).className.includes(kody())
      ) {
        //freind
        item2 = search(rr + i, ss + i);
        item2.classList.add("freind");
        break;
      } else if (
        rr + i < 9 &&
        ss + i < 9 &&
        search(rr + i, ss + i).className.includes(kody())
      ) {
        //kill
        item2 = search(rr + i, ss + i);
        item2.classList.add("kill");
        break;
      } else if (
        rr + i < 9 &&
        ss + i < 9 &&
        search(rr + i, ss + i).className.includes(nokhody())
      ) {
        //kill
        item2 = search(rr + i, ss + i);
        item2.classList.add("kill");
        break;
      } else if (
        rr + i < 9 &&
        ss + i < 9 &&
        search(rr + i, ss + i).className.includes(nokhody())
      ) {
        //freind
        item2 = search(rr + i, ss + i);
        item2.classList.add("freind");
        break;
      }
    }
  }
  if (name2.includes("queen")) {
    for (let i = 1; i < 9; i++) {
      if (
        rr - i > 0 &&
        ss - i > 0 &&
        !search(rr - i, ss - i).className.includes(kody()) &&
        !search(rr - i, ss - i).className.includes(nokhody())
      ) {
        //bottom right
        console.log(ss - i);
        item2 = search(rr - i, ss - i);
        item2.classList.add("move");
      } else if (
        rr - i > 0 &&
        ss - i > 0 &&
        search(rr - i, ss - i).className.includes(kody())
      ) {
        //freind
        item2 = search(rr - i, ss - i);
        item2.classList.add("freind");
        break;
      } else if (
        rr - i > 0 &&
        ss - i > 0 &&
        search(rr - i, ss - i).className.includes(kody())
      ) {
        //kill
        item2 = search(rr - i, ss - i);
        item2.classList.add("kill");
        break;
      } else if (
        rr - i > 0 &&
        ss - i > 0 &&
        search(rr - i, ss - i).className.includes(nokhody())
      ) {
        //kill
        item2 = search(rr - i, ss - i);
        item2.classList.add("kill");
        break;
      } else if (
        rr - i > 0 &&
        ss - i > 0 &&
        search(rr - i, ss - i).className.includes(nokhody())
      ) {
        //freind
        item2 = search(rr - i, ss - i);
        item2.classList.add("freind");
        break;
      }
    }
    for (let i = 1; i < 9; i++) {
      if (
        rr - i > 0 &&
        ss + i < 9 &&
        !search(rr - i, ss + i).className.includes(kody()) &&
        !search(rr - i, ss + i).className.includes(nokhody())
      ) {
        //bottom lift
        item2 = search(rr - i, ss + i);
        item2.classList.add("move");
      } else if (
        rr - i > 0 &&
        ss + i < 9 &&
        search(rr - i, ss + i).className.includes(kody())
      ) {
        //freind
        item2 = search(rr - i, ss + i);
        item2.classList.add("freind");
        break;
      } else if (
        rr - i > 0 &&
        ss + i < 9 &&
        search(rr - i, ss + i).className.includes(kody())
      ) {
        //kill
        item2 = search(rr - i, ss + i);
        item2.classList.add("kill");
        break;
      } else if (
        rr - i > 0 &&
        ss + i < 9 &&
        search(rr - i, ss + i).className.includes(nokhody())
      ) {
        //kill
        item2 = search(rr - i, ss + i);
        item2.classList.add("kill");
        break;
      } else if (
        rr - i > 0 &&
        ss + i < 9 &&
        search(rr - i, ss + i).className.includes(nokhody())
      ) {
        //freind
        item2 = search(rr - i, ss + i);
        item2.classList.add("freind");
        break;
      }
    }
    for (let i = 1; i < 9; i++) {
      if (
        rr + i < 9 &&
        ss - i > 0 &&
        !search(rr + i, ss - i).className.includes(kody()) &&
        !search(rr + i, ss - i).className.includes(nokhody())
      ) {
        // top right
        item2 = search(rr + i, ss - i);
        item2.classList.add("move");
      } else if (
        rr + i < 9 &&
        ss - i > 0 &&
        search(rr + i, ss - i).className.includes(kody())
      ) {
        //freind
        item2 = search(rr + i, ss - i);
        item2.classList.add("freind");
        break;
      } else if (
        rr + i < 9 &&
        ss - i > 0 &&
        search(rr + i, ss - i).className.includes(kody())
      ) {
        //kill
        item2 = search(rr + i, ss - i);
        item2.classList.add("kill");
        break;
      } else if (
        rr + i < 9 &&
        ss - i > 0 &&
        search(rr + i, ss - i).className.includes(nokhody())
      ) {
        //kill
        item2 = search(rr + i, ss - i);
        item2.classList.add("kill");
        break;
      } else if (
        rr + i < 9 &&
        ss - i > 0 &&
        search(rr + i, ss - i).className.includes(nokhody())
      ) {
        //freind
        item2 = search(rr + i, ss - ii);
        item2.classList.add("freind");
        break;
      }
    }
    for (let i = 1; i < 9; i++) {
      if (
        rr + i < 9 &&
        ss + i < 9 &&
        !search(rr + i, ss + i).className.includes(kody()) &&
        !search(rr + i, ss + i).className.includes(nokhody())
      ) {
        //top left
        item2 = search(rr + i, ss + i);
        item2.classList.add("move");
      } else if (
        rr + i < 9 &&
        ss + i < 9 &&
        search(rr + i, ss + i).className.includes(kody())
      ) {
        //freind
        item2 = search(rr + i, ss + i);
        item2.classList.add("freind");
        break;
      } else if (
        rr + i < 9 &&
        ss + i < 9 &&
        search(rr + i, ss + i).className.includes(kody())
      ) {
        //kill
        item2 = search(rr + i, ss + i);
        item2.classList.add("kill");
        break;
      } else if (
        rr + i < 9 &&
        ss + i < 9 &&
        search(rr + i, ss + i).className.includes(nokhody())
      ) {
        //kill
        item2 = search(rr + i, ss + i);
        item2.classList.add("kill");
        break;
      } else if (
        rr + i < 9 &&
        ss + i < 9 &&
        search(rr + i, ss + i).className.includes(nokhody())
      ) {
        //freind
        item2 = search(rr + i, ss + ii);
        item2.classList.add("freind");
        break;
      }
    }
    for (let i = 1; i < 9; i++) {
      if (
        i < rr &&
        !search(rr - i, ss).className.includes(kody()) &&
        !search(rr - i, ss).className.includes(nokhody())
      ) {
        //bottom
        item2 = search(rr - i, ss);
        item2.classList.add("move");
      } else if (i < rr && search(rr - i, ss).className.includes(kody())) {
        //freind
        item2 = search(rr - i, ss);
        item2.classList.add("freind");
        break;
      } else if (i < rr && search(rr - i, ss).className.includes(kody())) {
        //kill
        item2 = search(rr - i, ss);
        item2.classList.add("kill");
        break;
      } else if (i < rr && search(rr - i, ss).className.includes(nokhody())) {
        //kill
        item2 = search(rr - i, ss);
        item2.classList.add("kill");
        break;
      } else if (i < rr && search(rr - i, ss).className.includes(nokhody())) {
        //freind
        item2 = search(rr - i, ss);
        item2.classList.add("freind");
        break;
      }
    }
    for (let i = 1; i < 9; i++) {
      if (
        rr < i &&
        !search(i, ss).className.includes(kody()) &&
        !search(i, ss).className.includes(nokhody())
      ) {
        //top
        item2 = search(i, ss);
        item2.classList.add("move");
      } else if (rr < i && search(i, ss).className.includes(kody())) {
        //freind
        item2 = search(i, ss);
        item2.classList.add("freind");
        break;
      } else if (rr < i && search(i, ss).className.includes(kody())) {
        //kill
        item2 = search(i, ss);
        item2.classList.add("kill");
        break;
      } else if (rr < i && search(i, ss).className.includes(nokhody())) {
        //kill
        item2 = search(i, ss);
        item2.classList.add("kill");
        break;
      } else if (rr < i && search(i, ss).className.includes(nokhody())) {
        //freind
        item2 = search(i, ss);
        item2.classList.add("freind");
        break;
      }
    }
    for (let i = 1; i < 9; i++) {
      if (
        i < ss &&
        !search(rr, ss - i).className.includes(kody()) &&
        !search(rr, ss - i).className.includes(nokhody())
      ) {
        //right
        item2 = search(rr, ss - i);
        item2.classList.add("move");
      } else if (i < ss && search(rr, ss - i).className.includes(kody())) {
        //freind
        item2 = search(rr, ss - i);
        item2.classList.add("freind");
        break;
      } else if (i < ss && search(rr, ss - i).className.includes(kody())) {
        //kill
        item2 = search(rr, ss - i);
        item2.classList.add("kill");
        break;
      } else if (i < ss && search(rr, ss - i).className.includes(nokhody())) {
        //kill
        item2 = search(rr, ss - i);
        item2.classList.add("kill");
        break;
      } else if (i < ss && search(rr, ss - i).className.includes(nokhody())) {
        //freind
        item2 = search(rr, ss - i);
        item2.classList.add("freind");
        break;
      }
    }
    for (let i = 1; i < 9; i++) {
      if (
        ss < i &&
        !search(rr, i).className.includes(kody()) &&
        !search(rr, i).className.includes(nokhody())
      ) {
        //lift
        item2 = search(rr, i);
        item2.classList.add("move");
      } else if (ss < i && search(rr, i).className.includes(kody())) {
        //freind
        item2 = search(rr, i);
        item2.classList.add("freind");
        break;
      } else if (ss < i && search(rr, i).className.includes(kody())) {
        //kill
        item2 = search(rr, i);
        item2.classList.add("kill");
        break;
      } else if (ss < i && search(rr, i).className.includes(nokhody())) {
        //kill
        item2 = search(rr, i);
        item2.classList.add("kill");
        break;
      } else if (ss < i && search(rr, i).className.includes(nokhody())) {
        //freind
        item2 = search(rr, i);
        item2.classList.add("freind");
        break;
      }
    }
  }
  //  king
  if (name2.includes("king")) {
    // top
    if (
      rr + 1 < 9 &&
      !search(rr + 1, ss).className.includes(kody()) &&
      !search(rr + 1, ss).className.includes(nokhody())
    ) {
      item2 = search(rr + 1, ss);
      item2.classList.add("move");
    } else if (rr + 1 < 9 && search(rr + 1, ss).className.includes(kody())) {
      //freind
      item2 = search(rr + 1, ss);
      item2.classList.add("freind");
    } else if (rr + 1 < 9 && search(rr + 1, ss).className.includes(kody())) {
      //kill
      item2 = search(rr + 1, ss);
      item2.classList.add("kill");
    } else if (rr + 1 < 9 && search(rr + 1, ss).className.includes(nokhody())) {
      //kill
      item2 = search(rr + 1, ss);
      item2.classList.add("kill");
    } else if (rr + 1 < 9 && search(rr + 1, ss).className.includes(nokhody())) {
      //freind
      item2 = search(rr + 1, ss);
      item2.classList.add("freind");
    }
    // bottom
    if (
      rr - 1 > 0 &&
      !search(rr - 1, ss).className.includes(kody()) &&
      !search(rr - 1, ss).className.includes(nokhody())
    ) {
      item2 = search(rr - 1, ss);
      item2.classList.add("move");
    } else if (rr - 1 > 0 && search(rr - 1, ss).className.includes(kody())) {
      //freind
      item2 = search(rr - 1, ss);
      item2.classList.add("freind");
    } else if (rr - 1 > 0 && search(rr - 1, ss).className.includes(kody())) {
      //kill
      item2 = search(rr - 1, ss);
      item2.classList.add("kill");
    } else if (rr - 1 > 0 && search(rr - 1, ss).className.includes(nokhody())) {
      //kill
      item2 = search(rr - 1, ss);
      item2.classList.add("kill");
    } else if (rr - 1 > 0 && search(rr - 1, ss).className.includes(nokhody())) {
      //freind
      item2 = search(rr - 1, ss);
      item2.classList.add("freind");
    }
    // right
    if (
      ss + 1 < 9 &&
      !search(rr, ss + 1).className.includes(kody()) &&
      !search(rr, ss + 1).className.includes(nokhody())
    ) {
      item2 = search(rr, ss + 1);
      item2.classList.add("move");
    } else if (ss + 1 < 9 && search(rr, ss + 1).className.includes(kody())) {
      //freind
      item2 = search(rr, ss + 1);
      item2.classList.add("freind");
    } else if (ss + 1 < 9 && search(rr, ss + 1).className.includes(kody())) {
      //kill
      item2 = search(rr, ss + 1);
      item2.classList.add("kill");
    } else if (ss + 1 < 9 && search(rr, ss + 1).className.includes(nokhody())) {
      //kill
      item2 = search(rr, ss + 1);
      item2.classList.add("kill");
    } else if (ss + 1 < 9 && search(rr, ss + 1).className.includes(nokhody())) {
      //freind
      item2 = search(rr, ss + 1);
      item2.classList.add("freind");
    }
    // left
    if (
      ss - 1 > 0 &&
      !search(rr, ss - 1).className.includes(kody()) &&
      !search(rr, ss - 1).className.includes(nokhody())
    ) {
      item2 = search(rr, ss - 1);
      item2.classList.add("move");
    } else if (ss - 1 > 0 && search(rr, ss - 1).className.includes(kody())) {
      //freind
      item2 = search(rr, ss - 1);
      item2.classList.add("freind");
    } else if (ss - 1 > 0 && search(rr, ss - 1).className.includes(kody())) {
      //kill
      item2 = search(rr, ss - 1);
      item2.classList.add("kill");
    } else if (ss - 1 > 0 && search(rr, ss - 1).className.includes(nokhody())) {
      //kill
      item2 = search(rr, ss - 1);
      item2.classList.add("kill");
    } else if (ss - 1 > 0 && search(rr, ss - 1).className.includes(nokhody())) {
      //freind
      item2 = search(rr, ss - 1);
      item2.classList.add("freind");
    }
    // bottom left
    if (
      rr - 1 > 0 &&
      ss - 1 > 0 &&
      !search(rr - 1, ss - 1).className.includes(kody()) &&
      !search(rr - 1, ss - 1).className.includes(nokhody())
    ) {
      item2 = search(rr - 1, ss - 1);
      item2.classList.add("move");
    } else if (
      rr - 1 > 0 &&
      ss - 1 > 0 &&
      search(rr - 1, ss - 1).className.includes(kody())
    ) {
      //freind
      item2 = search(rr - 1, ss - 1);
      item2.classList.add("freind");
    } else if (
      rr - 1 > 0 &&
      ss - 1 > 0 &&
      search(rr - 1, ss - 1).className.includes(kody())
    ) {
      //kill
      item2 = search(rr - 1, ss - 1);
      item2.classList.add("kill");
    } else if (
      rr - 1 > 0 &&
      ss - 1 > 0 &&
      search(rr - 1, ss - 1).className.includes(nokhody())
    ) {
      //kill
      item2 = search(rr - 1, ss - 1);
      item2.classList.add("kill");
    } else if (
      rr - 1 > 0 &&
      ss - 1 > 0 &&
      search(rr - 1, ss - 1).className.includes(nokhody())
    ) {
      //freind
      item2 = search(rr - 1, ss - 1);
      item2.classList.add("freind");
    }
    // bottom right
    if (
      rr - 1 > 0 &&
      ss + 1 < 9 &&
      !search(rr - 1, ss + 1).className.includes(kody()) &&
      !search(rr - 1, ss + 1).className.includes(nokhody())
    ) {
      item2 = search(rr - 1, ss + 1);
      item2.classList.add("move");
    } else if (
      rr - 1 > 0 &&
      ss + 1 < 9 &&
      search(rr - 1, ss + 1).className.includes(kody())
    ) {
      //freind
      item2 = search(rr - 1, ss + 1);
      item2.classList.add("freind");
    } else if (
      rr - 1 > 0 &&
      ss + 1 < 9 &&
      search(rr - 1, ss + 1).className.includes(kody())
    ) {
      //kill
      item2 = search(rr - 1, ss + 1);
      item2.classList.add("kill");
    } else if (
      rr - 1 > 0 &&
      ss + 1 < 9 &&
      search(rr - 1, ss + 1).className.includes(nokhody())
    ) {
      //kill
      item2 = search(rr - 1, ss + 1);
      item2.classList.add("kill");
    } else if (
      rr - 1 > 0 &&
      ss + 1 < 9 &&
      search(rr - 1, ss + 1).className.includes(nokhody())
    ) {
      //freind
      item2 = search(rr - 1, ss + 1);
      item2.classList.add("freind");
    }
    //top right
    if (
      rr + 1 < 9 &&
      ss + 1 < 9 &&
      !search(rr + 1, ss + 1).className.includes(kody()) &&
      !search(rr + 1, ss + 1).className.includes(nokhody())
    ) {
      item2 = search(rr + 1, ss + 1);
      item2.classList.add("move");
    } else if (
      rr + 1 < 9 &&
      ss + 1 < 9 &&
      search(rr + 1, ss + 1).className.includes(kody())
    ) {
      //freind
      item2 = search(rr + 1, ss + 1);
      item2.classList.add("freind");
    } else if (
      rr + 1 < 9 &&
      ss + 1 < 9 &&
      search(rr + 1, ss + 1).className.includes(kody())
    ) {
      //kill
      item2 = search(rr + 1, ss + 1);
      item2.classList.add("kill");
    } else if (
      rr + 1 < 9 &&
      ss + 1 < 9 &&
      search(rr + 1, ss + 1).className.includes(nokhody())
    ) {
      //kill
      item2 = search(rr + 1, ss + 1);
      item2.classList.add("kill");
    } else if (
      rr + 1 < 9 &&
      ss + 1 < 9 &&
      search(rr + 1, ss + 1).className.includes(nokhody())
    ) {
      //freind
      item2 = search(rr + 1, ss + 1);
      item2.classList.add("freind");
    }
    //top left
    if (
      rr + 1 < 9 &&
      ss - 1 > 0 &&
      !search(rr + 1, ss - 1).className.includes(kody()) &&
      !search(rr + 1, ss - 1).className.includes(nokhody())
    ) {
      item2 = search(rr + 1, ss - 1);
      item2.classList.add("move");
    } else if (
      rr + 1 < 9 &&
      ss - 1 > 0 &&
      search(rr + 1, ss - 1).className.includes(kody())
    ) {
      //freind
      item2 = search(rr + 1, ss - 1);
      item2.classList.add("freind");
    } else if (
      rr + 1 < 9 &&
      ss - 1 > 0 &&
      search(rr + 1, ss - 1).className.includes(kody())
    ) {
      //kill
      item2 = search(rr + 1, ss - 1);
      item2.classList.add("kill");
    } else if (
      rr + 1 < 9 &&
      ss - 1 > 0 &&
      search(rr + 1, ss - 1).className.includes(nokhody())
    ) {
      //kill
      item2 = search(rr + 1, ss - 1);
      item2.classList.add("kill");
    } else if (
      rr + 1 < 9 &&
      ss - 1 > 0 &&
      search(rr + 1, ss - 1).className.includes(nokhody())
    ) {
      //freind
      item2 = search(rr + 1, ss - 1);
      item2.classList.add("freind");
    }
  }
  //knight
  if (name2.includes("knight")) {
    // top lift
    if (
      rr + 2 < 9 &&
      ss - 1 > 0 &&
      !search(rr + 2, ss - 1).className.includes(kody()) &&
      !search(rr + 2, ss - 1).className.includes(nokhody())
    ) {
      item2 = search(rr + 2, ss - 1);
      item2.classList.add("move");
    } else if (
      rr + 2 < 9 &&
      ss - 1 > 0 &&
      search(rr + 2, ss - 1).className.includes(kody())
    ) {
      //freind
      item2 = search(rr + 2, ss - 1);
      item2.classList.add("freind");
    } else if (
      rr + 2 < 9 &&
      ss - 1 > 0 &&
      search(rr + 2, ss - 1).className.includes(kody())
    ) {
      //kill
      item2 = search(rr + 2, ss - 1);
      item2.classList.add("kill");
    } else if (
      rr + 2 < 9 &&
      ss - 1 > 0 &&
      search(rr + 2, ss - 1).className.includes(nokhody())
    ) {
      //kill
      item2 = search(rr + 2, ss - 1);
      item2.classList.add("kill");
    } else if (
      rr + 2 < 9 &&
      ss - 1 > 0 &&
      search(rr + 2, ss - 1).className.includes(nokhody())
    ) {
      //freind
      item2 = search(rr + 2, ss - 1);
      item2.classList.add("freind");
    }

    // top right
    if (
      rr + 2 < 9 &&
      ss + 1 < 9 &&
      !search(rr + 2, ss + 1).className.includes(kody()) &&
      !search(rr + 2, ss + 1).className.includes(nokhody())
    ) {
      item2 = search(rr + 2, ss + 1);
      item2.classList.add("move");
    } else if (
      rr + 2 < 9 &&
      ss + 1 < 9 &&
      search(rr + 2, ss + 1).className.includes(kody())
    ) {
      //freind
      item2 = search(rr + 2, ss + 1);
      item2.classList.add("freind");
    } else if (
      rr + 2 < 9 &&
      ss + 1 < 9 &&
      search(rr + 2, ss + 1).className.includes(kody())
    ) {
      //kill
      item2 = search(rr + 2, ss + 1);
      item2.classList.add("kill");
    } else if (
      rr + 2 < 9 &&
      ss + 1 < 9 &&
      search(rr + 2, ss + 1).className.includes(nokhody())
    ) {
      //kill
      item2 = search(rr + 2, ss + 1);
      item2.classList.add("kill");
    } else if (
      rr + 2 < 9 &&
      ss + 1 < 9 &&
      search(rr + 2, ss + 1).className.includes(nokhody())
    ) {
      //freind
      item2 = search(rr + 2, ss + 1);
      item2.classList.add("freind");
    }
    //bottom lift
    if (
      rr - 2 > 0 &&
      ss - 1 > 0 &&
      !search(rr - 2, ss - 1).className.includes(kody()) &&
      !search(rr - 2, ss - 1).className.includes(nokhody())
    ) {
      item2 = search(rr - 2, ss - 1);
      item2.classList.add("move");
    } else if (
      rr - 2 > 0 &&
      ss - 1 > 0 &&
      search(rr - 2, ss - 1).className.includes(kody())
    ) {
      //freind
      item2 = search(rr - 2, ss - 1);
      item2.classList.add("freind");
    } else if (
      rr - 2 > 0 &&
      ss - 1 > 0 &&
      search(rr - 2, ss - 1).className.includes(kody())
    ) {
      //kill
      item2 = search(rr - 2, ss - 1);
      item2.classList.add("kill");
    } else if (
      rr - 2 > 0 &&
      ss - 1 > 0 &&
      search(rr - 2, ss - 1).className.includes(nokhody())
    ) {
      //kill
      item2 = search(rr - 2, ss - 1);
      item2.classList.add("kill");
    } else if (
      rr - 2 > 0 &&
      ss - 1 > 0 &&
      search(rr - 2, ss - 1).className.includes(nokhody())
    ) {
      //freind
      item2 = search(rr - 2, ss - 1);
      item2.classList.add("freind");
    }

    // bottom right
    if (
      rr - 2 > 0 &&
      ss + 1 < 9 &&
      !search(rr - 2, ss + 1).className.includes(kody()) &&
      !search(rr - 2, ss + 1).className.includes(nokhody())
    ) {
      item2 = search(rr - 2, ss + 1);
      item2.classList.add("move");
    } else if (
      rr - 2 > 0 &&
      ss + 1 < 9 &&
      search(rr - 2, ss + 1).className.includes(kody())
    ) {
      //freind
      item2 = search(rr - 2, ss + 1);
      item2.classList.add("freind");
    } else if (
      rr - 2 > 0 &&
      ss + 1 < 9 &&
      search(rr - 2, ss + 1).className.includes(kody())
    ) {
      //kill
      item2 = search(rr - 2, ss + 1);
      item2.classList.add("kill");
    } else if (
      rr - 2 > 0 &&
      ss + 1 < 9 &&
      search(rr - 2, ss + 1).className.includes(nokhody())
    ) {
      //kill
      item2 = search(rr - 2, ss + 1);
      item2.classList.add("kill");
    } else if (
      rr - 2 > 0 &&
      ss + 1 < 9 &&
      search(rr - 2, ss + 1).className.includes(nokhody())
    ) {
      //freind
      item2 = search(rr - 2, ss + 1);
      item2.classList.add("freind");
    }
    // lift top
    if (
      rr + 1 < 9 &&
      ss + 2 < 9 &&
      !search(rr + 1, ss + 2).className.includes(kody()) &&
      !search(rr + 1, ss + 2).className.includes(nokhody())
    ) {
      item2 = search(rr + 1, ss + 2);
      item2.classList.add("move");
    } else if (
      rr + 1 < 9 &&
      ss + 2 < 9 &&
      search(rr + 1, ss + 2).className.includes(kody())
    ) {
      //freind
      item2 = search(rr + 1, ss + 2);
      item2.classList.add("freind");
    } else if (
      rr + 1 < 9 &&
      ss + 2 < 9 &&
      search(rr + 1, ss + 2).className.includes(kody())
    ) {
      //kill
      item2 = search(rr + 1, ss + 2);
      item2.classList.add("kill");
    } else if (
      rr + 1 < 9 &&
      ss + 2 < 9 &&
      search(rr + 1, ss + 2).className.includes(nokhody())
    ) {
      //kill
      item2 = search(rr + 1, ss + 2);
      item2.classList.add("kill");
    } else if (
      rr + 1 < 9 &&
      ss + 2 < 9 &&
      search(rr + 1, ss + 2).className.includes(nokhody())
    ) {
      //freind
      item2 = search(rr + 1, ss + 2);
      item2.classList.add("freind");
    }
    // lift bottom
    if (
      rr - 1 > 0 &&
      ss + 2 < 9 &&
      !search(rr - 1, ss + 2).className.includes(kody()) &&
      !search(rr - 1, ss + 2).className.includes(nokhody())
    ) {
      item2 = search(rr - 1, ss + 2);
      item2.classList.add("move");
    } else if (
      rr - 1 > 0 &&
      ss + 2 < 9 &&
      search(rr - 1, ss + 2).className.includes(kody())
    ) {
      //freind
      item2 = search(rr - 1, ss + 2);
      item2.classList.add("freind");
    } else if (
      rr - 1 > 0 &&
      ss + 2 < 9 &&
      search(rr - 1, ss + 2).className.includes(kody())
    ) {
      //kill
      item2 = search(rr - 1, ss + 2);
      item2.classList.add("kill");
    } else if (
      rr - 1 > 0 &&
      ss + 2 < 9 &&
      search(rr - 1, ss + 2).className.includes(nokhody())
    ) {
      //kill
      item2 = search(rr - 1, ss + 2);
      item2.classList.add("kill");
    } else if (
      rr - 1 > 0 &&
      ss + 2 < 9 &&
      search(rr - 1, ss + 2).className.includes(nokhody())
    ) {
      //freind
      item2 = search(rr - 1, ss + 2);
      item2.classList.add("freind");
    }
    // right top
    if (
      rr + 1 < 9 &&
      ss - 2 > 0 &&
      !search(rr + 1, ss - 2).className.includes(kody()) &&
      !search(rr + 1, ss - 2).className.includes(nokhody())
    ) {
      item2 = search(rr + 1, ss - 2);
      item2.classList.add("move");
    } else if (
      rr + 1 < 9 &&
      ss - 2 > 0 &&
      search(rr + 1, ss - 2).className.includes(kody())
    ) {
      //freind
      item2 = search(rr + 1, ss - 2);
      item2.classList.add("freind");
    } else if (
      rr + 1 < 9 &&
      ss - 2 > 0 &&
      search(rr + 1, ss - 2).className.includes(kody())
    ) {
      //kill
      item2 = search(rr + 1, ss - 2);
      item2.classList.add("kill");
    } else if (
      rr + 1 < 9 &&
      ss - 2 > 0 &&
      search(rr + 1, ss - 2).className.includes(nokhody())
    ) {
      //kill
      item2 = search(rr + 1, ss - 2);
      item2.classList.add("kill");
    } else if (
      rr + 1 < 9 &&
      ss - 2 > 0 &&
      search(rr + 1, ss - 2).className.includes(nokhody())
    ) {
      //freind
      item2 = search(rr + 1, ss - 2);
      item2.classList.add("freind");
    }
    // right bottom
    if (
      rr - 1 > 0 &&
      ss - 2 > 0 &&
      !search(rr - 1, ss - 2).className.includes(kody()) &&
      !search(rr - 1, ss - 2).className.includes(nokhody())
    ) {
      item2 = search(rr - 1, ss - 2);
      item2.classList.add("move");
    } else if (
      rr - 1 > 0 &&
      ss - 2 > 0 &&
      search(rr - 1, ss - 2).className.includes(kody())
    ) {
      //freind
      item2 = search(rr - 1, ss - 2);
      item2.classList.add("freind");
    } else if (
      rr - 1 > 0 &&
      ss - 2 > 0 &&
      search(rr - 1, ss - 2).className.includes(kody())
    ) {
      //kill
      item2 = search(rr - 1, ss - 2);
      item2.classList.add("kill");
    } else if (
      rr - 1 > 0 &&
      ss - 2 > 0 &&
      search(rr - 1, ss - 2).className.includes(nokhody())
    ) {
      //kill
      item2 = search(rr - 1, ss - 2);
      item2.classList.add("kill");
    } else if (
      rr - 1 > 0 &&
      ss - 2 > 0 &&
      search(rr - 1, ss - 2).className.includes(nokhody())
    ) {
      //freind
      item2 = search(rr - 1, ss - 2);
      item2.classList.add("freind");
    }
  }
  // pawn

  if (name2.includes("pawn")) {
    // move
    if (
      rr + 1 < 8 &&
      !search(rr + 1, ss).className.includes(kody()) &&
      !search(rr + 1, ss).className.includes(nokhody()) &&
      search(rr, ss).className.includes("qb")
    ) {
      item2 = search(rr + 1, ss);
      item2.classList.add("move");
    }
    if (
      rr - 1 > 1 &&
      !search(rr - 1, ss).className.includes(kody()) &&
      !search(rr - 1, ss).className.includes(nokhody()) &&
      search(rr, ss).className.includes("qa")
    ) {
      item2 = search(rr - 1, ss);
      item2.classList.add("move");
    }
    // move one
    if (
      rr + 2 < 8 &&
      !search(rr + 1, ss).className.includes(kody()) &&
      !search(rr + 1, ss).className.includes(nokhody()) &&
      search(rr, ss).className.includes("qb") &&
      rr == 2
    ) {
      item2 = search(rr + 2, ss);
      item2.classList.add("move");
    }
    if (
      rr - 2 > 1 &&
      !search(rr - 1, ss).className.includes(kody()) &&
      !search(rr - 1, ss).className.includes(nokhody()) &&
      search(rr, ss).className.includes("qa") &&
      rr == 7
    ) {
      item2 = search(rr - 2, ss);
      item2.classList.add("move");
    }
    // kill
    //qb
    //top right
    if (
      rr + 1 < 8 &&
      ss + 1 < 9 &&
      search(rr + 1, ss + 1).className.includes(nokhody()) &&
      search(rr, ss).className.includes("qb")
    ) {
      item2 = search(rr + 1, ss + 1);
      item2.classList.add("kill");
    }
    //top left
    if (
      rr + 1 < 8 &&
      ss - 1 > 0 &&
      search(rr + 1, ss - 1).className.includes(nokhody()) &&
      search(rr, ss).className.includes("qb")
    ) {
      item2 = search(rr + 1, ss - 1);
      item2.classList.add("kill");
    }
    // qa
    if (
      rr - 1 > 1 &&
      ss + 1 < 9 &&
      search(rr - 1, ss + 1).className.includes(nokhody()) &&
      search(rr, ss).className.includes("qa")
    ) {
      item2 = search(rr - 1, ss + 1);
      item2.classList.add("kill");
    }
    //top left
    if (
      rr - 1 > 1 &&
      ss - 1 > 0 &&
      search(rr - 1, ss - 1).className.includes(nokhody()) &&
      search(rr, ss).className.includes("qa")
    ) {
      item2 = search(rr - 1, ss - 1);
      item2.classList.add("kill");
    }
    //
    //update
    //
    // kill
    //qb
    //top right
    if (
      rr + 1 < 9 &&
      ss + 1 < 9 &&
      search(rr + 1, ss + 1).className.includes(nokhody()) &&
      search(rr, ss).className.includes("qb") &&
      rr == 7
    ) {
      item2 = search(rr + 1, ss + 1);
      item2.classList.add("updat");
    }
    //top left
    if (
      rr + 1 < 9 &&
      ss - 1 > 0 &&
      search(rr + 1, ss - 1).className.includes(nokhody()) &&
      search(rr, ss).className.includes("qb") &&
      rr == 7
    ) {
      item2 = search(rr + 1, ss - 1);
      item2.classList.add("updat");
    }
    // qa
    if (
      rr - 1 > 0 &&
      ss + 1 < 9 &&
      search(rr - 1, ss + 1).className.includes(nokhody()) &&
      search(rr, ss).className.includes("qa") &&
      rr == 2
    ) {
      item2 = search(rr - 1, ss + 1);
      item2.classList.add("updat");
    }
    //top left
    if (
      rr - 1 > 0 &&
      ss - 1 > 0 &&
      search(rr - 1, ss - 1).className.includes(nokhody()) &&
      search(rr, ss).className.includes("qa") &&
      rr == 2
    ) {
      item2 = search(rr - 1, ss - 1);
      item2.classList.add("updat");
    }
    // move
    if (
      rr + 1 < 9 &&
      !search(rr + 1, ss).className.includes(kody()) &&
      !search(rr + 1, ss).className.includes(nokhody()) &&
      search(rr, ss).className.includes("qb") &&
      rr == 7
    ) {
      item2 = search(rr + 1, ss);
      item2.classList.add("updat");
    }
    if (
      rr - 1 > 0 &&
      !search(rr - 1, ss).className.includes(kody()) &&
      !search(rr - 1, ss).className.includes(nokhody()) &&
      search(rr, ss).className.includes("qa") &&
      rr == 2
    ) {
      item2 = search(rr - 1, ss);
      item2.classList.add("updat");
    }
  }
}
