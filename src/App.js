import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import CardFormate from "./components/Card";
import CustomNavbar from "./components/CustomNavbar";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
        );
        const data = await response.json();
        const pokemonDetails = await Promise.all(data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const pokemonData = await response.json();
          const speciesResponse = await fetch(pokemonData.species.url);
          const speciesData = await speciesResponse.json();
          const description = speciesData.flavor_text_entries.find(entry => entry.language.name === 'es');
          return {
            ...pokemon,
            name: pokemon.name.toUpperCase(),
            description: description ? description.flavor_text : "No hay descripción disponible",
          };
        }));
        setPokemonData(pokemonDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <CustomNavbar />
      <Container className="card-container-central">
        <div className="card-container">
          <Search />
          {pokemonData.map((pokemon, index) => (
            <CardFormate
              key={index}
              title={pokemon.name}
              imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1}.png`}
              description={pokemon.description}
              buttonText="Detalles"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
