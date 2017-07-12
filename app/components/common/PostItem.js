import React, {Component} from "react";

import API from "../../utils/API";
import rebase from 're-base';
import firebase from "firebase";

class PostItem extends Component {
  constructor() {
    super();
  };
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
              <h3 className="post-title">Post title place-holder</h3>
            </a>
            <div className="post-meta">
              <span className="meta"><span className="meta-icon fa fa-user-circle-o" aria-hidden="true"/>
                <a className="meta-text">Steve Jobs</a>
              </span>
              <span className="meta"><span className="meta-icon fa fa-clock-o" aria-hidden="true"/>
                <span className="meta-text">22/06/2030</span>
              </span>
            </div>
          </div>
        </div>
      </section>

    )
  };
}

export default PostItem;