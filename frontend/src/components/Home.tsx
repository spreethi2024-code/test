import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to Full-Stack Monorepo</h1>
      <p>
        This is a demonstration of a full-stack application built with:
      </p>
      <ul>
        <li><strong>Frontend:</strong> React + TypeScript + Vite</li>
        <li><strong>Backend:</strong> Spring Boot + Java + Maven</li>
        <li><strong>Database:</strong> MySQL</li>
      </ul>
      <p>
        Navigate to the <strong>Items</strong> page to see the API integration in action.
      </p>
    </div>
  )
}

export default Home