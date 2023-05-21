

const AllToyTable = ({ toy }) => {
    
    const { _id, seller_name, toy_name, email, sub_category, picture, description, price, quantity, rating } = toy;
    return (
        <tr>
            
            <td>
                <div className="flex items-center space-x-3">
                    
                    <div>
                        <div className="font-bold">{toy?.seller_name}</div>
                        
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
                <button className="btn btn-ghost btn-xs"> View details</button>
            </th>
        </tr>
    );
};

export default AllToyTable;