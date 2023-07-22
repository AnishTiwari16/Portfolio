import * as React from 'react';

import AboutSection from '@/components/layout/AboutSection';
import ExperienceSection from '@/components/layout/ExperienceSection';
import HeaderSection from '@/components/layout/HeaderSection';
import HeroSection from '@/components/layout/HeroSection';
import Layout from '@/components/layout/Layout';
import LetsTalk from '@/components/layout/LetsTalk';
import ProjectSection from '@/components/layout/ProjectSection';
import SkillsSection from '@/components/layout/SkillsSection';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <HeaderSection />

        <section className='container mx-auto px-10 md:px-20'>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectSection />
          <SkillsSection />
          <LetsTalk />
        </section>
      </main>
    </Layout>
  );
}
