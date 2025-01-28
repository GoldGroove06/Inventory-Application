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

module.exports = {
    getAllGenre,
    getGenreGame,
    getAllDeveloper,
    getGame
}

