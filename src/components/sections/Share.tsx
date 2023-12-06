import classNames from 'classnames/bind'
import { useEffect } from 'react'
import styles from './Share.module.scss'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import Section from '../shared/Section'
import CopyToClipboard from 'react-copy-to-clipboard'

const cx = classNames.bind(styles)

declare global {
  interface Window {
    Kakao: any
  }
}

interface ShareProps {
  groomName: string
  brideName: string
  date: string
}

const Share = ({ groomName, brideName, date }: ShareProps) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js`
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY)
      }
    }
  })

  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${groomName} 💗 ${brideName} 결혼합니다`,
        description: `${format(parseISO(date), 'M월 d일 eeee aaa h시', {
          locale: ko,
        })}`,
        imageUrl:
          'data:image/jpeg;base64,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',
        link: {
          mobileWebUrl: window.location.origin,
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: '청첩장 보기',
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
      ],
    })
  }

  return (
    <Section title="공유하기">
      <div className={cx('wrap-share')}>
        <button type="button" onClick={handleShareKakao}>
          <IconKakao />
        </button>
        <CopyToClipboard
          text={window.location.origin}
          onCopy={() => {
            alert('복사가 완료되었습니다.')
          }}
        >
          <button type="button">
            <IconClipboard />
          </button>
        </CopyToClipboard>
      </div>
    </Section>
  )
}

const IconKakao = () => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <title />
      <g
        data-name="kakao talk chat media social"
        id="kakao_talk_chat_media_social"
      >
        <path d="M29.88,13.06a1,1,0,0,0-1,1c0,5.42-5.78,9.83-12.88,9.83a15.91,15.91,0,0,1-2.19-.16,1,1,0,0,0-.89.34,13.88,13.88,0,0,1-4,3,8.32,8.32,0,0,0,.71-3.91,1,1,0,0,0-.56-.81c-3.75-1.83-6-4.92-6-8.28C3.12,8.63,8.9,4.22,16,4.22A14.15,14.15,0,0,1,26.87,8.79,1,1,0,1,0,28.4,7.5C25.64,4.2,21,2.22,16,2.22,7.79,2.22,1.12,7.53,1.12,14.06c0,4,2.44,7.6,6.56,9.8a8.82,8.82,0,0,1-1.29,3.91A.85.85,0,0,0,6.3,28a1.39,1.39,0,0,0,.54,1.52,1.35,1.35,0,0,0,1.52.07,18.49,18.49,0,0,0,5.72-3.8,18.71,18.71,0,0,0,1.92.11c8.21,0,14.88-5.31,14.88-11.83A1,1,0,0,0,29.88,13.06Z" />
        <path d="M10.79,17.62A1,1,0,0,0,12.08,17l1.06-2.76L14.21,17a1,1,0,0,0,.93.64,1.13,1.13,0,0,0,.36-.06,1,1,0,0,0,.58-1.3l-2-5.18a1,1,0,0,0-1.87,0l-2,5.18A1,1,0,0,0,10.79,17.62Z" />
        <path d="M17.51,10.5a1,1,0,0,0-1,1v5.18a1,1,0,0,0,1,1h2.56a1,1,0,0,0,0-2H18.51V11.5A1,1,0,0,0,17.51,10.5Z" />
        <path d="M8.46,17.68a1,1,0,0,0,1-1V12.5h.75a1,1,0,0,0,0-2H6.71a1,1,0,0,0,0,2h.75v4.18A1,1,0,0,0,8.46,17.68Z" />
        <path d="M22.46,10.5a1,1,0,0,0-1,1v5.18a1,1,0,0,0,2,0v-1.2L25,17.32a1,1,0,0,0,.77.36A1,1,0,0,0,26.53,16l-2-2.34,1.8-1.41a1,1,0,0,0-1.23-1.58L23.46,12V11.5A1,1,0,0,0,22.46,10.5Z" />
      </g>
    </svg>
  )
}

const IconClipboard = () => {
  return (
    <svg
      enable-background="new 0 0 48 48"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 48 48"
    >
      <path
        clip-rule="evenodd"
        d="M37,47H11c-2.209,0-4-1.791-4-4V8c0-2.209,1.791-4,4-4h3l0,0c0.553,0,1,0.448,1,1  s-0.447,1-1,1l0,0h-3C9.896,6,9,6.896,9,8v35c0,1.104,0.896,2,2,2h26c1.104,0,2-0.896,2-2V8c0-1.104-0.896-2-2-2h-3l0,0  c-0.553,0-1-0.448-1-1s0.447-1,1-1c0,0,0,0,0.001,0H37c2.209,0,4,1.791,4,4v35C41,45.209,39.209,47,37,47z M35,9  c0,0.552-0.447,1-1,1H14c-0.553,0-1-0.448-1-1s0.447-1,1-1c0,0,1.125-0.125,2-1l2-2c0,0,0.781-1,2-1h1c0-1.657,1.344-3,3-3  c1.657,0,3,1.343,3,3h1c1.312,0,2,1,2,1l2,2c0.875,0.875,2,1,2,1C34.553,8,35,8.448,35,9z M24,3c-0.553,0-1,0.448-1,1h2  C25,3.448,24.553,3,24,3z M29.363,7c0,0-0.679-1-1.817-1h-7.091c-1.14,0-1.818,1-1.818,1l-0.909,1h12.545L29.363,7z"
        fill-rule="evenodd"
      />
    </svg>
  )
}

export default Share
