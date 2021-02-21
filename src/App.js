import "./App.css";
import { ToggleBox } from "./components/left-menu.jsx";
import { IceLynxLogo } from "./components/ice-lynx-logo.jsx";
import { TopMenu } from "./components/top-bar-menu.jsx";

function App() {
  return (
    <div class="wrapper">
      <div class="body">
        <ToggleBox />
        <div class="content">
        <h1>Prince Ali Rescue</h1>
          <p>
            You would ideally start in Varrock, where you would buy or withdraw
            from your bank the minor related items required. You also need a
            pickaxe to mine with, an axe for Woodcutting, and a tinderbox though
            you may find ashes from someone else's fire. If you can't find ashes
            already, cut a tree, light the logs, and then wait for it to burn
            out while banking the axe and tinderbox you no longer need.
            Alternatively, you can kill an imp and take the ashes it drops.
            Bring your shears if you already have them to save time. You should
            also withdraw some cash to pay for the required items and toll gate
            crossings.
          </p>
          <p>
            Buy the pink skirt at the clothes shop, then leave by the south city
            exit. Buy the 3 (or 4) beers at the Blue Moon Inn on the way out, or
            take some from the longhall in the Barbarian Village for free.
          </p>
          <p>
            At the South-east Varrock mine, you can mine one tin and one copper
            ore to make a bronze bar, and pick one bunch of redberries from the
            nearby bushes, and then go to the sheep pen and shear three sheep.
            At the South-west Varrock mine, you can mine one clay.
          </p>
          <p>
            If you have not already started the quest, then go south into the Al
            Kharid desert area, passing the Al Kharid mine, down to the palace
            and begin the quest; then, talk to Hassan and then Osman. If you did
            not bring a bucket or jug of water you can grab the jug of water off
            of the table in the east room of the palace. Otherwise, take the
            road south towards Lumbridge. Cross the north bridge to the forge,
            and smith a bronze bar there, or use the Al Kharid forge if you are
            there.
          </p>
          <p>
            Go to Lumbridge Castle and spin all the wool. Take the jug from the
            kitchen and fill it with water if you didn't get the jug of water
            from the palace, then take a pot from the kitchen, and a bucket from
            the basement if you need them. Fill the bucket with water, wet the
            clay with it, then fill it again.
          </p>
        </div>
      </div>
      <div class="footer">
        <IceLynxLogo />
        Ice Lynx © {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default App;
