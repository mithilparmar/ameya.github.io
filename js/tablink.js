function openPage(pageName, elmnt) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.color = "#000000";
    tablinks[i].style.borderBottom = "none";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add active link color
  elmnt.style.color = "#20639B";

  //
  elmnt.style.borderBottom = "2px solid #20639B";

}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();