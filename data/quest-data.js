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
        distillate: 1,
        honor: -1,
        heirFound: 0,
        trueHeirFound: 0,
    }, {
        id: 'tow',
        description: 'Fiiiiiggghhhttt!',
        result: `
            Brandishing your sword you let out a warrior's cry and charge into the monsters
            hacking and slashing. Before long you stand panting gazing across the bodies of
            your vanquished foes. The bad news is you take 30 hp damage. The good news is you
            find 50 gold.
        `,
        distillate: -2,
        honor: 2,
        heirFound: 0,
        trueHeirFound: 0,
    }, {
        id: 'plunder',
        description: '',
        result: `
            
        `,
        distillate: -1,
        honor: 0,
        heirFound: 0,
        trueHeirFound: 0,
    }]
};

const saint = {
    id: 'saint',
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
        id: 'polite',
        description: '',
        result: `
            
        `,
        distillate: -1,
        honor: 1,
        heirFound: 0,
        trueHeirFound: 0,
    }, {
        id: '',
        description: '',
        result: `
            
        `,
        distillate: -1,
        honor: 2,
        heirFound: 0,
        trueHeirFound: 1,
    }, {
        id: '',
        description: '',
        result: `
            
        `,
        distillate: +1,
        honor: -1,
        heirFound: 0,
        trueHeirFound: 0,
    }]
};

const waif = {
    id: 'waif',
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
        id: 'seal',
        description: '',
        result: `
            
        `,
        distillate: -1,
        honor: +1,
        heirFound: 0,
        trueHeirFound: 0,
    }, {
        id: 'tatterdemalion',
        description: '',
        result: `
            
        `,
        distillate: -1,
        honor: 0,
        heirFound: 0,
        trueHeirFound: 0,
    }, {
        id: 'safeguard',
        description: '',
        result: `
            
        `,
        distillate: 2,
        honor: -2,
        heirFound: 1,
        trueHeirFound: 0,
    }]
};

const quests = [fleet, saint, waif];

export default quests;