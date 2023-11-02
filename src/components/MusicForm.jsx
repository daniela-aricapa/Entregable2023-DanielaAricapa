import React, { useState } from "react";

function MusicForm() {
  const [formData, setFormData] = useState({
    songName: "",
    artistName: "",
  });
  const [showCard, setShowCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const songName = formData.songName;
    const artistName = formData.artistName;

    
    const regex = /^\s+/;

    if (
      songName.length < 3 ||
      artistName.length < 6 ||
      regex.test(songName) ||
      regex.test(artistName)
    ) {
      setErrorMessage("Por favor chequea que la información sea correcta");
      setShowCard(false);
    } else {
      setErrorMessage("");
      setShowCard(true);
    }
  };

  return (
    <div>
      <h1>Formulario de Música</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de la canción:</label>
          <input
            type="text"
            name="songName"
            value={formData.songName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Nombre del artista:</label>
          <input
            type="text"
            name="artistName"
            value={formData.artistName}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {showCard && (
        <div className="card">
          <h2>Hola sabemos que tu canción favorita y artista favorito son:</h2>
          <p>{formData.songName}</p>
          <p>{formData.artistName}</p>
        </div>
      )}
    </div>
  );
}

export default MusicForm;
