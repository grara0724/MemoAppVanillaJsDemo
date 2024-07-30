export default class NotesView {
    constructor(
        root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}
    ) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;
        this.root.innerHTML = ` 
        <!-- サイドバーセクション -->
        <div class="notesSidebar">
            <button class="notesAdd" type="button">ノートを追加</button>
            <div class="notesList">
                <div class="notesList-item">
                    <p>新しいノート</p>
                </div>
            </div>
        </div>
        <div>
            <input class="notesTitle" placeholder=" タイトルを記入">
            <textarea class="notesBody" placeholder="ここに本文を追加"></textarea>
        </div>
        <script src="./js/main.js" type="module"></script>
    </div>`;

        const btnAddNote = this.root.querySelector(".notesAdd")
        const inputTitle = this.root.querySelector(".notesTitle")
        const inputBody = this.root.querySelector(".notesBody")
        // 一つのファンクション
        btnAddNote.addEventListener("click", () => {
            this.onNoteAdd();
        });

        // 二つの要素に同じaddeventlistenerをつける
        [inputTitle, inputBody].forEach((inputField) => {
            // ひとつのファンクション
            inputField.addEventListener("blur", () => {
                const updateTitle = inputTitle.value.trim();
                const updateBody = inputBody.value.trim();

                this.onNoteEdit(updateTitle, updateBody);
            });
        });
    }

    // ここまでコンストラクタの中身
}