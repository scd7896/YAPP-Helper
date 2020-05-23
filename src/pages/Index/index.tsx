import * as React from 'react'

import './styles.scss'
import GoogleLogin from '../../component/atomic/GoogleLogin'
import MailWriter from '../../component/atomic/MailWriter'

const Index = () => {
  return (
    <div className="index-test-wrapper">
      <GoogleLogin />  
      <MailWriter />      
    </div>
  )
}

export default Index