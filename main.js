
const viewAllButton = document.getElementById("viewAllCourses");
const viewLessButton = document.getElementById("viewLessCourses");
const additionalCourses = document.querySelectorAll(".additional-course");

viewAllButton.addEventListener("click", function () {
    additionalCourses.forEach(function (course) {
        course.hidden = false;
    });

    viewAllButton.hidden = true;
    viewLessButton.hidden = false;
    viewAllButton.setAttribute("aria-expanded", "true");
});

viewLessButton.addEventListener("click", function () {
    additionalCourses.forEach(function (course) {
        course.hidden = true;
    });

    viewLessButton.hidden = true;
    viewAllButton.hidden = false;
    viewAllButton.setAttribute("aria-expanded", "false");

    document.getElementById("featured-courses").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});


// GAQ ITEMS

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".faq-icon");

    question.addEventListener("click", () => {

        // Check whether the clicked item is already open
        const isOpen = item.classList.contains("active");

        // Close all FAQ items
        faqItems.forEach((faq) => {
            faq.classList.remove("active");

            faq.querySelector(".faq-question")
                .setAttribute("aria-expanded", "false");

            faq.querySelector(".faq-icon").textContent = "+";
        });

        // Open the clicked item if it was previously closed
        if (!isOpen) {
            item.classList.add("active");

            question.setAttribute("aria-expanded", "true");
            icon.textContent = "−";
        }

    });

});
