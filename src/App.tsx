import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'

import styles from './App.module.scss'
import FullScreenMessage from './components/shared/FullScreenMessage'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:8888/wedding')
      .then((response) => {
        if (response.ok === false) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.')
        }

        return response.json()
      })
      .then((data) => {
        setWedding(data)
      })
      .catch((e) => setError(true))
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading === false) {
    return <FullScreenMessage type="loading" />
  }

  if (error) {
    return <div>에러가 발생했습니다.</div>
  }

  return <div className={cx('container')}></div>
}

export default App
