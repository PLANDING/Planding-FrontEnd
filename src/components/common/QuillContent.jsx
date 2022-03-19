import React from 'react';
import 'react-quill/dist/quill.snow.css'; // ES6
import styled from 'styled-components';

const QuillContent = ({ content }) => {
  return <Content dangerouslySetInnerHTML={{ __html: content }}></Content>;
};
export default QuillContent;
const Content = styled.div`
  padding: 20px;
  min-height: 300px;
  padding: 20px;
  min-height: 300px;
  .ql-align-center {
    text-align: center;
  }
  .ql-syntax {
    background-color: #23241f;
    color: #f8f8f2;
    border-radius: 3px;
    padding: 5px;
    margin: 0 10px;
  }
  blockquote {
    border-left: solid 5px #00000020;
    padding-left: 10px;
  }
  .ql-size-large {
    font-size: x-large;
  }
  .ql-size-huge {
    font-size: xx-large;
  }
  .ql-size-small {
    font-size: small;
  }
  .ql-indent-1 {
    margin-left: 40px;
  }
  .ql-indent-2 {
    margin-left: 80px;
  }
  .ql-indent-3 {
    margin-left: 120px;
  }
  .ql-indent-4 {
    margin-left: 160px;
  }
  .ql-indent-5 {
    margin-left: 200px;
  }
  .ql-indent-6 {
    margin-left: 240px;
  }
`;
