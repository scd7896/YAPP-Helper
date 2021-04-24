import * as React from "react";

interface IProp extends React.DOMAttributes<HTMLFormElement> {
  onSubmit: (args: any) => void;
  type?: "multipart/form-data";
  style?: any;
}

export default function Form({ onSubmit, children, type, style }: IProp) {
  const formSubmitEventListener = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const obj = {};
    try {
      formData.forEach((value, key) => {
        const child = form.querySelector(`[name="${key}"]`) as any;
        if (child.hasAttribute("required")) {
          if (!value || (typeof value === "object" && value.size === 0)) {
            const message = child.dataset.message;
            throw message || `${key}값은 필수 입니다. 입력해주세요`;
          }
        }
        if (value) {
          obj[key] = value;
        }
      });
      onSubmit(type === "multipart/form-data" ? formData : obj);
    } catch (err) {
      alert(err);
    }
  }, []);

  return (
    <form style={style} onSubmit={formSubmitEventListener} noValidate>
      {children}
    </form>
  );
}
