import Overview from "./Overview";
import Chart from "./Chart";
import { useState } from 'react';

const TabOverview = 'Overview';
const TabCharts = 'Charts';

function Main() {
    const [tab, setTab] = useState(TabOverview);

    // TODO: if no login cookie, re-direct to login

    return (
        <div>
            <div>
                <span>SEATTLE BUILDING DATA VISUALIZATION</span>
                <button onClick={() => setTab(TabOverview)}>Overview</button>
                <button onClick={() => setTab(TabCharts)}>Charts</button>
            </div>
            
            { tab == TabOverview && <Overview/> }
            { tab == TabCharts && <Chart/> }            
        </div>
    )
}

export default Main;