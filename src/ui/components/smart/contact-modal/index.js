import { h } from "preact";
import { useState, useContext, useEffect } from "preact/hooks";

import contact from "../../../../data/contact.json";

import { AppContext } from "../../app";

import SocialNetworks from "../social-networks";
import Modal from "../../dumb/modal";
import StyledLink from "../../styled/styled-link";

const ContactModal = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const appContext = useContext(AppContext);

        appContext.emitter.on("TOGGLE_CONTACT_MODAL", toggleModal);

        return () =>
            appContext.emitter.off("TOGGLE_CONTACT_MODAL", toggleModal);
    }, []);

    const toggleModal = () => setShow(!show);

    return (
        <Modal show={show} setShow={show => setShow(show)} title="Me contacter">
            Par mail :
            <StyledLink href={`mailto:${contact.email}`}>
                {contact.email}
            </StyledLink>
            <hr />
            <SocialNetworks></SocialNetworks>
        </Modal>
    );
};

export default ContactModal;
