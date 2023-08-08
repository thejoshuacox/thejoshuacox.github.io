function toggleContent(button) {
    var content = button.previousElementSibling;
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      button.innerHTML = "Show less ↑";
    } else {
      content.style.display = "none";
      button.innerHTML = "Show more ↓";
    }
  }
  