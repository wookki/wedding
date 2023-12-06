import { useEffect, useState } from 'react'
import { getWedding } from '@/api/wedding'
import { Wedding } from '@models/wedding'

const useWedding = () => {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    getWedding()
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

  return { wedding, isLoading, error }
}

export default useWedding
