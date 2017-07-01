import React, {Component} from "react";
import API from "../../utils/API";
var FontAwesome = require('react-fontawesome');
import {Link} from "react-router";


class QuoteForm extends Component {
  constructor() {
    super();
    this.state = {
      // setting new quote to input val; 
      inputValue: ""
    };
    // Binding handleInputChange and handleButtonClick since we'll be passing them
    // as callbacks and 'this' will change otherwise
    this.handleInputChange = this
      .handleInputChange
      .bind(this);
    this.handleButtonClick = this
      .handleButtonClick
      .bind(this);
  }
  handleInputChange(event) {
    this.setState({inputValue: event.target.value});
  }
  handleButtonClick() {
    const newQuote = this.state.inputValue;
    API
      .saveQuote(newQuote)
      .then(this.props.getQuotes);
    this.setState({inputValue: ""});
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/*<div className="col-md-6">*/}
          <div style={styles.formStyle} className="form-group">
            <label htmlFor="input-box">
              {/*style={styles.labelStyle}*/}
              We've got stories...
            </label>
          </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-md-5 col-md-offset-0">

{/*???            <i
              onClick={() => this.favoriteQuote(this.props.quote)}
              style={styles.favoriteStyle}
              className={this.props.quote.favorited ? "fa fa-star gold" : "fa fa-star-o"}
              aria-hidden="true"
            />???*/}

               <Link to="/concerns"><FontAwesome
        className=''
        name='book'
        size='5x'
        style={{ color: "white", textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}

        
      /> </Link>
              
          
        </div>

        <div className="col-md-3 col-md-5 col-md-offset-1">
          <div className="YouGotThisDekHome">
              <span className="and">+ 
              </span> you 
              <span
                style={{
                color: '#333',
                fontFamily: 'Bungee Shade'
              }}> Got </span>
              This
          </div>
    <hr />
            <p className="beenThereHome">
            
            <span style={{
              fontWeight: 'bold', color:"white"
            }}>hope for the hopeless</span>
          </p>
                  </div>

        </div>

        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            {/*<ul>
              <li>
                <button
                  onClick={this.handleButtonClick}
                  className="btn btn-danger"
                  style={styles.buttonStyle}>
                  concern1
                </button>
              </li>
              <li>
                <button
                  onClick={this.handleButtonClick}
                  className="btn btn-danger"
                  style={styles.buttonStyle}>
                  concern2
                </button>
              </li>
              <li>
                <button
                  onClick={this.handleButtonClick}
                  className="btn btn-danger"
                  style={styles.buttonStyle}>
                  concern3
                </button>
              </li>
              <li>
                <button
                  onClick={this.handleButtonClick}
                  className="btn btn-danger"
                  style={styles.buttonStyle}>
                  concern4
                </button>
              </li>
              <li>
                <button
                  onClick={this.handleButtonClick}
                  className="btn btn-danger"
                  style={styles.buttonStyle}>
                  concern3
                </button>
              </li>
              <li>
                <button
                  onClick={this.handleButtonClick}
                  className="btn btn-danger"
                  style={styles.buttonStyle}>
                  concern4
                </button>
              </li>
              <li>
                <button
                  onClick={this.handleButtonClick}
                  className="btn btn-danger"
                  style={styles.buttonStyle}>
                  concern5
                </button>
              </li>
              <li>
                <button
                  onClick={this.handleButtonClick}
                  className="btn btn-danger"
                  style={styles.buttonStyle}>
                  concern6
                </button>
              </li>*/}

              {/*FORM*/}
              {/*<textarea
            style={{
              resize: "none"
            }}
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            placeholder="Add a new quote here!"
            className="form-control"
            id="input-box"
            rows="3"
          />*/}

            {/*</ul>*/}
          </div>
          
        </div>
      </div>

    );
  }
}

const styles = {
  buttonStyle: {
    // float: "right",
    marginTop: 10
  },
  // labelStyle: { float: "center", // marginTop: 10; fontFamily: 'Open Sans',
  // sans-serif; },
  formStyle: {
    marginBottom: 60,
    marginTop: 60
  }
};

export default QuoteForm;