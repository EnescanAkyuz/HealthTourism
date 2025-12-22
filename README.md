# HealthHaven - Premium Health Tourism Marketplace

HealthHaven is a demo platform connecting patients with top-rated global health tourism agencies.

## Features

- **Agency Marketplace**: Browse accredited clinics for Hair Transplant, Plastic Surgery, Dental, and more.
- **Smart Filtering**: Filter by treatment type, price range, and location.
- **Side-by-Side Comparison**: Compare up to 3 agencies on price, rating, and offerings.
- **Agency Profiles**: Detailed pages with reviews, treatments, and facility images.
- **Responsive Design**: Mobile-friendly interface with a premium aesthetic.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Vanilla CSS with CSS Variables (No TailwindCSS)
- **State**: React Context API + LocalStorage
- **Data**: Mock JSON data (extensible architecture)

## Assumptions & Design

- **Premium Aesthetic**: Focused on trust and cleanliness using Emerald/Teal tones.
- **Comparison Limit**: Restricted to 3 items to maintain mobile usability and cognitive load.
- **SEO First**: Agency detail pages are Server Components for optimal indexing.
- **Mock Data**: Real-world names used for realism, but all data is fictional.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components (Navbar, Cards, Filters).
- `context/`: Global state management.
- `data/`: Mock data and schema definitions.
- `styles/`: Global styles and design tokens.
