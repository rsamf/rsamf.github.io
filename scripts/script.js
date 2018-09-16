// Loadie.start();
// document.getElementById("pages").style.display = "none";
// setTimeout(()=>{
//   Loadie.stop();
//   Loadie.on("done", () => {
//     document.getElementById("pages").style.display = "block";
//     start();
//   });
// }, 3000);

start();

function start() {
  Scrollie.setup({
    type: "LINEAR",
    pad: 2000,
    offset: .3
  }, {
    type: "LINEAR",
    pad: 0,
    offset: 0
  });

  Scrollie.on("out", (el) => {
    el.style.display = "none";
  });
  
  Scrollie.on("in", (el) => {
    if(el.classList.contains("container")) {
      el.style.display = "flex";
    } else {
      el.style.display = "initial";
    }
  });
}
