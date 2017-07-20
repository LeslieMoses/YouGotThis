import React, {Component} from "react";

import API from "../../utils/API";
import rebase from 're-base';
import firebase from "firebase";
import PostItemModal from "./PostItemModal";
import { Modal, Button } from 'react-bootstrap';


class PostItem extends Component {
  constructor() {
    
    super();
    this.state = {showModal: false}
   };
    close() {
    this.setState({ showModal: false });
  }
    open() {
    this.setState({ showModal: true });
  }
  render() {
    return (

      
      <section className="posts-list">

        <div className="post-item">
          <a href="#" className="post-thumbnail">
            {/*<img src={'./unique.jpg'} />*/}
            <img
              src="/pics/pathwalk.jpg"
              alt/>
          </a>
          <div className="post-text">
            <a href="#">
              <h3 className="post-title">{this.props.headline}</h3>
            </a>
            <div className="post-meta">
              <span className="meta"><span aria-hidden="true"/>
                <a className="meta-text BGStory">    
                 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; <Button   
          className="readBtn"
          bsStyle="info"
          bsSize="large"
          backgroundColor="pink"
          onClick={this.open.bind(this)}
        >
         &nbsp;&nbsp;Story&nbsp;&nbsp;
        </Button>

                  {/*{this.props.storyInfo.story}*/}
                  </a> 
                  <hr />
              </span>
              <span className="meta"><span  aria-hidden="true"/>

                              <div>       

           < PostItemModal closeModal={this.close.bind(this)} headline={this.props.headline} name={this.props.storyInfo.name} showModal={this.state.showModal} story={this.props.storyInfo.story} source={this.props.storyInfo.source} /></div>
             
              </span>
            </div>
          </div>
        </div>
      </section>

    )
  };
}

export default PostItem;