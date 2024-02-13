import { Pagination, Stack, Typography } from "@mui/material";
import React from "react";

const PaginationControlled = ({ count, page, handleChange }) => {
  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination color="primary" count={count} onChange={handleChange} />
    </Stack>
  );
};

export default PaginationControlled;
