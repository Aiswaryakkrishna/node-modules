console.log('Starting notes.js');
const fs = require('fs');
 var addNote = (title,body) => {
//  console.log('Adding note',title,body);
var notes = [];
 var note = {
   title ,
   body
 };


try {
  var noteString = fs.readFileSync('notes-Data.JSON');
  notes = JSON.parse(noteString);
}catch(e){

}
var duplicateNotes = notes.filter((note)=>note.title === title);

if(duplicateNotes.length === 0){
  notes.push(note);
  fs.writeFileSync('notes-Data.JSON',JSON.stringify(notes) );
}

};

var getAll = () =>{
  console.log('please get all notes');
}

var readNote = (title) =>{
  console.log('please read all notes',title);
}

var removeNote = (title) =>{
  console.log('please remove all notes',title);
}
module.exports = {

   addNote,getAll,readNote,removeNote

}
