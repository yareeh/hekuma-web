import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import styles from './styles/HomePage.module.css';
import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

// Function to get markdown content
async function getMarkdownContent(filename: string) {
  const filePath = path.join(process.cwd(), 'public/content', `${filename}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(fileContents);
  
  return processedContent.toString();
}

// Add a className mapping function to apply proper styling to markdown elements
function applyClassesToContent(htmlContent: string, classMap: Record<string, string>): string {
  let styledContent = htmlContent;
  
  // Apply h1 styling for hero title
  if (classMap.h1) {
    styledContent = styledContent.replace(/<h1/g, `<h1 class="${classMap.h1}"`);
  }
  
  // Apply p styling for hero text
  if (classMap.p) {
    styledContent = styledContent.replace(/<p/g, `<p class="${classMap.p}"`);
  }
  
  // Apply h2 styling for section titles
  if (classMap.h2) {
    styledContent = styledContent.replace(/<h2/g, `<h2 class="${classMap.h2}"`);
  }
  
  return styledContent;
}

export default async function Home() {
  // Get markdown content
  const heroContent = await getMarkdownContent('hero');
  const aboutContent = await getMarkdownContent('about');
  const joinContent = await getMarkdownContent('join');
  
  // Apply classes to maintain original styling
  const styledHeroContent = applyClassesToContent(heroContent, {
    h1: styles.heroTitle,
    p: styles.heroText
  });
  
  const styledAboutContent = applyClassesToContent(aboutContent, {
    h2: styles.sectionTitle,
    p: styles.sectionContent
  });
  
  const styledJoinContent = applyClassesToContent(joinContent, {
    h2: styles.joinSectionTitle,
    p: styles.joinSectionText
  });
  
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
            <Image 
              src="/images/nimenhuuto.png" 
              alt="Nimenhuuto"
              width={24} 
              height={24}
              className={styles.nimenhuutoIcon}
            />
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
            <div dangerouslySetInnerHTML={{ __html: styledHeroContent }} />
            <Link href="https://hekumamtb.nimenhuuto.com/" className={styles.joinButton}>
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
              <div dangerouslySetInnerHTML={{ __html: styledAboutContent }} />
            </section>

            {/* Join Section */}
            <section id="join" className={styles.joinSection}>
              <div className={styles.joinSectionContent}>
                <div dangerouslySetInnerHTML={{ __html: styledJoinContent }} />
                <div className={styles.joinButtons}>
                  <Link
                    href="https://hekumamtb.nimenhuuto.com/"
                    className={styles.nimenhuutoButton}
                  >
                    <Image 
                      src="/images/nimenhuuto.png" 
                      alt="Nimenhuuto"
                      width={18} 
                      height={18}
                      className={styles.nimenhuutoIcon}
                    />
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
