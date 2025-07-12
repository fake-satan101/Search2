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
import gla from "./assets/imgs/gla.jpg";
import par from "./assets/imgs/par.webp";
import whi from "./assets/imgs/whi.jpg";
import jok from "./assets/imgs/jok.jpg";
import lion from "./assets/imgs/lion.jpg";
import br from "./assets/imgs/br.jpg";
import up from "./assets/imgs/up.jpg";
import her from "./assets/imgs/her.jpg";
import fight from "./assets/imgs/fight.jpg";
import walle from "./assets/imgs/walle.jpg";

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
  {
  id: 12,
  title: "Gladiator: The Rise of a General",
  genres: ["Action", "Drama", "Historical"],
  topic: "Resilience",
  img: gla,
},
{
  id: 13,
  title: "Parasite: A Class Divide",
  genres: ["Thriller", "Drama", "Dark Comedy"],
  topic: "Society",
  img: par,
},
{
  id: 14,
  title: "Whiplash: The Cost of Greatness",
  genres: ["Drama", "Musical", "Psychological"],
  topic: "Ambition",
  img: whi,
},
{
  id: 15,
  title: "Joker: The Clown Prince of Crime",
  genres: ["Crime", "Drama", "Psychological"],
  topic: "Madness",
  img: jok,
},
{
  id: 16,
  title: "The Lion King: A Circle of Life",
  genres: ["Animation", "Adventure", "Drama"],
  topic: "Family",
  img: lion,
},
{
  id: 17,
  title: "Blade Runner 2049: A Dystopian Tale",
  genres: ["Sci-Fi", "Thriller", "Drama"],
  topic: "Identity",
  img: br,
},
{
  id: 18,
  title: "Up: An Adventure in the Skies",
  genres: ["Animation", "Adventure", "Comedy"],
  topic: "Friendship",
  img: up,
},
{
  id: 19,
  title: "Her: Love in a Digital Age",
  genres: ["Sci-Fi", "Drama", "Romance"],
  topic: "Technology",
  img: her,
},
{
  id: 20,
  title: "Fight Club: An Underground Revolution",
  genres: ["Drama", "Thriller", "Psychological"],
  topic: "Identity",
  img: fight,
},
{
  id: 21,
  title: "WALL·E: A Robot's Journey",
  genres: ["Animation", "Sci-Fi", "Adventure"],
  topic: "Environment",
  img: walle,
},

];

const genres = [
  "Sci-Fi",
  "Action",
  "Drama",
  "Crime",
  "Romance",
  "Musical",
  "Dark Comedy",
  "Thriller",
  "Historical",
  "Psychological",
  "Animation",
  "Adventure",
  "Comedy"
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
  "Resilience",
  "Society",
  "Ambition",
  "Madness",
  "Family",
  "Identity",
  "Friendship",
  "Environment"
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
      <h1 align="center">Movie Search</h1>
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
          onMouseOver={(e) => (e.currentTarget.style.border = "white solid 1px")}
          onMouseOut={(e) => (e.currentTarget.style.border = "grey solid 1px")}
          style={{
            padding: "10px 20px",
            color: "white",
            borderRadius: "5px",
            border: "1px solid grey",
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
                  onMouseOver={(e) => (e.currentTarget.style.color = "white")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "grey")}
                  style={{
                    color: "grey",
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
                  onMouseOver={(e) => (e.currentTarget.style.color = "white")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "grey")}
                  key={t}
                  style={{
                    color: "grey",
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
