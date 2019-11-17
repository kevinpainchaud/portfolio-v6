import { h } from "preact";
import { useState, useContext, useEffect } from "preact/hooks";

import { AppContext } from "../../app";

import Modal from "../../dumb/modal";

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
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                bibendum orci nec nunc aliquam, non lobortis est hendrerit.
                Morbi convallis mattis justo vel cursus. Fusce eu sodales arcu.
                Nunc at turpis urna. Suspendisse potenti. Quisque in nisl ac
                tellus tristique pharetra nec eu sapien. Curabitur faucibus
                ultrices justo, vel dignissim diam ornare nec. Fusce nec
                placerat elit. Etiam sapien diam, dictum nec tempor quis,
                sagittis sit amet elit. Pellentesque egestas nulla at viverra
                sodales. Praesent non arcu mauris. Nam suscipit convallis
                faucibus. Vivamus nec tempus mi. Phasellus sapien sapien,
                aliquam sed rutrum nec, posuere eget erat. Morbi vel tortor
                tempus, fermentum est nec, tristique massa. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Donec et libero dignissim, sagittis felis vitae,
                tincidunt mauris. Vestibulum tempor nisi mollis odio
                pellentesque molestie. Maecenas at vehicula odio. Proin id nunc
                nec sapien malesuada viverra non nec nulla. Proin quis malesuada
                dui. Sed blandit, ante pharetra varius dictum, sapien est auctor
                enim, sit amet fermentum risus massa vel tellus. Etiam accumsan
                lectus quis lorem molestie vestibulum. Aenean convallis dui leo,
                vel ultrices leo sagittis ut. Aliquam malesuada sit amet libero
                a aliquam. Quisque laoreet metus venenatis turpis lobortis
                ultrices. Donec vitae eros leo. Integer ac aliquet nunc. Sed
                consequat mi in est bibendum rhoncus ut quis urna. Sed ornare
                tortor sit amet consequat mattis.
            </p>
        </Modal>
    );
};

export default ContactModal;
