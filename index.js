let key = "f940ee376359fd504c270cd3825bacdf";
let data;
let container = document.getElementById("container");
let map = document.getElementById("gmap_canvas");
async function getwheather() {
  try {
    let city = document.getElementById("city").value;

    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&units=imperial`
    );
    data = await res.json();
    console.log(data);
    display(data);
  } catch (err) {
    console.log(err);
  }
}

function display(data) {
  container.innerHTML = null;
  container.style.boxShadow =
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;";
  container.style.padding = "30px";
  container.style.marginTop = "50px";
  let name = document.createElement("p");
  name.innerText = `  ${data.name}`;
  name.style.fontSize = "40px";
  name.style.color = "#149e95";
  name.style.fontWeight = "bolder";

  let temp = document.createElement("p");
  temp.innerText = `Temprature : ${data.main.temp}°C`;
  temp.style.fontSize = "25px";
  temp.style.color = "red";
  temp.style.fontWeight = "bold";

  let feel = document.createElement("p");
  feel.innerText = `Feels Like ${data.main.feels_like} °C `;
  feel.style.fontWeight = "bold";

  let speed = document.createElement("p");
  speed.innerText = `${data.wind.speed} m/s WNW`;
  let humidity = document.createElement("p");
  humidity.innerText = `Humidity - ${data.main.humidity} %`;

  let visibility = document.createElement("p");
  visibility.innerText = `Visibility : ${data.visibility}`;

  container.append(name, temp, feel, speed, humidity, visibility);

  map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}
