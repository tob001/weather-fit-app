async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '340bbd4969c1881a1d1456b5ac9930fd'; // Replace this!
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    const res = await fetch(url);
    const data = await res.json();
  
    if (data.cod !== 200) {
      document.getElementById('result').innerText = 'City not found!';
      return;
    }
  
    const temp = data.main.temp;
    let suggestion = '';
  
    if (temp >= 30) suggestion = "🔥 It’s hot! Rock shorts and a tee.";
    else if (temp >= 20) suggestion = "😎 It’s warm. Light jacket or hoodie.";
    else if (temp >= 10) suggestion = "🧥 It’s cool. Grab a jacket!";
    else suggestion = "❄️ Cold AF. Bundle up, bruh.";
  
    document.getElementById('result').innerHTML = `
      <p>🌡️ Temp in ${city}: ${temp}°C</p>
      <p>${suggestion}</p>
    `;
  }
  