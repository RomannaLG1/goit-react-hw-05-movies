import { PaginationItem } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export const BasicPagination = ({ count, page, onChange, navLink, query }) => {
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
            to={`/movies/?query=${query}&page=${item.page}`}
            {...item}
          />
        )}
      />
    </Stack>
  );
};
