import CountUp from 'react-countup';

const ScoreCards = () => {
    
    return (
        <>
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
        </>
    );
};

export default ScoreCards;