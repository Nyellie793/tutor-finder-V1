/* eslint-disable react/prop-types */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const AppSelect = ({
  items,
  placeholder = "Select an option",
  width = "w-[180px]",
  onValueChange = (value) => console.log(value),
}) => {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className={width}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => {
          // Handle both object format and simple string format
          const value = typeof item === "object" ? item.value : item;
          const label = typeof item === "object" ? item.label : item;

          return (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default AppSelect;
