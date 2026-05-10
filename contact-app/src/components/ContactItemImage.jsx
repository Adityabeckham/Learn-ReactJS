import React from 'react';
import PropTypes from 'prop-types';
import { validateProps } from '../utils/validation';
import Joi from 'joi';



const contactItemImageSchema = Joi.object({
    imageUrl: Joi.string().required(),
});

function ContactItemImage(props) {
    const validatedProps = validateProps(contactItemImageSchema, props, "ContactItemImage");
    const { imageUrl } = validatedProps;

    return (
        <div className="contact-item__image">
            <img src={imageUrl} alt="contact avatar" />
        </div>
    );
}


ContactItemImage.propTypes = {
    imageUrl: PropTypes.string.isRequired,
}

export default ContactItemImage;