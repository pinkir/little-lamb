import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const LambCard = ({ toy }) => {
    const { _id, picture, price, rating, toy_name } = toy || {};


    const toastBtn = () =>{
        Swal.fire({
            title: 'hey!',
            text: 'You have to login first to view details',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure ><img className="h-80 w-full" src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Toy Name: {toy_name}</h2>
                <p className="card-title">Price: $ {price}</p>
                <p className="card-title">Rating: $ {rating}</p>
                <div className="card-actions">
                    <Link onClick={toastBtn} to ={`/singletoy/${_id}`}>
                    <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LambCard;