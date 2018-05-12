
$(document).ready(function(){
  var count;
  $("#new-quote-button").on("click", function(){
    $.ajax({
      cache:false,
      url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      dataType:"json",
      success: function(a) {
        currentQuote = a[0].content.slice(3,-5) + ' -'+ a[0].title;
        $("#tweet-quote").attr('href', 'https://twitter.com/intent/tweet?text='+currentQuote);
        $("#quote").html(a[0].content + "<p>— " + a[0].title + "</p>");
      },
      error: function(xhr, status, error){
        console.log(xhr);
      }
    }); 
  });
});