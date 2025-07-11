import React, { useState } from "react";
import god from "./assets/imgs/god.jpg";
import ave from "./assets/imgs/ave.webp";
import fo from "./assets/imgs/for.jpg";
import dar from "./assets/imgs/dar.jpg";
import inc from "./assets/imgs/inc.jpg";
import int from "./assets/imgs/int.jpg";
import lal from "./assets/imgs/lal.jpg";
import mat from "./assets/imgs/mat.webp";
import pul from "./assets/imgs/pul.jpg";
import sha from "./assets/imgs/sha.jpg";
import tit from "./assets/imgs/tit.webp";
const sampleData = [
  {
    id: 1,
    title: "Inception: A Journey into Dreams",
    genres: ["Sci-Fi", "Action"],
    topic: "Mind-Bending",
    img: inc,
  },
  {
    id: 2,
    title: "The Godfather: A Mafia Legacy",
    genres: ["Crime", "Drama"],
    topic: "Mafia",
    img: god,
  },
  {
    id: 3,
    title: "The Dark Knight: Gotham's Savior",
    genres: ["Action", "Drama", "Crime"],
    topic: "Superheroes",
    img: dar,
  },
  {
    id: 4,
    title: "Forrest Gump: A Life of Wonders",
    genres: ["Drama"],
    topic: "Life Lessons",
    img: fo,
  },
  {
    id: 5,
    title: "The Matrix: Enter the Digital World",
    genres: ["Sci-Fi", "Action"],
    topic: "Technology",
    img: mat,
  },
  {
    id: 6,
    title: "Titanic: A Tale of Love and Loss",
    genres: ["Romance", "Drama"],
    topic: "Tragedy",
    img: tit,
  },
  {
    id: 7,
    title: "Avengers: Endgame: The Final Showdown",
    genres: ["Action", "Sci-Fi", "Thriller"],
    topic: "Superheroes",
    img: ave,
  },
  {
    id: 8,
    title: "La La Land: A Musical Romance",
    genres: ["Musical", "Romance", "Drama"],
    topic: "Love Story",
    img: lal,
  },
  {
    id: 9,
    title: "Interstellar: Beyond the Stars",
    genres: ["Sci-Fi", "Drama"],
    topic: "Space Exploration",
    img: int,
  },
  {
    id: 10,
    title: "Pulp Fiction: A Nonlinear Tale",
    genres: ["Crime", "Dark Comedy", "Thriller"],
    topic: "Dark Comedy",
    img: pul,
  },
  {
    id: 11,
    title: "Shawshank Redemption: A Story of Hope and Resilience",
    genres: ["Crime", "Action", "Drama", "Thriller"],
    topic: "Tragedy",
    img: sha,
  },
];

const genres = [
  "Sci-Fi",
  "Crime",
  "Action",
  "Drama",
  "Romance",
  "Musical",
  "Dark Comedy",
  "Thriller",
];

const topics = [
  "Mind-Bending",
  "Mafia",
  "Superheroes",
  "Life Lessons",
  "Technology",
  "Tragedy",
  "Love Story",
  "Space Exploration",
  "Dark Comedy",
];

const Search = () => {
  const [query, setQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleCheckbox = (value, selected, setSelected) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const handleSearch = () => {
    return sampleData.filter((item) => {
      const matchesQuery =
        query === "" || item.title.toLowerCase().includes(query.toLowerCase());

      const matchesGenre =
        selectedGenres.length === 0 ||
        item.genres.some((g) => selectedGenres.includes(g));

      const matchesTopic =
        selectedTopics.length === 0 || selectedTopics.includes(item.topic);

      return matchesQuery && matchesGenre && matchesTopic;
    });
  };

  const filteredResults = handleSearch();

  return (
    <div style={{ padding: "20px", width: "1000px", margin: "0 auto" }}>
      <h1>Movie Search</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <div style={{ position: "relative", marginBottom: "20px", display: "flex", justifyContent: "flex-start" }}>
        <button
          onClick={() => setFilterOpen(!filterOpen)}
          style={{
            padding: "10px 20px",
            color: "white",
            borderRadius: "5px",
            border: "1px solid #ccc",
            cursor: "pointer",
            backgroundColor: "black",

          }}
        >
          Filter
        </button>

        {filterOpen && (
          <div
            style={{
              position: "absolute",
              top: "50px",
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "20px",
              display: "flex",
              gap: "40px",
              zIndex: 10,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div>
              <h4 style={{ marginBottom: "10px" }}>Genres</h4>
              {genres.map((g) => (
                <label
                  key={g}
                  style={{
                    opacity: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginBottom: "5px",
                  }}
                >
                  <input
                    type="checkbox"
                    value={g}
                    checked={selectedGenres.includes(g)}
                    onChange={() =>
                      toggleCheckbox(g, selectedGenres, setSelectedGenres)
                    }
                    style={{ marginRight: "8px" }}
                  />
                  {g}
                </label>
              ))}
            </div>
              
            <div>
              <h4 style={{ marginBottom: "10px" }}>Topics</h4>
              {topics.map((t) => (
                <label
                  key={t}
                  style={{
                    opacity: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginBottom: "5px",
                  }}
                >
                  <input
                    type="checkbox"
                    value={t}
                    checked={selectedTopics.includes(t)}
                    onChange={() =>
                      toggleCheckbox(t, selectedTopics, setSelectedTopics)
                    }
                    style={{ marginRight: "8px" }}
                  />
                  {t}
                </label>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
              <button
              
              onMouseOver={(e => e.currentTarget.style.border = "white solid 1px")}
              onMouseOut={(e => e.currentTarget.style.border = "grey solid 1px" )}
                onClick={() => {
                  setSelectedGenres([]);
                  setSelectedTopics([]);
                }}
                style={{
                  padding: "6px 12px",
                  borderRadius: "5px",
                  border: "1px solid grey",
                  backgroundColor: "black",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                Clear All
              </button>
            </div>
          </div>
        )}
      </div>

      <div>
        {filteredResults.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            {filteredResults.map((item) => (
              <div
                key={item.id}
                style={{
                  position: "relative",
                  height: "300px",
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "10px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    padding: "10px",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "#fff",
                    textAlign: "left",
                  }}
                >
                  <h3 style={{ margin: "0 0 5px" }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: "0.9em" }}>
                    <strong>Genres:</strong> {item.genres.join(", ")} <br />
                    <strong>Topic:</strong> {item.topic}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
