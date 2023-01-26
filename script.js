let nums = document.querySelectorAll(".nums .num");
// catch nums and > num
let section = document.querySelector(".three");
// this sec when i reach will count
let started = false; // Function Started ? No to run one time only

window.onscroll = function () {
  // to check the scroll in sec 3
  if (window.scrollY >= section.offsetTop) {
    // i reach for sec 3
    if (!started) {
      // not run ?
      nums.forEach((num) => startCount(num)); // catch all num from goal to max-num
    }
    started = true; // please we run it so stop
  }
};
// count func
function startCount(el) {
  let goal = el.dataset.goal; // custom attr
  let count = setInterval(() => {
    el.textContent++; // add one +++
    if (el.textContent == goal) {
      clearInterval(count); // clear interval => stop
    }
  }, 2000 / goal);
}
