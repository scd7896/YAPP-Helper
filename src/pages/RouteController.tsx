import * as React from "react";
import { Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { Modal } from "atomic";
import Recruit from './Recruit/RecruitPage';
import SelectPage from './Select/SelectPage';
import Index from './Index';
import SelectMailType from './SelectMailType'
import EmailPage from './EmailPage'
import MailFormPage from './MailForm/MailFormPage'
import CertificateCompletion from './CertificateCompletion/CertificateCompletion' 
import UsersPage from './Users/Users'
import InvitationPage from './Invitation/Invitation'
import CertificateFormPage from './CertificateForm/CertificateForm'

const RouteController = () => (
  <React.Suspense fallback={() => <div>로딩중</div>}>
    <Modal />
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/select" exact component={SelectPage} />
      <Route path="/recruit" exact component={Recruit} />
      <Route path="/email/:grade" component={EmailPage} />
      <Route path="/email" component={SelectMailType} />
      <Route path="/mailform" component={MailFormPage} />
      <Route path="/certificate/:id" component={CertificateCompletion} />
      <Route path="/users" exact component={UsersPage} />
      <Route path="/invitation" exact component={InvitationPage} />
      <Route path="/certificate_form" exact component={CertificateFormPage} />
    </Switch>
  </React.Suspense>
);

export default RouteController;
