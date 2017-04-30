import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class AppModal extends Component {
  state = { modalOpen: false }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })

  render() {
    return (
      <Modal
      	id="modal-full"
        trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='fullscreen'
      >
        <Header />
        <div id="modal-content">
        	<Link to="/"><span className="modal-links">Home</span></Link>
        	<Link to="/about"><span className="modal-links">Projects</span></Link>
        	<Link to="#"><span className="modal-links">About</span></Link>
        	<Link to="#"><span className="modal-links">Contact</span></Link>
        </div>
        <div id="social-links">
        	<Link to="#"><span className="social-links">LinkedIn</span></Link>
        	<Link to="#"><span className="social-links">GitHub</span></Link>
        	<Link to="#"><span className="social-links">CodePen</span></Link>
        	<Link to="#"><span className="social-links">Twitter</span></Link>
        </div>
        <Modal.Actions>
        Testing
        </Modal.Actions>
      </Modal>
    )
  }
}