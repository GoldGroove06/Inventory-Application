const pool = require("./pool");

async function getAllGenre() {
    const { rows } = await pool.query("SELECT * FROM genre");
    return rows;
  }


async function getGenreGame(genreID) {
    const { rows } = await pool.query("SELECT * FROM game where game_genre = $1", [genreID]);
    return rows;
  }

async function getGame(gameID) {
  const { rows } = await pool.query("SELECT * FROM game where game_id = $1", [gameID]);
  return rows;
}

async function getAllDeveloper() {
    const { rows } = await pool.query("SELECT * FROM developer");
    return rows;
  }

async function deleteGenre(genreID) {
  const { rows } = await pool.query("DELETE FROM game where id = $1", [genreID]);
  return rows;
}

async function deleteGame(gameID) {
  const { rows } = await pool.query("DELETE FROM game where game_id = $1", [gameID]);
  console.log(rows)
  return rows;
}

async function editGenre(data, id) {
  console.log(data, id)
  
  const { rows } = await pool.query("UPDATE genre SET genre_name = $1 where id = $2", [data, id]);
  return rows
}

async function editGame(editGameData) {
  
  const { rows } = await pool.query("UPDATE game SET game_name = $1, game_genre = $2, game_developer = $3 WHERE game_id = $4", editGameData)
  return rows
}

async function addGame(addGameData) {
  console.log(addGameData)
  const { rows } = await pool.query("INSERT INTO game (game_name, game_genre, game_developer) VALUES($1, $2, $3);", addGameData);
  return rows;
}

async function addGenre(addGenreData) {
  const { rows } = await pool.query("INSERT INTO genre (genre_name) VALUES($1);", [addGenreData]);
  return rows;
}

module.exports = {
    getAllGenre,
    getGenreGame,
    getAllDeveloper,
    getGame,
    deleteGame,
    deleteGenre,
    addGame,
    addGenre,
    editGame,
    editGenre
}

