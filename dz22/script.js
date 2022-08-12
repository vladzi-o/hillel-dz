// function getResponse(path, callback) {
//   let xml = new XMLHttpRequest();
//   xml.open("GET", path);
//   xml.send();

//   xml.addEventListener("readystatechange", () => {
//     if (xml.readyState === 4) {
//       let response = JSON.parse(xml.response);

//       callback(response);
//     }
//   });
// }

function getResponse(path, callback) {
  return fetch(path)
    .then((response) => response.json())
    .then(callback);
}

let result = [];
function dataCallback(response) {
  result = [...result, ...response.children];
  console.log(result, 1);
}
getResponse("data.json", dataCallback);
getResponse("data2.json", dataCallback);
