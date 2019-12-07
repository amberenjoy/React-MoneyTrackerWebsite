import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';

const CreateBtn = ({ onClick }) => {
    return (
        <button className='btn btn-block btn-primary text-uppercase' onClick={() => onClick()}>
            <Ionicon className='rounded-circle mr-2' fontSize='20px' color={'#fff'} icon='ios-add-circle' />
            Create a new accounting log
        </button >
    )
}

export default CreateBtn;