import React, {Component} from "react";
import API from "../../utils/API";
// import Panel.js from "Panel";
import {base} from "../../utils/rebase";
import SubmitStory from "./SubmitStory";
import SubmitModal from "./SubmitModal";
import PostItem from "./PostItem"; 
import QuoteForm from "./QuoteForm"; 


import youAreEnough from "./youAreEnough";

import borrowView from "./borrowView";

import iUnderstand from "./iUnderstand";


import youAreUnique from "./youAreUnique";

// import unique from './unique.jpg'; 

var FontAwesome = require('react-fontawesome');

class makeADifference extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
      beenThere1: 0,
      hereNow1: 0,
      notes: [],
			bio: {},
			repos: [],
      story:[],
      headline: [],
      source: []
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
  getStoryInput() {
    SubmitStory.getStoryInput().then((res) => {
      const storyStuff = res.data.filter(story => story.favorited);
      this.setState({ stories: storyStuff });
    });
  }


  handleButtonClick() {

    const newStory = this.state.inputValue;
    SubmitStory
      .saveStory(newStory)
      .then(this.props.getStoryInput);
    this.setState({inputValue: ""});
  }

  addClick() {
    console.log("hi");
    this.setState({
      beenThere1: this.state.beenThere1 + 1
    });
  }

  addHereClick() {
    console.log("hey");
    this.setState({
      hereNow1: this.state.hereNow1 + 1
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
    this.setState({notes:data});

    }
  });

  	}
    	componentWillUnmount () { // So that we don't get listeners keep adding, we will unmount them
		 base.removeBinding(this.ref);
	}
	// method called when instance of component is being created & inserted in DOM
  render() {
    return (
 
//  CHANGE BG PER PG
 <div className="container-fluid BG5">
<div className="row">
                <div className="col-md-2">
    

<div className="card-user-profile">
        <img className="card-user-profile-img" src="https://images.pexels.com/photos/5439/earth-space.jpg?h=350&auto=compress&cs=tinysrgb" alt="picture of space" />
        <div className="card-user-profile-content card-section">
          <div className="card-user-profile-avatar">
            <img src='/pics/unique.jpg' />
            {/*<img src="https://static.pexels.com/photos/12567/photo-1444703686981-a3abbc4d4fe3.jpeg" alt="picture of yeti" />*/}
          </div>
          <p className="card-user-profile-name concernHed"> 
            <br />
  "No One Understands"<br /><hr />
      </p>
         <br /> <p className="comradeHed5">...so you think</p>
    <br />
          <p className="comrade"> But you're NOT alone. <br /> Who has been there? <br />Who is there now?</p>  
          <p className="witness">Can I get a witness?  
            <br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<FontAwesome
        className='witness'
        name='hand-o-down'
        size='lg'
        style={{ color: "white" }}
      />

          </p>

       <p> <button
                onClick={this
                .addClick
                .bind(this)}
                type="button"
                className="btn btn-warning"> Been There? &nbsp;
                <span className="badge">
                  {this.state.beenThere1} </span>
              </button></p> 
              <p>              <button
                onClick={this
                .addHereClick
                .bind(this)}
                type="button"
                className="btn btn-warning"> Here Now? &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="badge"> 
                  {this.state.hereNow1} </span>
              </button></p>
<br />
<br /><br /><br />

                          <blockquote class="blockquote">

      <FontAwesome
        className='pullQuoteMark'
        name='quote-left'
        size='3x'
        style={{ color: "white", textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
<div className="pullQuote"><p > “My assignment is to take my situation and to use it to help others who feel hopeless and/or helpless because of loss. 
  <br /><br />
― Marvin Sapp
</p></div>
  
</blockquote>
<br /><br /><br /><br />
                          <SubmitModal />
              </div>
       
      </div>
</div>

{/*BREAK*/}
          <div className="col-md-10 ">

     
        {/* Sample 2*/}


        {/* Posts panel container */}
        <div className="posts-panel posts-panel5 grid">
          {/* Panel's header */}
          <header className="panel-header">
                         <label className="viewHed5">
Live to Make a Difference
                {/*{this.state.concernUpdate}*/}
              </label>
          </header>
          
          {/* Panel's content */}
          <div className="panel-content">
            {/* Pinned post section */}
            <section className="pinned-post">
              {/* Post item */}
              <div className="post-item">
      
                {/* Post's thumbnail */}
                <a href="#" className="post-thumbnail picHed">
                  {/*<img src={unique} alt={"unique"}/> */}
                  <img src="/pics/dogBeachV.jpg" alt />
                </a>
                {/* Post's text */}
                <div className="post-text">

                  {/* Post's title */}
                
                  {/*<div className="post-meta">*/}
                    {/*<span className="meta"><span className="meta-icon fa fa-user-circle-o" aria-hidden="true" /><a className="meta-text">Steve Jobs</a></span>*/}
                    {/*<span className="meta"><span className="meta-icon fa fa-clock-o" aria-hidden="true" /><span className="meta-text">22/06/2030</span></span>
                  </div>*/}
                  {/* Post's summary */}
                  <div className="post-summary">
                             
                         {/*<PostItem />*/}
                   </div>
                </div>
              </div>
            </section>
            {/* Posts list */}
      
            <section className="posts-list">
              {/*<PostItem />ayo 123*/}
 
                 {this.state.notes.map(function(val, i) {
                  return <PostItem headline={val.headline} storyInfo={val} story={val.story} /> 
                
                } 
              )} 
 
              {/*CODE TO USE*/}
               {/*{this.state.notes.map(function(val, i) {
                  return <PostItem headline={val.headline} story={val.story} source={val.source} /> 
                } 
              )} */}
            
               
            </section>
          </div>
        </div>
      </div>
       

</div>
         

<br /><br /><br />

          </div>

    );
  }
}

export default makeADifference;