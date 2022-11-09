import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export function InputSearchMaterial() {
  const useStyle = makeStyles({
    root: {
      "& .MuiOutlinedInput-input": {
        color: "green",
      },
      "& .MuiInputLabel-root": {
        color: "green",
      },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "green",
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "red",
      },
      "&:hover .MuiInputLabel-root": {
        color: "red",
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "red",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "purple",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "purple",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "purple",
      },
    },
  });

  return (
    <TextField
      label="Buscar por palavra chave"
      variant="outlined"
      sx={{
        "& .MuiInputLabel-root": {}, //styles the label
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#a2884f" },
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
          color: "purple",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#a2884f",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#a2884f",
          },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <Search sx={{ color: "#a2884f" }} />
          </InputAdornment>
        ),
      }}
    />
  );
}
