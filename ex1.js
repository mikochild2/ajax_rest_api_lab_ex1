//$("#content-style").css({"padding": "10px", "border": "1px solid #000"});

//button 1
$(document).ready(function () {

    $("#all-posts").click(function() {
        $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts", function(data, status) {
          //  alert("Data: " + data + "\nStatus: " + status);
            var p = $("#content");
            p.text(data);
            $("#content").append(p);
            $("#title").text("All Posts");
            $(".content-style").css({"padding": "10px", "margin-top": "20px", "border": "1px solid #000"});
        });
    });
});

//button 2

$(document).ready(function () {

    $("#post10").click(function() {
        $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/10", function(data, status) {
           // alert("Data: " + data + "\nStatus: " + status);
           console.log(JSON.stringify(data));
            var p = $("#content");
           p.text(data);
            $("#content").append(p);
            $("#title").text("Post 10");
            $(".content-style").css({"padding": "10px", "margin-top": "20px", "border": "1px solid #000"});
        });
    });
});

//button 3

$(document).ready(function () {

    $("#comment12").click(function() {
        $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments?id=12", function(data, status) {
         // alert("Data: " + data + "\nStatus: " + status);
           console.log(JSON.stringify(data));
           var p = $("#content");
           p.text(data);
            $("#content").append(p);
            $("#title").text("Comment (ID 12)");
            $(".content-style").css({"padding": "10px", "margin-top": "20px", "border": "1px solid #000"});
        });
    });
});

//button 4

$(document).ready(function () {

    $("#user2").click(function() {
        $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?userID=2", function(data, status) {
         // alert("Data: " + data + "\nStatus: " + status);
           console.log(JSON.stringify(data));
           var p = $("#content");
           p.text(data);
            $("#content").append(p);
            $("#title").text("Posts from User 2");
            $(".content-style").css({"padding": "10px", "margin-top": "20px", "border": "1px solid #000"});
        });
    });
});


//button 5

$(document).ready(function(){
    $("#create-post").click(function(){
      $.post("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts",
      {
        userID: 15,
        id: 55,
        title: "esse sint cillumel",
        body: "Tempor aliqua elit aute."
      },
      function(data,status){
       // alert("Data: " + data + "\nStatus: " + status);
        console.log(JSON.stringify(data));
        var p = $("#content");
        p.text(data);
        $("#content").append(p);
        $("#title").text("New Post");
        $(".content-style").css({"padding": "10px", "margin-top": "20px", "border": "1px solid #000"});
      });
    });
  });

  //button 6



  //button 7

  