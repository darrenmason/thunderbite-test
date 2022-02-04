import * as PIXI from "pixi.js";

const preloadAssets = (paths, callback) => {
  const loader = PIXI.Loader.shared;
  loader
    .add(paths)
    // .on("progress", 
    // loader => console.log(
    //   `Loading ${loader.progress}%`
    //   ))
    .load(callback);
};

export default preloadAssets;
