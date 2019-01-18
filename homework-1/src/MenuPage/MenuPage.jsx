import React, { Component } from 'react';
import MenuGrid from './MenuGrid/MenuGrid';
import * as API from '../services/api';
import MenuFilter from './MenuGrid/MenuFilter/MenuFilter';

const filterMenu = (filter, menu) =>
  menu.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));

export default class MenuPage extends Component {
  state = {
    menu: [],
    filter: '',
  };

  componentDidMount() {
    API.getAllMenuItems().then(menu => this.setState({ menu }));
  }

  handleDeleteItem = id => {
    API.deleteMenuItem(id).then(
      this.setState(state => ({
        menu: state.menu.filter(item => item.id !== id),
      })),
    );
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleShowMoreInfo = id => {
    API.getMenuItemById(id);
  };

  handleAddMenuItem = () => {
    const ITEM = {
      name: `New name ${Date.now()}`,
      image:
        'http://www.cairoscene.com//Content/Admin/Uploads/Articles/ArticleImages/e1bbeff7-2188-443a-8d5c-10b860c23b62.jpg',
      price: Math.random() * 120,
    };

    API.addMenuItem(ITEM).then(newItem =>
      this.setState(state => ({
        menu: [...state.menu, newItem],
      })),
    );
  };

  render() {
    const { menu, filter } = this.state;

    const filteredMenu = filterMenu(filter, menu);

    return (
      <div>
        <button type="button" onClick={this.handleAddMenuItem}>
          Добавить блюдо
        </button>
        <MenuFilter filter={filter} onFilterChange={this.handleFilterChange} />
        <MenuGrid
          items={filteredMenu}
          onDelete={this.handleDeleteItem}
          onShowMoreInfo={this.handleShowMoreInfo}
        />
        ;
      </div>
    );
  }
}
