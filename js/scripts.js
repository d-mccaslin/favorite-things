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
    let favoriteThingsNew = [];
    favoriteThingsNew.push(favoriteThings[1]);
    favoriteThingsNew.push(favoriteThings[0]);
    favoriteThingsNew.push(favoriteThings[2]);
    $("ul#results").append("<li>" + favoriteThingsNew[0] + "</li>");
    $("ul#results").append("<li>" + favoriteThingsNew[1] + "</li>");
    $("ul#results").append("<li>" + favoriteThingsNew[2] + "</li>");
  })
})