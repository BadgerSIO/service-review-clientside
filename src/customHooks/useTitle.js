import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}  Precision Law`;
  }, [title]);
};
export default useTitle;
