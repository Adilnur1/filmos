import { Button, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContextProvider";

const SideBar = () => {
  const { fetchByParams } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [value, setValue] = useState("");
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);
  function searchBtn() {
    fetchByParams("todoName", value);
  }
  return (
    <Paper sx={{ p: 2, display: "flex" }}>
      <form>
        <TextField
          onChange={(e) => setValue(e.target.value)}
          fullWidth
          variant="standard"
          label="search..."
        />
        <Button onClick={() => searchBtn()}>Search</Button>
      </form>
    </Paper>
  );
};

export default SideBar;
