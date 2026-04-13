import React, { useEffect, useState } from "react";
import "../assets/Style/rilis.css";
import axios from "axios";

export default function HomePage() {
    const [data, setData] = useState([]);

  useEffect(() =>{
    //logic fetch menu
      axios.get("https://69dc713784f912a26403aee0.mockapi.io/movie").then((response) => {
      //handle success
      console.log("response", response.data);
      setData(response.data);
  });
  }, []);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [editId, setEditId] = useState(null);


  const handleSubmit = () => {
  if (!title || !image) return;

  if (editId) {
    // UPDATE
    axios.put(`https://69dc713784f912a26403aee0.mockapi.io/movie/${editId}`, {
      title,
      image
    })
    .then(() => {
      fetchData();
      setEditId(null);
    });

  } else {
    // ADD
    axios.post("https://69dc713784f912a26403aee0.mockapi.io/movie", {
      title,
      image
    })
    .then(() => {
      fetchData();
    });
  }

  setTitle("");
  setImage("");
};

  const fetchData = () => {
    axios
      .get("https://69dc713784f912a26403aee0.mockapi.io/api/v1/movie")
      .then((res) => {
        setData(res.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // DELETE
  const handleDelete = (id) => {
    axios
      .delete(`https://69dc713784f912a26403aee0.mockapi.io/movie/${id}`)
      .then(() => {
        fetchData();
      });
  };

  // EDIT
  const handleEdit = (movie) => {
      setTitle(movie.title);
      setImage(movie.image);
      setEditId(movie.id);
  };

  return (
    <div className="container">
      <div className="section-header">
        <h2>Rilis Baru</h2>

        <div className="crud-controls">
          <input
            type="text"
            placeholder="Judul"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button onClick={handleSubmit}>
            {editId ? "Update" : "Tambah"}
          </button>
        </div>
      </div>

      <div className="movie-grid">
        {!data ? (
          <p>Error load data</p>
        ) : data.length === 0 ? (
          <p>Tidak ada data</p>
        ) : (
          data.map((movie) => (
      <div className="movie-card" key={movie.id}>
        <img src={movie.image} alt={movie.title} />
        <p>{movie.title}</p>

        <div className="card-actions">
          <button onClick={() => handleEdit(movie)}>Edit</button>
          <button onClick={() => handleDelete(movie.id)}>Delete</button>
        </div>
      </div>
    ))
        )}
      </div>
    </div>
  );
}