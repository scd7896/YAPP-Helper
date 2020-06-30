import * as React from 'react'
import classNames from 'classnames/bind'
import GoogleLogin from '../../component/atomic/GoogleLogin'
import styles from './styles.scss'

const cx = classNames.bind(styles);

const Index = () => {
  return (
    <div className={cx("index-test-wrapper")}>
      <span className={cx("helperFontLogo")}>YAPP Helper</span>
      <span className={cx("googleLoginTitle")}>로그인하세요</span>
      <GoogleLogin />  
    </div>
  )
}

export default Index