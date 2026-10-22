const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const dict = {
  en: {
    tagline: "Data Scientist, Risk Management and Economist - Public Debt Sustainability, Network Analysis, Inequality and Online Social Media",
    location: "Conegliano (TV), Italy",
    contactBtn: "Contact me",
    navAbout: "About",
    navProjects: "Projects",
    navApps: "Apps",
    appsTitle: "Apps",
    appsNote: "Two dashboards: WhaDSApp for stochastic public debt sustainability analysis and the EUMEPLAT media history dashboard, forty years of European press, radio, TV and internet data, explorable country by country.",
    appsReload: "Reload",
    appsFullscreen: "Fullscreen",
    appsLaunch: "Launch the app",
    appsOpenTab: "Open in a new tab",
    appsMixed: "This app is served over plain HTTP, so the browser will not embed it in a secure page. It opens in its own tab instead.",
    a1Title: "EUMEPLAT media history dashboard",
    a1Meta: "EU H2020 EUMEPLAT \u00b7 Ca' Foscari University of Venice \u00b7 2021\u20132022",
    a1Body: "How did Europeans inform and entertain themselves over the last forty years? The dashboard answers country by country and medium by medium (press, radio, TV, OTT, ICT), with choropleth maps, convergence clusters and descriptive statistics over data collected across the EUMEPLAT consortium. Built in R Shiny and published as EU H2020 deliverable D1.5.",
    recorded: "Recorded demo",
    a2Title: "WhaDSApp: Debt Sustainability Analysis dashboard",
    a2Meta: "GRINS Foundation, Spoke 4 · University of Palermo · 2024",
    a2Body: "WhaDSApp is an advanced interactive dashboard for conducting sophisticated Debt Sustainability Analysis (DSA). Using a comprehensive set of macroeconomic factors, it helps users autonomously evaluate the sustainability of a country's debt, built for financial analysts, government officials, policymakers, journalists and academic researchers. Entirely developed in Python with open-source libraries and the property software GAMS for advanced modelling.",
    appsCtaTitle: "Curious about the data behind it?",
    appsCtaBody: "Happy to walk through the sources, the methods, and what the numbers do and do not say.",
    navExperience: "Experience",
    navPublications: "Publications",
    navCV: "CV",
    heroTitle: "About",
    heroBody: "Economist by training, Data Scientist by practice. I have a PhD in Economics, Management and Statistics, Master's in Big Data Analytics & Social Mining amd MsC in Economics. I have 5+ years in designing end-to-end pipeline for data driven analysis on different topics; quantitative risk modeling, financial data, sovereing debt analysis, machine learning and NLP analysis for research and general audience.",
     // The work runs from stochastic models of public debt to NLP on Italian social media and forty years of European media data, and it usually ends in an app someone else can click through.",
    heroCv: "CV (PDF)",
    heroProjects: "What I work on",
    stat1: "conference talks and seminars",
    stat2: "interactive apps built and published",
    stat3: "EU-funded research projects",
    stat4: "publications, 2 with Bruegel",
    doTitle: "What I work on",
    domain1: "Risk management",
    domain2: "Data science",
    domain3: "Public finance",
    domain4: "Judicial efficiency",
    domain5: "Media analytics",
    domain6: "Credit risk",
    do1Title: "NLP & LLM pipelines",
    do1Body: "Text classification, NER, NLP and sentiment analysis on Italian and multilingual corpora with Machine Learning tools, Support Vector Machine, Neural Network, Naive Bayes, Random Forest; local open-source LLMs (Qwen, Deepseek) served with Ollama and vLLM; LLM skills and Claude Code implementation.",
    do2Title: "Risk & scenario modelling",
    do2Body: "Monte Carlo simulation with variance reduction for option pricing. Scenario and sensitivity analysis, CVaR tail-risk optimisation, ESG risk factors. Market data from FactSet and Refinitiv Eikon.",
    do3Title: "Tools I use",
    do3Body: "I work with Python (libraries Numpy, Pandas, PySpark, skLearn, Scipy, Spacy, Dash, BS4) and R (tidyverse, Shiny, R-Markdown, Lasso, plotly, ggplot2, data.table, caret), Stata (panel data and IV) and Gams (scenario analysis, numerical optimization). From API and raw data to app  ETL, Docker, deploy of dashboards e webapps.",
    skillsTitle: "Methods and tools",
    skillsProgTitle: "Programming & Engineering",
    skillsMLTitle: "Machine Learning",
    skillsNLPTitle: "NLP, LLM & Generative AI",
    skillsDataTitle: "Data Engineering & BI",
    skillsQuantTitle: "Quantitative Finance & Risk",
    contactTitle: "Contact me",
    contactBody: "A question, a comment, or just saying hi: all welcome.",
    projectsTitle: "Projects",
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
    p2Built: "Analysis across countries and media (Press, Radio, TV, OTT, ICT) and a public interactive dashboard with choropleth maps and descriptive statistics.",
    p2Result: "Published as EU H2020 deliverable D1.5, dashboard publicly available.",
    p3Title: "Just Smart project - Judicial efficiency analytics",
    p3Meta: "University of Palermo · 2022–2023",
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
    e1Role: "Researcher, Mathematical Method for economy and finance (STAT-04)",
    e1Org: "University of Palermo · GRINS project (Growing Resilient, Inclusive and Sustainable)",
    e1b1: "Engineered a stochastic simulation engine for debt sustainability analysis, with data ingestion from FactSet and Refinitiv Eikon.",
    e1b2: "Delivered WhatDSApp end to end (Dash, Plotly, Docker), deployed on the AMELIA cloud and adopted by consortium partners.",
    e1b3: "Used LLMs for ESG scoring, with model output checked against analyst judgement.",
    e1b4: "Wrote periodic reports on European public finance and a budget analysis of the US One Big Beautiful Bill Act for Bruegel.",
    e1b5: "Taught Mathematics for Business (84 hours per year), topics: calculus and financial mathematics.",
    e2Role: "Research Fellow, Economics (ECON-01)",
    e2Org: "University of Palermo Just Smart project (Smart Justice)",
    e2b1: "Managed data retrieval from Italian judicial repositories (SICID) for western Sicily courthouses.",
    e2b2: "Applied queueing analysis and survival models to quantify bottlenecks and processing times, feeding recommendations to court administration.",
    e3Role: "Research Fellow, Computer Science (INF-01)",
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
    ed2Org: "University of Pisa, Scuola Superiore Sant'Anna · thesis: option pricing with Monte Carlo and variance reduction techniques",
    ed3: "Bachelor's Degree in Economics and Finance",
    ed3Org: "University of Palermo · thesis: loan transfer and securitisation",
    trainTitle: "Additional training",
    pubTitle: "Publications",
    talksTitle: "Talks & community",
    speakingTitle: "Speaking",
    sem1: "Invited seminar, University of Pisa: \"Are Bad Governments a Threat to Sovereign Defaults?\" (Nov 2024)",
    reviewTitle: "Peer review & organisation",
    rev1: "Reviewer for PLoS ONE (since 2021) and Annals of Operations Research (since 2024)",
    org1: "Organising committee, XXVI Quantitative Finance Workshop, Palermo (Apr 2025)",
    org2: "Scientific committee, Frontiers in Stochastic Modelling for Finance, Palermo (Oct 2023)",
    cvTitle: "Curriculum Vitae",
    cvBody: "Full CV in English and Italian. Updated September 2026.",
    cvEng: "English (PDF)",
    cvIta: "Italiano (PDF)"
  },
  it: {
    tagline: "Data Scientist, Risk Management ed Economista - Sostenibilità del Debito Pubblico, Network Analysis, Disuguaglianza e Social Media",
    location: "Conegliano (TV), Italia",
    contactBtn: "Contattami",
    navAbout: "Profilo",
    navProjects: "Progetti",
    navApps: "Demo live",
    appsTitle: "Demo live",
    appsNote: "Due dashboard: WhaDSApp per l'analisi di sostenibilit\u00e0 del debito pubblico e la dashboard EUMEPLAT media history, quarant'anni di dati europei su stampa, radio, TV e internet, esplorabili paese per paese.",
    appsReload: "Ricarica",
    appsFullscreen: "Schermo intero",
    appsLaunch: "Avvia l'app",
    appsOpenTab: "Apri in una nuova scheda",
    appsMixed: "Questa app \u00e8 servita su HTTP semplice, quindi il browser non la incorpora in una pagina sicura. Si apre in una scheda dedicata.",
    a1Title: "Dashboard EUMEPLAT media history",
    a1Meta: "EU H2020 EUMEPLAT \u00b7 Universit\u00e0 Ca' Foscari Venezia \u00b7 2021\u20132022",
    a1Body: "Come si sono informati e divertiti gli europei negli ultimi quarant'anni? La dashboard risponde paese per paese e mezzo per mezzo (stampa, radio, TV, OTT, ICT), con mappe coropletiche, cluster di convergenza e statistiche descrittive sui dati raccolti dal consorzio EUMEPLAT. Sviluppata in R Shiny e pubblicata come deliverable EU H2020 D1.5.",
    recorded: "Demo registrata",
    a2Title: "WhaDSApp: dashboard di Debt Sustainability Analysis",
    a2Meta: "GRINS Foundation, Spoke 4 \u00b7 Universit\u00e0 degli Studi di Palermo \u00b7 2024",
    a2Body: "WhaDSApp \u00e8 una dashboard interattiva avanzata per condurre sofisticate analisi di sostenibilit\u00e0 del debito (DSA). Grazie a un ampio set di fattori macroeconomici, consente di valutare autonomamente la sostenibilit\u00e0 del debito di un paese; pensata per analisti finanziari, funzionari pubblici, policymaker, giornalisti e ricercatori accademici. Sviluppata interamente in Python con librerie open-source e il software proprietario GAMS per la modellazione avanzata.",
    appsCtaTitle: "Curiosit\u00e0 sui dati dietro la dashboard?",
    appsCtaBody: "Volentieri racconto fonti, metodi e cosa i numeri dicono e non dicono.",
    navExperience: "Esperienza",
    navPublications: "Pubblicazioni",
    navCV: "CV",
    heroTitle: "About",
    heroBody: "Economista per formazione, data scientist per lavoro: PhD in Economics, Management and Statistics, Master in Big Data Analytics & Social Mining. Ho 5+ anni di esperienza in creazione di flussi di lavoro per analisi data-driven con diversi domini di studio: modellazione del rischio, dati finanziari, analisi del debito pubblico, machine learning e analisi testuali per scopi di ricerca e per divulgazione",
    heroCv: "CV (PDF)",
    heroProjects: "Su cosa lavoro",
    stat1: "interventi a convegni e seminari",
    stat2: "app interattive costruite e pubblicate",
    stat3: "progetti di ricerca finanziati dall'UE",
    stat4: "pubblicazioni, 2 con Bruegel",
    doTitle: "Su cosa lavoro",
    domain1: "Risk management",
    domain2: "Data science",
    domain3: "Finanza pubblica",
    domain4: "Efficienza giudiziaria",
    domain5: "Media analytics",
    domain6: "Credit risk",
    do1Title: "Pipeline NLP & LLM",
    do1Body: "Classificazione del testo, NER e sentiment analysis su corpora italiani e multilingue con uso di Machine learning: Support Vector Machine, Neural Network, Naive Bayes, Random Forest. LLM open-source locali (Qwen, Deepseek) serviti con Ollama e vLLM; LLM con implementazione di Claude Code",
    do2Title: "Modelli di rischio e scenario",
    do2Body: "Simulazione Monte Carlo con riduzione della varianza, analisi di scenario e sensitività, ottimizzazione del rischio di coda (CVaR), fattori di rischio ESG. Dati di mercato da FactSet e Refinitiv Eikon.",
    do3Title: "Tools che uso",
    do3Body: "Lavoro con Python (Numpy, Pandas, PySpark, skLearn, Scipy, Spacy, Dash, BS4) and R (tidyverse, Shiny, R-Markdown, Lasso, plotly, ggplot2, data.table, caret), Stata (panel data and IV) and Gams (analisi di scenari, ottimizzazione numerica). API e repository grezzi a un'app funzionante: ETL, Docker, deploy su cloud di dashboard e webapp.",
    skillsTitle: "Metodi e strumenti",
    skillsProgTitle: "Programmazione & Engineering",
    skillsMLTitle: "Machine Learning",
    skillsNLPTitle: "NLP, LLM & AI Generativa",
    skillsDataTitle: "Data Engineering & BI",
    skillsQuantTitle: "Finanza Quantitativa & Rischio",
    contactTitle: "Contattami",
    contactBody: "Una domanda, un commento, o solo per salutare: scrivete pure.",
    projectsTitle: "Progetti",
    live: "Online",
    lblProblem: "Problema",
    lblBuilt: "Cosa ho costruito",
    lblResult: "Risultato",
    p1Meta: "Rischio del debito sovrano · progetto GRINS · 2023–2026",
    p1Problem: "Gli economisti dovevano testare come scelte fiscali e shock di mercato cambiano il profilo di rischio del debito pubblico, senza eseguire codice di simulazione.",
    p1Built: "Web app full-stack di supporto decisionale basata su un motore di simulazione stocastica (Monte Carlo, analisi di scenario e sensitività). Caricamento drag-and-drop di Excel multi-foglio, dati di mercato da FactSet e Refinitiv Eikon, fan chart e frontiera efficiente CVaR. Containerizzata con Docker e in produzione sulla piattaforma cloud AMELIA.",
    p1Result: "Adottata dai partner del consorzio GRINS per l'analisi di scenario sul debito; i modelli sottostanti supportano un articolo peer-reviewed (Risks 2024) e due pubblicazioni Bruegel.",
    p2Meta: "Analisi del mercato dei media · EU H2020 · 2021–2022",
    p2Problem: "Analisi del mercato dei media europei degli ultimi 40 anni con mappe interattive.",
    p2Built: "Dashboard per analisi dei media (stampa, radio, TV, OTT, ICT) con mappe e statistiche descrittive.",
    p2Result: "Pubblicata come deliverable EU H2020 D1.5.",
    p3Title: "Progetto Just Smart - Analisi dell'efficienza giudiziaria",
    p3Meta: "Università di Palermo · 2022–2023",
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
    e1Role: "Ricercatrice, Metodi matematici per l'economia e la finanza (STAT-04)",
    e1Org: "Università di Palermo · progetto GRINS (Growing Resilient, Inclusive and Sustainable)",
    e1b1: "Sviluppato un motore di simulazione stocastica per l'analisi di sostenibilità del debito, con acquisizione dati da FactSet e Refinitiv Eikon.",
    e1b2: "Realizzata WhatDSApp end-to-end (Dash, Plotly, Docker), in produzione sul cloud AMELIA e adottata dai partner del consorzio.",
    e1b3: "Usati LLM per lo scoring ESG, con output verificato rispetto al giudizio degli analisti.",
    e1b4: "Redatti report periodici sulla finanza pubblica europea e un'analisi del One Big Beautiful Bill Act statunitense per Bruegel.",
    e1b5: "Docente di Matematica per l'Azienda (84 ore l'anno). Analisi e matematica finanziaria",
    e2Role: "Assegnista di ricerca, Economia (ECON-01)",
    e2Org: "Università di Palermo · progetto Just Smart (Giustizia Smart)",
    e2b1: "Gestita l'estrazione dati dai repository giudiziari (SICID) per i tribunali della Sicilia occidentale.",
    e2b2: "Applicati teoria delle code e modelli di sopravvivenza per quantificare colli di bottiglia e tempi, a supporto delle raccomandazioni per l'amministrazione giudiziaria.",
    e3Role: "Assegnista di ricerca, Informatica (INF-01)",
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
    pubTitle: "Pubblicazioni",
    talksTitle: "Talk & community",
    speakingTitle: "Interventi",
    sem1: "Seminario su invito, Università di Pisa: \"Are Bad Governments a Threat to Sovereign Defaults?\" (nov 2024)",
    reviewTitle: "Peer review & organizzazione",
    rev1: "Revisore per PLoS ONE (dal 2021) e Annals of Operations Research (dal 2024)",
    org1: "Comitato organizzativo, XXVI Quantitative Finance Workshop, Palermo (apr 2025)",
    org2: "Comitato scientifico, Frontiers in Stochastic Modelling for Finance, Palermo (ott 2023)",
    cvTitle: "Curriculum Vitae",
    cvBody: "CV completo in inglese e italiano. Aggiornato a settembre 2026.",
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
  if (btn) btn.textContent = (lang === "en") ? "🇮🇹" : "🇬🇧";
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
