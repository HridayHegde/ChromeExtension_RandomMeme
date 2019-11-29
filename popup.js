
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('but');
    // onClick's logic below:
    link.addEventListener('click', function() {
        regenmeme();
    });
});

function GetMemeInfo() {
   
    $.ajax({
        type: 'GET',
        url: 'https://meme-api.herokuapp.com/gimme',
        success: function (response) {
            console.log(response);
            var memetitle = response['title'];
            var imagelink = response['url'];
            var subreddit = response['subreddit'];
            
            $(function(){
                
                $('#greet').text('Subreddit : '+ subreddit);
                $('#memage').attr("src",imagelink);
                $('#title').text(memetitle);
               
            })
        },
        error:function (error) {
            console.log('Not generated');
        }
    });
}

function regenmeme() {
    GetMemeInfo();
    

}

window.onload = function() {
    this.regenmeme();
  };

