import React from 'react'

const App = () => {
  let a = 5;
  let b = 5;
  return (
    <div>
      <p>Hello</p>

      <ul>
        <li>User 1</li>
        <li>User 2</li>
      </ul>

      <p data-testid="myTestId">Afzal</p>
      <span title="sum">{a+b}</span>
    </div>
  )
}

export default App