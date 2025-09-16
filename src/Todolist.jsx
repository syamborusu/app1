import React, { Component } from 'react'
export default class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: '',
      courses: []
    };
  }
  readCourse = (e) => {
    this.setState({ course: e.target.value });
  }
  addCourse = () => {
    if (this.state.course.trim() === '') return; 
    this.setState((prevState) => ({
      courses: [...prevState.courses, prevState.course],
      course: '' 
    }));
  }
  removeCourse = (index) =>{
    this.setState((prevState) =>(
        {courses: prevState.courses.filter((cr,i) => i !== index)
    }));
  }
  render() {
    return (
      <div>
        <label htmlFor="course">Course Name</label>
        <input 
          type="text" 
          id="course"
          name="course" 
          value={this.state.course} 
          onChange={this.readCourse} 
        />
        <button onClick={this.addCourse}>ADD</button>
        <ul>
          {this.state.courses.map((c,index) => (
            <li key={index}>
              {c}
              <button 
                onClick={()=> this.removeCourse(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
