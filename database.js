let notes = [
    {
        id: 1,
        title: 'My First Note',
        timestamp: Date.now(),
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sapien faucibus et molestie ac feugiat sed. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Tempor nec feugiat nisl pretium fusce id. Tellus elementum sagittis vitae et leo duis ut diam quam. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Mi sit amet mauris commodo quis. Diam vel quam elementum pulvinar etiam non quam lacus. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Risus sed vulputate odio ut enim blandit volutpat. Lorem ipsum dolor sit amet consectetur adipiscing elit.'
    },
    {
        id: 2,
        title: 'My Second Note',
        timestamp: Date.now(),
        contents: 'Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Tellus mauris a diam maecenas sed enim. Sit amet massa vitae tortor. In nisl nisi scelerisque eu ultrices vitae auctor. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Faucibus a pellentesque sit amet porttitor. Interdum velit euismod in pellentesque massa placerat. Tempor nec feugiat nisl pretium. Eget arcu dictum varius duis. Pharetra convallis posuere morbi leo. Quis commodo odio aenean sed. Porta nibh venenatis cras sed felis. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Enim facilisis gravida neque convallis a cras. Sollicitudin nibh sit amet commodo nulla. Phasellus egestas tellus rutrum tellus pellentesque eu. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper.'
    }
];

let currentId = 3;

function getNotes(searchTerm){
    if (!searchTerm){
        return notes;
    }
    return notes.filter(note => note.title.includes(searchTerm) || note.contents.includes(searchTerm));
}
exports.getNotes = getNotes;

function getNote(id){
    return notes.find(note => note.id === id);
}
exports.getNote = getNote;

function addNote(note){
    notes.push({
        ...note,
        id: currentId,
        timestamp: Date.now()
    });
    currentId++;
}
exports.addNote = addNote;

function deleteNote(id){
    notes = notes.filter(note => note.id !== id);
}
exports.deleteNote = deleteNote;