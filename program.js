// Add new functions, variables here

function main(input) {
  let inp = input.split(' ');
  let n = parseInt(inp[0]);
  let x = parseInt(inp[1]);
  let y = parseInt(inp[2]);
  if (x == 10 && y == 2) {
    console.log(ThapphanSangNhi(n, x, y));
  } else if (x == 2 && y == 10) {
    console.log(NhiphanSangthapphan(n));
  } else if (x == 8 && y == 10 )
  {
    console.log(batPhansangThap(n))
  }
}
function ThapphanSangNhi(n, x, y) {
  let remainder;
  let arr = [];
  while (n != 0) {
    remainder = n % 2;
    n = Math.floor(n / 2);
    arr.unshift(remainder);
  }
  return arr.join(' ')
}
function NhiphanSangthapphan(n) {


}

function batPhansangThap(n) {
  let x=0; 
  i = 0;
  let remainder;
  while (n != 0) {
    remainder = n % 10;
    n = parseInt(n / 10);
    x = x + remainder * Math.pow(8, i);
    i++;
  }
  return x;
}






module.exports = main;
