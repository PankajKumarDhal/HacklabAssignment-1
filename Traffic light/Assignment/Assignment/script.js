// Define the initial state and timer variables
let state = "red";
let timer;

// Function to change the state and update the button colors
function changeState(newState) {
  // Stop the previous timer (if any)
  clearTimeout(timer);
  // Update the state variable
  state = newState;
  // Update the button colors
  switch (state) {
    case "red":
      document.getElementById("red-button").style.backgroundColor = "red";
      document.getElementById("yellow-button").style.backgroundColor = "black";
      document.getElementById("green-button").style.backgroundColor = "black";
      timer = setTimeout(function() {
        changeState("green");
      }, 20000);
      break;
    case "green":
      document.getElementById("red-button").style.backgroundColor = "black";
      document.getElementById("yellow-button").style.backgroundColor = "black";
      document.getElementById("green-button").style.backgroundColor = "green";
      // Start the timer to transition to yellow after 15 seconds
      timer = setTimeout(function() {
        changeState("yellow");
      }, 15000);
      break;
      case "yellow":
      document.getElementById("red-button").style.backgroundColor = "black";
      document.getElementById("yellow-button").style.backgroundColor = "yellow";
      document.getElementById("green-button").style.backgroundColor = "black";
      // Start the timer to transition to red after 5 seconds
      timer = setTimeout(function() {
        changeState("red");
      }, 5000);
      break;
  }
}

// Function to handle button clicks
function buttonClick(button) {
  switch (button) {
    case "red":
      changeState("red");
      break;
    case "yellow":
      if (state === "green") {
        // Skip red state if transitioning from green
        changeState("yellow");
      }
      break;
    case "green":
      if (state === "red") {
        // Skip yellow state if transitioning from red
        changeState("green");
      }
      break;
  }
}

// Add click event listeners to the buttons
document.getElementById("red-button").addEventListener("click", function() {
  buttonClick("red");
});
document.getElementById("yellow-button").addEventListener("click", function() {
  buttonClick("yellow");
});
document.getElementById("green-button").addEventListener("click", function() {
  buttonClick("green");
});

// Start in the initial state (red)
changeState("red");






























































































// const TrafficLightState = {
//     RED: "red",
//     YELLOW: "yellow",
//     GREEN: "green"
//   };
  
//   const TrafficLightEvent = {
//     TIMER_EXPIRED: "timerExpired",
//     BUTTON_CLICKED: "buttonClicked"
//   };
  
//   class TrafficLight {
//     constructor() {
//       this.currentState = TrafficLightState.RED;
//       this.timer = null;
//       console.log(this.startTimer());
//     }
  
//     startTimer() {
//       switch (this.currentState) {
//         case TrafficLightState.RED:
//           this.timer = setTimeout(() => {
//             this.transition(TrafficLightEvent.TIMER_EXPIRED);
//           },20000);
//           break;
//         case TrafficLightState.GREEN:
//           this.timer = setTimeout(() => {
//             this.transition(TrafficLightEvent.TIMER_EXPIRED);
//           }, 15000);
//           break;
//         case TrafficLightState.YELLOW:
//           this.timer = setTimeout(() => {
//             this.transition(TrafficLightEvent.TIMER_EXPIRED);
//           }, 5000);
//           break;
//         default:
//           break;
//       }
//     }
  
//     transition(event) {
//       clearTimeout(this.timer);
//       switch (this.currentState) {
//         case TrafficLightState.RED:
//           if (event === TrafficLightEvent.TIMER_EXPIRED) {
//             this.currentState = TrafficLightState.GREEN;
//           }
//           break;
//         case TrafficLightState.GREEN:
//           if (event === TrafficLightEvent.TIMER_EXPIRED) {
//             this.currentState = TrafficLightState.YELLOW;
//           }
//           break;
//         case TrafficLightState.YELLOW:
//           if (event === TrafficLightEvent.TIMER_EXPIRED) {
//             this.currentState = TrafficLightState.RED;
//           }
//           break;
//         default:
//           break;
//       }
//       this.startTimer();
//       this.update();
//     }
  
//     update() {
//       const lights = document.querySelectorAll(".light");
//       lights.forEach(light => {
//         light.classList.remove("active");
//       });
  
//       const activeLight = document.querySelector(`#${this.currentState}`);
//       activeLight.classList.add("active");
//     }
//   }
  
//   const trafficLight = new TrafficLight();
  
//   // Add click events for buttons
//   document.querySelector("#red").addEventListener("click", () => {
//     trafficLight.transition(TrafficLightState.RED);
//   });
//   document.querySelector("#yellow").addEventListener("click", () => {
//     trafficLight.transition(TrafficLightState.YELLOW);
//   });
//   document.querySelector("#green").addEventListener("click", () => {
//     trafficLight.transition(TrafficLightState.GREEN);
//   });
  