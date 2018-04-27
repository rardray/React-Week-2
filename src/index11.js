import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const PrintBlog = (props) => {
    const printName = props.subName.map((name) => <p>{name}</p>)
    const printTitle = props.subTitle.map((title) => <p>{title}</p>)
    const printText = props.subText.map((text) =><p>{text}</p>)
    const pBlog = [printName, printTitle, printText]
    return (
        <div>
            <p>{pBlog}</p>
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
                subText: [ ...prevState.inTitle, prevState.inText, prevState.inName]
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
              <div>
              <textarea name="inText" style={{height: 100, width: 600}} value={this.state.inText} onChange={this.handleChange} />
            </div>
            </label>
            <input type="submit" value="Submit" />
          </form>
          <PrintBlog subName = {this.state.subName} subTitle = {this.state.subTitle} subText = {this.state.subText} />
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
            <h1>Bloggeriffic</h1>
            <BlogPost/>
        </div> )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
