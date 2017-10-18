var GoogleMapsApi = require('./../src/js/google-m-api.js');

describe('GoogleMapsApi', function(){
  it('should allow user to enter their name', function(){
    var googleMaps = new GoogleMapsApi('john');
    expect(googleMaps.name).toEqual('john');
  });
});
