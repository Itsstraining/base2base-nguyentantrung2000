// Add new functions, variables here

function main(input) {
  let inp = input.split(' ');
  let n = parseInt(inp[0]);
  let x = parseInt(inp[1]);
  let y = parseInt(inp[2]);
  console.log(ThapphanSangNhi(n, x, y))
}
function ThapphanSangNhi(n, x, y) {
  let remainder;
  let arr = [];
  while (n != 0) {
    remainder = n % 2;
    n = Math.floor(n / 2);
    arr.unshift(remainder);
  }
  return arr.join('')
}
function NhiphanSangthapphan()
{
    
}





module.exports = main;
