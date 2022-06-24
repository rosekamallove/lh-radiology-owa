import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";

export default function TableSkeleton() {
  return (
    <Box sx={{ my: 2 }}>
      <Skeleton sx={{ minWidth: 650, padding: 5 }} />
      <Skeleton sx={{ minWidth: 650, padding: 3 }} />
      <Skeleton sx={{ minWidth: 650, padding: 3 }} />
      <Skeleton sx={{ minWidth: 650, padding: 3 }} />
      <Skeleton sx={{ minWidth: 650, padding: 3 }} />
      <Skeleton sx={{ minWidth: 650, padding: 3 }} />
    </Box>
  );
}
