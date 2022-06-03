console.log('helo')


let season = document.getElementById("yeardrop");
let value = season.options[season.selectedIndex].value;

console.log(value);

function makeGetRequest(path) {
    axios.get(path).then(
        (response) => {
            var result = response.data;
            console.log(result);
        },
        (error) => {
            console.log(error);
        }
    );
}
makeGetRequest(`https://ergast.com/api/f1/${value}/1/driverStandings.json`);


// let season = document.getElementById("yeardrop");
// let value = season.options[season.selectedIndex].value;

// console.log(value);

// function makeGetRequest(path) {
//     axios.get(path).then(
//         (response) => {
//             var result = response.data;
//             console.log(result);
//         },
//         (error) => {
//             console.log(error);
//         }
//     );
// }
// makeGetRequest(`https://ergast.com/api/f1/${value}/1/driverStandings.json`)












































//could prob added the clickly type thing sam was talkign about to select the year but this is the 
//best I could do. 



// function returnText(){
//     let input = document.getElementById("1950").value;
//     console.log(input);
// }

// returnText()


// let getSeason = async season => {
//     let response = axios.get(`https://ergast.com/api/f1/2020/1/driverStandings.json`);
//     return response.data
// }

// let loadDriver = async season => {
//     let data = await getSeason(season);
//     console.log(data);
// }

// let thedataishere = loadDriver('1950');
// console.log(thedataishere);


