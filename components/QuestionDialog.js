import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert";

export default function QuestionDialog(props) {
    const { open, onClose, onSubmit } = props;
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (...args) => {
        if (content.replace(/\s/g, "") === "") {
            setError(true);
            return;
        }
        if (content.toLowerCase().includes("test") || content.includes("测试")) {
            setError(true);
            return;
        }
        onSubmit(content);
        setContent("");
        onClose(...args);
    };

    const handleClose = (...args) => {
        onClose(...args);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>提问</DialogTitle>
                <DialogContent>
                    <Alert severity="warning">
                        <strong>
                            除了问题以外的任何信息都不会被记录。
                            Anything other than the question will not be recorded.
                            <br />
                            只有被回答的问题才会出现在首页列表中。
                            Only answered questions will appear in the list on the homepage.
                        </strong>
                    </Alert>
                    <TextField
                        fullWidth
                        error={error}
                        value={content}
                        onInput={(e) => {
                            setContent(e.target.value);
                        }}
                        rows={4}
                        multiline
                        margin="dense"
                        id="content"
                        label="Question Content"
                        variant="filled"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
