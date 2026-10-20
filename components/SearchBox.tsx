interface SearchBoxProps {
  searchText: string;
  onSearchTextChange: (value: string) => void;
}

const SearchBox = ({ searchText, onSearchTextChange }: SearchBoxProps) => {
  return (
    <div className="space-y-1">
      <label htmlFor="student-search" className="text-sm font-medium">
        Search by name
      </label>
      <input
        id="student-search"
        type="text"
        value={searchText}
        onChange={(event) => onSearchTextChange(event.target.value)}
        placeholder="Type a first or last name"
        className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
      />
    </div>
  );
};

export default SearchBox;
