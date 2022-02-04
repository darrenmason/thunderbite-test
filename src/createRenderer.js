import * as PIXI from "pixi.js";

const createRenderer = (config, viewSelector) => {

    const renderer = PIXI.autoDetectRenderer(config);

    renderer.view.className = viewSelector;
    document.getElementById("root").appendChild(renderer.view);

    // responsive cointainer in conjunction with style.css
    const canvas = document.getElementsByClassName(renderer.view.className);
    const heightRatio = 1.5;
    canvas.height = canvas.width * heightRatio;

    return renderer;
};

export default createRenderer;
