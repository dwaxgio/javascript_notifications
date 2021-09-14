//** BASICS
// Create notification object
// const greeting = new Notification("Hi, How are you?", {
//     body: "Have a good day",
//     icon: "./src/icon.jpg"
// });

// navigate to the https://plyo.shop/
// greeting.addEventListener("click", function(){
//     window.open("https://plyo.shop/")
// });

// Or equivalent
// greeting.onclick = () => window.open("https://plyo.shop/");

//** IMPLEMENTATION IN THE SOLUTION
(async () => {
  // create and show the notification
  const showNotification = () => {
    // create a new notification
    const notification = new Notification("JavaScript Notification API", {
      body: "This is a JavaScript Notification API demo",
      icon: "./img/js.png",
    });

    // close the notification after 10 seconds
    setTimeout(() => {
      notification.close();
    }, 10 * 1000);

    // navigate to a URL when clicked
    notification.addEventListener("click", () => {
      window.open("https://plyo.shop/", "_blank");
    });
  };

  // show an error message
  const showError = () => {
    const error = document.querySelector(".error");
    error.style.display = "block";
    error.textContent = "You blocked the notifications";
  };

  // check notification permission
  let granted = false;

  if (Notification.permission === "granted") {
    granted = true;
  } else if (Notification.permission !== "denied") {
    let permission = await Notification.requestPermission();
    granted = permission === "granted" ? true : false;
  }

  // show notification or error
  granted ? showNotification() : showError();
})();
