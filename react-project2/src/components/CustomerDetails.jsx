function CustomerDetails({selected}) {
    // const selected = props.selected;
    // const {selected} = props
    return ( 
        <div>
            <h3 className="text-center p-2 text-bg-secondary">Customer Details {selected.id}</h3>
            <ul className="list-group">
                <li className="list-group-item">{selected.name}</li>
                { /*<li className="list-group-item">phone: {selected.phone}</li>
                <li className="list-group-item">website: {selected.website}</li>
                <li className="list-group-item">address{selected.address.street},
                {selected.address.suite}, {selected.address.city}, {selected.address.zipcode}
                </li> */}
            </ul>
        </div>
     );
}

export default CustomerDetails;