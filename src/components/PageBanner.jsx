export default function PageBanner({ num, title, subtitle, desc }) {
  return (
    <div className="page-banner">
      <span className="eyebrow page-banner__eyebrow">{num} — {subtitle}</span>
      <h1 className="page-banner__title shimmer-text visible">{title}</h1>
      {desc && <p className="page-banner__desc">{desc}</p>}
      <div className="page-banner__line" aria-hidden="true" />
    </div>
  )
}
