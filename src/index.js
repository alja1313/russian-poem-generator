let travelForm = document.querySelector("#travel-generator-form");
travelForm.addEventListener("submit", generateTravelPlan);

function generateTravelPlan(event) {
  event.preventDefault();

  new Typewriter("#ai-response", {
    strings: "For example: Tokyo, London, Sri Lanka exc.",
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}
