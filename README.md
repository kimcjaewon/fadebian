# Fadebian — Landing page + Cal.com bookings

A modern, dark-mode landing page for Fabian Torres (Fadebian) with bookings handled by **Cal.com** (free, replaces Booksy). Built with Next.js + Tailwind, deploys to Vercel for free.

## What's in here

- **Landing page** at `/` — hero, services, reviews, hours, location, CTAs
- **Booking page** at `/book` — embeds Cal.com's booking widget. Customers pick service → date → time → confirm. Cal.com sends them an email confirmation.
- **No database, no admin code, no env vars.** Fadebian manages everything from his Cal.com dashboard.

## Setup — three things to do

### 1. Cal.com (~5 minutes)

Fadebian (or you, on his behalf) does this once:

1. Go to [cal.com/signup](https://cal.com/signup). Sign up with his email.
2. Pick username **`fadebian`** (or whatever — just match it in `lib/config.ts` if different).
3. Choose the **Free** plan ($0/month, unlimited bookings).
4. Connect his Google Calendar (or whichever he uses) so appointments show up on his phone.
5. **Set his availability:** Settings → Availability → set Mon–Fri 5:30–7:30 PM, Sat 10:15 AM–3:00 PM, Sun closed.
6. **Create six "Event Types"** — one per service. For each one, click **+ New Event Type** and use these exact values (the URL slug column matters — it has to match):

   | Event title | URL slug | Duration | Price (set in description) |
   |---|---|---|---|
   | Haircut | `haircut` | 30 min | $35 |
   | Haircut & Beard | `haircut-beard` | 45 min | $45 |
   | Haircut & Nose Wax | `haircut-nose-wax` | 45 min | $40 |
   | Nose Hair Wax | `nose-wax` | 15 min | $5 |
   | Highlights + Haircut | `highlights` | 90 min | $125 |
   | House Call | `house-call` | 150 min | $100+ |

   > Cal.com's free tier doesn't charge customers — leave the "Require payment" toggle off. Pricing is just shown in the description. Fadebian collects in person.

7. (Optional but recommended) Turn on **email reminders** to customers: Workflows → "Reminder Host & Attendees". Free tier includes unlimited emails.

That's it for Cal.com.

### 2. GitHub

1. Make a new private GitHub repo called `fadebian`.
2. From inside this folder, in Terminal:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/fadebian.git
   git push -u origin main
   ```

### 3. Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New** → **Project** → import your `fadebian` repo.
2. Click **Deploy**. No environment variables needed.
3. ~1 minute later, your site is live at `something.vercel.app`.

### 4. (Optional) Custom domain

Buy `fadebian.com` → in Vercel → Settings → Domains → add it. Vercel walks you through DNS.

## How Fadebian uses it day-to-day

- **He gets booked:** customer hits the site → clicks Book → picks service + time → done. Cal.com emails Fadebian and the customer.
- **He sees his day:** Cal.com dashboard, or just his Google Calendar on his phone (every booking auto-syncs).
- **He blocks off time:** Cal.com → Availability → Date overrides. Or just put a "busy" event on his Google Calendar — Cal.com respects it.
- **He cancels/reschedules:** From the Cal.com email he gets when a booking comes in.

## How to make changes

**Almost everything is in one file:** `lib/config.ts`

Open it to edit:
- Shop name, tagline, bio
- Phone, email, Instagram
- Address & hours
- Services (name, price, duration, description) — but if you change a slug here, change it in Cal.com too so they match
- Reviews shown on the landing page
- His Cal.com username (`calUsername`)

After editing, save the file. If you use git:
```bash
git add .
git commit -m "update prices"
git push
```
Vercel auto-deploys in ~30 seconds.

### Changing colors / fonts

- Colors: `tailwind.config.ts` — `accent` is the gold; `ink-*` are the grays.
- Fonts: `app/layout.tsx` (Google Fonts link) + `tailwind.config.ts`.

## Local development (optional)

```bash
npm install
npm run dev
```
Open <http://localhost:3000>.

## File map

```
fadebian-cal/
├── lib/config.ts          ← EDIT THIS for content changes
├── app/
│   ├── page.tsx           ← landing page
│   └── book/page.tsx      ← Cal.com embed page
├── components/
│   ├── Nav, Hero, Services, Reviews, Visit, CtaStrip, Footer
│   └── CalEmbed.tsx       ← Cal.com booking widget wrapper
└── README.md              ← you are here
```

## What's different from Booksy

| | Booksy | This setup |
|---|---|---|
| Cost | ~$30/month | $0 (Cal.com Free + Vercel Free + GitHub Free) |
| Customer fee | Yes | No |
| Custom landing page | No | Yes — fully branded |
| Custom domain | $$ | Free (you just buy the domain) |
| Calendar sync | Yes | Yes |
| Email reminders | Yes | Yes |
| SMS reminders | Yes (paid tier) | Paid add-on if needed |
| Payment processing | Booksy fee | Add Stripe later if wanted |

If Fadebian ever hires a second barber, Cal.com Teams plan is $15/user/month — still cheaper than Booksy.
