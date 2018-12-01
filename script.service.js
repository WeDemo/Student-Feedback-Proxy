import http from 'k6/http';

// eslint-disable-next-line func-style
function random () {
  let num = Math.floor(Math.random() * 10000000);
  return num;
}
export default function() {
  http.get(`http://localhost:3002/${random()}/reviews`);
}