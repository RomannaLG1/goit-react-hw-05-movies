import { PaginationItem } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export const BasicPagination = ({ count, page, onChange, navLink }) => {
  return (
    <Stack spacing={3}>
      <Pagination
        sx={{ marginX: 'auto' }}
        showFirstButton
        showLastButton
        count={count}
        page={page}
        onChange={onChange}
        renderItem={item => (
          <PaginationItem
            component={navLink}
            to={`/home/?page=${item.page}`}
            {...item}
          />
        )}
      />
    </Stack>
  );
};
