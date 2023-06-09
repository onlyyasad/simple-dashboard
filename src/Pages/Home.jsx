import CountUp from 'react-countup';
import { BiUpArrowAlt } from "react-icons/bi";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import SalesData from '../components/SalesData';
import ScoreCards from "../components/ScoreCards";

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
    const salesData = [
        {
            id: "a",
            category: "Electronics",
            date: "2023-01-15",
            totalSale: 50,
            totalSalePrice: 2500,
            totalProfit: 1500
        },
        {
            id: "b",
            category: "Clothing",
            date: "2023-02-10",
            totalSale: 30,
            totalSalePrice: 1200,
            totalProfit: 800
        },
        {
            id: "c",
            category: "Home Decor",
            date: "2023-03-22",
            totalSale: 25,
            totalSalePrice: 750,
            totalProfit: 500
        },
        {
            id: "d",
            category: "Books",
            date: "2023-04-05",
            totalSale: 40,
            totalSalePrice: 800,
            totalProfit: 400
        },
        {
            id: "e",
            category: "Sports",
            date: "2023-05-08",
            totalSale: 60,
            totalSalePrice: 3000,
            totalProfit: 1800
        },
        {
            id: "f",
            category: "Beauty",
            date: "2023-05-22",
            totalSale: 20,
            totalSalePrice: 600,
            totalProfit: 400
        },
        {
            id: "g",
            category: "Toys",
            date: "2023-06-01",
            totalSale: 35,
            totalSalePrice: 1050,
            totalProfit: 650
        }
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
            <ScoreCards></ScoreCards>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-8 space-y-6">
                    <div className="flex items-center justify-start text-xl gap-2 font-semibold">
                        <div className="h-6 w-2 bg-[#F5CAFF]"></div>
                        <h2>Revenue Stats</h2>
                    </div>
                    <div>
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <p className="text-3xl font-bold">$<CountUp end={278764} />k total revenue</p>
                            <p className="text-sm">(this week)</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-sm inline-flex items-center bg-green-200 text-green-500 p-1 rounded-md"><BiUpArrowAlt /> 27.8%</p>
                            <p className="text-sm">vs previous week</p>
                        </div>
                    </div>
                    {/* *****************************************************************************
                                            This is Graph/Chart Section  
                    ********************************************************************************/}
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
                {/* *****************************************************************************
                                            This is Extra Section  
                    ********************************************************************************/}
                <div className="md:col-span-4 space-y-6">
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
                {/* *****************************************************************************
                                            This is Table Section  
                    ********************************************************************************/}
                <SalesData salesData={salesData}></SalesData>
            </div>
        </div>
    );
};

export default Home;