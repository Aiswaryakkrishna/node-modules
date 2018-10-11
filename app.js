
// node app.js add --title = "ashif" --body = "secret"
console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
//var command = process.argv[2];
console.log('Command: ', command);
//console.log('Process: ', process.argv[2]);
console.log('Yargs: ',argv);



if (command === 'add') {
  // var message = notes.addNote();
   //console.log(message);
   notes.addNote(argv.title,argv.body);
} else if (command === 'list') {
    //console.log('Listing all notes');
    notes.getAll();
} else if (command === 'read') {
  //console.log('Reading note');
  notes.readNote(argv.title);
} else if (command === 'remove') {
//  console.log('Removing note');
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
