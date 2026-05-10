import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import { getArchivedNotes } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const { locale } = useContext(LocaleContext);

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      setLoading(true);
      const { data } = await getArchivedNotes();
      setNotes(data);
      setLoading(false);
    }
    fetchNotes();
  }, []);

  function onKeywordChangeHandler(newKeyword) {
    setSearchParams({ keyword: newKeyword });
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <section className="archives-page">
      <h2>{locale === 'id' ? 'Catatan Arsip' : 'Archived Notes'}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {loading ? (
        <Loading />
      ) : (
        <NoteList 
          notes={filteredNotes} 
          emptyMessage={locale === 'id' ? 'Arsip kosong' : 'Archive is empty'} 
        />
      )}
    </section>
  );
}

export default ArchivePage;
