function displayTravelPlan(response) {
  console.log("Your Travel Plan is generated!");

  new Typewriter("#ai-response", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}

function generateTravelPlan(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user-instructions");
  let apiKey = "3t1efbo10d0b2a5b53045a2c4a8666fe";
  let prompt = `User instructions are: Generate one day travel itinerary in ${userInstructions.value}`;
  let context =
    "You are experienced travel expert. Your mission is to generate 5 most popular places to visit. Answer should be provided in basic HTML. Make sure to follow user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Travel Itinerary");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: %{context}`);

  axios.get(apiUrl).then(displayTravelPlan);
}

let travelForm = document.querySelector("#travel-generator-form");
travelForm.addEventListener("submit", generateTravelPlan);
