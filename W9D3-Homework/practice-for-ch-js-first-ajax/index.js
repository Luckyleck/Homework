const apiKey = '1bdbf761e28a5bfd0a38c5e593a70a99';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=${apiKey}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Success!', data);
  })
  .catch(error => {
    console.error('Failure!', error);
  });

console.log('The AJAX request has been dispatched.');