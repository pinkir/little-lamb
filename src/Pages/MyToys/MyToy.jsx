import { useContext } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const MyToy = ({ myToy , handleDelete}) => {
    const { user } = useContext(AuthContext);
    const { _id,  toy_name,  sub_category, price, quantity, seller_name, description } = myToy;

    



    
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">

                    <div>
                        <div className="font-bold">{myToy?.seller_name}</div>

                    </div>
                </div>
            </td>
            <td className="text-green-700">
                {toy_name}
                <br />
            </td>
            <td>
                {sub_category}
                <br />

            </td>
            <td className="text-green-700">$ {price}</td>
            <td>{quantity}</td>

            <th>
                <Link to={`/updatetoy/${_id}`}><label htmlFor="my-modal-6" ><FaEdit className="mb-3"></FaEdit></label></Link>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                {/* <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <form className="pb-16">
                            <div className=" justify-center gap-6 mb-4">
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
                                                defaultValue={seller_name}/>
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
                                                defaultValue={toy_name}/>
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
                                                defaultValue={sub_category}/>
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
                                                name="price" defaultValue={price}/>
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
                    </div>
                </div> */}


                {/* <FaEdit className="mb-3"></FaEdit> */}
                <FaRegTrashAlt onClick={() => handleDelete(_id)}></FaRegTrashAlt>
            </th>

        </tr>
    );
};

export default MyToy;