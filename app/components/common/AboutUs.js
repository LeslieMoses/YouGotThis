import React, {Component} from "react";
import API from "../../utils/API";
// import Panel.js from "Panel";
var FontAwesome = require('react-fontawesome');

class AboutUs extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: "",
            beenThere: 0,
            hereNow: 0
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

    addClick() {
        console.log("hi");
        this.setState({
            beenThere: this.state.beenThere + 1
        });

    }
    addHereClick() {
        console.log("hey");
        this.setState({
            hereNow: this.state.hereNow + 1
        });

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="row">
                        <div className="col-md-8 col-md-3 col-md-offset-1">
                            <div style={styles.formStyle} className="form-group">
                                <label htmlFor="input-box">
                                     About Us
                                </label>

                            </div>
                        </div>


                    </div>
                </div>

                <div className="col-md-8 col-md-offset-2">
{/*<!-- Left-aligned media object -->*/}
  <div className="bio">
    {/*<div className="media-left">
      <img src="img_avatar1.png" className="media-object" style="width:60px">
    </div>*/}
    <div className="media-body">
      <h4 className="media-heading">Leslie</h4>
      <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tedidunt ut labore et dolore magna aliqua.</p>
      <p>Wem mpor incidi dolor sit amet, consectetur adipiscing elit, sed do eiusmod tedunt ut labore et dolore magna aliqua.</p>
      
                              {/*<div className="col-md-8">*/}

                            {/*<ul className="whyPgBtns">
                                <li>*/}
                                    <button
                                        onClick={this.handleButtonClick}
                                        className="btn btn-danger"
                                        style={styles.buttonStyle}>
                                        L's Favorite Story
                                    </button>
                                {/*</li>
                          

                            </ul>*/}
                        </div>
                        {/*</div>*/}

  
  {/*<!-- Right-aligned media object -->*/}
    <div className="media-body">
      <h4 className="media-heading">heree</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Sit amet, consectelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Km dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <button
                                        onClick={this.handleButtonClick}
                                        className="btn btn-danger"
                                        style={styles.buttonStyle}>
                                        Favorite Story
                                    </button>
    </div>
    {/*<div className="media-right">
      <img src="img_avatar1.png" className="media-object" style="width:60px">
    </div>*/}
  </div>

                </div>
            </div>
        // </div>

        );
    }
}
const styles = {
    buttonStyle: {
        // float: "right",
        marginTop: 10
    },

    formStyle: {
        marginBottom: 60,
        marginTop: 60
    }
};

export default AboutUs;