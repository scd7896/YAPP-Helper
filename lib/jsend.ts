export const createJsend = (status: "success" | "failure", data: object | string) => {
  return {
    status,
    message: status === "failure" && data,
    payload: status === "success" && data,
  };
};
