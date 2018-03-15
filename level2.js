$().ready(function () {
    
      setTimeout(function () {
        // after 1000 ms we add the class animated to the login/register card
        $('.card').removeClass('card-hidden');
      }, 700)
    
      var dataTable1 = $('#level2list').DataTable({
        "columnDefs": [
          { "targets": 0 },
          { "targets": 1 },
          { "targets": 2} ,
          { "targets": 3} ,
          { "targets": 4} ,
          { "targets": 5} ,
          {className: 'mdl-data-table__cell--non-numeric'},
        ],
        "responsive": true,
        "order": [[2, "desc"]],
        "processing": true,
        "serverSide": true,
        "ajax": {
          url: "level2list.php?usersessionid="+sessionStorage.userid+"&userregion="+sessionStorage.region, // json datasource
          type: "post",  // method  , by default get
          error: function () {  // error handling
            $(".level1list-error").html("");
            $("#level1list").append('<tbody class="sample-data-error"><tr><th class="col-sm-12">No data found in the server</th></tr></tbody>');
            $("#level1list_processing").css("display", "none");
          }
        }
      });
      
    });