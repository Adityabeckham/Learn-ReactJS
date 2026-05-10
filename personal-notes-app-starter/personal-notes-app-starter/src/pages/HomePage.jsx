import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import { getActiveNotes } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      setLoading(true);
      const { data } = await getActiveNotes();
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
    <section className="homepage">
      <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {loading ? (
        <Loading />
      ) : (
        <NoteList 
          notes={filteredNotes} 
          emptyMessage={locale === 'id' ? 'Tidak ada catatan' : 'No notes'} 
        />
      )}
      <div className="homepage__action">
        <button 
          className="action" 
          type="button" 
          title={locale === 'id' ? 'Tambah' : 'Add'} 
          onClick={() => navigate('/notes/new')}
        >
          +
        </button>
      </div>
    </section>
  );
}

export default HomePage;
