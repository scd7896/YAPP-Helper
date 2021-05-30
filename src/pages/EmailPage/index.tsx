import * as React from "react";
import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import EmailGradeTemplate from "template/EmailGradeTemplate/EmailGradeTemplate";
import useDesire from "hooks/useDesire";
import EmailGradeFirst from "./EmailGrade/First/EmailFirstGrade";
import EmailGradeSecond from "./EmailGrade/Second/EmailSecondGrade";
import EmailGradeThird from "./EmailGrade/Third/EmailThirdGrade";
import EmailGradeFourth from "./EmailGrade/Fourth/EmailFourthGrade";
import EmailGradeFiveth from "./EmailGrade/Fiveth/EmailFivethGrade";

const EmailPage = () => {
  const { initDesire } = useDesire();

  useEffect(
    () => () => {
      initDesire();
    },
    [initDesire]
  );
  return (
    <div>
      <EmailGradeTemplate>
        <Switch>
          <Route path="/email/1" component={EmailGradeFirst} />
          <Route path="/email/2" component={EmailGradeSecond} />
          <Route path="/email/3" component={EmailGradeThird} />
          <Route path="/email/4" component={EmailGradeFourth} />
          <Route path="/email/5" component={EmailGradeFiveth} />
        </Switch>
      </EmailGradeTemplate>
    </div>
  );
};

export default EmailPage;
