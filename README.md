# Tóth Bence – AI tanácsadó | weboldal
Frissítés: Calendly link beállítva.

Statikus, egyoldalas landing page (tiszta HTML/CSS/JS, build lépés nélkül), Vercelre optimalizálva.

## Fájlstruktúra

```
index.html          teljes oldal (fejléc, hero, szekciók, lábléc)
css/style.css        design rendszer + reszponzív stílusok
js/main.js           mobil navigáció, scroll-effektek, Calendly popup, GYIK
assets/favicon.svg    márkajel / favicon
vercel.json          statikus deploy beállítások
```

## Mielőtt élesítené

1. **Calendly-link csere** – ✅ már beállítva: `https://calendly.com/bence-tothbenceai/ingyenes-ai-audit`
   az `index.html`-ben (és a `data-calendly-url` attribútumokban).
   A "Beszéljük át..." szekció inline beágyazása a `calendly-inline-widget` div `data-url` paraméterében van.
2. **Profilkép** – az "Rólam" szekcióban jelenleg egy monogram-jelölő van a fotó helyén
   (`<!-- Cserélje ki egy professzionális fotóra: assets/toth-bence.jpg -->`). Töltsön fel egy fotót
   az `assets` mappába, majd cserélje a `.portrait-mark` span-t egy `<img>`-re.
3. **Kapcsolati adatok** – a lábléc előtti Kapcsolat szekcióban cserélje az e-mail címet
   (`bence@tothbence-ai.hu`) és a LinkedIn-linket a valódiakra.
4. **Konkrét szakmai adatok** – az "Rólam" szöveg szándékosan nem tartalmaz kitalált számokat
   (pl. ügyfélszám, tapasztalati évek). Ha vannak valós, ellenőrizhető adatai, érdemes beépíteni őket.

## Helyi megtekintés

Nincs build lépés. Bármelyik statikus szerverrel megnyitható, például:

```bash
npx serve .
```

## Deploy Vercelre

1. Töltse fel ezt a mappát egy Git repóba (GitHub/GitLab/Bitbucket).
2. Vercel dashboardon: **Add New → Project**, válassza ki a repót.
3. Framework preset: **Other** (statikus site, nincs build parancs, nincs output mappa megadva).
4. Deploy.

Alternatívaként a Vercel CLI-vel:

```bash
npm i -g vercel
vercel
```
