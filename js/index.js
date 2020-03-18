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
  var light = document.getElementById("light");
  const totalBlocks = loadedData.contents.length;

  var random = Math.floor(Math.random() * totalBlocks);

  const content = loadedData.contents[random].content;

  lastCharacter = content.charAt(content.length - 1);
  beforeLast = content.charAt(content.length - 2);

  light.style.visibility = "hidden";

  if (lastCharacter === "." || beforeLast === ".") {
    happy.innerHTML = content;
  } else {
    happy.innerHTML = content + ".";
  }

  textBalancer.initialize(".headline, .subHead");
}

console.log(
  "Hi there! This small website was made in Europe 🇪🇺. Find it on github: https://github.com/ruieduardonunes/how-to-find-happiness"
);
