"use client";

import { useState } from "react";

/* ───────── data ───────── */

const modules = [
  {
    num: "01",
    title: "Introduction to Cross-Border Shipping",
    points: [
      "Why ship internationally — the opportunity for SG businesses",
      "How international shipping works: the journey of a parcel",
      "Key players: shipper, carrier, customs broker, receiver",
      "Common mistakes first-time shippers make",
    ],
  },
  {
    num: "02",
    title: "Choosing the Right Shipping Service",
    points: [
      "FedEx service types: Priority, Economy, Connect Plus",
      "Delivery timeframes by region from Singapore",
      "Cost factors: weight, dimensions, volumetric weight",
      "When to use which service for maximum savings",
    ],
  },
  {
    num: "03",
    title: "Understanding FedEx Charges",
    points: [
      "How FedEx calculates cost — base rate + fuel surcharge",
      "Dimensional weight vs actual weight (L×W×H ÷ 5000)",
      "Common surprise charges: residential, remote area, address correction",
      "FedEx billing reconciliation — why your final charge can differ",
      "Protecting yourself with photo evidence on ShipAnywhere",
    ],
  },
  {
    num: "04",
    title: "Preparing Your Shipment",
    points: [
      "Packaging do's and don'ts for international transit",
      "Labelling requirements and best practices",
      "Measuring and weighing correctly to avoid surcharges",
      "Prohibited and restricted items by country",
      "Dangerous goods basics",
    ],
  },
  {
    num: "05",
    title: "Customs & Trade Documents",
    points: [
      "What is customs clearance and how it works",
      "Commercial invoices — what to include",
      "HS codes — how to find the right classification",
      "Electronic Trade Documents (ETD) vs paper",
      "Common customs delays and how to avoid them",
    ],
  },
  {
    num: "06",
    title: "Duties, Taxes & Compliance",
    points: [
      "Singapore GST on exports (zero-rated)",
      "Destination country duties and taxes explained",
      "DDP vs DDU — who pays and when",
      "De minimis thresholds by country",
      "Export compliance and restricted destinations",
    ],
  },
  {
    num: "07",
    title: "Shipping Costs & Pricing Strategy",
    points: [
      "Understanding your quote breakdown",
      "Fuel surcharges and additional charges",
      "How to price shipping into your products",
      "Tips to save money: volumetric vs actual weight",
      "How ShipAnywhere saves you 40–60% on FedEx rates",
    ],
  },
  {
    num: "08",
    title: "Tracking, Pickups & Delivery",
    points: [
      "Scheduling FedEx pickups from your location",
      "Real-time tracking and status codes explained",
      "What to do when a shipment is delayed or stuck",
      "Delivery attempts and package holds",
      "Handling returns and reverse logistics",
    ],
  },
  {
    num: "09",
    title: "Spotting Fraudulent Orders",
    points: [
      "Red flags: mismatched addresses, rush shipping",
      "High-risk countries and product categories",
      "Address verification techniques",
      "Payment fraud signals: stolen cards, chargebacks",
      "What to do when you suspect fraud",
    ],
  },
  {
    num: "10",
    title: "Scaling Your Shipping Operations",
    points: [
      "Batch shipping with CSV upload",
      "Shopify integration for automated order import",
      "Analytics and spend tracking dashboard",
      "Photo evidence for billing protection",
      "Building shipping into your daily workflow",
    ],
  },
  {
    num: "11",
    title: "Hands-On: Ship Your First Parcel",
    points: [
      "Live walkthrough on ShipAnywhere platform",
      "Get a quote, create a shipment, print labels",
      "Generate customs documents automatically",
      "Schedule a FedEx pickup",
      "Track your parcel in real time",
    ],
  },
];

const testimonials = [
  {
    name: "Sarah Lim",
    role: "Founder, Artisan Soaps SG",
    quote:
      "Before this course I was terrified of shipping overseas. Now I confidently ship to 12 countries every week using ShipAnywhere.",
  },
  {
    name: "David Tan",
    role: "Owner, TechParts Asia",
    quote:
      "The module on FedEx charges alone saved me hundreds of dollars. Understanding dimensional weight changed how I package everything.",
  },
  {
    name: "Michelle Wong",
    role: "E-commerce Manager, Heritage Teas",
    quote:
      "The fraud detection module was eye-opening. I've already caught two suspicious orders that would have cost me thousands.",
  },
];

const faqs = [
  {
    q: "Who is this course for?",
    a: "This course is designed for Singapore-based small business owners, e-commerce sellers, and entrepreneurs who want to ship products to international customers confidently and cost-effectively.",
  },
  {
    q: "Do I need any prior shipping experience?",
    a: "Not at all. We start from the basics and build up. Whether you've never shipped a parcel overseas or you're already shipping but want to improve, this course is for you.",
  },
  {
    q: "What will I walk away with?",
    a: "You'll leave with practical skills to ship internationally, a student workbook with checklists and reference guides, hands-on experience using ShipAnywhere, and the confidence to handle customs, duties, and FedEx charges.",
  },
  {
    q: "Is there a hands-on component?",
    a: "Yes! Module 11 is a full hands-on session where you'll create a real shipment on ShipAnywhere — from getting a quote to printing labels and scheduling a pickup.",
  },
  {
    q: "Can I use SkillsFuture credits?",
    a: "We are in the process of becoming a SkillsFuture-approved training provider. In the meantime, the course is fully self-funded at an accessible price point.",
  },
  {
    q: "What do I need to bring?",
    a: "Just bring a laptop and a product you'd like to ship. We'll walk you through the entire process during the hands-on session.",
  },
  {
    q: "Where is the workshop held?",
    a: "Workshops are held at central locations in Singapore. The exact venue will be shared upon registration.",
  },
  {
    q: "What is ShipAnywhere?",
    a: "ShipAnywhere is our shipping platform that gives small businesses access to discounted FedEx rates (40–60% savings), automated customs documents, photo evidence for billing protection, and real-time tracking — all in one dashboard.",
  },
];

/* ───────── component ───────── */

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold text-white">
            <span className="text-teal">Ship</span>Overseas
          </span>
          <div className="hidden gap-8 md:flex">
            {["About", "Curriculum", "Pricing", "FAQ", "Register"].map((t) => (
              <a
                key={t}
                href={`#${t.toLowerCase()}`}
                className="text-sm font-medium text-gray-300 transition hover:text-teal"
              >
                {t}
              </a>
            ))}
          </div>
          <a
            href="#register"
            className="rounded-lg bg-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-dark"
          >
            Register Now
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative flex min-h-screen items-center bg-navy pt-20">
        {/* decorative grid */}
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300b4d8' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="mb-6 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
            🚀 Singapore&apos;s #1 Cross-Border Shipping Workshop
          </div>
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Ship Overseas with{" "}
            <span className="text-teal">Confidence</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
            A practical one-day workshop for Singapore SME owners. Learn customs
            clearance, FedEx charges, fraud prevention and ship your first
            international parcel — all in one day.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#register"
              className="rounded-xl bg-orange px-8 py-4 text-lg font-bold text-white shadow-lg shadow-orange/25 transition hover:bg-orange-dark hover:shadow-orange/40"
            >
              Register for Next Workshop →
            </a>
            <a
              href="#curriculum"
              className="rounded-xl border border-gray-600 px-8 py-4 text-lg font-semibold text-gray-300 transition hover:border-teal hover:text-teal"
            >
              View Curriculum
            </a>
          </div>
          {/* trust bar */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-700 pt-8 md:grid-cols-4">
            {[
              ["11", "Practical Modules"],
              ["6 hrs", "Hands-On Training"],
              ["40–60%", "Savings on FedEx"],
              ["500+", "SMEs Trained"],
            ].map(([big, small]) => (
              <div key={small}>
                <div className="text-3xl font-extrabold text-teal">{big}</div>
                <div className="mt-1 text-sm text-gray-400">{small}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold text-navy">
              Why This Workshop?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              International shipping doesn&apos;t have to be complicated. Whether
              you&apos;re shipping handmade goods, electronics, or food products,
              this course gives you everything you need to ship overseas like a
              pro.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "📦",
                title: "Master Shipping Basics",
                desc: "Understand how international shipping works — from packaging to customs clearance to final delivery.",
              },
              {
                icon: "💰",
                title: "Save 40–60% on FedEx",
                desc: "Learn how to use ShipAnywhere to access deeply discounted FedEx rates unavailable to individual shippers.",
              },
              {
                icon: "🛡️",
                title: "Protect Your Business",
                desc: "Spot fraudulent orders before you ship, avoid surprise FedEx charges, and handle disputes with confidence.",
              },
              {
                icon: "📋",
                title: "Handle Customs Like a Pro",
                desc: "Never get stuck at customs again. Learn HS codes, commercial invoices, and Electronic Trade Documents.",
              },
              {
                icon: "🌏",
                title: "Ship to 220+ Countries",
                desc: "Understand duties, taxes, and compliance for major markets — US, EU, Australia, Japan, and ASEAN.",
              },
              {
                icon: "🔧",
                title: "Hands-On Practice",
                desc: "Ship your first real international parcel during the workshop using the ShipAnywhere platform.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 text-4xl">{c.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-navy">{c.title}</h3>
                <p className="text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section id="curriculum" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold text-navy">
              Full-Day Curriculum
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              11 practical modules covering everything you need to ship
              internationally with confidence. Each module includes real-world
              examples and actionable checklists.
            </p>
          </div>

          <div className="mt-16 space-y-4">
            {modules.map((m, i) => (
              <details
                key={m.num}
                className="group rounded-xl border border-gray-200 bg-white transition hover:border-teal/40"
                open={i === 0}
              >
                <summary className="flex cursor-pointer items-center gap-4 px-6 py-5 list-none [&::-webkit-details-marker]:hidden">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-sm font-bold text-teal">
                    {m.num}
                  </span>
                  <span className="text-lg font-semibold text-navy">
                    {m.title}
                  </span>
                  <svg
                    className="ml-auto h-5 w-5 shrink-0 text-gray-400 transition group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="border-t border-gray-100 px-6 py-5">
                  <ul className="space-y-2">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-gray-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-extrabold text-white">
            What You&apos;ll Walk Away With
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "📖",
                title: "Student Workbook",
                desc: "60+ page workbook with checklists, worksheets, and reference guides to use after the course.",
              },
              {
                icon: "🖥️",
                title: "ShipAnywhere Account",
                desc: "A free ShipAnywhere account with 40–60% discounted FedEx rates — ready to ship immediately.",
              },
              {
                icon: "📊",
                title: "Cost Calculator",
                desc: "Dimensional weight calculator and surcharge reference guide to quote shipping costs accurately.",
              },
              {
                icon: "🎓",
                title: "Certificate",
                desc: "Certificate of completion to demonstrate your cross-border shipping competency.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-700 bg-navy-light p-8 text-center"
              >
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-extrabold text-navy">
            What Our Students Say
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold text-xl">★</span>
                  ))}
                </div>
                <p className="mb-6 text-gray-600 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-bold text-navy">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-extrabold text-navy">
            Investment in Your Business
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            One day of learning that pays for itself with your very first
            international shipment.
          </p>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
            {/* Standard */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-navy">Standard</h3>
              <div className="mt-4">
                <span className="text-5xl font-extrabold text-navy">$497</span>
                <span className="text-gray-500"> SGD</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">per participant</p>
              <ul className="mt-8 space-y-3">
                {[
                  "Full-day workshop (6 hours)",
                  "Student workbook & checklists",
                  "Hands-on shipping session",
                  "Free ShipAnywhere account",
                  "Certificate of completion",
                  "30-day email support",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-600">
                    <span className="text-teal">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#register"
                className="mt-8 block rounded-xl border-2 border-navy bg-white py-3 text-center font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                Register Now
              </a>
            </div>
            {/* Premium */}
            <div className="relative rounded-2xl border-2 border-teal bg-navy p-8 shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-teal px-4 py-1 text-xs font-bold text-navy">
                MOST POPULAR
              </div>
              <h3 className="text-lg font-bold text-white">Premium</h3>
              <div className="mt-4">
                <span className="text-5xl font-extrabold text-white">$697</span>
                <span className="text-gray-400"> SGD</span>
              </div>
              <p className="mt-2 text-sm text-gray-400">per participant</p>
              <ul className="mt-8 space-y-3">
                {[
                  "Everything in Standard",
                  "1-on-1 shipping setup assistance",
                  "Shopify integration walkthrough",
                  "Priority onboarding on ShipAnywhere",
                  "90-day email & WhatsApp support",
                  "Access to future workshop recordings",
                  "Exclusive shipping rate tier",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-300">
                    <span className="text-teal">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#register"
                className="mt-8 block rounded-xl bg-orange py-3 text-center font-semibold text-white transition hover:bg-orange-dark"
              >
                Register Now — Premium
              </a>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-gray-500">
            Group discounts available for 3+ participants from the same company.
            Contact us for corporate rates.
          </p>
        </div>
      </section>

      {/* ── ABOUT SHIPANYWHERE ── */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-block rounded-full bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
              Powered by ShipAnywhere
            </div>
            <h2 className="text-4xl font-extrabold text-white">
              Your Shipping Platform After the Course
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Every student gets a free ShipAnywhere account. Start shipping
              internationally the same day you complete the course.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "🏷️",
                title: "40–60% FedEx Savings",
                desc: "Access enterprise-level FedEx rates normally reserved for large shippers.",
              },
              {
                icon: "📄",
                title: "Auto Customs Documents",
                desc: "Commercial invoices and trade documents generated automatically with every shipment.",
              },
              {
                icon: "📸",
                title: "Photo Evidence",
                desc: "Upload photos of your package to protect against FedEx billing disputes.",
              },
              {
                icon: "🔗",
                title: "Shopify Integration",
                desc: "Import orders directly from your Shopify store and ship in a few clicks.",
              },
              {
                icon: "📊",
                title: "Spend Analytics",
                desc: "Track your shipping costs with detailed analytics and reporting dashboard.",
              },
              {
                icon: "🚚",
                title: "Batch Shipping",
                desc: "Ship hundreds of orders at once with CSV upload for maximum efficiency.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-gray-700 bg-navy-light p-6"
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-1 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://shipflow-production.up.railway.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl border border-teal px-8 py-3 font-semibold text-teal transition hover:bg-teal hover:text-navy"
            >
              Visit ShipAnywhere →
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-cream py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-4xl font-extrabold text-navy">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-navy">{f.q}</span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-gray-400 transition ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="border-t border-gray-100 px-6 py-5 text-gray-600">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGISTER ── */}
      <section id="register" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-navy">
                Register for the Next Workshop
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Seats are limited to 20 participants per session to ensure
                everyone gets hands-on attention. Reserve your spot today.
              </p>
            </div>

            {submitted ? (
              <div className="mt-12 rounded-2xl bg-teal/10 border border-teal/30 p-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-navy">
                  Registration Received!
                </h3>
                <p className="mt-2 text-gray-600">
                  Thank you for your interest. We&apos;ll be in touch within 24
                  hours with workshop dates and payment details.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-navy">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-navy">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-navy">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                      placeholder="+65 9XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-navy">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-navy">
                    What do you currently ship? (optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                    placeholder="Tell us about your products and where you'd like to ship them"
                  />
                </div>

                <div className="mt-6 rounded-lg bg-cream p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📅</span>
                    <div>
                      <div className="font-semibold text-navy">
                        Next Workshop: Coming Soon
                      </div>
                      <div className="text-sm text-gray-500">
                        Register your interest and we&apos;ll notify you when
                        dates are confirmed
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full rounded-xl bg-orange py-4 text-lg font-bold text-white shadow-lg shadow-orange/25 transition hover:bg-orange-dark hover:shadow-orange/40"
                >
                  Register My Interest →
                </button>
                <p className="mt-3 text-center text-sm text-gray-500">
                  No payment required now. We&apos;ll contact you with dates and
                  payment instructions.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-navy py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="text-xl font-bold text-white">
                <span className="text-teal">Ship</span>Overseas
              </span>
              <p className="mt-1 text-sm text-gray-400">
                A course by{" "}
                <a
                  href="https://shipflow-production.up.railway.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:underline"
                >
                  ShipAnywhere
                </a>
              </p>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#about" className="hover:text-teal">
                About
              </a>
              <a href="#curriculum" className="hover:text-teal">
                Curriculum
              </a>
              <a href="#pricing" className="hover:text-teal">
                Pricing
              </a>
              <a href="#faq" className="hover:text-teal">
                FAQ
              </a>
              <a href="#register" className="hover:text-teal">
                Register
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} ShipAnywhere Pte Ltd. All rights
            reserved. Singapore.
          </div>
        </div>
      </footer>
    </main>
  );
}
