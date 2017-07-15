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
                                        Moment -vs- Overhaul
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
                    <p className="lead storyText">People need hope. <br />
U.S. suicide rates recently rocketed to the highest levels in almost 30 years.*<br />
<br />But true stories help people clear hurdles. <br />One survivor’s story becomes a stone for someone struggling to step on. <br />
It seems simplistic, but YouTube videos or clinical bullet-point advice can jar or seem judgmental to people who have lost hope.<br />
<br />Stories, on the other hand, are a gentle yet strong testimony that they can pass through the current test.  <br />
<br /><br />
Researchers also found an alarming increase among girls 10 to 14, whose suicide rate, while still very low, had tripled. <br /><br />The number of girls who killed themselves rose to 150 in 2014 from 50 in 1999. <br />“This one certainly jumped out,” said Sally Curtin, a statistician at the center and an author of the report.
<br /><br /><br />* Suicide in the United States has surged to the highest levels in nearly 30 years, a federal data analysis has found, with increases in every age group except older adults. The rise was particularly steep for women. https://www.nytimes.com/2016/04/22/health/us-suicide-rate-surges-to-a-30-year-high.html

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