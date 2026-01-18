export interface FilterValues {
  search: string;
}

export interface SearchProps {
  setSearched: React.Dispatch<React.SetStateAction<string>>;
}
