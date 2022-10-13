let number = 3;

const decrease = () => {
  if (number === 3) {
    console.log('3');
    number--;
  } else if (number === 2) {
    console.log('2');
    number--;
  } else if (number === 1) {
    console.log('1');
    number--;
  } else if (number === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
};

const intervalID = setInterval(decrease, 1000);
