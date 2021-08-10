import { createContext, useState } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  return (
    <NewsContext.Provider value={{ bookmarks, setBookmarks }}>
      {children}
    </NewsContext.Provider>
  );
};
