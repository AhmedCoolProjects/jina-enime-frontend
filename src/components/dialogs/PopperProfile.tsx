import { Button, Fade, Paper, Popper } from "@mui/material";
import { useRouter } from "next/router";
import { useSnackbar, VariantType } from "notistack";
import { logoutAction, useAppDispatch, useAppSelector } from "../../store";

type props = {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
};

export function PopperProfile(props: props) {
  const { open, anchorEl, onClose } = props;
  const isDark = useAppSelector((state) => state.mode.isDark);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  function handleShowSnackbar(variant: VariantType, message: string) {
    enqueueSnackbar(message, { variant });
  }
  const { enqueueSnackbar } = useSnackbar();
  const handleLogout = () => {
    dispatch(logoutAction());
    onClose();
    localStorage.removeItem("token");
    handleShowSnackbar("success", `Logout Successfully`);
    router.replace("/auth");
  };

  return (
    <Popper
      className="z-50"
      open={open}
      anchorEl={anchorEl}
      placement="bottom-end"
      transition
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper
            elevation={3}
            className="flex flex-col items-center space-y-3 py-3 px-8 "
          >
            <h1 className="text-xl font-semibold">
              {user.first_name} {user.last_name}
            </h1>
            <h1>
              Chambre: <span className="font-semibold">{user.room_number}</span>
            </h1>
            <h1 className="text-sm font-medium">{user.email}</h1>
            <Button
              fullWidth
              variant="outlined"
              color={isDark ? "primary" : "secondary"}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}
