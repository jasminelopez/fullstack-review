import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    } 
    this.onSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    console.log('hey');
  }

  handleSubmit (e) {
    var handle = this;
    fetch('http://127.0.0.1:1128/repos', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.term
      })
    })
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={this.onChange.bind(this)}/>
      <button onClick={this.handleSubmit.bind(this)}> Add Repos </button>
    </div>) 
  }
}

export default Search;