const request = require('request');


const fetchBreedDescription = function (breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {

      process.exit();
      // if request function meets an error, it will use fetchBreedDescriptions'
      // callback function to give it the error
      callback(error);
    }
    const data = JSON.parse(body);

    if (data.length === 0) {
      callback(null, '');
      process.exit();
    } else {
      callback(null, data[0]['description']);
    }
  });
};



module.exports = { fetchBreedDescription };