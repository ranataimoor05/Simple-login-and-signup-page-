document.addEventListener("DOMContentLoaded", () => {
  const signInBox = document.getElementById("signInBox");
  const signUpBox = document.getElementById("signUpBox");
  const toSignUpBtn = document.getElementById("toSignUp");
  const toSignInBtn = document.getElementById("toSignIn");

  // Toggle Password Visibility
  const toggleButtons = document.querySelectorAll(".toggle-password");

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = btn.previousElementSibling;
      const isPassword = input.getAttribute("type") === "password";

      input.setAttribute("type", isPassword ? "text" : "password");

      // Adjust icon visual state when visible
      btn.style.color = isPassword ? "#d97706" : "#64748b";
    });
  });

  // Switch between Sign In and Sign Up forms
  function switchForm(currentBox, nextBox) {
    currentBox.classList.add("animating-out");

    setTimeout(() => {
      currentBox.classList.remove("active", "animating-out");
      nextBox.classList.add("active");
    }, 300);
  }

  if (toSignUpBtn) {
    toSignUpBtn.addEventListener("click", (e) => {
      e.preventDefault();
      switchForm(signInBox, signUpBox);
    });
  }

  if (toSignInBtn) {
    toSignInBtn.addEventListener("click", (e) => {
      e.preventDefault();
      switchForm(signUpBox, signInBox);
    });
  }
});