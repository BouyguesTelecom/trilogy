export const initVariant = () => {
    let titres = document.querySelectorAll('[data-variant="auto"]');

    const hashCode = function (string: string) {
        let hashNumbers = 0;
        let hashLength = string.length;
        let i = 0;

        if (hashLength > 0) {
            while (i < hashLength) {
                hashNumbers = (hashNumbers << 5) - hashNumbers + string.charCodeAt(i++) | 0;
            }
        }
        return hashNumbers;
    };

    for (let i = 0; i < titres.length; i++) {
        let titre = titres[i];
        const content = titre.textContent;
        const charsArray = ['b', 'g', 'o', 'q'];
        const charsIndexes: number[] = [];

        content.toLowerCase().split('').map((i, j) => {
            if (charsArray.indexOf(i) > -1) {
                charsIndexes.push(j);
            }
            return i;
        });

        if (charsIndexes.length) {
            const hashContent = hashCode(content);
            const position = Math.abs(hashContent % charsIndexes.length);
            const char = content.charAt(charsIndexes[position]);
            const beforeChar = content.substring(0, charsIndexes[position]);
            const afterChar = content.substring(charsIndexes[position] + 1);
            titre.innerHTML = `${beforeChar}<span class="has-variant">${char}</span>${afterChar}`;
        }
        titre.setAttribute(`data-fontVariant-initialized`, 'true')
    }
};

export default initVariant;
