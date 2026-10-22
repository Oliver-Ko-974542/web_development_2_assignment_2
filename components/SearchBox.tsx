/*
 * File: SearchBox.tsx
 * Author: Xiongxian Lei
 * Date: 2026-10-22
 * Description: A search input component that filters students by name.
 * Inputs (Props): searchTerm (string), onSearchChange (function to update state).
 * Processing: Takes the input value and passes it back to the parent.
 * Output: Renders a text input field.
 */

interface SearchBoxProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBox = ({ searchTerm, onSearchChange }: SearchBoxProps) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search students by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
      />
    </div>
  );
};

export default SearchBox;