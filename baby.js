let bottleCount = 0;
let diaperCount = 0;
    
    // Function to increment bottle counter and display count
function incrementBottleCount() {
    bottleCount++;
    document.getElementById("bottleCount").innerHTML = bottleCount;
    }
    
 // Function to increment diaper counter and display count
function incrementDiaperCount() {
    diaperCount++;
    document.getElementById("diaperCount").innerHTML = diaperCount;
    }
    
// Function to record time and date of bottle activity
function recordBottleActivity() {
    let currentTime = new Date();
    let activityTime = currentTime.toLocaleTimeString();
    document.getElementById("bottleActivityTime").innerHTML = activityTime;
    }
    
// Function to record time and date of diaper activity
function recordDiaperActivity() {
    let currentTime = new Date();
    let activityTime = currentTime.toLocaleTimeString();
    document.getElementById("diaperActivityTime").innerHTML = activityTime;
    }

// Function to create li element and add to list for bottle 
function addBottleActivity() {
    let input = document.getElementById("bottle-input");
    let activity = input.value.trim();
  
    if (activity !== "") {
      let list = document.getElementById("bottle-list");
      let listItem = document.createElement("li");
      listItem.innerHTML = activity;
      list.appendChild(listItem);
      input.value = "";
    }
  }
  //Function to create li element for diaper 
function addDiaperActivity() {
   let input = document.getElementById("diaper-input");
   let activity = input.value.trim();
  
     if (activity !== "") {
        let list = document.getElementById("diaper-list");
        let listItem = document.createElement("li");
        listItem.innerHTML = activity;
        list.appendChild(listItem);
        input.value = "";
    }
 }
  