const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", function(event) {
    follower.style.left = event.clientX + "px";
    follower.style.top = event.clientY + "px";
});
