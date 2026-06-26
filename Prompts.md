# PROMPTS.md

# AI Prompt Engineering Documentation

## Project

**Prodesk IT – Responsive Digital Agency Landing Page**

This document contains the AI prompts used throughout the development process along with the corresponding code snippets generated during implementation.

---

# Prompt 1 – Create the HTML Structure

## Prompt

> Create a responsive landing page for a digital agency named **Prodesk IT** using semantic HTML5. The page should contain a fixed navigation bar, hero section with a background video, About section, Statistics section, Services section, Contact section, and Footer.

---

## Generated Code

```html
<header>
    <nav class="navbar">
        <div class="logo">Prodesk IT</div>

        <ul class="nav-links" id="navLinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div class="nav-actions">

            <button id="theme-toggle" class="theme-btn">
                <i class="fa-solid fa-moon"></i>
            </button>

            <button id="hamburger" class="hamburger">
                <i class="fa-solid fa-bars"></i>
            </button>

        </div>
    </nav>
</header>
```

### Description

Creates the responsive navigation bar with:

- Company logo
- Navigation links
- Dark mode button
- Hamburger menu

---

# Prompt 2 – Hero Section

## Prompt

> Design a professional hero section with a fullscreen background video, dark overlay, heading, company description and two CTA buttons.

---

## Generated Code

```html
<section class="hero">

    <video autoplay muted loop playsinline class="hero-video">

        <source src="assets/hero.mp4" type="video/mp4">

    </video>

    <div class="hero-overlay"></div>

    <div class="hero-content">

        <h1>
            We Build Digital Experiences That Drive Growth
        </h1>

        <p>
            Helping businesses scale with innovative web development.
        </p>

        <div class="hero-buttons">

            <a href="#services" class="cta-btn">
                Explore Services
            </a>

            <a href="#contact" class="secondary-btn">
                Contact Us
            </a>

        </div>

    </div>

</section>
```

### Description

Creates the landing page hero section with:

- Background video
- Overlay
- CTA buttons
- Responsive content

---

# Prompt 3 – Responsive Navigation CSS

## Prompt

> Write modern CSS for a fixed glassmorphism navigation bar with responsive behavior.

---

## Generated Code

```css
.navbar{

    position:fixed;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:16px 8%;

    background:rgba(255,255,255,.15);

    backdrop-filter:blur(12px);

    z-index:1000;

}

.nav-links{

    display:flex;
    gap:25px;
    list-style:none;

}
```

### Description

Provides styling for:

- Fixed navigation
- Glassmorphism effect
- Responsive layout

---

# Prompt 4 – Hero Styling

## Prompt

> Style the hero section with a fullscreen background video, overlay, responsive typography and modern buttons.

---

## Generated Code

```css
.hero{

    position:relative;
    min-height:100vh;

    display:flex;

    justify-content:center;

    align-items:center;

    text-align:center;

    color:white;

}

.hero-video{

    position:absolute;

    width:100%;

    height:100%;

    object-fit:cover;

}

.hero-overlay{

    position:absolute;

    inset:0;

    background:rgba(0,0,0,.65);

}
```

### Description

Creates the visual appearance of the hero section.

---

# Prompt 5 – Service Cards

## Prompt

> Create responsive service cards with hover animations.

---

## Generated Code

```css
.service-card{

    background:white;

    padding:35px;

    border-radius:20px;

    transition:.4s;

}

.service-card:hover{

    transform:translateY(-12px);

}
```

### Description

Implements animated service cards with hover effects.

---

# Prompt 6 – Dark Mode

## Prompt

> Implement Dark Mode using JavaScript by toggling a class on the body.

---

## Generated Code

```javascript
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});
```

### Description

Adds Dark Mode functionality.

---

# Prompt 7 – Mobile Navigation

## Prompt

> Implement a responsive hamburger menu using JavaScript.

---

## Generated Code

```javascript
const hamburger = document.getElementById("hamburger");

const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
```

### Description

Shows and hides the navigation menu on smaller devices.

---

# Prompt 8 – Auto Close Navigation

## Prompt

> Automatically close the mobile menu when a navigation link is clicked.

---

## Generated Code

```javascript
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});
```

### Description

Improves mobile usability by closing the menu after navigation.

---

# Prompt 9 – Responsive Layout

## Prompt

> Make the website fully responsive using media queries.

---

## Generated Code

```css
@media(max-width:768px){

.nav-links{

    display:none;

    flex-direction:column;

}

.nav-links.active{

    display:flex;

}

.hero h1{

    font-size:2.2rem;

}

}
```

### Description

Optimizes the layout for tablets and mobile devices.

---

# Prompt 10 – Documentation

## Prompt

> Generate a professional GitHub README.md for the project including installation, features, technologies used, folder structure, future enhancements, browser compatibility and license.

---

### Generated Output

- Professional README
- Installation Guide
- Feature List
- Folder Structure
- Future Scope
- License
- Contribution Guidelines

---

# AI Development Workflow

1. Planned the website layout.
2. Generated semantic HTML.
3. Styled using modern CSS.
4. Added responsive design.
5. Implemented JavaScript interactivity.
6. Added Dark Mode.
7. Improved UI/UX.
8. Generated project documentation.

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Font Awesome
- Google Fonts

---

# Author

**Shivani Sirohi**

MCA | Computer Science Educator | Front-End Web Developer

---