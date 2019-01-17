import React, { Component } from 'react';
import MenuGrid from './MenuGrid/MenuGrid';
import * as API from '../services/api';

export default class MenuPage extends Component {
  state = {
    menu: [],
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
    const { menu } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleAddMenuItem}>
          Добавить блюдо
        </button>
        <MenuGrid
          items={menu}
          onDelete={this.handleDeleteItem}
          onShowMoreInfo={this.handleShowMoreInfo}
        />
        ;
      </div>
    );
  }
}
