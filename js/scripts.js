$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    let favoriteThings = [];
    const thing1 = $("input#thing1").val();
    const thing2 = $("input#thing2").val();
    const thing3 = $("input#thing3").val();
    const thing4 = $("input#thing4").val();
    favoriteThings.push(thing1);
    favoriteThings.push(thing2);
    favoriteThings.push(thing3);
    favoriteThings.push(thing4);
    console.log(favoriteThings);
  })
})