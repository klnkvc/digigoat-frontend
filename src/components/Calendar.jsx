import React, { useState } from 'react';
import '../css/Calendar.css';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [notes, setNotes] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [newNote, setNewNote] = useState("");
  const [goatCode, setGoatCode] = useState('');

  // Mendapatkan bulan dan tahun saat ini
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Mendapatkan nama bulan
  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  // Mendapatkan jumlah hari di bulan ini
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Mendapatkan hari pertama di bulan ini
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Mendapatkan jumlah hari di bulan sebelumnya
  const daysInPreviousMonth = new Date(year, month, 0).getDate();
  const daysToShowFromPreviousMonth = firstDayOfMonth;

  // Membuat array kalender
  const calendarDays = [
    ...Array.from({ length: daysToShowFromPreviousMonth }, (_, i) => ({
      day: daysInPreviousMonth - daysToShowFromPreviousMonth + i + 1,
      isPreviousMonth: true
    })),
    ...Array.from({ length: daysInMonth }, (_, i) => ({
      day: i + 1,
      isPreviousMonth: false
    }))
  ];

  // Fungsi untuk membuka form tambah catatan
  const openNoteForm = (day) => {
    setSelectedDay(day);
    const key = `${year}-${month}-${day}`;
    setNewNote(notes[key]?.text || "");
    setGoatCode(notes[key]?.goatCode || "");
  };

  // Fungsi untuk menyimpan catatan
  const saveNote = () => {
    if (newNote && goatCode) {
      const key = `${year}-${month}-${selectedDay}`;
      setNotes((prevNotes) => ({
        ...prevNotes,
        [key]: { text: newNote, goatCode }
      }));
      setNewNote('');
      setGoatCode('');
      setSelectedDay(null);
    }
  };

  // Fungsi untuk menghapus catatan
  const deleteNote = (day) => {
    const key = `${year}-${month}-${day}`;
    setNotes((prevNotes) => {
      const updatedNotes = { ...prevNotes };
      delete updatedNotes[key];
      return updatedNotes;
    });
  };

  return (
    <div className="calendar-container">
      <div className="calendar">
        <h3>{monthNames[month]} {year}</h3>
        <div className="calendar-grid">
          {/* Header hari dalam seminggu */}
          <div className="calendar-header">Minggu</div>
          <div className="calendar-header">Senin</div>
          <div className="calendar-header">Selasa</div>
          <div className="calendar-header">Rabu</div>
          <div className="calendar-header">Kamis</div>
          <div className="calendar-header">Jumat</div>
          <div className="calendar-header">Sabtu</div>

          {/* Tampilkan tanggal di dalam kalender */}
          {calendarDays.map((item, index) => {
            const key = `${year}-${month}-${item.day}`;
            return (
              <div
                key={index}
                className={`calendar-day ${item.isPreviousMonth ? 'previous-month' : ''} ${!item.isPreviousMonth && notes[key] ? 'has-note' : ''}`}
                onClick={() => !item.isPreviousMonth && openNoteForm(item.day)}
              >
                {item.day}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Tambah Catatan */}
{selectedDay && (
  <div className="calendar-form-note">
    <h4>Tambah Catatan untuk Tanggal {selectedDay}</h4>
    <input
      type="text"
      value={newNote}
      onChange={(e) => setNewNote(e.target.value)}
      placeholder="Tambahkan catatan di sini..."
    />
    <input
      type="text"
      value={goatCode}
      onChange={(e) => setGoatCode(e.target.value)}
      placeholder="Kode Kambing"
    />
    <div>
      <button onClick={saveNote}>Simpan Catatan</button>
      <button className="cancel" onClick={() => setSelectedDay(null)}>Batal</button>
    </div>
  </div>
)}

      {/* Daftar Catatan */}
      <div className="notes">
        <h4>Jadwal Kegiatan</h4>
        {Object.keys(notes).length === 0 ? (
          <p>Tidak ada catatan.</p>
        ) : (
          <ul>
            {Object.entries(notes).map(([key, note], index) => (
              <li key={index} className="note-item">
                <strong>Tanggal {key.split('-')[2]} {monthNames[parseInt(key.split('-')[1], 10)]}:</strong> {note.text} - Kode Kambing: {note.goatCode}
                <button onClick={() => deleteNote(key.split('-')[2])} className="delete-note">Hapus</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Calendar;
