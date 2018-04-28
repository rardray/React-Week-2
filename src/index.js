import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const buttonStyle = {
    backgroundColor: '#778899',
    fontColor: 'sans-serif',
    radius: '6px'
}
const pStyle = {
    backgroundColor: 'powderblue',
    margin: '0px',
    padding:'4px',
    borderBottomWidth: '200.5px',
    borderBottomColor: 'blue'
}
const PrintBlog = (props) => {
    const printName = props.sum.map((name) => <p style={pStyle} >{name}</p>)
    return (
        <div>
            <span>
            {printName}
            </span>
                </div>
    )
}

class BlogPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inName: '',
            inTitle: '',
            inText: '',
            sum: []
            

        }
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
        [name]: value
    })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState((prevState) => {
            return {
                inName: '',
                inTitle: '',
                inText: '',
                sum: [ ...prevState.sum, prevState.inTitle, prevState.inText, prevState.inName, new Date().toLocaleTimeString(), ' ']
                
            }
        })
        
    }
    render() {
        
    return (
    <div>     
         <form onSubmit={this.handleSubmit}>
            <label>
              Blog:
              <div className="field">
                <label className="label">Name:</label>
              </div>
              <div>
                <input name="inName" type="text" value={this.state.inName} onChange={this.handleChange} />
              </div>
              <div className="field">
                <label className="label">Title:</label>
              </div>
              <div>
                 <input name="inTitle" type="text" value={this.state.inTitle} onChange={this.handleChange} />
              </div>
              <div className="field">
                <label className="label">Body:</label>
              </div>
              <div className="field">
                 <textarea name="inText" style={{height: 100, width: 600}} value={this.state.inText} onChange={this.handleChange} />
            </div>
                </label>
             <input name='submit' style={buttonStyle} disabled={!isEnabled} type="submit" value="Submit" />
          </form>
          <PrintBlog sum = {this.state.sum} />
          {'\n'}
          </div>
        );
}
}
const submit = this.state;
const isEnabled = this.state.inText.length >0

class App extends Component {
    constructor(props) {
    super(props)
    this.state = {
        }
    }
    render() {
        return (
        <div>
            <h1>Bloggeriffic</h1>
            <BlogPost/>
        </div> )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
