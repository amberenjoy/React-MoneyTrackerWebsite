import React from 'react';
import CategorySelect from '../components/CategorySelect';
import PriceForm from '../components/PriceForm';
import { Tabs, Tab } from '../components/Tabs';
import { testCategories } from '../testData';
import { TYPE_INCOME, TYPE_OUTCOME } from '../utility';
import withContext from '../WithContext';
import { withRouter } from 'react-router-dom';

const tabsText = [TYPE_OUTCOME, TYPE_INCOME];

export class CreatePage extends React.Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    const { items, categories } = props.data;
    this.state = {
      selectedTab: TYPE_OUTCOME,
      selectedCategory: null
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.actions.getEditData(id).then(data => {
      const { editItem, categories } = data;
      this.setState({
        selectedTab:
          id && editItem ? categories[editItem.cid].type : TYPE_OUTCOME,
        selectedCategory: id && editItem ? categories[editItem.cid] : null
      });
    });
  }
  tabChange = index => {
    console.log(index);
    this.setState({
      selectedTab: tabsText[index]
    });
  };
  cancelSubmit = () => {
    this.props.history.push('/');
  };
  selectCategory = category => {
    this.setState({
      selectedCategory: category
    });
  };
  submitForm = (data, isEditMode) => {
    if (!isEditMode) {
      //create
      this.props.actions
        .createItem(data, this.state.selectedCategory.id)
        .then(data => {
          this.props.history.push('/');
        });
    } else {
      //update
      this.props.actions
        .updateItem(data, this.state.selectedCategory.id)
        .then(data => {
          this.props.history.push('/');
        });
    }
  };

  render() {
    const { data } = this.props;
    const { items, categories } = data;
    const { id } = this.props.match.params;
    const editItem = id && items[id] ? items[id] : {};
    const { selectedTab, selectedCategory } = this.state;

    const filterCategories = Object.keys(categories)
      .filter(id => categories[id].type === selectedTab)
      .map(id => categories[id]);
    const tabIndex = tabsText.findIndex(text => text === selectedTab);
    return (
      <div
        className='create-page py-3 px-3 rounded mt-3'
        style={{ backgroundColor: '#fff' }}
      >
        <Tabs activeIndex={tabIndex} onTabChange={this.tabChange}>
          <Tab>OUTCOME</Tab>
          <Tab>INCOME</Tab>
        </Tabs>
        <CategorySelect
          categories={filterCategories}
          onSelectCategory={this.selectCategory}
          selectedCategory={selectedCategory}
        />
        <PriceForm
          onFormSubmit={this.submitForm}
          onCancelSubmit={this.cancelSubmit}
          item={editItem}
        />
      </div>
    );
  }
}

export default withRouter(withContext(CreatePage));
