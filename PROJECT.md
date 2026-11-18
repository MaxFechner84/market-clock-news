# ExchangeDial — project status

Read this first in any session about ExchangeDial. Update it whenever something is done, decided or changed (edit the line, add the date).

> This repository is **public**. Keep passwords, email addresses, money figures and private plans out of this file.

Last updated: 2026-11-18

## What it is
- ExchangeDial (formerly "Market Clock"): shows which world stock exchanges are open and colours each region (Americas, Europe, Asia-Pacific) green / orange / red by how likely today's news is to move it.
- Language: English by default, with a language menu (EN, FR, ES, DE, RU, ZH). International audience, not France-focused.

## What exists
| Thing | Where | Status |
|---|---|---|
| Public website | https://exchangedial.com (GitHub Pages, this repo, `CNAME`) | Live, loads over HTTPS (checked 2026-11-18) |
| Domain | exchangedial.com | Bought |
| Site pages | `index.html` (home), `week.html` (week ahead), `markets/` (22 exchange pages EN + FR, hours & holidays) | Live |
| Installable web app | `manifest.webmanifest`, `sw.js`, icons | Live |
| SEO | `sitemap.xml`, `robots.txt`, `og.png` share image | Live |
| News feed | `news.json` (read by the site and the app) | Updated twice per weekday |
| Track record | `history.json` (each day's colour vs the actual market move) | Running since 2026-11-17 |
| Private Claude page | Claude artifact `3ea0e3e2-7f19-4d5b-a5dc-69238e12a689` (database `news/am`, `news/eu`, `news/as`) | Updated by the same runs |
| X account | @ExchangeDial | Created (per owner, 2026-11-18); profile not yet linked from the site |
| iPhone app | Started in Xcode | In progress |

## What the site does (home page, `index.html`)
- Live clock; language menu (English default, Français, Español, Deutsch, Русский, 中文); Auto/Light/Dark theme (both saved in the browser).
- Site texts are translated into all 6 languages on the home and week pages. News (headlines, notes, events) exists in English + French only; other languages show the English news, and the disclaimer says so.
- Exchange-hours pages (`markets/`) exist only in English and French.
- "Next to open" card with countdown; 11 exchanges grouped by region (NYSE, TSX · LSE, Xetra, Euronext Paris · TSE, HKEX, SSE, SGX, NSE, ASX) with open/closed status, lunch breaks, holidays and countdowns. Visitors can star exchanges to pin them first.
- Per region: colour level, note, market "pulse" line, up to 5 stories (source · date, sorted red → orange → green) and up to 5 events, all from `news.json`. Shows the update time and, once 5+ days are scored, the accuracy from `news.json`.
- Alerts: browser notification when a region turns red (opt-in; on iPhone only after "Add to Home Screen").
- "Share today": draws a 1200×630 image of today's colours and shares or downloads it (`exchangedial-YYYY-MM-DD.png`).
- Install button (web app), "Week ahead" link (`week.html`), "Exchange hours" link (`markets/`).
- Visitor analytics: Savri script.
- Footer on home and week pages: colour key, update time, exchange-hours links, AI/"not investment advice" disclaimer, link to @ExchangeDial. Exchange pages end with an "information only, not investment advice" line and the X link.
- Not on the site yet: newsletter sign-up, Pro offer.

## Automation (Claude scheduled tasks)
- **ExchangeDial news – morning**: weekdays 07:34 Paris. Redoes all three regions.
- **ExchangeDial news – US pre-open**: weekdays 14:17 Paris. Redoes Americas and Europe.
- Both run in the cloud (no access to the owner's Mac or its logged-in browser). Push notification on finish, summary in English.
- Market data: Alpha Vantage free key (25 calls/day shared by both runs) + web search.
- Scoring rules (tiers, size/timing/surprise points, red/orange/green thresholds) live in the task prompts.

## Decisions
- Name: ExchangeDial (chosen for a clean .com, same handle on X, no legal risk).
- Public website first, then the App Store.
- Repo keeps its old name `market-clock-news` (renaming could break the site and the tasks).

## To do
- [ ] Confirm "Enforce HTTPS" is ticked in GitHub → Settings → Pages (needs the owner's browser).
- [ ] Decide: should the news runs also write headlines in Spanish, German, Russian and Chinese?
- [ ] Exchange-hours pages in ES/DE/RU/ZH (22 → 66 pages).
- [x] Language menu with 6 languages, English default (2026-11-18).
- [x] Link @ExchangeDial on every page + `twitter:site` tag (2026-11-18).
- [ ] Review the X profile (picture, banner, bio, website link, pinned post) — needs the owner's browser or a screenshot.
- [ ] iPhone app.
- Business plans (launch tests, revenue ideas) are kept in Claude's private notes, not in this public file.

## Log
- 2026-11-15 Repo and `news.json` created.
- 2026-11-17 Public website added; rebranded to ExchangeDial; scheduled tasks created; HTTPS check run.
- 2026-11-18 Track record started scoring (17 Nov: 2/2 correct). Task summaries switched to English. Last "Market Clock" leftovers renamed. This file created.
- 2026-11-18 Site features reviewed and written into this file.
- 2026-11-18 Language menu: EN (default), FR, ES, DE, RU, ZH.
- 2026-11-18 X link and twitter:site tag added to all pages; disclaimer line added to exchange pages.
