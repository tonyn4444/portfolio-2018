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
        	<Link to="/projects"><span className="modal-links">Projects</span></Link>
        	<Link to="/about"><span className="modal-links">About</span></Link>
        	<Link to="/contact"><span className="modal-links">Contact</span></Link>
        </div>
        <div id="social-links">
        	<a href="https://linkedin.com/in/tony-t-nguyen" target="_blank"><span className="social-links"><Icon color="cyan" name="linkedin square" />LinkedIn</span></a>
        	<a href="https://github.com/tonyn4444" target="_blank"><span className="social-links"><Icon color="cyan" name="github" />GitHub</span></a>
        	<a href="http://codepen.io/tonyn4444" target="_blank"><span className="social-links"><Icon color="cyan" name="codepen" />CodePen</span></a>
        	<a href="https://www.instagram.com/tonyspamony/?hl=en" target="_blank"><span className="social-links"><Icon color="cyan" name="instagram" />Instagram</span></a>
        </div>
        <Modal.Actions>
        </Modal.Actions>
      </Modal>
    )
  }
}