import React from 'react';
import CategorySelect from '../components/CategorySelect';
import { testCategories } from '../testData';
import PriceForm from '../components/PriceForm';

const Create = () => {
    return (
        <div className='create-page py-3 px-3 rounded mt-3'>
            <h3 className='text-center'>Create a new log</h3>
            <CategorySelect categories={testCategories} onSelectCategory={() => { }} />
            <PriceForm />
        </div>
    )
}



export default Create;