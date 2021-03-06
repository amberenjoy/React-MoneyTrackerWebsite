import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';

const PriceList = ({ items, onModifyItem, onDeleteItem }) => {
  return (
    <ul className='list-group list-group-flush'>
      {items.map(item => (
        <li
          className='list-group-item d-flex
        justify-content-between align-items-center'
          key={item.id}
        >
          <span className='col-1'>
            <Ionicon
              className='rounded-circle'
              fontSize='30px'
              style={{ backgroundColor: 'blue', padding: '5px' }}
              color={'#fff'}
              icon={item.category.iconName}
            />
          </span>
          <span className='col-5'>{item.title}</span>
          <span className='col-2 font-weight-bold'>
            {item.category.type === 'income' ? '+' : '-'}
            {item.price}元
          </span>
          <span className='col-2'>{item.date}</span>
          <a
            className='col-1'
            role='button'
            onClick={event => {
              event.preventDefault();
              onModifyItem(item);
            }}
          >
            <Ionicon
              className='rounded-circle'
              fontSize='30px'
              style={{ backgroundColor: '#0000ff', padding: '5px' }}
              color={'#fff'}
              icon='ios-create-outline'
            />
          </a>
          <a
            className='col-1'
            role='button'
            onClick={event => {
              event.preventDefault();
              onDeleteItem(item);
            }}
          >
            <Ionicon
              className='rounded-circle'
              fontSize='30px'
              style={{ backgroundColor: 'red', padding: '5px' }}
              color={'#fff'}
              icon='ios-close'
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

PriceList.propTypes = {
  items: PropTypes.array.isRequired,
  onModifyItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired
};

// Specifies the default values for props:
PriceList.defaultProps = {
  onModifyItem: () => {}
};

export default PriceList;
