import Overview from "./Overview";
import Chart from "./Chart";
import { useState } from 'react';

const TabOverview = 'Overview';
const TabCharts = 'Charts';

function Main() {
    const [tab, setTab] = useState(TabOverview);

    // TODO: if no login cookie, re-direct to login

    return (
        <div style={{ height: '100%' }}>
            <div>
                <span>SEATTLE BUILDING DATA VISUALIZATION</span>
                <button
                    className="w-32 h-10 bg-gray-200 rounded-md mx-3"
                    onClick={() => setTab(TabOverview)}>
                    Overview
                </button>
                <button
                    className="w-32 h-10 bg-gray-200 rounded-md mx-3"
                    onClick={() => setTab(TabCharts)}>
                    Charts
                </button>
            </div>

            {tab == TabOverview && <Overview />}
            {tab == TabCharts && <Chart />}

            <button className="rounded-md" style={{backgroundColor: 'red'}}>Sign Out</button>
        </div>
    )
}

export default Main;