// Event Argument

function DaftarBuah() {
    const handleClick = (name) => {
        alert(`Kamu memilih ${name}`);
    };
    return (
        <div>
            <button className="button" onClick={() => handleClick('Apel')}>Pilih Apel</button>
            <button className="button" onClick={() => handleClick('Mangga')}>Pilih Mangga</button>
            <button className="button" onClick={() => handleClick('Jeruk')}>Pilih Jeruk</button>
        </div>
    );
};

export default DaftarBuah;