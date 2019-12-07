import React, { Component } from 'react';
import logo from '../logo.svg';
import Ionicon from 'react-ionicons';

import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, parseToYearAndMonth, padLeft } from '../utility';
import MonthPicker from '../components/MonthPicker';
import PriceList from '../components/PriceList';
import TotalPrice from '../components/TotalPrice';
import ViewTab from '../components/ViewTab';
import CreateBtn from '../components/CreateBtn';
import { Tabs, Tab } from '../components/Tabs';
export const items = [
    {
        'id': 1,
        'title': 'traveling',
        'price': 3000,
        'date': '2019-09-19',
        'cid': 1
    },
    {
        'id': 2,
        'title': 'farewell',
        'price': 100,
        'date': '2019-10-19',
        'cid': 1
    },
    {
        'id': 3,
        'title': 'salary',
        'price': 4000,
        'date': '2019-11-19',
        'cid': 2
    }
];
export const categories = {
    '1': {
        'id': 1,
        'name': 'expenses',
        'type': 'outcome',
        'iconName': 'ios-plane'
    },
    '2': {
        'id': 2,
        'name': 'salary',
        'type': 'income',
        'iconName': 'ios-cash'
    }
};

export const newItem = {
    'id': 4,
    'title': 'salary',
    'price': 200,
    'date': '2019-11-21',
    'cid': 2
}

const tabsText = [LIST_VIEW, CHART_VIEW];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items,
            currentDate: parseToYearAndMonth(),
            tabView: tabsText[0]
        }
    }

    changeView = (index) => {
        this.setState({
            tabView: tabsText[index]
        })
    }

    changeDate = (year, month) => {
        this.setState({
            currentDate: { year, month }
        })
    }

    modifyItem = (modifiedItem) => {
        const modifiedItems = this.state.items.map(item => {
            if (item.id === modifiedItem.id) {
                return { ...item, title: 'new item' }
            } else {
                return item
            }
        })
        this.setState({
            items: modifiedItems
        })
    }

    createItem = () => {
        this.setState({
            items: [newItem, ...this.state.items]
        })
    }

    deleteItem = (deletedItem) => {
        const filteredItems = this.state.items.filter(item => item.id !== deletedItem.id)
        this.setState({
            items: filteredItems
        })
    }

    render() {
        const { items, currentDate, tabView } = this.state;
        const itemsWithCategory = items.map(item => {
            item.category = categories[item.cid];
            return item
        }).filter(item => {
            return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
        });
        let totalIncome = 0, totalOutcome = 0;
        itemsWithCategory.forEach(item => {
            if (item.category.type === TYPE_INCOME) {
                totalIncome += item.price;
            } else {
                totalOutcome += item.price;
            }
        })
        return (
            <React.Fragment>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <br />
                    <div className='container mb-3'>
                        <div className='row'>
                            <div className='col'>
                                <MonthPicker year={currentDate.year} month={currentDate.month} onChange={this.changeDate} />
                            </div>
                            <div className='col'>
                                <TotalPrice income={totalIncome} outcome={totalOutcome} />
                            </div>
                        </div>
                    </div>
                </header>
                <div className='content-area py-3 px-3 '>
                    <Tabs activeIndex={0} onTabChange={this.changeView}>
                        <Tab>
                            <Ionicon className='rounded-circle mr-2' fontSize='25px' color={'#007bff'} icon='ios-paper' />
                            Display List
                         </Tab>
                        <Tab>
                            <Ionicon className='rounded-circle mr-2 ' fontSize='25px' color={'#007bff'} icon='ios-pie' />
                            Display Chart
                        </Tab>
                    </Tabs>
                    {/* <ViewTab activeTab={tabView} onTabChange={this.changeView} /> */}
                    <CreateBtn onClick={this.createItem} />
                    {
                        tabView === LIST_VIEW &&
                        <PriceList items={itemsWithCategory} onModifyItem={this.modifyItem} onDeleteItem={this.deleteItem} />
                    }
                    {
                        tabView === CHART_VIEW &&
                        <h2 className='chart-title'>Chart View</h2>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Home;