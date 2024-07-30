export default class NotesAPI {
    // すべてのメモを取得する
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("notes") || "[]");
        return notes;
    }

    // メモを保存するAPI
    // noteToSaveはJson形式
    static saveNote(noteToSave) {
        const notes = NotesAPI.getAllNotes();
        const existingNote = notes.find((note) => note.id == noteToSave.id);

        if (existingNote) {
            existingNote.title = noteToSave.title
            existingNote.body = noteToSave.body
            existingNote.updated = new Date().toISOString();
        } else {

            // noteToSave.id = Math.floor(Math.random() * 1000000);
            // noteToSave.updated = new Date().toISOString();
            // notes.push(noteToSave);

            noteToSave.id = noteToSave.id
            noteToSave.updated = new Date().toISOString();
            notes.push(noteToSave);
        }

        // Json形式から文字列に変更して保存
        localStorage.setItem("notes", JSON.stringify(notes));
    }
    // メモを削除するAP
    static deleteNots(id) {
        const notes = NotesAPI.getAllNotes();
        const newNotes = notes.fillter((note) => note.id != id);

        localStorage.setItem("notes", JSON.stringify(newNotes));

    }
}