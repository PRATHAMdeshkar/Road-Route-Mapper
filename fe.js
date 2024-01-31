const url = 'http://localhost:8080/geoserver/nagpur_road_dataset/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=nagpur_road_dataset%3Anagpur&maxFeatures=50&outputFormat=application%2Fjson';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process the JSON data
    console.log('JSON data:', data);
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });
