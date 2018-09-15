const Scrollie = (()=>{
  let ACTS, RECTS, PG_TYPE, PG_PAD, PG_OFFSET, EL_TYPE, EL_PAD, EL_OFFSET, LISTENERS;

  function linOpacity(top, center, x, offset, pad)  {
    const a = (top, center) => 1 / Math.abs(top - center);
    return Math.max(offset, -a(top - pad, center)*Math.abs(x - center) + 1);
  }

  function sinOpacity(top, center, x)  {
    // TODO
    return 0;
  }

  function updatePGs() {
    let myCenter = window.scrollY + window.innerHeight / 2;
    RECTS.forEach((r, i) => {
      ACTS[i].pg.style.opacity = 
        PG_TYPE === "LINEAR" ? 
        linOpacity(r.top, r.center, myCenter, PG_OFFSET, PG_PAD) :
        sinOpacity(r.top, r.center, myCenter, PG_OFFSET, PG_PAD)
      ;
      let elOpacity =
        EL_TYPE === "LINEAR" ? 
        linOpacity(r.top, r.center, myCenter, EL_OFFSET, EL_PAD) :
        sinOpacity(r.top, r.center, myCenter, EL_OFFSET, EL_PAD)
      ;
      ACTS[i].els.forEach(el => {
        // Is coming in?
        if(el.style.opacity <= EL_OFFSET && elOpacity > EL_OFFSET) {
          LISTENERS.in(el);
        } 
        // Is going out?
        else if(el.style.opacity > EL_OFFSET && elOpacity <= EL_OFFSET) {
          LISTENERS.out(el);
        }
        el.style.opacity = elOpacity;
      });
    });
  }

  function setup(pgSettings, elSettings) {
    RECTS = [], ACTS = [];
    PG_TYPE = pgSettings.type;
    PG_PAD = pgSettings.pad;
    PG_OFFSET = pgSettings.offset;
    EL_TYPE = elSettings.type;
    EL_PAD = elSettings.pad;
    EL_OFFSET = elSettings.offset;
    LISTENERS = {
      in: ()=>{},
      out: ()=>{}
    };
    document.querySelectorAll(".head-page,.page").forEach((el, i) => {
      let rect = el.getBoundingClientRect();
      RECTS.push({
        top: rect.top + window.scrollY,
        bottom: rect.bottom + window.scrollY,
        center: (rect.top + rect.bottom + 2*window.scrollY) / 2
      });
      ACTS.push({
        pg: document.getElementById(`pg-${i}`),
        els: document.querySelectorAll(`#page-${i} .more`)
      });
    });

    document.onscroll = () => {
      updatePGs();
    };
    updatePGs();
  }

  function on(event, callback) {
    LISTENERS[event] = callback;
  }

  return {
    setup,
    on
  };
})();