import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      {/* Navigation Header */}
      <header className={styles.header}>
        <div className={styles.logo}>Abra.</div>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>About Me</a>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#portfolio" className={styles.navLink}>Portfolio</a>
          <a href="#contact" className={styles.navLink}>Let's Work Together</a>
        </nav>
      </header>

      {/* Main Hero Container */}
      <main className={styles.heroContainer}>
        {/* Left Column (Card & Content) */}
        <div className={styles.cardRelativeWrapper}>
          {/* Beige Rounded Card Container */}
          <div className={styles.glassCard}>
            {/* Header Block (Positioned inside the card) */}
            <div className={styles.headerBlock}>
              <p className={styles.introPrefix}>Hay, I Am</p>
              <h1 className={styles.mainTitle}>
                <span>Abra</span>
                <span>Creative</span>
              </h1>
            </div>

            {/* Description Block */}
            <div className={styles.descriptionBlock}>
              <p className={styles.descriptionText}>
                An AI Content Creator, Video Creator, and Social Media Marketing Strategist Turning Ideas into Powerful AI-Driven Content.
              </p>
            </div>
            
            {/* Action Button */}
            <a href="#portfolio" className={styles.ctaButton}>
              <span>View Portfolio</span>
              <span className={styles.ctaArrow}>→</span>
            </a>
          </div>
        </div>

        {/* Right Column (Grayscale Blended Photo) */}
        <div className={styles.imageContainer}>
          <div className={styles.profileImageWrapper}>
            <Image
              src="/profile.jpg"
              alt="Abra - AI Content Creator & Marketing Strategist"
              width={600}
              height={700}
              priority
              className={styles.profileImage}
            />
          </div>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className={styles.footer}>
        <span className={styles.footerText}>Abra</span>
        <span className={styles.footerText}>
          AI Content Creator
          <span className={styles.footerDot}></span>
          AI Video Creator
          <span className={styles.footerDot}></span>
          Marketing Strategist
        </span>
      </footer>
    </div>
  );
}
