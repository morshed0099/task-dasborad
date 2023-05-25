import React from 'react';
import ProductTable from '../Components/ProductTable';

const Products = () => {
    return (
        <div>
            <ProductTable />
            <div className=' mt-3 flex justify-center'>
                <div className="btn-group">
                    <button className="btn btn-active">1</button>
                    <button className="btn ">2</button>
                    <button className="btn">3</button>
                    <button className="btn">4</button>
                </div>
            </div>
        </div>
    );
};

export default Products;