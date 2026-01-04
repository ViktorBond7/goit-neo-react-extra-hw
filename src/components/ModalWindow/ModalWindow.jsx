import { Box, Button, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const ModalWindow = ({ open, onClose, deleteContact }) => {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <Typography variant="h6">
            Are you sure you want to delete this?
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              mt: 3,
            }}
          >
            <Button sx={{ mt: 2 }} variant="contained" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ mt: 2 }}
              onClick={deleteContact}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ModalWindow;
