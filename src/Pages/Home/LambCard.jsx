import { Link } from "react-router-dom";

const LambCard = ({ toy }) => {
    const { _id, picture, price, rating, toy_name } = toy || {};
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure ><img className="h-80 w-full" src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Toy Name: {toy_name}</h2>
                <p className="card-title">Price: $ {price}</p>
                <p className="card-title">Rating: $ {rating}</p>
                <div className="card-actions">
                    <Link to ={`/tabToys/${_id}`}>
                    <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LambCard;