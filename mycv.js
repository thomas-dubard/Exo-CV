/* we will see in the next notebook
   how to load javascript code     */
   function toggle1() {
    // from the 'document' global variable
    // locate the element that we want to toggle
    let to_toggle = document.getElementById("area1");
    // find its current status
    let current = to_toggle.style.display;
    // apply the opposite status
    if (current == "block") {
      to_toggle.style.display = "none";
    } else {
      to_toggle.style.display = "block";    
    }
    // show a message in the JS console
    console.log(current);
    console.log(current, " → ", to_toggle.style.display);
  }
  function toggle2() {
    let to_toggle = document.getElementById("area2");
    let current = to_toggle.style.display;
    if (current == "block") {
      to_toggle.style.display = "none";
    } else {
      to_toggle.style.display = "block";    
    }
    console.log(current);
    console.log(current, " → ", to_toggle.style.display);
  }