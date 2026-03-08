import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { useTranslation } from '../i18n/LanguageContext'

/* ═══════════════════════════════════════════
   THYNARA AI — Smart Knowledge Engine
   ═══════════════════════════════════════════ */

/* ── Build a flat knowledge base from all site content ── */
function buildKnowledgeBase(t) {
  return [
    // Company identity
    { tags: ['company','about','overview','introduce','qui','ما هي'],
      fact: `THYNARA is a fully integrated Tunisian olive oil company founded in 2005 in Sfax, Tunisia. We operate across the entire value chain — from grove cultivation and harvesting, through cold-press milling and bottling, to international export and distribution across 26 countries.`,
      priority: 1 },
    { tags: ['who','company','vision','mission','values','core'],
      fact: `Our core values are Integrity, Quality, Craft, and Sustainability. Our vision is to be the most trusted name in Mediterranean olive oil. Every decision is guided by respect for the land and the craft of olive oil making.`,
      priority: 0.8 },

    // Founder
    { tags: ['founder','chairman','owner','boss','ceo','leader','ghouth','madani','haj','mohamed','مؤسس','رئيس','مالك','صاحب'],
      fact: `THYNARA was founded by Haj Mohamed Madani Ghouth, who serves as Chairman & Founder. He is an agronomist from Sfax, the heart of Tunisia's olive country. He studied at INAT (Institut National Agronomique de Tunis) and founded the company at age 32. He grew up among olive groves — learning to read the fruit's ripeness by touch and understanding the soil by instinct.`,
      priority: 1.5 },
    { tags: ['cofounder','lahmer','hechmi','cofondateur','مؤسس مشارك'],
      fact: `Hechmi Lahmer is the Cofounder of THYNARA. Where Ghouth brought the agronomist's eye and grower's instinct, Lahmer brought commercial acumen and an unwavering belief in Tunisian quality. Together they founded THYNARA Group — and the first batch of cold-pressed oil won a Mediterranean quality award.`,
      priority: 1.5 },
    { tags: ['founder','cofounder','together','both','team','partnership','leadership','duo','who','من'],
      fact: `Haj Mohamed Madani Ghouth (Chairman) and Hechmi Lahmer (Cofounder) remain personally involved in harvest strategy. They insist on tasting every new batch themselves. Their offices are in Tunis, but their hearts remain in the groves of Sfax.`,
      priority: 1 },

    // Products - EVOO
    { tags: ['product','evoo','extra virgin','olive oil','huile','زيت','بكر','ممتاز','flagship','cold pressed'],
      fact: `Our flagship product is Extra Virgin Olive Oil — cold-pressed within hours of harvest from hand-selected Chemlali and Chetoui olives. It has acidity < 0.4%, peroxide value < 12 meq O₂/kg, and polyphenol content of 280–420 mg/kg. It's IOC certified with a peppery finish and fruity aroma.`,
      priority: 1.5 },
    { tags: ['tasting','taste','flavor','flavour','nose','palate','aroma','smell','نكهة','تذوق'],
      fact: `Tasting notes — Nose: Green almond, freshly cut grass, artichoke leaf. Palate: Medium-bodied with a balanced peppery finish, notes of ripe tomato and green olive. Finish: Persistent warmth at the back of the throat — a sign of superior quality. Best paired with grilled fish, fresh salads, bruschetta, roasted vegetables, and aged cheese.`,
      priority: 1.5 },
    { tags: ['acidity','peroxide','polyphenol','k232','k270','spec','technical','specification','analysis','lab','مواصفات'],
      fact: `Technical specifications: Acidity < 0.4%, Peroxide < 12 meq O₂/kg, Polyphenols 280–420 mg/kg, K232 ≤ 2.10, K270 ≤ 0.18. Extraction: Two-phase cold-press at < 27°C. Varietals: Chemlali and Chetoui. Origin: Sfax & Sahel, Tunisia. Every batch is tested against IOC standards.`,
      priority: 1.5 },
    { tags: ['packaging','bottle','format','size','tin','bulk','container','تعبئة','حجم'],
      fact: `Available formats: 250ml, 500ml, and 750ml dark glass bottles; 3L and 5L metal tins; Bulk supply via Flexitank or ISO Tank. All bottles are sealed under nitrogen to prevent oxidation and preserve freshness.`,
      priority: 1 },
    { tags: ['storage','store','keep','shelf','life','conservation','تخزين','حفظ'],
      fact: `Storage: Keep in a cool, dark place between 14–18°C. Away from direct light and heat. Use within 18 months of bottling. Seal tightly after use. Cloudiness at low temperatures is natural and reversible — it does not affect quality.`,
      priority: 1 },

    // Operations
    { tags: ['cultivation','grove','tree','farm','plant','soil','زراعة','بستان','شجرة'],
      fact: `We manage over 150,000 olive trees across groves in Sfax, Kairouan, and the Sahel region. We practice sustainable farming with seasonal pruning, organic soil management, and careful irrigation. Varietals include Chemlali, Chetoui, and Arbequina. Our agronomists monitor grove health year-round using traditional expertise and modern IoT soil sensors.`,
      priority: 1.5 },
    { tags: ['harvest','pick','collect','season','october','january','حصاد','قطف'],
      fact: `Hand-picked and mechanically harvested at peak ripeness between October and January. Our olives reach the mill within hours of harvest to preserve freshness, flavor, and polyphenol content. We use a combination of hand-picking for premium fruit and mechanical harvesting for efficiency.`,
      priority: 1.5 },
    { tags: ['mill','press','cold press','extract','crush','process','milling','triturat','معصرة','عصر','طحن'],
      fact: `Cold-pressed within four hours of harvest at our Sakiet Ezzit facility in Sousse. Two-phase centrifugal extraction at < 27°C preserves the oil's natural polyphenols and character. Temperature-controlled malaxation, nitrogen-blanketed storage. Every batch is lab-tested against IOC standards.`,
      priority: 1.5 },
    { tags: ['bottling','export','distribution','ship','port','تعبئة','تصدير','توزيع'],
      fact: `Bottled under nitrogen to preserve freshness. Exported to 26 countries across Europe, North America, and the Gulf. Full traceability from grove to bottle. Warehouse facilities in Tunis and Sfax. Direct container shipping from Port of Sfax. Delivery terms: FOB, CIF, CFR, DDP.`,
      priority: 1.5 },
    { tags: ['facility','factory','sakiet','ezzit','sousse','production','usine','مصنع','وحدة'],
      fact: `Our production facility is located in Sakiet Ezzit, Sousse. It features state-of-the-art two-phase milling technology, temperature-controlled malaxation chambers, nitrogen-blanketed storage tanks, and automated bottling lines. Processing capacity was tripled when the facility was commissioned in 2017.`,
      priority: 1.5 },

    // Heritage & History
    { tags: ['heritage','history','story','legacy','origin','tradition','founded','when','year','تراث','تاريخ','تأسيس','قصة'],
      fact: `THYNARA was founded in 2005 in Sfax by Haj Mohamed Madani Ghouth and Hechmi Lahmer. Key milestones: 2005 — Founded; 2008 — First groves acquired, 12,000 trees; 2010 — First export to Marseille; 2013 — EU Organic certification; 2017 — New milling facility in Sfax; 2021 — Expansion to Gulf, North America, Scandinavia; 2025 — 150,000 trees, 26 countries, Gold Medal winner.`,
      priority: 1 },

    // Certifications
    { tags: ['certif','iso','ioc','organic','bio','haccp','halal','brc','standard','norm','شهادة','معيار','عضوي','حلال'],
      fact: `Our certifications: Bio/Organic (certified organic production), HACCP (Hazard Analysis & Critical Control Points), Halal certified, ISO 9001:2015 (Quality Management), ISO 22000 (Food Safety), IOC Trade Standard compliance, EU Regulation (EC) 29/2012. Every shipment includes a Certificate of Analysis (CoA) and Certificate of Origin (CoO).`,
      priority: 1.5 },

    // Numbers & Scale
    { tags: ['number','stat','figure','how many','scale','size','how big','أرقام','حجم','كم'],
      fact: `Key figures: 21 years of expertise since 2005. 12,000+ tonnes of olive oil produced yearly. 150,000+ olive trees under cultivation. Exports to 26 countries worldwide. Our growth has been deliberate — never at the expense of quality or the land.`,
      priority: 1 },

    // Sustainability
    { tags: ['sustainab','environment','green','organic','eco','tree','plant','carbon','solar','استدامة','بيئة'],
      fact: `Sustainability commitments: 8,000 new olive trees planted annually. Organic farming across certified groves. Water-efficient drip irrigation (35% savings). Olive pomace recycled as compost and biomass fuel. Biodiversity corridors between grove blocks. Solar-powered milling facilities (40% carbon reduction). Supporting 200+ smallholder farmers with fair-trade pricing. Women's cooperatives employing 120+ women during harvest.`,
      priority: 1.5 },

    // Careers
    { tags: ['job','career','hiring','work','employ','recruit','position','intern','graduate','join','team','وظيفة','توظيف'],
      fact: `Current openings: Senior Agronomist (Grove Management), Olive Oil Taster & Quality Analyst (Sfax Lab), Export Manager (European Markets), Production Engineer (Milling & Bottling), Graduate Programme 2026 (8 positions). We offer competitive compensation, international exposure, sponsored IOC tasting courses, and comprehensive benefits. Applications reviewed on a rolling basis. Apply at careers@thynara.tn`,
      priority: 1 },

    // Contact
    { tags: ['contact','email','phone','reach','office','address','location','headquarter','where','اتصل','تواصل','عنوان','أين'],
      fact: `THYNARA Group — Rue du Lac Windermere, Les Berges du Lac, Tunis 1053, Tunisia. Email: contact@thynara.tn | Export: export@thynara.tn | Careers: careers@thynara.tn | Phone: +216 71 234 567. Office hours: Mon–Fri, 08:30–17:30 (CET). Extended hours during harvest season (Oct–Jan).`,
      priority: 1 },

    // Pricing & Business
    { tags: ['price','cost','rate','quote','how much','buy','purchase','order','سعر','تكلفة','شراء'],
      fact: `Pricing depends on: oil grade (Extra Virgin, Virgin, Organic), volume (per litre/tonne/container), contract term (spot, seasonal, annual), and delivery basis (FOB Sfax, CIF, DDP). Our Export desk can prepare a tailored quotation within 24 hours. Contact export@thynara.tn for pricing.`,
      priority: 1 },
    { tags: ['invest','partner','business','opportunit','venture','equity','joint','collaborate','استثمار','شراكة'],
      fact: `Investment & partnership opportunities: Equity participation in grove expansion, joint ventures for private label & co-branding, offtake agreements for long-term bulk supply, land & grove development partnerships. 150,000+ trees as a growing tangible asset base. Contact our Finance team for detailed discussions and site visits.`,
      priority: 1 },

    // Shipping & Logistics
    { tags: ['ship','deliver','logistic','transport','cargo','freight','container','port','شحن','توصيل'],
      fact: `Shipping options — Bulk: Flexitank (20,000–24,000L), ISO tank containers. Bottled: Palletized 20ft & 40ft containers, glass/PET/tin. Delivery terms: FOB Sfax, CIF, CFR, DDP. All shipments include Bill of Lading, CoA, CoO, phytosanitary certificate, and customs documentation.`,
      priority: 1 },

    // Technology
    { tags: ['technolog','innovat','digital','iot','sensor','drone','modern','smart','تكنولوجيا','تقنية'],
      fact: `Technology: Two-phase centrifugal extraction, temperature-controlled malaxation, nitrogen-blanketed storage, automated bottling with inert gas flushing. Grove tech: IoT soil moisture/nutrient sensors, drone-based canopy monitoring, weather stations for harvest optimization, precision irrigation. Quality: In-line NIR spectroscopy, digital batch tracking, blockchain-ready traceability.`,
      priority: 1 },

    // Quality
    { tags: ['quality','control','test','lab','assurance','coa','certificate','جودة','تحليل','مختبر'],
      fact: `Quality control on every batch: Free fatty acid analysis (acidity < 0.4%), peroxide value (< 20 meq O₂/kg), UV absorbance (K232, K270), polyphenol & tocopherol content, sensory panel evaluation by IOC-accredited tasters. Every shipment includes Certificate of Analysis and Certificate of Origin.`,
      priority: 1.5 },

    // Logo & Emblem
    { tags: ['logo','emblem','symbol','design','brand','شعار','علامة'],
      fact: `The THYNARA emblem features a classical Mediterranean figure holding a vessel of olive oil, set against a temple structure. Olive branches surround the figure — symbolizing peace and prosperity. The gold colour represents the richness of EVOO and Mediterranean warmth. The black background expresses elegance. Every element reflects tradition, craftsmanship, and respect for the land.`,
      priority: 1 },

    // CSR & Community
    { tags: ['community','social','responsib','csr','donat','local','impact','education','farmer','مجتمع','مسؤولية'],
      fact: `Community programmes: Supporting 200+ smallholder olive farmers with fair-trade pricing. Women's cooperatives partnership — 120+ women in Sfax region during harvest. 6 rural schools renovated since 2015. Young farmer training — 85 graduates placed. Environmental: 8,000 new trees annually, restoring degraded agricultural land. A portion of every export sale goes to our community development fund.`,
      priority: 1 },

    // Competitors / Why us
    { tags: ['why','better','differ','advantage','unique','stand out','compare','competitor','versus','منافس','لماذا'],
      fact: `What sets THYNARA apart: Single-origin traceability (every bottle traceable to specific groves). Cold-pressed within 4 hours (most competitors: 24–48 hours). Multiple Gold Medals at Mediterranean competitions. Two decades of expertise — one of Tunisia's most respected producers. We own and manage our groves — not a trader buying on the open market. Full certification: IOC, Organic, ISO, HACCP, Halal.`,
      priority: 1.5 },

    // Tunisia
    { tags: ['tunisia','tunis','sfax','sahel','kairouan','mediterranean','تونس','صفاقس','ساحل'],
      fact: `Tunisia is one of the world's largest olive oil producers. THYNARA operates across the finest olive-growing regions: Sfax, Kairouan, and the Sahel. Our facility is in Sakiet Ezzit, Sousse. Headquarters are in Les Berges du Lac, Tunis. Some of Tunisia's olive trees are over 1,000 years old — a heritage we honour with every pressing.`,
      priority: 0.8 },
  ]
}

/* ── Tokenize & normalize text ── */
function tokenize(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9\s\u0600-\u06FF\u00C0-\u024F]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1)
}

/* ── Score a knowledge entry against user input ── */
function scoreEntry(entry, tokens, inputLower) {
  let score = 0
  for (const tag of entry.tags) {
    // Exact word match
    if (tokens.includes(tag)) {
      score += 3 * entry.priority
    }
    // Partial / substring match
    else if (inputLower.includes(tag)) {
      score += 1.5 * entry.priority
    }
    // Fuzzy: check if any token starts with the tag or tag starts with token
    else {
      for (const tok of tokens) {
        if (tok.length >= 3 && (tag.startsWith(tok) || tok.startsWith(tag))) {
          score += 1 * entry.priority
          break
        }
      }
    }
  }
  return score
}

/* ── Compose a smart reply from top-matching knowledge ── */
function composeReply(input, history, kb) {
  const inputLower = input.toLowerCase()
  const tokens = tokenize(input)

  // Score all entries
  const scored = kb.map(entry => ({
    entry,
    score: scoreEntry(entry, tokens, inputLower)
  })).filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)

  if (scored.length === 0) return null

  // Get top matches (avoid repeating recent answers)
  const recentBotTexts = history.filter(m => m.role === 'bot').slice(-3).map(m => m.text)
  const topMatches = scored
    .filter(s => !recentBotTexts.some(r => r.includes(s.entry.fact.slice(0, 60))))
    .slice(0, 2)

  if (topMatches.length === 0) {
    // All top matches were recent — use the next best
    return scored[0].entry.fact
  }

  // Single strong match
  if (topMatches[0].score >= 6 || topMatches.length === 1) {
    return topMatches[0].entry.fact
  }

  // Two related matches — combine
  if (topMatches[1] && topMatches[1].score > topMatches[0].score * 0.5) {
    return topMatches[0].entry.fact + '\n\n' + topMatches[1].entry.fact
  }

  return topMatches[0].entry.fact
}

/* ── Sentiment detection ── */
const NEGATIVE = ['bad','terrible','awful','horrible','poor','worst','hate','angry','frustrated','disappointed','unacceptable','complain','complaint','issue','problem','wrong','broken','fail','mauvais','سيء','مشكلة']
const GREETINGS = ['hello','hi','hey','bonjour','salut','good morning','good afternoon','good evening','howdy','greetings','مرحبا','أهلا','صباح','مساء']
const THANKS = ['thank','thanks','merci','appreciate','great','perfect','awesome','excellent','amazing','wonderful','helpful','شكر']
const BYES = ['bye','goodbye','see you','take care','later','ciao','au revoir','good night','gotta go','وداع','مع السلامة']

/* ── Main reply engine ── */
function getReply(input, history, t, kb) {
  const lower = input.toLowerCase()

  // Negative sentiment
  if (NEGATIVE.some(w => lower.includes(w))) {
    return { text: "I'm sorry to hear that. Your feedback is very important to us. Please reach out to contact@thynara.tn and our Client Relations team will address your concern directly. We hold ourselves to the highest standards, and when we fall short, we want to make it right." }
  }

  // Greetings
  if (GREETINGS.some(w => lower.includes(w)) && input.length < 30) {
    return { text: `Welcome to THYNARA — a premium Tunisian olive oil producer based in Sfax, founded in 2005. I have deep knowledge about our olive oils, operations, heritage, certifications, partnerships, careers, and more. What would you like to know?`,
      chips: ['Our olive oil', 'Operations', 'Who founded THYNARA?'] }
  }

  // Thanks
  if (THANKS.some(w => lower.includes(w)) && input.length < 40) {
    return { text: "You're very welcome! If you have any other questions about THYNARA — our olive oil, operations, certifications, or partnership opportunities — I'm always here to help." }
  }

  // Bye
  if (BYES.some(w => lower.includes(w)) && input.length < 30) {
    return { text: "Thank you for chatting with THYNARA AI. It was a pleasure assisting you. We look forward to hearing from you again. Have an excellent day." }
  }

  // Knowledge-based reply
  const reply = composeReply(input, history, kb)
  if (reply) {
    // Generate contextual follow-up suggestions
    const chips = generateFollowUps(input, history)
    return { text: reply, chips }
  }

  // Fallback
  const userMsgCount = history.filter(m => m.role === 'user').length
  if (userMsgCount <= 1) {
    return { text: "Thank you for your question. I'd be happy to help. I have detailed knowledge about THYNARA's olive oil, production process, certifications, founder story, export operations, and more. Could you tell me what you're interested in?",
      chips: ['Extra Virgin Olive Oil', 'Operations', 'Heritage', 'Contact'] }
  }

  return { text: "That's a great question. While I don't have the specific details on hand, our team would be best positioned to give you an accurate answer. You can reach us at contact@thynara.tn or I can help you with information about our olive oils, operations, certifications, or partnership opportunities." }
}

/* ── Generate contextual follow-up chips ── */
function generateFollowUps(input, history) {
  const lower = input.toLowerCase()
  const discussed = history.map(m => m.text.toLowerCase()).join(' ')

  const options = [
    { chip: 'Tasting notes', check: ['product','oil','evoo','virgin'] },
    { chip: 'Technical specs', check: ['product','oil','quality'] },
    { chip: 'Available formats', check: ['product','oil','buy','order'] },
    { chip: 'Our certifications', check: ['quality','standard','safety'] },
    { chip: 'The founder', check: ['heritage','history','story','who'] },
    { chip: 'Our facility', check: ['operation','mill','press','process'] },
    { chip: 'Export & shipping', check: ['buy','order','price','partner'] },
    { chip: 'Sustainability', check: ['environment','organic','community'] },
    { chip: 'Career opportunities', check: ['job','career','work','join'] },
    { chip: 'Contact us', check: ['price','partner','invest','business'] },
  ]

  const relevant = options.filter(opt =>
    opt.check.some(c => lower.includes(c)) &&
    !discussed.includes(opt.chip.toLowerCase())
  ).slice(0, 3)

  return relevant.map(r => r.chip)
}

/* ═══════════════════════════════════════════
   Component
   ═══════════════════════════════════════════ */
export default function ChatBot() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const bottomRef = useRef(null)

  const kb = useMemo(() => buildKnowledgeBase(t), [t])

  /* Initialize greeting */
  useEffect(() => {
    const h = new Date().getHours()
    const period = h < 12 ? t('chat.greeting_morning') : h < 18 ? t('chat.greeting_afternoon') : t('chat.greeting_evening')
    const greeting = {
      role: 'bot',
      text: `${period}. I'm THYNARA's AI assistant — here to help you explore our olive oils, operations, heritage, and services. I have detailed knowledge about everything on this website. What can I assist you with?`,
    }
    setMessages([greeting])
    setSuggestions(['Our olive oil', 'Operations', 'Who founded THYNARA?'])
  }, [t])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const send = useCallback((text) => {
    const msg = (typeof text === 'string' ? text : input).trim()
    if (!msg || typing) return
    setInput('')
    setSuggestions([])
    setMessages(prev => [...prev, { role: 'user', text: msg }])
    setTyping(true)

    const result = getReply(msg, messages, t, kb)
    const baseDelay = 500
    const charDelay = Math.min(result.text.length * 2, 1800)
    const jitter = Math.random() * 400

    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { role: 'bot', text: result.text }])
      if (result.chips && result.chips.length) {
        setTimeout(() => setSuggestions(result.chips), 300)
      }
    }, baseDelay + charDelay + jitter)
  }, [input, typing, messages, t, kb])

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      <button
        className={`chat-fab ${open ? 'chat-fab--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? t('chat.closeChat') : t('chat.openChat')}
        style={{ cursor: 'none' }}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="4" y1="4" x2="16" y2="16" />
            <line x1="16" y1="4" x2="4" y2="16" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>

      <div className={`chat-window ${open ? 'chat-window--open' : ''}`}>
        <div className="chat-window__header">
          <div className="chat-window__status">
            <span className="chat-window__dot" />
            <span className="chat-window__label">{t('chat.label')}</span>
          </div>
          <span className="chat-window__sub">{t('chat.powered')}</span>
        </div>

        <div className="chat-window__body">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg chat-msg--${msg.role}`}>
              {msg.role === 'bot' && <span className="chat-msg__avatar">T</span>}
              <div className="chat-msg__bubble">
                {msg.text.split('\n').map((line, j) => (
                  <span key={j}>
                    {line.startsWith('•') ? (
                      <span className="chat-msg__bullet">{line}</span>
                    ) : line.startsWith('**') ? (
                      <strong>{line.replace(/\*\*/g, '')}</strong>
                    ) : line}
                    {j < msg.text.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
          {typing && (
            <div className="chat-msg chat-msg--bot">
              <span className="chat-msg__avatar">T</span>
              <div className="chat-msg__bubble chat-msg__typing">
                <span /><span /><span />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {suggestions.length > 0 && !typing && (
          <div className="chat-suggestions">
            {suggestions.map((s, i) => (
              <button key={i} className="chat-chip" onClick={() => send(s)} style={{ cursor: 'none' }}>
                {s}
              </button>
            ))}
          </div>
        )}

        <div className="chat-window__input">
          <input
            type="text"
            placeholder={t('chat.placeholder')}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            style={{ cursor: 'none' }}
          />
          <button
            onClick={() => send()}
            disabled={!input.trim() || typing}
            aria-label={t('chat.sendMessage')}
            style={{ cursor: 'none' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
