const quirkyPowers = [
  {
    id: 1,
    title: "VendoMind",
    description: "Can control vending machines with his mind",
  },
  {
    id: 2,
    title: "SneakPeek",
    description: "Turns invisible only when no one is looking",
  },
  {
    id: 3,
    title: "Pigeon Whisperer",
    description: "Communicates fluently with pigeons",
  },
  {
    id: 4,
    title: "Confetti Cannon",
    description: "Shoots confetti instead of bullets — and it *hurts*",
  },
  {
    id: 5,
    title: "Trash Summoner",
    description: "Can summon slightly annoyed raccoons at will",
  },
  {
    id: 6,
    title: "Truth Bomb",
    description: "Makes enemies uncontrollably honest for 5 minutes",
  },
  {
    id: 7,
    title: "SpoonSniper",
    description: "Has perfect aim — but only when throwing spoons",
  },
  {
    id: 8,
    title: "JokeHealer",
    description: "Heals instantly but only after telling a dad joke",
  },
  {
    id: 9,
    title: "Misstep",
    description: "Can teleport — but always lands 3 feet to the left",
  },
  {
    id: 10,
    title: "DreadDealer",
    description: "Causes mild existential dread in villains",
  },
  {
    id: 11,
    title: "GlitterSweat",
    description: "Turns sweat into glitter under stress",
  },
  {
    id: 12,
    title: "LightSwitch",
    description: "Can change the color of traffic lights randomly",
  },
  {
    id: 13,
    title: "GiggleStrike",
    description: "Laughs so hard enemies forget why they were mad",
  },
  {
    id: 14,
    title: "CloneZone",
    description: "Can duplicate himself, but all clones are sarcastic",
  },
  {
    id: 15,
    title: "BrewLord",
    description: "Turns any liquid into lukewarm coffee",
  },
  {
    id: 16,
    title: "WallPhaser",
    description: "Can phase through walls — but only halfway",
  },
  {
    id: 17,
    title: "ToastLaser",
    description: "Shoots laser beams that smell like burnt toast",
  },
  {
    id: 18,
    title: "CrocsCurse",
    description: "Turns enemies’ shoes into crocs",
  },
  {
    id: 19,
    title: "WhisperLinguist",
    description: "Can understand any language, but only if whispered",
  },
  {
    id: 20,
    title: "PocketMess",
    description: "Has a pocket dimension that’s just a messy bedroom",
  },
  {
    id: 21,
    title: "BubbleFog",
    description: "Summons a fog that smells like bubblegum",
  },
  {
    id: 22,
    title: "HoverTwo",
    description: "Can levitate, but only two inches above the ground",
  },
  {
    id: 23,
    title: "NoodleFighter",
    description: "Turns any weapon into a pool noodle for 10 seconds",
  },
  {
    id: 24,
    title: "CatMagnet",
    description: "Attracts stray cats wherever they go",
  },
  {
    id: 25,
    title: "QuoteCaster",
    description: "Speaks only in movie quotes during combat",
  },
  {
    id: 26,
    title: "GoldfishFreeze",
    description: "Can stop time — but only for goldfish",
  },
  {
    id: 27,
    title: "HairPasta",
    description: "Turns enemies’ hair into spaghetti",
  },
  {
    id: 28,
    title: "SoundtrackHero",
    description: "Can make any song play in the background dramatically",
  },
  {
    id: 29,
    title: "Clothesless",
    description: "Turns invisible, but their clothes don’t",
  },
  {
    id: 30,
    title: "Flashbacker",
    description: "Projects awkward flashbacks into opponents’ minds",
  },
  {
    id: 31,
    title: "UtensilSummoner",
    description: "Can summon a random kitchen utensil as a weapon",
  },
  {
    id: 32,
    title: "PlantTalker",
    description: "Has telepathy, but only with plants",
  },
  {
    id: 33,
    title: "StickyFingers",
    description: "Can make any object slightly sticky",
  },
  {
    id: 34,
    title: "ConeMaster",
    description: "Controls traffic cones with absolute precision",
  },
  {
    id: 35,
    title: "GlitterBomb",
    description: "Shoots bubbles that explode into glitter",
  },
  { id: 36, title: "Yawner", description: "Makes people yawn uncontrollably" },
  {
    id: 37,
    title: "GlassPhase",
    description: "Can phase through glass but not doors",
  },
  {
    id: 38,
    title: "FreshGrenade",
    description: "Turns air fresheners into grenades",
  },
  {
    id: 39,
    title: "CapeWind",
    description: "Summons a breeze just to make capes flutter",
  },
  {
    id: 40,
    title: "SneezeLaser",
    description: "Has laser eyes that only work when sneezing",
  },
  {
    id: 41,
    title: "ArguClone",
    description: "Creates duplicates that argue with each other",
  },
  {
    id: 42,
    title: "Rewindr",
    description: "Can rewind time by 3 seconds — once a day",
  },
  {
    id: 43,
    title: "BananaTrap",
    description: "Makes villains trip over invisible banana peels",
  },
  {
    id: 44,
    title: "ChairShift",
    description: "Can transform into a chair to eavesdrop",
  },
  {
    id: 45,
    title: "ShockMagnet",
    description: "Attracts lightning, but only during job interviews",
  },
  {
    id: 46,
    title: "DogDancer",
    description: "Can hypnotize dogs using interpretive dance",
  },
  {
    id: 47,
    title: "FoamShooter",
    description: "Shoots foam darts at supersonic speed",
  },
  {
    id: 48,
    title: "PinkyPower",
    description: "Has super strength but only in the pinky finger",
  },
  {
    id: 49,
    title: "RubberRevenge",
    description: "Turns enemies’ weapons into rubber chickens",
  },
  {
    id: 50,
    title: "ComplimentLift",
    description: "Makes objects levitate by giving them compliments",
  },
  {
    id: 51,
    title: "WiFiPort",
    description: "Can teleport through Wi-Fi networks",
  },
  {
    id: 52,
    title: "AwkwardAura",
    description: "Creates an aura of awkward silence",
  },
  {
    id: 53,
    title: "JusticeScent",
    description: "Smells like justice — literally",
  },
  {
    id: 54,
    title: "BirdBrain",
    description: "Can read thoughts but only of pigeons named Steve",
  },
  {
    id: 55,
    title: "ShadowSnake",
    description: "Turns shadows into real snakes for 10 seconds",
  },
  {
    id: 56,
    title: "ForgetMe",
    description: "Can make people forget what they were about to say",
  },
  {
    id: 57,
    title: "TearSpark",
    description: "Shoots glitter tears that explode",
  },
  {
    id: 58,
    title: "FlashbackTrap",
    description: "Makes enemies relive embarrassing childhood memories",
  },
  { id: 59, title: "HolyFizz", description: "Turns soda into holy water" },
  {
    id: 60,
    title: "SassyVine",
    description: "Can control plants, but they all have attitude",
  },
  {
    id: 61,
    title: "HoloGun",
    description: "Creates mini holograms that do finger guns",
  },
  {
    id: 62,
    title: "PunProphet",
    description: "Can predict the next bad joke in a room",
  },
  {
    id: 63,
    title: "KaraokeVision",
    description: "Can see through walls but only during karaoke",
  },
  {
    id: 64,
    title: "DuckStorm",
    description: "Summons a swarm of angry rubber ducks",
  },
  {
    id: 65,
    title: "EchoLag",
    description: "Can duplicate any sound but 0.5 seconds late",
  },
  {
    id: 66,
    title: "SandwichSight",
    description: "Has X-ray vision that only works on sandwiches",
  },
  {
    id: 67,
    title: "BounceWall",
    description: "Turns walls into trampolines temporarily",
  },
  {
    id: 68,
    title: "CelebShift",
    description: "Can shapeshift into any celebrity — badly",
  },
  {
    id: 69,
    title: "PopcornFog",
    description: "Creates fog that smells like burnt popcorn",
  },
  {
    id: 70,
    title: "DanceCurse",
    description: "Can make enemies break into spontaneous dance",
  },
  {
    id: 71,
    title: "SnackPocket",
    description: "Has pockets that can hold infinite snacks",
  },
  {
    id: 72,
    title: "TypoFixer",
    description: "Can erase small mistakes from reality (like typos)",
  },
  {
    id: 73,
    title: "Motivator",
    description: "Summons a motivational speaker mid-battle",
  },
  {
    id: 74,
    title: "SignalBooster",
    description: "Can make Wi-Fi signals stronger by flexing",
  },
  {
    id: 75,
    title: "BubbleSkin",
    description: "Turns anything they touch into bubble wrap",
  },
  {
    id: 76,
    title: "TubBreather",
    description: "Can breathe underwater but only in bathtubs",
  },
  {
    id: 77,
    title: "BirdBackup",
    description: "Summons emotional support pigeons in crisis",
  },
  {
    id: 78,
    title: "Chairmouflage",
    description: "Can disguise as furniture flawlessly",
  },
  {
    id: 79,
    title: "Vanisher",
    description: "Turns invisible during awkward conversations",
  },
  {
    id: 80,
    title: "MirrorMind",
    description: "Can control mirrors to make sarcastic comments",
  },
  {
    id: 81,
    title: "ChipmunkVoice",
    description: "Turns enemies’ voices into chipmunk sounds",
  },
  {
    id: 82,
    title: "GhostGossip",
    description: "Can talk to ghosts, but they all gossip",
  },
  {
    id: 83,
    title: "TalkBack",
    description: "Can rewind conversations by 10 seconds",
  },
  {
    id: 84,
    title: "CupRefiller",
    description: "Makes coffee cups refill themselves",
  },
  {
    id: 85,
    title: "LiftTroll",
    description: "Can control elevators but only to the wrong floor",
  },
  {
    id: 86,
    title: "TearHealer",
    description: "Turns tears into healing potions",
  },
  {
    id: 87,
    title: "SockPorter",
    description: "Can teleport but loses one sock each time",
  },
  {
    id: 88,
    title: "FilterFreak",
    description: "Projects random TikTok filters in real life",
  },
  {
    id: 89,
    title: "SneezeFreeze",
    description: "Can slow time, but only while sneezing",
  },
  {
    id: 90,
    title: "FoilTouch",
    description: "Turns all metal near them into aluminum foil",
  },
  {
    id: 91,
    title: "GumShield",
    description: "Has a force field made of bubblegum",
  },
  {
    id: 92,
    title: "UndoText",
    description: "Can erase someone’s last text message",
  },
  {
    id: 93,
    title: "ConfettiRain",
    description: "Turns rain into confetti showers",
  },
  {
    id: 94,
    title: "FrogArmy",
    description: "Can summon a small but loyal army of frogs",
  },
  {
    id: 95,
    title: "NarrationCurse",
    description: "Makes everyone nearby narrate their own actions",
  },
  {
    id: 96,
    title: "CakeLaser",
    description: "Has laser fingers that only cut through cake",
  },
  {
    id: 97,
    title: "FearMuffler",
    description: "Turns fear into mild amusement",
  },
  { id: 98, title: "BackFly", description: "Can fly — but only backwards" },
  {
    id: 99,
    title: "GlitterRage",
    description: "Turns sand into glitter whenever angry",
  },
  {
    id: 100,
    title: "RouterWhisperer",
    description: "Can hear Wi-Fi passwords being whispered by routers",
  },
];
export { quirkyPowers };
