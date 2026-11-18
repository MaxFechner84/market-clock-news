# ExchangeDial — project status

Read this first in any session about ExchangeDial. Update it whenever something is done, decided or changed (edit the line, add the date).

> This repository is **public**. Keep passwords, email addresses, money figures and private plans out of this file.

Last updated: 2026-11-18

## What it is
- ExchangeDial (formerly "Market Clock"): shows which world stock exchanges are open and colours each region (Americas, Europe, Asia-Pacific) green / orange / red by how likely today's news is to move it.
- Language: English first, with an English/French switch on the site. International audience, not France-focused.

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
- [ ] Link @ExchangeDial from the site footer and add the `twitter:site` tag.
- [ ] Review the X profile (picture, banner, bio, website link, pinned post) — needs the owner's browser or a screenshot.
- [ ] iPhone app.
- Business plans (launch tests, revenue ideas) are kept in Claude's private notes, not in this public file.

## Log
- 2026-11-15 Repo and `news.json` created.
- 2026-11-17 Public website added; rebranded to ExchangeDial; scheduled tasks created; HTTPS check run.
- 2026-11-18 Track record started scoring (17 Nov: 2/2 correct). Task summaries switched to English. Last "Market Clock" leftovers renamed. This file created.
