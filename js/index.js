var loadedData;

fetch(
  "https://api.are.na/v2/channels/how-to-find-happiness-during-the-collapse-of-civilization/?per=1000"
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
  const totalBlocks = loadedData.contents.length;

  var random = Math.floor(Math.random() * totalBlocks);

  const content = loadedData.contents[random].content;

  lastCharacter = content.charAt(content.length - 1);

  if (lastCharacter === "." || lastCharacter === ". ") {
    happy.innerHTML = content;
  } else {
    happy.innerHTML = content + ".";
  }

  textBalancer.initialize(".headline, .subHead");
}
