import React from 'react';
import PropTypes from 'prop-types';
import { validateProps } from '../utils/validation';
import Joi from 'joi';

const contactInputSchema = Joi.object({
    addContact: Joi.func().required(),
});

class ContactInput extends React.Component {
    constructor(props) {
        super(props);
 
        const validatedProps = validateProps(contactInputSchema, props, "ContactInput");

        this.state = {
            name: '',
            tag: '',
            validatedProps,
        };

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNameChangeEventHandler(event) {
        this.setState({
            name: event.target.value,
        });
    }

    onTagChangeEventHandler(event) {
        this.setState({
            tag: event.target.value,
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();

        // ✅ ambil dari validatedProps
        const { addContact } = this.state.validatedProps;

        addContact({
            name: this.state.name,
            tag: this.state.tag,
        });

        // (optional) reset form
        this.setState({
            name: '',
            tag: '',
        });
    }

    render() {
        return (
            <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
                <input
                    type="text"
                    placeholder="Nama"
                    value={this.state.name}
                    onChange={this.onNameChangeEventHandler}
                />
                <input
                    type="text"
                    placeholder="Tag"
                    value={this.state.tag}
                    onChange={this.onTagChangeEventHandler}
                />
                <button type="submit">Tambah</button>
            </form>
        );
    }
}

ContactInput.propTypes = {
    addContact: PropTypes.func.isRequired,
};

export default ContactInput;