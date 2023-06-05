import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./UnityGame.css";

function UnityGame() {
  const { unityProvider } = useUnityContext({
    codeUrl: "/build/8 Level Build.wasm",
    frameworkUrl: "/build/8 Level Build.framework.js",
    dataUrl: "/build/8 Level Build.data",
    loaderUrl: "/build/8 Level Build.loader.js",
  });

  return <Unity unityProvider={unityProvider} className="Platformer" />;
}

export default UnityGame;
