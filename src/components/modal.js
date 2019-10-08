import React from "react";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Input
} from "reactstrap";
import "../componentcss/modal.css";

class Modalx extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	render() {
		return (
			<div>
				<Button color="contact" onClick={this.toggle}>
					Contact
				</Button>
				<Modal
					className="modalx"
					isOpen={this.state.modal}
					toggle={this.toggle}
				>
					<ModalHeader toggle={this.toggle}>Contact Me</ModalHeader>
					<ModalBody>
						<form>
							<Input type="text" placeholder="Name" />
							<Input type="text" placeholder="Contact Information" />
							<textarea
								align="top"
								type="text"
								placeholder="Describe what you want built"
								className="descStyle"
							/>
						</form>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.toggle}>
							Do Something
						</Button>{" "}
						<Button color="secondary" onClick={this.toggle}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default Modalx;
