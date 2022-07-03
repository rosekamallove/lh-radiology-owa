import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  tableCellClasses,
  TableContainer,
  Paper,
  TableBody,
  Link,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { OpenInNew } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export default function SearchTable({ result }: { result: any }) {
  const navigate = useNavigate()
  return (
    <>
      <Typography variant="body1">
        Showing {result.data?.entry?.length ?? 0} results
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ fontWeight: 'bold' }}>
              <StyledTableCell>S. No</StyledTableCell>
              <StyledTableCell>Identifier</StyledTableCell>
              <StyledTableCell>Family Name</StyledTableCell>
              <StyledTableCell>Given Name</StyledTableCell>
              <StyledTableCell>Gender</StyledTableCell>
              <StyledTableCell>Full URL</StyledTableCell>
              <StyledTableCell>Dashboard</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result.data?.entry?.map((e: any, idx: number) => (
              <StyledTableRow key={idx}>
                <StyledTableCell component="th" scope="row">
                  {idx + 1}
                </StyledTableCell>
                <StyledTableCell>{e.resource?.id}</StyledTableCell>
                <StyledTableCell>
                  {e.resource?.name?.[0]?.family}
                </StyledTableCell>
                <StyledTableCell>
                  {e.resource?.name?.[0]?.given?.[0]}
                </StyledTableCell>
                <StyledTableCell sx={{ textTransform: 'capitalize' }}>
                  {e.resource?.gender}
                </StyledTableCell>
                <StyledTableCell>
                  <Link href={e.fullUrl}>{e.fullUrl}</Link>
                </StyledTableCell>
                <StyledTableCell
                  onClick={() => navigate(`/search-patient/${e.resource?.id}`)}
                  sx={{ cursor: 'pointer' }}
                >
                  <Link>
                    <OpenInNew />
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: '0',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '0px',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))
