'use strict';
document.querySelector('#n1').addEventListener('click', n1);
document.querySelector('#n2').addEventListener('click', n2);
document.querySelector('#n3').addEventListener('click', n3);
document.querySelector('#n4').addEventListener('click', n4);
document.querySelector('#n5').addEventListener('click', n5);
document.querySelector('#n6').addEventListener('click', n6);
document.querySelector('#n7').addEventListener('click', n7);
document.querySelector('#n8').addEventListener('click', n8);
document.querySelector('#n9').addEventListener('click', n9);
document.querySelector('#n0').addEventListener('click', n0);
document.querySelector('#s').addEventListener('click', o1);
document.querySelector('#r').addEventListener('click', o2);
document.querySelector('#d').addEventListener('click', o3);
document.querySelector('#m').addEventListener('click', o4);
document.querySelector('#sr').addEventListener('click', showResult);

function n1() {
  let actual = document.querySelector('#resultado').innerHTML;
  let sumado = document.querySelector('#n1').innerHTML;
  document.querySelector('#resultado').innerHTML = actual + sumado;
}
function n2() {
  let actual = document.querySelector('#resultado').innerHTML;
  let sumado = document.querySelector('#n2').innerHTML;
  document.querySelector('#resultado').innerHTML = actual + sumado;
}
function n3() {
  let actual = document.querySelector('#resultado').innerHTML;
  let sumado = document.querySelector('#n3').innerHTML;
  document.querySelector('#resultado').innerHTML = actual + sumado;
}
function n4() {
  let actual = document.querySelector('#resultado').innerHTML;
  let sumado = document.querySelector('#n4').innerHTML;
  document.querySelector('#resultado').innerHTML = actual + sumado;
}
function n5() {
  let actual = document.querySelector('#resultado').innerHTML;
  let sumado = document.querySelector('#n5').innerHTML;
  document.querySelector('#resultado').innerHTML = actual + sumado;
}
function n6() {
  let actual = document.querySelector('#resultado').innerHTML;
  let sumado = document.querySelector('#n6').innerHTML;
  document.querySelector('#resultado').innerHTML = actual + sumado;
}
function n7() {
  let actual = document.querySelector('#resultado').innerHTML;
  let sumado = document.querySelector('#n7').innerHTML;
  document.querySelector('#resultado').innerHTML = actual + sumado;
}
function n8() {
  let actual = document.querySelector('#resultado').innerHTML;
  let sumado = document.querySelector('#n8').innerHTML;
  document.querySelector('#resultado').innerHTML = actual + sumado;
}
function n9() {
  let actual = document.querySelector('#resultado').innerHTML;
  let sumado = document.querySelector('#n9').innerHTML;
  document.querySelector('#resultado').innerHTML = actual + sumado;
}
function n0() {
  let actual = document.querySelector('#resultado').innerHTML;
  let sumado = document.querySelector('#n0').innerHTML;
  document.querySelector('#resultado').innerHTML = actual + sumado;
}
function o1() {
  let actual = document.querySelector('#resultado').innerHTML;
  let sumado = document.querySelector('#s').innerHTML;
  document.querySelector('#resultado').innerHTML = actual + sumado;
}
function o2() {
  let actual = document.querySelector('#resultado').innerHTML;
  let sumado = document.querySelector('#r').innerHTML;
  document.querySelector('#resultado').innerHTML = actual + sumado;
}
function o3() {
  let actual = document.querySelector('#resultado').innerHTML;
  let sumado = document.querySelector('#d').innerHTML;
  document.querySelector('#resultado').innerHTML = actual + sumado;
}
function o4() {
  let actual = document.querySelector('#resultado').innerHTML;
  let sumado = document.querySelector('#m').innerHTML;
  document.querySelector('#resultado').innerHTML = actual + sumado;
}
function showResult() {
  let actual = document.querySelector('#resultado').innerHTML;
  let suma = actual.indexOf('+');
  let resta = actual.indexOf('-');
  let div = actual.indexOf('/');
  let mult = actual.indexOf('*');
  if (suma !== -1) {
    let arr = actual.split('+', 2);
    let res = parseInt(arr[0]) + parseInt(arr[1]);
    document.getElementById('resultado').innerHTML = res;
  } else if (resta !== -1) {
    let arr = actual.split('-', 2);
    let res = arr[0] - arr[1];
    document.getElementById('resultado').innerHTML = res;
  } else if (div !== -1) {
    let arr = actual.split('/', 2);
    let res = arr[0] / arr[1];
    document.getElementById('resultado').innerHTML = res;
  } else if (mult !== -1) {
    let arr = actual.split('x', 2);
    let res = arr[0] * arr[1];
    document.getElementById('resultado').innerHTML = res;
  }
}
