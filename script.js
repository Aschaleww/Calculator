let asche = document.getElementById("input");
let calculate = (number) => {
  asche.value = asche.value + number;
};
let Clear = () => {
  asche.value = "";
};
let Delete = () => {
  asche.value = asche.value.slice(0, -1);
};
let Result = () => {
  asche.value = eval(asche.value);
  try {
  } catch (err) {
    alert("insert the right input");
  }
};
