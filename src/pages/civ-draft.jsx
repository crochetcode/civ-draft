import React, { useState } from 'react';

const maps = (
    <>
        <div className="box2">1</div>
        <div className="box2">2</div>
        <div className="box2">3</div>
        <div className="box2">4</div>
        <div className="box2">5</div>
    </>
)

const civs = (
    <>
        <div className="box2">1</div>
        <div className="box2">2</div>
        <div className="box2">3</div>
        <div className="box2">4</div>
        <div className="box2">5</div>
        <div className="box2">6</div>
        <div className="box2">7</div>
        <div className="box2">8</div>
        <div className="box2">9</div>
        <div className="box2">10</div>
        <div className="box2">11</div>
        <div className="box2">12</div>
        <div className="box2">13</div>
        <div className="box2">14</div>
        <div className="box2">15</div>
        <div className="box2">16</div>
        <div className="box2">17</div>
        <div className="box2">18</div>
        <div className="box2">19</div>
        <div className="box2">20</div>
        <div className="box2">21</div>
        <div className="box2">22</div>
        <div className="box2">23</div>
        <div className="box2">24</div>
        <div className="box2">25</div>
        <div className="box2">26</div>
        <div className="box2">27</div>
        <div className="box2">28</div>
        <div className="box2">29</div>
        <div className="box2">30</div>
        <div className="box2">31</div>
        <div className="box2">32</div>
        <div className="box2">33</div>
        <div className="box2">34</div>
        <div className="box2">35</div>
    </>
)



export const CivDraft = () => {
    const [playerOneName, setPlayerOneName] = useState('Player 1');
    const [playerTwoName, setPlayerTwoName] = useState('Player 2');
    const [componentIndex, setComponentIndex] = useState(0);

    const steps = [
        {
            name: 'names',
            component: (
                <>
                    <div className='flex'>
                        <div className='flex col'>
                            <h1>Player 1:</h1>
                            <input type="text" placeholder='Enter Name' onChange={e => setPlayerOneName(e.target.value)} />
                        </div>
                        <div className='flex col'>
                            <h1>Player 2:</h1>
                            <input type="text" placeholder='Enter Name' onChange={e => setPlayerTwoName(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex col'>
                        <button onClick={() => setComponentIndex(1)}>
                            Submit
                            </button>
                    </div>
                </>
            )
        },
        {
            name: 'P1: home map',
            component: (
                <div className='flex'>
                    <div className="flex col">
                        <div className="box2"></div>
                    </div>
                    <div className='flex col'>
                        <h2>{playerOneName} pick map</h2>
                        <button onClick={() => setComponentIndex(2)}>
                            Submit
                        </button>
                    </div>
                </div>
            )
        },
        { 
            name: 'P2: home map',
            component: (
                <div className='flex'>
                    <div className="flex col">
                        <div className="box2"></div>
                    </div>
                    <div className='flex col'>
                        <h2>{playerTwoName} pick map</h2>
                        <button onClick={() => setComponentIndex(3)}>
                            Submit
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
                        <div className="box2"></div>
                    </div>
                    <div className='flex col'>
                        <h2>{playerTwoName} ban civ</h2>
                        <button onClick={() => setComponentIndex(4)}>
                            Submit
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
                        <div className="box2"></div>
                    </div>
                    <div className='flex col'>
                        <h2>{playerOneName} ban civ</h2>
                        <button onClick={() => setComponentIndex(5)}>
                            Submit
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
                            <div className="box"></div>
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
                            <div className="box"></div>
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
                    {componentIndex < 3 ? maps : civs}
                </div>
                {steps[componentIndex].component}
            </div>

        </div>
    )
}