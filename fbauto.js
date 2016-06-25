$(document).ready(function() {
    for(var i = 0; i < $('.UFILikeLink').length; i++) {
        if($('.UFILikeLink')[i].getAttribute('aria-pressed') == "false" || $('.UFILikeLink')[i].getAttribute('title') == "좋아요")
            $('.UFILikeLink')[i].click();
    }
});