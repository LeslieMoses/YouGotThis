import React, {Component} from "react";
import Panel from "./Panel";
// import API from "../utils/API";
import rebase from 're-base';
import firebase from "firebase";

import {base} from "../../utils/rebase";

class SubmitStory extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      true: true,
      email: "",
      headline: "",
      story: "",
      concern: "",
      source: ""
    };

    // Binding getQuotes to this component since we'll be passing this method to
    // other components to use
    this.getQuotes = this
      .getQuotes
      .bind(this);

    // www
    this.handleInputChange = this
      .handleInputChange
      .bind(this);
  }
  // ??use??
  handleSubmit() {
    let objStory = {};
    // orgainze data and pass it off to axios --> fb i j need info being submitted
    let values = document.getElementsByClassName("storyGather");
    for (var i = 0; i < values.length; i++) {
      console.log(values[i].value);
      objStory[values[i].name] = values[i].value;
      console.log(objStory);
    }

    base.push("story", {
      data: objStory,
      then(error) {
        console.log(error);
      }

    });

    //  values.forEach(function(val, i){  })  var newNote =
    // this.refs.note.findDOMNode().value; this.refs.note.findDOMNode().value = '';
    // this.props.addNote(newNote); console.log("clicking", click);
    console.log(this.state);
  }
  // www
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    const name = target.name;
    console.log("yo");

    this.setState({[name]: value});
  }

  // Getting all quotes once the component has mounted
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
  // A helper method for rendering one panel for each quote
  renderQuotes() {
    return this
      .state
      .quotes
      .map(quote => (<Panel quote={quote} key={quote._id} getQuotes={this.getQuotes}/>));
  }

  render() {
    return (

      <div className="container-fluid holdSubmit">
        <div className="form-group">
          {/* Name field */}
          <label className="control-label submit" htmlFor="name">Storyteller</label>
          <input
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
            className="form-control storyGather"
            id="email"
            name="email"
            type="text"/>
        </div>
        <div className="form-group">
          {/* Headline field */}
          <label className="control-label submit" htmlFor="headline">Headline</label>
          <input
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
            <select className="form-control " id="sel1">
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
                className="storyGather"
                name="false"
                type="checkbox"
                checked={this.state.true}
                onChange={this.handleInputChange}/>
            </h3>
          </div>

          <textarea
            className="form-control storyGather"
            cols={40}
            id="story"
            name="story"
            rows={10}
            defaultValue={this.state.story}/>
        </div>

        <div className="form-group">
          {/* Source field */}
          <label className="control-label submit" htmlFor="source">Source</label>
          <input
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
            onClick={this
            .handleSubmit
            .bind(this)}>Submit</button>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>

    );
  }

}

// }

export default SubmitStory;