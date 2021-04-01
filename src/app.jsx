import React, { Component } from 'react';
import './app.css';
import Groceries from './components/groceries';
import Navbar from './components/navbar';


class App extends Component {
  state = {
    groceries: [
        { id : 1, name: '마늘', count: 0 },
        { id : 2, name: '양파', count: 0 },
        { id : 3, name: '사과', count: 0 },
    ],
};

handleIncrement = (grocery) => {
  const groceries = [...this.state.groceries];
  const index = groceries.indexOf(grocery);
  groceries[index].count++;
  this.setState(groceries);
};

handleDecrement = (grocery) => {
  const groceries = [...this.state.groceries];
  const index = groceries.indexOf(grocery);
  const count = groceries[index].count-1;
  groceries[index].count = count<0?0:count;
  this.setState(groceries);
};

handleDelete = (grocery) => {
  const groceries = this.state.groceries.filter(item => item.id !== grocery.id);
  //해당 grocery id와 일치하지 않는 배열만 출력하기
  this.setState({groceries});
};

handleAdd = name => {
  const groceries = [...this.state.groceries, {id: Date.now(), name, count: 0}];
  this.setState({groceries});
}

handleReset = () => {
  const groceries = this.state.groceries.map(grocery => {
    grocery.count=0;
    return grocery;
  });
  this.setState({groceries});
}

  render() {
    return (
      <>
        <Navbar totalCount={this.state.groceries.filter(item=>item.count>0).length}/>
        <Groceries groceries={this.state.groceries}
        onIncrement={this.handleIncrement} 
        onDecrement={this.handleDecrement} 
        onDelete={this.handleDelete} 
        onAdd={this.handleAdd} 
        onReset={this.handleReset} />
      </>
    );
  }
}

export default App;