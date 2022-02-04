import * as PIXI from "pixi.js";
import preloadAssets from "./preloadAssets";
import createRenderer from "./createRenderer";
import { gsap } from "gsap/dist/gsap";
import { PixiPlugin } from "gsap/dist/PixiPlugin";
import "isomorphic-fetch"

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

// globals
let stage;
let assets;
let canRotate = true;

let
  headerSprite,
  showdownOffSprite,
  vegasSprite,
  slotsSprite,
  sSprite,
  hSprite,
  o1Sprite,
  w1Sprite,
  dSprite,
  o2Sprite,
  w2Sprite,
  nSprite,
  mustDropSprite,
  boltSprite,

  wheelSprite,
  markerSprite,
  btnSpinSprite
  ;

const loader = PIXI.Loader.shared;
const loadTexture = (name) => loader.resources[name].texture;

const initMain = () => {
  stage = new PIXI.Container();

  const renderer = createRenderer({
    antialias: false,
    backgroundAlpha: false,
    resolution: 1,
    width: 1440,
    height: 1400
  }, 'renderContainerHeader');

  // render header
  headerIntro(renderer);
  headerLoop(0, renderer);

  // render body
  bodyIntro(renderer);
};

const renderTexture = (path, textureSprite, x = 0, y = 0, alpha = 1, width, height) => {
  const texture = loadTexture(path);
  textureSprite = new PIXI.Sprite(texture);
  textureSprite.x = x;
  textureSprite.y = y;
  textureSprite.alpha = alpha;
  width ? textureSprite.width = width : false;
  height ? textureSprite.height = height : false;
  stage.addChild(textureSprite);
  return textureSprite;
};

const headerIntro = (renderer) => {

  renderTexture(assets.header, headerSprite);
  renderTexture(assets.showdownOff, showdownOffSprite, 300, 30);

  vegasSprite = renderTexture(assets.vegas, vegasSprite, 355, 23, 0);
  slotsSprite = renderTexture(assets.slots, slotsSprite, 735, 23, 0);

  sSprite = renderTexture(assets.s, sSprite, 240, 32, 0);
  hSprite = renderTexture(assets.h, hSprite, 335, 32, 0);
  o1Sprite = renderTexture(assets.o1, o1Sprite, 485, 32, 0);
  w1Sprite = renderTexture(assets.w1, w1Sprite, 535, 32, 0);
  dSprite = renderTexture(assets.d, dSprite, 650, 32, 0);
  o2Sprite = renderTexture(assets.o2, o2Sprite, 735, 32, 0);
  w2Sprite = renderTexture(assets.w2, w2Sprite, 820, 32, 0);
  nSprite = renderTexture(assets.n, nSprite, 915, 32, 0);

  mustDropSprite = renderTexture(assets.mustDrop, mustDropSprite, 405, 235, 0, 580, 170);

  boltSprite = renderTexture(assets.bolt, boltSprite, 643, -20, 0, 150, 189);

  // vegas slots

  gsap.delayedCall(.5, () => {
    gsap.to(vegasSprite, { alpha: 1, duration: 0 })
    gsap.to(slotsSprite, { alpha: 1, duration: 0 })
  })
  gsap.delayedCall(1, () => {
    gsap.to(vegasSprite, { alpha: 0, duration: 0 })
    gsap.to(slotsSprite, { alpha: 0, duration: 0 })
  })
  gsap.delayedCall(1.1, () => {
    gsap.to(vegasSprite, { alpha: 1, duration: 0 })
    gsap.to(slotsSprite, { alpha: 1, duration: 0 })
  })
  gsap.delayedCall(1.2, () => {
    gsap.to(vegasSprite, { alpha: 0, duration: 0 })
    gsap.to(slotsSprite, { alpha: 0, duration: 0 })
  })
  gsap.delayedCall(1.3, () => {
    gsap.to(vegasSprite, { alpha: 1, duration: 0 })
    gsap.to(slotsSprite, { alpha: 1, duration: 0 })
  })

  // showdown

  gsap.delayedCall(1, () => {
    gsap.to(sSprite, { alpha: 1, duration: .5 })
  })
  gsap.delayedCall(1.2, () => {
    gsap.to(hSprite, { alpha: 1, duration: .5 })
  })
  gsap.delayedCall(1.4, () => {
    gsap.to(o1Sprite, { alpha: 1, duration: .5 })
  })
  gsap.delayedCall(1.6, () => {
    gsap.to(w1Sprite, { alpha: 1, duration: .5 })
  })
  gsap.delayedCall(1.8, () => {
    gsap.to(dSprite, { alpha: 1, duration: .5 })
  })
  gsap.delayedCall(2.0, () => {
    gsap.to(o2Sprite, { alpha: 1, duration: .5 })
  })
  gsap.delayedCall(2.2, () => {
    gsap.to(w2Sprite, { alpha: 1, duration: .5 })
  })
  gsap.delayedCall(2.4, () => {
    gsap.to(nSprite, { alpha: 1, duration: .5 })
  })

  // mustDrop

  gsap.delayedCall(3, () => {
    gsap.to(mustDropSprite, { alpha: 1, duration: 0 })
  })
  gsap.delayedCall(3.5, () => {
    gsap.to(mustDropSprite, { alpha: 0, duration: 0 })
  })
  gsap.delayedCall(3.6, () => {
    gsap.to(mustDropSprite, { alpha: 1, duration: 0 })
  })
  gsap.delayedCall(3.7, () => {
    gsap.to(mustDropSprite, { alpha: 0, duration: 0 })
  })
  gsap.delayedCall(3.8, () => {
    gsap.to(mustDropSprite, { alpha: 1, duration: 0 })
  })

  renderer.render(stage);
};

const headerLoop = (time, renderer) => {
  requestAnimationFrame(t => headerLoop(t, renderer));


  // bolt continuous

  gsap.delayedCall(1.5, () => {
    gsap.to(boltSprite, { alpha: 1, duration: 0 })
  })
  gsap.delayedCall(1.6, () => {
    gsap.to(boltSprite, { alpha: 0, duration: 0 })
  })
  gsap.delayedCall(1.7, () => {
    gsap.to(boltSprite, { alpha: 1, duration: 0 })
  })
  gsap.delayedCall(1.8, () => {
    gsap.to(boltSprite, { alpha: 0, duration: 0 })
  })
  gsap.delayedCall(1.9, () => {
    gsap.to(boltSprite, { alpha: 1, duration: 0 })
  })

  renderer.render(stage);
};

const bodyIntro = (renderer) => {
  btnSpinSprite = renderTexture(assets.btnSpin, btnSpinSprite, 526, 1120, 1);
  wheelSprite = renderTexture(assets.wheel, wheelSprite, 708, 750, 1);
  wheelSprite.pivot.set(wheelSprite.width / 2, wheelSprite.height / 2);
  markerSprite = renderTexture(assets.marker, markerSprite, 620, 475, 0, 150, 150);

  btnSpinSprite.buttonMode = true;
  btnSpinSprite.interactive = true;
  btnSpinSprite.defaultCursor = 'pointer';
  const btnEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
  btnSpinSprite.on(btnEvent, () => {
    if (canRotate)
      fetch('../mock.json')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          spinWheel(data.POSITION);
        })

  });

  renderer.render(stage);
};

const spinWheel = (response) => {
  canRotate = false;
  const rounds = Math.ceil(Math.random() * 4);
  const positions = [45, 135, 225, 315];
  const spin = ((1000 * rounds));

  const tl = gsap.timeline();
  wheelSprite.rotation = 0;
  markerSprite.alpha = 0;
  tl.to(wheelSprite, { pixi: { rotation: spin + "_cw" }, duration: 0, ease: "none" })
  tl.to(wheelSprite, { pixi: { rotation: positions[response] + "_cw" }, duration: 4, ease: "in" })
  tl.eventCallback('onComplete', () => {
    markerSprite.alpha = 1;
    canRotate = true;
  })
};


window.addEventListener("load", () => {
  assets = {
    bolt: 'images/showdown/bolt@2x.png',
    d: 'images/showdown/d@2x.png',
    header: 'images/showdown/header.png',
    n: 'images/showdown/n@2x.png',
    o2: 'images/showdown/o-2@2x.png',
    showdownOff: 'images/showdown/showdown-off.png',
    vegas: 'images/showdown/vegas@2x.png',
    w2: 'images/showdown/w-2@2x.png',
    boltOff: 'images/showdown/bolt-off@2x.png',
    h: 'images/showdown/h@2x.png',
    mustDrop: 'images/showdown/must_drop.png',
    o1: 'images/showdown/o-1@2x.png',
    s: 'images/showdown/s@2x.png',
    slots: 'images/showdown/slots@2x.png',
    w1: 'images/showdown/w-1@2x.png',

    btnSpin: 'images/wheel/btn-spin.png',
    marker: 'images/wheel/marker.png',
    wheel: 'images/wheel/wheel.png'
  };
  const paths = Object.values(assets);

  preloadAssets(paths, () => {
    initMain();

  });
});
