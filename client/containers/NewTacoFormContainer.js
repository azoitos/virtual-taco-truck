import React, { Component } from 'react';

const blankFormState = {
  name: '',
  protein: '',
  spicy: false
};

export default class NewTacoForm extends Component {
  constructor (props) {
    super(props);
    this.state = blankFormState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log(this.state);
    this.setState(blankFormState);
  }

  render () {
    return (
      <div>
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <h2>Create a new taco</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                className="form-control"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <hr />
            <label>
              Protein:
              <select
                className="form-control"
                name="protein"
                value={this.state.protein}
                onChange={this.handleChange}
              >
                <option value=""></option>
                <option value="chicken">chicken</option>
                <option value="pork">pork</option>
                <option value="falafel">falafel</option>
              </select>
            </label>
            <hr />
            <label>
              Spicy
              <input
                className="form-control"
                type="checkbox"
                name="spicy"
                checked={this.state.spicy}
                onChange={this.handleChange}
              />
            </label>
            <hr />
            <input
              className="btn btn-success"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}
