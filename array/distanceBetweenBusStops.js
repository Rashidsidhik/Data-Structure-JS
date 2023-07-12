const distanceBetweenBusStops = function (distance, start, destination) {
  let result = 0;
  let result2 = 0;
  if (start > destination) {
    [start, destination] = [destination, start];
  }

  result = clockWise(distance, start, destination);
  result2 = antiClockWise(distance, result);
  const output = result > result2 ? result2 : result;
  return output;
};

const clockWise = (distance, start, destination) => {
  let result = 0;
  for (let i = start; i < destination; i++) {
    result = result + distance[i];
  }
  return result;
};

const antiClockWise = (distance, result) => {
  let sum = 0;
  let result2;
  for (let j = 0; j < distance.length; j++) {
    sum = sum + distance[j];
  }
  result2 = sum - result;
  return result2;
};

distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2);
