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
        trigger={<Button inverted icon onClick={this.handleOpen}><Icon name="maximize" color="cyan" size="big" /></Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='fullscreen'
      >
        <Button inverted icon onClick={this.handleClose} className="modal-close"><Icon name="x" color="cyan" size="big" /></Button>
        <div id="modal-content">
        	<Link to="/"><span className="modal-links"><Icon name="empty star" size="big" color="cyan" /></span></Link>
        	<Link to="/about"><span className="modal-links">Projects</span></Link>
        	<Link to="#"><span className="modal-links">About</span></Link>
        	<Link to="#"><span className="modal-links">Contact</span></Link>
        </div>
        <div id="social-links">
        	<Link to="#"><span className="social-links"><Icon color="white" name="linkedin square" />LinkedIn</span></Link>
        	<Link to="#"><span className="social-links"><Icon color="white" name="github" />GitHub</span></Link>
        	<Link to="#"><span className="social-links"><Icon color="white" name="codepen" />CodePen</span></Link>
        	<Link to="#"><span className="social-links"><Icon color="white" name="twitter" />Twitter</span></Link>
        </div>
        <Modal.Actions>
        Testing
        </Modal.Actions>
      </Modal>
    )
  }
}