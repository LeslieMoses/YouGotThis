import React, {Component} from "react";
import API from "../../utils/API";
import {base} from "../../utils/rebase";
import { Modal, Button } from 'react-bootstrap';
import SubmitStory from "./SubmitStory";



const SubmitModal = React.createClass({
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
        <Button
          bsStyle="primary"
          bsSize="medium"
          backgroundColor="pink"
          onClick={this.open}
        >
          Submit YOUR Story
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>&nbsp;Tell Your Story</Modal.Title>
          </Modal.Header>
          <Modal.Body className="BGmodal">
            {/*{this.props.children}*/}
            <SubmitStory />
            
          </Modal.Body>
          <Modal.Footer>
            <Button warning onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div> 
    );
  }
});

export default SubmitModal;