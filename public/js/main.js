console.log("Main JS loaded successfully");

/*
🧠 Mental Model

currentLanguage = State (language state)
loadLanguage = Renderer (renders text on the page)
localStorage = Persistence (saves language after refresh)
Button = Trigger (changes the state)
*/

// 1️⃣ Default language (or get saved language from localStorage)
let currentLanguage = localStorage.getItem("lang") || "en";

// 2️⃣ Helper function
// This function allows us to read nested keys like "home.title"
function getNestedValue(object, key) {
    return key.split(".").reduce((acc, part) => {
        return acc && acc[part];
    }, object);
}

// 3️⃣ Load language file and render text
async function loadLanguage(lang) {
    // Fetch language JSON file
    const response = await fetch(`/locales/${lang}.json`);
    const translations = await response.json();

    // Loop through all elements that have data-key
    document.querySelectorAll("[data-key]").forEach((element) => {
        const key = element.dataset.key;

        // Get value from nested JSON (home.title, home.description, etc.)
        const value = getNestedValue(translations, key);

        // Update text only if the key exists
        if (value) {
            element.textContent = value;
        }
    });

    // 4️⃣ Change text direction (RTL for Arabic, LTR for English)
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

// 5️⃣ Wait until HTML is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.getElementById("lang-btn");

    // Initial render
    loadLanguage(currentLanguage);
    langBtn.textContent = currentLanguage === "en" ? "AR" : "EN";

    // 6️⃣ Language toggle button
    langBtn.addEventListener("click", () => {
        // Toggle language state
        currentLanguage = currentLanguage === "en" ? "ar" : "en";

        // Re-render content
        loadLanguage(currentLanguage);

        // Save language to localStorage
        localStorage.setItem("lang", currentLanguage);

        // Update button label
        langBtn.textContent = currentLanguage === "en" ? "AR" : "EN";
    });
});
