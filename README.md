# For You

A small, cinematic website that tells one story: how you noticed her, the little
things you like about her, the moments you remember, and finally, the confession
itself. Built with plain HTML, CSS, and JavaScript. No frameworks, no build step,
no backend.

It is **not** a girlfriend site, an anniversary page, or a Valentine's template —
there's no pretending you're already together. It's a "here's how I've been
feeling, and I wanted you to know" kind of page.

---

## 1. Run it on Windows

You don't need to install anything to just look at it:

1. Unzip / copy the `crush-confession` folder anywhere on your computer.
2. Double-click `index.html`. It will open in your default browser.

That's enough to preview it. For editing with live-reload, use the Live Server
method below instead — double-clicking the file directly can block audio/some
image loading behavior in a few browsers.

## 2. Open it with VS Code Live Server

1. Install [VS Code](https://code.visualstudio.com/) if you don't have it.
2. Open the `crush-confession` folder in VS Code (`File → Open Folder…`).
3. Install the **Live Server** extension (by Ritwick Dey) from the Extensions
   panel (`Ctrl+Shift+X`, search "Live Server").
4. Right-click `index.html` in the file explorer and choose
   **"Open with Live Server."**
5. Your browser opens automatically at something like
   `http://127.0.0.1:5500/index.html`, and the page reloads every time you save.

## 3. Where to put photos

Put your images inside:

```
assets/images/
```

Recommended files to add (you can rename these, just update the paths in
`script.js` to match):

```
hero.jpg        → the main full-screen photo (Section 01 — Her)
moment-01.jpg   → photo for your first "noticed you" moment
moment-02.jpg   → photo for a second moment (optional, add more freely)
photo-01.jpg    → gallery photos (add 6–15 for the best effect)
photo-02.jpg
photo-03.jpg
...
```

Use decent-resolution photos (at least 1200px on the long edge) but compress
them first — JPEG quality ~75–85% keeps the page fast. Tools like
[squoosh.app](https://squoosh.app) work well and need no install.

## 4. Where to put music (optional)

Put an MP3 file here:

```
assets/music/our-song.mp3
```

Then open `script.js`, find the `music` block near the top of `SITE_CONFIG`,
and set:

```javascript
music: {
    enabled: true,
    title: "Our Song",
    source: "assets/music/our-song.mp3"
}
```

Music never autoplays — a small player appears in the bottom-right corner and
she chooses whether to press play.

## 5. Where to change her name

Open `script.js` and edit the top of `SITE_CONFIG`:

```javascript
names: {
    her: "[HER NAME]",
    you: "[YOUR NAME]"
}
```

Replace `her` with her actual name. It's used automatically throughout the
page (the hero title and the letter's greeting).

## 6. Where to change your name

Same block as above — replace `you` with your name. It's used for the
signature at the end of the letter and the final "one last thing" section.

## 7. Where to add observations ("the little things")

Still in `script.js`, find the `observations` array:

```javascript
observations: [
    "The way you smile when you're genuinely happy...",
    "..."
]
```

Each string is one line item. Delete the placeholders and write real,
specific things you've actually noticed. Specific beats poetic — "the way you
laugh at your own jokes before you finish telling them" will always land
better than a generic compliment.

## 8. Where to add moments

There are two separate moment sections, both in `script.js`:

- `moments` — "When I first noticed you." One or two entries about how this
  started, each with a `date`, `title`, `text`, and `image`.
- `remember` — "Moments I remember." Small, ordinary things — a conversation,
  a random day — each with a `date`, `title`, `text`, and an optional `image`
  (leave `image: ""` to skip the photo for that one).

Add as many entries to either array as you want; the page lays them out
automatically.

## 9. Where to write the confession

In `script.js`, find:

```javascript
confession: {
    paragraphs: [
        "I've been trying to figure out how to say this...",
        "..."
    ]
}
```

Each string becomes one paragraph in the letter. Replace the placeholder
paragraph (marked `[YOUR REAL MESSAGE...]`) with what you actually want to
say. Keep the tone honest and low-pressure — the page is built around "I
liked you, I wanted you to know," not an ask for anything back.

You can also set `contact` near the bottom of `SITE_CONFIG` if you want the
"I have something to say" button at the very end to open something specific,
like `"mailto:you@example.com"` or an Instagram link. Leave it as `null` to
just show a warm text reply instead.

## 10. Deploy to GitHub Pages

1. Create a new GitHub repository (public or private, either works with
   GitHub Pages on a paid plan; public is simplest and free).
2. Push this folder's contents to the repository:
   ```
   git init
   git add .
   git commit -m "for you"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. On GitHub, go to the repository's **Settings → Pages**.
4. Under "Build and deployment," set **Source** to "Deploy from a branch,"
   branch `main`, folder `/ (root)`.
5. Save. GitHub gives you a URL like
   `https://YOUR_USERNAME.github.io/YOUR_REPO/` within a minute or two.

Vercel and Netlify both work the same way — connect the repo (or drag-and-drop
the folder in Netlify's dashboard), leave the build command empty, and set the
output directory to the project root.

---

## File structure

```
crush-confession/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── images/
    │   ├── hero.jpg
    │   ├── moment-01.jpg
    │   ├── moment-02.jpg
    │   ├── photo-01.jpg … photo-06.jpg
    └── music/
        └── our-song.mp3
```

---

## Final checklist

```
[ ] Replace her name
[ ] Replace my name
[ ] Add hero photo
[ ] Add 8–15 photos to the gallery
[ ] Add genuine observations ("the little things")
[ ] Add real moments (both "noticed you" and "remember")
[ ] Write the personal confession paragraphs
[ ] Add an optional song (or leave music disabled)
[ ] Test on an actual phone, not just a resized browser window
[ ] Scroll through the whole thing once, start to finish
[ ] Check the final reveal and letter open correctly
[ ] Deploy and open the live link yourself before sending it
```

A couple of honest notes: keep the confession short enough that it reads as
something you'd actually say out loud, and try it on your own phone before
you send the link — that's the device she'll almost certainly open it on.
