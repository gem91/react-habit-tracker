import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    handleIncrement = ( data ) => { //특정한 data 인자를 전달 받으면
        this.props.onIncrement(data)
    }
    handleDecrement = ( data ) => {
        this.props.onDecrement(data)
    }
    handleDelete = ( data ) => {
        this.props.onDelete(data)
    }
    handleAdd = name => {
        this.props.onAdd(name)
    }
 
    render() {
        return (
            <div className='list-wrap'>
                <HabitAddForm onAdd={this.handleAdd} />
                <ul>
                    {this.props.habits.map( habit => (
                        <Habit key={habit.id} propsHabit={habit} 
                        onIncrement={this.handleIncrement} // 클릭하면 habit 오브젝트의 인자가 data로 전달된다
                        onDecrement={this.handleDecrement} 
                        onDelete={this.handleDelete}
                        ></Habit>
                    ))}
                </ul>
                <button className='habits-reset' onClick={this.props.onReset}>Reset All</button>
            </div>
        );
    }
}

export default Habits;