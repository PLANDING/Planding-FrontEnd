import React, { memo, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import styled from 'styled-components';

const QuillEditor = memo(({ htmlContent, setHtmlContent }) => {
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
          { align: [] },
        ],
      ],
    },
  }));
  return (
    <>
      <CustomReactQuill
        value={htmlContent}
        onChange={setHtmlContent}
        modules={modules}
        theme="snow"
        name="content"
      />
    </>
  );
});

export default QuillEditor;
const CustomReactQuill = styled(ReactQuill)`
  height: 400px;
`;
