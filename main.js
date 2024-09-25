let input = document.querySelector("#square");

let button = document.querySelector("#check");

let result = document.querySelector("#result");

let color = document.querySelector("#color");

button.onclick = () => {
  
  let square = input.value;
  
  let column = square.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
  
  let row = parseInt(square[1])
  
  if (column > 7 || column < 0 || row > 8 || row < 1) {
    
    result.innerText = `invalid square`;
    
    color.style.backgroundColor = "transparent";
    
  } else {
    
    if ((row + column) % 2 == 1) {
      
      result.innerText = `${input.value} : dark Square`;
      
      color.style.backgroundColor = "black";
      
    } else if ((row + column) % 2 == 0) {
      
      result.innerText = `${input.value} : light square`;
      
      color.style.backgroundColor = "#CCCC";
      
    } else {
      
      result.innerText = `invalid square`;
    
      color.style.backgroundColor = "transparent";
      
    }
    
  }
  
}
