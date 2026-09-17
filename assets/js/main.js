const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const dict = {
  en: {
    tagline: "Data Scientist · NLP & LLM · Quantitative Risk",
    location: "Palermo, Italy · open to Italy, EU and remote",
    contactBtn: "Contact",
    navAbout: "About",
    navProjects: "Projects",
    navExperience: "Experience",
    navPublications: "Publications",
    navCV: "CV",
    heroTitle: "I turn messy data into models and tools that people use to make decisions.",
    heroBody: "Data Scientist with a PhD in Economics, Management and Statistics and a Master's in Big Data Analytics & Social Mining. 5+ years of end-to-end delivery: data ingestion and ETL, NLP and LLM pipelines, Monte Carlo risk models, and interactive dashboards deployed on cloud and used by EU-funded consortia.",
    heroCv: "Download CV (PDF)",
    heroProjects: "See projects",
    stat1: "years of Python in production",
    stat2: "web apps live in production",
    stat3: "EU-funded projects delivered",
    stat4: "publications, 2 with Bruegel",
    doTitle: "What I bring to a team",
    do1Title: "NLP & LLM pipelines",
    do1Body: "Text classification, NER and sentiment analysis on Italian and multilingual corpora; local open-source LLMs (Qwen, Deepseek) served with Ollama and vLLM; LLM output validated against analyst judgement.",
    do2Title: "Risk & scenario modelling",
    do2Body: "Monte Carlo simulation with variance reduction, scenario and sensitivity analysis, CVaR tail-risk optimisation, ESG risk factors. Market data from FactSet and Refinitiv Eikon.",
    do3Title: "Data products that ship",
    do3Body: "From raw Excel, APIs and repositories to a deployed app: ETL, Docker, cloud deployment, Plotly/Dash and R Shiny dashboards, and clear reporting for non-technical stakeholders.",
    skillsTitle: "Technical skills",
    skillsProgTitle: "Programming & Engineering",
    skillsMLTitle: "Machine Learning",
    skillsNLPTitle: "NLP, LLM & Generative AI",
    skillsDataTitle: "Data Engineering & BI",
    skillsQuantTitle: "Quantitative Finance & Risk",
    contactTitle: "Let's talk",
    contactBody: "Open to Data Scientist, NLP/LLM Engineer and Quantitative Analyst roles. Based in Palermo; happy to work remote or relocate within the EU. Italian native, English professional.",
    projectsTitle: "Projects",
    projectsNote: "Each case: the problem, what I built, and what came out of it.",
    live: "Live",
    lblProblem: "Problem",
    lblBuilt: "What I built",
    lblResult: "Result",
    p1Meta: "Sovereign debt risk · GRINS project · 2023–2026",
    p1Problem: "Economists needed to test how fiscal choices and market shocks change the risk profile of public debt, without running simulation code themselves.",
    p1Built: "A full-stack decision-support web app on top of a stochastic simulation engine (Monte Carlo, scenario and sensitivity analysis). Drag-and-drop multi-sheet Excel ingestion, market data from FactSet and Refinitiv Eikon, fan charts and CVaR efficient-frontier plots. Containerised with Docker and deployed on the AMELIA cloud platform.",
    p1Result: "Adopted by GRINS consortium partners for live debt-scenario analysis; the models behind it support a peer-reviewed paper (Risks 2024) and two Bruegel publications.",
    p2Meta: "Media market analytics · EU H2020 · 2021–2022",
    p2Problem: "Measure how far European media markets converged over 40 years, and make the evidence explorable for a non-technical consortium.",
    p2Built: "Clustering analysis across countries and media (Press, Radio, TV, OTT, ICT) and a public interactive dashboard with choropleth maps and descriptive statistics.",
    p2Result: "Published as EU H2020 deliverable D1.5, dashboard publicly available.",
    p3Title: "Judicial efficiency analytics",
    p3Meta: "Just Smart project · University of Palermo · 2022–2023",
    p3Problem: "Courts in western Sicily lacked a measurable view of where cases stall.",
    p3Built: "Data retrieval from the Italian judicial repository (SICID) and a pipeline measuring process efficiency, with queueing analysis and survival models; NLP on unstructured judicial documents.",
    p3Result: "Bottlenecks and processing times quantified and turned into data-driven recommendations for court administration.",
    p4Title: "Social media NLP: vaccine hesitancy",
    p4Meta: "PhD research · University of Messina · 2018–2020",
    p4Problem: "Does contradictory political communication change public attitudes to vaccination?",
    p4Built: "A streaming collection pipeline from the Twitter API (Tweepy) and an NLP workflow for sentiment analysis and text classification on Italian tweets, with polarity time series aligned to political events.",
    p4Result: "Measured disorientation in the public debate after political announcements; published in PLoS ONE (2021).",
    repoTitle: "Recent GitHub activity",
    repoNote: "Latest public repositories.",
    repoBtn: "View full GitHub profile",
    expTitle: "Experience",
    e1Role: "Researcher, Data Science & Risk Modelling",
    e1Org: "University of Palermo · GRINS project (Growing Resilient, Inclusive and Sustainable)",
    e1b1: "Engineered a stochastic simulation engine for debt sustainability analysis, with data ingestion from FactSet and Refinitiv Eikon.",
    e1b2: "Delivered WhatDSApp end to end (Dash, Plotly, Docker), deployed on the AMELIA cloud and adopted by consortium partners.",
    e1b3: "Used LLMs for ESG scoring, with model output checked against analyst judgement.",
    e1b4: "Wrote periodic reports on European public finance and a budget analysis of the US One Big Beautiful Bill Act for Bruegel.",
    e1b5: "Taught Mathematics for Business (84 hours per year).",
    e2Role: "Research Fellow, Data Science",
    e2Org: "University of Palermo · Just Smart project (Smart Justice)",
    e2b1: "Managed data retrieval from Italian judicial repositories (SICID) for western Sicily courthouses.",
    e2b2: "Applied queueing analysis and survival models to quantify bottlenecks and processing times, feeding recommendations to court administration.",
    e3Role: "Research Fellow, Data Science",
    e3Org: "Ca' Foscari University of Venice · EU H2020 EUMEPLAT project",
    e3b1: "Designed clustering of 40 years of European media market data to measure market harmonisation.",
    e3b2: "Built and published a public R Shiny dashboard with cross-country choropleth maps (deliverable D1.5).",
    e3b3: "Lecturer, Advanced Application of Computer Science for Cultural Heritage (R, network analysis).",
    e4Role: "PhD in Economics, Management and Statistics",
    e4Org: "University of Messina",
    e4b1: "Ran large-scale NLP on Italian Twitter data (streaming API ingestion, sentiment analysis, text classification); published in PLoS ONE 2021.",
    e4b2: "Teaching support in Business Statistics and Data Science for Demographic Processes (R for data analytics).",
    e5Role: "Intern, R&D team",
    e5b1: "Agent-based modelling and simulation of Pisa's urban traffic system with Python and QGIS.",
    eduTitle: "Education",
    ed1: "II Level Master's in Big Data Analytics & Social Mining",
    ed1Org: "University of Pisa · thesis: urban traffic analysis from GPS trajectories",
    ed2: "Master's Degree in Economics",
    ed2Org: "University of Pisa, Scuola Superiore Sant'Anna · thesis: option pricing with Monte Carlo and variance reduction",
    ed3: "Bachelor's Degree in Economics and Finance",
    ed3Org: "University of Palermo · thesis: loan transfer and securitisation",
    trainTitle: "Additional training",
    pubTitle: "Selected publications",
    pubNote: "Applied work: each paper rests on models or pipelines I built.",
    talksTitle: "Talks & community",
    speakingTitle: "Speaking",
    sem1: "Invited seminar, University of Pisa: \"Are Bad Governments a Threat to Sovereign Defaults?\" (Nov 2024)",
    reviewTitle: "Peer review & organisation",
    rev1: "Reviewer for PLoS ONE (since 2021) and Annals of Operations Research (since 2024)",
    org1: "Organising committee, XXVI Quantitative Finance Workshop, Palermo (Apr 2025)",
    org2: "Scientific committee, Frontiers in Stochastic Modelling for Finance, Palermo (Oct 2023)",
    cvTitle: "Curriculum Vitae",
    cvBody: "Two-page CV focused on data science, NLP/LLM and quantitative risk. Updated September 2026.",
    cvEng: "English (PDF)",
    cvIta: "Italiano (PDF)"
  },
  it: {
    tagline: "Data Scientist · NLP & LLM · Rischio Quantitativo",
    location: "Palermo · disponibile in Italia, UE e da remoto",
    contactBtn: "Contatti",
    navAbout: "Profilo",
    navProjects: "Progetti",
    navExperience: "Esperienza",
    navPublications: "Pubblicazioni",
    navCV: "CV",
    heroTitle: "Trasformo dati disordinati in modelli e strumenti che le persone usano per decidere.",
    heroBody: "Data Scientist con PhD in Economics, Management and Statistics e Master in Big Data Analytics & Social Mining. Oltre 5 anni di progetti end-to-end: acquisizione dati ed ETL, pipeline NLP e LLM, modelli di rischio Monte Carlo e dashboard interattive in produzione su cloud, usate da consorzi finanziati dall'UE.",
    heroCv: "Scarica il CV (PDF)",
    heroProjects: "Vedi i progetti",
    stat1: "anni di Python in produzione",
    stat2: "web app in produzione",
    stat3: "progetti UE realizzati",
    stat4: "pubblicazioni, 2 con Bruegel",
    doTitle: "Cosa porto in un team",
    do1Title: "Pipeline NLP & LLM",
    do1Body: "Classificazione del testo, NER e sentiment analysis su corpora italiani e multilingue; LLM open-source locali (Qwen, Deepseek) serviti con Ollama e vLLM; output degli LLM validato rispetto al giudizio degli analisti.",
    do2Title: "Modelli di rischio e scenario",
    do2Body: "Simulazione Monte Carlo con riduzione della varianza, analisi di scenario e sensitività, ottimizzazione del rischio di coda (CVaR), fattori di rischio ESG. Dati di mercato da FactSet e Refinitiv Eikon.",
    do3Title: "Prodotti data in produzione",
    do3Body: "Da Excel, API e repository grezzi a un'app in produzione: ETL, Docker, deploy su cloud, dashboard Plotly/Dash e R Shiny, reportistica chiara per stakeholder non tecnici.",
    skillsTitle: "Competenze tecniche",
    skillsProgTitle: "Programmazione & Engineering",
    skillsMLTitle: "Machine Learning",
    skillsNLPTitle: "NLP, LLM & AI Generativa",
    skillsDataTitle: "Data Engineering & BI",
    skillsQuantTitle: "Finanza Quantitativa & Rischio",
    contactTitle: "Parliamone",
    contactBody: "Disponibile per ruoli di Data Scientist, NLP/LLM Engineer e Quantitative Analyst. Base a Palermo; disponibile da remoto o a trasferirmi nell'UE. Italiano madrelingua, inglese professionale.",
    projectsTitle: "Progetti",
    projectsNote: "Per ogni caso: il problema, cosa ho costruito, il risultato.",
    live: "Online",
    lblProblem: "Problema",
    lblBuilt: "Cosa ho costruito",
    lblResult: "Risultato",
    p1Meta: "Rischio del debito sovrano · progetto GRINS · 2023–2026",
    p1Problem: "Gli economisti dovevano testare come scelte fiscali e shock di mercato cambiano il profilo di rischio del debito pubblico, senza eseguire codice di simulazione.",
    p1Built: "Web app full-stack di supporto decisionale basata su un motore di simulazione stocastica (Monte Carlo, analisi di scenario e sensitività). Caricamento drag-and-drop di Excel multi-foglio, dati di mercato da FactSet e Refinitiv Eikon, fan chart e frontiera efficiente CVaR. Containerizzata con Docker e in produzione sulla piattaforma cloud AMELIA.",
    p1Result: "Adottata dai partner del consorzio GRINS per l'analisi di scenario sul debito; i modelli sottostanti supportano un articolo peer-reviewed (Risks 2024) e due pubblicazioni Bruegel.",
    p2Meta: "Analisi del mercato dei media · EU H2020 · 2021–2022",
    p2Problem: "Misurare quanto i mercati dei media europei siano convergiti in 40 anni e rendere l'evidenza esplorabile per un consorzio non tecnico.",
    p2Built: "Analisi di clustering tra paesi e media (stampa, radio, TV, OTT, ICT) e dashboard interattiva pubblica con mappe coropletiche e statistiche descrittive.",
    p2Result: "Pubblicata come deliverable EU H2020 D1.5, dashboard accessibile pubblicamente.",
    p3Title: "Analisi dell'efficienza giudiziaria",
    p3Meta: "Progetto Just Smart · Università di Palermo · 2022–2023",
    p3Problem: "I tribunali della Sicilia occidentale non avevano una misura di dove i procedimenti si bloccano.",
    p3Built: "Estrazione dati dal repository giudiziario SICID e pipeline di misura dell'efficienza dei processi, con teoria delle code e modelli di sopravvivenza; NLP su documenti giudiziari non strutturati.",
    p3Result: "Colli di bottiglia e tempi di lavorazione quantificati e tradotti in raccomandazioni data-driven per l'amministrazione giudiziaria.",
    p4Title: "NLP sui social media: esitazione vaccinale",
    p4Meta: "Ricerca di dottorato · Università di Messina · 2018–2020",
    p4Problem: "La comunicazione politica contraddittoria cambia l'atteggiamento del pubblico verso i vaccini?",
    p4Built: "Pipeline di raccolta in streaming dalle API di Twitter (Tweepy) e workflow NLP di sentiment analysis e classificazione del testo su tweet italiani, con serie storiche di polarità allineate agli eventi politici.",
    p4Result: "Misurato il disorientamento nel dibattito pubblico dopo gli annunci politici; pubblicato su PLoS ONE (2021).",
    repoTitle: "Attività GitHub recente",
    repoNote: "Repository pubblici più recenti.",
    repoBtn: "Vai al profilo GitHub",
    expTitle: "Esperienza",
    e1Role: "Ricercatrice, Data Science & Modelli di Rischio",
    e1Org: "Università di Palermo · progetto GRINS (Growing Resilient, Inclusive and Sustainable)",
    e1b1: "Sviluppato un motore di simulazione stocastica per l'analisi di sostenibilità del debito, con acquisizione dati da FactSet e Refinitiv Eikon.",
    e1b2: "Realizzata WhatDSApp end-to-end (Dash, Plotly, Docker), in produzione sul cloud AMELIA e adottata dai partner del consorzio.",
    e1b3: "Usati LLM per lo scoring ESG, con output verificato rispetto al giudizio degli analisti.",
    e1b4: "Redatti report periodici sulla finanza pubblica europea e un'analisi del One Big Beautiful Bill Act statunitense per Bruegel.",
    e1b5: "Docente di Matematica per l'Azienda (84 ore l'anno).",
    e2Role: "Assegnista di ricerca, Data Science",
    e2Org: "Università di Palermo · progetto Just Smart (Giustizia Smart)",
    e2b1: "Gestita l'estrazione dati dai repository giudiziari (SICID) per i tribunali della Sicilia occidentale.",
    e2b2: "Applicati teoria delle code e modelli di sopravvivenza per quantificare colli di bottiglia e tempi, a supporto delle raccomandazioni per l'amministrazione giudiziaria.",
    e3Role: "Assegnista di ricerca, Data Science",
    e3Org: "Università Ca' Foscari Venezia · progetto EU H2020 EUMEPLAT",
    e3b1: "Progettato il clustering di 40 anni di dati sul mercato europeo dei media per misurarne l'armonizzazione.",
    e3b2: "Costruita e pubblicata una dashboard R Shiny con mappe coropletiche per paese (deliverable D1.5).",
    e3b3: "Docente a contratto, Advanced Application of Computer Science for Cultural Heritage (R, network analysis).",
    e4Role: "PhD in Economics, Management and Statistics",
    e4Org: "Università di Messina",
    e4b1: "NLP su larga scala su dati Twitter italiani (acquisizione via API in streaming, sentiment analysis, classificazione del testo); pubblicato su PLoS ONE 2021.",
    e4b2: "Supporto didattico in Statistica Economica e Data Science per i Processi Demografici (R per l'analisi dati).",
    e5Role: "Tirocinio, team R&D",
    e5b1: "Modellazione ad agenti e simulazione del traffico urbano di Pisa con Python e QGIS.",
    eduTitle: "Formazione",
    ed1: "Master di II livello in Big Data Analytics & Social Mining",
    ed1Org: "Università di Pisa · tesi: analisi del traffico urbano da traiettorie GPS",
    ed2: "Laurea Magistrale in Economia",
    ed2Org: "Università di Pisa, Scuola Superiore Sant'Anna · tesi: option pricing con Monte Carlo e riduzione della varianza",
    ed3: "Laurea in Economia e Finanza",
    ed3Org: "Università di Palermo · tesi: cessione dei crediti e cartolarizzazione",
    trainTitle: "Formazione aggiuntiva",
    pubTitle: "Pubblicazioni selezionate",
    pubNote: "Lavori applicati: ogni articolo si basa su modelli o pipeline che ho costruito.",
    talksTitle: "Talk & community",
    speakingTitle: "Interventi",
    sem1: "Seminario su invito, Università di Pisa: \"Are Bad Governments a Threat to Sovereign Defaults?\" (nov 2024)",
    reviewTitle: "Peer review & organizzazione",
    rev1: "Revisore per PLoS ONE (dal 2021) e Annals of Operations Research (dal 2024)",
    org1: "Comitato organizzativo, XXVI Quantitative Finance Workshop, Palermo (apr 2025)",
    org2: "Comitato scientifico, Frontiers in Stochastic Modelling for Finance, Palermo (ott 2023)",
    cvTitle: "Curriculum Vitae",
    cvBody: "CV di due pagine su data science, NLP/LLM e rischio quantitativo. Aggiornato a settembre 2026.",
    cvEng: "English (PDF)",
    cvIta: "Italiano (PDF)"
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
  document.querySelectorAll('a[href$="CV_ENG.pdf"], a[href$="CV_ITA.pdf"]').forEach(a => {
    if (a.closest("#cv")) return;
    a.setAttribute("href", `assets/files/CV_${lang === "en" ? "ENG" : "ITA"}.pdf`);
  });
}

if (btn) {
  btn.addEventListener("click", () => {
    lang = (lang === "en") ? "it" : "en";
    applyI18n();
  });
}

applyI18n();

const repoGrid = document.getElementById("repoGrid");
if (repoGrid) {
  fetch("https://api.github.com/users/SamyAj987/repos?sort=updated&per_page=6")
    .then(r => r.ok ? r.json() : Promise.reject(r.status))
    .then(repos => {
      repoGrid.innerHTML = "";
      repos.filter(r => !r.fork).slice(0, 6).forEach(r => {
        const col = document.createElement("div");
        col.className = "col-12 col-md-6";
        col.innerHTML = `
          <div class="repo-card">
            <h4><a href="${r.html_url}" target="_blank" rel="noopener noreferrer">${r.name}</a></h4>
            <p class="small">${r.description ? r.description : ""}</p>
            <div class="pills">
              ${r.language ? `<span>${r.language}</span>` : ""}
              <span>★ ${r.stargazers_count}</span>
            </div>
          </div>`;
        repoGrid.appendChild(col);
      });
      if (!repoGrid.children.length) {
        repoGrid.innerHTML = '<p class="small">No public repos to show right now.</p>';
      }
    })
    .catch(() => {
      repoGrid.innerHTML = '<p class="small">GitHub repos unavailable — see profile link below.</p>';
    });
}
