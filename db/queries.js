const pool = require("./pool");

async function getAllGenre() {
    const { rows } = await pool.query("SELECT * FROM genre");
    return rows;
  }

async function getAllGame(genre) {
    const { rows } = await pool.query("SELECT * FROM game where game_genre = $1", [genre]);
    return rows;
  }

async function getAllDeveloper() {
    const { rows } = await pool.query("SELECT * FROM developer");
    return rows;
  }

module.exports = {
    getAllGenre,
    getAllGame,
    getAllDeveloper
}

