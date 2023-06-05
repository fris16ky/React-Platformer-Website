import React from "react";
import "../App.css";
import "./HeroSection.css";
import FrogIdle from "./media/sprites/FrogIdle.png";
import FrogRun from "./media/sprites/FrogRun.png";
import MushroomIdle from "./media/sprites/MushroomIdle.png";
import MushroomRun from "./media/sprites/MushroomRun.png";
import MushroomDie from "./media/sprites/MushroomDie.png";
import TurtleDie from "./media/sprites/TurtleDie.png";
import TurtleIdle from "./media/sprites/TurtleIdle.png";
import TurtleIdleSpike from "./media/sprites/TurtleIdleSpike.png";
import TurtleSpikesIn from "./media/sprites/TurtleSpikesIn.png";
import TurtleSpikesOut from "./media/sprites/TurtleSpikesOut.png";
import FireOff from "./media/sprites/FireOff.png";
import FireOn from "./media/sprites/FireOn.png";
import FlagIdle from "./media/sprites/FlagIdle.png";
import Bananas from "./media/sprites/Bananas.png";
import Melon from "./media/sprites/Melon.png";
import MovingPlatformOn from "./media/sprites/MovingPlatformOn.png";
import SawOn from "./media/sprites/SawOn.png";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* He did a video here; not doing that */}
      <h1>Welcome to Frog Piece!</h1>
      <br />
      <h2>Background</h2>
      <br />
      <p>
        This is my passion project 2D Platformer called Frog Piece! I've worked
        on this game from late april to the end of May. For the game, I used the
        following technologies:
        <p style={{ fontWeight: "bold" }}>
          Unity and WebGL to export, C# Scripts written in Visual Studio 2019,
          and pieces of the Pixel Adventures 1 and 2 pre-made packs for the
          sprites.
        </p>
      </p>
      <br /> <br />
      <h2 style={{ color: "green" }}>Tutorial</h2>
      <p>
        <div className="animation-wrapper">
          <div
            className="animation-container"
            style={{
              backgroundImage: `url(${FrogIdle})`,
            }}
          ></div>
          <div
            className="animation-container"
            style={{
              backgroundImage: `url(${FrogRun})`,
            }}
          ></div>
        </div>
        The main character that the player controls is Kawamatsu! He is a Ninja
        Frog and is a great jumper (can jump twice!) and very athletic.
      </p>
      <br /> <br />
      {/* Enemies section - Mushroom and Turtle */}
      <h2 style={{ color: "red" }}>Enemies</h2>
      <hr className="section-line" />
      <p>
        <div className="animation-wrapper">
          <div
            className="animation-container"
            style={{
              backgroundImage: `url(${MushroomIdle})`,
            }}
          ></div>
          <div
            className="animation-container"
            style={{
              backgroundImage: `url(${MushroomRun})`,
            }}
          ></div>
          {/* I want this animation to be a little bit slower */}
          <div
            className="animation-container"
            style={{
              animation: "play-animation-320 2s steps(10) infinite",
              backgroundImage: `url(${MushroomDie})`,
            }}
          ></div>
        </div>
        This is one of the main enemies you'll face; a mushroom!
        {/* 1.5 <br />'s just for clarity and reading sake */}
        <span className="half-line-break"></span>
        You can defeat these mushrooms by jumping on top of their heads! Keep in
        mind that this is not the case for all enemies!!
      </p>
      <br />
      {/* For different size SpriteSheets, you need to change the background position for the @keyframes play-animation, the 
      animation steps (to how many individual images are in the SpriteSheet, and the width and height to the new, non 32x32 measurements) */}
      <p>
        <div className="animation-wrapper">
          <div
            className="animation-container-turtle"
            style={{
              backgroundImage: `url(${TurtleIdle})`,
            }}
          ></div>
          <div
            className="animation-container-turtle"
            style={{
              backgroundImage: `url(${TurtleIdleSpike})`,
            }}
          ></div>
          <div
            className="animation-container-turtle"
            style={{
              animation: "play-animation-616 2.5s steps(14) infinite",
              backgroundImage: `url(${TurtleSpikesIn})`,
            }}
          ></div>
          <div
            className="animation-container-turtle"
            style={{
              animation: "play-animation-616 2.5s steps(14) infinite",
              backgroundImage: `url(${TurtleSpikesOut})`,
            }}
          ></div>
          <div
            className="animation-container-turtle"
            style={{
              animation: "play-animation-616 2.5s steps(14) infinite",
              backgroundImage: `url(${TurtleDie})`,
            }}
          ></div>
        </div>
        Here's another enemy that you will face! This is a turtle, and they are
        a bit tricky. Turtles have 4 states, Idle and unprotected, Idle with
        their Spikes out, and switching from Spikes to Unprotected and from
        Unprotected to Spikes. Thus, be careful when trying to kill it!
        <br />
      </p>
      <br />
      {/* Traps section; Saw and Fire */}
      <h2 style={{ color: "red" }}>Traps</h2>
      <hr className="section-line" />
      <p>
        <div className="animation-wrapper">
          <div
            className="animation-container-saw"
            style={{
              backgroundImage: `url(${SawOn})`,
            }}
          ></div>
        </div>
        This is our first trap covered in this basic tutorial. This is a saw,
        which spins! Saws can be stationary, move between two waypoints, or move
        between four waypoints (i.e. an island). Watch your step!
      </p>
      <p>
        <div className="animation-wrapper">
          <div
            className="animation-container-fire"
            style={{
              backgroundImage: `url(${FireOff})`,
            }}
          ></div>
        </div>
        <div className="animation-wrapper">
          <div
            className="animation-container-fire"
            style={{
              backgroundImage: `url(${FireOn})`,
              marginLeft: "-45px",
            }}
          ></div>
        </div>
        This is our last trap, the fire breather! You can step on it when it's
        off, but be careful when that flame is about to turn on!
      </p>
      <br /> <br />
      <h2 style={{ color: "gold" }}>Other Helpful Tools</h2>
      <hr className="section-line" />
      <p>
        <div className="animation-wrapper">
          <div
            className="animation-container-flag"
            style={{
              backgroundImage: `url(${FlagIdle})`,
            }}
          ></div>
        </div>
        This is the Finish Flag that you must touch to finish each level! After
        you run into it, there's a 1.5 second wait until you are sent until the
        next level.
      </p>
      <p>
        <div className="animation-wrapper">
          <div
            className="animation-container-moving_platform"
            style={{
              backgroundImage: `url(${MovingPlatformOn})`,
            }}
          ></div>
        </div>
        This is a moving platform, which is a great way to get from Point A to
        Point B!
      </p>
      <br />
      <h2 style={{ color: "Indigo" }}>Collectibles</h2>
      <hr className="section-line" />
      <p>
        <div className="animation-wrapper">
          <div
            className="animation-container"
            style={{
              backgroundImage: `url(${Melon})`,
            }}
          ></div>
        </div>
        This is the main collectible in the game; a Watermelon. I was very
        sneaky and hid a ton throughout each level, but I{" "}
        <Link to="/collectible-stats">
          dedicated a page to listing how many are in each level here.
        </Link>
      </p>
      <p>
        <div className="animation-wrapper">
          <div
            className="animation-container"
            style={{
              backgroundImage: `url(${Bananas})`,
            }}
          ></div>
        </div>
        For now, this is the only Power-Up in the game! When you collect a
        Banana, your speed doubles, but it only lasts for 5 seconds!
      </p>
      <br /> <br /> <br />
      <h2>Lore (One Piece inspo, Mario, Kawamatsu specifically)</h2>
      <br /> <br /> <br />
    </div>
  );
}

export default HeroSection;
