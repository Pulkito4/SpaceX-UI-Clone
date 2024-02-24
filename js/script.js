const btn = document.querySelector("#menu-btn");
const overlay = document.querySelector("#overlay");
const menu = document.querySelector("#mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

function navToggle() {
    btn.classList.toggle("open");
    overlay.classList.toggle("overlay-show");
    document.body.classList.toggle("stop-scrolling");
    menu.classList.toggle("show-menu");
}

function scrollPage() {
    const scrollPos = window.scrollY;

    if (scrollPos > 90 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 90 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

// function to count up the stats (of Falcon 9 or any other)
function countUp() {
    counters.forEach((counter) => {
        counter.innerText = "0";

        const updateCounter = () => {
            //Get count target
            const target = parseInt(counter.getAttribute("data-target"));

            // get current counter value
            const c = parseInt(counter.innerText);

            // create an increment
            const increment = target / 100;

            // if counter is less than the target => add increment
            if (c < target) {
                //Round up and set the counter value
                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 75);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}

function reset() {
    counters.forEach((counter) => (counter.innerHTML = "0"));
}
