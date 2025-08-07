import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface Item {
  id: number
  name: string
  description: string
}

const Items: React.FC = () => {
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await axios.get('http://localhost:8080/api/items')
      setItems(response.data)
    } catch (err) {
      setError('Failed to fetch items. Make sure the backend is running.')
      console.error('Error fetching items:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="loading">Loading items...</div>
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
        <button onClick={fetchItems} className="retry-button">
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="items">
      <h1>Items from API</h1>
      <p>This page demonstrates fetching data from the Spring Boot backend.</p>
      
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <div className="items-grid">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="item-id">ID: {item.id}</span>
            </div>
          ))}
        </div>
      )}
      
      <button onClick={fetchItems} className="refresh-button">
        Refresh Items
      </button>
    </div>
  )
}

export default Items