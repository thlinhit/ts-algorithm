// // TODO: Prevent processing one node twice
// // GIVEN
// const BOOK = 'Book';
// const RARE_LP = 'Rare LP';
// const POSTER = 'Poster';
// const DRUM_SET = 'Drum Set';
// const BASS_GUITAR = 'Bass Guitar';
// const PIANO = 'Piano';

// const graph = [];
// graph.push({ from: BOOK, to: RARE_LP, extra: 5 });
// graph.push({ from: BOOK, to: POSTER, extra: 0 });
// // graph.push({ from: RARE_LP, to: POSTER, extra: -20 });
// graph.push({ from: RARE_LP, to: BASS_GUITAR, extra: 15 });
// graph.push({ from: RARE_LP, to: DRUM_SET, extra: 20 });
// graph.push({ from: POSTER, to: DRUM_SET, extra: 35 });
// graph.push({ from: POSTER, to: BASS_GUITAR, extra: 30 });
// graph.push({ from: BASS_GUITAR, to: PIANO, extra: 20 });
// graph.push({ from: DRUM_SET, to: PIANO, extra: 10 });

// const COST = [
//     { to: POSTER, cost: null, from: null },
//     { to: RARE_LP, cost: null, from: null },
//     { to: DRUM_SET, cost: null, from: null },
//     { to: BASS_GUITAR, cost: null, from: null },
//     { to: PIANO, cost: null, from: null },
// ];

// function findNeighbourAndCost(from) {
//     return graph.filter(neighbor => neighbor.from === from);
// }

// function updateCost({ name, newCost, from }) {
//     const found = COST.find(_cost => _cost.to === name);
//     if (found.cost === null || newCost < found.cost) {
//         found.cost = newCost;
//         found.from = from;
//     }
// }

// function getCost(to) {
//     const found = COST.find(_thing => _thing.to === to);
//     return found ? found.cost : 0;
// }

// function generateOutput() {
//     let temp = COST.find(_e => _e.to === PIANO);
//     const cost = temp.cost;
//     const paths = [PIANO];
//     while (!!temp) {
//         paths.push(temp.from);
//         temp = COST.find(_e => _e.to === temp.from);
//     }
//     console.log(`The cheapest cost is ${cost}`);
//     console.log(`Paths: ${paths.reverse().join(' > ')}`);
// }

// function findShortestPath(from) {
//     const progressList = [from];

//     while (progressList.length > 0) {
//         const candidate = progressList.shift();
//         const neighbors = findNeighbourAndCost(candidate);
//         neighbors.forEach(_neighbor => {
//             progressList.push(_neighbor.to);
//             updateCost({
//                 name: _neighbor.to,
//                 newCost: Number(_neighbor.extra) + Number(getCost(candidate)),
//                 from: candidate,
//             });
//         });
//     }

//     generateOutput();
//     console.log(COST);
// }

// findShortestPath(BOOK);
