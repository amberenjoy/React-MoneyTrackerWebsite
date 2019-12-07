import React from 'react';
import PropTypes from 'prop-types';

const TotalPrice = ({ income, outcome }) => (
    <div className="row" style={{ color: '#fff' }}>
        <h4 className="income col">
            Income: <span>{income}</span>
        </h4>
        <h4 className="outcome col">
            Outcome: <span>{outcome}</span>
        </h4>
    </div>
);
TotalPrice.propTypes = {
    income: PropTypes.number.isRequired,
    outcome: PropTypes.number.isRequired
};
export default TotalPrice;