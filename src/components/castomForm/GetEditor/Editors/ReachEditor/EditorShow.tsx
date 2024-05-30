import 'react-quill/dist/quill.snow.css';
import 'highlight.js/scss/an-old-hope.scss';

import { Box } from '@mui/material';

interface EditorShowProps {
    articleDescription: string;
}

const EditorShow = ({ articleDescription }: EditorShowProps) => {
    return (
        <>
            <Box
                className="ql-snow"
                sx={{
                    maxWidth: 400,
                    maxHeight: 100,
                    overflow: 'hidden',
                }}
            >
                <Box
                    className="ql-editor"
                    dangerouslySetInnerHTML={{ __html: articleDescription }}
                />
            </Box>
        </>
    );
};

export default EditorShow;
