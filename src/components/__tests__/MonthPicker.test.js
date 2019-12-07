import React from 'react';
import ReactDOM from 'react-dom'
import { mount } from 'enzyme';
import MonthPicker from '../MonthPicker';

let props = {
    year: 2019,
    month: 11,
    onChange: jest.fn()
}

let wrapper;

describe('test MonthPicker component', () => {
    beforeEach(() => {
        wrapper = mount(<MonthPicker  {...props} />);
    });
    it('Should render the component to match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    // default statue and UI status
    it('Should render the component to match the snapshot', () => {
        const text = wrapper.find('.dropdown-toggle').first().text();
        expect(text).toEqual('2019.11.');
        expect(wrapper.find('.dropdown-menu').length).toEqual(0);
        expect(wrapper.state('isOpen')).toEqual(false);
        expect(wrapper.state('selectedYear')).toEqual(props.year);
    });

    it('after click the button, dropdown should show,  the year list and month list should display correct items', () => {
        wrapper.find('.dropdown-toggle').simulate('click');
        expect(wrapper.state('isOpen')).toEqual(true);
        expect(wrapper.find('.dropdown-menu').length).toEqual(1);
        expect(wrapper.find('.years-range .dropdown-item').length).toEqual(9);
        expect(wrapper.find('.months-range .dropdown-item').length).toEqual(12);

        expect(wrapper.find('.years-range .dropdown-item.active').text()).toEqual('2019');
        expect(wrapper.find('.months-range .dropdown-item.active').text()).toEqual('11');

        expect(wrapper.find('.years-range .dropdown-item').first().text()).toEqual(`${props.year - 4}`);
        expect(wrapper.find('.months-range .dropdown-item').first().text()).toEqual('01');
    });

    it('click the year and month item, should trigger the right status change', () => {
        wrapper.find('.dropdown-toggle').simulate('click');
        wrapper.find('.years-range .dropdown-item').first().simulate('click');
        expect(wrapper.find('.years-range .dropdown-item').first().hasClass('active')).toEqual(true);
        expect(wrapper.state('selectedYear')).toEqual(2015);
        wrapper.find('.months-range .dropdown-item').first().simulate('click');
        expect(wrapper.state('isOpen')).toEqual(false);
        expect(props.onChange).toHaveBeenCalledWith(2015, 1);
    });
    it('after the dropdown is shown, click the document and the dropdown will be closed ', () => {
        let eventMap = {};
        document.addEventListener = jest.fn((event, cb) => {
            eventMap[event] = cb;
        });
        const wrapper = mount(<MonthPicker  {...props} />);
        wrapper.find('.dropdown-toggle').simulate('click');
        expect(wrapper.state('isOpen')).toEqual(true);
        expect(wrapper.find('.dropdown-menu').length).toEqual(1);
        eventMap.click({
            target: ReactDOM.findDOMNode(wrapper.instance())
        });
        expect(wrapper.state('isOpen')).toEqual(true);
        eventMap.click({
            target: document
        });
        expect(wrapper.state('isOpen')).toEqual(false);
    })

})