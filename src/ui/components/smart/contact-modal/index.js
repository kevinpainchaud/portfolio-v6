import { h, createRef } from "preact";
import { useContext, useEffect } from "preact/hooks";

import { AppContext } from "../../app";

import SocialNetworks from "../social-networks";
import Modal from "../../dumb/modal";
import IconLink from "../../dumb/icon-link";

import { ModalContent, Hr } from "./style";

import iconMessage from "../../../assets/images/icon-message.svg";

const ContactModal = () => {
    const modalRef = createRef();

    useEffect(() => {
        const appContext = useContext(AppContext);

        appContext.emitter.on("TOGGLE_CONTACT_MODAL", toggleModal);

        return () =>
            appContext.emitter.off("TOGGLE_CONTACT_MODAL", toggleModal);
    }, []);

    const toggleModal = () => modalRef.current.dispatchEvent(new Event("open"));

    const handleMailClick = () =>
        (window.location.href = `mailto:${getEmail()}`);

    const getEmail = () => {
        // Source: http://www.jottings.com/obfuscator/
        const coded = "Q4tc@Uo0K.Ql",
            key =
                "GKnhZizUlWTLq1w9Ot38cpba2FCySs7g0oM4YmJrVNxvREPHIQ6dBADf5keXuj",
            shift = coded.length;

        let link = "";

        for (let i = 0; i < coded.length; i++) {
            if (key.indexOf(coded.charAt(i)) == -1) {
                const ltr = coded.charAt(i);
                link += ltr;
            } else {
                const ltr =
                    (key.indexOf(coded.charAt(i)) - shift + key.length) %
                    key.length;
                link += key.charAt(ltr);
            }
        }

        return link;
    };

    return (
        <Modal ref={modalRef} title="Me contacter">
            <ModalContent>
                <IconLink
                    href="javascript:void(0)"
                    onClick={handleMailClick}
                    icon={iconMessage}
                >
                    Par mail
                </IconLink>
                <Hr />
                <SocialNetworks></SocialNetworks>
            </ModalContent>
        </Modal>
    );
};

export default ContactModal;
