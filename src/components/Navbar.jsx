import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import DvrIcon from "@mui/icons-material/Dvr";
import ContactlessIcon from "@mui/icons-material/Contactless";

const navigation = [
  { name: "Home", icon: HomeIcon, path: "/" },
  { name: "About", icon: PersonPinCircleIcon, path: "/about" },
  { name: "Project", icon: DvrIcon, path: "/project" },
  { name: "Contact", icon: ContactlessIcon, path: "/contact" },
];
const Navbar = () => {
  return (
    <Box
      position={"fixed"}
      width={"80%"}
      top={40}
      left={250}
      zIndex={2}
      py={3}
      sx={{ backgroundColor: "#F1EEEA" }}
      display={"flex"}
      gap={8}
      justifyContent={"end"}
      px={10}
    >
      {navigation.map(({ name, path, icon: Icon }) => (
        <Box
          position={"relative"}
          sx={{
            color: "black",
            ":after": {
              content:"''",
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              width: "0",
              height: "2px",
              backgroundColor: "#715D51",
              transition: "width 0.3s ease-in-out",
              transform: "translateX(-50%)",
              
            },
            ":hover":{":after":{width:"100%"}, color:"green"}
          }}
        >
          <Link
            to={path}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              textTransform: "uppercase",
            }}
          >
            <Icon style={{ color: "#62402A" }} />
            {name}
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default Navbar;
