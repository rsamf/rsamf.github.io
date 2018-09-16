Loadie.start();
document.getElementById("pages").style.display = "none";
setTimeout(()=>{
  Loadie.stop();
  Loadie.on("done", () => {
    document.getElementById("pages").style.display = "block";
    start();
  });
}, 3000);

// start();

function start() {
  Scrollie.setup({
    type: "LINEAR",
    pad: 2000,
    offset: .3
  }, {
    type: "LINEAR",
    pad: 300,
    offset: 0
  });

  // Scrollie.on("out", (el) => {
  //   el.style.display = "none";
  // });
  
  // Scrollie.on("in", (el) => {
  //   if(el.classList.contains("container")) {
  //     el.style.display = "flex";
  //   } else {
  //     el.style.display = "initial";
  //   }
  // });

  const applyTitle = (file, name) => {
    document.querySelectorAll(`img[src="./images/${file}"]`).forEach(img => {
      img.title = name;
    });
  };

  applyTitle("aws.png", "AWS AppSync");
  applyTitle("cs.png", "C#");
  applyTitle("css.png", "CSS");
  applyTitle("fb.png", "Firebase");
  applyTitle("html.png", "HTML"),
  applyTitle("js.png", "Javascript");
  applyTitle("mongo.jpg", "MongoDB");
  applyTitle("node.png", "NodeJS");
  applyTitle("react.png", "React");
  applyTitle("redis.png", "Redis");
  applyTitle("unity.png", "Unity");
  applyTitle("vue.png", "Vue");
  applyTitle("w2p.png", "web2py");
}
