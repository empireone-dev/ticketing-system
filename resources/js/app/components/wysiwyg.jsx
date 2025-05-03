import React, { useCallback } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify';

const modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }, { 'size': [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        // ['link', 'image', 'video'],
        // ['clean']
    ],
    clipboard: {
        matchVisual: false,
    }
};

const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
];

export default function Wysiwyg({ label, value, onChange, name }) {
    const handleChange = useCallback((content) => {
        const sanitizedContent = DOMPurify.sanitize(content);
        onChange(sanitizedContent);
    }, [onChange]);

    return (
        <div>
            {label && <label className="block mb-2 font-medium text-sm">{label}</label>}
            <ReactQuill
                value={value}
                onChange={handleChange}
                modules={modules}
                formats={formats}
                className="custom-quill bg-white"
            />
            <style jsx>{`
                .custom-quill {
                    height: 260px;
                }
                .custom-quill .ql-container {
                    height: 200px;
                }
                .custom-quill .ql-editor {
                    height: 100%;
                    overflow-y: auto;
                }
            `}</style>
        </div>
    );
}
