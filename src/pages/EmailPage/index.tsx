import * as React from "react";
import { Switch, Route } from "react-router-dom";
import EmailGradeTemplate from "template/EmailGradeTemplate";
import EmailGradeFirst from "./EmailGrade/First";
import EmailGradeSecond from "./EmailGrade/Second";
import EmailGradeThird from "./EmailGrade/Third";
import EmailGradeFourth from "./EmailGrade/Fourth";
import EmailGradeFiveth from "./EmailGrade/Fiveth";

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
