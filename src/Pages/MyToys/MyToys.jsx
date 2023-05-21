import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToy from "./MyToy";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    useTitle('My Toys')

    useEffect(() => {
        fetch(`https://little-lamb-server.vercel.app/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [user])


    const [search, setSearch] = useState("")


    const handleSearch =() =>{
        fetch(`https://little-lamb-server.vercel.app/toySearch/${search}`)
        .then(res => res.json())
        .then(data => {
            setMyToys(data)
        })
    }


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://little-lamb-server.vercel.app/tabToys/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(toy => toy._id !== _id)
                            setMyToys(remaining)

                        }
                    })

            }
        })

    }
    
    return (
        <div className="mb-20">
            <h2 className="text-center text-4xl mt-16 mb-5 text-green-700">My Toys</h2>
            <div>
                <div className="form-control">
                    <div className="search justify-center text-center bg-green-700 p-3">
                        <input onChange={(e) => setSearch(e.target.value)}
                            type="text"  id="" />
                        <button onClick={handleSearch} className="btn">Search</button>
                    </div>
                </div>
            </div>
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
                            myToys.map(myToy => <MyToy
                                key={myToy._id}
                                myToy={myToy}
                                handleDelete={handleDelete}
                                
                            ></MyToy>)

                        }
                    </tbody>
                </table>

            </div>

        </div>

    );
};

export default MyToys;