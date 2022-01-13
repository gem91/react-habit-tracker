import React, { Component } from 'react';
import './app.css';

import Navbar from './components/navbar';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits: [
        { id: 1, name: 'Reading', count: 0},
        { id: 2, name: 'Coding', count: 0},
        { id: 3, name: 'Running', count: 0}
    ]
  }

  handleIncrement = ( data ) => { //특정한 data 인자를 전달 받으면
    const habits = this.state.habits.map( item => {
      if( item.id === data.id ){
        return {...data, count: data.count + 1 }
      }
      return item
    })
    this.setState({habits : habits}) // key : value
  }
  handleDecrement = ( data ) => {
    const habits = this.state.habits.map( item => {
      if( item.id === data.id ){
        const count = data.count - 1
        return {...data, count: count < 0 ? 0 : count }
      }
      return item
    })
    this.setState({habits : habits}) // key : value
  };
  handleDelete = ( data ) => {
      const habits = this.state.habits.filter( item => item.id !== data.id );
      this.setState({habits})
  };
  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name: name, count: 0} ];  //object 생성리스트 만들기
    this.setState({habits});
  };
  handleReset = () => {
    const habits = this.state.habits.map( item => {
        if(item.count !== 0){
          console.log(`count: 개수 있는 objects -> ${JSON.stringify(item)}`)
          return {...item, count: 0};
        }
        console.log(`count: 0인 objects -> ${JSON.stringify(item)}`)
        return item;
      });
    this.setState({habits : habits}) // key : value
  };

  render() {
    return (
      <div className='habit-wrap'>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <Habits habits={this.state.habits}
           onIncrement={this.handleIncrement} // 클릭하면 habit 오브젝트의 인자가 data로 전달된다
           onDecrement={this.handleDecrement} 
           onDelete={this.handleDelete}
           onAdd={this.handleAdd}
           onReset={this.handleReset}
          />
      </div>
    );
  }
}

export default App;