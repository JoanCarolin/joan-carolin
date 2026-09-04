
document.addEventListener("DOMContentLoaded", function () {

    const sliders = document.querySelectorAll(".image-compare");

    sliders.forEach(function (slider) {

        const before = slider.querySelector(".image-compare__before");
        const handle = slider.querySelector(".image-compare__handle");

        let dragging = false;


        function updateSlider(clientX) {

            const rect = slider.getBoundingClientRect();

            let position =
                ((clientX - rect.left) / rect.width) * 100;

            position = Math.max(0, Math.min(100, position));

            slider.style.setProperty("--position", position + "%");

            handle.setAttribute(
                "aria-valuenow",
                Math.round(position)
            );
        }


        /* Maus */

        slider.addEventListener("mousedown", function (event) {
            dragging = true;
            updateSlider(event.clientX);
        });

        document.addEventListener("mousemove", function (event) {
            if (!dragging) return;
            updateSlider(event.clientX);
        });

        document.addEventListener("mouseup", function () {
            dragging = false;
        });


        /* Touch */

        slider.addEventListener("touchstart", function (event) {
            dragging = true;
            updateSlider(event.touches[0].clientX);
        }, { passive: true });

        slider.addEventListener("touchmove", function (event) {
            if (!dragging) return;
            updateSlider(event.touches[0].clientX);
        }, { passive: true });

        slider.addEventListener("touchend", function () {
            dragging = false;
        });


        /* Startposition */

        const start = parseFloat(slider.dataset.start) || 50;

        slider.style.setProperty("--position", start + "%");

        handle.setAttribute(
            "aria-valuenow",
            Math.round(start)
        );

    });

});