import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
const tArea = {
    backgroundColor: 'rgb(245,247,252)',
    borderRadius: 3,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 1.5,
    height: 100, 
    width: 400, 
    resize: "none"
}

const inputField = {
    backgroundColor: 'rgb(245,247,252)',
    borderRadius: 3,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 1.5
}
const blogLog = {
    backgroundColor: '#778899',
    color: 'rgb(245, 250, 255)',
    padding: 8
}
const buttonStyle = {
    backgroundColor: '#778899',
    color: 'white',
    borderRadius: 8,
    height: 30,
    width: 400
}
const pStyle = {
    background: 'linear-gradient(to right, rgb(240, 240, 245), rgb(250, 250, 255))',
    margin: 0,
    padding: 2,
    borderLeftWidth: 3,
    width: 400,
    borderLeftStyle: 'solid',
    borderTopStyle: 'hidden',
    borderBottomStyle:'hidden',
    borderColor: 'black',
    borderLeftColor: "grey"

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
                sum: [ ...prevState.sum, prevState.inTitle,  prevState.inText,  prevState.inName,  new Date().toLocaleTimeString()]
                
            }
        })
        alert(`Successfully posted, ${this.state.inName}!!!`)
    }
    render() {
       const {inName, inTitle, inText } = this.state
       const isEnabled = inName.length >0 && inTitle.length >0 && inText.length >0 && inText.length < 250
    return (
    <div>     
         <form onSubmit={this.handleSubmit}>
            <label>
              Blog:
              <div className="field">
                <label className="label">Name:</label>
              </div>
              <div>
                <input name="inName" type="text" style={inputField} placeholder="First Last" value={this.state.inName} onChange={this.handleChange} />
              </div>
              <div className="field">
                <label className="label">Title:</label>
              </div>
              <div>
                 <input name="inTitle" type="text" style={inputField} placeholder="Post Title" value={this.state.inTitle} onChange={this.handleChange} />
              </div>
              <div className="field">
                <label className="label">Body:</label>
              </div>
              <div className="field">
                 <textarea name="inText" placeholder="Max 250 Characters" style={tArea} value={this.state.inText} onChange={this.handleChange} />
            </div>
                </label>
             <input name='submit' disabled={!isEnabled} style={buttonStyle} type="submit" value="Submit" />
          </form>
          <PrintBlog sum = {this.state.sum} />
          {'\n'}
          </div>
        );
}
}


class App extends Component {
    constructor(props) {
    super(props)
    this.state = {
        }
    }
    render() {
        return (
        <div>
            <title>React Week 2 Homework</title>
            <h1 style = {blogLog}>Doggo <span style={{fontStyle: 'italic'}}>De</span> Bloggo</h1>
            <BlogPost/>
        </div> )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
