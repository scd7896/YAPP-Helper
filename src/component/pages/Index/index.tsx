import * as React from 'react'

import './styles.scss'
import GoogleLogin from '../../atomic/GoogleLogin'
import MailWriter from '../../atomic/MailWriter'

const Index = () => {
  return (
    <div className="index-test-wrapper">
      <GoogleLogin />  
      <MailWriter />      
    </div>
  )
}

export default Index