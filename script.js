document.addEventListener("DOMContentLoaded", function () {
    const yesBirthdayBtn = document.querySelectorAll(".button")[0];
    const noBirthdayBtn = document.querySelectorAll(".button")[1];
    const yesGiftBtn = document.querySelectorAll(".button")[3];
    const noGiftBtn = document.querySelectorAll(".button")[4];
    const revealBtn = document.getElementById("reveal-button");
    const backBtn = document.getElementById("back-button");

    // First question: Is it your birthday?
    yesBirthdayBtn.addEventListener("click", function () {
        document.getElementById("section-01").style.display = "none";
        document.getElementById("section-02-b").style.display = "block";
    });

    noBirthdayBtn.addEventListener("click", function () {
        document.getElementById("section-01").style.display = "none";
        document.getElementById("section-02-a").style.display = "block";
    });

    // Second question: Want to see your gift?
    yesGiftBtn.addEventListener("click", function () {
        document.getElementById("section-02-b").style.display = "none";
        document.getElementById("section-03").style.display = "block";
    });

    noGiftBtn.addEventListener("click", function () {
        alert("Okay... your loss!");
    });

    // Reveal button (optional: could add animations later)
    revealBtn.addEventListener("click", function () {
        const giftSection = document.getElementById("section-04-2");
        giftSection.style.display = "block";
        setTimeout(() => {
            giftSection.classList.remove("blurred");
        }, 50); // slight delay to trigger transition
    
        revealBtn.style.display = "none"; // Optional: hide the Reveal button
    });

    backBtn.addEventListener("click", function() {
        document.getElementById("section-01").style.display = "block";
        document.getElementById("section-02-a").style.display = "none";
    });
    
});
