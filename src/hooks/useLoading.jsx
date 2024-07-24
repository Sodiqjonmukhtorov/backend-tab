import React from "react";

export const useLoading = () => {
  const [isloading, setUseloading] = React.useState(false);
  const onload = () => setUseloading(true);
  const endload = () => setUseloading(false);
  return { isloading, onload, endload };
};
