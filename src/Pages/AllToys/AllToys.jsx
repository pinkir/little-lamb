import { useLoaderData } from "react-router-dom";
import AllToyTable from "./AllToyTable";

import useTitle from "../../hooks/useTitle";


const AllToys = () => {

    const toys = useLoaderData()
    useTitle('All Toy');
    


    return (
        <div>
            <h2 className="text-center text-4xl mt-16 mb-5 text-green-700">All Toys</h2>
            
            <div className="overflow-x-auto w-full max-w-6xl mx-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Edit/Delete</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <AllToyTable
                                key={toy._id}
                                toy={toy}
                            ></AllToyTable>)
                        }
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default AllToys;