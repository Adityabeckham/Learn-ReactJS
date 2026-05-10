import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import parser from 'html-react-parser';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/network-data';
import { showFormattedDate } from '../utils/index';
import NotFoundPage from './NotFoundPage';
import Loading from '../components/Loading';
import LocaleContext from '../contexts/LocaleContext';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNote() {
      setLoading(true);
      const { data } = await getNote(id);
      setNote(data);
      setLoading(false);
    }
    fetchNote();
  }, [id]);

  async function onDelete() {
    await deleteNote(id);
    navigate('/');
  }

  async function onArchive() {
    await archiveNote(id);
    navigate('/');
  }

  async function onUnarchive() {
    await unarchiveNote(id);
    navigate('/');
  }

  if (loading) {
    return (
      <section className="detail-page">
        <Loading />
      </section>
    );
  }

  if (!note) {
    return <NotFoundPage />;
  }

  const { title, createdAt, body, archived } = note;

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{parser(body)}</div>
      
      <div className="detail-page__action">
        {archived ? (
          <button className="action" type="button" title={locale === 'id' ? 'Aktifkan' : 'Unarchive'} onClick={onUnarchive}>
            ⤴️
          </button>
        ) : (
          <button className="action" type="button" title={locale === 'id' ? 'Arsipkan' : 'Archive'} onClick={onArchive}>
            📥
          </button>
        )}
        <button className="action" type="button" title={locale === 'id' ? 'Hapus' : 'Delete'} onClick={onDelete}>
          ❌
        </button>
      </div>
    </section>
  );
}

export default DetailPage;
