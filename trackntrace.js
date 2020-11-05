var data = [
    "item1",
    "item2",
    "item3"
]

$(document).ready(function() {
    function createItem(value) {
        var itemMarkup = "<div class='item' >" + value + "</div>";
        $("#itemBucket").append(itemMarkup);
    }
    
    function popItem() {
        $(this).remove();
    }
    
    function resetBucket() {
        $("#itemBucket").empty();
        for (item of data) {
            createItem(item);
        }        
        $(".item").click(popItem)
    }
    
    $("#resetButton").click(resetBucket);

});