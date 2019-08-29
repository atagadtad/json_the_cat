// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      // assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      // compare returned description
      console.log(desc);
      console.log(expectedDesc);
      console.log(desc === expectedDesc);
      assert.equal(expectedDesc, desc);

      done();
    });
  });
  it('returns with an error description when invalid/non-existent breed is passed in', (done) => {
    fetchBreedDescription('Hogi', (err, desc) => {

      const expectedDesc = '';

      // compare returned 'empty' description
      assert.equal(expectedDesc, desc);

      done();
    });
  });
});
