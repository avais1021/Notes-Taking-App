
const add_noteBtn = document.querySelector("#add_noteBtn");
const main = document.querySelector(".main");

add_noteBtn.addEventListener("click", function(){
    addNote();
});

const saveNotes = () => {
    const notes = document.querySelectorAll(".noteBox textarea")
    // console.log(notes)
    const data = [];
    notes.forEach(function(notesitem){
        // console.log(notesitem.value);
        data.push(notesitem.value)
    })
    // console.log(data);
    if(data.length === 0){
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes" , JSON.stringify(data));
    }
}


const addNote = (text = "") => {
    const noteBox = document.createElement("div");
    noteBox.setAttribute("class", "noteBox ");
    noteBox.innerHTML = `
    <div class="tool">
    <span>Auto save</span>
    <i class=" save fa-solid fa-floppy-disk"></i>
    <i class=" trash fa-solid fa-trash"></i>
    </div>
    <textarea>${text}</textarea>
    `;
    main.appendChild(noteBox);
    noteBox.querySelector(".trash").addEventListener("click" , function(){
        noteBox.remove();
        saveNotes();
    })
    noteBox.querySelector(".save").addEventListener("click" , function(){
        saveNotes();
    })
    noteBox.querySelector("textarea").addEventListener("keyup" , function(){
        saveNotes();
    })
    saveNotes();
}


(
    function(){
        const lsNotes =JSON.parse( localStorage.getItem("notes") );
        console.log(lsNotes)
        if(lsNotes === null) {
            addNote();
        } else {           
            lsNotes.forEach((lsNotes) => {
                addNote(lsNotes);
            })
        }
       
    }
)()



