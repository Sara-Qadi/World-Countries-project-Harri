
import RegionDropdown from "../regionDropdown/regionDropdown";
import SearchInput from "../searchInput/searchInput";
import styles from "./ToolBar.module.css";

interface ToolBarProps {
  query: string;
  setQuery: (value: string) => void;
  filter: string;
  setFilter: (value: string) => void;
  regions: string[];
}

function ToolBar({ query, setQuery, filter, setFilter, regions }: ToolBarProps) {
  return (
    <div className={styles.toolBar}>
      <SearchInput value={query} onChange={setQuery} />
      <RegionDropdown value={filter} onChange={setFilter} regions={regions} />
    </div>
  );
}

export default ToolBar;
