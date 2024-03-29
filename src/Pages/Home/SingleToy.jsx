import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const SingleToy = () => {
    const details = useLoaderData()
    useTitle('Toy Details')
    const { _id, picture, price, rating, toy_name, description, quantity, seller_name, email } = details;
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold mb-3 text-green-600">Toy Name: {toy_name}</h1>
                    <p className="">Seller: {seller_name}</p>
                    <p className="">Seller email: {email}</p>
                    <p className="">Price: ${price}</p>
                    <p className="">Quantity: {quantity}</p>
                    <p className="">Rating: {rating}</p>
                    <p className="py-6">Description: {description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleToy;