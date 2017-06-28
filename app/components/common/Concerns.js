import React, {Component} from "react";
import API from "../../utils/API";
// import Panel.js from "Panel";
var FontAwesome = require('react-fontawesome');
 


class Concerns extends Component {
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
    this.setState({beenThere: this.state.beenThere + 1});
  }

    addHereClick() {
    console.log("hey");
    this.setState({hereNow: this.state.hereNow + 1});
  }

    concernUpdate(concern) {
    console.log("concern here");
    this.setState({concernUpdate: concern});
  }

  // updateConcern1(){
  //   console.log("updating concern")
  //       this.setState({????: this.state.???? + "Concern1"});

  // }
      /*Variables for tracking tallies*/
    

    // var beenThereTotal = 0; var hereNowTotal = 0; FUNCTIONS
    // ==================================================================== Here we
    // create various on "click" functions which capture the clicks Inside each
    // click event is the code to create an alert, update the counter, then show the
    // updated count. $("#There").on("click", function() { beenThereCounter++;
    // alert("You've eaten " + beenThereCounter + " PB&J sandwiches"); });
    // $("#Here").on("click", function() {   alert("Nom nom nom. Gooey Gooey Grilled
    // Cheese!");   hereNowCounter++;   alert("You've eaten " + hereNowCounter + "
    // grilled cheese sandwiches"); });
  render() {
    return (
      <div className="container-fluid">
      <div className="row">
          <div className="col-md-3 col-md-8 col-md-offset-1"> 
        <div style={styles.formStyle} className="form-group">
          <label htmlFor="input-box">

            {this.state.concernUpdate}
          </label>
           <button onClick={this.addClick.bind(this)} type="button" className="btn btn-success">Been There <span className="badge"> {this.state.beenThere}</span></button> 
     
  <button onClick={this.addHereClick.bind(this)} type="button" className="btn btn-danger">Here Now <span className="badge"> {this.state.hereNow}</span></button>        
        </div>
    

      <div className="row">

        <div className="container">
 </div>
          {/*<blockquote class="blockquote">

      <FontAwesome
        className='pullQuoteMark'
        name='quote-left'
        size='3x'
        style={{ color: "white", textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
<p>And that’s when it all changed. That’s when I realized I saw the start of a world yet undiscovered...” </p>
  
</blockquote>*/}
<div className="container-fluid">
  
<div className="dropdown">
        <button className="btn dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Tutorials
          <span className="caret" /></button>
        <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
          <li role="presentation"><a role="menuitem" tabIndex={-1} onClick={() => this.concernUpdate("concern1")} href="#">concern1</a></li>
          <li role="presentation"><a role="menuitem" tabIndex={-1} onClick={() => this.concernUpdate("concern2")} href="#">concern2</a></li>
          <li role="presentation"><a role="menuitem" tabIndex={-1} onClick={() => this.concernUpdate("concern3")} href="#">concern3</a></li>
          <li role="presentation"><a role="menuitem" tabIndex={-1} onClick={() => this.concernUpdate("concern4")} href="#">concern4</a></li>
          <li role="presentation"><a role="menuitem" tabIndex={-1} onClick={() => this.concernUpdate("concern5")} href="#">concern5</a></li>
          <li role="presentation"><a role="menuitem" tabIndex={-1} onClick={() => this.concernUpdate("concern6")} href="#">concern6</a></li>
          <li role="presentation" className="divider" />
          <li role="presentation"><a role="menuitem" tabIndex={-1} href="#">About Us</a></li>
        </ul>
      </div>

    </div>

<ul className="concernPgBtns">
              <li>
                <button
                
                  onClick={this.handleButtonClick}
                  className="btn btn-danger"
                  style={styles.buttonStyle}>
                  concern1
                 
                 {/*<button onClick={this.updateConcern1.bind(this)} type="button" className="btn btn-success">concern 1 try <span className="badge"> {this.state.beenThere}</span></button> */}

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
              </li>

               </ul>
</div>
      </div>
      <div className="col-md-4 col-md-6 col-md-offset-2"> 
      
<div className="dropdown">
        <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          This dropdown's menu is right-aligned
        </button>
        <ul className="dropdown-menu dropdown-menu-right">
          <li >Action</li>
          <li>Another action</li>
          <li >Something else here</li>
        </ul>
      </div>
      
       <p className="lead storyText">#MAKE DYNAMIC isus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
<p>
Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus.  nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.
</p>
#SCROLL diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
</p>
   <p className="beenThere"> STORY HEADLINES < span style = {{color: '#333' }}></span>:
      
      </p> 

    } 
  <ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
      {/*<ul>
      <li>
        <button
          onClick={this.handleButtonClick}
          className="btn btn-danger"
          style={styles.buttonStyle}>
          "And that’s when it all changed
        </button>
      </li>
      <li>
        <button
          onClick={this.handleButtonClick}
          className="btn btn-danger"
          style={styles.buttonStyle}>
          "Standing at the precipice, he at last turned from what had been.
        </button>
      </li>
      <li>
        <button
          onClick={this.handleButtonClick}
          className="btn btn-danger"
          style={styles.buttonStyle}>
          "Fried shrimp at Jango's every Tuesday changed his life
        </button>
      </li>
      <li>
        <button
          onClick={this.handleButtonClick}
          className="btn btn-danger"
          style={styles.buttonStyle}>
          "The last time I saw Pete, he was skin and bones and grace.
        </button>
      </li>


      <li>
        <button
          onClick={this.handleButtonClick}
          className="btn btn-danger"
          style={styles.buttonStyle}>
          "Falling, she suddenly found the ground beneath her
        </button>
      </li>
    </ul> */}


    </div>
    </div >
    <div className="col-md-4">   
      <div className="YouGotThisDek">     
        <span className="and">+ </span > You Got This </div> </div> 
        
         <div className="row">
           <div>hiDonec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus.  nisi eratDonec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus.  nisi eratDonec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus.  nisi eratDonec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus.  nisi eratDonec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus.  nisi eratDonec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus.  nisi eratDonec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus.  nisi erat</div>
           <div className="col-md-4 col-md-offset-4">
            
        </div>
        </div>  </div>

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