import React from 'react';
import { shallow } from 'enzyme';
import PriceList from '../PriceList';
import { items, categories } from '../../containers/Home';
import Ionicon from 'react-ionicons';

const itemsWithCategory = items.map(item => {
    item.category = categories[item.cid];
    return item
});

const props = {
    items: itemsWithCategory,
    onModifyItem: jest.fn(),
    onDeleteItem: jest.fn(),
};

let wrapper;

describe('test PriceList component ', () => {
    beforeEach(() => {
        wrapper = shallow(<PriceList {...props} />)
    });
    it('Should render the component to match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should render correct price items length', () => {
        expect(wrapper.find('.list-group-item').length).toEqual(itemsWithCategory.length);
    });
    it('should render correct icon and price for each item', () => {
        const iconList = wrapper.find('.list-group-item').first().find(Ionicon);
        expect(iconList.length).toEqual(3);
        expect(iconList.first().props().icon).toEqual(itemsWithCategory[0].category.iconName);
    });
    it('should trigger the correct function callback', () => {
        const firstItem = wrapper.find('.list-group-item').first();
        firstItem.find('a').first().simulate('click');
        expect(props.onModifyItem).toHaveBeenCalledWith(itemsWithCategory[0]);
        firstItem.find('a').last().simulate('click');
        expect(props.onDeleteItem).toHaveBeenCalledWith(itemsWithCategory[0]);
    });
})