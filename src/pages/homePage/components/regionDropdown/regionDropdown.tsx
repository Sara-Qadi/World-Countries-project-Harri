import { useState } from "react";
import styles from "./regionDropdown.module.css";

interface RegionDropdownProps {
  value: string;
  onChange: (region: string) => void;
  regions: string[];
}

function RegionDropdown({ value, onChange, regions }: RegionDropdownProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (region: string) => {
    onChange(region);
    setOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.selected} onClick={() => setOpen(!open)}>
        {value || "Filter by region"}
      </div>

      {open && (
        <div className={styles.options}>
          {regions.map((region) => (
            <div
              key={region}
              className={styles.option}
              onClick={() => handleSelect(region)}
            >
              {region}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RegionDropdown;
