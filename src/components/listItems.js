import React, { useState } from 'react';
import { products } from '../data/constants/list';

const ListItems = () => {
    const [search, setSearch] = useState('');
    return (
        <>
            <div style={{ width: '100%',marginTop:'20px' }}>
                <div>
                    <input
                        style={{ width: '100%', height: '50px', padding: '10px' ,boxSizing:'border-box'}}
                        type="text"
                        onChange={((e) => setSearch(e.target.value.toLowerCase()))}
                        placeholder='search here'
                    /></div>
                <table id="myTable" style={{marginTop:'20px',border:'1px solid black',height:'500px',width:'100%'}}>
                    <thead style={{backgroundColor:'gray',height:'50px'}}>
                        <tr>
                            <th style={{ width: '20%',border:'1px solid black' }}>Name</th>
                            <th style={{ width: '20%',border:'1px solid black' }}>Category</th>
                            <th style={{ width: '20%',border:'1px solid black' }}>Price</th>
                            <th style={{ width: '20%' ,border:'1px solid black'}}>Is Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        { products && products.filter((item) => {
                            <th>{item.name}</th>
                            return search.toLowerCase() === '' ? item : item?.name.toLowerCase().includes(search) || item?.category.toLowerCase().includes(search) || item?.price.toLowerCase().includes(search) || item?.available.toLowerCase().includes(search)
                        }).map((item) => (
                            <tr key={item.id}>
                                <th style={{ width: '20%',border:'1px solid black',fontWeight:'normal' }}>{item.name}</th>
                                <th style={{ width: '20%',border:'1px solid black',fontWeight:'normal' }}>{item.category}</th>
                                <th style={{ width: '20%',border:'1px solid black' ,fontWeight:'normal'}}>{item.price}</th>
                                <th style={{ width: '20%',border:'1px solid black',fontWeight:'normal' }}>{item.available}</th>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>
        </>
    );
}
export default ListItems;