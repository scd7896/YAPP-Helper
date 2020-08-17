import * as React from "react";
import loadable from "@loadable/component";
import { Switch, Route } from "react-router-dom";
import EmailGradeTemplate from "template/EmailGradeTemplate";
const EmailGradeFirst = loadable(() => import(/* webpackChunkName: "email_first" */ "./EmailGrade/First"));
const EmailGradeSecond = loadable(() => import(/* webpackChunkName: "email_second" */ "./EmailGrade/Second"));
const EmailGradeThird = loadable(() => import(/* webpackChunkName: "email_third" */ "./EmailGrade/Third"));
const EmailGradeFourth = loadable(() => import(/* webpackChunkName: "email_fourth" */ "./EmailGrade/Fourth"));
const EmailGradeFiveth = loadable(() => import(/* webpackChunkName: "email_fourth" */ "./EmailGrade/Fiveth"));

const EmailPage = () => {
  return (
    <div>
      <EmailGradeTemplate>
        <Switch>
          <Route path="/email/1" render={() => <EmailGradeFirst />} />
          <Route path="/email/2" render={() => <EmailGradeSecond />} />
          <Route path="/email/3" render={() => <EmailGradeThird />} />
          <Route path="/email/4" render={() => <EmailGradeFourth />} />
          <Route path="/email/5" render={() => <EmailGradeFiveth />} />
        </Switch>
      </EmailGradeTemplate>
    </div>
  );
};

export default EmailPage;
