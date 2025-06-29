function convertTemp() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unit").value;
  const result = document.getElementById("result");
  const gifContainer = document.getElementById("weatherGifContainer");
  const gif = document.getElementById("weatherGif");
  const weatherName = document.getElementById("weatherName");

  if (isNaN(temp)) {
    result.textContent = "Please enter a valid number.";
    gifContainer.style.display = "none";
    return;
  }

  let c, f, k, inputDisplay, output = "";

  if (unit === "celsius") {
    inputDisplay = `${temp.toFixed(2)}°C`;
    c = temp;
    f = (temp * 9 / 5) + 32;
    k = temp + 273.15;
    output = `${inputDisplay} = ${f.toFixed(2)}°F = ${k.toFixed(2)}K`;
  } else if (unit === "fahrenheit") {
    inputDisplay = `${temp.toFixed(2)}°F`;
    c = (temp - 32) * 5 / 9;
    f = temp;
    k = c + 273.15;
    output = `${inputDisplay} = ${c.toFixed(2)}°C = ${k.toFixed(2)}K`;
  } else if (unit === "kelvin") {
    inputDisplay = `${temp.toFixed(2)}K`;
    c = temp - 273.15;
    f = (c * 9 / 5) + 32;
    k = temp;
    output = `${inputDisplay} = ${c.toFixed(2)}°C = ${f.toFixed(2)}°F`;
  }

  result.textContent = output;

  // Show respective GIF and name
  if (c <= 0) {
    gif.src = "/t_gifs/snowy.gif";
    weatherName.textContent = "Snowy";
  } else if (c > 0 && c < 10) {
    gif.src = "/t_gifs/windy.gif";
    weatherName.textContent = "Windy";
  } else if (c >= 10 && c < 25) {
    gif.src = "/t_gifs/cloudy.gif";
    weatherName.textContent = "Cloudy";
  } else if (c >= 25 && c < 35) {
    gif.src = "/t_gifs/rainy.gif";
    weatherName.textContent = "Rainy";
  } else {
    gif.src = "/t_gifs/summer_hot.gif";
    weatherName.textContent = "Summer Hot";
  }

  gifContainer.style.display = "block";

  // Reset animation by toggling 'show' class
  gifContainer.classList.remove("show");
  void gifContainer.offsetWidth;
  gifContainer.classList.add("show");
}
