// app/page.tsx
"use client";
import { useEffect, useState } from "react";
import { FaLeaf, FaArrowDown, FaShoppingBasket, FaArrowUp } from "react-icons/fa";
import styles from "./CaseStudy.module.css";
import Image from "next/image";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className={styles.page}>
      {/* Sticky top navigation */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logoGroup}>
            <div className={styles.logoMark}>
              <FaLeaf />
            </div>
            <div className={styles.logoText}>
              <span className={styles.brandName}>Qwikbasket</span>
              <span className={styles.brandTagline}>B2B Produce Marketplace</span>
            </div>
          </div>
          <nav className={styles.nav}>
            <a href="#overview">Overview</a>
            <a href="#problem">Problem & Solution</a>
            <a href="#user">User & Persona</a>
            <a href="#journey">Journey Map</a>
            <a href="#design">Design Process</a>
            <a href="#final">Final Design</a>
            <a href="#next">Next Steps</a>
          </nav>
        </div>
      </header>

      {/* Hero / Project Overview */}
      <section id="overview" className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <p className={styles.caseStudyLabel}>UX &amp; UI Case Study</p>
              <h1 className={styles.heroTitle}>
                Qwikbasket – Smart Credit for B2B Grocery &amp; Produce Buyers
              </h1>
              <p className={styles.heroSubtitle}>
                A B2B marketplace for restaurants, hotels, and cafeterias to buy fresh
                produce in bulk.
              </p>

              <div className={styles.heroMetaGrid}>
                <div className={styles.metaCard}>
                  <span className={styles.metaLabel}>Role</span>
                  <span className={styles.metaValue}>UX · UI · Frontend</span>
                </div>
                <div className={styles.metaCard}>
                  <span className={styles.metaLabel}>Platform</span>
                  <span className={styles.metaValue}>Mobile-first</span>
                </div>
                <div className={styles.metaCard}>
                  <span className={styles.metaLabel}>Focus</span>
                  <span className={styles.metaValue}>Ordering + Credit</span>
                </div>
                <div className={styles.metaCard}>
                  <span className={styles.metaLabel}>Theme</span>
                  <span className={styles.metaValue}>Light · Clean · Green</span>
                </div>
              </div>

              <div className={styles.heroCtas}>
                <a href="#final" className={styles.primaryButton}>
                  View Final Screens
                  <FaArrowDown aria-hidden="true" />
                </a>
                <a href="#problem" className={styles.secondaryButton}>
                  Read the UX Story
                </a>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <Image className={styles.heroImage} height={400} width={500} src="/heroimg.png" alt="Hero Visual" />
            
            </div>
          </div>
        </div>
      </section>

      {showScrollTop ? (
        <button
          type="button"
          className={styles.scrollTopButton}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <FaArrowUp aria-hidden="true" />
          <span className={styles.scrollTopText}>Top</span>
        </button>
      ) : null}

      {/* Problem & Smart Credit Solution - CONDENSED */}
      <section id="problem" className={styles.section}>
        <SectionHeader
          eyebrow="Problem & Opportunity"
          title="The 'Udhaari' Trap in B2B Grocery"
        />
        <div className={styles.twoColumn}>
          <div className={styles.column}>
            <h3 className={styles.subheading}>The Core Problem</h3>
            <p>
              Small businesses run on thin margins and daily cash cycles. They buy produce every morning but receive revenue gradually, working on informal credit—"udhari"—with 5–10 vendors, tracked via paper notebooks or WhatsApp.
            </p>
            <ul className={styles.bulletList}>
              <li>
                <strong>Cash Flow Mismatch:</strong> Paying cash up front blocks liquidity for salaries and operations.
              </li>
              <li>
                <strong>Fragmented Accounting:</strong> No single view of total outstanding credit leads to disputes.
              </li>
              <li>
                <strong>Rigid Repayment:</strong> Vendors set arbitrary due dates and may cut supply suddenly.
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.subheading}>The Qwikbasket Solution</h3>
            <p>
              Qwikbasket introduces digital <strong>Smart Credit</strong> on a B2B produce marketplace. Restaurants and retailers discover suppliers, order in bulk, and:
            </p>
            <ul className={styles.bulletList}>
              <li>
                See a <strong>single credit dashboard</strong> across all orders.
              </li>
              <li>
                Choose <strong>&quot;Pay within 10 days of next order&quot;</strong> instead of rigid dates.
              </li>
              <li>
                Repay <strong>early</strong> to immediately free up credit limit.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.creditGrid}>
          <SmartCreditCard
            title="1. Transparency"
            description="The Orders & Credit card shows total outstanding, due date, and exact countdown in a single glance."
            chips={["Total Value", "Due Date", "Days Left"]}
          />
          <SmartCreditCard
            title="2. Capital Rotation"
            description="Early repayment instantly restores credit limit for the next bulk purchase whenever cash is available."
            chips={["Pay Early", "Instant Reset"]}
          />
          <SmartCreditCard
            title="3. Trust & Fairness"
            description='Terms like "No interest charges" and "₹50 late fee when overdue" are displayed on the dashboard, not buried in T&Cs.'
            chips={["No Interest", "Transparent Fee"]}
          />
        </div>
      </section>

      {/* User Research & Persona - CONDENSED */}
      <section id="user" className={styles.section}>
        <SectionHeader
          eyebrow="Understanding the User"
          title="Who We Designed Qwikbasket For"
        />

        <div className={styles.twoColumn}>
          <div className={styles.column}>
            <h3 className={styles.subheading}>User Research Summary</h3>
            <p>
              I interviewed <strong>12 B2B buyers</strong>—restaurant owners, hotel purchasing managers, and canteen operators—focusing on how they source produce, track credit, and manage vendor relationships.
            </p>
            <p>
              Key insight: <strong>reliability, trust, and ease of credit management</strong> mattered more than price. Most used WhatsApp and simple apps but still relied on offline notebooks for "udhari" tracking.
            </p>
          </div>

          {/* Persona Bento Grid */}
          <div className={styles.column}>
            <h3 className={styles.subheading}>Primary Persona · Bento Grid</h3>
            <div className={styles.personaGrid}>
              <div className={styles.personaTileWide}>
                <p className={styles.personaLabel}>Persona</p>
                <h4 className={styles.personaName}>
                  Raj Mehta, 35 · Restaurant Owner
                </h4>
                <p className={styles.personaMeta}>
                  Owns a 60-cover casual dining restaurant; manages kitchen inventory, vendor payments, and staff scheduling.
                </p>
              </div>

              <div className={styles.personaTile}>
                <p className={styles.personaLabel}>Quote</p>
                <p className={styles.personaQuote}>
                  &quot;I need stock every morning, even if yesterday was slow. Just don&apos;t make me chase five vendors to know who I owe.&quot;
                </p>
              </div>

              <div className={styles.personaTile}>
                <p className={styles.personaLabel}>Goals</p>
                <ul className={styles.personaList}>
                  <li>Never run out of key ingredients.</li>
                  <li>See total credit in one place.</li>
                  <li>Pay when cash is available.</li>
                  <li>Less bookkeeping, more on guests.</li>
                </ul>
              </div>

              <div className={styles.personaTile}>
                <p className={styles.personaLabel}>Frustrations</p>
                <ul className={styles.personaList}>
                  <li>Surprise calls demanding payment.</li>
                  <li>Disputes over payment timing.</li>
                  <li>Unclear late fees.</li>
                  <li>Apps that hide credit details.</li>
                </ul>
              </div>

              <div className={styles.personaTile}>
                <p className={styles.personaLabel}>Behaviours</p>
                <ul className={styles.personaList}>
                  <li>Orders 3–4 times weekly via phone/WhatsApp.</li>
                  <li>Comfortable with mobile apps.</li>
                  <li>Checks bank balance multiple times daily.</li>
                </ul>
              </div>

              <div className={styles.personaTile}>
                <p className={styles.personaLabel}>Needs from Qwikbasket</p>
                <ul className={styles.personaList}>
                  <li>Fast repeat ordering.</li>
                  <li>Simple category filters.</li>
                  <li>Live Smart Credit widget.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Map - CONDENSED */}
      <section id="journey" className={styles.section}>
        <SectionHeader
          eyebrow="End-to-End Flow"
          title="User Journey: From Bulk Ordering to Smart Credit"
        />

        <div className={styles.journeyContainer}>
          <div className={styles.journeyIntro}>
            <p>
              The journey map follows Raj from discovering Qwikbasket to placing repeat orders while managing Smart Credit. Each stage combines actions, feelings, and improvement opportunities.
            </p>
          </div>

          <div className={styles.journeyTableWrapper}>
            <table className={styles.journeyTable}>
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>Browse Bulk Goods</th>
                  <th>Customize Order</th>
                  <th>Checkout & Pay on Credit</th>
                  <th>Track Orders & Credit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.journeyLabel}>Task List</td>
                  <td>
                    Search staples, browse categories, compare prices per kg.
                  </td>
                  <td>
                    Select SKUs, adjust quantities, view total and delivery slot.
                  </td>
                  <td>
                    Confirm address, choose &quot;Pay on Credit – clear within 10 days&quot; or UPI/Cards.
                  </td>
                  <td>
                    Check dashboard, see due date, remaining limit, trigger early repayment.
                  </td>
                </tr>
                <tr>
                  <td className={styles.journeyLabel}>Feeling</td>
                  <td>Curious, price-sensitive, hopeful to save time.</td>
                  <td>
                    In control; confident about basket value and stock coverage.
                  </td>
                  <td>
                    Relieved—gets stock without blocking cash; slightly anxious about due dates.
                  </td>
                  <td>
                    Calm and informed; clear countdown makes repayment predictable.
                  </td>
                </tr>
                <tr>
                  <td className={styles.journeyLabel}>Pain Points</td>
                  <td>
                    Overwhelmed if catalog is cluttered; distrust of unknown suppliers.
                  </td>
                  <td>
                    Fear of over-ordering or waste; confusion around minimum quantity.
                  </td>
                  <td>
                    Worry about hidden fees or credit suspension if misses a day.
                  </td>
                  <td>
                    Historically, no single view of dues; easy to forget payments.
                  </td>
                </tr>
                <tr>
                  <td className={styles.journeyLabel}>Qwikbasket UX Opportunities</td>
                  <td>
                    Clean category cards with photos, clear unit pricing, supplier badges.
                  </td>
                  <td>
                    Inline stock tips, live basket total &amp; savings display.
                  </td>
                  <td>
                    One-tap &quot;Pay on Credit&quot; with visible due date and terms before confirming.
                  </td>
                  <td>
                    Central Smart Credit dashboard with countdown and explicit terms display.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Design Process & Wireframes */}
      <section id="design" className={styles.section}>
        <SectionHeader
          eyebrow="Design Process"
          title="From Low-Fidelity Flows to Smart Credit Screens"
        />

        <div className={styles.oneColumn}>
          <div className={styles.column}>
            <h3 className={styles.subheading}>Wireframing & Iteration</h3>
            <p>
              I started with <strong>task-based user flows</strong> for Raj&apos;s most frequent jobs: re-ordering, discovering suppliers, and checking credit health. Low-fidelity wireframes explored different placements for the Smart Credit widget and ways to visualize due dates.
            </p>
            <p>
              Usability sessions showed that placing credit information <strong>inside the ordering flow</strong> increased comprehension but risked distraction. The final design separates a focused &quot;Orders &amp; Credit&quot; screen while keeping a glanceable limit pill in the header.
            </p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.subheading}>Sitemap / User Flow</h3>
            <p>
              The core app flow is captured in the sitemap below. This Mermaid diagram shows how users move from onboarding to ordering, checkout, and credit management.
            </p>

            <div className={styles.mermaidWrapper}>
            <img className={styles.mermaidImage} src="/mermaid.svg" alt="Mermaid" />
            </div>
          </div>
        </div>

        {/* Paper Wireframes Grid */}
        <div style={{ marginTop: "2.5rem" }}>
          <h3 className={styles.subheading}>Paper Wireframes</h3>
          <p className={styles.sectionIntro}>
            Early paper explorations of homepage layouts, focusing on navigation, product display, and user flows.
          </p>

          <div className={styles.wireframeGrid}>
          <div className={styles.frameGrid}>
          <div className={styles.frameCard}>
            <img
              src="/wireframe-1.png"
              alt="Splash & Onboarding screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/wireframe-2.png"
              alt="Language & Login screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/wireframe-3.png"
              alt="Home and Categories screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/wireframe-4.png"
              alt="Product Detail screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/wireframe-5.png"
              alt="Cart & Checkout screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/wireframe-6.png"
              alt="Orders & Credit Dashboard screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/wireframe-7.png"
              alt="Early Repayment Flow screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/wireframe-8.png"
              alt="Order Tracking & History screen"
              className={styles.frameImage}
            />
          </div>
          </div>
        </div>
        </div>
      </section>

      {/* Final Design Placeholders */}
      <section id="final" className={styles.section}>
        <SectionHeader
          eyebrow="Final UI"
          title="High-Fidelity Screens"
        />

        <div className={styles.frameGrid}>
          <div className={styles.frameCard}>
            <img
              src="/splash-1.png"
              alt="Splash & Onboarding screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/splash-2.png"
              alt="Language & Login screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/splash-3.png"
              alt="Home and Categories screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/language-1.png"
              alt="Home and Categories screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/login.png"
              alt="Home and Categories screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/otp.png"
              alt="Home and Categories screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/reg-1.png"
              alt="Product Detail screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/reg-2.png"
              alt="Cart & Checkout screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/reg-3.png"
              alt="Orders & Credit Dashboard screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
            src="/reg-4.png"
              alt="Early Repayment Flow screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/reg-5.png"
              alt="Order Tracking & History screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/home.png"
              alt="Order Tracking & History screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/home-1.png"
              alt="Order Tracking & History screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/category.png"
              alt="Order Tracking & History screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/sub-cat.png"
              alt="Order Tracking & History screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/product.png"
              alt="Order Tracking & History screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/cart.png"
              alt="Order Tracking & History screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/checkout.png"
              alt="Order Tracking & History screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/payment.png"
              alt="Order Tracking & History screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/success.png"
              alt="Order Tracking & History screen"
              className={styles.frameImage}
            />
          </div>
          <div className={styles.frameCard}>
            <img
              src="/orders.png"
              alt="Order Tracking & History screen"
              className={styles.frameImage}
            />
          </div>

          <div className={styles.frameCard}>
            <img
              src="/credit.png"
              alt="Order Tracking & History screen"
              className={styles.frameImage}
            />
          </div>

          <div className={styles.frameCard}>
            <img
              src="/credit-1.png"
              alt="Order Tracking & History screen"
              className={styles.frameImage}
            />
          </div>

          <div className={styles.frameCard}>
            <img
              src="/due.png"
              alt="Order Tracking & History screen"
              className={styles.frameImage}
            />
          </div>

        </div>

      </section>

      {/* Next Steps */}
      <section id="next" className={styles.section}>
        <SectionHeader eyebrow="Roadmap" title="Next Steps for Qwikbasket" />

        <ol className={styles.nextList}>
          <li>
            <strong>Feature Expansion (Buyer Side)</strong>
            <ul>
              <li>
                <strong>Predictive "Quick Reorder" / Subscriptions:</strong> Since B2B buyers often order the exact same inventory (e.g., 20kg of onions, 10kg of tomatoes) every few days, the next iteration should include an AI-driven "Predictive Cart" or a weekly subscription model to reduce ordering time to a single click.
              </li>
            </ul>
          </li>
          <li>
            <strong>Voice & Vernacular Support (Accessibility Focus)</strong>
            <ul>
              <li>
                <strong>The Idea:</strong> Add voice search and multiple regional languages (Hindi, Marathi, Tamil, etc.).
              </li>
              <li>
                <strong>Why:</strong> Kitchen staff or procurement managers are often busy with their hands or may be more comfortable speaking their native language than typing in English.
              </li>
              <li>
                <strong>The Feature:</strong> A microphone icon in the search bar allowing users to say "30kg Aloo" (30kg Potatoes) and have it added to the cart instantly.
              </li>
            </ul>
          </li>
          <li>
            <strong>Develop Spend Analytics:</strong> Introduce a data visualization tab for buyers to track their weekly produce expenses and credit utilization over time.
          </li>
        </ol>
      </section>

      <footer className={styles.footer}>
        <span>Qwikbasket · B2B Grocery &amp; Produce Marketplace</span>
      </footer>
    </main>
  );
}


type SectionHeaderProps = {
  eyebrow: string;
  title: string;
};

function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className={styles.sectionHeader}>
      <p className={styles.sectionEyebrow}>{eyebrow}</p>
      <h2 className={styles.sectionTitle}>{title}</h2>
    </div>
  );
}

type SmartCreditCardProps = {
  title: string;
  description: string;
  chips: string[];
};

function SmartCreditCard({ title, description, chips }: SmartCreditCardProps) {
  return (
    <article className={styles.smartCard}>
      <h3 className={styles.smartCardTitle}>{title}</h3>
      <p className={styles.smartCardBody}>{description}</p>
      <div className={styles.smartCardChips}>
        {chips.map((chip) => (
          <span key={chip} className={styles.smartCardChip}>
            {chip}
          </span>
        ))}
      </div>
    </article>
  );
}