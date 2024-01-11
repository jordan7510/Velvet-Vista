import React, { useState } from 'react';

const TextAreaLimitedWords = ({ dynamicName, dynamicPlaceholder, maxWords }) => {
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);

    const handleChange = (e) => {
        const inputText = e.target.value;
        const words = inputText.match(/\S+/g) || [];
        const limitedText = words.slice(0, maxWords).join(" ");
        setText(limitedText);
        setWordCount(words.length);
    };

    return (
        <div>
            <textarea
                name={dynamicName}
                placeholder={dynamicPlaceholder}
                cols="30"
                rows="10"
                value={text}
                onChange={handleChange}
            ></textarea>
            <p>Words Entered: {wordCount}/{maxWords}</p>
        </div>
    );
};

export default TextAreaLimitedWords;
