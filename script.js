fetch("https://elmoumniyoussef-ff.workers.dev")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    document.getElementById("matches").innerHTML =
      "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
  })
  .catch(error => {
    console.error(error);
    document.getElementById("matches").innerHTML =
      "Unable to load data.";
  });
