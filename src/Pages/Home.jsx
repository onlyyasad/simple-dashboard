
import CountUp from 'react-countup';
import { BiUpArrowAlt } from "react-icons/bi";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import SalesData from '../components/SalesData';

const Home = () => {
    const data = [
        { name: 'Sun', revenue: 45000 },
        { name: 'Mon', revenue: 65000 },
        { name: 'Tue', revenue: 50000 },
        { name: 'Wed', revenue: 75000 },
        { name: 'Thu', revenue: 40000 },
        { name: 'Fri', revenue: 40000 },
        { name: 'Sat', revenue: 80000 },
    ];
    return (
        <div className="w-full space-y-4 p-4">
            <div className="flex items-center justify-start text-xl gap-2 font-semibold">
                <div className="h-6 w-2 bg-[#FFCFC2]"></div>
                <h2>Listing Overview</h2>
            </div>
            {/* *****************************************************************************
                                        This is Scorecard Section  
            ********************************************************************************/}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex gap-2 p-4 bg-[#F3FBFF] rounded-xl">
                    <div className="h-6 w-6 bg-[#C9EDFF] rounded-full"></div>
                    <div className="">
                        <p>Active listings</p>
                        <h2 className="text-4xl font-semibold"><CountUp end={2453} /></h2>
                        <p className="text-xs">765 this week</p>
                    </div>
                </div>
                <div className="flex gap-2 p-4 bg-[#FEF5F8] rounded-xl">
                    <div className="h-6 w-6 bg-[#FEC1DA] rounded-full"></div>
                    <div className="">
                        <p>Draft listings</p>
                        <h2 className="text-4xl font-semibold"><CountUp end={564} /></h2>
                        <p className="text-xs">85 this week</p>
                    </div>
                </div>
                <div className="flex gap-2 p-4 bg-[#FFF0EC] rounded-xl">
                    <div className="h-6 w-6 bg-[#FCCEC5] rounded-full"></div>
                    <div className="">
                        <p>Expired listings</p>
                        <h2 className="text-4xl font-semibold"><CountUp end={492} /></h2>
                        <p className="text-xs">79 this week</p>
                    </div>
                </div>
                <div className="flex gap-2 p-4 bg-[#FEF3FF] rounded-xl">
                    <div className="h-6 w-6 bg-[#E1A3E1] rounded-full"></div>
                    <div className="">
                        <p>Sold Out</p>
                        <h2 className="text-4xl font-semibold"><CountUp end={653} /></h2>
                        <p className="text-xs">25 this week</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="col-span-8 space-y-6">
                    <div className="flex items-center justify-start text-xl gap-2 font-semibold">
                        <div className="h-6 w-2 bg-[#F5CAFF]"></div>
                        <h2>Revenue Stats</h2>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <p className="text-3xl font-bold">$<CountUp end={278764} />k total revenue</p>
                            <p className="text-sm">(this week)</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-sm inline-flex items-center bg-green-200 text-green-500 p-1 rounded-md"><BiUpArrowAlt /> 27.8%</p>
                            <p className="text-sm">vs previous week</p>
                        </div>
                    </div>

                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <AreaChart
                                width={500}
                                height={400}
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <defs>
                                    <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#FBCFE8" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="name" />
                                <YAxis axisLine={false} />
                                <Tooltip />
                                <Area type="monotone" dataKey="revenue" stroke="#1D4ED8" fillOpacity={1} fill="url(#revenue)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="col-span-4 space-y-6">
                    <div className="flex items-center justify-start gap-2">
                        <div className="h-6 w-2 bg-[#C6EFFE]"></div>
                        <h2 className="text-xl font-semibold flex-grow">Sales Progress</h2>
                        <button className="text-end text-sm text-blue-700">View Details</button>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-2 p-4 bg-[#FEF3FF] items-center rounded-xl">
                            <div className="h-6 w-6 bg-[#E9CEF7] rounded-full"></div>
                            <div className="flex-grow">
                                <p className="font-bold">Clothing & Shoes</p>
                                <p className="text-xs">Men & Women</p>
                                <progress className="progress progress-secondary w-28 h-1" value="70" max="100"></progress>
                            </div>
                            <div><p className="text-sm flex items-center bg-[#E9CEF7] text-purple-500 p-1 rounded-md"><BiUpArrowAlt /> 27.8%</p></div>
                        </div>
                        <div className="flex gap-2 p-4 bg-[#FFFCF1] items-center rounded-xl">
                            <div className="h-6 w-6 bg-[#EECD62] rounded-full"></div>
                            <div className="flex-grow">
                                <p className="font-bold">Jewelry Items</p>
                                <p className="text-xs">Women</p>
                                <progress className="progress progress-warning w-28 h-1" value="70" max="100"></progress>
                            </div>
                            <div><p className="text-sm flex items-center bg-[#FEF2CB] text-[#EECD62] p-1 rounded-md"><BiUpArrowAlt /> 24.3%</p></div>
                        </div>
                        <div className="flex gap-2 p-4 bg-[#F3FBFF] items-center rounded-xl">
                            <div className="h-6 w-6 bg-[#C9EDFF] rounded-full"></div>
                            <div className="flex-grow">
                                <p className="font-bold">Home & Living</p>
                                <p className="text-xs">Men & Women</p>
                                <progress className="progress progress-info w-28 h-1" value="70" max="100"></progress>
                            </div>
                            <div><p className="text-sm flex items-center bg-green-200 text-green-500 p-1 rounded-md"><BiUpArrowAlt /> 21.1%</p></div>
                        </div>
                        <div className="flex gap-2 p-4 bg-[#F5F6FF] items-center rounded-xl">
                            <div className="h-6 w-6 bg-[#D6D9FE] rounded-full"></div>
                            <div className="flex-grow">
                                <p className="font-bold">Electronic Items</p>
                                <p className="text-xs">Men & Women</p>
                                <progress className="progress progress-primary w-28 h-1" value="70" max="100"></progress>
                            </div>
                            <div><p className="text-sm flex items-center bg-[#DDDFFE] text-[#838CFF] p-1 rounded-md"><BiUpArrowAlt /> 18.7%</p></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='space-y-6'>
                <div className="flex items-center justify-start text-xl gap-2 font-semibold">
                    <div className="h-6 w-2 bg-[#FFCFC2]"></div>
                    <h2>Listings</h2>
                </div>
                <SalesData></SalesData>
            </div>
        </div>
    );
};

export default Home;