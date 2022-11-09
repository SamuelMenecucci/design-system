import { Button } from "@mui/material";
import { Search } from "@mui/icons-material";

export function Material({ classe }) {
  return (
    <Button
      variant="contained"
      // className={classe}
      startIcon={
        <Search sx={{ color: "#a2884f", width: "39px", height: "39px" }} />
      }
    >
      Nova Busca
    </Button>
  );
}
