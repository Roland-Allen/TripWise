# TripWise – Smart Travel Planner

> **Frontend Track** · Recruitment Task

A responsive, feature-complete travel planning web app built with **React + Vite**, **Tailwind CSS**, and **React Router**.  
Plan your perfect trip: explore destinations, check live weather, and build a personal itinerary—all in your browser.

---

## ✨ Features

| Feature | Detail |
|---------|--------|
| 🌍 City search | Geocodes any city name via Geoapify Geocoding API |
| 🏛️ Category filter | Attractions, Museums, Parks, Restaurants, Beaches, Religious Sites |
| 🔤 Sort | Distance from centre, Name A–Z / Z–A |
| 📋 Place cards | Name, category, address, distance badge, "View details" & "Add to trip" |
| 📄 Place details | Full info + Open-Meteo live weather |
| ✈️ My Trip | Persistent itinerary (localStorage), remove & clear-all |
| ❄️ Landing page | PixelSnow WebGL background, fade-out transition to Explore |
| ⚡ Loading states | Skeleton cards on Explore, spinners on Details |
| ⚠️ Error states | Retry button for any API failure |
| 📭 Empty states | Friendly messages for no results / empty itinerary |
| 📱 Responsive | Mobile-first, hamburger nav on small screens |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | React Router v6 |
| Places & Geocoding | [Geoapify](https://www.geoapify.com/) (Places API, Geocoding API, Place Details API) |
| Weather | [Open-Meteo](https://open-meteo.com/) (free, no key needed) |
| Snow effect | [PixelSnow by React Bits](https://reactbits.dev) |

---

## 🗂 Project Structure

```
src/
├── api/
│   ├── geoapify.js          # All Geoapify API calls
│   └── weather.js           # Open-Meteo weather
├── components/
│   ├── Navbar.jsx            # Sticky responsive navbar
│   ├── SearchBar.jsx         # Debounced search input
│   ├── Filters.jsx           # Category pills + sort dropdown
│   ├── PlaceCard.jsx         # Card in the Explore grid
│   ├── SkeletonCard.jsx      # Loading placeholder
│   ├── EmptyState.jsx        # Zero-results message
│   ├── ErrorState.jsx        # Error + Retry button
│   ├── Footer.jsx            # API attribution links
│   ├── PixelSnow.jsx         # WebGL snow effect
│   └── PixelSnow.css
├── context/
│   └── ItineraryContext.jsx  # Global trip state
├── hooks/
│   ├── useLocalStorage.js    # localStorage wrapper (crash-safe)
│   └── usePlaces.js          # Geocode + fetch + sort pipeline
└── pages/
    ├── Landing.jsx           # Hero page with PixelSnow + "Add Travel"
    ├── Explore.jsx           # Home: search, filters, card grid
    ├── PlaceDetails.jsx      # Single place + weather
    ├── MyTrip.jsx            # Itinerary list
    └── NotFound.jsx          # 404
```

---

## 🚀 Setup & Run

### 1. Prerequisites
- [Node.js ≥ 18](https://nodejs.org/)
- A free [Geoapify API key](https://myprojects.geoapify.com/)

### 2. Clone & install

```bash
git clone <repo-url>
cd tripwise
npm install
```

### 3. Environment variables

Copy `.env.example` to `.env` and fill in your key:

```bash
cp .env.example .env
```

```env
VITE_GEOAPIFY_KEY=your_geoapify_api_key_here
```

> **Never commit `.env`** — it is already in `.gitignore`.

### 4. Run the dev server

```bash
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 5. Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 🌐 API Details & Attribution

| API | Endpoint(s) | Key required | Attribution |
|-----|-------------|-------------|-------------|
| **Geoapify Geocoding** | `https://api.geoapify.com/v1/geocode/search` | Yes (`VITE_GEOAPIFY_KEY`) | © Geoapify |
| **Geoapify Places** | `https://api.geoapify.com/v2/places` | Yes | © Geoapify |
| **Geoapify Place Details** | `https://api.geoapify.com/v2/place-details` | Yes | © Geoapify |
| **Open-Meteo** | `https://api.open-meteo.com/v1/forecast` | None | CC BY 4.0 |

Attribution links are shown in the app footer on every page.

---

## 📸 Screenshots to capture

- [ ] **Explore** — default Paris load, card grid visible
- [ ] **Search / filter results** — e.g. "Tokyo" + Museums filter
- [ ] **Details page** — full place info + weather widget
- [ ] **Populated My Trip** — 3+ places in the itinerary
- [ ] **Empty state** — My Trip with no places saved
- [ ] **Error state** — invalid/missing API key message with Retry button
- [ ] **Mobile: Explore** — hamburger nav open on narrow screen
- [ ] **Mobile: Details** — stacked layout
- [ ] **Mobile: My Trip** — list on narrow screen
- [ ] **Landing page** — PixelSnow background with "Add Travel" button

---

## 🔒 Security

- API key is **never hardcoded** — read exclusively from `import.meta.env.VITE_GEOAPIFY_KEY`
- `.env` is listed in `.gitignore`
- All external links use `rel="noopener noreferrer"`
