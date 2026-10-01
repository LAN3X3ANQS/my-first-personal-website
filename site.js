document.documentElement.classList.add("js");

const progressBar = document.querySelector(".reading-progress span");
const backToTop = document.querySelector(".back-to-top");
const floatingContact = document.querySelector(".floating-contact");
const revealItems = document.querySelectorAll("[data-reveal]");
const emailCopyButton = document.querySelector("[data-copy]");
const toast = document.querySelector(".toast-message");

const updateScrollUI = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

  if (progressBar) {
    progressBar.style.transform = `scaleX(${Math.min(progress, 1)})`;
  }

  if (backToTop) {
    backToTop.classList.toggle("is-visible", window.scrollY > 420);
  }

  if (floatingContact) {
    floatingContact.classList.toggle("is-visible", window.scrollY > 420);
  }
};

window.addEventListener("scroll", updateScrollUI, { passive: true });
window.addEventListener("resize", updateScrollUI);
updateScrollUI();

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-revealed"));
}

const showToast = (message) => {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
};

if (emailCopyButton) {
  emailCopyButton.addEventListener("click", async () => {
    const email = emailCopyButton.dataset.copy;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const temporaryInput = document.createElement("textarea");
        temporaryInput.value = email;
        temporaryInput.setAttribute("readonly", "");
        temporaryInput.style.position = "fixed";
        temporaryInput.style.opacity = "0";
        document.body.append(temporaryInput);
        temporaryInput.select();
        const copied = document.execCommand("copy");
        temporaryInput.remove();
        if (!copied) throw new Error("Clipboard unavailable");
      }

      showToast("Email address copied");
    } catch {
      showToast("Email: " + email);
    }
  });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});