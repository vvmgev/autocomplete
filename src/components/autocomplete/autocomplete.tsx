import { FC, ReactNode, useEffect, useRef, useState } from "react";
import "./autocomplete.css";

type Props = {
  searchValue: string;
  onSearch: (value: string) => void;
  onSelect: (item: any) => void;
  items: any[];
  renderItem: (item: any) => ReactNode;
};

const AutoComplete: FC<Props> = ({ searchValue, onSearch, onSelect, items, renderItem }) => {
  const [focused, setFocused] = useState(false);
  // onBlur uses the async function because of click event on li tag hides the list first
  // and the onSelect function was never called
  const onBlur = () => setTimeout(setFocused, 150, false);
  const onFocus = () => setFocused(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const calculateListPosition = () => {
    if (!inputRef.current || !listRef.current) return;
    const inputRect = inputRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const listHeight = listRef.current.offsetHeight;
    const spaceBelow = windowHeight - inputRect.bottom;
    if (spaceBelow >= listHeight) {
      listRef.current.style.top = `10px`;
    } else {
      listRef.current.style.top = `-${listHeight + 10}px`;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", calculateListPosition);
    return () => {
      window.removeEventListener("resize", calculateListPosition);
    };
  }, []);

  useEffect(() => {
    calculateListPosition();
  }, [items]);

  return (
    <div className="autocomplete">
      <input
        type="text"
        className="search"
        onChange={(event) => onSearch(event.target.value)}
        value={searchValue}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={inputRef}
        placeholder="Type to search"
      />
      {focused && (
        <ul className="list" ref={listRef}>
          {items.map((item) => (
            <li key={item.id} onClick={() => onSelect(item)}>
              {renderItem(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
