import React, {Component} from "react";
import API from "../../utils/API";
// import Panel.js from "Panel";
var FontAwesome = require('react-fontawesome');

class Why extends Component {
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
                                     Why Stories?
                                </label>

                            </div>
                        </div>

                        <div className="col-md-8">

                            <ul className="whyPgBtns">
                                <li>
                                    <button
                                        onClick={this.handleButtonClick}
                                        className="btn btn-danger"
                                        style={styles.buttonStyle}>
                                        The Need
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={this.handleButtonClick}
                                        className="btn btn-danger"
                                        style={styles.buttonStyle}>
                                        Moment vs Overhaul
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={this.handleButtonClick}
                                        className="btn btn-danger"
                                        style={styles.buttonStyle}>
                                        Power of Precedence
                                    </button>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-md-6 col-md-offset-4">
                    <p className="lead storyText">#MAKE DYNAMIC isus eget urna mollis ornare vel eu
                        leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
                        <p>
                            Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo
                            luctus. nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
                            ullamcorper nulla non metus auctor fringilla.
                        </p>
                        #SCROLL diam eget risus varius blandit sit amet non magna. Donec id elit non mi
                        porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat
                        porttitor ligula, eget lacinia odio sem nec elit.
                    </p>

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

export default Why;