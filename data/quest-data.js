// quests[0].choices[0].description; ==> 'negotiate with them'
// Alcubierre Distillate, Heirs aboard, True Heirs aboard, Honor
// discovery of a treasure fleet, the Traveling Saint in Search of Tombs has a guest, the Waif's True Nature is Revealed, the Grand Dragon Admiral seeks your Counsel, spice walkers fleeing a vacuum bubble catastrophe, - grand dragon admiral and spice walkers are stretch goals

const fleet = {
    id: 'fleet',
    title: 'Discovery of a Treasure Fleet Orbiting a Darkstar',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'fleet.jpg',
    audio: 'fleet.wav',
    action: 'fleet-sound.wav',
    description: `
        As the Diamondclad crests a darkstar's event horizon and prepares to slingshot deeper into the Great Empty, a derelict Treasure Fleet drifts into view. Description of fleet. The Diamondclad's starforged engines can reach them through the shifting gravity fields, but it would be cheaper to the Diamondclad's store of distillate to continue along the original course. Already, the Alcubierre bubble is collapsing...
    `,
    choices: [{
        id: 'flee',
        description: 'Leave them to the hungry Darkstar, and continue on your way',
        result: `
            Only a fool risks the living for the dead. A word to the Navigator, and the Diamondclad remains on its course and abandons the treasure fleet to the Darkstar's maw. As you accelerate and the stars slide past, the fleet twinkles and disappears like a coin dropped into murky water. The Saint of Sorrows rests a hand against the viewport and sighs, but the Traveling Saint is already laughing and talking excitedly about your next destination. That night, you lie awake, imagining the tribute that was so important to a planet that they sent it across the Great Empty, and yet so meaningless to your mission you could not spare a moment and a scrap of fuel to satisfy your curiosity. Or was it?
        `,
        distillate: +1,
        honor: -1,
        heirFound: 0,
        trueHeirFound: 0,
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            Brandishing your sword you let out a warrior's cry and charge into the monsters
            hacking and slashing. Before long you stand panting gazing across the bodies of
            your vanquished foes. The bad news is you take 30 hp damage. The good news is you
            find 50 gold.
        `,
        distillate: +1,
        honor: -1,
        heirFound: 0,
        trueHeirFound: 0,
    }, {
        id: 'run',
        description: 'Run away like good Sir Robin',
        result: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `,
        distillate: +1,
        honor: -1,
        heirFound: 0,
        trueHeirFound: 0,
    }]
};

const dragon = {
    id: 'dragon',
    title: 'A Problem Dragon',
    map: {
        top: '57%',
        left: '67%'
    },
    image: 'dragon.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        You travel to a nearby village you have heard is being
        terrorized by a dragon. Sure enough as you rent a room
        in a local inn, you go outside and see the dragon about
        to lay seige! What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
        distillate: +1,
        honor: -1,
        heirFound: 0,
        trueHeirFound: 0,
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        distillate: +1,
        honor: -1,
        heirFound: 0,
        trueHeirFound: 0,
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
        distillate: +1,
        honor: -1,
        heirFound: 0,
        trueHeirFound: 0,
    }]
};

const treasure = {
    id: 'treasure',
    title: 'The Golden Treasure',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        distillate: +1,
        honor: -1,
        heirFound: 0,
        trueHeirFound: 0,
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        distillate: +1,
        honor: -1,
        heirFound: 0,
        trueHeirFound: 0,
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        distillate: +1,
        honor: -1,
        heirFound: 0,
        trueHeirFound: 0,
    }]
};

const quests = [fleet, treasure, dragon];

export default quests;