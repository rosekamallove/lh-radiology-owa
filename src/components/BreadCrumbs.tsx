import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div
      style={{
        textTransform: "capitalize",
      }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={
          <NavigateNextIcon fontSize="small" sx={{ color: "white" }} />
        }
      >
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          fontWeight="bold"
          color="white"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        {pathnames.map((name, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return last ? (
            <Typography color="white" key={to}>
              {name.replace("-", " ")}
            </Typography>
          ) : (
            <Link
              underline="hover"
              fontWeight="bold"
              color="white"
              href={to}
              key={to}
            >
              {name.replace("-", " ")}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumbs;
