import React, { useEffect, useState } from "react";
import "../assets/Style/rilis.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  createMovie,
  editMovie,
  removeMovie,
} from "../store/redux/movieSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies.data);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleSubmit = () => {
    if (!title || !image) return;

    if (editId) {
      dispatch(editMovie({ id: editId, movie: { title, image } }));
      setEditId(null);
    } else {
      dispatch(createMovie({ title, image }));
    }

    setTitle("");
    setImage("");
  };

  const handleDelete = (id) => {
    dispatch(removeMovie(id));
  };

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
        {data.length === 0 ? (
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