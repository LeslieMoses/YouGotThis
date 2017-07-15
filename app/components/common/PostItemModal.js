import React, {Component} from "react";
import API from "../../utils/API";
import {base} from "../../utils/rebase";
import { Modal, Button } from 'react-bootstrap';
import SubmitStory from "./SubmitStory";
var FontAwesome = require('react-fontawesome');

const PostItemModal = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    // const popover = (
    //   <Popover id="modal-popover" title="popover">
    //     very popover. such engagement
    //   </Popover>
    // );
    // const tooltip = (
    //   <Tooltip id="modal-tooltip">
    //     wow.
    //   </Tooltip>
    // );

    return (
      <div >
        



        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title className="StorymodalHed">&nbsp;{this.props.headline}</Modal.Title>
            {/*<br />*/}
            <hr />
               <Modal.Title className="modalName">



         
                 Storyteller: &nbsp;{this.props.name} &nbsp;<FontAwesome
        className='witness'
        name='pencil'
        size='lg'
        style={{ color: "#FF717E" }}
      /></Modal.Title>
 
          </Modal.Header>
          <Modal.Body className="BGStorymodal drop-cap lead">
            {this.props.children}{this.props.story}

         
            <hr />
         
            <p className="modalSource"><h6>SOURCES:</h6><br />
{this.props.source} </p>
              {/*<p>{this.props.}</p>*/}
          </Modal.Body>
          <Modal.Footer>
            <Button  style={{
              
                backgroundColor: "#FF717E",
                fontSize: "12px",
                color: "floralwhite"
              }}           onClick={this.props.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div> 
    );
  }
});


export default PostItemModal;