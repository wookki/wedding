import classNames from 'classnames/bind'
import Dimmed from './Dimmed'
import styles from './Modal.module.scss'

const cx = classNames.bind(styles)

interface ModalProps {
  open: boolean
  title?: string
  body: React.ReactNode
  rightButtonLabel?: string
  onRightButtonClick: () => void
  leftButtonLabel?: string
  onLeftButtonClick: () => void
}

const Modal = ({
  open,
  title,
  body,
  leftButtonLabel = '닫기',
  onLeftButtonClick,
  rightButtonLabel = '확인',
  onRightButtonClick,
}: ModalProps) => {
  if (open === false) {
    return null
  }

  return (
    <Dimmed>
      <div className={cx('wrap-modal')}>
        <div className={cx('wrap-body')}>
          <div className={cx('wrap-content')}>
            {title && <div className={cx('txt-title')}>{title}</div>}
            {body}
          </div>
          <div className={cx('wrap-buttons')}>
            <button onClick={onRightButtonClick}>{leftButtonLabel}</button>
            <button onClick={onLeftButtonClick}>{rightButtonLabel}</button>
          </div>
        </div>
      </div>
    </Dimmed>
  )
}

export default Modal
