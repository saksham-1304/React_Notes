import React from 'react'
import WelcomeMessage from './WelcomeMessage'

const App = () => {
  return (
    <section id="section" >
      <div>
        <h1>My Website</h1>
        <article>
          <h2>Welcome to React</h2>
          <p className="text">Paragraph Content</p>
        </article>
      </div>
      <WelcomeMessage />
    </section>

  )
}

export default App