import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { TextField } from "@mui/material";
import {
  changeFilter,
  changeFilterByNumber,
  selectNameFilter,
  selectNumberFilter,
} from "../../redux/filters/filtersSlice";
import { selectContacts } from "../../redux/contacts/contactsSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const selectorName = useSelector(selectNameFilter);
  const selectorNumber = useSelector(selectNumberFilter);
  const regex = /^\d+$/; // Тільки цифри

  const value = selectorName || selectorNumber || "";

  const contacts = useSelector(selectContacts);

  if (!contacts.length) return null;

  const handleSearch = (e) => {
    const valueSearch = e.target.value.trim();

    const isOnlyDigits = regex.test(valueSearch);

    if (valueSearch === value) return;
    if (!isOnlyDigits) {
      dispatch(changeFilter(valueSearch));
    } else {
      dispatch(changeFilterByNumber(valueSearch));
    }
  };

  return (
    <div className={css.container}>
      <p className={css.label}>Find contacts by name</p>

      <TextField
        name="name"
        sx={{ width: 300 }}
        fullWidth
        type="text"
        value={value}
        size="small"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
