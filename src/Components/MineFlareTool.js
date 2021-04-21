const mineflayer = require("mineflayer");
const Block = require("prismarine-block")("1.8");
const Vec3 = require("vec3").Vec3;
const { pathfinder, Movements, goals } = require("mineflayer-pathfinder");
const GoalFollow = goals.GoalFollow;
const GoalBlock = goals.GoalBlock;
const { place_block } = require("mineflayer");

const stoneBlock = new Block(1, 1, 0);

console.log(stoneBlock);

const Item = require("prismarine-item")("1.8");

const ironShovelItem = new Item(256, 1);

const notchItem = Item.toNotch(ironShovelItem);
console.log(notchItem);

// console.log(Item.fromNotch(notchItem));

// console.log(ironShovelItem);

console.log(Object.keys(new Item()));

let Set1;
let Set2;

let bot,
  stringTo,
  isNotEmpty,
  isBlockEmpty,
  isBlockNotEmpty,
  isEmpty,
  processMessage,
  positionToString;

function init(
  _bot,
  _stringTo,
  _isNotEmpty,
  _isBlockEmpty,
  _isBlockNotEmpty,
  _isEmpty,
  _positionToString,
  _processMessage
) {
  bot = _bot;
  stringTo = _stringTo;
  isNotEmpty = _isNotEmpty;
  isBlockEmpty = _isBlockEmpty;
  isBlockNotEmpty = _isBlockNotEmpty;
  isEmpty = _isEmpty;
  positionToString = _positionToString;
  processMessage = _processMessage;
}

const Jessica = mineflayer.createBot({
  host: "localhost",
  port: parseInt(process.argv[3]),
  username: "Jessica",
});
const Jerry = mineflayer.createBot({
  host: "localhost",
  port: "56734",
  username: "Jerry",
});

Jerry.loadPlugin(pathfinder);

const getPlayerInfo = () => {
  console.log(Jerry.player);
};

const followPlayer = () => {
  const playerCI = Jerry.players["cessna153"];

  if (!playerCI) {
    Jerry.chat(`Dor Dor? Where are you? :(`);
  } else {
    console.log(`${Object.keys(playerCI)}`);
    console.log(`${Object.keys(playerCI.entity)}`);
    console.log(`${playerCI.entity.position}`);
  }

  const mcData = require("minecraft-data")(Jerry.version);
  const movement = new Movements(Jerry, mcData);

  Jerry.pathfinder.setMovements(movement);

  const goal = new GoalFollow(playerCI.entity, 1);
  Jerry.pathfinder.setGoal(goal, true);
};

const locateDiamondOre = () => {
  const mcData = require("minecraft-data")(Jerry.version);
  const movement = new Movements(Jerry, mcData);
  Jerry.pathfinder.setMovements(movement);

  const diamondOre = Jerry.findBlock({
    matching: mcData.blocksByName.diamond_ore.id,
    maxDistance: 32,
  });
  console.log(diamondOre);
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
  console.log(cobbleStoneId);
});

const welcome = () => {
  Jerry.chat("howdy nerds");
};

const ohMy = () => {
  Jerry.chat("ohhhh myyy");
};

Jerry.once("spawn", welcome);

Jerry.on("spawn", ohMy);

Jerry.once("spawn", () => {
  Jerry.mcData = require("minecraft-data")(Jerry.version);
});

Jerry.on("chat", (username, message) => {
  const args = message.split(" ");
  if (args[0] === "item_id") {
    const itemName = args[1];
    const id = Jerry.mcData.itemsByName[itemName].id;
    Jerry.chat(`The item id for ${args[1]} is ${id}`);
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
    console.log(`${types}\n`);
  }

  if (args[0] === "fetch") {
    locateDiamondOre();
  }

  if (args[0] === "tool") {
    if (Jerry.mcData.itemsByName[args[1]] !== undefined) {
      const id = Jerry.mcData.itemsByName[args[1]].id;

      console.log(`The Id for ${args[0]} is ${id}`);
      Jerry.chat(`The Id for ${args[0]} is ${id}`);
    } else {
      Jerry.chat(`can't find that tool nerd`);
    }
  }

  if (args[0] === "holding") {
    console.log(Jerry.heldItem);
    Jerry.chat(`I am holding ${Jerry.heldItem.name}`);
  }

  if (args[0] === "follow") {
    followPlayer();
  }

  if (args[0] === "equip") {
    const Item = require("prismarine-item")("1.8");

    const ironShovelItem = new Item(256, 1);

    if (Jerry.mcData.itemsByName[args[1]] !== undefined) {
      const itemToEquip = Jerry.mcData.itemsByName[args[1]].id;
      console.log(itemToEquip);
      console.log(`I'll put it on`);
      Jerry.equip(itemToEquip);
    } else {
      Jerry.chat(`I don't have that`);
    }
  }

  if (args[0] === "build") {
    // console.log("the offset is ");
    let offsetVal = Jerry.entity.position.offset(3, 0, 4);
    // const itemToPlace = Jerry.mcData.itemsByName[args[1]];
    // Jerry.placeBlock(itemToPlace, offsetVal);
    const referenceBlock = Jerry.blockAt(Jerry.entity.position.offset(3, 1, 0));
    console.log(referenceBlock);
    Jerry.placeBlock(referenceBlock, offsetVal);
  }

  if (args[0] === "Me") {
    console.log(getPlayerInfo());
  }

  if (args[0] === "zone") {
    const Ref1 = mcData.itemsByName("sand").id;
    const Ref2 = mcData.itemsByName("bedrock").id;
    Jerry.chat(Ref1);
    Jerry.chat(Ref2);
  }
});

Jerry.on("chat", (username, message) => {
  const args = message.split(" ");

  if (args[0] === "Set1") {
    Set1 = args[1] + " " + args[2] + " " + args[3];
  }

  if (args[0] === "Set2") {
    Set2 = args[1] + " " + args[2] + " " + args[3];
  }

  if (args[0] === "GetSet1") {
    console.log(Set1);
  }

  if (args[0] === "GetSet2") {
    console.log(Set2);
    let Set2Array = Set2.split(" ");
    console.log(
      Jerry.blockAt(
        new Vec3(
          Number(Set2Array[0]),
          Number(Set2Array[1]),
          Number(Set2Array[2])
        )
      )
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

    //The building copy will be broken up layer by layer

    Jerry.chat(
      `The build area dimensions are W: ${MaxBuildWidth} x L: ${MaxBuildLength} x H: ${MaxBuildHeight}`
    );
  }
});

// Jerry.equip(cobbleStone, "hand", onCobbleEquip);

// can you harvest stone with an iron pickaxe ?
// console.log(stoneBlock.canHarvest(257));

// how many milliseconds does it takes in usual conditions ? (on ground, not in water and not in creative mode)
// console.log(stoneBlock.digTime(257));

// const lookAtNearestPlayer = () => {
//   const playerFilter = (entity) => entity.type === "player";
//   const playerEntity = bot.nearestEntity(playerFilter);

//   if (!playerEntity) return;

//   bot.lookAt(pos);
// };

// bot.on("physicTick", lookAtNearestPlayer);
