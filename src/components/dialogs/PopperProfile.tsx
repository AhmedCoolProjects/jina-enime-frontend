import { Button, Fade, Paper, Popper } from "@mui/material";
import { useRouter } from "next/router";
import { useSnackbar, VariantType } from "notistack";
import { logoutAction, useAppDispatch, useAppSelector } from "../../store";
import { useMutation } from "react-query";
import { appAxios } from "../../axios";

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
  const { enqueueSnackbar } = useSnackbar();
  function handleShowSnackbar(
    variant: VariantType,
    message: string,
    vertical: "top" | "bottom",
    horizontal: "left" | "center" | "right"
  ) {
    enqueueSnackbar(message, {
      variant,
      anchorOrigin: { vertical: vertical, horizontal: horizontal },
    });
  }
  const handleLogout = () => {
    dispatch(logoutAction());
    onClose();
    localStorage.removeItem("token");
    handleShowSnackbar("success", `Logout Successfully`, "bottom", "left");
    router.replace("/auth");
  };
  const {
    mutate: mutateStudentSendEmailVerification,
    isLoading: isStudentSendEmailVerificationLoading,
  } = useMutation(async () => {
    return await appAxios
      .post("/student/sendemail", {
        _id: user._id,
      })
      .then(async (res) => {
        if (res.data) {
          handleShowSnackbar("success", `${res.data}`, "top", "center");
        }
      })
      .catch((err) => {
        handleShowSnackbar(
          "error",
          `${err?.response?.data?.message || "Something went wrong"}`,
          "top",
          "center"
        );
      });
  });

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
            <h1
              className={
                user.email_verified
                  ? "text-green-500 text-sm font-medium"
                  : "text-red-500 text-sm font-medium"
              }
            >
              {user.email}
            </h1>
            {!user.email_verified ? (
              <Button
                fullWidth
                variant="outlined"
                className="text-red-500 border-red-500"
                onClick={() => mutateStudentSendEmailVerification()}
              >
                Verify Email
              </Button>
            ) : null}
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
