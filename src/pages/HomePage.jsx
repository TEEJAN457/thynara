import Hero              from '../components/Hero'
import HomeIntro         from '../components/HomeIntro'
import HomeQuotes        from '../components/HomeQuotes'
import HomeNumbers       from '../components/HomeNumbers'
import HomeServices      from '../components/HomeServices'
import HomeHeritage      from '../components/HomeHeritage'
import HomePositioning   from '../components/HomePositioning'
import HomeCertifications from '../components/HomeCertifications'
import HomeCTA           from '../components/HomeCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeIntro />           {/* ░░ CREAM — origin story */}
      <HomeQuotes />          {/* ██ DARK  — founder quotes */}
      <HomeNumbers />         {/* ░░ CREAM — supply & market stats */}
      <HomeServices />        {/* ██ DARK  — 3 navigation cards */}
      <HomeHeritage />        {/* ██ DARK  — emblem story */}
      <HomePositioning />     {/* ░░ CREAM — target market + track record */}
      <HomeCertifications />  {/* ░░ CREAM — certification logos */}
      <HomeCTA />             {/* ██ DARK  — work with us */}
    </>
  )
}
