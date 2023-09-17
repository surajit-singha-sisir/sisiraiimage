const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const darkModeToggle = document.getElementById("darkModeToggle");
let zoomLevel = 1; // Define zoomLevel here
let isDarkMode = false; // Track dark mode state
let isMenuOpen = false; // Track whether the menu is open or closed

menuToggle.addEventListener("click", () => {
  // Toggle menu visibility
  if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.style.left = "0";
      document.body.style.marginLeft = "150px";
      
  } else {
      menu.classList.add("hidden");
      menu.style.left = "-150px";
      menu.classList.add("visible");
        document.body.style.marginLeft = "150px"; // Change to 150px
      document.body.style.marginLeft = "0";
  }
});

    darkModeToggle.addEventListener("change", () => {
        // Toggle dark mode
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    const enableDarkMode = () => {
        // Enable dark mode: Add your dark mode styles here
        document.body.classList.add("dark-mode");
    };

    const disableDarkMode = () => {
        // Disable dark mode: Remove your dark mode styles here
        document.body.classList.remove("dark-mode");
    };

const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", function () {
    const overlay = this.nextElementSibling;
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden"; // prevent scrolling
    // Add smooth zoom functionality
    overlay.querySelector(".full-image").style.transition = "transform 0.3s ease-in-out";
  });
});

const closeBtns = document.querySelectorAll(".close-btn");

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", function () {
    const overlay = this.parentElement;
    overlay.style.display = "none";
    document.body.style.overflow = "auto"; // enable scrolling
  });
});

const overlays = document.querySelectorAll(".overlay");

overlays.forEach((overlay) => {
  overlay.addEventListener("click", function (e) {
    if (e.target !== this.querySelector(".full-image")) {
      const fullImage = this.querySelector(".full-image");
      if (fullImage.style.transform === "scale(2)") {
        fullImage.style.transform = "scale(1)";
      } else {
        fullImage.style.transform = "scale(2)";
      }
    }
  });

  // Add smooth zoom in and out with mouse scroll
  overlay.addEventListener("wheel", function (e) {
    const fullImage = this.querySelector(".full-image");
    const scale = parseFloat(fullImage.style.transform.split("(")[1]);
    if (e.deltaY > 0) {
      // Zoom out
      fullImage.style.transform = `scale(${Math.max(scale - 0.1, 1)})`;
    } else {
      // Zoom in
      fullImage.style.transform = `scale(${scale + 0.1})`;
    }
  });

  overlay.addEventListener("mousedown", (e) => {
    let isDragging = false;
    let initialX = 0;
    let initialY = 0;
    let offsetX = 0;
    let offsetY = 0;

    isDragging = true;
    initialX = e.clientX - offsetX;
    initialY = e.clientY - offsetY;
  });

  overlay.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const currentX = e.clientX - initialX;
    const currentY = e.clientY - initialY;

    offsetX = e.clientX - initialX;
    offsetY = e.clientY - initialY;

    const fullImage = overlay.querySelector(".full-image");
    fullImage.style.transform = `translate(${currentX}px, ${currentY}px) scale(${zoomLevel})`;
  });

  overlay.addEventListener("mouseup", () => {
    isDragging = false;
  });

  overlay.addEventListener("mouseleave", () => {
    isDragging = false;
  });
});