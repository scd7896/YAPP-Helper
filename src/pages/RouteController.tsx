import * as React from "react";
import { Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { Modal } from "atomic";
const Recruit = loadable(() => import(/* webpackChunkName: "recruit" */ "./Recruit/RecruitPage"));
const SelectPage = loadable(() => import(/* webpackChunkName: "select" */ "./Select/SelectPage"));
const Index = loadable(() => import(/* webpackChunkName: "root" */ "./Index"));
const SelectMailType = loadable(() => import(/* webpackChunkName: "mail_type_select" */ "./SelectMailType"));
const EmailPage = loadable(() => import(/* webpackChunkName: "email_page" */ "./EmailPage"));
const MailFormPage = loadable(() => import(/* webpackChunkName: "mail_form" */ "./MailForm/MailFormPage"));
const CertificateCompletion = loadable(
  () => import(/* webpackChunkName: "certificate" */ "./CertificateCompletion/CertificateCompletion")
);
const UsersPage = loadable(() => import(/* webpackChunkName: "users" */ "./Users/Users"));
const InvitationPage = loadable(() => import(/* webpackChunkName: "invitation" */ "./Invitation/Invitation"));
const CertificateFormPage = loadable(
  () => import(/* webpackChunkName: "certificate_form" */ "./CertificateForm/CertificateForm")
);

const RouteController = () => {
  return (
    <React.Suspense fallback={() => <div>로딩중</div>}>
      <Modal />
      <Switch>
        <Route path="/" exact={true} component={Index} />
        <Route path="/select" exact={true} component={SelectPage} />
        <Route path="/recruit" exact={true} component={Recruit} />
        <Route path="/email/:grade" component={EmailPage} />
        <Route path="/email" component={SelectMailType} />
        <Route path="/mailform" component={MailFormPage} />
        <Route path="/certificate" component={CertificateCompletion} />
        <Route path="/users" exact component={UsersPage} />
        <Route path="/invitation" exact component={InvitationPage} />
        <Route path="/certificate_form" exact component={CertificateFormPage} />
      </Switch>
    </React.Suspense>
  );
};

export default RouteController;
