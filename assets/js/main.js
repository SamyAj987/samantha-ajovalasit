const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const dict = {
  en: {
    tagline: "Data Scientist · NLP & LLM · Applied Research",
    currentRole: "Researcher · University of Palermo",
    contactBtn: "Contact",
    navAbout: "About",
    navInterests: "Research",
    navTeaching: "Teaching",
    navPublications: "Publications",
    navProjects: "Projects",
    navService: "Service",
    navTalks: "Talks",
    navCV: "CV",
    aboutTitle: "About",
    aboutBody:
      "Data Scientist with a PhD in Economics, Management and Statistics. I build NLP pipelines, LLM-powered decision-support tools, and stochastic models — shipped to cloud production and published at Bruegel (EU think tank). Work spans judicial text analytics, sovereign debt risk, and real-time social media signals.",
    quickTitle: "At a glance",
    quick1: "Researcher — University of Palermo (since March 2023)",
    quick2: "Former Postdoc — Palermo (JustSmart) · Ca' Foscari (EUMEPLAT)",
    quick3: "PhD in Economics, Management and Statistics",
    quick4: "2 production apps shipped — WhatDSApp (cloud) · EUMEPLAT Dashboard",
    quick5: "LLM deployment & fine-tuning in production (Ollama, HuggingFace, spaCy)",
    contactTitle: "Contact",
    contactNote: "Public contact only.",
    skillsTitle: "Skills",
    skillsLLMTitle: "LLM & Generative AI",
    skillsNLPTitle: "NLP & Machine Learning",
    skillsPyTitle: "Data Science & Engineering",
    skillsQuantTitle: "Quantitative Finance & Risk",
    interestsTitle: "Research interests",
    ri1Title: "Debt sustainability, ESG & Demographics",
    ri1Body:
      "Stochastic models and scenario analysis to evaluate ESG policies and sovereign debt sustainability, with attention to demographic challenges. Applied to: risk management, policy advisory, sovereign credit.",
    ri2Title: "Big data, networks & social media",
    ri2Body:
      "Big data analytics and network analysis combined with sentiment and text analysis on social media; network theory applied to epidemics and diffusion. Applied to: public opinion monitoring, financial contagion.",
    ri3Title: "LLM & NLP for decision support",
    ri3Body:
      "Text classification, legal NLP, and sentiment pipelines on judicial texts, policy documents, and media corpora. Production use of spaCy, HuggingFace Transformers, and local LLMs via Ollama.",
    projectsTitle: "Tools & outputs",
    proj1:
      "Interactive web app for public debt evaluation: sustainability analysis, scenario building, and optimal funding strategies. Built from scratch — Python/Dash/Bootstrap/Docker, deployed on AMELIA cloud (GRINS project).",
    proj2:
      "Interactive dashboard supporting the EUMEPLAT \"Data clustering reports — Lessons from Media History\". Built with R/Shiny, deployed on shinyapps.io.",
    proj3:
      "NLP pipeline for Italian judicial text analysis — NER and text classification on court records to identify procedural bottlenecks and support judges' workflow optimization. Built with spaCy, HuggingFace Transformers, and Doccano.",
    pubTitle: "Publications (selected)",
    pubNote: "Full list available as PDF.",
    pubPdfBtn: "Open publications PDF",
    serviceTitle: "Service",
    reviewingTitle: "Peer reviewing",
    rev1: "Reviewer — PLOS ONE (since 2021)",
    rev2: "Reviewer — Annals of Operations Research (since 2024)",
    orgTitle: "Organization",
    org1: "Organizing committee — XXVI Quantitative Finance Workshop (Palermo, Apr 2025)",
    org2: "Scientific committee — Frontiers in Stochastic Modelling for Finance (Palermo, Oct 2023)",
    membershipTitle: "Memberships",
    mem1: "AMASES — Italian Association for Mathematics Applied to Social and Economic Sciences (member since 2023)",
    talksTitle: "Seminars & conference presentations",
    seminarsTitle: "Invited seminar",
    sem1: "University of Pisa (DEM Seminars) — \"Are Bad Governments a Threat to Sovereign Defaults?\" (6 Nov 2024)",
    confTitle: "Conference talks / posters",
    c1: "GRETA Credit Risk Evaluation (Credit 2025) — Poster (Venice, Sep 2025)",
    c2: "AMASES XLIX Annual Conference 2025 — Talk (Florence, Sep 2025)",
    c3: "AMASES XLVIII Annual Conference 2024 — Talk (Ischia, Sep 2024)",
    c4: "SIDE Annual Conference 2022 — Talk (Palermo, Dec 2022)",
    c5: "POPDAYS 2019 — Working paper presentation (Milan, Jan 2019)",
    teachingTitle: "Teaching",
    teachCoursesTitle: "Courses",
    teachTutoringTitle: "Tutoring / Teaching support",
    cvTitle: "CV",
    cvEng: "English",
    cvIta: "Italiano"
  },
  it: {
    tagline: "Data Scientist · NLP & LLM · Ricerca Applicata",
    currentRole: "Ricercatrice · Università di Palermo",
    contactBtn: "Contatti",
    navAbout: "Profilo",
    navInterests: "Ricerca",
    navTeaching: "Didattica",
    navPublications: "Pubblicazioni",
    navProjects: "Progetti",
    navService: "Attività",
    navTalks: "Talk",
    navCV: "CV",
    aboutTitle: "Profilo",
    aboutBody:
      "Data Scientist con PhD in Economics, Management and Statistics. Costruisco pipeline NLP, strumenti di supporto decisionale e modelli stocastici — in produzione cloud e pubblicati su Bruegel (think tank UE). Ambiti: text analytics giuridico, rischio del debito sovrano e segnali social media in tempo reale.",
    quickTitle: "In sintesi",
    quick1: "Ricercatrice — Università di Palermo (da marzo 2023)",
    quick2: "Ex assegnista — Palermo (JustSmart) · Ca' Foscari (EUMEPLAT)",
    quick3: "PhD in Economics, Management and Statistics",
    quick4: "2 app in produzione — WhatDSApp (cloud) · EUMEPLAT Dashboard",
    quick5: "Deploy e fine-tuning LLM in produzione (Ollama, HuggingFace, spaCy)",
    contactTitle: "Contatti",
    contactNote: "Solo contatti pubblici.",
    skillsTitle: "Competenze",
    skillsLLMTitle: "LLM & AI Generativa",
    skillsNLPTitle: "NLP & Machine Learning",
    skillsPyTitle: "Data Science & Engineering",
    skillsQuantTitle: "Finanza Quantitativa & Rischio",
    interestsTitle: "Interessi di ricerca",
    ri1Title: "Debt sustainability, ESG & demografia",
    ri1Body:
      "Modelli stocastici e analisi di scenario per valutare politiche ESG e sostenibilità del debito sovrano, con attenzione alle sfide demografiche. Applicato a: risk management, policy advisory, credito sovrano.",
    ri2Title: "Big data, reti & social media",
    ri2Body:
      "Big data analytics e analisi di rete combinati con sentiment e text analysis sui social media; teoria delle reti applicata a epidemie e diffusione. Applicato a: monitoraggio opinione pubblica, contagio finanziario.",
    ri3Title: "LLM & NLP per supporto decisionale",
    ri3Body:
      "Classificazione del testo, NLP giuridico e pipeline di sentiment su testi giudiziari, documenti di policy e corpora media. Uso in produzione di spaCy, HuggingFace Transformers e LLM locali via Ollama.",
    projectsTitle: "Strumenti & output",
    proj1:
      "Web app interattiva per la valutazione del debito pubblico: analisi di sostenibilità, scenario building e strategie di finanziamento ottimale. Sviluppata da zero — Python/Dash/Bootstrap/Docker, deploy su cloud AMELIA (progetto GRINS).",
    proj2:
      "Dashboard interattiva a supporto dei report EUMEPLAT \"Data clustering reports — Lessons from Media History\". Sviluppata con R/Shiny, deploy su shinyapps.io.",
    proj3:
      "Pipeline NLP per analisi di testi giudiziari italiani — NER e classificazione su atti giudiziari per identificare colli di bottiglia e supportare il lavoro dei magistrati. Sviluppata con spaCy, HuggingFace Transformers e Doccano.",
    pubTitle: "Pubblicazioni (selezione)",
    pubNote: "Lista completa disponibile come PDF.",
    pubPdfBtn: "Apri PDF pubblicazioni",
    serviceTitle: "Attività istituzionale",
    reviewingTitle: "Peer review",
    rev1: "Reviewer — PLOS ONE (dal 2021)",
    rev2: "Reviewer — Annals of Operations Research (dal 2024)",
    orgTitle: "Organizzazione",
    org1: "Comitato organizzativo — XXVI Quantitative Finance Workshop (Palermo, apr 2025)",
    org2: "Comitato scientifico — Frontiers in Stochastic Modelling for Finance (Palermo, ott 2023)",
    membershipTitle: "Affiliazioni",
    mem1: "AMASES — Associazione per la Matematica Applicata alle Scienze Economiche e Sociali (socia dal 2023)",
    talksTitle: "Seminari & presentazioni",
    seminarsTitle: "Seminario su invito",
    sem1: "Università di Pisa (DEM Seminars) — \"Are Bad Governments a Threat to Sovereign Defaults?\" (6 nov 2024)",
    confTitle: "Talk / poster a convegni",
    c1: "GRETA Credit Risk Evaluation (Credit 2025) — Poster (Venezia, set 2025)",
    c2: "AMASES XLIX Annual Conference 2025 — Talk (Firenze, set 2025)",
    c3: "AMASES XLVIII Annual Conference 2024 — Talk (Ischia, set 2024)",
    c4: "SIDE Annual Conference 2022 — Talk (Palermo, dic 2022)",
    c5: "POPDAYS 2019 — Working paper (Milano, gen 2019)",
    teachingTitle: "Didattica",
    teachCoursesTitle: "Corsi",
    teachTutoringTitle: "Tutorato / Supporto didattico",
    cvTitle: "CV",
    cvEng: "English",
    cvIta: "Italiano"
  }
};

let lang = "en";
const btn = document.getElementById("langToggle");

function applyI18n() {
  document.documentElement.lang = lang;
  const map = dict[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (map[key]) el.textContent = map[key];
  });
  if (btn) btn.textContent = (lang === "en") ? "IT" : "EN";
}

if (btn) {
  btn.addEventListener("click", () => {
    lang = (lang === "en") ? "it" : "en";
    applyI18n();
  });
}

applyI18n();
