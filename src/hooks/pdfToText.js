import { useState } from 'react';

const usePdfToText = () => {
  const [text, setText] = useState('');

  const extractText = async (file) => {
    if (!file || file.type !== 'application/pdf') {
      alert('Please upload a PDF file');
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      const typedArray = new Uint8Array(reader.result);
      const pdfjsLib = window['pdfjsLib'];

      try {
        const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;

        let fullText = '';
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const content = await page.getTextContent();
          const strings = content.items.map((item) => item.str);
          fullText += strings.join(' ') + '\n\n';
        }

        setText(fullText);
      } catch (err) {
        console.error('Error parsing PDF:', err);
        alert('Failed to parse PDF');
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return { text, extractText };
};

export default usePdfToText;
