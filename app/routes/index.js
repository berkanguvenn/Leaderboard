const leaderboardRoutes = require('./leaderboard');
const scoreRoutes = require('./score');
const userRoutes = require('./user');

module.exports = function (app) {
  scoreRoutes(app);
  userRoutes(app);
  leaderboardRoutes(app);
};