import { useEffect, useState, useCallback } from 'react'
import { useTranslation } from '../i18n/LanguageContext'

const ICONS = ['📄', '📊', '🛢️', '🤝', '📈', '🏗️', '🌍', '✅', '⚡', '🚢', '💼', '🔬']
const MSG_KEYS = [
  'notifications.msg1', 'notifications.msg2', 'notifications.msg3',
  'notifications.msg4', 'notifications.msg5', 'notifications.msg6',
  'notifications.msg7', 'notifications.msg8', 'notifications.msg9',
  'notifications.msg10', 'notifications.msg11', 'notifications.msg12',
]

let nextId = 0

export default function Notifications() {
  const [toasts, setToasts] = useState([])
  const usedIndices = useCallback(() => new Set(), [])
  const { t } = useTranslation()

  useEffect(() => {
    function showToast() {
      const pool = usedIndices()
      let idx
      do { idx = Math.floor(Math.random() * MSG_KEYS.length) } while (pool.has(idx) && pool.size < MSG_KEYS.length)
      if (pool.size >= MSG_KEYS.length) pool.clear()
      pool.add(idx)

      const id = nextId++
      setToasts(prev => [...prev.slice(-2), { id, icon: ICONS[idx], key: MSG_KEYS[idx] }])

      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id))
      }, 5000)
    }

    const first = setTimeout(() => {
      showToast()
      const interval = setInterval(showToast, 18000 + Math.random() * 17000)
      return () => clearInterval(interval)
    }, 8000 + Math.random() * 7000)

    return () => clearTimeout(first)
  }, [usedIndices])

  function dismiss(id) {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div className="toasts">
      {toasts.map(toast => (
        <div key={toast.id} className="toast" onClick={() => dismiss(toast.id)} style={{ cursor: 'none' }}>
          <span className="toast__icon">{toast.icon}</span>
          <span className="toast__text">{t(toast.key)}</span>
          <span className="toast__time">{t('notifications.justNow')}</span>
        </div>
      ))}
    </div>
  )
}
