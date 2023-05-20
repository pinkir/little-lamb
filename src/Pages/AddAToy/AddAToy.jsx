
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";



const AddAToy = () => {
    const {user} = useContext(AuthContext)
    const handleAddAToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const seller_name = form.seller_name.value;
        const toy_name
        = form.toy_name
        .value;
        const email = form.email.value;
        const sub_category = form.sub_category.value;
        const picture = form.picture.value;
        const description = form.description.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;

        const newToy = { seller_name, toy_name, email, sub_category, picture, description, price, quantity, rating };
        console.log(newToy);


        // add a toy
        fetch('http://localhost:5000/tabToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Toy Added',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }
    return (
        <div className="bg-slate-100">
            <h3 className="text-center text-4xl pt-16">Add A Toy</h3>
            <form onSubmit={handleAddAToy} className="pb-16">
                <div className="flex justify-center gap-6 mb-4">
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <label className="input-group">
                                <span>Seller Email</span>
                                <input type="text" placeholder="info@site.com" className="input input-bordered"
                                    name="email"
                                    defaultValue={user?.email} />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <label className="input-group">
                                <span>Seller Name</span>
                                <input type="text" placeholder="seller name" className="input input-bordered"
                                    name="seller_name"/>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <label className="input-group">
                                <span>Toy Name</span>
                                <input type="text" placeholder="seller name" className="input input-bordered"
                                    name="toy_name"/>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture Url</span>
                            </label>
                            <label className="input-group">
                                <span>Picture Url</span>
                                <input type="url" placeholder="url" className="input input-bordered"
                                    name="picture" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <label className="input-group">
                                <span>Sub-category</span>
                                <input type="text" placeholder="Sub-category" className="input input-bordered"
                                    name="sub_category" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <span>Price</span>
                                <input type="text" placeholder="" className="input input-bordered"
                                    name="price" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <span>Rating</span>
                                <input type="text" placeholder="" className="input input-bordered"
                                    name="rating" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <label className="input-group">
                                <span>Available quantity</span>
                                <input type="text" placeholder="" className="input input-bordered"
                                    name="quantity" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail description</span>
                            </label>
                            <label className="input-group">
                                <span>Detail description</span>
                                <input type="text" placeholder="" className="textarea"
                                    name="description" />
                            </label>
                        </div>

                    </div>

                </div>
                <input className="btn btn-block " type="submit" value="Add Toy" name="add" />
            </form>
        </div>
    );
};

export default AddAToy;