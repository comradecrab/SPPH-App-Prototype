let text = document.getElementById("text");
let treeright = document.getElementById("right_tree");
let treeleft = document.getElementById("left_tree");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
  treeright.style.left = value * 1 + "px";
  treeleft.style.left = value * -1 + "px";
});
