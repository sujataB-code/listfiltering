import React, { useState } from 'react';
import { products } from '../data/constants/list';
import './listitems.css'

const ListItems = () => {
    const [search, setSearch] = useState('');
    return (
        <>
            <div className='main-wrapper' >
                <div>
                    <input
                    className='input-style'
                        type="text"
                        onChange={((e) => setSearch(e.target.value.toLowerCase()))}
                        placeholder='search here'
                    /></div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className="tablerow">Name</th>
                            <th className="tablerow" >Category</th>
                            <th className="tablerow">Price</th>
                            <th className="tablerow">Is Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* filter for the List Items */}
                        { products && products.filter((item) => {
                            <th>{item.name}</th>
                            return search.toLowerCase() === '' ? item : item?.name.toLowerCase().includes(search) || item?.category.toLowerCase().includes(search) || item?.price.toLowerCase().includes(search) || item?.available.toLowerCase().includes(search)
                        }).map((item) => (
                            <tr key={item.id}>
                                <td className="tablerow" >{item.name}</td>
                                <td className="tablerow" >{item.category}</td>
                                <td className="tablerow" >{item.price}</td>
                                <td className="tablerow" >{item.available}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>
        </>
    );
}
export default ListItems;