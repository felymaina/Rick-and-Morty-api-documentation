import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import introduction from '../docs/Introduction.md';
import usage from '../docs/usage.md';
// import markdownContent from './path/to/your/file.md';

const ApiDocs = () => {
  const [markdown, setMarkdown] = React.useState('');
  const [docType, setDocType] = React.useState('introduction');

  React.useEffect(() => {
    fetch(docType === 'introduction' ? introduction : usage)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, [docType]);

  return (
    <div className="p-5">
      <div className="mb-5">
        <button onClick={() => setDocType('introduction')} className="mr-2 bg-green-500 text-white p-2 rounded">Introduction</button>
        <button onClick={() => setDocType('usage')} className="bg-green-500 text-white p-2 rounded">Usage</button>
      </div>
      <ReactMarkdown className="prose lg:prose-xl" children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default ApiDocs;