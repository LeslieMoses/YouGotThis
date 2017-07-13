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
              src="https://static.pexels.com/photos/33109/fall-autumn-red-season.jpg"
              alt/>
          </a>
          <div className="post-text">
            <a href="#">
              <h3 className="post-title">{this.props.headline}</h3>
            </a>
            <div className="post-meta">
              <span className="meta"><span className="meta-icon fa fa-user-circle-o" aria-hidden="true"/>
                <a className="meta-text">Steve Jobs 
                  {/*{this.props.storyInfo.story}*/}
                  </a>
              </span>
              <span className="meta"><span className="meta-icon fa fa-clock-o" aria-hidden="true"/>
                <span className="meta-text">22/06/2030</span>

                              <div>       
    <Button   
          bsStyle="info"
          bsSize="large"
          backgroundColor="pink"
          onClick={this.open.bind(this)}
        >
         Read Story
        </Button>
           < PostItemModal closeModal={this.close.bind(this)} headline={this.props.headline} showModal={this.state.showModal} story={this.props.storyInfo.story} source={this.props.source} /></div>
              </span>
            </div>
          </div>
        </div>
      </section>

    )
  };
}

export default PostItem;