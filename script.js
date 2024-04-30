// Navigation

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

const scrollFn = () => {
  menuIcon.classList.add("show-menu-icon");
  navbar.classList.add("hide-navbar");

  if (window.scrollY === 0) {
    menuIcon.classList.remove("show-menu-icon");
    navbar.classList.remove("hide-navbar");
  }

  progressBarFn();
};

document.addEventListener("scroll", scrollFn);

menuIcon.addEventListener("click", () => {
  menuIcon.classList.remove("show-menu-icon");
  navbar.classList.remove("hide-navbar");
});
// End of Navigation


// Section 1
// Link 
document.querySelectorAll(".link-btn").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const linkText = link.nextElementSibling;
    linkText.classList.toggle("change");

    const rightPosition = linkText.classList.contains("change")
      ? `calc(100% - ${getComputedStyle(link.firstElementChild).width})`
      : 0;
      


    link.firstElementChild.style.right = rightPosition;
  });
});
// End of Link
// End of section 1

// Section 4
document.querySelectorAll(".service-btn").forEach((service) => {
  service.addEventListener("click", (e) => {
    e.preventDefault();

    const serviceText = service.nextElementSibling;
    serviceText.classList.toggle("change");

    const rightPosition = serviceText.classList.contains("change")
      ? `calc(100% - ${getComputedStyle(service.firstElementChild).width})`
      : 0;

    service.firstElementChild.style.right = rightPosition;
  });
});
// End of Section 4

// Section 5
// Form
const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");

formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = `Your ${input.placeholder}`;
      formHeading.style.opacity = "1";
    }, 300);
  });

  input.addEventListener("blur", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = "Let's Talk";
      formHeading.style.opacity = "1";
    }, 300);
  });
});
// End of Form

// Form Validation
const form = document.querySelector(".contact-form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const messages = document.querySelectorAll(".message");

const error = (input, message) => {
  input.nextElementSibling.classList.add("error");
  input.nextElementSibling.textContent = message;
};

const success = (input) => {
  input.nextElementSibling.classList.remove("error");
};

const checkRequiredFields = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      error(input, `${input.id} is required`);
    }
  });
};

const checkLength = (input, min) => {
  if (input.value.trim().length < min) {
    error(input, `${input.id} must be at least ${min} characters`);
  } else {
    success(input);
  }
};

const checkEmail = (input) => {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regEx.test(input.value.trim())) {
    success(input);
  } else {
    error(input, "Email is not valid");
  }
};

form.addEventListener("submit", (e) => {
  checkLength(username, 2);
  checkLength(subject, 2);
  checkLength(message, 10);
  checkEmail(email);
  checkRequiredFields([username, email, subject, message]);

  const notValid = Array.from(messages).find((message) => {
    return message.classList.contains("error");
  });

  notValid && e.preventDefault();
});
// End of Form Validation
