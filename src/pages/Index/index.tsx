import * as React from "react";
import GoogleLogin from "atomic/GoogleLogin";

import { IndexDiv, HelperTextLogoSpan, GoogleLoginTitleSpan } from "./Index.styles";

const Index = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const items = new Array(1000).fill(0);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        console.log(entry); // entry is 'IntersectionObserverEntry'
      });
    });
    observer.observe(ref.current);
  }, []);
  return (
    <IndexDiv>
      <div ref={ref} onScroll={(e) => console.log(e)}>
        {items.map((_, index) => (
          <div key={index}>tsss</div>
        ))}
      </div>
    </IndexDiv>
  );
};

export default Index;
