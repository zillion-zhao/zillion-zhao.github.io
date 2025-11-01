// Navbar Toggle
var MENU_BUTTON_TEXT = document.getElementById("hideNavbarButtonText");
var MENU_BUTTON = document.getElementById("navbarToggleButton");
var NAV_MENU = document.getElementById("navigationMenu");
var MAIN_CONTENT = document.getElementById("mainContent");

MENU_BUTTON.addEventListener("click", function () {
  if (NAV_MENU.style.display === "block") {
    MENU_BUTTON_TEXT.innerHTML = "Menu >";
    NAV_MENU.style.display = "none";
  } else {
    MENU_BUTTON_TEXT.innerHTML = "Hide >";
    NAV_MENU.style.display = "block";
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 750) {
    MENU_BUTTON_TEXT.innerHTML = "Hide >";
    NAV_MENU.style.display = "block";
  }

  if (window.innerWidth < 750) {
    MENU_BUTTON_TEXT.innerHTML = "Menu >";
    NAV_MENU.style.display = "none";
  }
});

// Header Image Swap
var INTRO_BANNER = document.getElementById("introBanner");
var WALLPAPERS_BANNER = document.getElementById("wallpapersBanner");
var RESOURCES_BANNER = document.getElementById("resourcesBanner");
var HISTORY_BANNER = document.getElementById("historyBanner");
var MUSIC_HEADER_IMG = document.getElementById("musicHeaderImage");
var MUSIC_DANCER_IMG = document.getElementById("musicDancerImage");
var ICONS_BANNER = document.getElementById("iconsBanner");
var SITE_MAP_BANNER = document.getElementById("sitemapBanner");
var SITE_INFO_BANNER = document.getElementById("siteInfoBanner");
var TELEVISIONS_BANNER = document.getElementById("televisionsBanner");
var AERO_WEBRING_BANNER = document.getElementById("aeroWebringBanner");
var INDIE_GAMES_BANNER = document.getElementById("indieGamesBanner");
var OTHER_LINKS_BANNER = document.getElementById("otherLinksBanner");
var CONTACT_BANNER = document.getElementById("contactBanner");

let copyButton = document.getElementById("copyButton");

// Copy Button Sound
if (copyButton) {
  copyButton.addEventListener("click", function () {
    if (global_sound) {
      theme_sound.play();
    }
  });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
