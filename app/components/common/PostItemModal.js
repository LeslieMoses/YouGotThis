import React, {Component} from "react";
import API from "../../utils/API";
import {base} from "../../utils/rebase";
import { Modal, Button } from 'react-bootstrap';
import SubmitStory from "./SubmitStory";


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
            <Modal.Title>&nbsp;{this.props.headline}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="BGmodal">
            {/*{this.props.children}*/}
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

         
            <hr />
         
            <p>{this.props.story} </p>
              <p>{this.props.source}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button warning onClick={this.props.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div> 
    );
  }
});


export default PostItemModal;