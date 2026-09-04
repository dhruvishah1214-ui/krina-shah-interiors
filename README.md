# 🏡 Krina Shah Interiors — Official Studio Website

A luxury, high-converting, and fun portfolio website designed for **Krina Shah** to showcase her interior architecture, spotlight her flagship ongoing residential estate project, engage clients with an interactive style quiz, and capture consultation inquiries via WhatsApp.

---

## ✨ Features & Highlights

1. **🏛️ Flagship Live Project Spotlight**:
   - Dedicated showcase of the massive 12,000+ sq.ft. private estate currently under transformation.
   - Interactive **"Trust the Process"** tracker (Demolition → Millwork & Stone Sourcing → Custom Furniture → Champagne Reveal).
   - High-resolution sneak peek gallery of architectural renders and on-site spaces.

2. **🔮 30-Second "What's Your Interior Vibe?" Quiz**:
   - Playful interactive quiz calculating visitor aesthetic (Quiet Luxury Minimalist, Warm Earthy Modern, Moody Cosmopolitan Glam, Sunlit Organic Haven).
   - Confetti celebration + personalized color palette chips.
   - 1-Click WhatsApp routing sending their aesthetic straight to Krina.

3. **🛋️ Curated Portfolio Gallery**:
   - Filterable by *All Projects*, *Estates*, *Living*, *Kitchen & Dining*, *Master Suites*.
   - Interactive modal popup with high-res photos, architectural features, and funny notes.

4. **📐 Interactive Dream Space Builder**:
   - Clients tap their spaces, choose their vibe and timeline, and generate a pre-formatted project brief ready to send to Krina.

5. **✨ "Behind the Blueprints" (Meet Krina)**:
   - Bio, design superpower cards, render fuel (coffee!), and her personal design rules.

6. **💬 Direct 1-Click WhatsApp & Consultation Booking**:
   - Direct WhatsApp integration formatted with pre-filled messages across every section.
   - Comprehensive consultation inquiry form for detailed client requests.
   - Floating WhatsApp pulse button on every page.

---

## 🛠️ How to Customize Info (Quick Start)

All studio info, phone numbers, WhatsApp, projects, images, and text can be edited in a single file:

📁 **`src/data/siteConfig.ts`**

- To change Krina's WhatsApp number: update `contact.phoneRaw` and `contact.phoneDisplay`.
- To change photos: replace the image URLs in `flagshipProject.sneakPeekImages` or `portfolio`.
- To edit her bio or fun facts: update `brand.founder`.

---

## 🚀 Running Locally

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploying to GitHub & Vercel

### 1. Push to GitHub
If you haven't created a GitHub repo yet:
1. Go to [github.com/new](https://github.com/new)
2. Name your repo: `krina-shah-interiors`
3. Leave it Public or Private, and click **Create repository**
4. Run these commands in your terminal:
   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/krina-shah-interiors.git
   git branch -M main
   git push -u origin main
   ```

### 2. Host for Free on Vercel
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Select your `krina-shah-interiors` repository and click **Import**.
4. Leave all default settings as-is (Vercel auto-detects Next.js).
5. Click **Deploy**!
6. Your live website will be up with a free `.vercel.app` URL and free SSL (https://), and you can connect a custom domain (e.g. `krinashahinteriors.com`) anytime.
