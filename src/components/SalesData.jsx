

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

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-md">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Category</th>
                            <th>Sale Count</th>
                            <th>Sale Amount</th>
                            <th>Profit</th>
                            <th>Last Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            salesData.map((data, idx) => <tr key={data.id}>
                                <th>{idx+1}</th>
                                <td>{data.category}</td>
                                <td>{data.totalSale}</td>
                                <td>${data.totalSalePrice}</td>
                                <td>${data.totalProfit}</td>
                                <td>{data.date}</td>
                                <td><button className="btn btn-sm normal-case">Details</button></td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default SalesData;