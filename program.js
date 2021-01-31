// Add new functions, variables here

function main(input) {
  let inp = input.split(' ');
  let n = parseInt(inp[0]);
  let x = parseInt(inp[1]);
  let y = parseInt(inp[2]);
  Change(n, x, y)
}
function Change(n, x, y) {
    let result;
    switch (n,x,y) {
      case (x == 10 && y == 2):
        {
          result= n % y;
          console.log(result);
          break;
        }
      case (x == 8 && y == 10):
        {

          break;
        }
      case (x == 2 && y == 16):
        {

          break;
        }
      default:
        {

        }
    }
  }



module.exports = main;
