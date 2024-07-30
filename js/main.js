import NotesAPI from "./NotesAPI.js";
import NotesView from "./notesView.js";

// NotesAPI.saveNote({
//     // JSON形式
//     // title: "初めてのメモアプリです",
//     // body: "メモアプリ作成中"
// })
const app = document.getElementById("app");
const view = new NotesView(app, {
    onNoteSelect() {
        console.log("ノートが選択されました")
    },
    onNoteAdd() {
        console.log("ノートが追加されました")
    },
    onNoteEdit(updateTitle, updateBody) {
        console.log(updateTitle);
        console.log(updateBody);
    }
});