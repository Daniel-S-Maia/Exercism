// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time
  if(name == 'Pure Strawberry Joy'){
    time = 0.5
  }
  else if(name == 'Energizer' || name == 'Green Garden'){
    time = 1.5
  }
  else if(name == 'Tropical Island'){
    time = 3
  }
  else if(name == 'All or Nothing'){
    time = 5
  }
  else{
    time = 2.5
  }

  return time
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {  
  let total = 0;
  let count = 0;
  
  if (wedgesNeeded == 0) {
    return count;
  }

  for (let i = 0; i < limes.length; i++) {
    count++;

    if (limes[i] === 'small') {
      total += 6;
    } else if (limes[i] === 'medium') {
      total += 8;
    } else if (limes[i] === 'large') {
      total += 10;
    }

    if (total >= wedgesNeeded) {
      return count;
    }
  }

  return count;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let ordersLeft = [...orders];

  while (timeLeft > 0) {
    if (ordersLeft[0] === 'Pure Strawberry Joy') {
      timeLeft -= 0.5;
    } else if (
      ordersLeft[0] === 'Energizer' ||
      ordersLeft[0] === 'Green Garden'
    ) {
      timeLeft -= 1.5;
    } else if (ordersLeft[0] === 'Tropical Island') {
      timeLeft -= 3;
    } else if (ordersLeft[0] === 'All or Nothing') {
      timeLeft -= 5;
    } else {
      timeLeft -= 2.5;
    }

    ordersLeft.shift();
  }

  return ordersLeft;
}
