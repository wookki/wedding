import logo from './logo.svg'
import './App.css'

import classNames from 'classnames/bind'

import styles from './App.module.scss'

const cx = classNames.bind(styles)

function App() {
  return (
    <div className="App">
      <header className={cx('container')}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactyar
        </a>
      </header>
    </div>
  )
}

export default App
