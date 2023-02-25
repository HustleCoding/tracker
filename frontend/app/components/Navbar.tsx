import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <Box>
      <AppBar className="bg-richBlack">
        <Toolbar className="flex justify-between">
          <Button className="hover:bg-prussianBlue" variant="contained">
            Courses
          </Button>
          <Button className="hover:bg-prussianBlue" variant="contained">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
