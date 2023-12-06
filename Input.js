// Time:        47     70     75     66
// Distance:   282   1079   1147   1062

//part one

let time = 0;
let speed = 0;

const calculateWin = (time, distance) => {
  raceWins = [];
  let speed = 0;
  for (let index = 0; index <= time; index++) {
    let remaining = time - index;

    distanceTravelled = remaining * index;
    if (distanceTravelled > distance) {
      raceWins.push({ charge: index, distanceTravelled: distanceTravelled });
    }
  }

  return raceWins.length;
};

console.log(
  calculateWin(47, 282) *
    calculateWin(70, 1079) *
    calculateWin(75, 1147) *
    calculateWin(66, 1062)
);
