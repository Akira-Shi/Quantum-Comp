(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    // Typing effect 
    document.addEventListener("DOMContentLoaded", function () {
        const text = "Quantum ";
        const spanText = "Computing";
        const speed = 150; 
        const pause = 1000; 
        let index = 0;
        const typingText = document.querySelector(".name");

        if (!typingText) {
            console.error("Element with class 'name' not found.");
            return;
        }

        function typeText() {
            if (index < text.length) {
                typingText.innerHTML = text.substring(0, index + 1); 
                index++;
                setTimeout(typeText, speed);
            } else {
                setTimeout(typeSpanText, speed);
            }
        }

        function typeSpanText() {
            if (index < text.length + spanText.length) {
                typingText.innerHTML = text + "<span>" + spanText.substring(0, index - text.length + 1) + "</span>";
                index++;
                setTimeout(typeSpanText, speed);
            } else {
                setTimeout(eraseText, pause);
            }
        }

        function eraseText() {
            if (index > text.length) {
                typingText.innerHTML = text + "<span>" + spanText.substring(0, index - text.length - 1) + "</span>";
                index--;
                setTimeout(eraseText, speed / 2);
            } else {
                setTimeout(eraseMainText, speed);
            }
        }

        function eraseMainText() {
            if (index > 0) {
                typingText.innerHTML = text.substring(0, index - 1);
                index--;
                setTimeout(eraseMainText, speed / 2);
            } else {
                setTimeout(typeText, speed);
            }
        }

        typeText(); 
    });

})();
