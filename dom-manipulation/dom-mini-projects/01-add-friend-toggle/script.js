var statusText = document.querySelector("h5")
var addFriend = document.querySelector("#add")
var removeFriend = document.querySelector("#remove")

addFriend.addEventListener("click", function(){
    statusText.textContent = "Friends";
    statusText.style.color = "green";
})

removeFriend.addEventListener("click", function(){
    statusText.textContent = "Stranger";
    statusText.style.color = "red"
})

