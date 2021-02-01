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
  }else if (x == 2 && y ==16 )
  {
     console.log(Nhisangthaplucphan(n));
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
  return arr.join('')
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

function Nhisangthaplucphan(n)
{
    let kq;
    n = n.toString();
    for (let i = 0; i < n.length; i++) {
        if ((n.length) % 4 != 0) {
            n = "0" + n;
        }
    }
    let temp = [];
    for (let i = 0; i < n.length; i++) {
        temp.push(n.substring(i, i + 4))
    }
    for (let i = 0; i < temp.length; i++) {
        kq = kq + thaplucphan(temp[i]);
    }
     return kq;
}
  function thaplucphan(n) {
    switch (n) {
        case 0000:
            return '0';
        case 0001:
            return '1';
        case 0010:
            return '2';
        case 0011:
            return '3';
        case 0100:
            return '4';
        case 0101:
            return '5';
        case 0110:
            return '6';
        case 0111:
            return '7';
        case 1000:
            return '8';
        case 1001:
            return '9';
        case 1010:
            return 'A';
        case 1011:
            return 'B';
        case 1100:
            return 'C';
        case 1101:
            return 'D';
        case 1110:
            return 'E';
        case 1111:
            return 'F';
        default:
            break;
    }
  }
module.exports = main;
