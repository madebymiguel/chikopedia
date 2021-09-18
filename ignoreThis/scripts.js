/*
Quick and dirty script I threw into Bulbapedia to get values in pokemon.json.
Additional forms were added manually.

Data source:
https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number
*/

const allName = Array.from(
  document.querySelectorAll("table tr td:nth-child(4)").values()
).map((el) => el.innerText);

const allNum = Array.from(
  document.querySelectorAll("table tr td:nth-child(2)").values()
).map((el) => el.innerText.substring(1));

let result = [];
for (let i = 0; i < allName.length; i++) {
  result.push({
    num: +allNum[i],
    name: allName[i],
  });
}

// console.log(JSON.stringify(result));

//=====After previous commands to find forms=====//
let count = 1;
for (let i = 0; i < result.length - 1; i++) {
  result[i].form = `form${count}`;
  count = result[i].num === result[i + 1].num ? count + 1 : 1;
}

console.log(JSON.stringify(result));
