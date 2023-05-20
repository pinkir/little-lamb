
const LambCard = ({ toy }) => {
    const { sub_category, picture, price, rating, toy_name } = toy || {};
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Toy Name: {toy_name}</h2>
                <p className="card-title">Price: $  {price}</p>
                <p className="card-title">
                Rating: {rating}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default LambCard;