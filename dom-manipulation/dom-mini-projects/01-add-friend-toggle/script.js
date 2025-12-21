const statusText = document.querySelector("h5");
const btn = document.querySelector("#add");

let isFriend = false;

btn.addEventListener("click", () => {
  if (!isFriend) {
    statusText.textContent = "Friends";
    statusText.style.color = "green";
    btn.textContent = "Remove Friend";
    isFriend = true;
  } else {
    statusText.textContent = "Stranger";
    statusText.style.color = "red";
    btn.textContent = "Add Friend";
    isFriend = false;
  }
});
