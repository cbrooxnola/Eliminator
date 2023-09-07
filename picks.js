let teams = [['Buffalo Bills', 'Miami Dolphins', 'New England Patriots', 'New York Jets',
              'Baltimore Ravens', 'Cincinatti Bengals', 'Cleveland Browns', 'Pittsburgh Steelers',
              'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Tennessee Titans',
              'Denver Broncos', 'Kansas Ciy Chiefs', 'Las Vegas Raiders', 'San Diego Chargers',
              'Dallas Cowboys', 'New York Giants', 'Philadelphia Eagles', 'Washington Commanders',
              'Chicago Bears', 'Detroit Lions', 'Green Bat Packers', 'Minnesota Vikings',
              'Atlanta Falcons', 'Carolina Panthers', 'New Orleans Saints', 'Tampa Bay Buccaneers',
              'Arizona Cardinals', 'Los Angeles Rams', 'San Francisco 49ers', 'Seattle Seahawks'
], {mama: 'no'}, {dada: 'no'}];

const mamaNow = document.querySelector('#mamaNow');
const dadaNow = document.querySelector('dadaNow');

let undefeated = teams;
let winless = teams;
const winlessHTML = document.querySelector('.remainW');
const undefeatedHTML = document.querySelector('.remainU');

const rowTeam = document.querySelector('.rowTeam');
function renderTeams(){
  const showTeams = teams[0].map((elem) => {
    return `${elem}`;
});
  rowTeam.innerHTML = showTeams;
  winlessHTML.innerHTML = showTeams;
  undefeatedHTML.innerHTML = showTeams;
}
renderTeams();


