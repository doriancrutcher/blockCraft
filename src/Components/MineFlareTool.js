const mineflayer = require("mineflayer");
const Block = require("prismarine-block")("1.8");
const Vec3 = require("vec3").Vec3;
const { pathfinder, Movements, goals } = require("mineflayer-pathfinder");
const GoalFollow = goals.GoalFollow;
const GoalBlock = goals.GoalBlock;
const { place_block } = require("mineflayer");
const { once } = require("events");

// const windows = require("./")("1.8");

const stoneBlock = new Block(1, 1, 0);

const Item = require("prismarine-item")("1.8");

const ironShovelItem = new Item(256, 1);

const notchItem = Item.toNotch(ironShovelItem);

// (Item.fromNotch(notchItem));

// (ironShovelItem);

let Set1;
let Set2;
let BlockInfo;
let BuildingPositionArray = [];
let MaxX;
let MaxY;
let MaxZ;
let MinX;
let MinY;
let MinZ;

// Support function
const sleep = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

const Jessica = mineflayer.createBot({
  host: "localhost",
  port: parseInt(process.argv[3]),
  username: "Jessica",
});
const Jerry = mineflayer.createBot({
  host: "localhost",
  port: "55545",
  username: "Jerry",
});

Jerry.loadPlugin(pathfinder);

const getPlayerInfo = () => {
  Jerry.player;
};

const followPlayer = () => {
  const playerCI = Jerry.players["cessna153"];

  if (!playerCI) {
    Jerry.chat(`Dor Dor? Where are you? :(`);
    d;
  } else {
    `${Object.keys(playerCI)}`;
    `${Object.keys(playerCI.entity)}`;
    `${playerCI.entity.position}`;
  }

  const mcData = require("minecraft-data")(Jerry.version);
  const movement = new Movements(Jerry, mcData);

  Jerry.pathfinder.setMovements(movement);

  const goal = new GoalFollow(playerCI.entity, 1);
  Jerry.pathfinder.setGoal(goal, true);
};

const goAway = () => {
  const playerCI = Jerry.players["cessna153"];

  const mcData = require("minecraft-data")(Jerry.version);
  const movement = new Movements(Jerry, mcData);

  Jerry.pathfinder.setMovements(movement);

  const goal = new GoalFollow(playerCI.entity, 1);
  Jerry.pathfinder.setGoal(goal, false);
};

const locateDiamondOre = () => {
  const mcData = require("minecraft-data")(Jerry.version);
  const movement = new Movements(Jerry, mcData);
  Jerry.pathfinder.setMovements(movement);

  const diamondOre = Jerry.findBlock({
    matching: mcData.blocksByName.diamond_ore.id,
    maxDistance: 32,
  });
  diamondOre;
  if (!diamondOre) {
    Jerry.chat(`I can't find any`);
    return;
  }

  const x = diamondOre.position.x;
  const y = diamondOre.position.y;
  const z = diamondOre.position.z;
  Jerry.chat(x + "!");
  const goal = new GoalBlock(x, y + 1, z);

  Jerry.pathfinder.setGoal(goal, true);
};

// Jerry.once("spawn", followPlayer);

Jerry.on("spawn", async () => {
  const mcData = require("minecraft-data")(Jerry.version);
  const cobbleStoneId = mcData.itemsByName.cobblestone.id;
  cobbleStoneId;
});

Jerry.on("rain", () => {
  Jerry.chat("resetW");
});

const welcome = () => {
  Jerry.chat("howdy nerds");
  Jerry.chat("ohhhh myyy");
};

Jerry.once("spawn", welcome);

Jerry.once("spawn", () => {
  Jerry.mcData = require("minecraft-data")(Jerry.version);
});

//Jerry Motion Controls

const JerryMoves = (motion) => {
  switch (motion) {
    case "forward":
      Jerry.setControlState("forward", true);
      break;

    case "backwards":
      Jerry.setControlState("forward", true);

      break;

    case "left":
      Jerry.setControlState("left", true);

      break;

    case "right":
      Jerry.setControlState("forward", true);

      break;

    case "stop":
      Jerry.clearControlStates();

      break;

    case "north":
      Jerry.look((Math.PI * 0) / 180, 0);
      break;

    case "south":
      Jerry.look((Math.PI * 180) / 180, 0);
      break;

    case "east":
      Jerry.look((Math.PI * 90) / 180, 0);
      break;

    case "west":
      Jerry.look((Math.PI * 270) / 180, 0);
      break;
    default:
      break;
  }
};

// Jerry chat controls

Jerry.on("chat", async (username, message) => {
  const args = message.split(" ");
  if (args[0] === "item_id") {
    const itemName = args[1];
    const id = Jerry.mcData.itemsByName[itemName].id;
    Jerry.chat(`The item id for ${args[1]} is ${id}`);
  }

  if (args[0] === "move") {
    JerryMoves(args[1]);
  }

  if (args[0] === "find") {
    const id = Jerry.mcData.blocksByName[args[1]].id; // bot.dataLibrary.blockobjectbyname.idproperty
    const block = Jerry.findBlock({
      matching: id,
    });

    if (block !== null) {
      Jerry.chat(`block is at ${block.position}`);
    } else {
      Jerry.chat(`that block doesn't exist in this plane of existence`);
    }
  }

  if (args[0] === "type_list") {
    const types = Object.keys(Jerry.mcData);
    Jerry.chat(`${types}\n`);
    `${types}\n`;
  }

  if (args[0] === "inventory") {
    Jerry.inventory;
  }

  if (args[0] === "fetch") {
    locateDiamondOre();
  }

  if (args[0] === "resetW") {
    Jerry.chat("/weather clear");
    Jerry.chat("/time set day");
  }

  if (args[0] === "tool") {
    if (Jerry.mcData.itemsByName[args[1]] !== undefined) {
      const id = Jerry.mcData.itemsByName[args[1]].id;

      `The Id for ${args[0]} is ${id}`;
      Jerry.chat(`The Id for ${args[0]} is ${id}`);
    } else {
      Jerry.chat(`can't find that tool nerd`);
    }
  }

  if (args[0] === "holding") {
    Jerry.heldItem;
    Jerry.chat(`I am holding ${Jerry.heldItem.name}`);
  }

  if (args[0] === "follow") {
    followPlayer();
  }

  if (args[0] === "goaway") {
    goAway();
  }

  if (args[0] === "equip") {
    const Item = require("prismarine-item")("1.8");
    Jerry.mcData.findItemOrBlockByName("iron_shovel").id;

    const ironShovelItem = new Item(599, 1);
    ironShovelItem;
    Jerry.equip(Jerry.mcData.findItemOrBlockByName("iron_shovel").id, "hand");
  }

  if (args[0] === "build") {
    // ("the offset is ");

    setTimeout(async () => {
      let offsetVal = Jerry.entity.position.offset(0, -1, 0);
      let offsetVal2 = Jerry.entity.position.offset(1, -1, 0);
      let offsetVal3 = Jerry.entity.position.offset(-1, -1, 0);
      let offsetVal4 = Jerry.entity.position.offset(0, -1, 1);
      let offsetVal5 = Jerry.entity.position.offset(1, -1, 1);
      let offsetVal6 = Jerry.entity.position.offset(-1, -1, 1);
      let offsetVal7 = Jerry.entity.position.offset(0, -1, -1);
      let offsetVal8 = Jerry.entity.position.offset(1, -1, -1);
      let offsetVal9 = Jerry.entity.position.offset(-1, -1, -1);

      // const itemToPlace = Jerry.mcData.itemsByName[args[1]];
      // Jerry.placeBlock(itemToPlace, offsetVal);
      const referenceBlock = Jerry.blockAt(offsetVal);
      const referenceBlock2 = Jerry.blockAt(offsetVal2);
      const referenceBlock3 = Jerry.blockAt(offsetVal3);
      const referenceBlock4 = Jerry.blockAt(offsetVal4);
      const referenceBlock5 = Jerry.blockAt(offsetVal5);
      const referenceBlock6 = Jerry.blockAt(offsetVal6);
      const referenceBlock7 = Jerry.blockAt(offsetVal7);
      const referenceBlock8 = Jerry.blockAt(offsetVal8);
      const referenceBlock9 = Jerry.blockAt(offsetVal9);
      let JerryX = Jerry.entity.position.x;
      let JerryY = Jerry.entity.position.y;
      let JerryZ = Jerry.entity.position.z;
      Jerry.entity.position = new Vec3(JerryX, JerryY + 3, JerryZ);
      await sleep(0.1);

      Jerry.placeBlock(referenceBlock, offsetVal);
      Jerry.placeBlock(referenceBlock2, offsetVal2);
      Jerry.placeBlock(referenceBlock3, offsetVal3);
      Jerry.placeBlock(referenceBlock4, offsetVal4);
      Jerry.placeBlock(referenceBlock5, offsetVal5);
      Jerry.placeBlock(referenceBlock6, offsetVal6);
      Jerry.placeBlock(referenceBlock7, offsetVal7);
      Jerry.placeBlock(referenceBlock8, offsetVal8);
      Jerry.placeBlock(referenceBlock9, offsetVal9);
      Jerry.setControlState("jump", false);
    }, 0);
  }

  if (args[0] === "Me") {
    getPlayerInfo();
  }

  if (args[0] === "zone") {
    const Ref1 = mcData.itemsByName("sand").id;
    const Ref2 = mcData.itemsByName("bedrock").id;
    Jerry.chat(Ref1);
    Jerry.chat(Ref2);
  }

  if (args[0] === "run") {
    Jerry.chat("Set1 -82 4 -171");
    Jerry.chat("Set2 -83 4 -173");
    setTimeout(() => {
      Jerry.chat("recreate");
    }, 2000);
  }

  if (args[0] === "show") {
    BuildingInfo.forEach((x) => x);
  }

  if (args[0] === "recreate") {
    const mcData = require("minecraft-data")(Jerry.version);
    Jerry.entity.position;
    let wasBuildingHigherOrLowerThanJerry;
    let JerryX = Jerry.entity.position.x;
    let JerryY = Jerry.entity.position.y;
    let JerryZ = Jerry.entity.position.z;
    let CorrectionArray = [];

    const calibrateArray = (
      JerryX,
      JerryY,
      JerryZ,
      LowestX,
      LowestY,
      LowestZ
    ) => {
      let XDifference = Number(JerryX) - Number(LowestX);
      let YDifference = Number(JerryY) - Number(LowestY);
      let ZDifference = Number(JerryZ) - Number(LowestZ);

      "difference be", YDifference;

      CorrectionArray = BuildingPositionArray.map((Vec3Array) => {
        let changeX = Vec3Array.x + XDifference;
        let changeY = Vec3Array.y + YDifference;
        let changeZ = Vec3Array.z + ZDifference;
        MinY = LowestY;
        MinX = LowestX;

        Vec3Array.x = changeX;
        Vec3Array.y = changeY;
        Vec3Array.z = changeZ;
        return Vec3Array;
      });
    };

    // build building from the bottom up
    if (
      BuildingPositionArray[BuildingPositionArray.length - 1].y >
      BuildingPositionArray[0].y
    ) {
      console.log("last element is higher than first");
      calibrateArray(
        JerryX,
        JerryY,
        JerryZ,
        BuildingPositionArray[0].x,
        BuildingPositionArray[0].y,
        BuildingPositionArray[0].z
      );
    } else {
      Jerry.chat("first  element higher than last");
      calibrateArray(
        JerryX,
        JerryY,
        JerryZ,
        BuildingPositionArray[BuildingPositionArray.length - 1].x,
        BuildingPositionArray[BuildingPositionArray.length - 1].y,
        BuildingPositionArray[BuildingPositionArray.length - 1].z
      );
    }

    Jerry.chat("this works");
    let lastX = JerryX;
    let lastY = JerryY;
    let lastZ = JerryZ;

    let offsetValInit = Jerry.entity.position.offset(0, -1, 0);
    let offsetWalking;

    const referenceBlock = Jerry.blockAt(offsetValInit);

    const movement = new Movements(Jerry, mcData);

    Jerry.pathfinder.setMovements(movement);

    //workzone
    Jerry.creative.startFlying();
    for (let i = 0; i < CorrectionArray.length; i++) {
      Jerry.chat(BlockInfo[i]);
      if (BlockInfo[i] !== "air") {
        if (BlockInfo[i] !== Jerry.entity.heldItem.name) {
          let itemName = mcData.itemsByName[BlockInfo[i]];
          await Jerry.equip(itemName.id, "hand");
          await sleep(0.05);
        }
        // if (BlockInfo[i] !== "air") {
        //   let itemName = mcData.itemsByName[BlockInfo[i]];
        //   Jerry.equip(itemName.id, "hand");
        // }
        await sleep(0.1);
        console.log(CorrectionArray);
        let offset = CorrectionArray[i];
        offset.y = CorrectionArray[i].y;
        // let offset = Jerry.entity.position.offset(0, -1, 0);
        let refBlock = Jerry.blockAt(offset);

        JerryPosition = Jerry.entity.position;
        JX = CorrectionArray[i].x;
        JY = CorrectionArray[i].y;
        JZ = CorrectionArray[i].z;

        JerryX = JerryPosition.x;
        JerryY = JerryPosition.y;
        JerryZ = JerryPosition.z;

        DiffX = JerryX - JX;
        DiffY = JerryY - JY;
        DiffZ = JerryZ - JZ;

        if (Math.abs(DiffY) > 10) {
          Jerry.chat("correcting");
          Jerry.chat(DiffY);
          Jerry.chat(JerryX - MinX);

          Jerry.entity.position = new Vec3(
            CorrectionArray[0].x + 4,
            JerryY,
            JerryZ - 3
          );
          JerryX = Jerry.entity.position.x;
          JerryZ = Jerry.entity.position.z;
          // console.warn(Jerry.entity.position);
          await sleep(0.5);

          once(Jerry, "move");
          for (let correct = 0; correct < Math.abs(DiffY) - 1; correct++) {
            Jerry.chat(DiffY);

            Jerry.entity.position = new Vec3(
              JerryX,
              JerryY - correct,
              CorrectionArray[i].z
            );

            await sleep(0.1);

            once(Jerry, "move");
            JerryY = JerryPosition.y;

            Jerry.chat("my y" + JerryY);
            DiffY = JerryY - JY;
            Jerry.chat("I want" + DiffY);
          }
          await sleep(0.5);
          Jerry.entity.position = new Vec3(JerryX, MinY, JerryZ);
          once(Jerry, "move");
        }

        Jerry.entity.position = new Vec3(JX, JY + 2, JZ);

        await sleep(0.1);

        Jerry.placeBlock(refBlock, offset);
      }
    }
    Jerry.creative.stopFlying();
  }

  if (args[0] === "whereJerry") {
    let JerryHeight = Jerry.entity.position.y;
    let X = Jerry.entity.position.x;
    let Z = Jerry.entity.position.z;
    JerryHeight - 2;
    Jerry.chat(`My Height ${JerryHeight}`);
    Jerry.chat(`My X ${X}`);
    Jerry.chat(`My Z ${Z}`);
  }

  if (args[0] === "step") {
    console.log("old", Jerry.entity.position);
    let JerryY = Jerry.entity.position.y;
    let JerryZ = Jerry.entity.position.z;
    let JerryX = Jerry.entity.position.x;
    let arr = [1, 2, 3];
    // for (i = 0; i < 3; i++) {
    //   await sleep(2);
    //   let JerryX = Jerry.entity.position.x + i;

    //   //-35 4 -168
    //   // -37 4 -168
    //   // -36 6 -171
    //   Jerry.entity.position = new Vec3(-36, 6 + 1, -171);

    //   console.log(await once(Jerry, "move"));
    // }
    Jerry.entity.position = new Vec3(JerryX + 10, JerryY, JerryZ);
    console.log(await once(Jerry, "move"));
  }
});

Jerry.on("chat", (username, message) => {
  const args = message.split(" ");

  if (args[0] === "Set1") {
    Jerry.chat("setting up for new stage");
    BlockInfo = [];
    BuildingPositionArray = [];
    Set1 = args[1] + " " + args[2] + " " + args[3];
  }

  if (args[0] === "Set2") {
    Set2 = args[1] + " " + args[2] + " " + args[3];
    Jerry.chat("Stage");
  }

  if (args[0] === "GetSet1") {
    Set1;
  }

  if (args[0] === "GetSet2") {
    Set2;
    let Set2Array = Set2.split(" ");
    Jerry.blockAt(
      new Vec3(Number(Set2Array[0]), Number(Set2Array[1]), Number(Set2Array[2]))
    );
  }
  if (args[0] === "Stage") {
    let Set1Array = Set1.split(" ");
    let Set2Array = Set2.split(" ");

    let x1 = Number(Set1Array[0]);
    let y1 = Number(Set1Array[1]);
    let z1 = Number(Set1Array[2]);
    let x2 = Number(Set2Array[0]);
    let y2 = Number(Set2Array[1]);
    let z2 = Number(Set2Array[2]);
    let MaxBuildWidth = x2 - x1;
    let MaxBuildLength = y2 - y1;
    let MaxBuildHeight = z2 - z1;

    if (x1 > x2) {
      MaxX = x1;
      MinX = x2;
    } else {
      MaxX = x2;
      MinX = x1;
    }
    if (x1 > x2) {
      MaxX = x1;
      MinX = x2;
    } else {
      MaxX = x2;
      MinX = x1;
    }
    if (x1 > x2) {
      MaxX = x1;
      MinX = x2;
    } else {
      MaxX = x2;
      MinX = x1;
    }

    // console.log("----------------");
    // console.log(`${x1} ${x2}`);
    // console.log(`${y1} ${y2}`);
    // console.log(`${z1} ${z2}`);
    // console.log("----------------");

    // console.log(`${MaxBuildHeight} ${MaxBuildWidth} ${MaxBuildLength}`);

    if (z2 >= z1) {
      for (let z = 0; z < Math.abs(z2 - z1) + 1; z++) {
        if (y2 >= y1) {
          for (let y = 0; y < Math.abs(y2 - y1) + 1; y++) {
            if (x2 >= x1) {
              for (let x = 0; x < Math.abs(x2 - x1) + 1; x++) {
                BuildingPositionArray.push(new Vec3(x1 + x, y1 + y, z1 + z));
              }
            } else {
              for (let x = 0; x < Math.abs(x1 - x2) + 1; x++) {
                BuildingPositionArray.push(new Vec3(x2 + x, y1 + y, z1 + z));
              }
            }
          }
        } else {
          for (let y = 0; y <= Math.abs(y1 - y2) + 1; y++) {
            if (x2 >= x1) {
              for (let x = 0; x < Math.abs(x2 - x1) + 1; x++) {
                BuildingPositionArray.push(new Vec3(x1 + x, y2 + y, z1 + z));
              }
            } else {
              for (let x = 0; x < Math.abs(x1 - x2) + 1; x++) {
                BuildingPositionArray.push(new Vec3(x2 + x, y2 + y, z1 + z));
              }
            }
          }
        }
      }
    } else {
      for (let z = 0; z < Math.abs(z1 - z2) + 1; z++) {
        if (y2 >= y1) {
          for (let y = 0; y < Math.abs(y2 - y1) + 1; y++) {
            if (x2 >= x1) {
              for (let x = 0; x < Math.abs(x2 - x1) + 1; x++) {
                BuildingPositionArray.push(new Vec3(x1 + x, y1 + y, z2 + z));
              }
            } else {
              for (let x = 0; x < Math.abs(x1 - x2) + 1; x++) {
                BuildingPositionArray.push(new Vec3(x2 + x, y1 + y, z2 + z));
              }
            }
          }
        } else {
          for (let y = 0; y < Math.abs(y1 - y2) + 1; y++) {
            if (x2 >= x1) {
              for (let x = 0; x < Math.abs(x2 - x1) + 1; x++) {
                BuildingPositionArray.push(new Vec3(x1 + x, y2 + y, z2 + z));
              }
            } else {
              for (let x = 0; x < Math.abs(x1 - x2) + 1; x++) {
                BuildingPositionArray.push(new Vec3(x2 + x, y2 + y, z2 + z));
              }
            }
          }
        }
      }
    }
    // console.log("yoooooo");
    // console.log(BuildingPositionArray);
    // console.log(BlockInfo);

    BlockInfo = BuildingPositionArray.map((x) => {
      Jerry.blockAt;
      let BlockObject = Jerry.blockAt(x);
      return BlockObject.name;
    });

    BlockInfo;
    BuildingPositionArray;
    //The building copy will be broken up layer by layer

    Jerry.chat(
      `The build area dimensions are W: ${MaxBuildWidth} x L: ${MaxBuildLength} x H: ${MaxBuildHeight}`
    );
  }
});

// Jerry.equip(cobbleStone, "hand", onCobbleEquip);

// can you harvest stone with an iron pickaxe ?
// (stoneBlock.canHarvest(257));

// how many milliseconds does it takes in usual conditions ? (on ground, not in water and not in creative mode)
// (stoneBlock.digTime(257));

// const lookAtNearestPlayer = () => {
//   const playerFilter = (entity) => entity.type === "player";
//   const playerEntity = bot.nearestEntity(playerFilter);

//   if (!playerEntity) return;

//   bot.lookAt(pos);
// };

// bot.on("physicTick", lookAtNearestPlayer);
