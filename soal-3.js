let s = "";

const variable = (x) => {
  if (x === 1) {
    return (s += "*");
  } else if (x === 2) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j <= i; j++) {
        s += "*";
      }
      s += "\n";
    }
  } else if (x === 3) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j <= i; j++) {
        s += "*";
      }
      s += "\n";
    }
  }
};

variable(3);

console.log(s);
