import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const buttonStyle = {
    backgroundColor: '#778899',
    fontColor: 'white',
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
        if (!this.canBeSubmitted()) {
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
    const {inName, inTitle, inText } = this.state
    }

   canBeSubmitted() {
    const {inName, inTitle, inText } = this.state
    return (inName.length >0 && inTitle.length >0 && inText.length >0 && inText.length)
   }
    render() {
       const isEnabled = this.canBeSubmitted()
    return (
    <div>     
         <form onSubmit={this.handleSubmit}>
            <label>
              Blog:
              <div className="field">
                <label className="label">Name:</label>
              </div>
              <div>
                <input name="inName" type="text" placeholder="First Last" value={this.state.inName} onChange={this.handleChange} />
              </div>
              <div className="field">
                <label className="label">Title:</label>
              </div>
              <div>
                 <input name="inTitle" type="text" placeholder="Post Title" value={this.state.inTitle} onChange={this.handleChange} />
              </div>
              <div className="field">
                <label className="label">Body:</label>
              </div>
              <div className="field">
                 <textarea name="inText" placeholder="Max 250 Characters" style={{height: 100, width: 600}} value={this.state.inText} onChange={this.handleChange} />
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
            <h1>Doggo Bloggo</h1>
            <BlogPost/>
        </div> )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
