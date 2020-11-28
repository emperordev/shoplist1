$('#js-shopping-list-form').on('submit',function(e) {
    e.preventDefault();
    let food = $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');
    let item = `<li>
        <span class="shopping-item">${food}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
            <span class="button-label">delete</span>
        </button>
        </div>
     </li>`
    $('.shopping-list').append(item);
});

$('.shopping-list').on('click','.shopping-item-delete',function(){
    $(this).parent().parent().remove();
})

$('.shopping-list').on('click','.shopping-item-toggle',function(){
    $(this).parent().prev().toggleClass('shopping-item__checked');
})