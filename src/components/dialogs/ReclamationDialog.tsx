// @ts-ignore
// @ts-nocheck

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
import { useState } from "react";
import { useAppSelector } from "../../store";
type props = {
  open: boolean;
  onClose: () => void;
};

type complaintDataProps = {
  title: string;
  description: string;
  image: string;
  type: string;
};

export function ReclamationDialog(props: props) {
  const isDark = useAppSelector((state) => state.mode.isDark);
  const { open, onClose } = props;
  const [complaintData, setComplaintData] = useState<complaintDataProps>({
    title: "",
    description: "",
    image: "",
    type: "",
  });
  const [file, setFile] = useState<File>();
  const onCloseDialog = () => {
    onClose();
    setComplaintData({
      title: "",
      description: "",
      image: "",
      type: "",
    });
    setFile(undefined);
  };

  return (
    <div className="w-full">
      <Dialog open={open} onClose={onCloseDialog}>
        <DialogTitle>Ajouter votre réclamation</DialogTitle>
        <DialogContent className="space-y-3">
          <DialogContentText>
            Remplissez le formulaire ci-dessous pour ajouter une réclamation. Et
            nous vous contacterons dans les plus brefs délais pour traiter votre
            demande.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Titre de la réclamation"
            type="text"
            fullWidth
            color={isDark ? "primary" : "secondary"}
            variant="standard"
            value={complaintData.title}
            onChange={(e) =>
              setComplaintData({ ...complaintData, title: e.target.value })
            }
          />
          <TextField
            margin="dense"
            id="description"
            label="Description de la réclamation"
            type="text"
            fullWidth
            color={isDark ? "primary" : "secondary"}
            variant="standard"
            style={{
              marginBottom: 24,
            }}
            value={complaintData.description}
            onChange={(e) =>
              setComplaintData({
                ...complaintData,
                description: e.target.value,
              })
            }
          />
          <FormControl fullWidth>
            <InputLabel
              color={isDark ? "primary" : "secondary"}
              id="type-complaint"
            >
              Type de réclamation
            </InputLabel>
            <Select
              labelId="type-complaint"
              label="Type de réclamation"
              value={complaintData.type}
              color={isDark ? "primary" : "secondary"}
              onChange={(e) =>
                setComplaintData({ ...complaintData, type: e.target.value })
              }
            >
              <MenuItem value="Complaint">
                Réclamation d&apos;un problème
              </MenuItem>
              <MenuItem value="Suggestion">
                Suggestion d&apos;amélioration
              </MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            id="image"
            label="Image"
            type="file"
            color={isDark ? "primary" : "secondary"}
            fullWidth
            variant="standard"
            onChange={(e) => setFile(e.target.files[0])}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <InputAdornment position="end">
                    <IconButton
                      // onClick={uploadFile}
                      disabled={
                        !complaintData.title ||
                        !complaintData.description ||
                        !complaintData.type ||
                        !file
                      }
                    >
                      <FiUploadCloud />
                    </IconButton>
                  </InputAdornment>
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color={isDark ? "primary" : "secondary"}
            onClick={onCloseDialog}
          >
            Cancel
          </Button>

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
