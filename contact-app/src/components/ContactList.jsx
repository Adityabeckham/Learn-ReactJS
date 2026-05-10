import React from 'react';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import { validateProps } from '../utils/validation';
import Joi from 'joi';


const contactListPropSchema = Joi.object({
    contacts: Joi.array().items(
        Joi.object({
            id: Joi.number().required(),
            name: Joi.string().required(),
            tag: Joi.string().required(),
            imageUrl: Joi.string().required(),
        })
    ).required(),
    onDelete: Joi.func().required(),
});

function ContactList(props) {
    
    const validatedProps = validateProps(contactListPropSchema, props, 'ContactList');

    const { contacts, onDelete } = validatedProps;

    return (
        <div className="contact-list">
            {contacts.map((contact) => (
                <ContactItem
                    key={contact.id}
                    {...contact}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactList;