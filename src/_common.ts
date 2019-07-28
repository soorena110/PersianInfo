
export const replaceFirstCharsWithSecondCharsInText = (text: string, firstChars: string, secondChars: string) => {
    for (let i = 0; i < firstChars.length; i++)
        text = text && text.replace(new RegExp(firstChars[i], "g"), secondChars[i]);

    return text;
};