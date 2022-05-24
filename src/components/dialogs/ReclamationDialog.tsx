import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  IconButton,
} from "@mui/material";
import { FiUploadCloud } from "react-icons/fi";

type props = {
  open: boolean;
  onClose: () => void;
};

export function ReclamationDialog(props: props) {
  const { open, onClose } = props;

  return (
    <div className="w-full">
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Ajouter votre réclamation</DialogTitle>
        <DialogContent className="space-y-3">
          <DialogContentText>Une réclamation.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="first_name"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="last_name"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="linkedin"
            label="Linkedin"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="profession"
            label="Profession"
            type="text"
            fullWidth
            variant="standard"
          />
          {/* input for image upload */}
          <TextField
            margin="dense"
            id="image"
            label="Image"
            type="file"
            fullWidth
            variant="standard"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton disabled={false}>
                    <FiUploadCloud />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControl fullWidth>
            <InputLabel id="person-category">Category</InputLabel>
            <Select labelId="person-category" label="Category">
              <MenuItem value="board">Board</MenuItem>
              <MenuItem value="member">Member</MenuItem>
              <MenuItem value="guest">Guest</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="person-post">Post</InputLabel>
            <Select labelId="person-post" label="Post">
              <MenuItem value="prof">Prof</MenuItem>
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="laureate">Laureate</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="person-is-hiddent">Is Hidden</InputLabel>
            <Select labelId="person-is-hiddent" label="Is Hidden">
              <MenuItem value="false">NO</MenuItem>
              <MenuItem value="true">YES</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>

          {/* {person.id && person.image && (
            <Button onClick={updatePerson}>Update Person</Button>
          )} */}
          {/* {!person.id && (
            <Button
              disabled={
                !person.first_name ||
                !person.last_name ||
                !person.category ||
                !person.profession ||
                !person.image ||
                !person.post
              }
              onClick={handleSubmit}
            >
              Add Person
            </Button>
          )} */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
