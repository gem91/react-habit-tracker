import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    plusClick = () => {
        this.props.onIncrement(this.props.propsHabit)
        // console.log('habit 펄러스')
    }
    minusClick = () => {
        this.props.onDecrement(this.props.propsHabit)
    }
    deleteClick = () => {
        this.props.onDelete(this.props.propsHabit)
    }

    render() {
        console.log(this.props.propsHabit);
        const { name, count } = this.props.propsHabit;  // data key 값과 동일하게 변수 명 넣어야함
        return (
            <li className='habit'>
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className='habit-button habit-increase' onClick={this.plusClick}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className='habit-button habit-decrease' onClick={this.minusClick}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className='habit-button habit-delete' onClick={this.deleteClick}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;