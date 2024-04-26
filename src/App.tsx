import AutoComplete from "./components/autocomplete/autocomplete";
import { Fragment, useRef, useState } from "react";
import { fetchUsers } from "./mockAPI/users";
import { getHighlightText } from "./utils/getHighlightText";
import { generateId } from "./utils/generateId";
import "./App.css";

type User = {
  id: number;
  name: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<User>();
  // I use useRef hook to handle race condition
  // There are few ways to handle, like with useEffect hook and one flag variable or debounce
  // With real Fetch request can be used AbortController
  const fetchIdRef = useRef<any>();

  const onSearch = async (value: string) => {
    setSearchValue(value);
    const id = generateId();
    fetchIdRef.current = id;
    const data: User[] = await fetchUsers(value);
    if (id === fetchIdRef.current) {
      setUsers(data);
    }
  };

  const onSelect = (user: User) => {
    setSelectedUser(user);
    setSearchValue(user.name);
    setUsers([]);
  };

  return (
    <>
      <h1>Just AutoComplete Component</h1>
      <AutoComplete
        searchValue={searchValue}
        onSearch={onSearch}
        items={users}
        onSelect={onSelect}
        renderItem={(item) => {
          // scope of this task there isn't advantage to call getHighlightText function when data recevied.
          // So it can be called on the 28 line in case the component has other states which can lead to re-render
          // there also can be used dangerouslySetInnerHTML
          return getHighlightText(item.name, searchValue).map((item, index) => (
            <Fragment key={index}>{item.matched ? <b>{item.text}</b> : item.text}</Fragment>
          ));
        }}
      />
    </>
  );
}

export default App;
