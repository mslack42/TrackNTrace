$(document).ready(function() {
    function createItem(value) {
        var itemMarkup = "<div class='item col-sm-1' style='display: none' >" + value + "</div>";
        $("#itemBucket").append(itemMarkup);
    }

    function showAllHiddenItems()
    {
        $(".item").show('slow');
    }
    
    function popItem() {
        $(this).fadeOut('slow');
    }

    function generateData() {
        var playerCount = $("#numOfPlayers").val();
        var cardCount = playerCount * 10 + 4;
        return data = Array.from({length: cardCount}, (_, i) => (i + 1).toString());
    }
    
    function resetBucket() {
        $("#itemBucket").empty();
        var data = generateData();
        for (item of data) {
            createItem(item);
        }        
        $(".item").click(popItem)
        showAllHiddenItems();
    }
    
    $("#resetButton").click(resetBucket);

});