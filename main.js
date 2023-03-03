const changeMode = () => {
  if (localStorage.getItem("darkMode") === "true") {
    localStorage.setItem("darkMode", "false");
  } else {
    localStorage.setItem("darkMode", "true");
  }
  swapColors();
};

const swapColors = () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.documentElement.style.setProperty("--background-color", "#1a1a1a");
    document.documentElement.style.setProperty("--font-color", "#bcbcbc");
    document.getElementById("modeSelector").innerHTML = "Light mode";
    document.getElementById("gitHubLogo").style.fill = "#bcbcbc";
    document.documentElement.style.setProperty("--hover-color", "#0063fb");
  } else {
    document.documentElement.style.setProperty("--background-color", "white");
    document.documentElement.style.setProperty("--font-color", "#404040");
    document.getElementById("modeSelector").innerHTML = "Dark mode";
    document.getElementById("gitHubLogo").style.fill = "#404040";

    document.documentElement.style.setProperty("--hover-color", "#06befb");
  }
};

swapColors();

const githubLink = "https://github.com/JohnnyBakaas/CV-Finn";

const openGithub = () => {
  location.href = githubLink;
};

const openGithubInNewWindow = () => {
  window.open(githubLink);
};

document.getElementById("gitHubButton").addEventListener("click", openGithub);
document
  .getElementById("gitHubButton")
  .addEventListener("auxclick", openGithubInNewWindow);
