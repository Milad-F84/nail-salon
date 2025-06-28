import ContactUs from "../components/ContactUs";
import Location from "../components/Location";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function ContactUsPage() {
  return (
    <>
      <div className="mb-6 mt-5 container-primary">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{
            "& .MuiBreadcrumbs-li": {
              display: "flex",
              alignItems: "center",
              fontSize: "1rem",
            },
          }}
        >
          <Link
            underline="hover"
            color="inherit"
            href="/"
            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
          >
            <HomeIcon sx={{ fontSize: 20 }} />
            خانه
          </Link>
          <Typography
            color="primary"
            sx={{ display: "flex", alignItems: "center", fontWeight: 500 }}
          >
            ارتباط با ما
          </Typography>
        </Breadcrumbs>
      </div>
      <Location />
      <div className="bg-[#f5eae4]">
        <ContactUs />
      </div>
    </>
  );
}
