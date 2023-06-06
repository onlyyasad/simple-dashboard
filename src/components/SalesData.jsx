import { useState } from 'react';
import { BsArrowRightSquare } from 'react-icons/bs';

const SalesData = ({ salesData }) => {

    const [sorted, setSorted] = useState(salesData);

    const handleProfitSort = event => {
        event.preventDefault();
        const sortValue = event.target.value;
        if (sortValue === "least") {
            const sortedData = [...sorted].sort((a, b) => {
                return a.totalProfit - b.totalProfit
            })
            setSorted(sortedData)
        }
        if (sortValue === "most") {
            const sortedData = [...sorted].sort((a, b) => {
                return b.totalProfit - a.totalProfit
            })
            setSorted(sortedData)
        }
    }

    const handleDateSort = event => {
        event.preventDefault()
        const sortValue = event.target.value;
        
        if (sortValue === "latest") {
            const sortedData = [...sorted].sort((a, b) => {
                return new Date(b.date) - new Date(a.date)
            })
            setSorted(sortedData)
        }
        if (sortValue === "oldest") {
            const sortedData = [...sorted].sort((a, b) => {
                return new Date(a.date) - new Date(b.date)
            })
            setSorted(sortedData)
        }
        
    }

    return (
        <div className="overflow-x-auto flex items-center max-w-sm md:max-w-md lg:max-w-full rounded-lg">
            <table className="table table-md">
                <thead className="bg-[#F3FBFF]">
                    <tr>
                        <th></th>
                        <th>Category</th>
                        <th>Sale Count</th>
                        <th>Sale Amount</th>
                        <th>
                            Profit
                            <select onChange={handleProfitSort} className="ml-1">
                                <option className='p-1'>Sort</option>
                                <option value="least" className='p-1'>Least</option>
                                <option value="most" className='p-1'>Most</option>
                            </select>
                        </th>
                        <th>
                            Updated
                            <select onChange={handleDateSort} className="ml-1">
                                <option className='p-1'>Sort</option>
                                <option value="latest" className='p-1'>Latest</option>
                                <option value="oldest" className='p-1'>Oldest</option>
                            </select>
                        </th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        sorted.map((data, idx) => <tr key={data.id}>
                            <th>{idx + 1}</th>
                            <td>{data.category}</td>
                            <td>{data.totalSale}</td>
                            <td>${data.totalSalePrice}</td>
                            <td>${data.totalProfit}</td>
                            <td>{data.date}</td>
                            <td><button className="btn btn-sm normal-case"><BsArrowRightSquare /></button></td>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default SalesData;