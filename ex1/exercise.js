var object = {
    id: 1,
    title: "this is a note",
    content: "This is the amazing content of the note!"
    
  }

  object.author = "hassan";
   console.log(object);
   var myJSON = JSON.stringify(object);
   console.log(myJSON);

   const myObject = JSON.parse(myJSON);
   console.log(myObject);