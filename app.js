geolib = require('geolib')



dist = geolib.getDistance(
    {latitude: 12.9250, longitude: 77.5938},
    {latitude: 12.928565, longitude: 77.581928}
);

console.log(dist);


posters = [
    {title: 'KFC Katriguppe', latitude: 12.9260453, longitude: 77.550528},
    {title: 'KFC Katriguppe', latitude: 12.9260453, longitude: 77.550528},
    {title: 'Maiyas Jayanagar', latitude: 12.928565, longitude: 77.581928},
    {title: 'McDondalds Gandhi Bazzar', latitude: 12.947375, longitude: 77.567802} 
]


// coords array
list = geolib.orderByDistance({latitude: 12.923190, longitude: 77.582406}, posters);
console.log('Your nearest place is ' + posters[parseInt(list[0].key)].title + ' distance of ' + list[0].distance)
console.log('Your farthest place is ' + posters[parseInt(list[list.length-1].key)].title + ' distance of ' + list[list.length-1].distance)

