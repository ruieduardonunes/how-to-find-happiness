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
      updateContent(data);
    });
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });

function updateContent(data) {
  var happy = document.getElementById("happy");
  const totalBlocks = data.contents.length - 1;

  var random = Math.floor(Math.random() * totalBlocks);

  const content = data.contents[random].content;
  happy.innerHTML = content;

  textBalancer.initialize(".headline");
  textBalancer.balanceText();
}
