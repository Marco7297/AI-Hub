import React, { createContext, useContext, useState, useEffect } from 'react';

interface BookmarkContextType {
  bookmarkedIds: string[];
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  comparedIds: string[];
  toggleCompare: (id: string) => void;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
  isCompared: (id: string) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aihub_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [comparedIds, setComparedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aihub_compared');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('aihub_bookmarks', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  useEffect(() => {
    localStorage.setItem('aihub_compared', JSON.stringify(comparedIds));
  }, [comparedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isBookmarked = (id: string) => bookmarkedIds.includes(id);

  const toggleCompare = (id: string) => {
    setComparedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 3) {
        alert('You can compare a maximum of 3 tools at a time.');
        return prev;
      }
      return [...prev, id];
    });
  };

  const removeFromCompare = (id: string) => {
    setComparedIds((prev) => prev.filter((item) => item !== id));
  };

  const clearCompare = () => {
    setComparedIds([]);
  };

  const isCompared = (id: string) => comparedIds.includes(id);

  return (
    <BookmarkContext.Provider
      value={{
        bookmarkedIds,
        toggleBookmark,
        isBookmarked,
        comparedIds,
        toggleCompare,
        removeFromCompare,
        clearCompare,
        isCompared,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};
