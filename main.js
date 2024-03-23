//------nav toggle button ------

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// ------------portfolio filtering--------
const filterButtons = document.querySelector("#fiter-buttons").children;
const items = document.querySelector(".portfolio-Gallery").children;

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }
    this.classList.add("active");
    const target = this.getAttribute("data-filter-target");

    for (let k = 0; k < items.length; k++) {
      items[k].style.display = "none";
      if (target == items[k].getAttribute("data-id")) {
        items[k].style.display = "block";
      }

      if (target == "all") {
        items[k].style.display = "block";
      }
    }
  });
}

//----------- contact section email -----
function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "username",
    Password: "password",
    To: "them@website.com",
    From: document.getElementById("user-email").value,
    Subject: "new message from contact form",
    Body:
      "Name:" +
      document.getElementById("name").value +
      "Email:" +
      document.getElementById("user-email").value +
      "Message:" +
      document.getElementById("user-msg").value,
  }).then((message) => alert("message sent unccesfull"));
  resetForm();
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("user-email").value = "";
  document.getElementById("user-msg").value = "";
}
