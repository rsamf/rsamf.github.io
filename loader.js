const loader = (() => {

  let loader = document.getElementById("main-loader");
  let loadingInterval;
  let STOPPING = false;
  const Z = 10000;
  const LAYERS = 5;
  
  function animate(object, property, to, period, unit = "", onEnd=()=>{}) {
    const from = Number(object.style[property].replace(unit, ""));
    if(from === to) return;
    const step = (to-from)/period;
    let t = 0;
    let interval = setInterval(()=> {
      if(t >= period) onDone();
      object.style[property] = Math.max(0, from + t*step) + unit;
      t+=32;
    }, 32);
  
    function onDone() {
      clearInterval(interval);
      onEnd();
    }
  }
  
  function setup() {
    const randY = () => Math.round(Math.random() * 2 + 2);
    const randX = () => Math.round(Math.random() * 40 + 30);
    let loader = document.createElement("div");
    loader.classList.add("fluid", "loading");
    document.body.appendChild(loader);
    for(let layer = 0; layer < LAYERS; layer++) {
      let sumOfHeights = 0;
      let layerColor = randLayerColor();
      while(sumOfHeights < 100) {
        let mid = randX();
        let height = randY();
        let bar1 = document.createElement("span");
        let bar2 = document.createElement("span");
        let bars = document.createElement("div");
        bar1.style.left = 0;
        bar1.style.width = mid+"%";
        bar1.ogWidth = mid+"%";
        bar1.style.backgroundColor = randBarColor(layerColor);
        bar1.classList.add("bar");
        bar2.style.right = 0;
        bar2.style.width = (100-mid)+"%";
        bar2.ogWidth = (100-mid)+"%";
        bar2.style.backgroundColor = randBarColor(layerColor);
        bar2.classList.add("bar");
        bars.classList.add("bars", "layer-"+layer)
        bars.style.zIndex = -layer + Z;
        bars.style.height = height+"%";
        bars.style.top = sumOfHeights+"%";
        bars.appendChild(bar1);
        bars.appendChild(bar2);
        loader.appendChild(bars);
        sumOfHeights += height;
      }
    }
  }
  
  function randLayerColor() {
    const rand255 = () => Math.round(Math.random()*255);
    return [rand255(),rand255(),rand255()];
  }
  function randBarColor(layerColor){
    const rand255Pad = (num) => Math.max(0, Math.min(255, Math.round(num + Math.random()*20 - 10)));
    return `rgb(${rand255Pad(layerColor[0])},${rand255Pad(layerColor[1])},${rand255Pad(layerColor[2])})`;
  }
  
  function start() {
    STOPPING = false;
    setup();
    let i = 0;
    const go = () => {
      uncover(document.querySelectorAll(".layer-"+(i % LAYERS)), -i - LAYERS);
      i++;
    };
    go();
    loadingInterval = setInterval(go, 512);
    function uncover(layer, zIndex){
      layer.forEach(b => {
        setTimeout(()=>{
          animate(b.firstChild, "width", 0, 512, "%");
          animate(b.lastChild, "width", 0, 512, "%");
        }, Math.random()*512 + 512);
      });
      if(!STOPPING) {
        setTimeout(() => {
          const newLayerColor = randLayerColor();
          layer.forEach(b => {
            b.style.zIndex = zIndex + Z;
            b.firstChild.style.backgroundColor = randBarColor(newLayerColor);
            b.firstChild.style.width = b.firstChild.ogWidth;
            b.lastChild.style.backgroundColor = randBarColor(newLayerColor);
            b.lastChild.style.width = b.lastChild.ogWidth;
          });
        }, 1536);
      }
    }
  }
  
  function stop() {
    STOPPING = true;
    setTimeout(()=> {
      clearInterval(loadingInterval);
    }, 8192);
  }

  // Note: do not start more than once
  return {
    start,
    stop
  };

})();