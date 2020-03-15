$(document).ready(function () {
    $('#sidebarCollapse').click(function () {
        $('#sidebar').toggleClass('active');
    });

    $('.upcoming-events').click(function(){
        window.location.href='./events.html'
    })


    $('#eventDetailsModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) ;
        var title = button.data('title');
        var date = button.data('date');
        var modal = $(this);
        modal.find('#eventTitle').text(title);
        modal.find('#eventDate').text(date);
      })
});