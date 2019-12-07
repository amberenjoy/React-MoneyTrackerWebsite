import React from 'react';

class PriceForm extends React.Component {
    render() {
        return (
            <form className='border p-4 mt-4 rounded' style={{ backgroundColor: '#fff' }}>
                <div className='form-group row'>
                    <label className="col-sm-2 col-form-label">Title:</label>
                    <div className="col-sm-10 ">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className='form-group row '>
                    <label className="col-sm-2 col-form-label">Expenses:</label>
                    <div className="col-sm-10 input-group flex-nowrap">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping">$</span>
                        </div>
                        <input type="number" className="form-control" />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className="col-sm-2 col-form-label">Date:</label>
                    <div className="col-sm-10 ">
                        <input type="date" className="form-control" />
                    </div>
                </div>
                <div className='text-center'>
                    <button type='submit' className='btn btn-primary'>Submit</button> &nbsp;
                    <button type='submit' className='btn btn-danger'>Cancel</button>
                </div>
            </form>
        )
    }
}

export default PriceForm;