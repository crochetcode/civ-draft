import React, { useState } from 'react';

const maps = ['bogSocratra', 'crochetbia', 'ponds', 'tideout', 'reverseArena'];

const civs = ['Aztecs', 'Berbers', 'Britons', 'Bulgarians', 'Burgundians', 'Burmese', 'Byzantines', 'Celts', 'Chinese', 'Cumans', 'Ethiopians', 'Franks', 'Goths',
    'Huns', 'Incas', 'Indians', 'Italians', 'Japanese', 'Khmer', 'Koreans', 'Lithuanians', 'Magyars', 'Malay', 'Malians', 'Mayans', 'Mongols', 'Persians', 'Portuguese',
    'Saracens', 'Sicilians', 'Slavs', 'Spanish', 'Tatars', 'Teutons', 'Turks', 'Vietnamese', 'Vikings'
]

export const CivDraft = () => {
    const [playerOneName, setPlayerOneName] = useState('');
    const [playerTwoName, setPlayerTwoName] = useState('');
    const [componentIndex, setComponentIndex] = useState(0);
    const [playerOneMap, setPlayerOneMap] = useState('');
    const [playerTwoMap, setPlayerTwoMap] = useState('');
    const [playerOneCivBan, setPlayerOneCivBan] = useState('');
    const [playerTwoCivBan, setPlayerTwoCivBan] = useState('');
    const [firstPick, pickFirst] = useState('');
    const [step7, pickStep7Civs] = useState([]);
    const [step8, pickStep8Civs] = useState([]);
    const [step9, pickStep9Civs] = useState([]);
    const [lastPick, pickLast] = useState('');

    const steps = [
        {
            name: 'names',
            component: (
                <>
                    <div className='flex'>
                        <div className='flex col name'>
                            <h1>Player 1:</h1>
                            <input
                                type="text"
                                onChange={e => setPlayerOneName(e.target.value)}
                                placeholder='Enter Name'
                                value={playerOneName}
                            />
                        </div>
                        <div className='flex col name'>
                            <h1>Player 2:</h1>
                            <input
                                type="text"
                                placeholder='Enter Name'
                                onChange={e => setPlayerTwoName(e.target.value)}
                                value={playerTwoName}
                            />
                        </div>
                    </div>
                    <div className='flex col'>
                        <button onClick={() => setComponentIndex(1)}>
                            Next
                        </button>
                    </div>
                </>
            )
        },
        {
            name: 'P1: home map',
            component: (
                <div className='flex'>
                    <div className="flex col name">
                        <div className={`box3 ${playerOneMap}`}></div>
                        <p>{playerOneMap}</p>
                    </div>
                    <div className='flex col name'>
                        <h2>{playerOneName} pick map</h2>
                        <button onClick={() => setComponentIndex(2)}>
                            Next
                        </button>
                    </div>
                </div>
            )
        },
        {
            name: 'P2: home map',
            component: (
                <div className='flex'>
                    <div className="flex col name">
                        <div className={`box3 ${playerTwoMap}`}></div>
                        <p>{playerTwoMap}</p>
                    </div>
                    <div className='flex col'>
                        <h2>{playerTwoName} pick map</h2>
                        <button onClick={() => setComponentIndex(3)}>
                            Next
                        </button>
                    </div>
                </div>
            )
        },
        {
            name: 'P2: ban civ',
            component: (
                <div className='flex'>
                    <div className="flex col">
                        <div className={`box3 ${playerTwoCivBan}`}>{playerTwoCivBan && 'X'}</div>
                        <p>{playerTwoCivBan}</p>
                    </div>
                    <div className='flex col'>
                        <h2>{playerTwoName} ban civ</h2>
                        <button onClick={() => setComponentIndex(4)}>
                            Next
                        </button>
                    </div>
                </div>
            )
        },
        {
            name: 'P1: ban civ',
            component: (
                <div className='flex'>
                    <div className="flex col">
                        <div className={`box3 ${playerOneCivBan}`}>{playerOneCivBan && 'X'}</div>
                        <p>{playerOneCivBan}</p>
                    </div>
                    <div className='flex col'>
                        <h2>{playerOneName} ban civ</h2>
                        <button onClick={() => setComponentIndex(5)}>
                            Next
                        </button>
                    </div>
                </div>
            )
        },
        {
            name: 'P1: pick 1 civ',
            component: (
                <div className='flex'>
                    <div className="flex col">
                        <div className={`box3 ${firstPick}`}></div>
                        <p>{firstPick}</p>
                    </div>
                    <div className='flex col'>
                        <h2>{playerOneName} pick 1 civ</h2>
                        <button onClick={() => setComponentIndex(6)}>
                            Next
                        </button>
                    </div>
                </div>
            )
        },
        {
            name: 'P2: pick 2 civs',
            component: (
                <div className='flex'>
                    <div className="flex col">
                        <div className={`box3 ${step7[0]}`}></div>
                        <p>{step7[0]}</p>
                    </div>
                    <div className="flex col">
                        <div className={`box3 ${step7[1]}`}></div>
                        <p>{step7[1]}</p>
                    </div>
                    <div className='flex col'>
                        <h2>{playerTwoName} pick 2 civs</h2>
                        <button onClick={() => setComponentIndex(7)}>
                            Next
                        </button>
                    </div>
                </div>
            )
        },
        {
            name: 'P1: pick 2 civs',
            component: (
                <div className='flex'>
                    <div className="flex col">
                        <div className={`box3 ${step8[0]}`}></div>
                        <p>{step8[0]}</p>
                    </div>
                    <div className="flex col">
                        <div className={`box3 ${step8[1]}`}></div>
                        <p>{step8[1]}</p>
                    </div>
                    <div className='flex col'>
                        <h2>{playerOneName} pick 2 civs</h2>
                        <button onClick={() => setComponentIndex(8)}>
                            Next
                        </button>
                    </div>
                </div>
            )
        },
        {
            name: 'P2: pick 2 civs',
            component: (
                <div className='flex'>
                    <div className="flex col">
                        <div className={`box3 ${step9[0]}`}></div>
                        <p>{step9[0]}</p>
                    </div>
                    <div className="flex col">
                        <div className={`box3 ${step9[1]}`}></div>
                        <p>{step9[1]}</p>
                    </div>
                    <div className='flex col'>
                        <h2>{playerTwoName} pick 2 civs</h2>
                        <button onClick={() => setComponentIndex(9)}>
                            Next
                        </button>
                    </div>
                </div>
            )
        },
        {
            name: 'P1: pick 1 civ',
            component: (
                <div className='flex'>
                    <div className="flex col">
                        <div className={`box3 ${lastPick}`}></div>
                        <p>{lastPick}</p>
                    </div>
                    <div className='flex col'>
                        <h2>{playerOneName} pick 1 civ</h2>
                        <button onClick={() => setComponentIndex(10)}>
                            Next
                        </button>
                    </div>
                </div>
            )
        },
        {
            name: 'Finish',
            component: (
                <div className="flex finished">
                    <div className="player">
                        <div className="maps left">
                            <h1>{playerOneName ? playerOneName : 'Player 1'}</h1>
                            <div className='flex col'>
                                <div className={`box2 ${playerOneCivBan}`}>{playerOneCivBan && 'X'}</div>
                                <p>{playerOneCivBan}</p>
                            </div>
                            <div className="flex col">
                                <div className={`box3 ${playerOneMap}`}></div>
                                <p>{playerOneMap}</p>
                            </div>
                        </div>
                        <div className="civs left">
                        <div className="flex col">
                                <div className={`box2 ${lastPick}`}></div>
                                <p>{lastPick}</p>
                            </div>
                            <div className="flex col">
                                <div className={`box2 ${step8[1]}`}></div>
                                <p>{step8[1]}</p>
                            </div>
                            <div className="flex col">
                                <div className={`box2 ${step8[0]}`}></div>
                                <p>{step8[0]}</p>
                            </div>
                            <div className="flex col">
                                <div className={`box2 ${firstPick}`}></div>
                                <p>{firstPick}</p>
                            </div>
                        </div>
                    </div>
                    <div className="player middle">
                        <div className="flex col">
                            <div className='box3 megarandom'></div>
                            <p>megarandom</p>
                        </div>
                    </div>
                    <div className="player right">
                        <div className="maps">
                            <div className="flex col">
                                <div className={`box3 ${playerTwoMap}`}></div>
                                <p>{playerTwoMap}</p>
                            </div>
                            <div className='flex col'>
                                <div className={`box2 ${playerTwoCivBan}`}>{playerTwoCivBan && 'X'}</div>
                                <p>{playerTwoCivBan}</p>
                            </div>
                            <h1>{playerTwoName ? playerTwoName : 'Player 2'}</h1>
                        </div>
                        <div className="civs">
                            <div className="flex col">
                                <div className={`box2 ${step7[0]}`}></div>
                                <p>{step7[0]}</p>
                            </div>
                            <div className="flex col">
                                <div className={`box2 ${step7[1]}`}></div>
                                <p>{step7[1]}</p>
                            </div>
                               <div className="flex col">
                                <div className={`box2 ${step9[0]}`}></div>
                                <p>{step9[0]}</p>
                            </div>
                            <div className="flex col">
                                <div className={`box2 ${step9[1]}`}></div>
                                <p>{step9[1]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ]

    const mapSteps = steps.map((step, i) => {
        return (
            <div
                className={`step ${componentIndex === i && 'selected'}`}
                onClick={() => setComponentIndex(i)}
            >
                {step.name}
            </div>
        )
    })

    const addMap = map => {
        if (componentIndex === 0) {
            return
        } else if (componentIndex === 1 && map !== playerTwoMap) {
            setPlayerOneMap(map);
        } else if (componentIndex === 2 && map !== playerOneMap) {
            setPlayerTwoMap(map);
        }
    }

    const mapMaps = maps.map(map => {
        const mapUsed = map === playerOneMap || map === playerTwoMap;
        return (
            <div className='flex col'>
                <div
                    className={`box3 ${map}`}
                    onClick={() => (addMap(map))}
                >
                    {mapUsed && 'X'}
                </div>
                <p>{map}</p>
            </div>
        )
    })

    const civUsed = civ => civ === playerOneCivBan || civ === playerTwoCivBan || step7.includes(civ) || step8.includes(civ) || step9.includes(civ) || civ === firstPick ||civ === lastPick;

    const addCiv = civ => {
        const usedCiv = civUsed(civ);
        if (step7.includes(civ)) {
            const newArray = [...step7];
            newArray.splice(step7.findIndex(el => el === civ), 1)
            pickStep7Civs(newArray);
        }

        if (step8.includes(civ)) {
            const newArray = [...step8];
            newArray.splice(step8.findIndex(el => el === civ), 1)
            pickStep8Civs(newArray);
        }

        if (step9.includes(civ)) {
            const newArray = [...step9];
            newArray.splice(step9.findIndex(el => el === civ), 1)
            pickStep9Civs(newArray);
        }

        if (componentIndex === 4 && !usedCiv) {
            setPlayerOneCivBan(civ);
        } else if (componentIndex === 3 && !usedCiv) {
            setPlayerTwoCivBan(civ);
        } else if (componentIndex === 5 && !usedCiv) {
         pickFirst(civ);
        } else if (componentIndex === 6 && !usedCiv) {
            const twoCivs = [...step7];

            if (twoCivs.length < 2) {
                twoCivs.push(civ);
            }
            pickStep7Civs(twoCivs);
        } else if (componentIndex === 7 && !usedCiv) {
            const twoCivs = [...step8];

            if (twoCivs.length < 2) {
                twoCivs.push(civ);
            }
            pickStep8Civs(twoCivs);
        } else if (componentIndex === 8 && !usedCiv) {
            const twoCivs = [...step9];

            if (twoCivs.length < 2) {
                twoCivs.push(civ);
            }
            pickStep9Civs(twoCivs);
        } else if (componentIndex === 9) {
            pickLast(civ);
        }
    }

    const mapCivs = civs.map(civ => {
        const usedCiv = civUsed(civ);
        return (
            <div>
                <div className='flex col'>
                    <div
                        className={`box2 ${civ}`}
                        onClick={() => (addCiv(civ))}
                    >
                        {usedCiv && 'X'}
                    </div>
                    <p>{civ}</p>
                </div>
            </div>
        )
    })

    return (
        <div className='page'>
            <div className="panel">
                {mapSteps}
            </div>
            <div className='container'>
                {componentIndex !== 10 && <div className="flex">
                    <div className="player">
                        <div className="maps left">
                            <h1>{playerOneName ? playerOneName : 'Player 1'}</h1>
                            <div className={`box ${playerOneCivBan}`}>{playerOneCivBan && 'X'}</div>
                            <div className={`box2 ${playerOneMap}`}></div>
                        </div>
                        <div className="civs left">
                            <div className={`box ${lastPick}`}></div>
                            <div className={`box ${step8[1]}`}></div>
                            <div className={`box ${step8[0]}`}></div>
                            <div className={`box ${firstPick}`}></div>
                        </div>
                    </div>
                    <div className="player">
                        <div className="maps">
                            <div className={`box2 ${playerTwoMap}`}></div>
                            <div className={`box ${playerTwoCivBan}`}>{playerTwoCivBan && 'X'}</div>
                            <h1>{playerTwoName ? playerTwoName : 'Player 2'}</h1>
                        </div>
                        <div className="civs">
                            <div className={`box ${step7[0]}`}></div>
                            <div className={`box ${step7[1]}`}></div>
                            <div className={`box ${step9[0]}`}></div>
                            <div className={`box ${step9[1]}`}></div>
                        </div>
                    </div>
                </div>}
                {componentIndex !== 10 && <div className="display">
                    {componentIndex < 3 ? mapMaps : mapCivs}
                </div>}
                {steps[componentIndex].component}
            </div>

        </div>
    )
}