// Time:        47     70     75     66
// Distance:   282   1079   1147   1062

//part one

let time = 0;
let speed = 0;

const calculateWin = (time, distance) => {
  let raceWins = 0;
  for (let index = 0; index < time; index++) {
    let remaining = time - index;

    distanceTravelled = remaining * index;
    if (distanceTravelled > distance) {
      raceWins += 1;
    }
  }

  return raceWins;
};

// console.log(
//   calculateWin(47, 282) *
//     calculateWin(70, 1079) *
//     calculateWin(75, 1147) *
//     calculateWin(66, 1062)
// );

console.log(calculateWin(47707566, 282107911471062));
