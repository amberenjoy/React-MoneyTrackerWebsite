import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';

const PriceList = ({ items, onModifyItem, onDeleteItem }) => {
    return (
        <ul className='list-group'>
            {
                items.map((item) => (
                    <li key={item.id} className='list-group-item d-flex justify-content-between align-content-center' >
                        <span className='col-1 badge badge-pill badge-primary'>
                            <Ionicon className='rounded-circle' fontSize='30px' style={{ backgroundColor: '#007bff', padding: '5px' }} color={'#fff'} icon={item.category.iconName} /> </span>
                        <span className='col-5 text-uppercase'>{item.title}</span>
                        <span className='col-2 font-weight-bold'>
                            {item.category.type === 'income' ? '+' : '-'}
                            {item.price} 元
                        </span>
                        <span className='col-2'>{item.date}</span>
                        <a className='col-1 ' onClick={() => {
                            onModifyItem(item)
                        }}><Ionicon className='rounded-circle' fontSize='30px' style={{ backgroundColor: '#169e27', padding: '5px' }} color={'#fff'} icon={'ios-create'} /></a>
                        <a className='col-1' onClick={() => {
                            onDeleteItem(item)
                        }}><Ionicon className='rounded-circle' fontSize='30px' style={{ backgroundColor: '#dc3545', padding: '5px' }} color={'#fff'} icon={'ios-close'} /></a>
                    </li>
                ))
            }
        </ul>
    )
}

PriceList.propTypes = {
    items: PropTypes.array.isRequired,
    onModifyItem: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired
}

// Specifies the default values for props:
PriceList.defaultProps = {
    onModifyItem: () => { }
};

export default PriceList;