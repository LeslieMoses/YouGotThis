import React, {Component} from "react";
import API from "../../utils/API";
// import Panel.js from "Panel";

import {base} from "../../utils/rebase";
import SubmitStory from "./SubmitStory";

import SubmitModal from "./SubmitModal";
import PostItem from "./PostItem"; 

// import unique from './unique.jpg'; 

var FontAwesome = require('react-fontawesome');

class Concerns extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
      beenThere1: 0,
      hereNow1: 0,
      notes: [],
			bio: {},
			repos: [],
      story:[]
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
 <div className="container-fluid BG1">
<div className="row">
                <div className="col-md-2">
    

<div className="card-user-profile">
        <img className="card-user-profile-img" src="https://images.pexels.com/photos/5439/earth-space.jpg?h=350&auto=compress&cs=tinysrgb" alt="picture of space" />
        <div className="card-user-profile-content card-section">
          <div className="card-user-profile-avatar">
            {/*<img src='/images/images.jpg' />*/}
            {/*<img src="https://static.pexels.com/photos/12567/photo-1444703686981-a3abbc4d4fe3.jpeg" alt="picture of yeti" />*/}
          </div>
          <p className="card-user-profile-name concernHed"> 
            <br />
  "Life feels unbearable"<br /><hr />
      </p>
         <br /> <p className="comradeHed">...at this moment</p>
    <br />
          <p className="comrade"> But you're NOT alone. <br /> Who has been there? <br />Who is there now?</p>  
          <p className="witness">Can I get a witness?  
            <br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<FontAwesome
        className='witness'
        name='hand-o-down'
        size='sm'
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
<div className="pullQuote"><p >And that’s when it all changed. That’s when I realized I saw the start of a world yet undiscovered...” </p></div>
  
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
        <div className="posts-panel grid">
          {/* Panel's header */}
          <header className="panel-header">
                         <label className="viewHed">
It will change
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
                  <img src="https://static.pexels.com/photos/12567/photo-1444703686981-a3abbc4d4fe3.jpeg" alt />
                </a>
                {/* Post's text */}
                <div className="post-text">
                                  {/*YOYO*/}
   <div className="callout">
        <h4><strong>FOUNDATION FOR EMAILS</strong></h4>
        <p>We know things, like building amazing products.</p>
        <button data-toggle="read-more-content" href="#">SHOW MORE <i className="fa fa-plus" /></button>
        <div className="read-more-content" id="read-more-content" data-toggler data-animate="hinge-in-from-top slide-out-right">
          <h5>Spend Less Time Coding, Testing, and Preparing:</h5>
          <ul>
            <li>Responsive Grid for Any Layout</li>
            <li>Common UI Patterns to Build Faster</li>
            <li>Make stylish emails fast with Sass</li>
            <li>Inky: A New Templating Language</li>
            <li>The ZURB Email Stack will make you an email pro</li>
            <li>Emails that work in all of the major clients, even Outlook</li>
            <li>Inlining CSS <strike>is</strike> was a pain</li>
          </ul>
        </div>
      </div>


                {/*YOYO*/}
                  {/* Post's title */}
                  <a href="#">
                    <h3 className="post-title">Post title place-holder</h3>
                 

                  </a>
                  {/*<div className="post-meta">*/}
                    {/*<span className="meta"><span className="meta-icon fa fa-user-circle-o" aria-hidden="true" /><a className="meta-text">Steve Jobs</a></span>*/}
                    {/*<span className="meta"><span className="meta-icon fa fa-clock-o" aria-hidden="true" /><span className="meta-text">22/06/2030</span></span>
                  </div>*/}
                  {/* Post's summary */}
                  <div className="post-summary">
                             
                       <a href="#" className="post-read-more">Read more<span className="fa fa-chevron-circle-right" aria-hidden="true" /></a>
                         <PostItem />
                   </div>
                </div>
              </div>
            </section>
            {/* Posts list */}
      
            <section className="posts-list">
               {this.state.notes.map(function(val, i) {
                  return <PostItem headline={val.headline} story={val.story} source={val.source} /> 
                } 
              )} 
            
              <div className="post-item">
                <a href="#" className="post-thumbnail">
                  <img src="https://static.pexels.com/photos/12567/photo-1444703686981-a3abbc4d4fe3.jpeg" alt />
                </a>
                <div className="post-text">
                    
                  <a href="#">
                    <h3 className="post-title">Post title place-holder</h3>
                    <div id="modal1" style={{margin: 50}} />
                    <modal />
                  </a>
                  <div className="post-meta">
                    <span className="meta"><span className="meta-icon fa fa-user-circle-o" aria-hidden="true" /><a className="meta-text">Steve Jobs</a></span>
                    <span className="meta"><span className="meta-icon fa fa-clock-o" aria-hidden="true" /><span className="meta-text">22/06/2030</span></span>
                  </div>
                </div>
              </div>
              <div className="post-item">
                <a href="#" className="post-thumbnail">
                  {/*<img src={'./unique.jpg'} />*/}
                  <img src="https://static.pexels.com/photos/33109/fall-autumn-red-season.jpg" alt />
                </a>
                <div className="post-text">
                  <a href="#">
                    <h3 className="post-title">Post title place-holder</h3>
                  </a>
                  <div className="post-meta">
                    <span className="meta"><span className="meta-icon fa fa-user-circle-o" aria-hidden="true" /><a className="meta-text">Steve Jobs</a></span>
                    <span className="meta"><span className="meta-icon fa fa-clock-o" aria-hidden="true" /><span className="meta-text">22/06/2030</span></span>
                          <Button
        
          bsStyle="warning"
          bsSize="small"
          backgroundColor="pink"
          onClick={this.open}
        >              <PostItem headline={val.headline} story={val.story} source={val.source} /> 
         
          Read More
        </Button>
                  </div>
                </div>
              </div>
              <div className="post-item">
                <a href="#" className="post-thumbnail">
                  <img src="https://static.pexels.com/photos/12567/photo-1444703686981-a3abbc4d4fe3.jpeg" alt />
                </a>
                <div className="post-text">
                  <a href="#">
                    <h3 className="post-title">Post title place-holder</h3>
                  </a>
                  <div className="post-meta">
                    <span className="meta"><span className="meta-icon fa fa-user-circle-o" aria-hidden="true" /><a className="meta-text">Steve Jobs</a></span>
                    <span className="meta"><span className="meta-icon fa fa-clock-o" aria-hidden="true" /><span className="meta-text">22/06/2030</span></span>
                  </div>
                </div>
              </div>
              <div className="post-item">
                <a href="#" className="post-thumbnail">
                  <img src="https://static.pexels.com/photos/370018/pexels-photo-370018.jpeg" alt />
                </a>
                <div className="post-text">
                  <a href="#">
                    <h3 className="post-title">Post title place-holder</h3>
                  </a>
                  <div className="post-meta">
                    <span className="meta"><span className="meta-icon fa fa-user-circle-o" aria-hidden="true" /><a className="meta-text">Steve Jobs</a></span>
                    <span className="meta"><span className="meta-icon fa fa-clock-o" aria-hidden="true" /><span className="meta-text">22/06/2030</span></span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
       

</div>
        <div className="row">

          </div>
                  <div className="row">

          <div className="col-md-3 col-md-8 col-md-offset-1">
            <div style={styles.formStyle} className="form-group">
              {/*<label className="concernHed">
It will change
                {this.state.concernUpdate}
              </label>*/}
              <br/>

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
                          onClick={() => this.concernUpdate("I understand and others do, too")}
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