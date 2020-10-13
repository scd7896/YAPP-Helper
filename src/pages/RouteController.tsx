import * as React from "react";
import { Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { Modal } from "atomic";
const Recruit = loadable(() => import(/* webpackChunkName: "recruit" */ "./Recruit"));
const SelectPage = loadable(() => import(/* webpackChunkName: "select" */ "./Select"));
const Index = loadable(() => import(/* webpackChunkName: "root" */ "./Index"));
const SelectMailType = loadable(() => import(/* webpackChunkName: "mail_type_select" */ "./SelectMailType"));
const EmailPage = loadable(() => import(/* webpackChunkName: "email_page" */ "./EmailPage"));
const MailFormPage = loadable(() => import(/* webpackChunkName: "mail_form" */ "./MailForm"));
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
      </Switch>
    </React.Suspense>
  );
};

export default RouteController;
