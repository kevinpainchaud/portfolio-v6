import { h, createRef } from "preact";
import { useContext, useEffect } from "preact/hooks";

import contact from "../../../../data/contact.json";

import { AppContext } from "../../app";

import SocialNetworks from "../social-networks";
import Modal from "../../dumb/modal";
import StyledLink from "../../styled/styled-link";

import { ModalContent, Hr } from "./style";

const ContactModal = () => {
    const modalRef = createRef();

    useEffect(() => {
        const appContext = useContext(AppContext);

        appContext.emitter.on("TOGGLE_CONTACT_MODAL", toggleModal);

        return () =>
            appContext.emitter.off("TOGGLE_CONTACT_MODAL", toggleModal);
    }, []);

    const toggleModal = () => modalRef.current.dispatchEvent(new Event("open"));

    return (
        <Modal ref={modalRef} title="Me contacter">
            <ModalContent>
                Par mail :{" "}
                <StyledLink href={`mailto:${contact.email}`}>
                    {contact.email}
                </StyledLink>
                <Hr />
                <SocialNetworks></SocialNetworks>
            </ModalContent>
        </Modal>
    );
};

export default ContactModal;
