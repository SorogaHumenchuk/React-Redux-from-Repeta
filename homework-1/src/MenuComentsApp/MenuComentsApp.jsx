import React, { Component } from 'react';
import MenuComents from './MenuComents/MenuComents';
import ComentsList from './MenuComents/ComentsLIst/ComentsLIst';

const uuidv4 = require('uuid/v4');

export default class MenuComentsApp extends Component {
  state = {
    comentsArr: [],
  };

  handleAddComent = (coment, rating) => {
    this.setState(prevState => ({
      comentsArr: [{ id: uuidv4(), coment, rating }, ...prevState.comentsArr],
    }));
  };

  render() {
    const { comentsArr } = this.state;
    return (
      <div>
        <MenuComents onSubmit={this.handleAddComent} />;
        <ComentsList list={comentsArr} />
      </div>
    );
  }
}
