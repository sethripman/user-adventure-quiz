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
        description: 'Leave them to the hungry Darkstar, and continue on your way.',
        result: `
            Only a fool risks the living for the dead. A word to the Navigator, and the Diamondclad remains on its course and abandons the treasure fleet to the Darkstar's maw. As you accelerate and the stars slide past, the fleet twinkles and disappears like a coin dropped into murky water. The Saint of Sorrows rests a hand against the viewport and sighs, but the Traveling Saint is already laughing and talking excitedly about your next destination. That night, you lie awake, imagining the tribute that was so important to a planet that they sent it across the Great Empty, and yet so meaningless to your mission you could not spare a moment and a scrap of fuel to satisfy your curiosity. Or was it?
        `,
        distillate: 1,
        honor: -1,
        heirFound: 0,
        trueHeirFound: 0,
    }, {
        id: 'tow',
        description: 'There may be survivors sealed in mirror prisons. Tow the fleet to safety, no matter the cost.',
        result: `
            The Diamondclad's engines heave with the strain of towing the treasure fleet free of the gravity well. The Waif sits by the engines and rests her metal hand against the wall, eyes closed, mouth moving slowly as she murmurs reassurance to the ancient vessel. You find no survivors amongst the great treasures of the lost world, but the other members of the crew look upon you with respect. That night, the Grand Dragon Admiral yields his seat at the high table to you. There is a moment of silence. Then the air fills with the clinking of silverware and friendly conversation.
        `,
        distillate: -2,
        honor: 2,
        heirFound: 0,
        trueHeirFound: 0,
    }, {
        id: 'plunder',
        description: 'The Droneswarm can reach the fleet, costing far less fuel than sending the Diamondclad itself. Send in the Unmakers.',
        result: `
            The iridescent swarm streaks blackly towards the treasure fleet, their beetlelike appendages silhouetted against the crimson glare of the darkstar. By your side, the Lover of Games raises a crust of bread and breaks it in half with their long surgeon's fingers. They chew loudly. The Droneswarm reaches the fleet and they bloom with green plasma, shredding the vessels as smaller drones dart between the beams to scoop up priceless baubles from the wreckage. The work is quick and before the Lover of Games has finished eating, the drones have returned to their bays and the treasure is claimed. The Waif sits on a pile of gems, playing with a metal skull filigreed in gold. She raises it and looks into the eye sockets. What she sees there, she will not say to you. You leave her to her games and return to the Captain's nest.
        `,
        distillate: -1,
        honor: 0,
        heirFound: 0,
        trueHeirFound: 0,
    }]
};

const saint = {
    id: 'saint',
    title: 'The Traveling Saint in Search of Tombs has a Dinner Guest',
    map: {
        top: '57%',
        left: '67%'
    },
    image: 'dragon.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        That evening, as the lightbeetles scuttling along the Diamondclad's ceiling cease their brightness and open their shells to reveal gently glowing bioluminescence, a letter written on real paper in a calligrapher's hand is delivered to you by the Grand Dragon Admiral. It bears the Traveling Saint's stamp, and he requests your presence for a private dinner with a guest. The newcomer is a human girl, bundled in furs, with a hunted look in her eyes. The Traveling Saint draws you both into conversation, and his jovial laughter eases the silence between you two. Finally, after six courses of perfumed meat, vatgrown seedlings, and sauced fungus, he pulls you close and asks if you will swear to keep a secret, no matter the cost to yourself or the mission. The girl watches and waits for your answer.
    `,
    choices: [{
        id: 'polite',
        description: 'You were ordained. Bound by priests to return the Waif to her father, the Emperor. You cannot vow against this mission. Politely decline and resume conversation.',
        result: `
            The Traveling Saint in Search of Tombs nods sadly. He too has sacrified much in pursuit of an impossible goal. Dinner concludes with a tray of small cakes that unfold like lotus flowers into fractal shapes. The flavor is so exquisite that it brings tears to your eyes. Across the table, the girl is crying too. The Traveling Saint reaches out and takes her tiny hand in his. The moment passes, and you retire to your cell sated and curious. But you do not question your decision. The mission comes first. The Emperor's heir must be returned. All else is ashes before that noble goal.
        `,
        distillate: -1,
        honor: 1,
        heirFound: 0,
        trueHeirFound: 0,
    }, {
        id: 'vow',
        description: 'Vow secrecy.',
        result: `
            She tells you the truth, that she is the true Heir. The Traveling Saint confirms this. You will keep her secret and deliver her with the Waif.
        `,
        distillate: -1,
        honor: 2,
        heirFound: 0,
        trueHeirFound: 1,
    }, {
        id: 'leave',
        description: 'Insulted by the suggest, leave them to their meal',
        result: `
            How dare the Traveling Saint insinuate that you would forsake your holy mission so easily? You storm out and leave them to their sins. He chases after you and begs your forgiveness and silence, offering a shard of distillate to sweeten the apology. You know that the Diamondclad is hungry, and see no harm in keeping this event between the two of you.
        `,
        distillate: +1,
        honor: -1,
        heirFound: 0,
        trueHeirFound: 0,
    }]
};

const waif = {
    id: 'waif',
    title: 'The Waif\'s True Nature Revealed',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        You wake from nightmares of the Demon's Forest and decide to walk through the Gardens to still your thoughts. Under the branches of an ancient baobab, you find the Waif curled around a songscroll. You gently extract it from her sleeping metal hands, and scan the contents. What you discover written there horrifies you. She is no Heir, but instead a child who wandered too deep into the Demon's Forest and became transfigured by the evil there. She is now a demon of the ancient world. She is far less, and far more. She is an electronic soul trapped in a false body. She wakes to find you looking down at her, songscroll in hand. She falls silent. The fear in her eyes is genuine. You have a choice.
    `,
    choices: [{
        id: 'seal',
        description: 'The Waif cannot help her nature, but she is a danger to all if returned to Earth. Seal her mind away in a mirror prison, so that she can sleep your lifetime away.',
        result: `
            She comes willingly to the jailer's chamber. I will return, she says, and it will be the doom of you all. You cannot pass through my forest forever without bringing a piece of me back. If not me, someone else.
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