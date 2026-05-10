import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

function NoteInput({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { locale } = useContext(LocaleContext);

  function onTitleChangeEventHandler(event) {
    setTitle(event.target.value);
  }

  function onBodyInputHandler(event) {
    setBody(event.target.innerHTML);
  }

  function onSubmitEventHandler(event) {
    event.preventDefault();
    addNote({ title, body });
  }

  return (
    <form className="add-new-page__input" onSubmit={onSubmitEventHandler}>
      <input 
        type="text" 
        className="add-new-page__input__title" 
        placeholder={locale === 'id' ? 'Catatan rahasia' : 'Secret note'} 
        value={title} 
        onChange={onTitleChangeEventHandler}
        required
      />
      <div 
        className="add-new-page__input__body" 
        data-placeholder={locale === 'id' ? 'Sebenarnya saya adalah ....' : 'Actually I am ....'} 
        contentEditable
        onInput={onBodyInputHandler}
      />
      <div className="add-new-page__action">
        <button className="action" type="submit" title={locale === 'id' ? 'Simpan' : 'Save'}>
          ✔️
        </button>
      </div>
    </form>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
