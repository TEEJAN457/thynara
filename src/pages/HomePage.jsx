import Hero         from '../components/Hero'
import HomeIntro    from '../components/HomeIntro'
import HomeServices from '../components/HomeServices'
import HomeNumbers  from '../components/HomeNumbers'
import HomeHeritage from '../components/HomeHeritage'
import HomeCertifications from '../components/HomeCertifications'
import HomeCTA      from '../components/HomeCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeIntro />     {/* ░░ CREAM — quote + body + mini stats */}
      <HomeServices />  {/* ██ DARK  — 3 navigation cards */}
      <HomeNumbers />   {/* ░░ CREAM — animated counters */}
      <HomeHeritage />  {/* ██ DARK  — image placeholder + story teaser */}
      <HomeCertifications />  {/* ░░ CREAM — certification logos */}
      <HomeCTA />       {/* ██ DARK  — closing call to action */}
    </>
  )
}
