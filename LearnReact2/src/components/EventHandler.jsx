// EventHandler.jsx

function EventHandler() {
    const handleClick = () => {
        alert('Hello My Nama is Aditya Beckham Software Engineer');
    };

    return (
        <div>
            <button className="button" onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default EventHandler;
