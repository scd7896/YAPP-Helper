import * as React from 'react'

import './styles.scss'
import GoogleLogin from '../../component/atomic/GoogleLogin'
import NavText from '../../component/atomic/FontStyle/NavText'

const Index = () => {
  return (
    <div className="index-test-wrapper">
      <NavText>결과메일 발송</NavText>
      <GoogleLogin />  
    </div>
  )
}

export default Index