import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { TextField } from "@mui/material";
import {
  changeFilter,
  selectNameFilter,
} from "../../redux/filters/filtersSlice";
import { selectContacts } from "../../redux/contacts/contactsSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const contacts = useSelector(selectContacts);

  if (!contacts.length) return;

  const handleSearch = (e) => {
    const valueSearch = e.target.value.trim();
    dispatch(changeFilter(valueSearch));
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
