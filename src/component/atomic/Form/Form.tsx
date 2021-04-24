import * as React from "react";

interface IProp extends React.DOMAttributes<HTMLFormElement> {
  onSubmit: (args: any) => void;
  type?: "multipart/form-data";
}

export default function Form({ onSubmit, children, type }: IProp) {
  const formSubmitEventListener = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const obj = {};
    formData.forEach((value, key) => {
      if (value) {
        obj[key] = value;
      }
    });
    onSubmit(type === "multipart/form-data" ? formData : obj);
  }, []);

  return <form onSubmit={formSubmitEventListener}>{children}</form>;
}
