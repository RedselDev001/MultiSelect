import React, { Fragment } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

const Model = ({ open, toggleOpen }) => {

    //============main_return_function ==============//
    return (
        <Fragment>
            {
                open !== false &&
                <Modal isOpen={open} toggle={toggleOpen} className='' >
                    <ModalHeader toggle={toggleOpen}>
                        <h2>model header</h2>
                    </ModalHeader>
                    <ModalBody>
                        hello  team
                    </ModalBody>
                </Modal>
            }

        </Fragment>
    )
}

export default Model
