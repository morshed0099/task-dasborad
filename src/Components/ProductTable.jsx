import React from 'react';

const ProductTable = () => {
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Decription</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>

                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://th.bing.com/th?id=OIP.e1Tof5cgqWpYGpEYVcyIWwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                            <br />
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>480</td>
                        <th>
                            <button className="btn mr-2 btn-sm btn-info">Edit</button>
                            <button className="btn btn-success btn-sm">Delete</button>
                        </th>
                    </tr>
                    {/* row 2 */}
                    <tr>

                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://th.bing.com/th?id=OIP.e1Tof5cgqWpYGpEYVcyIWwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Brice Swyre</div>
                                    <div className="text-sm opacity-50">China</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Carroll Group
                            <br />
                            <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                        </td>
                        <td>500</td>
                        <th>
                            <button className="btn mr-2 btn-sm btn-info">Edit</button>
                            <button className="btn btn-success btn-sm">Delete</button>
                        </th>
                    </tr>
                    {/* row 3 */}
                    <tr>

                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://th.bing.com/th?id=OIP.e1Tof5cgqWpYGpEYVcyIWwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Marjy Ferencz</div>
                                    <div className="text-sm opacity-50">Russia</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Rowe-Schoen
                            <br />
                            <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                        </td>
                        <td>600</td>
                        <th>
                            <button className="btn mr-2 btn-sm btn-info">Edit</button>
                            <button className="btn btn-success btn-sm">Delete</button>
                        </th>
                    </tr>
                    {/* row 4 */}
                    <tr>

                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://th.bing.com/th?id=OIP.e1Tof5cgqWpYGpEYVcyIWwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Yancy Tear</div>
                                    <div className="text-sm opacity-50">Brazil</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Wyman-Ledner
                            <br />
                            <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                        </td>
                        <td>700</td>
                        <th>
                            <button className="btn mr-2 btn-sm btn-info">Edit</button>
                            <button className="btn btn-success btn-sm">Delete</button>
                        </th>
                    </tr>
                </tbody>


            </table>
        </div>
    );
};

export default ProductTable;