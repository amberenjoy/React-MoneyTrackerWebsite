import React from 'react';
import { shallow } from 'enzyme';
import ViewTab from '../ViewTab';
import { LIST_VIEW, CHART_VIEW } from '../../utility';

const props = {
    activeTab: LIST_VIEW,
    onTabChange: jest.fn(),
};
let wrapper;

describe('test ViewTab component ', () => {
    beforeEach(() => {
        wrapper = shallow(<ViewTab {...props} />)
    });
    it('Should render the component to match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.nav-item').length).toEqual(2);
    });
    it('should trigger the correct function callback', () => {
        const firstItem = wrapper.find('.nav-item').first();
        firstItem.find('a').first().simulate('click', {
            preventDefault: () => { }
        });
        expect(props.onTabChange).toHaveBeenCalled();
    });
})