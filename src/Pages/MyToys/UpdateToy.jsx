import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const UpdateToy = () => {
    const {user} = useContext(AuthContext);
    const update = useLoaderData();
    const {_id,  toy_name,  sub_category, price, quantity, seller_name, description} = update;

    const handleUpdateToys = event =>{
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

        const updateToy = { seller_name, toy_name, email, sub_category, picture, description, price, quantity, rating };
        console.log(updateToy);

        fetch(`https://little-lamb-server.vercel.app/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'success!',
                        text: 'Toy updated',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
        
    }

    
        
    

    


    return (
       
                    <form onSubmit={handleUpdateToys} className="pb-16">
                        <h3 className="text-center text-4xl text-yellow-400 mt-5">Update Toy</h3>
                        <div className=" justify-center gap-6 mb-4 flex">
                            
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
                                            name="seller_name"
                                            defaultValue={seller_name} />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <label className="input-group">
                                        <span>Toy Name</span>
                                        <input type="text" placeholder="toy name" className="input input-bordered"
                                            name="toy_name"
                                            defaultValue={toy_name} />
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
                                            name="sub_category"
                                            defaultValue={sub_category} />
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
                                            name="price" defaultValue={price} />
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
                                            name="quantity"
                                            defaultValue={quantity} />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Detail description</span>
                                    </label>
                                    <label className="input-group">
                                        <span>Detail description</span>
                                        <input type="text" placeholder="" className="textarea"
                                            name="description"
                                            defaultValue={description} />
                                    </label>
                                </div>

                            </div>

                        </div>
                        <input className="btn btn-block " type="submit" value="Update Toy" name="add" />
                    </form>
               
    );
};

export default UpdateToy;