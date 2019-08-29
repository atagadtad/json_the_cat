const request = require('request');
const args = process.argv.slice(2);

// request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
//   const data = JSON.parse(body);

//   console.log("Description: ", data[0]['description']);
// })

request(`https://api.thecatapiasdf.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log(error);
    process.exit();
  }
  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log('Breed not found, please try again');
    process.exit();
  } else {
    console.log(data);
    // console.log(`Description for ${args[0]}: `, data[0]['description']);
  }
});