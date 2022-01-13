import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = e => {
        e.preventDefault(); // onsubmit은 자동으로 페이지 refresh하기때문에 설정
        console.log(this.inputRef.current.value)
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name); // name(이름)이 있다면 전달된 props의 onAdd 함수에 이 name을 전달한다.
        this.formRef.current.reset();
    }
    render() {
        return (
          <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
              <input ref={this.inputRef} type="text" className='add-input' placeholder='Enter Your Habit' />
              <button className='add-button' type='submit'>Add</button>
          </form>
        );
    }
}

export default HabitAddForm;