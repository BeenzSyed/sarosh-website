# How to Update Your Website — saroshforhutto.com

Hi Sarosh! This guide will walk you through how to make common updates to your campaign website. You only need to edit **one file** for most changes: `index.html`. You'll do this directly on GitHub in your web browser — no software to install.

---

## How to Edit Files on GitHub

1. Go to your repository on GitHub (github.com — find the `sarosh-website` repo)
2. Click on the file you want to edit (usually `index.html`)
3. Click the **pencil icon** (top right of the file) to start editing
4. Make your changes (see sections below)
5. Scroll to the bottom, type a short note describing what you changed (e.g., "Updated tagline")
6. Click **"Commit changes"**
7. Your website will update automatically within 1–2 minutes

---

## Your Website Files (What's What)

| File | What It Does |
|------|-------------|
| `index.html` | All the text, links, and structure of your website. **This is the main file you'll edit.** |
| `styles.css` | Controls colors, fonts, and layout. You probably won't need to touch this. |
| `main.js` | Makes the mobile menu and signup form work. Don't edit this. |
| `sarosh.png` | Your headshot photo |
| `family.jpeg` | Photo of you with your father and brothers |
| `couple.jpeg` | Photo of you and your wife |
| `favicon.svg` | The small hippo icon that shows up in the browser tab |
| `CNAME` | Connects the site to saroshforhutto.com. Don't edit this. |

---

## Common Updates

### Change Your Campaign Tagline

Find this line (around line 90):

```html
<p class="hero-tagline">Affordable Today. Growing Strong for Tomorrow.</p>
```

Replace the text between `>` and `</p>` with your new tagline.

---

### Update the "About" Section Text

Look for `OUR JOURNEY TO HUTTO` (around line 108). The paragraphs below it are your about text. Each paragraph is wrapped in `<p>` and `</p>` tags:

```html
<p>My family's journey began with my father...</p>
```

To change the text, edit the words between `<p>` and `</p>`. To add a new paragraph, copy the pattern:

```html
<p>Your new paragraph text goes here.</p>
```

---

### Update Your Story Sections

Your story is broken into chapters. Each chapter looks like this:

```html
<div class="chapter">
  <h3>CHAPTER TITLE HERE</h3>
  <p>Paragraph text here.</p>
  <p>Another paragraph here.</p>
</div>
```

The four chapters are:
1. **GROWING UP** (around line 126)
2. **A LIFE SHAPED BY WORK AND ECONOMIC REALITY** (around line 138)
3. **SERVICE, FAITH, AND COMMUNITY ENGAGEMENT** (around line 152)
4. **WHY I'M RUNNING** (around line 162)

Edit the text between `<p>` and `</p>` in any chapter.

---

### Update Your Priorities / Platform

Your four priorities start around line 183. Each one looks like this:

```html
<div class="priority-item">
  <div class="priority-number">01</div>
  <div class="priority-content">
    <h3>EDUCATION &amp; WORKFORCE</h3>
    <p>Description text here</p>
  </div>
</div>
```

- Change the title in `<h3>...</h3>`
- Change the description in `<p>...</p>`
- **Note:** If you need an `&` symbol, type `&amp;` instead (this is how HTML handles the & character)

To **add a fifth priority**, copy one of the existing blocks, paste it after the last one, change the number to `05`, and update the title and description.

---

### Change the Donate Link

Find this line (around line 260):

```html
<a href="https://secure.actblue.com/donate/sarosh-jafri-1" ...>DONATE</a>
```

Replace the URL inside `href="..."` with your new donation link.

---

### Update Contact Email

Find this line (around line 282):

```html
<a href="mailto:info@saroshforhutto.com">info@saroshforhutto.com</a>
```

Change both the `mailto:` address and the displayed text to your new email.

---

### Replace a Photo

1. On GitHub, click **"Add file"** > **"Upload files"**
2. Upload your new image
3. **Important:** Name it exactly the same as the old one (`sarosh.png`, `family.jpeg`, or `couple.jpeg`) to replace it. If you use a different name, you'll also need to update the reference in `index.html`.

**Tips for photos:**
- Use `.jpeg` or `.png` format
- Try to keep file sizes under 2 MB for fast loading
- If adding a brand new image, upload it, then add this line in `index.html` where you want it:
  ```html
  <img src="your-new-photo.jpeg" alt="Description of the photo">
  ```

---

### Add a New Section

Copy the pattern of an existing section. The basic structure is:

```html
<section class="section" id="new-section">
  <div class="container">
    <h2 class="section-title center">YOUR SECTION TITLE</h2>
    <div class="title-underline center-line"></div>
    <p>Your text here.</p>
  </div>
</section>
```

Paste it in `index.html` between existing sections (above the `<!-- Footer -->` line). If you want it in the navigation menu, also add a link in the `<ul class="nav-links">` area near the top:

```html
<li><a href="#new-section">NEW SECTION</a></li>
```

Make sure the `#new-section` matches the `id="new-section"` on your section.

---

## Quick Reference — HTML Cheat Sheet

| What You Want | What to Type |
|---------------|-------------|
| A paragraph | `<p>Your text here.</p>` |
| Bold text | `<strong>bold text</strong>` |
| A link | `<a href="https://example.com">Click here</a>` |
| A heading | `<h3>Heading Text</h3>` |
| An image | `<img src="photo.jpeg" alt="Description">` |
| An & symbol | `&amp;` |
| A line break | `<br>` |

---

## Things to Avoid

- **Don't delete lines that start with `<div`, `<section`, `</div>`, or `</section>`** — these control the page layout. Deleting them can break the site.
- **Don't edit `main.js` or `styles.css`** unless you know what you're doing.
- **Don't change the CNAME file** — it's what connects your domain name.
- **If the site looks broken after an edit**, go to GitHub, find your recent commit, and click "Revert" to undo it.

---

## Need Help?

If something goes wrong or you want to make a bigger change, reach out to Sabeen and she can help!
