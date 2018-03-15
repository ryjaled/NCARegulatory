$().ready(function () {

  setTimeout(function () {
    // after 1000 ms we add the class animated to the login/register card
    $('.card').removeClass('card-hidden');
  }, 700)

  var dataTable1 = $('#level1list').DataTable({
    "columnDefs": [
      { "width": "50%", "targets": 0 },
      { "width": "30%", "targets": 1 },
      { "width": "20%", "targets": 2} ,
      {className: 'mdl-data-table__cell--non-numeric'},
    ],
    "responsive": true,
    "order": [[2, "desc"]],
    "processing": true,
    "serverSide": true,
    "ajax": {
      url: "level1list.php?usersessionid="+sessionStorage.userid+"&userregion="+sessionStorage.region, // json datasource
      type: "post",  // method  , by default get
      error: function () {  // error handling
        $(".level1list-error").html("");
        $("#level1list").append('<tbody class="sample-data-error"><tr><th class="col-sm-12">No data found in the server</th></tr></tbody>');
        $("#level1list_processing").css("display", "none");
      }
    }
  });
  
});