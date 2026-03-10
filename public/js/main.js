/* ============================================
   SAQIB HUSSAIN — PORTFOLIO JS (Carlos Theme)
   ============================================ */

/* ——— PORTFOLIO DATA (Admin-friendly: add items here) ——— */
const portfolioItems = [
    // GRAPHIC DESIGN
    { id: 1, cat: "graphic-design", title: "Movie Poster Design", desc: "Creative movie poster concept.", img: "assets/portfolio/graphic-design/poster-02.jpg", tools: ["Photoshop", "Illustrator"] },
    { id: 2, cat: "graphic-design", title: "Behance Showcase", desc: "Portfolio presentation for Behance.", img: "assets/portfolio/graphic-design/poster-03.jpg", tools: ["Photoshop", "InDesign"] },
    { id: 3, cat: "graphic-design", title: "K2 Branding Poster", desc: "Large-format branding poster.", img: "assets/portfolio/graphic-design/poster-04.jpg", tools: ["Illustrator", "Photoshop"] },
    { id: 4, cat: "graphic-design", title: "Master Tiles Key Visual", desc: "Key visual for marketing campaign.", img: "assets/portfolio/graphic-design/poster-05.jpg", tools: ["Photoshop", "Illustrator"] },
    { id: 5, cat: "graphic-design", title: "Exhibition Standee", desc: "Roll-up standee for trade show.", img: "assets/portfolio/graphic-design/poster-06.jpg", tools: ["Illustrator", "Photoshop"] },
    { id: 6, cat: "graphic-design", title: "Personal Branding Poster", desc: "Creative self-branding poster.", img: "assets/portfolio/graphic-design/poster-01.jpg", tools: ["Photoshop", "Illustrator"] },
    // SOCIAL MEDIA
    { id: 7, cat: "social-media", title: "Master Tiles Campaign", desc: "Social media campaign for premium ceramics.", img: "assets/portfolio/social-media/social-01.jpg", tools: ["Photoshop", "Strategy"] },
    { id: 8, cat: "social-media", title: "Product Showcase Post", desc: "Engaging post design with product focus.", img: "assets/portfolio/social-media/social-02.jpg", tools: ["Photoshop", "Lightroom"] },
    { id: 9, cat: "social-media", title: "Brand Awareness Content", desc: "Content to increase brand visibility.", img: "assets/portfolio/social-media/social-03.jpg", tools: ["Photoshop", "Content"] },
    { id: 10, cat: "social-media", title: "Social Media Carousel", desc: "Multi-slide carousel post design.", img: "assets/portfolio/social-media/social-04.jpg", tools: ["Photoshop", "Illustrator"] },
    { id: 11, cat: "social-media", title: "Promotional Post Design", desc: "Promotional post for seasonal marketing.", img: "assets/portfolio/social-media/social-05.jpg", tools: ["Photoshop", "Canva"] },
    { id: 12, cat: "social-media", title: "Engagement Post", desc: "Interactive content to boost engagement.", img: "assets/portfolio/social-media/social-06.jpg", tools: ["Photoshop", "Analytics"] },
    // BRANDING
    { id: 13, cat: "branding", title: "Sazgar QR Code Branding", desc: "Custom branded QR code for showroom.", img: "assets/portfolio/branding/branding-01.jpg", tools: ["Illustrator", "InDesign"] },
    { id: 14, cat: "branding", title: "Corporate Leaflet — Front", desc: "Brand identity leaflet design.", img: "assets/portfolio/branding/branding-02.jpg", tools: ["InDesign", "Photoshop"] },
    { id: 16, cat: "branding", title: "BAIC Wall Branding", desc: "Environmental branding for automobile showroom.", img: "assets/portfolio/branding/branding-04.jpg", tools: ["Illustrator", "3D"] },
    { id: 17, cat: "branding", title: "Haval Showroom Exterior", desc: "Large-format showroom branding.", img: "assets/portfolio/branding/branding-05.jpg", tools: ["Illustrator", "Photoshop"] },
    { id: 18, cat: "branding", title: "Waiting Room Design", desc: "Interior waiting room branding.", img: "assets/portfolio/branding/branding-06.jpg", tools: ["Photoshop", "Illustrator"] },
    // UI/UX
    { id: 19, cat: "uiux", title: "C-Travel App — Home", desc: "Modern travel booking mobile app.", img: "assets/portfolio/uiux/uiux-01.png", tools: ["Figma", "Photoshop"] },
    { id: 21, cat: "uiux", title: "RR Furniture — Home", desc: "E-commerce furniture website UI.", img: "assets/portfolio/uiux/uiux-03.jpg", tools: ["Figma", "Photoshop"] },
    { id: 23, cat: "uiux", title: "Food Delivery App", desc: "Vibrant food delivery app UI.", img: "assets/portfolio/uiux/uiux-05.png", tools: ["Figma", "Illustrator"] },
    { id: 24, cat: "uiux", title: "Taste Share App", desc: "Social food sharing platform.", img: "assets/portfolio/uiux/uiux-06.png", tools: ["Adobe XD", "Photoshop"] },
    // PRINT MEDIA
    { id: 25, cat: "print-media", title: "Haval Brochure Cover", desc: "Premium automotive brochure cover.", img: "assets/portfolio/print-media/print-01.jpg", tools: ["InDesign", "Photoshop"] },
    { id: 27, cat: "print-media", title: "Final Catalogue Design", desc: "Catalogue with brand language.", img: "assets/portfolio/print-media/print-03.jpg", tools: ["InDesign", "Illustrator"] },
    // WEB DESIGN
    { id: 31, cat: "web-design", title: "Corporate Website", desc: "Modern responsive corporate design.", img: "assets/portfolio/web-design/web-01.jpg", tools: ["Figma", "HTML/CSS"] },
    { id: 32, cat: "web-design", title: "Product Landing Page", desc: "High-conversion landing page.", img: "assets/portfolio/web-design/web-02.jpg", tools: ["WordPress", "Photoshop"] },
    { id: 33, cat: "web-design", title: "Service Website", desc: "Professional services website.", img: "assets/portfolio/web-design/web-03.jpg", tools: ["Figma", "WordPress"] },
    { id: 34, cat: "web-design", title: "E-Commerce Design", desc: "Feature-rich e-commerce layout.", img: "assets/portfolio/web-design/web-04.jpg", tools: ["Photoshop", "WooCommerce"] },
    { id: 35, cat: "web-design", title: "Sazgar Automotive Site", desc: "Full brand website.", img: "assets/portfolio/web-design/web-05.jpg", tools: ["Figma", "WordPress"] },
    { id: 36, cat: "web-design", title: "Portfolio Website", desc: "Clean portfolio showcase.", img: "assets/portfolio/web-design/web-06.jpg", tools: ["HTML/CSS", "JS"] },
    // PHOTOGRAPHY
    { id: 37, cat: "photography", title: "Product Photography", desc: "Professional product shoot.", img: "assets/portfolio/photography/photo-01.jpg", tools: ["Canon DSLR", "Lightroom"] },
    { id: 38, cat: "photography", title: "Showroom Photography", desc: "Architectural showroom shoot.", img: "assets/portfolio/photography/photo-02.jpg", tools: ["Canon DSLR", "Photoshop"] },
    { id: 39, cat: "photography", title: "Lifestyle Product Shot", desc: "Lifestyle product photography.", img: "assets/portfolio/photography/photo-03.jpg", tools: ["DSLR", "Lightroom"] },
    { id: 40, cat: "photography", title: "Interior Display", desc: "Interior photography of displays.", img: "assets/portfolio/photography/photo-04.jpg", tools: ["Canon EOS", "Lightroom"] },
    { id: 41, cat: "photography", title: "Product Close-up", desc: "Detail close-up photography.", img: "assets/portfolio/photography/photo-05.jpg", tools: ["Macro Lens", "Lightroom"] },
    { id: 42, cat: "photography", title: "Exhibition Setup", desc: "Documentation photography.", img: "assets/portfolio/photography/photo-06.jpg", tools: ["DSLR", "Photoshop"] },
    // EXHIBITIONS
    { id: 43, cat: "exhibitions", title: "Exhibition Stand", desc: "Exhibition stand design.", img: "assets/portfolio/exhibitions/exhibit-01.jpg", tools: ["3D Max", "Photoshop"] },
    { id: 44, cat: "exhibitions", title: "Trade Show Booth", desc: "Custom booth with branding.", img: "assets/portfolio/exhibitions/exhibit-02.jpg", tools: ["3D Max", "Illustrator"] },
    { id: 45, cat: "exhibitions", title: "Gallery Display", desc: "Showroom display setup.", img: "assets/portfolio/exhibitions/exhibit-03.jpg", tools: ["3D Render", "Photoshop"] },
    { id: 46, cat: "exhibitions", title: "Exhibition Signage", desc: "Way-finding signage design.", img: "assets/portfolio/exhibitions/exhibit-04.jpg", tools: ["Illustrator", "Fabrication"] },
    { id: 47, cat: "exhibitions", title: "Interactive Display", desc: "Interactive stand with digital.", img: "assets/portfolio/exhibitions/exhibit-05.jpg", tools: ["3D Max", "Digital"] },
    { id: 48, cat: "exhibitions", title: "Event Branding", desc: "Complete event branding.", img: "assets/portfolio/exhibitions/exhibit-06.jpg", tools: ["Illustrator", "Photoshop"] },
    // VIDEO
    { id: 49, cat: "video", title: "Promotional Ad", desc: "High-impact promotional video.", img: "assets/portfolio/web-design/web-05.jpg", tools: ["Premiere", "After Effects"] },
    { id: 50, cat: "video", title: "Cinematic Showcase", desc: "Cinematic product showcase.", img: "assets/portfolio/photography/photo-02.jpg", tools: ["Premiere", "Color Grading"] },
    { id: 51, cat: "video", title: "Social Media Campaign", desc: "Short-form video content.", img: "assets/portfolio/social-media/social-01.jpg", tools: ["After Effects", "Illustrator"] }
];


/* ——— INIT ——— */
document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initMobileMenu();
    initReveal();
    initCountUp();
    initPortfolio();
    initLightbox();
    initContactForm();
    initSkillBars();
    initBadgeText();
});


/* ——— HEADER scroll ——— */
function initHeader() {
    const header = document.getElementById("header");
    const links = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", scrollY > 60);
        updateActiveNav();
    });

    links.forEach(l => l.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(l.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
    }));
}

function updateActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const y = scrollY + 200;
    sections.forEach(s => {
        const id = s.id;
        const top = s.offsetTop, h = s.offsetHeight;
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        if (y >= top && y < top + h) {
            document.querySelector(`.nav-link[data-section="${id}"]`)?.classList.add("active");
        }
    });
}


/* ——— MOBILE MENU ——— */
function initMobileMenu() {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("mobileMenu");
    const links = menu.querySelectorAll(".mobile-link");

    burger.addEventListener("click", () => {
        burger.classList.toggle("open");
        menu.classList.toggle("open");
        document.body.style.overflow = menu.classList.contains("open") ? "hidden" : "";
    });

    links.forEach(l => l.addEventListener("click", (e) => {
        if (l.getAttribute("href")?.startsWith("#")) {
            e.preventDefault();
            document.querySelector(l.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
        }
        burger.classList.remove("open");
        menu.classList.remove("open");
        document.body.style.overflow = "";
    }));
}


/* ——— SCROLL REVEAL ——— */
function initReveal() {
    const els = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(el => observer.observe(el));
}


/* ——— COUNT UP ——— */
function initCountUp() {
    const nums = document.querySelectorAll("[data-count]");
    let fired = false;
    function go() {
        if (fired) return;
        const first = nums[0];
        if (!first || first.getBoundingClientRect().top > innerHeight * .85) return;
        fired = true;
        nums.forEach(n => {
            const target = +n.dataset.count;
            let cur = 0;
            const step = target / 120;
            const iv = setInterval(() => {
                cur += step;
                if (cur >= target) { cur = target; clearInterval(iv); }
                n.textContent = Math.floor(cur);
            }, 16);
        });
    }
    addEventListener("scroll", go);
    go();
}


/* ——— PORTFOLIO ——— */
function initPortfolio() {
    const grid = document.getElementById("worksGrid");
    const btns = document.querySelectorAll(".filter");
    render("all");
    btns.forEach(b => b.addEventListener("click", () => {
        btns.forEach(x => x.classList.remove("active"));
        b.classList.add("active");
        render(b.dataset.filter);
    }));

    function render(filter) {
        grid.innerHTML = "";
        const items = filter === "all" ? portfolioItems : portfolioItems.filter(i => i.cat === filter);
        items.forEach((item, idx) => {
            const card = document.createElement("div");
            card.className = "work-card";
            card.style.animationDelay = `${idx * .04}s`;
            card.innerHTML = `
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        <div class="work-zoom"><i class="fa-solid fa-expand"></i></div>
        <div class="work-overlay">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
          <div class="work-tags">${item.tools.map(t => `<span class="work-tag">${t}</span>`).join("")}</div>
        </div>`;
            card.addEventListener("click", () => openLightbox(item, items));
            grid.appendChild(card);
        });
    }
}


/* ——— LIGHTBOX ——— */
let lbItems = [], lbIdx = 0;

function initLightbox() {
    const lb = document.getElementById("lightbox");
    document.getElementById("lbClose").onclick = closeLb;
    document.getElementById("lbPrev").onclick = () => navLb(-1);
    document.getElementById("lbNext").onclick = () => navLb(1);
    lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
    addEventListener("keydown", e => {
        if (!lb.classList.contains("open")) return;
        if (e.key === "Escape") closeLb();
        if (e.key === "ArrowLeft") navLb(-1);
        if (e.key === "ArrowRight") navLb(1);
    });
}

function openLightbox(item, items) {
    lbItems = items; lbIdx = items.findIndex(i => i.id === item.id);
    updateLb();
    document.getElementById("lightbox").classList.add("open");
    document.body.style.overflow = "hidden";
}
function closeLb() {
    document.getElementById("lightbox").classList.remove("open");
    document.body.style.overflow = "";
}
function navLb(d) { lbIdx = (lbIdx + d + lbItems.length) % lbItems.length; updateLb(); }
function updateLb() {
    const i = lbItems[lbIdx];
    document.getElementById("lbImg").src = i.img;
    document.getElementById("lbImg").alt = i.title;
    document.getElementById("lbCaption").textContent = `${i.title} — ${i.desc}`;
}


/* ——— CONTACT FORM ——— */
function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", async e => {
        e.preventDefault();
        const btn = document.getElementById("submitBtn");
        const label = btn.querySelector(".btn-label");
        const spin = btn.querySelector(".btn-loading");
        const msg = document.getElementById("formMsg");
        label.style.display = "none"; spin.style.display = "inline-flex";
        btn.disabled = true; msg.className = "form-msg"; msg.style.display = "none";

        const data = { name: form.name.value, email: form.email.value, subject: form.subject.value, message: form.message.value };
        try {
            const res = await fetch("/api/contact", {
                method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data)
            });
            const r = await res.json();
            msg.className = r.success ? "form-msg ok" : "form-msg err";
            msg.textContent = r.message; msg.style.display = "block";
            if (r.success) form.reset();
        } catch {
            msg.className = "form-msg err"; msg.textContent = "Network error. Try again."; msg.style.display = "block";
        }
        label.style.display = "inline"; spin.style.display = "none"; btn.disabled = false;
    });
}


/* ——— SKILL BARS ——— */
function initSkillBars() {
    const list = document.querySelector(".skill-list");
    if (!list) return;
    const fills = list.querySelectorAll(".skill-fill");
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                fills.forEach(f => {
                    setTimeout(() => { f.style.width = f.dataset.w + "%"; }, 500);
                });
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    obs.observe(list);
}


/* ——— ROTATING BADGE TEXT ——— */
function initBadgeText() {
    const el = document.getElementById("badgeRing");
    if (!el) return;
    const text = el.textContent;
    el.textContent = "";
    const chars = text.split("");
    const step = 360 / chars.length;
    chars.forEach((c, i) => {
        const span = document.createElement("span");
        span.textContent = c;
        span.style.cssText = `position:absolute;left:50%;top:0;transform-origin:0 250%;transform:rotate(${step * i}deg);display:inline-block;font-size:inherit;color:inherit;letter-spacing:inherit;`;
        el.appendChild(span);
    });
}
