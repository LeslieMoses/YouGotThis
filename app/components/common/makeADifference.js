import React, {Component} from "react";
import API from "../../utils/API";
// import Panel.js from "Panel";

import {base} from "../../utils/rebase";

var FontAwesome = require('react-fontawesome');

class Concerns extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
      beenThere: 0,
      hereNow: 0,
      notes: [],
			bio: {},
			repos: []
    };
  }


init () {
		this.ref = base.bindToState(this.router.getCurrentParams().username, { // When the .username endpoint changes, this will update the state for 'notes' 
			 context: this,
			 asArray: true,
			 state: 'notes'
		});
		console.log("is this working?", "yes it is");
		helpers.getGithubInfo(this.router.getCurrentParams().username)
		.then((dataObj) => {
			this.setState({
				bio: dataObj.bio,
				repos: dataObj.repos
			});
		}); // this refers to this in the upper contexts
	// method called when instance of component is being created & inserted in DOM
	componentWillMount (); {
		this.router = this.context.router;
	}
	componentDidMount (); { // Where all AJAX requests will live
		this.init();
	}
	componentWillUnmount (); { // So that we don't get listeners keep adding, we will unmount them
		 base.removeBinding(this.ref);
	}
	componentWillReceiveProps (); {
		base.removeBinding(this.ref);
		this.init();
	}
	handleAddNote (newNote) ;{ // Make the function in the component where it will be evoked
		 base.post(this.router.getCurrentParams().username,  {
		 	data: this.state.notes.concat([newNote])
		 });																																								// in .set() we get the previous values in an array and output a new array with newNote added
    }
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

  concernUpdate(concern) {
    console.log("concern here");
    this.setState({concernUpdate: concern});
  }

componentDidMount () { // Where all AJAX requests will live
		// this.init();

    base.fetch('story', {
    context: this,
    asArray: true,
    then(data){
      console.log("data test", data);
    this.setState({notes});
    }
  });

  	}

    	componentWillUnmount () { // So that we don't get listeners keep adding, we will unmount them
		 base.removeBinding(this.ref);
	}
	// method called when instance of component is being created & inserted in DOM
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-md-8 col-md-offset-1">
            <div style={styles.formStyle} className="form-group">
              <label className="concernHed">
Continue your own destiny; you are unique 
                {this.state.concernUpdate}
              </label>
              <br/>
              <button


              
                onClick={this
                .addClick
                .bind(this)}
                type="button"
                className="btn btn-danger"> Been There &nbsp;
                <span className="badge">
                  {this.state.beenThere} </span>
              </button>
&nbsp;&nbsp;&nbsp;&nbsp;
              <button
                onClick={this
                .addHereClick
                .bind(this)}
                type="button"
                className="btn btn-danger"> Here Now &nbsp;
                <span className="badge"> 
                  {this.state.hereNow} </span>
              </button>
            </div>

            <div className="row">

              <div className="container">
                <div id="accordion" role="tablist" aria-multiselectable="true">
                  <div className="card">
                    <div className="card-header" role="tab" id="headingOne">
                      <h5 className="mb-0">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne">
                          <a
                            role="menuitem"
                            tabIndex={-1}
                            onClick={() => this.concernUpdate("…at this moment. It will change")}
                            href="#">1. Life feels unbearable</a>
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse "
                      role="tabpanel"
                      aria-labelledby="headingOne">
                      <div className="card-block">
                            <ul className="list-group">
                              <li className="list-group-item list-group-item-success">Dapibus ac facilisis in</li>
                              <li className="list-group-item list-group-item-info">Cras sit amet nibh libero</li>
                              <li className="list-group-item list-group-item-warning">Porta ac consectetur ac</li>
                              <li className="list-group-item list-group-item-danger">Vestibulum at eros</li>
                          </ul>    
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingTwo">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo">
                          <a
                            role="menuitem"
                            tabIndex={-1}
                            onClick={() => this.concernUpdate("You ARE enough")}
                            href="#">2. I'm not enough</a>
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo">
                      <div className="card-block">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                        brunch. Food truck quinoa nesciunt proident. Ad vegan excepteur butcher vice lomo.
                        Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingThree">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree">
                          <a
                            role="menuitem"
                            tabIndex={-1}
                            onClick={() => this.concernUpdate("I want you to see what I see in you")}
                            href="#">3. I’ve failed too much</a>
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree">
                      <div className="card-block">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                       
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="card">
                  <div className="card-header" role="tab" id="headingFour">
                    <h5 className="mb-0">
                      <a
                        className="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFour"
                        aria-expanded="true"
                        aria-controls="collapseFour">
                        <a
                          role="menuitem"
                          tabIndex={-1}
                          onClick={() => this.concernUpdate("I understand and others do,  too")}
                          href="#">4. No one understands</a>
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingFour">
                    <div className="card-block">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                      richardson ad squid, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on itr labore wes anderson craft beer farm-to-table, raw denim aesthetic synth nesciunt
                      you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingFive">
                    <h5 className="mb-0">
                      <a
                      className="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseFive">
                        <a
                          role="menuitem"
                          tabIndex={-1}
                          onClick={() => this.concernUpdate("We only have one life; it’s your choice to make a difference")}
                          href="#">5.	It’s hopeless</a>
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive">
                    <div className="card-block">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                      brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt assumenda keffiyeh helvetica, craft beer labore wes anderson
                      cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                      Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                      you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingSix">
                    <h5 className="mb-0">
                      <a
                      className="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseSix"
                        aria-expanded="true"
                        aria-controls="collapseSix">
                        <a
                          role="menuitem"
                          tabIndex={-1}
                          onClick={() => this.concernUpdate("Continue your own destiny; you are unique")}
                          href="#">6. I thought my life would be different </a>
                      </a>
                    </h5>
                    
                   
      
      {/*bt here*/}


<div id="id01" className="w3-modal">
        <div className="w3-modal-content">
          <header className="w3-container w3-teal"> 
            <span onclick="document.getElementById('id01').style.display='none'" className="w3-button w3-display-topright">×</span>
            <h2>Modal Header</h2>
          </header>
          <div className="w3-container">
            <p>Some text..</p>
            <p>Some text..</p>
          </div>
          <footer className="w3-container w3-teal">
            <p>Modal Footer</p>
          </footer>
        </div>
      </div>


      {/*and here*/}
                  </div>
                  <div
                    id="collapseSix"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingSix">
                    <div className="card-block">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                      brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                      shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                      cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                      Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                      you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
          <div className="col-md-4 col-md-6 col-md-offset-2">

            <p className="lead storyText">#MAKE DYNAMIC isus eget urna mollis ornare vel eu
              checking
            </p>
          </div>
        </div >
      </div>

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

export default Concerns;