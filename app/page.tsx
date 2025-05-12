import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaEnvelope, FaGlobe } from "react-icons/fa";
import styles from './styles/HomePage.module.css';

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      {/* Header with logo and social links */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image 
            src="/images/logo.svg" 
            alt="Hekuma MTB Logo" 
            width={180} 
            height={180} 
            className={styles.logo}
          />
        </div>
        <div className={styles.socialLinks}>
          <Link href="https://www.instagram.com/hekumamtb/" aria-label="Instagram" className={styles.socialLink}>
            <FaInstagram size={24} />
          </Link>
          <Link href="https://www.facebook.com/groups/hekumamtb/" aria-label="Facebook" className={styles.socialLink}>
            <FaFacebook size={24} />
          </Link>
          <Link href="https://hekumamtb.nimenhuuto.com/" aria-label="Nimenhuuto" className={styles.socialLink}>
            <FaGlobe size={22} />
          </Link>
          <Link href="mailto:hekumamtb@gmail.com" aria-label="Email" className={styles.socialLink}>
            <FaEnvelope size={22} />
          </Link>
        </div>
      </header>

      <div className={styles.contentContainer}>
        {/* Hero Section with Background Image */}
        <section className={styles.heroSection}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h2 className={styles.heroTitle}>
              Maastopyöräilyä naisille Helsingissä
            </h2>
            <p className={styles.heroText}>
              Tervetuloa Hekuma MTB:n pariin - olemme Helsinkiläinen naisten maastopyöräilyseura, 
              joka tarjoaa hauskaa yhteisöllistä pyöräilyä kaikentasoisille harrastajille.
            </p>
            <Link
              href="https://hekumamtb.nimenhuuto.com/"
              className={styles.joinButton}
            >
              Liity mukaan
            </Link>
          </div>
        </section>

        {/* Combined About and Join Section */}
        <div className={styles.combinedSection}>
          <div className={styles.combinedSectionBackground}></div>
          <div className={styles.combinedSectionOverlay}></div>
          <div className={styles.combinedSectionContent}>
            {/* About Section */}
            <section className={styles.aboutSection}>
              <h2 className={styles.sectionTitle}>Meistä</h2>
              <div className={styles.sectionContent}>
                <p>
                  Hekuma MTB on vuonna 2017 perustettu maastopyöräilyseura kaikentasoisille 
                  naisille Helsingissä. Järjestämme yhteislenkkejä eri puolilla 
                  pääkaupunkiseutua läpi vuoden.
                </p>
                <p>
                  Hekuman toiminnan perustana on yhteisöllisyys, hauskanpito ja 
                  toistemme kannustaminen. Lenkeillämme kukaan ei jää yksin ja 
                  odottelemme aina toisiamme.
                </p>
                <p>
                  Harjoituksia järjestetään eri tasoisille kuskeille, ja mukaan voi tulla
                  matalalla kynnyksellä. Tervetuloa mukaan!
                </p>
              </div>
            </section>

            {/* Join Us Section */}
            <section className={styles.joinSection}>
              <div className={styles.joinSectionContent}>
                <h2 className={styles.joinSectionTitle}>Tule mukaan</h2>
                <div className={styles.joinSectionText}>
                  <p>
                    Toimintaamme voit osallistua liittymällä
                    <Link href="https://hekumamtb.nimenhuuto.com/" className={styles.linkedText}>
                      Nimenhuuto-sivullemme
                    </Link>, 
                    jossa julkaisemme kaikki tulevat lenkit ja tapahtumat.
                  </p>
                  <p>
                    Seuraa meitä myös
                    <Link href="https://www.instagram.com/hekumamtb/" className={styles.linkedText}>
                      Instagramissa
                    </Link>
                    ja
                    <Link href="https://www.facebook.com/groups/hekumamtb/" className={styles.linkedText}>
                      Facebook-ryhmässämme
                    </Link>
                    saadaksesi ajankohtaista tietoa toiminnastamme.
                  </p>
                </div>
                <div className={styles.joinButtons}>
                  <Link
                    href="https://hekumamtb.nimenhuuto.com/"
                    className={styles.nimenhuutoButton}
                  >
                    <FaGlobe size={18} />
                    Nimenhuuto
                  </Link>
                  <Link
                    href="https://www.instagram.com/hekumamtb/"
                    className={styles.instagramButton}
                  >
                    <FaInstagram size={18} />
                    Instagram
                  </Link>
                  <Link
                    href="https://www.facebook.com/groups/hekumamtb/"
                    className={styles.facebookButton}
                  >
                    <FaFacebook size={18} />
                    Facebook
                  </Link>
                  <Link
                    href="mailto:hekumamtb@gmail.com"
                    className={styles.contactButton}
                  >
                    <FaEnvelope size={18} />
                    Ota yhteyttä
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Hekuma MTB - Naisten maastopyöräilyseura Helsingissä</p>
        </footer>
      </div>
    </main>
  );
}
