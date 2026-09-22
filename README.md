# Ahmed Elevator Systems & Spare Parts

> High-performance, responsive multi-step quotation and equipment sourcing platform for commercial, residential, and industrial elevator machinery. Owned and managed by **Tarek Ahmed**.

[![React](https://img.shields.io/badge/React-19.x-black?style=flat&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-black?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-black?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-6.x-black?style=flat&logo=vite)](https://vite.dev)
[![Standards](https://img.shields.io/badge/Standards-EN81--20%20%2F%20EN81--50-black?style=flat)](#standards--certifications)
[![Direct Contact](https://img.shields.io/badge/Proprietor-Tarek%20Ahmed-black?style=flat)](mailto:cma.2011plus@gmail.com)

---

## 🏗️ System Overview

This web application delivers an industrial, high-contrast monochrome design system built for precision engineering procurement. It streamlines customer inquiries, component selection, real-time quotation calculation, and direct supplier inquiry dispatch.

### 🌟 Key Features

1. **Strict Monochrome & Industrial UI System**:
   - High-contrast black and white palette (`#000000`, `#0A0A0A`, `#121212`, `#FFFFFF`, `#737373`).
   - Clean industrial sans-serif typography (Space Grotesk display headings, Inter UI, and JetBrains Mono for specs).
   - Precision CAD-style vector schematics with dimension markings for all catalog components.

2. **Step 1: Client Onboarding & Project Inquiry**:
   - Intake form capturing Full Name, Company / Building Name, Phone Number, Email, and Elevator Brand/Model (Otis, Schindler, KONE, Mitsubishi, Thyssenkrupp, Generic).
   - Maintenance diagnostics textarea and urgency level flags (Standard, Priority, Emergency Shutdown).
   - Field validation with accessible error messaging and automatic local state persistence.

3. **Step 2: Interactive Elevator Parts Catalog**:
   - Real-time search across part names, part codes, specifications, and manufacturer compatibility.
   - Category filtering (*Motors & Traction*, *Door Systems*, *Ropes & Suspension*, *Safety & Braking*, *Electronics & Controls*, *Shaft & Mechanical*).
   - CAD blueprint inspection modal with 1:1 vector schematics, regulatory standards, and OEM compatibility matrices.
   - Persistent floating sticky **Active Quote Summary** sidebar with dynamic subtotals and quantity adjusters.

4. **Step 3: Quotation Review & Owner Contact**:
   - Comprehensive client profile and itemized parts table with quantities, unit prices, line subtotals, and grand USD total.
   - **Direct Inquiry Email**: Pre-populates an automatic `mailto:` link to `cma.2011plus@gmail.com` with formatted subject and body.
   - **Copy Order Details**: One-click clipboard copy of the formal text quotation with toast feedback.
   - **Download PDF / Print**: Print-optimized CSS (`@media print`) rendering a formal commercial quotation document with company letterhead.

---

## ⚙️ Catalog Dataset & Reference Pricing

| Part Code | Component Name | Technical Specifications | Reference Price (USD) |
|---|---|---|---|
| `GTM-55-630` | **Geared Traction Machine / Motor** | 5.5 kW, 1.0 m/s, 400V 3-Phase, for 630 kg passenger elevator | **$1,850.00** |
| `DOS-VVVF-800` | **Door Operator System (Complete Header)** | VVVF automatic center-opening / side-opening 2-panel operator (800mm clear opening) | **$520.00** |
| `TWR-10-819` | **Elevator Traction Steel Wire Ropes** | 10mm 8x19S+FC dual tensile steel core rope (Price per 100m reel) | **$290.00** |
| `OSG-BD-160` | **Bi-directional Overspeed Governor** | Rated speed 1.0 m/s – 1.6 m/s, cast iron pulley with safety switch | **$210.00** |
| `PSG-1000-16` | **Instantaneous / Progressive Safety Gear Pair** | Rated load up to 1000 kg, 9mm–16mm guide rail thickness | **$340.00** |
| `HYB-EN81-175` | **Hydraulic / Oil Buffer** | Stroke length 80mm–175mm, rated speed ≤ 1.6 m/s, EN81 certified | **$145.00** |
| `COP-SS304-TFT` | **Complete Car Operating Panel (COP)** | Brushed 304 stainless steel, dot-matrix/TFT display, braille buttons | **$380.00** |
| `ECC-VVVF-380` | **Integrated Elevator Control Cabinet** | 380V VVVF microprocessor inverter controller with motherboard & ARD support | **$1,450.00** |
| `GSS-PU-4PC` | **Guide Shoe Set (Car & Counterweight)** | 10mm & 16mm roller guide shoes with replaceable polyurethane inserts (Set of 4) | **$115.00** |
| `DLC-194-IR` | **Infrared Door Light Curtain (Safety Sensor)** | 194 infrared beam multi-point protection screen, 20mm–1800mm detection height | **$95.00** |

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State Management:** React Context API + `localStorage` persistence

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/SIndbad-7/tarek-ahmed-elevator-parts.git

# Enter project directory
cd tarek-ahmed-elevator-parts

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📞 Direct Inquiries & Procurement

For genuine elevator spare parts, emergency dispatch, and custom mechanical engineering inquiries:

- **Proprietor:** Tarek Ahmed
- **Official Email:** [cma.2011plus@gmail.com](mailto:cma.2011plus@gmail.com)
- **Compliance:** EN81-20 / EN81-50 Standard Certified
