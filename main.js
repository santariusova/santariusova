const dict = {
  cs: {
    nav_about: "O MNĚ",
    nav_projects: "PROJEKTY",
    nav_contact: "KONTAKT",

    hero_role: "Graphic Designer",
    hero_line: "Dávám chaosu řád. Značkám směr. Detailům prostor.",

    label_about: "O MNĚ",
    label_projects: "PROJEKTY",
    label_contact: "KONTAKT",
    label_logos: "SPOLUPRACOVALA JSEM S",

    about_title: "JSEM KLÁRA SANTARIUSOVÁ",
    about_p1:
      "Grafickému designu se profesionálně věnuji od roku 2021. Vizuální základy mám ze studia grafiky, strategické myšlení ze studia marketingu.",
    about_p2:
      "Pohybuji se mezi brandem, tiskem, UI/UX a sociálními sítěmi. Spolupracovala jsem s velkými značkami z Česka i zahraničí.",
    about_p3: "Design je pro mě způsob, jak dát věcem tvar a řád.",
    about_services_title: "DEJME TVÉ VIZI TVÁŘ",
    about_services_text:
      "od loga a identity,\npřes kampaně a bannery,\naž po tiskoviny a digitální komunikaci.",

    projects_more: "a mnoho dalších",

    contact_head_1: "Chceš svůj design?",
    contact_head_2: " Pojďme ho vytvořit!",
    ph_name: "Jméno a příjmení",
    ph_email: "Emailová adresa",
    ph_message: "Tvoje zpráva",
    consent: "Odesláním souhlasíš se zpracováním údajů",
    send: "ODESLAT",
  },

  en: {
    nav_about: "ABOUT",
    nav_projects: "PROJECTS",
    nav_contact: "CONTACT",

    hero_role: "Graphic Designer",
    hero_line: "I bring order to chaos. Direction to brands. Space to details.",

    label_about: "ABOUT",
    label_projects: "PROJECTS",
    label_contact: "CONTACT",
    label_logos: "I WORKED WITH",

    about_title: "I’M KLARA SANTARIUSOVÁ",
    about_p1:
      "I’ve been working as a professional graphic designer since 2021. I have a strong visual foundation from graphic design studies and strategic thinking from marketing.",
    about_p2:
      "I work across branding, print, UI/UX and social media. I’ve collaborated with well-known brands in the Czech Republic and abroad.",
    about_p3: "For me, design is a way to give things shape and order.",
    about_services_title: "LET’S SHAPE YOUR VISION",
    about_services_text:
      "from logos and identities,\nthrough campaigns and banners,\nto print and digital communication.",

    projects_more: "and many more",

    contact_head_1: "Need a design?",
    contact_head_2: " Let’s create it!",
    ph_name: "Full name",
    ph_email: "Email address",
    ph_message: "Your message",
    consent: "By sending, you agree to data processing",
    send: "SEND",
  },
};

let lang = "cs";

function applyI18n() {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[lang][key];
    if (val == null) return;

    if (val.includes("\n")) el.innerHTML = val.replaceAll("\n", "<br />");
    else el.textContent = val;
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    const val = dict[lang][key];
    if (val != null) el.setAttribute("placeholder", val);
  });

  document.getElementById("btnCZ").classList.toggle("is-active", lang === "cs");
  document.getElementById("btnEN").classList.toggle("is-active", lang === "en");
}

document.getElementById("btnCZ").addEventListener("click", () => {
  lang = "cs";
  applyI18n();
});
document.getElementById("btnEN").addEventListener("click", () => {
  lang = "en";
  applyI18n();
});

document.getElementById("year").textContent = new Date().getFullYear();

applyI18n();
