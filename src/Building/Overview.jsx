import { useState, useEffect } from 'react';

const itemLimitPerPage = 5;
const calcOffset = (pageNo) => (pageNo - 1) * itemLimitPerPage;
const calcMaxPage = (totalCount, itemLimitPerPage) => Math.ceil(totalCount / itemLimitPerPage);

function Overview() {
    const [buildings, setBuildings] = useState([]);
    const [selected, setSelected] = useState(null);
    const [pageNo, setPageNo] = useState(1);
    const [totalCount, setTotalCount] = useState(0);

    function navToPage(pageNo) {
        // TODO: pageNo validation
        setPageNo(pageNo);
        GetData(calcOffset(pageNo), itemLimitPerPage)
            .then(({ results }) => {
                setBuildings(results.buildings);
                setTotalCount(results.totalCount);
            })
            .catch(err => {
                console.log("ERR:", err.message);
            })
    }

    useEffect(() => {
        navToPage(1);
    }, [])

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
                    <BuildingsList
                        buildings={buildings}
                        setSelected={setSelected}
                        pageNo={pageNo}
                        totalCount={totalCount}
                        navToPage={navToPage}
                    />
                </div>
            </div>
        </div>
    )
}

function BuildingInfo(props) {
    return (
        <div>
            <div>
                Name: {props.selected.BuildingLocation}
            </div>
            <div>
                Type: {props.selected.PrimaryPropertyType}
            </div>
            <div>
                Info: {props.selected.BuildingInfo}
            </div>
            <Map />
        </div>
    )
}

function Map() {
    return (
        <div style={{ height: '50px', backgroundColor: 'green' }}></div>
    )
}

const backendURL = process.env.REACT_APP_BACKEND_URL;
function GetData(offset, limit) {
    const url = `${backendURL}/buildings?offset=${offset}&limit=${limit}`; // TODO: change to use user/alerts
    console.log(`url: ${url}`);
    // const headers = new Headers();
    return fetch(url).then(response => response.json());
}

function BuildingsList(props) {
    return (
        <div>
            {props.buildings.map((building) => (
                <button
                    key={building.OSEBuildingID}
                    className="h-32 bg-gray-500 rounded-md flex items-center justify-center"
                    style={{ width: '100%' }}
                    onClick={() => props.setSelected(building)}
                >
                    {building.BuildingLocation}
                </button>
            ))}
            <br/>
            {
                props.pageNo > 1 &&
                <button
                    className="mx-5"
                    onClick={() => props.navToPage(props.pageNo - 1)}
                >
                    {"<--"}
                </button>
            }
            {props.pageNo} / {calcMaxPage(props.totalCount, itemLimitPerPage)}
            {
                (props.pageNo < calcMaxPage(props.totalCount, itemLimitPerPage)) &&
                <button
                    className="mx-5"
                    onClick={() => props.navToPage(props.pageNo + 1)}
                >
                    {"-->"}
                </button>
            }
        </div>
    )
}

export default Overview;