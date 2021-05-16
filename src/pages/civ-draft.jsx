import React, { useState } from 'react';

const maps = ['bogSocratra', 'crochetbia', 'ponds', 'tideout', 'reverseArena'];

const civs = ['Aztecs','Berbers','Britons','Bulgarians', 'Burgundians', 'Burmese','Byzantines','Celts','Chinese','Cumans','Ethiopians','Franks','Goths',
'Huns','Incas','Indians','Italians','Japanese','Khmer','Koreans','Lithuanians','Magyars','Malay','Malians','Mayans','Mongols','Persians','Portuguese',
'Saracens', 'Sicilians', 'Slavs','Spanish','Tatars','Teutons','Turks','Vietnamese','Vikings'
]

const mapCivs = civs.map(civ => {
    return (
        <div>
            <div className='flex col'>
            <div 
                className={`box2 ${civ}`}
                // onClick={() => (addMap(map))}
            >
                {/* {mapUsed && 'X'} */}
            </div>
            <p>{civ}</p>
            </div>
        </div>
    )
})


export const CivDraft = () => {
    const [playerOneName, setPlayerOneName] = useState('Player 1');
    const [playerTwoName, setPlayerTwoName] = useState('Player 2');
    const [componentIndex, setComponentIndex] = useState(0);
    const [playerOneMap, setPlayerOneMap] = useState('');
    const [playerTwoMap, setPlayerTwoMap] = useState('');

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
                        <div className="box3">X</div>
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
                        <div className="box3">X</div>
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
        { name: 'P1: pick 1 civ' },
        { name: 'P2: pick 2 civs' },
        { name: 'P1: pick 2 civs' },
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
            if(componentIndex === 0){
                return
            } else if (componentIndex === 1 && map !== playerTwoMap) {
                setPlayerOneMap(map);
            } else if (componentIndex === 2 && map !== playerOneMap){
                setPlayerTwoMap(map);
            }
        }

    const mapMaps = maps.map(map => {
        const mapUsed = map === playerOneMap || map === playerTwoMap
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

    return (
        <div className='page'>
            <div className="panel">
                {mapSteps}
            </div>
            <div className='container'>
                <div className="flex">
                    <div className="player">
                        <div className="maps left">
                            <h1>{playerOneName}</h1>
                            <div className="box"></div>
                            <div className={`box2 ${playerOneMap}`}></div>
                        </div>
                        <div className="civs left">
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                    </div>
                    <div className="player">
                        <div className="maps">
                            <div className={`box2 ${playerTwoMap}`}></div>
                            <div className="box"></div>
                            <h1>{playerTwoName}</h1>
                        </div>
                        <div className="civs">
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                    </div>
                </div>
                <div className="display">
                    {componentIndex < 3 ? mapMaps : mapCivs}
                </div>
                {steps[componentIndex].component}
            </div>

        </div>
    )
}