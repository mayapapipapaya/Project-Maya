'use client'

import { useState } from 'react'
import styles from './RealtimeDemo.module.css'

// NOTE: These Convex hooks are stubs until npx convex dev is run and _generated files exist.
// Replace with real imports after running: npx convex dev
// import { useQuery, useMutation } from 'convex/react'
// import { api } from '../../convex/_generated/api'

type Item = { _id: string; name: string; createdAt: number }

function relativeTime(ts: number) {
  const diff = Math.floor((Date.now() - ts) / 1000)
  if (diff < 5) return 'just now'
  if (diff < 60) return `${diff}s ago`
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  return `${Math.floor(diff / 3600)}h ago`
}

export default function RealtimeDemo() {
  const [input, setInput] = useState('')
  // Stub: replace with useQuery(api.items.list) once Convex is initialized
  const [items, setItems] = useState<Item[]>([])

  const handleAdd = () => {
    if (!input.trim()) return
    // Stub: replace with useMutation(api.items.create)({ name: input })
    setItems((prev) => [
      { _id: crypto.randomUUID(), name: input.trim(), createdAt: Date.now() },
      ...prev.slice(0, 19),
    ])
    setInput('')
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Live, right now.</h2>
        <span className={styles.note}>Updates instantly across all open tabs ✦</span>

        <div className={styles.inputRow}>
          <input
            className={styles.input}
            type="text"
            placeholder="Type something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          />
          <button className={styles.btn} onClick={handleAdd}>Add</button>
        </div>

        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item._id} className={styles.item}>
              <span className={styles.itemName}>{item.name}</span>
              <span className={styles.itemTime}>{relativeTime(item.createdAt)}</span>
            </li>
          ))}
          {items.length === 0 && (
            <li className={styles.empty}>Nothing here yet — add something above!</li>
          )}
        </ul>
      </div>
    </section>
  )
}
