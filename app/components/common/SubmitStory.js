import React, {Component} from "react";
import Panel from "./Panel";
import API from "../../utils/API";
import rebase from 're-base';
import firebase from "firebase";
import {base} from "../../utils/rebase";

class SubmitStory extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      yes: false,
      email: "",
      headline: "",
      story: "",
      concern: "",
      source: ""

    };
    // Binding getQuotes to this component since we'll be passing 
    // this method to other components to use
    this.getQuotes = this
      .getQuotes
      .bind(this);

    // www
    // this.handleInputChange = this
    //   .handleInputChange
    //   .bind(this);
  }
  // ??use??
  handleSubmit(event) {
     event.preventDefault();
    let objStory = {
      name: this.name.value,
      email: this.email.value,
      headline: this.headline.value,
      concern: this.concern.value,
      yes: this.yes.value,
      source: this.source.value,
      story: this.story.value
    };
        this.setState(objStory);
console.log("objStory", objStory);
    // orgainze data and pass it off to axios --> fb i j need info being submitted

  // let values = document.getElementsByClassName("storyGather");
  //      for (var i = 0; i < values.length; i++){
  //           console.log(values[i].value);
  //           objStory[values[i].name] = values[i].value;
  //           console.log(objStory);
  //   };

  base.push("story", {data : objStory}).then(function (error){
      // if(data){
        // redirect page
        // close modal (via bootstrap)
        // if for each concern chosen
      // }
        console.log(error);
        // message
      }
   );

  //  base.push("story", {data : objStory}).then(function (error){
  //     console.log("objStory", objStory);
  //       console.log(error);
  //     }
  //  );

    //  values.forEach(function(val, i){  })  var newNote =
    // this.refs.note.findDOMNode().value; this.refs.note.findDOMNode().value = '';
    // this.props.addNote(newNote); console.log("clicking", click);
    console.log(this.state);
  }
  // www
  // handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.type === 'checkbox'
  //     ? target.checked
  //     : target.value;
  //   const name = target.name;
  //   console.log("yo");

  //   this.setState({[name]: yvalue});
  // }
  // Getting all quotes once the component has 
  // mounted
  componentDidMount() {
    this.getQuotes();
  }
  getQuotes() {
    API
      .getQuotes()
      .then((res) => {
        const favoriteQuotes = res
          .data
          .filter(quote => quote.favorited);
        this.setState({quotes: favoriteQuotes});
      });
  }
  // A helper method for rendering one panel for 
  // each quote
  renderQuotes() {
    return this
      .state
      .quotes
      .map(quote => (<Panel quote={quote} key={quote._id} getQuotes={this.getQuotes}/>));
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div className=" holdSubmit ">
        <div className="form-group">
          {/* Name field */}
          <label className="control-label submit" htmlFor="name">Storyteller</label>
          <input
          ref={(input) => this.name = input}
            className="form-control by storyGather"
            id="name"
            name="name"
            placeholder=" &nbsp;Your Name "
            type="text"/>
        </div>
        <div className="form-group">
          {/* Email field */}
          <label className="control-label submit" htmlFor="email">Email</label>
          <input
                    ref={(input) => this.email = input}
            className="form-control storyGather"
            id="email"
            name="email"
            type="text"/>
        </div>
        <div className="form-group">
          {/* Headline field */}
          <label className="control-label submit" htmlFor="headline">Headline</label>
          <input
                              ref={(input) => this.headline = input}

            className="form-control title storyGather"
            id="headline"
            placeholder=" &nbsp;Story Title "
            name="headline"
            type="text"/>
        </div>
        <div className="form-group">
          {/* Story field */}
          <label className="control-label submit " htmlFor="message">Story</label>
          <br/>

          <div className="col-md-6">
            <h3 className="inputTitle " htmlFor="sel1"></h3>
            <select 
              ref={(input) => this.concern = input}
              className="form-control" id="sel1">
              <option>
                &nbsp; Concern 1</option>
              <option>
                &nbsp; Concern 2</option>
              <option>
                &nbsp; Concern 3</option>
              <option>
                &nbsp; Concern 4</option>
              <option>
                &nbsp; Concern 5</option>
              <option>
                &nbsp; Concern 6</option>
              <option>
                &nbsp; Other</option>
            </select>
          </div>
          <div className="col-md-6">
            <h3 className="inputTitle">
              &nbsp; &nbsp; True story?&nbsp;&nbsp;
              <input
                ref={(input) => this.yes = input}

                className="storyGather"
                name="yes"
                type="checkbox"/>
            </h3>
          </div>

          <textarea
           ref={(input) => this.story = input}
            className="form-control storyGather"
            cols={40}
            id="story"
            name="story"
            rows={10}/>
        </div>

        <div className="form-group">
          {/* Source field */}
          <label className="control-label submit" htmlFor="source">Source</label>
          <input
            ref={(input) => this.source = input}
            className="form-control storyGather"
            id="source"
            name="source"
            placeholder=" &nbsp;Website, source "
            type="text"/>
        </div>
        <div className="form-group">
          {/*??*/}
          <button
            className="btn btn-danger"
            name="submit"
            type="submit"
            >Submit</button>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
      </form>
    );
  }

}

// }

export default SubmitStory;