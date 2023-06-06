import { useState } from 'react';
import { BsArrowRightSquare } from 'react-icons/bs';

const SalesData = () => {

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

    const [sort, setSort] = useState(salesData);

    const handleProfitSort = event => {
        event.preventDefault();
        const sortValue = event.target.value;
        if (sortValue === "least") {
            const sortedData = salesData.sort((a, b) => {
                return a.totalProfit - b.totalProfit
            })
            // console.log(sortedData)
            setSort(sortedData)
        }
        if (sortValue === "most") {
            const sortedData = salesData.sort((a, b) => {
                return b.totalProfit - a.totalProfit
            })
            // console.log(sortedData)
            setSort(sortedData)
        }

    }

    const handleDateSort = event => {
        event.preventDefault()
        const sortValue = event.target.value;
        console.log(sortValue)

        if (sortValue === "latest") {
            const sortedData = salesData.sort((a, b) => {
                return new Date(b.date) - new Date(a.date)
            })
            setSort(sortedData)
        }
        if (sortValue === "oldest") {
            const sortedData = salesData.sort((a, b) => {
                return new Date(a.date) - new Date(b.date)
            })
            setSort(sortedData)
        }
        console.log(sort)
    }

    

    return (
        <div>
            <div className="overflow-x-auto rounded-lg">
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
                            sort.map((data, idx) => <tr key={data.id}>
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
        </div>
    );
};

export default SalesData;