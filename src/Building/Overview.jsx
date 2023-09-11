import { useState } from 'react';

const sampleBuildings = [
    {
        name: 'buildingA',
        info: "aisjdfia s",
    },
    {
        name: 'buildingB',
        info: "aisjdfia s",
    },
    {
        name: 'buildingC',
        info: "aisjdfia s",
    }
]

function Overview() {
    const [buildings, setBuildings] = useState(sampleBuildings);
    const [selected, setSelected] = useState(null);

    return (
        <div style={{ height: '100%' }}>
            <div class="grid grid-cols-5" style={{ height: '100%' }}>
                <div class="col-span-2 bg-gray-200">
                    {selected == null && <div>No Buildings selected</div>}
                    {selected != null &&
                        <BuildingInfo selected={selected} />
                    }
                </div>
                <div class="col-span-3 bg-gray-300">
                    <BuildingsList buildings={buildings} setSelected={setSelected} />
                </div>
            </div>
        </div>
    )
}

function BuildingInfo(props) {
    return (
        <div>
            <div>
                Name: {props.selected.name}
            </div>
            <div>
                Info: {props.selected.info}
            </div>
            <Map/>
        </div>
    )
}

function Map() {
    return (
        <div style={{height: '50px', backgroundColor: 'green'}}></div>
    )
}

function BuildingsList(props) {
    return (
        <div>
            {props.buildings.map((building) => (
                <button
                    key={building.id}
                    className="h-32 bg-gray-500 rounded-md flex items-center justify-center"
                    style={{ width: '100%' }}
                    onClick={() => props.setSelected(building)}
                >
                    {building.name}
                </button>
            ))}
            <button className="mx-5">{"<--"}</button>
            <button className="mx-5">{"-->"}</button>
        </div>
    )
}

export default Overview;