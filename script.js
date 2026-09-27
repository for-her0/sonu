/* =========================================================

   FOR YOU — configuration + behavior

   Everything you need to personalize lives in SITE_CONFIG below.

   ========================================================= */



const SITE_CONFIG = {



  names: {

    her: "Sanjana",

    you: "Harsh"

  },



  hero: {

    image: "assets/images/hero.jpg"

  },



  // "When I first noticed you" — one or more entries.

  // Not a relationship timeline. Just moments you personally remember.

 moments: [
{
  date: "The first time",

  title: "Somewhere between then and now, you became fav.",

  text: "Honestly, I don't remember the exact day it happened. I just remember that one day you were just someone I knew, and then suddenly you became someone I wanted to know more. Your little habits, your random talks, your smile  everything started staying in my mind. I never planned to feel this way, it just happened... and I'm glad it did.",

  image: "assets/images/moment-01.jpg"
},
  {
    date: "somewhere in between",
    title: "Then it was your eyes.",
    text: "Something about the way they hold a moment a little longer than most. I noticed it once, almost by accident, and then I kept noticing it  like my mind had quietly decided this was worth remembering.",
    image: "assets/images/moment-02.jpg"
  }
],

  // "The little things" — short, specific observations.

  observations: [
    "Your eyes. I don't think you realize what they do.",
    "That smile that somehow makes an ordinary moment feel different.",
    "The little expressions you make without even noticing.",
    "How talking to you never feels like enough.",
    "The fact that a pink lily is your favorite flower somehow feels very you."
  ],

  // Photo story — asymmetric editorial gallery.

  // "span" controls layout: "large" | "wide" | "portrait" | "small" | default.

  gallery: [

    { image: "assets/images/photo-01.jpg", caption: "That smile.", span: "large" },

    { image: "assets/images/photo-02.jpg", caption: "I don't think you realize how good this photo is.", span: "small" },

    { image: "assets/images/photo-03.jpg", caption: "This one, too.", span: "small" },

    { image: "assets/images/photo-04.jpg", caption: "A completely ordinary day.", span: "wide" },

    { image: "assets/images/photo-05.jpg", caption: "This is the one I keep coming back to.", span: "portrait" },

    { image: "assets/images/photo-06.jpg", caption: "Just this.", span: "small" }

  ],



  // "Moments I remember" — vertical timeline. No fake milestones.

  remember: [
    {
      date: "The first time I tried flirting with you",
      title: "I still remember it.",
      text: "I don't know if I played it cool, but I definitely remember being a little more nervous than I wanted you to know.",
      image: ""
    },
    {
      date: "Now",
      title: "Somewhere between then and now, you became someone I really like.",
      text: "We're still figuring things out, and I like that. I just wanted you to know what you've quietly come to mean to me.",
      image: ""
    }
  ],

  // "Things I like about you" — 6 to 10 feels right.

  reasons: [
    "Your eyes.",
    "Your smile.",
    "The little things you do without realizing.",
    "How easy you are to talk to.",
    "Your energy.",
    "The way you make ordinary moments feel special.",
    "And honestly... just you."
  ],

  // The confession itself. Write this part for real.

  confession: {
    paragraphs: [
      "Sonu, I don't really know when it happened, but somewhere along the way, I started liking you.",
      "Maybe it started back in school, sitting behind you in class. Maybe it was your eyes. Maybe it was all those little things that slowly made you special to me.",
      "I just wanted you to know how I feel. No pressure, no expectations. Just me being honest with you. ❤️"
    ]
  },

  music: {

    enabled: false,

    title: "Our song",

    source: "assets/music/our-song.mp3"

  },



  // Optional: where "I have something to say" points people.

  // Set to a mailto:, Instagram link, or leave as null to just show a text response.

  contact: null

};





/* =========================================================

   RENDER — fills the page from SITE_CONFIG

   ========================================================= */



function renderNames() {

  document.querySelectorAll("#herNameDisplay, #letterHerName").forEach(el => {

    el.textContent = SITE_CONFIG.names.her;

  });

  const closing = document.getElementById("letterClosing");

  const lastSign = document.getElementById("lastSign");

  if (closing) closing.textContent = `— ${SITE_CONFIG.names.you}`;

  if (lastSign) lastSign.textContent = `— ${SITE_CONFIG.names.you}`;

  document.title = `For ${SITE_CONFIG.names.her}`;

}



function renderHero() {

  const heroImg = document.getElementById("heroImg");

  const lastImg = document.getElementById("lastImg");

  if (heroImg && SITE_CONFIG.hero.image) heroImg.src = SITE_CONFIG.hero.image;

  if (lastImg && SITE_CONFIG.hero.image) lastImg.src = SITE_CONFIG.hero.image;

}



function renderMoments() {

  const track = document.getElementById("momentsTrack");

  if (!track) return;

  track.innerHTML = SITE_CONFIG.moments.map((m, i) => `

    <article class="moment reveal-up" style="--d:${i}">

      <div class="moment-media">

        <img src="${m.image}" alt="" loading="lazy" />

      </div>

      <div class="moment-copy">

        <p class="moment-date">${m.date}</p>

        <h3 class="moment-title">${m.title}</h3>

        <p class="moment-text">${m.text}</p>

      </div>

    </article>

  `).join("");

}



function renderObservations() {

  const list = document.getElementById("observationsList");

  if (!list) return;

  list.innerHTML = SITE_CONFIG.observations.map((text, i) => `

    <li class="observation reveal-up" style="--d:${i * 0.6}">

      <span class="observation-index">${String(i + 1).padStart(2, "0")}</span>

      <span class="observation-text">${text}</span>

    </li>

  `).join("");

}



function renderGallery() {

  const grid = document.getElementById("galleryGrid");

  if (!grid) return;

  grid.innerHTML = SITE_CONFIG.gallery.map((item, i) => `

    <figure class="gallery-item reveal-up" style="--d:${i * 0.4}" data-span="${item.span || ""}">

      <button type="button" data-index="${i}" aria-label="View photo: ${item.caption || "photo"}">

        <img src="${item.image}" alt="${item.caption || ""}" loading="lazy" />

      </button>

      <figcaption class="gallery-caption">${item.caption || ""}</figcaption>

    </figure>

  `).join("");



  grid.querySelectorAll("button[data-index]").forEach(btn => {

    btn.addEventListener("click", () => openLightbox(Number(btn.dataset.index)));

  });

}



function renderRemember() {

  const track = document.getElementById("rememberTrack");

  if (!track) return;

  track.innerHTML = SITE_CONFIG.remember.map((m, i) => `

    <div class="remember-item reveal-up" style="--d:${i}">

      <p class="remember-date">${m.date}</p>

      <h3 class="remember-title">${m.title}</h3>

      <p class="remember-text">${m.text}</p>

      ${m.image ? `<div class="remember-media"><img src="${m.image}" alt="" loading="lazy" /></div>` : ""}

    </div>

  `).join("");

}



function renderReasons() {

  const list = document.getElementById("reasonsList");

  if (!list) return;

  list.innerHTML = SITE_CONFIG.reasons.map((text, i) => `

    <li class="reason reveal-up" style="--d:${i * 0.5}">

      <span class="reason-index">${String(i + 1).padStart(2, "0")}</span>

      <span class="reason-text">${text}</span>

    </li>

  `).join("");

}



function renderLetter() {

  const body = document.getElementById("letterBody");

  if (!body) return;

  body.innerHTML = SITE_CONFIG.confession.paragraphs.map(p => `<p>${p}</p>`).join("");

}



function renderMusic() {

  const player = document.getElementById("musicPlayer");

  const audio = document.getElementById("musicAudio");

  const label = document.getElementById("musicLabel");

  if (!SITE_CONFIG.music.enabled) return;

  player.hidden = false;

  audio.src = SITE_CONFIG.music.source;

  label.textContent = SITE_CONFIG.music.title;

}





/* =========================================================

   LIGHTBOX

   ========================================================= */

let lastFocused = null;



function openLightbox(index) {

  const item = SITE_CONFIG.gallery[index];

  if (!item) return;

  const lightbox = document.getElementById("lightbox");

  document.getElementById("lightboxImg").src = item.image;

  document.getElementById("lightboxImg").alt = item.caption || "";

  document.getElementById("lightboxCaption").textContent = item.caption || "";

  lastFocused = document.activeElement;

  lightbox.hidden = false;

  document.getElementById("lightboxClose").focus();

  document.body.style.overflow = "hidden";

}



function closeLightbox() {

  document.getElementById("lightbox").hidden = true;

  document.body.style.overflow = "";

  if (lastFocused) lastFocused.focus();

}





/* =========================================================

   GATE (entrance)

   ========================================================= */

function initGate() {

  const gate = document.getElementById("gate");

  const lines = gate.querySelectorAll("[data-line]");

  const enterBtn = document.getElementById("enterBtn");

  const story = document.getElementById("story");



  lines.forEach((line, i) => {

    setTimeout(() => line.classList.add("is-shown"), 500 + i * 1300);

  });



  enterBtn.addEventListener("click", () => {

    gate.classList.add("gate--hidden");

    story.hidden = false;

    document.body.style.overflow = "";

    setTimeout(() => {

      gate.remove();

      initReveal(); // re-scan now that story is visible

    }, 1150);

  });



  document.body.style.overflow = "hidden";

}





/* =========================================================

   SCROLL REVEAL

   ========================================================= */

let revealObserver;



function initReveal() {

  if (revealObserver) revealObserver.disconnect();



  revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("is-visible");

        revealObserver.unobserve(entry.target);

      }

    });

  }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });



  document.querySelectorAll(".reveal-up, .reveal-img").forEach(el => {

    revealObserver.observe(el);

  });

}





/* =========================================================

   PROGRESS RAIL

   ========================================================= */

function initProgress() {

  const fill = document.getElementById("progressFill");

  if (!fill) return;

  const update = () => {

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;

    const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

    fill.style.width = `${Math.min(100, Math.max(0, pct))}%`;

  };

  window.addEventListener("scroll", update, { passive: true });

  update();

}





/* =========================================================

   LETTER OPEN

   ========================================================= */

function initLetter() {

  const btn = document.getElementById("openLetterBtn");

  const letter = document.getElementById("letter");

  if (!btn || !letter) return;

  btn.addEventListener("click", () => {

    letter.hidden = false;

    btn.classList.add("is-hidden");

    letter.scrollIntoView({ behavior: "smooth", block: "center" });

  });

}





/* =========================================================

   ONE LAST THING

   ========================================================= */

function initLastThing() {

  const btn = document.getElementById("lastThingBtn");

  const stage = document.getElementById("lastStage");

  const reveal = document.getElementById("lastReveal");

  if (!btn) return;

  btn.addEventListener("click", () => {

    stage.style.display = "none";

    reveal.hidden = false;

  });

}





/* =========================================================

   FINAL CHOICE

   ========================================================= */

function initChoice() {

  const cuteBtn = document.getElementById("choiceCute");

  const sayBtn = document.getElementById("choiceSay");

  const response = document.getElementById("choiceResponse");

  if (!cuteBtn || !sayBtn) return;



  cuteBtn.addEventListener("click", () => {

    response.textContent = "That's more than enough. Thank you for reading this.";

  });



  sayBtn.addEventListener("click", () => {

    if (SITE_CONFIG.contact) {

      window.location.href = SITE_CONFIG.contact;

    } else {

      response.textContent = "I'd really like to hear it. Whenever you're ready.";

    }

  });

}





/* =========================================================

   MUSIC PLAYER

   ========================================================= */

function initMusic() {

  const toggle = document.getElementById("musicToggle");

  const audio = document.getElementById("musicAudio");

  const icon = document.getElementById("musicIcon");

  if (!toggle || !audio) return;



  toggle.addEventListener("click", () => {

    if (audio.paused) {

      audio.play().catch(() => {});

      icon.innerHTML = "&#10073;&#10073;";

      toggle.setAttribute("aria-label", "Pause song");

    } else {

      audio.pause();

      icon.innerHTML = "&#9658;";

      toggle.setAttribute("aria-label", "Play song");

    }

  });

}





/* =========================================================

   LIGHTBOX EVENTS

   ========================================================= */

function initLightboxEvents() {

  const closeBtn = document.getElementById("lightboxClose");

  const lightbox = document.getElementById("lightbox");

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) closeLightbox();

  });

  document.addEventListener("keydown", (e) => {

    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();

  });

}





/* =========================================================

   INIT

   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  renderNames();

  renderHero();

  renderMoments();

  renderObservations();

  renderGallery();

  renderRemember();

  renderReasons();

  renderLetter();

  renderMusic();



  initGate();

  initProgress();

  initLetter();

  initLastThing();

  initChoice();

  initMusic();

  initLightboxEvents();

});
