// Theme settings for each image using the specified image names and colors
const themes = {
  "cell-repair": {
    image: "cellrepair1.jpg",
    circleColor: "#FF5733", // Orange
    buttonColor: "#FF5733",
    textColor: "#FF5733",
    backgroundColor: "#FFF5F0",
    headerFooterColor: "#FF5733",
    headerFooterTextColor: "#fff"
  },
  "computer-assembly": {
    image: "computerassembly1.jpg",
    circleColor: "#37AFE1", // Blue
    buttonColor: "#37AFE1",
    textColor: "#37AFE1",
    backgroundColor: "#F0F8FF",
    headerFooterColor: "#37AFE1",
    headerFooterTextColor: "#fff"
  },
  "solar-installations": {
    image: "solar-panel-7518786_1920.jpg",
    circleColor: "#8E44AD", // Purple
    buttonColor: "#8E44AD",
    textColor: "#8E44AD",
    backgroundColor: "#F8F0FF",
    headerFooterColor: "#8E44AD",
    headerFooterTextColor: "#fff"
  },
  "dstv": {
    image: "dstv3.jpg",
    circleColor: "#EB7495", // Pink
    buttonColor: "#EB7495",
    textColor: "#EB7495",
    backgroundColor: "#FFF0F5",
    headerFooterColor: "#EB7495",
    headerFooterTextColor: "#fff"
  }
};

// Function to apply a theme based on the selected image
function applyTheme(themeKey) {
  const theme = themes[themeKey];

  if (!theme) {
    console.error(`Theme for '${themeKey}' not found.`);
    return;
  }

  // Update the featured image
  const featuredImage = document.getElementById("featured-image");
  if (featuredImage) {
    featuredImage.src = `./images/${theme.image}`; // Correctly replace the image
    featuredImage.alt = themeKey.replace("-", " "); // Update alt text for accessibility
  } else {
    console.error("Featured image element not found.");
  }

  // Update the circle color
  const circle = document.querySelector(".circle");
  if (circle) {
    circle.style.backgroundColor = theme.circleColor;
  } else {
    console.error("Circle element not found.");
  }

  // Update button color
  const button = document.querySelector(".btn");
  if (button) {
    button.style.backgroundColor = theme.buttonColor;
    button.style.borderColor = theme.buttonColor;
    button.style.color = "#fff"; // Ensure text is visible
  }

  // Update text color
  const heroText = document.querySelector(".hero-text h1 span");
  if (heroText) {
    heroText.style.color = theme.textColor;
  }

  // Update background color
  document.body.style.backgroundColor = theme.backgroundColor;

  // Update header and footer colors
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  if (header) {
    header.style.backgroundColor = theme.headerFooterColor;
    header.style.color = theme.headerFooterTextColor;
  }
  if (footer) {
    footer.style.backgroundColor = theme.headerFooterColor;
    footer.style.color = theme.headerFooterTextColor;
  }
}
