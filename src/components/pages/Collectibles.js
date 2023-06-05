import React from "react";
import "./Collectibles.css";
import Level1 from "../media/images/Level1.PNG";
import Level2 from "../media/images/Level2.PNG";
import Level3 from "../media/images/Level3.PNG";
import Level4 from "../media/images/Level4.PNG";
import Level5 from "../media/images/Level5.PNG";
import Level6 from "../media/images/Level6.PNG";
import Level7 from "../media/images/Level7.PNG";
import Level8 from "../media/images/Level8.PNG";

const levelsData = [
  {
    level: 1,
    image: Level1,
    description: "In Level 1, there are 6 Melons to collect.",
  },
  {
    level: 2,
    image: Level2,
    description: "In Level 2, there are 9 Melons to collect, 2 are sneaky.",
  },
  {
    level: 3,
    image: Level3,
    description: "In Level 3, there are 9 Melons to collect.",
  },
  {
    level: 4,
    image: Level4,
    description:
      "In Level 4, there are 17 Melons to collect, 2 are sneaky, and 7 are in a hidden area.",
  },
  {
    level: 5,
    image: Level5,
    description:
      "In Level 5, there are 13 Melons to collect, 9 are hidden. There are also 6 Bananas.",
  },
  {
    level: 6,
    image: Level6,
    description:
      "In Level 6, there are 26 Melons to collect, 18 on the Right Path and 8 on the Left Path. There are also 4 Bananas, two on each side.",
  },
  {
    level: 7,
    image: Level7,
    description:
      "In Level 7, there are 28 Melons to collect. There are also 2 Bananas.",
  },
  {
    level: 8,
    image: Level8,
    description:
      "In Level 8, there are 30 Melons to collect. There are 2 Hidden Paths including an alternate Finish Flag.",
  },
];

function Collectibles() {
  return (
    <div className="collect-container">
      <h1>Collectibles Information</h1>
      <br />
      <p>
        In case you didn't realize, one of the main objectives (aside from
        finishing the levels) of the game is to collect Melons. It's not
        enforced or anything, but in case you are a completionist, I figured I
        would help out a little bit. I was a little bit cheeky with the
        placements of these Melons, so I'm sorry in advance :)
      </p>
      <br />
      {/* Render levels */}
      {levelsData.map((levelData) => (
        <div key={levelData.level} className="level-container">
          <img src={levelData.image} alt={`Level ${levelData.level} Image`} />
          <div className="image-text">
            <p>{levelData.description}</p>
          </div>
        </div>
      ))}
      <br />
      <h2>Tips</h2>
      <p className="tips">
        Just as a little tip, I went a little crazy with where and how to hide
        melons and paths. Some of them are cheeky, where I replaced a terrain
        (wall/floor) texture with the same texture, but in the background. When
        I did this, I tried to make it obvious and lenient, such as in the
        screenshot in Level 7. There, you can jump into the wall just below that
        box, where you'd then need to jump around to reach the top of the box.
        My friend also found that you could time your double jump on the Fan to
        reach the box the 'legit' way.
      </p>
      <p>For Hidden Textures, there is one in Levels 5, 6, 7, and 8.</p>
    </div>
  );
}

export default Collectibles;
