import styles from "./SearchInput.module.css";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.searchInput}
    />
  );
}

export default SearchInput;
