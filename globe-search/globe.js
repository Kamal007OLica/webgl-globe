// Initialize WebGL Globe
var container = document.getElementById('container');
var globe = new DAT.Globe(container, {});

// Load data from JSON file
fetch('data/startup_data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      globe.addData([country.lat, country.lng, country.magnitude], {format: 'magnitude'});
    });

    globe.createPoints();
    globe.animate();
  })
  .catch(error => console.error('Error loading data:', error));
