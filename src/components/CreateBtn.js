import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';

const CreateBtn = ({ onClick }) => {
  return (
    <button
      className='btn btn-primary btn-block d-flex justify-content-center align-items-center text-uppercase'
      onClick={e => onClick()}
    >
      <Ionicon
        className='rounded-circle'
        fontSize='30px'
        color='#fff'
        icon='ios-add-circle'
      />
      Create a new accounting log
    </button>
  );
};
CreateBtn.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CreateBtn;
