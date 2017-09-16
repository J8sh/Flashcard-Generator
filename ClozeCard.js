// constructor for ClozeFlashcard
function ClozeFlashcard(text, cloze, partial) {
    this.text = text;
    this.cloze = cloze;
    this.partial = partial;
    this.clozeDeleted = this.text.replace(this.cloze, '...')
};

module.exports = ClozeFlashcard;