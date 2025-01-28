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
  const { rows } = await pool.query("DELETE FROM game where game_id = $1", [genreID]);
  return rows;
}

async function deleteGame(gameID) {
  const { rows } = await pool.query("DELETE FROM game where game_genre = $1", [gameID]);
  console.log(rows)
  return rows;
}

async function editGenre(genreID) {
  
}

async function editGame(gameID) {

}

async function addGame() {
  
}

async function addGenre() {
  
}

module.exports = {
    getAllGenre,
    getGenreGame,
    getAllDeveloper,
    getGame,
    deleteGame,
    deleteGenre
}

