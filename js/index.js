var loadedData;

fetch(
  "https://api.are.na/v2/channels/how-to-find-happiness-during-the-collapse-of-civilization"
)
  .then(function(response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine the text in the response
    response.json().then(function(data) {
      loadedData = data;
      updateContent();
    });
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });

function updateContent() {
  var happy = document.getElementById("happy");
  const totalBlocks = loadedData.contents.length - 1;

  var random = Math.floor(Math.random() * totalBlocks);

  const content = loadedData.contents[random].content;
  happy.innerHTML = content;

  textBalancer.initialize(".headline");

  feather.replace();
}
