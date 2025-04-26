
const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerImg = document.getElementById("hamburger-img");
const nav = document.querySelector(".hidden-nav");

let isNavOpen = false;

hamburgerIcon.addEventListener("click", () => {
    if (!isNavOpen) {
        nav.style.opacity = "1";
        nav.style.top = "90%";
        hamburgerImg.src = "cross-svgrepo-com.svg"; // <-- change this to your cross icon
        isNavOpen = true;
    } else {
        nav.style.opacity = "0";
        nav.style.top = "-300px";
        hamburgerImg.src = "hamburger-menu-svgrepo-com (1).svg"; // <-- back to hamburger
        isNavOpen = false;
    }
});

const cards = document.querySelectorAll(".faq-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const para = card.querySelector(".paragraph"); // Get the paragraph inside this card
    const currentOpacity = window.getComputedStyle(para).display;

    if (currentOpacity === "none") {
      para.style.display = "block";
    } else {
      para.style.display = "none";
    }

  });
});
const toggleSwitch = document.getElementById("toggleSwitch");
const planTitle1 = document.getElementById("price-tag-1");
const planTitle2 = document.getElementById("price-tag-2");
const planTitle3 = document.getElementById("price-tag-3");
const monthlyLabel = document.getElementById("monthly-label");
const yearlyLabel = document.getElementById("yearly-label");

let isYearly = false;

// Set initial label styles
monthlyLabel.style.fontWeight = "bold";
yearlyLabel.style.fontWeight = "normal";

toggleSwitch.addEventListener("click", () => {
  isYearly = !isYearly;
  toggleSwitch.classList.toggle("active");

  if (isYearly) {
    planTitle1.textContent = "$70/Year";
    planTitle2.textContent = "$100/Year";
    planTitle3.textContent = "$120/Year";
    
    // Update label font weights
    yearlyLabel.style.fontWeight = "bold";
    monthlyLabel.style.fontWeight = "normal";
  } else {
    planTitle1.textContent = "$19/Month";
    planTitle2.textContent = "$30/Month";
    planTitle3.textContent = "$49/Month";

    // Update label font weights
    yearlyLabel.style.fontWeight = "normal";
    monthlyLabel.style.fontWeight = "bold";
  }
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(drop => {
    drop.addEventListener('click', function(e) {
        e.stopPropagation();
        // Close other open dropdowns
        dropdowns.forEach(d => {
            if (d !== this) d.classList.remove('active');
        });
        // Toggle current dropdown
        this.classList.toggle('active');
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', function() {
    dropdowns.forEach(d => d.classList.remove('active'));
});


