var global1;
var global2;
var global3;
var global7;
var pendingid;

$().ready(function () {

  setTimeout(function () {
    // after 1000 ms we add the class animated to the login/register card
    $('.card').removeClass('card-hidden');
  }, 700)

  var dataTable1 = $('#level1list').DataTable({
    "autoWidth": false,
    "columnDefs": [
      { "targets": 0, width: '27%' },
      { "targets": 1, width: '17%' },
      { "targets": 2, width: '15%'} ,
      { "targets": 3, width: '15%'} ,
      { "targets": 4, width: '15%'} ,
      { "targets": 5, width: '7%' },
      { "targets": [6], "visible": false, "searchable": false, width: '5%'},
      {className: 'mdl-data-table__cell--non-numeric'},
    ],
    "responsive": true,
    "order": [[2, "desc"]],
    "processing": true,
    "serverSide": true,
    "ajax": {
      url: "level1list.php?usersessionid="+sessionStorage.userid, // json datasource
      type: "post",  // method  , by default get
      error: function () {  // error handling
        $(".level1list-error").html("");
        $("#level1list").append('<tbody class="sample-data-error"><tr><th class="col-sm-12">No data found in the server</th></tr></tbody>');
        $("#level1list_processing").css("display", "none");
      }
    }
  });

  var dataTable2 = $('#level2list').DataTable({
    "autoWidth": false,
    "columnDefs": [
      { "targets": 0, width: '25%'},
      { "targets": 1, width: '15%'},
      { "targets": 2, width: '10%'},
      { "targets": 3, width: '15%'},
      { "targets": 4, width: "15%"} ,
      { "targets": 5, width: "15%"} ,
      { "targets": 6, width: "5%" },
      {className: 'mdl-data-table__cell--non-numeric'},
    ],
    "responsive": true,
    "order": [[1, "desc"]],
    "processing": true,
    "serverSide": true,
    "ajax": {
      url: "level2list.php?usersessionid="+sessionStorage.userid+"&userregion="+sessionStorage.region, // json datasource
      type: "post",  // method  , by default get
      error: function () {  // error handling
        $(".level2list-error").html("");
        $("#level2list").append('<tbody class="sample-data-error"><tr><th class="col-sm-12">No data found in the server</th></tr></tbody>');
        $("#level2list_processing").css("display", "none");
      }
    }
  });

  var dataTable3 = $('#level3list').DataTable({
    "autoWidth": false,
    "columnDefs": [
      { "targets": 0, width: '17%' },
      { "targets": 1, width: '15%' },
      { "targets": 2, width: '15%' },
      { "targets": 3, width: '15%' },
      { "targets": 4, width: '15%' },
      { "targets": 5, width: '5%' },
      { className: 'mdl-data-table__cell--non-numeric' },
    ],
    "responsive": true,
    "order": [[3, "desc"]],
    "processing": true,
    "serverSide": true,
    "ajax": {
      url: "level3list.php?usersessionid=" + sessionStorage.userid + "&userregion=" + sessionStorage.region, // json datasource
      type: "post",  // method  , by default get
      error: function () {  // error handling
        $(".level3list-error").html("");
        $("#level3list").append('<tbody class="sample-data-error"><tr><th class="col-sm-12">No data found in the server</th></tr></tbody>');
        $("#level3list_processing").css("display", "none");
      }
    }
  });

  var dataTable5 = $('#eventlogslist').DataTable({
    "autoWidth": false,
    "columnDefs": [
      { "targets": 0, width: '10%' },
      { "targets": 1, width: '60%' },
      { "targets": 2, width: '30%' },
      { className: 'mdl-data-table__cell--non-numeric' },
    ],
    "responsive": true,
    "order": [[2, "desc"]],
    "processing": true,
    "serverSide": true,
    "ajax": {
      url: "eventlogslist.php", // json datasource
      type: "post",  // method  , by default get
      error: function () {  // error handling
        $(".eventlogslist-error").html("");
        $("#eventlogslist").append('<tbody class="sample-data-error"><tr><th class="col-sm-12">No data found in the server</th></tr></tbody>');
        $("#eventlogslist_processing").css("display", "none");
      }
    }
  });

  var dataTable6 = $('#userlogslist').DataTable({
    "autoWidth": false,
    "columnDefs": [
      // { "targets": 0, width: '10%' },
      { "targets": 0, width: '10%' },
      { "targets": 1, width: '60%' },
      { "targets": 2, width: '30%' },
      { className: 'mdl-data-table__cell--non-numeric' },
    ],
    "responsive": true,
    "order": [[2, "desc"]],
    "processing": true,
    "serverSide": true,
    "ajax": {
      url: "userlogslist.php", // json datasource
      type: "post",  // method  , by default get
      error: function () {  // error handling
        $(".userlogslist-error").html("");
        $("#userlogslist").append('<tbody class="sample-data-error"><tr><th class="col-sm-12">No data found in the server</th></tr></tbody>');
        $("#userlogslist_processing").css("display", "none");
      }
    }
  });

  var dataTable7 = $('#level2reportlist').DataTable({
    "autoWidth": false,
    "columnDefs": [
      { "targets": 0, width: '20%' },
      { "targets": 1, width: '15%' },
      { "targets": 2, width: '15%' },
      { "targets": 3, width: '15%' },
      { "targets": 4, width: "10%" },
      { "targets": 5, width: "5%" },
      { className: 'mdl-data-table__cell--non-numeric' },
    ],
    "responsive": true,
    "order": [[3, "desc"]],
    "processing": true,
    "serverSide": true,
    "ajax": {
      url: "level2reportlist.php?usersessionid=" + sessionStorage.userid + "&userregion=" + sessionStorage.region, // json datasource
      type: "post",  // method  , by default get
      error: function () {  // error handling
        $(".level2reportlist-error").html("");
        $("#level2reportlist").append('<tbody class="sample-data-error"><tr><th class="col-sm-12">No data found in the server</th></tr></tbody>');
        $("#level2reportlist_processing").css("display", "none");
      }
    }
  });

  var dataTable8 = $('#level3reportlist').DataTable({
    "autoWidth": false,
    "columnDefs": [
      { "targets": 0, width: '25%' },
      { "targets": 1, width: '15%' },
      { "targets": 2, width: '15%' },
      { "targets": 3, width: '15%' },
      { "targets": 4, width: '15%' },
      { className: 'mdl-data-table__cell--non-numeric' },
    ],
    "responsive": true,
    "order": [[2, "desc"]],
    "processing": true,
    "serverSide": true,
    "ajax": {
      url: "level3reportlist.php?usersessionid=" + sessionStorage.userid + "&userregion=" + sessionStorage.region, // json datasource
      type: "post",  // method  , by default get
      error: function () {  // error handling
        $(".level3reportlist-error").html("");
        $("#level3reportlist").append('<tbody class="sample-data-error"><tr><th class="col-sm-12">No data found in the server</th></tr></tbody>');
        $("#level3reportlist_processing").css("display", "none");
      }
    }
  });

  var level2usersdatatable = $('#level2userstable').DataTable({
    "autoWidth": false,
    "columnDefs": [
      { "targets": 0, width: '15%'},
      { "targets": 1, width: '15%'},
      { "targets": 2, width: '15%'},
      { "targets": 3, width: '15%'},
      { "targets": 4, width: '15%'},
      { "targets": 5, width: '15%'},
      { className: 'mdl-data-table__cell--non-numeric' },
    ],
    "responsive": true,
    "order": [[0, "asc"]],
    "processing": true,
    "serverSide": true,
    "ajax": {
      url: "level2users.php?userregion=" + sessionStorage.region, // json datasource
      type: "post",  // method  , by default get
      error: function () {  // error handling
        $(".level2userstable-error").html("");
        $("#level2userstable").append('<tbody class="sample-data-error"><tr><th class="col-sm-12">No data found in the server</th></tr></tbody>');
        $("#level2userstable_processing").css("display", "none");
      }
    }
  });

  var level3usersdatatable = $('#level3userstable').DataTable({
    "autoWidth": false,
    "columnDefs": [
      { "targets": 0, width: '15%'},
      { "targets": 1, width: '15%'},
      { "targets": 2, width: '15%'},
      { "targets": 3, width: '15%'},
      { "targets": 4, width: '15%'},
      { "targets": 5, width: '15%'},
      { "targets": 6, width: '15%'},
      { className: 'mdl-data-table__cell--non-numeric' },
    ],
    "responsive": true,
    "order": [[0, "asc"]],
    "processing": true,
    "serverSide": true,
    "ajax": {
      url: "level3users.php?userregion=" + sessionStorage.region, // json datasource
      type: "post",  // method  , by default get
      error: function () {  // error handling
        $(".level3userstable-error").html("");
        $("#level3userstable").append('<tbody class="sample-data-error"><tr><th class="col-sm-12">No data found in the server</th></tr></tbody>');
        $("#level3userstable_processing").css("display", "none");
      }
    }
  });

  function refireTable1(){
    setTimeout(function () {
    dataTable1.ajax.reload(null, false); // user paging is not reset on reload
    }, 500);
  }
  global1 = refireTable1;

  function refireTable2(){
    setTimeout(function () {
      dataTable2.ajax.reload(null, false); // user paging is not reset on reload
      // $('#spin').html('<div class="uk-overlay-default uk-position-cover"></div><div class="uk-overlay uk-position-bottom uk-dark"><center><div style="position: absolute; bottom: 500px;" uk-spinner></div></center></div>');
    }, 500);
  }
  global2 = refireTable2;

  function refireTable3(){
    setTimeout(function () {
      dataTable3.ajax.reload(null, false);
    }, 500);
  }
  global3 = refireTable3;

  function refireTable7() {
    setTimeout(function () {
      dataTable7.ajax.reload(null, false); // user paging is not reset on reload
    }, 500);
  }
  global7 = refireTable7;

  setInterval(function () {
    dataTable1.ajax.reload(null, false); // user paging is not reset on reload
  }, 10000);

  setInterval(function () {
    dataTable2.ajax.reload(null, false); // user paging is not reset on reload
  }, 10000);

  setInterval(function () {
    dataTable3.ajax.reload(null, false); // user paging is not reset on reload
  }, 10000);

  setInterval(function () {
    dataTable5.ajax.reload(null, false); // user paging is not reset on reload
  }, 5000);

  setInterval(function () {
    dataTable6.ajax.reload(null, false); // user paging is not reset on reload
  }, 5000);

  setInterval(function () {
    dataTable7.ajax.reload(null, false); // user paging is not reset on reload
  }, 10000);

  setInterval(function () {
    dataTable8.ajax.reload(null, false); // user paging is not reset on reload
  }, 5000);

  setInterval(function () {
    level2usersdatatable.ajax.reload(null, false); // user paging is not reset on reload
  }, 3000);

  setInterval(function () {
    level3usersdatatable.ajax.reload(null, false); // user paging is not reset on reload
  }, 3000);


  $('#adddateselected').datetimepicker({ format: 'dddd, D MMMM Y' });
  $('#addnewnewdateselected').datetimepicker({ format: 'dddd, D MMMM Y' });
  $('#addnewdateselected').datetimepicker({ format: 'dddd, D MMMM Y' });

  $('#addenddateselected').datetimepicker({
    format: 'dddd, D MMMM Y',
    useCurrent: false //Important! See issue #1075
  });
  $("#addnewdateselected").on("dp.change", function (e) {
    $('#addenddateselected').data("DateTimePicker").minDate(e.date);
  });
  $("#addenddateselected").on("dp.change", function (e) {
    $('#addnewdateselected').data("DateTimePicker").maxDate(e.date);
  });

  $('#editaddnewdateselected').datetimepicker({ format: 'dddd, D MMMM Y' });
  $('#addpendingdateselected').datetimepicker({ format: 'dddd, D MMMM Y' });
  $('#penddateselected').datetimepicker({ format: 'dddd, D MMMM Y' });

  //document.getElementById('verifyformdiv').appendChild="<button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button><button onclick='verifier("+obj[0].report_id+","+obj[0].is_verified+")' type='button' class='btn btn-success' id='addConfirm' data-toggle='modal' data-target='#verifyEvent'>Verify</button>";
 
});

/////////////GENERAL FUNCTIONALITY///////////////////////////////////////
/////////////GENERAL FUNCTIONALITY///////////////////////////////////////
/////////////GENERAL FUNCTIONALITY///////////////////////////////////////
/////////////GENERAL FUNCTIONALITY///////////////////////////////////////
/////////////GENERAL FUNCTIONALITY///////////////////////////////////////

function _fetchMyEvents(userid){

    var theUrl="databasehandler.php?cmd=3";

    $.ajax(theUrl,
          {
            async:true,
            complete:_fetchMyEventsComplete
          });


}

function _fetchMyEventsComplete(xhr,status){
    // console.log(xhr);
    var obj = JSON.parse(xhr.responseText);
    // console.log(obj);
    var tabledata = "";

    function _helper(entry){
      if(entry == "0"){
        return "<td style='color: red'>Not Verified</td>";
      } else {
        return "<td style='color: green'>Verified</td>";
      }
    }

    for(var i = 0; i < obj.length; i++){
      // console.log(obj[i].report_id);

      tabledata = "<tr>"+
            "<td>"+obj[i].report_id+"</td>"+
            "<td>"+obj[i].eventtitle+"</td>"+
            "<td>"+obj[i].date_organized+"</td>"+
            "<td>"+obj[i].region+"</td>"+
            "<td>"+obj[i].town+"</td>"+
            _helper(obj[i].is_verified)+
            "<td class='text-primary'>"+
            "<button onclick='editor("+obj[i].report_id+","+obj[i].is_verified+")' class='btn btn-just-icon btn-twitter' rel='tooltip' data-placement='bottom' title='Verify Event'><i class='material-icons'>assignment</i></button>"+
            // "<button onclick='viewer("+obj[i].report_id+")' class='btn btn-just-icon btn-success' rel='tooltip' data-placement='bottom' title='View'><i class='material-icons'>visibility</i></button></td>"+
          "</tr>";
        $('#homeHolder').append(tabledata);

    }

}

function _fetchMyEventsLevel2(userid){


    var theUrl="databasehandler.php?cmd=3";

    $.ajax(theUrl,
          {
            async:true,
            complete:_fetchMyEventsCompleteLevel2
          });


}

function _fetchMyEventsCompleteLevel2(xhr,status){
    // console.log(xhr);
    var obj = JSON.parse(xhr.responseText);
    // console.log(obj);
    var tabledata = "";

                function _helper(entry){
                  // console.log(entry);
                  // console.log("ontop");
                  if(entry == "0"){
                    return "<td style='color: red'>Not approved</td>";
                  } else {
                    return "<td style='color: green'>Approved</td>";
                  }
                }

                function _decision(entry){
                  if(entry == "0"){
                    return "FALSE";
                  } else {
                    return "TRUE";
                  }
                }


    for(var i = 0; i < obj.length; i++){
      // console.log(obj[i].report_id);
      // console.log(obj[i].report_id);

      tabledata = "<tr>"+
            "<td>"+obj[i].report_id+"</td>"+
            "<td>"+obj[i].eventtitle+"</td>"+
            "<td>"+obj[i].date_organized+"</td>"+
            "<td>"+obj[i].region+"</td>"+
            "<td>"+obj[i].town+"</td>"+
            _helper(obj[i].is_approved)+
            "<td class='text-primary'>"+
            "<button onclick='approvalwindow("+obj[i].report_id+")' class='btn btn-just-icon btn-success' rel='tooltip' data-placement='bottom' title='View'><i class='material-icons'>visibility</i></button>"+
            "<button onclick='toggleapprove("+obj[i].is_approved+","+obj[i].report_id+")' class='btn btn-just-icon btn-warning' rel='tooltip' data-placement='bottom' title='Toggle Approval'><i class='material-icons'>cached</i></button>"+
            "</td>"+
          "</tr>";
        $('#homeHolder').append(tabledata);
        // console.log(_helper(obj[i].is_approved));
        // console.log("ontop");

    }
}

function approvalwindow(id){
    // console.log('modal for viewing: ',id);
    var theUrl="databasehandler.php?cmd=6&eventid="+id;

    $.ajax(theUrl,
          {
            async:true,
            complete:approvalwindowComplete
          });
}

function approvalwindowComplete(xhr, status){
    // console.log(xhr);
    var obj = JSON.parse(xhr.responseText);

    var picValues = "";
    $('#pictureContainerLevel3').html("");

    sessionStorage.pullreportid = obj[0].report_id;
    sessionStorage.pullapproved = obj[0].is_approved;

    UIkit.modal('#viewEvent2').show();

    picValues = picValues + "<div class='uk-child-width-1-3@m' uk-grid uk-lightbox='animation: slide'>";

      var jsonarray = JSON.parse(obj[0].picture_paths);
      for(var i = 0; i < jsonarray.length; i++) {
        var obj2 = jsonarray[i];

        var user_id = ""+obj[0].reporter;
        var event_header = ""+obj[0].eventtitle;
        var picture_header = ""+obj2;


        picValues = picValues + "<div>";
        picValues = picValues + "<a onclick='closemodal1()' class='uk-inline' href='uploads/"+user_id+"_"+event_header+"/"+picture_header+"' caption='Caption 1'>";
        picValues = picValues + "<img style='height: 40%; width: 40%;' src='uploads/"+user_id+"_"+event_header+"/"+picture_header+"'/>";
        picValues = picValues + "</a>";
        picValues = picValues + "</div>";

      }
      picValues = picValues + "</div>";

      var dform = new Date(obj[0].date_organized);

      document.getElementById('report_id').innerHTML=obj[0].report_id;
      document.getElementById('eventtitle').innerHTML=obj[0].eventtitle;
      document.getElementById('date_organized').innerHTML=moment(dform).format('D MMMM Y');
      document.getElementById('region').innerHTML=obj[0].region;
      document.getElementById('town').innerHTML=obj[0].town;
      document.getElementById('audience_category').innerHTML=obj[0].audience_category;
      document.getElementById('audience_attendance').innerHTML=obj[0].audience_attendance;
      document.getElementById('team_challenges').innerHTML=obj[0].team_challenges;
      document.getElementById('complaints_raised').innerHTML=obj[0].complaints_raised;
      document.getElementById('event_summary').innerHTML=obj[0].event_summary;
      document.getElementById('pictureContainerLevel3').innerHTML=picValues;

}

function addevent(){
  event.preventDefault();

  var userid = sessionStorage.getItem("userid");
  var eventtitle = $('#addtitle').val();
  var date = $('#adddateselected').val();
  var region = $('#addregion').val();
  var town = $('#addtown').val();
  var audiencecat = $('#addaudience').val();
  var attendance = $('#addattendance').val();
  var challenges = $('#addchallenges').val();
  var complaints = $('#addcomplaints').val();
  var summary = $('#addsummary').val();
  var approved = 0;
  var verified = 0;
  var verifiedComments = "not verified";

  var filesarray = [];
  var inp = document.getElementById('input-id');
  for (var i = 0; i < inp.files.length; ++i) {
    var name = inp.files.item(i).name;
    filesarray[i] = name;
  }
  var files = JSON.stringify(filesarray);
  var picpath = files;
  var foldname = userid + "_" + eventtitle;
  var foldpath = foldname;

  if ((eventtitle == "") || (date == "") || (region == "") || (challenges == "") || (complaints == "") || (summary == "") ){
    $.notify({
      icon: "info_outline",
      message: "Please Fill Compulsory Fields."

    }, {
        type: 'danger',
        timer: 2000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
  }else{
    document.cookie = "foldname=" + foldname;

    var theUrl = "databasehandler.php?cmd=2&eventtitle=" + eventtitle + "&date=" + date + "&region=" + region + "&town=" + town + "&audiencecat=" + audiencecat + "&attendance=" + attendance
      + "&challenges=" + challenges + "&complaints=" + complaints + "&isVerified=" + verified + "&isApproved=" + approved + "&verifiedComments=" + verifiedComments + "&summary=" + summary + "&picpath=" + picpath + "&reporter=" + userid + "&foldpath=" + foldpath;

    $.ajax(theUrl,
      {
        async: true,
        complete: addeventComplete
      });
  }

}

function addeventComplete(xhr,status){
  var obj = JSON.parse(xhr.responseText);
  console.log(obj);
  $('#input-id').fileinput('upload');
  document.getElementById('RegisterValidationDoc').reset();
  $('#input-id').fileinput('enable');
  global1();
  $.notify({
     icon: "info_outline",
     message: "Event Added Successfully."

 },{
     type: 'success',
     timer: 2000,
     placement: {
         from: 'top',
         align: 'right'
     }
 });

}

function addpendingevent() {
  event.preventDefault();

  var userid = sessionStorage.getItem("userid");
  var eventtitle = $('#addpendingtitle').val();
  var date = $('#addpendingdateselected').val();
  var region = $('#addpendingregion').val();
  var town = $('#addpendingtown').val();
  var audiencecat = $('#addpendingaudience').val();

  if ((eventtitle == "") || (date == "") || (region == "")) {
    $.notify({
      icon: "info_outline",
      message: "Please Fill Compulsory Fields."

    }, {
        type: 'danger',
        timer: 2000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
  } else {

    var theUrl = "databasehandler.php?cmd=22&eventtitle=" + eventtitle + "&date=" + date + "&region=" + region + "&town=" + town + "&audiencecat=" + audiencecat + "&reporter=" + userid;

    $.ajax(theUrl,
      {
        async: true,
        complete: addpendingeventComplete
      });
  }

}

function addpendingeventComplete(xhr, status) {
  var obj = JSON.parse(xhr.responseText);
  console.log(obj);
  document.getElementById('RegisterPendingValidationDoc').reset();
  $.notify({
    icon: "info_outline",
    message: "Event Added Successfully."

  }, {
      type: 'success',
      timer: 2000,
      placement: {
        from: 'top',
        align: 'right'
      }
    });


}

function addpendpendingevent() {
  event.preventDefault();

  var userid = sessionStorage.getItem("userid");
  pendingid = $('#pendid').val();
  var eventtitle = $('#pendtitle').val();
  var date = $('#penddateselected').val();
  var region = $('#pendregion').val();
  var town = $('#pendtown').val();
  var audiencecat = $('#pendaudience').val();
  var attendance = $('#pendattendance').val();
  var challenges = $('#pendchallenges').val();
  var complaints = $('#pendcomplaints').val();
  var summary = $('#pendsummary').val();
  var approved = 0;
  var verified = 0;
  var verifiedComments = "not verified";

  var filesarray = [];
  var inp = document.getElementById('pendinput-id');
  for (var i = 0; i < inp.files.length; ++i) {
    var name = inp.files.item(i).name;
    filesarray[i] = name;
  }
  var files = JSON.stringify(filesarray);
  var picpath = files;
  var foldname = userid + "_" + eventtitle;
  var foldpath = foldname;

  if ((eventtitle == "") || (date == "") || (region == "") || (challenges == "") || (complaints == "") || (summary == "")) {
    $.notify({
      icon: "info_outline",
      message: "Please Fill Compulsory Fields."

    }, {
        type: 'danger',
        timer: 2000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
  } else {
    document.cookie = "foldname=" + foldname;

    var theUrl = "databasehandler.php?cmd=2&eventtitle=" + eventtitle + "&date=" + date + "&region=" + region + "&town=" + town + "&audiencecat=" + audiencecat + "&attendance=" + attendance
      + "&challenges=" + challenges + "&complaints=" + complaints + "&isVerified=" + verified + "&isApproved=" + approved + "&verifiedComments=" + verifiedComments + "&summary=" + summary + "&picpath=" + picpath + "&reporter=" + userid + "&foldpath=" + foldpath;

    //var theUrl1 = "databasehandler.php?cmd=25&pendid=" + pendingid;

    $.ajax(theUrl,
      {
        async: true,
        complete: addpendpendingeventComplete
      });
  }

}

function addpendpendingeventComplete(xhr, status) {
  var obj = JSON.parse(xhr.responseText);
  console.log(obj);
  $('#pendinput-id').fileinput('upload');
  document.getElementById('RegisterAddPendingValidationDoc').reset();
  $('#pendinput-id').fileinput('enable');

  deletependingevent(pendingid);

  UIkit.modal('#pending-modal-overflow').hide();

  $.notify({
    icon: "info_outline",
    message: "Event Added Successfully."

  }, {
      type: 'success',
      timer: 2000,
      placement: {
        from: 'top',
        align: 'right'
      }
    });


}

function addlevel1user() {
  event.preventDefault();

  var info = $("#AddUserForm").serialize();
  var regionid = sessionStorage.getItem("region");
  var level = "1";
  var useraddfname = $('#useraddfname').val();
  var useraddlname = $('#useraddlname').val();
  var useraddemail = $('#useraddemail').val();
  var useraddpword = $('#useraddpword').val();

  if ((useraddfname == "") || (useraddlname == "") || (useraddemail == "") || (useraddpword == "")) {
    $.notify({
      icon: "info_outline",
      message: "Please Fill Compulsory Fields."

    }, {
        type: 'danger',
        timer: 2000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
  } else {

    var theUrl = "databasehandler.php?cmd=19&" + info + "&region=" + regionid + "&level=" + level + "&myid="+sessionStorage.userid;

    $.ajax(theUrl,
      {
        async: true,
        complete: addlevel1userComplete
      });
  }

}

function addlevel1userComplete(xhr, status) {
  var obj = JSON.parse(xhr.responseText);
  console.log(obj[0].userid);


  var theUrl = "databasehandler.php?cmd=23&acted_on_id=" + obj[0].userid +"&myid="+sessionStorage.userid;

  $.ajax(theUrl,
    {
      async: true,
    });


  document.getElementById('AddUserForm').reset();
  //level2usersdatatable.ajax.reload();
  $.notify({
    icon: "info_outline",
    message: "User Added Successfully."

  }, {
      type: 'success',
      timer: 2000,
      placement: {
        from: 'top',
        align: 'right'
      }
    });

}

function addlevel2user(event) {
event.preventDefault();

  var info = $("#AddUserForm").serialize();
  var useraddfname = $('#useraddfname').val();
  var useraddlname = $('#useraddlname').val();
  var useraddemail = $('#useraddemail').val();
  var useraddpword = $('#useraddpword').val();

  if ((useraddfname == "") || (useraddlname == "") || (useraddemail == "") || (useraddpword == "")) {
    $.notify({
      icon: "info_outline",
      message: "Please Fill Compulsory Fields."

    }, {
        type: 'danger',
        timer: 2000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
  } else {

    var theUrl = "databasehandler.php?cmd=19&" + info  + "&myid="+sessionStorage.userid;

    $.ajax(theUrl,
      {
        async: true,
        complete: addlevel2userComplete
      });
  }

}

function addlevel2userComplete(xhr, status) {
  var obj = JSON.parse(xhr.responseText);
  console.log(obj);
  document.getElementById('AddUserForm').reset();
  //level2usersdatatable.ajax.reload();

  var theUrl = "databasehandler.php?cmd=23&acted_on_id=" + obj[0].userid +"&myid="+sessionStorage.userid;

  $.ajax(theUrl,
    {
      async: true,
    });


  $.notify({
    icon: "info_outline",
    message: "User Added Successfully."

  }, {
      type: 'success',
      timer: 2000,
      placement: {
        from: 'top',
        align: 'right'
      }
    });

}

function clearaddfield(event) {
  event.preventDefault();
  document.getElementById('RegisterValidationDoc').reset();
}

function clearaddpendingfield() {
  event.preventDefault();
  document.getElementById('RegisterAddPendingValidationDoc').reset();
}

function clearpendingfield() {
  event.preventDefault();
  document.getElementById('RegisterPendingValidationDoc').reset();
}

function clearuseraddfield(event) {
  event.preventDefault();
  document.getElementById('AddUserForm').reset();
}

function deleteevent(pid) {
  var theUrl = "databasehandler.php?cmd=25&eventid=" + pid;
  $.ajax(theUrl,
    {
      async: true,
      complete: global1,
      complete: removependpendingeventComplete
    });
}

function denyEvent() {
  var comments = $('#commentsForDeny').val();

  var theUrl = "databasehandler.php?cmd=36&eventid=" + sessionStorage.denyeventId + "&comments=" + comments + "&level=" + sessionStorage.denyLevel + "&commenter=" + sessionStorage.userid;
  $.ajax(theUrl,
    {
      async: true,
      complete: denyEventComplete
    });

  $('#commentsForDeny').val("");
}

function denyEventComplete(xhr, status) {

  console.log(xhr);

  global1();
  global2();
  global3();

  $.notify({
    icon: "info_outline",
    message: "Event Denied Successfully."

  }, {
      type: 'success',
      timer: 2000,
      placement: {
        from: 'top',
        align: 'right'
      }
    });
}

function denyEventModal(id, verState) {
  sessionStorage.denyeventId = id;
  sessionStorage.denyLevel = verState;

  event.preventDefault();
  UIkit.modal('#modal-overflow-deny-comments').show();

}

function editevent() {
  event.preventDefault();

  var userid = sessionStorage.getItem("userid");
  var eventtitle = $('#editaddnewtitle').val();
  var date = $('#editaddnewdateselected').val();
  var region = $('#editaddnewregion').val();
  var town = $('#editaddnewtown').val();
  var audiencecat = $('#editaddnewaudience').val();
  var attendance = $('#editaddnewattendance').val();
  var topics = $('#editaddnewtopics').val();
  var complaints = $('#addcomplaints').val();
  var summary = $('#addsummary').val();
  var approved = 0;
  var verified = 0;
  var verifiedComments = "not verified";

  var filesarray = [];
  var inp = document.getElementById('input-id');
  for (var i = 0; i < inp.files.length; ++i) {
    var name = inp.files.item(i).name;
    filesarray[i] = name;
  }
  var files = JSON.stringify(filesarray);
  var picpath = files;
  var foldname = userid + "_" + eventtitle;
  var foldpath = foldname;

  if ((eventtitle == "") || (date == "") || (region == "") || (challenges == "") || (complaints == "") || (summary == "")) {
    $.notify({
      icon: "info_outline",
      message: "Please Fill Compulsory Fields."

    }, {
        type: 'danger',
        timer: 2000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
  } else {
    document.cookie = "foldname=" + foldname;

    var theUrl = "databasehandler.php?cmd=x&eventtitle=" + eventtitle + "&date=" + date + "&region=" + region + "&town=" + town + "&audiencecat=" + audiencecat + "&attendance=" + attendance
      + "&challenges=" + challenges + "&complaints=" + complaints + "&isVerified=" + verified + "&isApproved=" + approved + "&verifiedComments=" + verifiedComments + "&summary=" + summary + "&picpath=" + picpath + "&reporter=" + userid + "&foldpath=" + foldpath;

    $.ajax(theUrl,
      {
        async: true,
        complete: editEventComplete
      });
  }

}

function editEventComplete(xhr, status) {
  var obj = JSON.parse(xhr.responseText);
  console.log(obj);
  $('#input-id').fileinput('upload');
  document.getElementById('RegisterValidationDoc').reset();
  $('#input-id').fileinput('enable');
  global1();
  $.notify({
    icon: "info_outline",
    message: "Event Editted Successfully."

  }, {
      type: 'success',
      timer: 2000,
      placement: {
        from: 'top',
        align: 'right'
      }
    });
  global1();

}

function eventviewer(val) {
  // console.log('modal to edit: ', val);
  var theUrl = "databasehandler.php?cmd=6&eventid=" + val;

  $.ajax(theUrl,
    {
      async: true,
      complete: eventviewerComplete
    });

  // $('#modalpop').click();
}

function eventviewerComplete(xhr, status) {
  // console.log(xhr);
  var obj = JSON.parse(xhr.responseText);

  var dform = new Date(obj[0].date_organized);

  $('#eventmodalshow').click();

  $('#showeventtitle').val(obj[0].eventtitle);
  $('#showdate_organized').val(moment(dform).format('D MMMM Y'));
  $('#showregion').val(obj[0].region);
  $('#showtown').val(obj[0].town);
  $('#showaudience_category').val(obj[0].audience_category);
  $('#showaudience_attendance').val(obj[0].audience_attendance);
  $('#showevent_summary').val(obj[0].event_summary);

}

function generateInputs() {

  var number = $('#createInputs').val();

  for (var i = 0; i < number; i++) {
    document.getElementById('place').appendChild = "<div><input/></div>";
  }


}

function helpApproval() {
  toggleapprove(sessionStorage.pullapproved, sessionStorage.pullreportid);
}

function loginUser(event) {
  event.preventDefault();
  var email = $('#useremail').val();
  var password = $('#userpassword').val();

  var theUrl = "databasehandler.php?cmd=1&email=" + email + "&password=" + password;
  $.ajax(theUrl,
    {
      async: true,
      complete: loginUserComplete
    });
}

function loginUserComplete(xhr, status) {
  var obj = JSON.parse(xhr.responseText);
  // console.log(obj);
  //localstorage and cookie creation
  localStorage.levelid = obj.userid;
  document.cookie = "userlevelid=" + obj.userid;
  //sessionstorage creation
  sessionStorage.userid = obj.userid;
  sessionStorage.firstname = obj.firstname;
  sessionStorage.lastname = obj.lastname;
  sessionStorage.level = obj.level;
  sessionStorage.region = obj.region;

  // console.log(sessionStorage.userid, sessionStorage.firstname, sessionStorage.lastname, sessionStorage.level);

  if (sessionStorage.level == '1') {
    window.location = "level1H.html";
  } else if (sessionStorage.level == '2') {
    window.location = "level2H.html";
  } else if (sessionStorage.level == '3') {
    window.location = "level3H.html";
  } else if (sessionStorage.level == '4') {
    window.location = "dashboard.html";
  } else {

    $.notify({
      icon: "info_outline",
      message: "Failed To Log In. Please check your details and try again."

    }, {
        type: 'danger',
        timer: 4000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });

  }


}

function passwordreset(event) {
  event.preventDefault();

  var currentpassword = $('#currentpassword').val();
  var newpassword = $('#newpassword').val();
  var confirmednewpassword = $('#confirmednewpassword').val();

  if (newpassword == confirmednewpassword) {

    var theUrl = "databasehandler.php?cmd=26&myid=" + sessionStorage.userid + "&confirmednewpassword=" + confirmednewpassword;

    $.ajax(theUrl,
      {
        async: true,
        complete: passwordresetComplete
      });

  } else {

    $.notify({
      icon: "info_outline",
      message: "New password is not the same as confirmed password."

    }, {
        type: 'warning',
        timer: 1000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });

  }

}

function passwordresetComplete(xhr, status) {
  console.log(xhr);

  //level2usersdatatable.ajax.reload();
  $.notify({
    icon: "info_outline",
    message: "Password Changed Successfully."

  }, {
      type: 'success',
      timer: 1000,
      placement: {
        from: 'top',
        align: 'right'
      }
    });

}

function removependpendingeventComplete(xhr, status) {
  var obj = JSON.parse(xhr.responseText);

  global1();

  $.notify({
    icon: "info_outline",
    message: "Event Removed Successfully."

  }, {
      type: 'success',
      timer: 2000,
      placement: {
        from: 'top',
        align: 'right'
      }
    });
}

function toggleapprove(val, id) {

  var theUrl = "databasehandler.php?cmd=4&eventid=" + id + "&approval=" + val;

  $.ajax(theUrl,
    {
      async: true,

    });

  window.location.href = "level3H.html";
}

function viewer(val) {
  console.log('modal to view: ', val);
}

function welcomeToHomeLevel1() {


  if (sessionStorage.level == "1") {
    getaudiences();
    getregions();
  } else {
    window.location.href = "404.html";
  }


  
  document.getElementById('logout').value = "Logout"
  // _fetchMyEvents(sessionStorage.userid);


}

function welcomeToHomeLevel2() {


  if (sessionStorage.level == "2") {
    
  } else {
    window.location.href = "404.html";
  }

  document.getElementById('logout').value = "Logout"
  _fetchMyEvents(sessionStorage.userid);

}

function welcomeToHomeLevel3() {


  if (sessionStorage.level == "3") {
  } else {
    window.location.href = "404.html";
  }

  document.getElementById('logout').value = "Logout";
  fillDashRegionFigures();
  fillDashTotalEvents();
  fillDashTotalAttendees();
  fillDashCommonPlace();
  _fetchMyEvents(sessionStorage.userid);

}

function welcomeToHomeLevel4() {


  if (sessionStorage.level == "3" || sessionStorage.level == "4") {

  } else {
    window.location.href = "404.html";
  }
  
  $('#dashboardname').html(sessionStorage.firstname + " " + sessionStorage.lastname);
  document.getElementById('dashboardname').value = sessionStorage.firstname;

  // document.getElementById('logout').value="Logout";
  fillDashRegionFigures();
  fillDashTotalEvents();
  fillDashTotalAttendees();
  fillDashCommonPlace();
  _fetchMyEvents(sessionStorage.userid);

}

/////////////GENERAL FUNCTIONALITY///////////////////////////////////////
/////////////GENERAL FUNCTIONALITY///////////////////////////////////////
/////////////GENERAL FUNCTIONALITY///////////////////////////////////////
/////////////GENERAL FUNCTIONALITY///////////////////////////////////////
/////////////GENERAL FUNCTIONALITY///////////////////////////////////////

/////////////LEVEL 1 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 1 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 1 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 1 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 1 FUNCTIONALITY///////////////////////////////////////

function addnewevent(event){
  event.preventDefault();

  var userid = sessionStorage.getItem("userid");
  var eventtitle = $('#addnewtitle').val();
  var date = $('#addnewnewdateselected').val();
  var region = $('#addnewregion').val();
  var town = $('#addnewtown').val();
  var audiencecat = $('#addnewaudience').val();
  var attendance = $('#addnewattendance').val();

  var topic = $('#addnewtopics').val();

  var logistics = "";
  var communicationMode = "";


  var addnewpowerpoint = $('#addnewpowerpoint').val();
  var addnewoneonone = $('#addnewoneonone').val();
  var addnewroadshow = $('#addnewroadshow').val();
  var addnewdurbar = $('#addnewdurbar').val();
  var addnewsmallgroupmeeting = $('#addnewsmallgroupmeeting').val();
  var addnewbus = $('#addnewbus').val();
  var addnewsoundsystem = $('#addnewsoundsystem').val();
  var addnewflyer = $('#addnewflyer').val();
  var addnewpen = $('#addnewpen').val();
  var addnewtapemeasure = $('#addnewtapemeasure').val();
  var addnewtowel = $('#addnewtowel').val();
  var addnewmug = $('#addnewmug').val();
  var addnewshirt = $('#addnewshirt').val();
  var addnewnotepad = $('#addnewnotepad').val();
  var addnewpowerblock = $('#addnewpowerblock').val();


  // communications mode select
    if ($('#addnewpowerpoint').is(":checked"))
    {
      communicationMode = communicationMode + addnewpowerpoint + ",";
    }
    if ($('#addnewoneonone').is(":checked"))
    {
      communicationMode = communicationMode + addnewoneonone + ",";
    }
    if ($('#addnewroadshow').is(":checked"))
    {
      communicationMode = communicationMode + addnewroadshow + ",";
    }
    if ($('#addnewdurbar').is(":checked"))
    {
      communicationMode = communicationMode + addnewdurbar + ",";
    }
    if ($('#addnewsmallgroupmeeting').is(":checked"))
    {
      communicationMode = communicationMode + addnewsmallgroupmeeting + ",";
    }



    // logistics select
    if ($('#addnewbus').is(":checked"))
    {
      logistics = logistics + addnewbus+ ",";
    }
    if ($('#addnewsoundsystem').is(":checked"))
    {
      logistics = logistics + addnewsoundsystem+ ",";
    }
    if ($('#addnewflyer').is(":checked"))
    {
      logistics = logistics + addnewflyer+ ",";
    }
    if ($('#addnewpen').is(":checked"))
    {
      logistics = logistics + addnewpen+ ",";
    }
    if ($('#addnewtapemeasure').is(":checked"))
    {
      logistics = logistics + addnewtapemeasure+ ",";
    }
    if ($('#addnewtowel').is(":checked"))
    {
      logistics = logistics + addnewtowel+ ",";
    }
    if ($('#addnewmug').is(":checked"))
    {
      logistics = logistics + addnewmug+ ",";
    }
    if ($('#addnewshirt').is(":checked"))
    {
      logistics = logistics + addnewshirt+ ",";
    }
    if ($('#addnewnotepad').is(":checked"))
    {
      logistics = logistics + addnewnotepad+ ",";
    }
    if ($('#addnewpowerblock').is(":checked"))
    {
      logistics = logistics + addnewpowerblock+ ",";
    }


  if ((eventtitle == "") || (date == "") || (region == "") || (town == "") || (audiencecat == "") || (attendance == "") ){
    $.notify({
      icon: "info_outline",
      message: "Please Fill Compulsory Fields."

    }, {
        type: 'danger',
        timer: 500,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
  }else{

    var theUrl = "databasehandler.php?cmd=2&eventtitle=" + eventtitle + "&date=" + date + "&region=" + region + "&town=" + town + "&audiencecat=" + audiencecat + "&attendance=" + attendance +
       "&outreach=" + communicationMode + "&eventtopic=" + topic + "&logistics=" + logistics + "&reporter=" + userid;
    $.ajax(theUrl,
      {
        async: true,
        complete: addneweventComplete
      });
  }

}

function addneweventComplete(xhr,status){

  var obj = JSON.parse(xhr.responseText);
  console.log('added' , obj);

  document.getElementById('RegisterValidationDoc').reset();
  global1();

  $.notify({
    icon: "info_outline",
    message: "Event submitted successfully for verification and approval."

  },{
    type: 'success',
    timer: 2000,
    placement: {
        from: 'top',
        align: 'right'
     }
  });

}

function addReportModal(val) {
  // event.preventDefault();
  var theUrl = "databasehandler.php?cmd=6&eventid=" + val;
  sessionStorage.report_event_id = val;
  $.ajax(theUrl,
    {
      async: true,
      complete: loadEventReport
    });

}

function addNewReport() {

  var addnewreportobservation = $('#report_observations').val();
  var addnewreportchallenge = $('#report_challenges').val();
  var addnewreportcomplaint = $('#report_complaints').val();
  //var addnewreportinput = $('#input-id').val();
  var addnewreportmembers = $('#report_members').val();

  var report_event_id = sessionStorage.report_event_id;

  var filesarray = [];
  var inp = document.getElementById('input-id');
  for (var i = 0; i < inp.files.length; ++i) {
    var name = inp.files.item(i).name;
    filesarray[i] = name;
  }
  var files = JSON.stringify(filesarray);
  var picpath = files;
  var foldname = sessionStorage.userid + "_" + report_event_id;
  var foldpath = foldname;

  document.cookie = ("foldname=" + foldname);

  if ((addnewreportobservation == "") || (addnewreportchallenge == "") || (addnewreportcomplaint == "") || (addnewreportmembers == "")) {

    $.notify({
      icon: "info_outline",
      message: "PLEASE FILL OUT ALL FIELDS TO CONTINUE."

    }, {
        type: 'danger',
        timer: 2000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });

  }
  else {

    var theUrl = "databasehandler.php?cmd=30&eventid=" + report_event_id + "&challenges=" + addnewreportchallenge + "&complaints=" + addnewreportcomplaint + "&observations=" + addnewreportobservation + "&picpath=" + picpath + "&foldpath=" + foldpath + "&members=" + addnewreportmembers;

    $.ajax(theUrl,
      {
        async: true,
        complete: addNewReportComplete
      });
  }
}

function addNewReportComplete(xhr, status) {

  var obj = JSON.parse(xhr.responseText);

  $('#input-id').fileinput('upload');
  $('#input-id').fileinput('reset');
  $('#input-id').fileinput('enable');
  UIkit.modal('#modal-report').hide();

  $('#report_observations').val("");
  $('#report_challenges').val("");
  $('#report_complaints').val("");
  $('#input-id').val("");
  $('#report_members').val("");

  global1();

  $.notify({
    icon: "info_outline",
    message: "Report created successfully for verification."

  }, {
      type: 'success',
      timer: 2000,
      placement: {
        from: 'top',
        align: 'right'
      }
    });

}

function deleteReport(val) {
  var theUrl = "databasehandler.php?cmd=32&reportid=" + val;


  $.ajax(theUrl,
    {
      async: true,
      complete: deleteReportComplete
    });
}

function deleteReportComplete(xhr, status) {

  var obj = JSON.parse(xhr.responseText);

  UIkit.modal('#modal-overflow-2-report').hide();

  global1();

  $.notify({
    icon: "info_outline",
    message: "Report deleted successfully."

  }, {
      type: 'danger',
      timer: 2000,
      placement: {
        from: 'top',
        align: 'right'
      }
    });

}

function deleteDeniedReport(val) {
  var theUrl = "databasehandler.php?cmd=32&eventid=" + val;


  $.ajax(theUrl,
    {
      async: true,
      complete: deleteDeniedReportComplete
    });
}

function deleteDeniedReportComplete(xhr, status) {

  var obj = JSON.parse(xhr.responseText);

  global1();

  $.notify({
    icon: "info_outline",
    message: "Report deleted successfully."

  }, {
      type: 'danger',
      timer: 2000,
      placement: {
        from: 'top',
        align: 'right'
      }
    });

}

function editNewEvent(event) {

  event.preventDefault();

  var userid = sessionStorage.getItem("userid");
  var eventid = sessionStorage.getItem("eventneededid");
  var eventtitle = $('#editaddnewtitle').val();
  var date = $('#editaddnewdateselected').val();
  var region = $('#editaddnewregion').val();
  var town = $('#editaddnewtown').val();
  var audiencecat = $('#editaddnewaudience').val();
  var attendance = $('#editaddnewattendance').val();

  var topic = $('#editaddnewtopics').val();

  var logistics = "";
  var communicationMode = "";


  var addnewpowerpoint = $('#editaddnewpowerpoint').val();
  var addnewoneonone = $('#editaddnewoneonone').val();
  var addnewroadshow = $('#editaddnewroadshow').val();
  var addnewdurbar = $('#editaddnewdurbar').val();
  var addnewsmallgroupmeeting = $('#editaddnewsmallgroupmeeting').val();
  var addnewbus = $('#editaddnewbus').val();
  var addnewsoundsystem = $('#editaddnewsoundsystem').val();
  var addnewflyer = $('#editaddnewflyer').val();
  var addnewpen = $('#editaddnewpen').val();
  var addnewtapemeasure = $('#editaddnewtapemeasure').val();
  var addnewtowel = $('#editaddnewtowel').val();
  var addnewmug = $('#editaddnewmug').val();
  var addnewshirt = $('#editaddnewshirt').val();
  var addnewnotepad = $('#editaddnewnotepad').val();
  var addnewpowerblock = $('#editaddnewpowerblock').val();


  // communications mode select
  if ($('#editaddnewpowerpoint').is(":checked")) {
    communicationMode = communicationMode + addnewpowerpoint + ",";
  }
  if ($('#editaddnewoneonone').is(":checked")) {
    communicationMode = communicationMode + addnewoneonone + ",";
  }
  if ($('#editaddnewroadshow').is(":checked")) {
    communicationMode = communicationMode + addnewroadshow + ",";
  }
  if ($('#editaddnewdurbar').is(":checked")) {
    communicationMode = communicationMode + addnewdurbar + ",";
  }
  if ($('#editaddnewsmallgroupmeeting').is(":checked")) {
    communicationMode = communicationMode + addnewsmallgroupmeeting + ",";
  }


  // logistics select
  if ($('#editaddnewbus').is(":checked")) {
    logistics = logistics + addnewbus + ",";
  }
  if ($('#editaddnewsoundsystem').is(":checked")) {
    logistics = logistics + addnewsoundsystem + ",";
  }
  if ($('#editaddnewflyer').is(":checked")) {
    logistics = logistics + addnewflyer + ",";
  }
  if ($('#editaddnewpen').is(":checked")) {
    logistics = logistics + addnewpen + ",";
  }
  if ($('#editaddnewtapemeasure').is(":checked")) {
    logistics = logistics + addnewtapemeasure + ",";
  }
  if ($('#editaddnewtowel').is(":checked")) {
    logistics = logistics + addnewtowel + ",";
  }
  if ($('#editaddnewmug').is(":checked")) {
    logistics = logistics + addnewmug + ",";
  }
  if ($('#editaddnewshirt').is(":checked")) {
    logistics = logistics + addnewshirt + ",";
  }
  if ($('#editaddnewnotepad').is(":checked")) {
    logistics = logistics + addnewnotepad + ",";
  }
  if ($('#editaddnewpowerblock').is(":checked")) {
    logistics = logistics + addnewpowerblock + ",";
  }


  if ((eventtitle == "") || (date == "") || (topic == "") || (town == "") || (attendance == "")) {
    $.notify({
      icon: "info_outline",
      message: "Please Fill Compulsory Fields."

    }, {
        type: 'danger',
        timer: 500,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
  } else if ((region == "")) {
    $.notify({
      icon: "info_outline",
      message: "Please select the region this altered event will be held in."

    }, {
        type: 'danger',
        timer: 500,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
  } else if ((audiencecat == "")) {
    $.notify({
      icon: "info_outline",
      message: "Please select the audience category this altered event will be held for."

    }, {
        type: 'danger',
        timer: 500,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
  }
  else {

    var theUrl = "databasehandler.php?cmd=29&eventtitle=" + eventtitle + "&date=" + date + "&region=" + region + "&town=" + town + "&audiencecat=" + audiencecat + "&attendance=" + attendance +
      "&outreach=" + communicationMode + "&eventtopic=" + topic + "&logistics=" + logistics + "&reporter=" + userid + "&eventid=" + eventid;
    $.ajax(theUrl,
      {
        async: true,
        complete: editNewEventComplete
      });
  }
}

function editNewEventComplete() {
  UIkit.modal('#edit-modal-overflow').hide();
  global1();
}

function getaudiences() {
  var theUrl = "databasehandler.php?cmd=35";

  $.ajax(theUrl,
    {
      async: true,
      complete: getaudiencesComplete
    });
}

function getaudiencesComplete(xhr, status) {
  var obj = JSON.parse(xhr.responseText);

  console.log(obj);

  var dropdown = "";
  $('#audiencedropdown').html("");

  dropdown = dropdown + "<select id='addnewaudience' class='form-control' data-style='btn' title='Select Audience'><option value='0'>Select Audience</option>";
  for (var i = 0; i < obj.length; i++) {
    var drop_id = obj[i].aud_id;
    var drop_name = obj[i].aud_name;
    // if (user_id == sessionStorage.reassigncreatorId) {
    //   dropdown = dropdown + "";
    // } else {
    dropdown = dropdown + "<option value='" + drop_name + "'>" + drop_name + "</option>";
    //}

  }
  dropdown = dropdown + "</select>";

  document.getElementById('audiencedropdown').innerHTML = dropdown;

}

function getregions() {
  var theUrl = "databasehandler.php?cmd=8";

  $.ajax(theUrl,
    {
      async: true,
      complete: getregionsComplete
    });
}

function getregionsComplete(xhr, status) {
  var obj = JSON.parse(xhr.responseText);

  console.log(obj);

  var dropdown = "";
  $('#regiondropdown').html("");

  dropdown = dropdown + "<select id='addnewregion' class='form-control' data-style='btn' title='Select Audience'><option value='0'>Select Region</option>";
  for (var i = 0; i < obj.length; i++) {
    var drop_id = obj[i].region_id;
    var drop_name = obj[i].regionname;
    // if (user_id == sessionStorage.reassigncreatorId) {
    //   dropdown = dropdown + "";
    // } else {
    dropdown = dropdown + "<option value='" + drop_id + "'>" + drop_name + "</option>";
    //}

  }
  dropdown = dropdown + "</select>";

  document.getElementById('regiondropdown').innerHTML = dropdown;

}

function level1Edit(val, event){
  event.preventDefault();

  var theUrl = "databasehandler.php?cmd=6&eventid=" + val;
  sessionStorage.setItem("eventneededid",val);

  $.ajax(theUrl,
    {
      async: true,
      complete: level1EditComplete
    });

}

function level1EditComplete(xhr,status){
  var obj = JSON.parse(xhr.responseText);
  console.log('LOOK HERE' , obj);

  document.getElementById('EditRegisterValidationDoc').reset();

 
  UIkit.modal('#edit-modal-overflow').show();
  
  $('#editaddnewdateselected').val(moment(obj[0].date_to_be_organized).format('dddd, D MMMM Y'));
  $('#editaddnewtitle').val(obj[0].eventtitle);
  $('#editaddnewattendance').val(obj[0].expected_audience_attendance);
  $('#editaddnewtown').val(obj[0].town);
  $('#editaddnewtopics').val(obj[0].eventtopic);

  //split the mode outreach
  obj[0].mode_of_outreach
  //split the mode outreach
  // check which ones are in it...and for each particular one - trigger the checkbox if the string contains it
  obj[0].logistics

  var variousModes = obj[0].mode_of_outreach.split(',');
  for(var i = 0; i < variousModes.length; i++){

        if(variousModes[i] == "PowerPoint Presentation")
          $("#editaddnewpowerpoint").attr("checked", true);
        if(variousModes[i] == "One-on-one")
          $("#editaddnewoneonone").attr("checked", true);
        if(variousModes[i] == "Road Show")
          $("#editaddnewroadshow").attr("checked", true);
        if(variousModes[i] == "Durbar")
          $("#editaddnewdurbar").attr("checked", true);
        if(variousModes[i] == "Small group meeting")
          $("#editaddnewsmallgroupmeeting").attr("checked", true);

  }


  var variousLogistics = obj[0].logistics.split(',');
  for(var i = 0; i < variousLogistics.length; i++){

    if(variousLogistics[i] == "Bus(es)")
       $("#editaddnewbus").attr("checked", true);
    if(variousLogistics[i] == "Sound System(s)")
       $("#editaddnewsoundsystem").attr("checked", true);
    if(variousLogistics[i] == "Flyer(s)")
       $("#editaddnewflyer").attr("checked", true);
    if(variousLogistics[i] == "Pen(s)")
       $("#editaddnewpen").attr("checked", true);
    if(variousLogistics[i] == "Tape Measure(s)")
       $("#editaddnewtapemeasure").attr("checked", true);
    if(variousLogistics[i] == "Towel(s)")
       $("#editaddnewtowel").attr("checked", true);
    if(variousLogistics[i] == "Mug(s)")
       $("#editaddnewmug").attr("checked", true);
    if(variousLogistics[i] == "T-shirt(s)")
       $("#editaddnewshirt").attr("checked", true);
    if(variousLogistics[i] == " Notepad(s)")
       $("#editaddnewnotepad").attr("checked", true);
    if(variousLogistics[i] == " Power Block(s)")
       $("#editaddnewpowerblock").attr("checked", true);



  }
  

  var theUrla = "databasehandler.php?cmd=35";
  $.ajax({
    type: 'POST',
    url: theUrla,
    success: function (data) {
      var mydrop = JSON.parse(data);
      if (mydrop == "") {
        alert("Database Error");
      } else {
        var dropdown = "";
        $('#editaudiencedropdown').html("");

        dropdown = dropdown + "<select id='editaddnewaudience' class='form-control' data-style='btn' title='Select Audience'>";
        for (var i = 0; i < mydrop.length; i++) {
          var drop_id = mydrop[i].aud_id;
          var drop_name = mydrop[i].aud_name;
          if (drop_name == obj[0].audience_category) {
            dropdown = dropdown + "<option value='" + drop_name + "' selected>" + drop_name + "</option>";
          } else {
            dropdown = dropdown + "<option value='" + drop_name + "'>" + drop_name + "</option>";
          }

        }
        dropdown = dropdown + "</select>";

        document.getElementById('editaudiencedropdown').innerHTML = dropdown;
      }
    }
  });

  var theUrlr = "databasehandler.php?cmd=8";
  $.ajax({
    type: 'POST',
    url: theUrlr,
    success: function (data) {
      var mydrop = JSON.parse(data);
      if (mydrop == "") {
        alert("Database Error");
      } else {
        var dropdown = "";
        $('#editregiondropdown').html("");

        dropdown = dropdown + "<select id='editaddnewregion' class='form-control' data-style='btn' title='Select Region'>";
        for (var i = 0; i < mydrop.length; i++) {
          var drop_id = mydrop[i].region_id;
          var drop_name = mydrop[i].regionname;
          if (drop_id == obj[0].region) {
            dropdown = dropdown + "<option value='" + drop_id + "' selected>" + drop_name + "</option>";
          } else {
            dropdown = dropdown + "<option value='" + drop_id + "'>" + drop_name + "</option>";
          }

        }
        dropdown = dropdown + "</select>";

        document.getElementById('editregiondropdown').innerHTML = dropdown;
      }
    }
  });

}

function level1View(val) {
  console.log('modal to view: ', val);
  var theUrl = "databasehandler.php?cmd=6&eventid=" + val;

  fetchCommentsLevel1Events(val);

  $.ajax(theUrl,
    {
      async: true,
      complete: level1ViewComplete
    });

  // $('#modalpop').click();
}

function level1ViewComplete(xhr, status) {
  console.log(xhr);
  var obj = JSON.parse(xhr.responseText);

  $('#logisticsTable').html("");
  $('#modeTable').html("");


  // console.log(typeof(obj[0].picture_paths));
  console.log(obj);

  var picValues = "";
  $('#pictureContainer').html("");
  //console.log(obj[0].report_id);
  var dform = new Date(obj[0].date_to_be_organized);
  UIkit.modal('#modal-overflow').show();

  //$('#report_id').val(obj[0].report_id);
  // $('#eventtitle').innerHTML(obj[0].eventtitle);
  document.getElementById('eventtitle').innerHTML = obj[0].eventtitle;
  document.getElementById('date_organized').innerHTML = moment(obj[0].date_to_be_organized).format('D MMMM Y');
  document.getElementById('region').innerHTML = obj[0].regionname;
  document.getElementById('town').innerHTML = obj[0].town;
  document.getElementById('audience_category').innerHTML = obj[0].audience_category;
  document.getElementById('audience_attendance').innerHTML = obj[0].expected_audience_attendance;
  document.getElementById('event_topics').innerHTML = obj[0].eventtopic;
  var logistics = obj[0].logistics;
  var strlenLogistics = obj[0].logistics.length;

  // document.getElementById('team_challenges').innerHTML = logistics.substring(0, strlenLogistics - 1);

  var logisticsView = obj[0].logistics.split(',');
  for(var i = 0; i < logisticsView.length; i++){

    if(logisticsView[i] != ""){
        tabledata = "<tr>"+
        "<td style='text-transform: uppercase'> "+(i+1)+". "+logisticsView[i]+"</td>"+
        "</tr>";
    $('#logisticsTable').append(tabledata);
    }

  }

  var modeOfOutreachView = obj[0].mode_of_outreach.split(',');
  for(var i = 0; i < modeOfOutreachView.length; i++){

    if(modeOfOutreachView[i] != ""){
          tabledata = "<tr>"+
          "<td style='text-transform: uppercase'> "+(i+1)+". "+modeOfOutreachView[i]+"</td>"+
          "</tr>";
        $('#modeTable').append(tabledata);
    }

  }


  var mode = obj[0].mode_of_outreach;
  var strlenMode = obj[0].mode_of_outreach.length;
  // document.getElementById('complaints_raised').innerHTML = mode.substring(0, strlenMode - 1);


  var dateVerfied = new Date(obj[0].verified_timestamp);
  var dateApproved = new Date(obj[0].approved_timestamp);

  
  if(obj[0].is_verified == 1){
    $('#statusBanner').html("<div style='background-color: green'><center style='color: white; font-weight: bold;'>VERIFIED</center></div>");
  }
  if ((obj[0].is_verified == 1) && (obj[0].is_approved == 1)){
    $('#statusBanner').html("<div style='background-color: green'><center style='color: white; font-weight: bold;'>VERIFIED & APPROVED</center></div>");
  }
  if ((obj[0].is_verified == 0) && (obj[0].is_approved == 0)){
    $('#statusBanner').html("<div style='background-color: grey'><center style='color: white; font-weight: bold;'>PENDING VERIFICATION AND APPROVAL</center></div>");
  }
  if ((obj[0].is_verified == 2) || (obj[0].is_approved == 2)){
    $('#statusBanner').html("<div style='background-color: red'><center style='color: white; font-weight: bold;'>EVENT PROPOSAL REJECTED</center></div>");
  }

  

  if ((obj[0].verified_timestamp == "") && (obj[0].approved_timestamp == "")) {
    document.getElementById('epv').innerHTML = "Not verified yet";
    document.getElementById('epa').innerHTML = "Not approved yet";
  }
  if ((obj[0].verified_timestamp != "") && (obj[0].approved_timestamp == "")) {
    document.getElementById('epv').innerHTML = moment(obj[0].verified_timestamp).format('D MMMM Y');
    document.getElementById('epa').innerHTML = "Not approved yet.";
  }
  if ((obj[0].verified_timestamp != "") && (obj[0].approved_timestamp != "")) {
    document.getElementById('epv').innerHTML = moment(obj[0].verified_timestamp).format('D MMMM Y');
    document.getElementById('epa').innerHTML = moment(obj[0].approved_timestamp).format('D MMMM Y');
  }


}

function fetchCommentsLevel1Events(eventID){

  var theUrl = "databasehandler.php?cmd=38&eventid=" + eventID;

  
    $.ajax(theUrl,
      {
        async: true,
        complete: fetchCommentsLevel1EventsComplete
      });

}

function fetchCommentsLevel1EventsComplete(xhr, status){
  console.log(xhr);
  var obj = JSON.parse(xhr.responseText);

  console.log("Comments:", obj);

  var commentInsert = ""
  $('#commentHold').html("");
  for(var i = 0; i < obj.length; i++){
    console.log(obj[i].firstname + " " + obj[i].lastname + " " + obj[i].action_date +  " " + obj[i].action + " " + obj[i].comment_type + " " + obj[i].comment);
  }



  for(var i = 0; i < obj.length; i++){

    commentInsert = commentInsert + "<div>";
    commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: capitalize'> "+obj[i].firstname+" "+obj[i].firstname+" </div>";
    commentInsert = commentInsert + "<div class='uk-panel'> "+moment(obj[i].action_date).format('D MMMM Y hh:mm:ss')+" </div>";
    commentInsert = commentInsert + "</div>";
    
    commentInsert = commentInsert + "<div>";
    
    if(obj[i].action == "verify"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: green'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    if(obj[i].action == "approve"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: green'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    if(obj[i].action == "deny"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: red'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    commentInsert = commentInsert + "</div>";

    commentInsert = commentInsert + "<div>";
    commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: capitalize'> "+obj[i].comment+" </div>";
    commentInsert = commentInsert + "</div>";

  }



  // $('#commentsHold').html(commentInsert);
  document.getElementById('commentsHold').innerHTML = commentInsert;


}

function loadEventReport(xhr, status){
  var obj = JSON.parse(xhr.responseText);

  // event.preventDefault();
  console.log(obj);

  UIkit.modal('#modal-report').show();
  document.getElementById('report_title').innerHTML = "Create Report";

  document.getElementById('report_eventtitle').innerHTML = obj[0].eventtitle;
  document.getElementById('report_date_organized').innerHTML = moment(obj[0].date_to_be_organized).format('D MMMM Y');
  document.getElementById('report_region').innerHTML = obj[0].regionname;
  document.getElementById('report_town').innerHTML = obj[0].town;
  document.getElementById('report_audience_category').innerHTML = obj[0].audience_category;
  document.getElementById('report_audience_attendance').innerHTML = obj[0].expected_audience_attendance;
  var logistics = obj[0].logistics;
  var strlenLogistics = obj[0].logistics.length;

  // document.getElementById('team_challenges').innerHTML = logistics.substring(0, strlenLogistics - 1);

  var logisticsView = obj[0].logistics.split(',');
  for(var i = 0; i < logisticsView.length; i++){

        tabledata = "<tr>"+
        "<td style='text-transform: uppercase'>"+logisticsView[i]+"</td>"+
        "</tr>";
    $('#report_logisticsTable').append(tabledata);


  }

  var modeOfOutreachView = obj[0].mode_of_outreach.split(',');
  for(var i = 0; i < modeOfOutreachView.length; i++){

       
          tabledata = "<tr>"+
          "<td style='text-transform: uppercase'>"+modeOfOutreachView[i]+"</td>"+
          "</tr>";
        $('#report_modeTable').append(tabledata);


  }




  var mode = obj[0].mode_of_outreach;
  var strlenMode = obj[0].mode_of_outreach.length;
  // document.getElementById('complaints_raised').innerHTML = mode.substring(0, strlenMode - 1);


  var dateVerfied = new Date(obj[0].verified_timestamp);
  var dateApproved = new Date(obj[0].approved_timestamp);

  if(obj[0].is_verified == 1){
    $('#createstatusBanner').html("<div style='background-color: green'><center style='color: white; font-weight: bold;'>VERIFIED</center></div>");
  }
  if ((obj[0].is_verified == 1) && (obj[0].is_approved == 1)){
    $('#createstatusBanner').html("<div style='background-color: green'><center style='color: white; font-weight: bold;'>VERIFIED & APPROVED</center></div>");
  }
  if ((obj[0].is_verified == 0) && (obj[0].is_approved == 0)){
    $('#createstatusBanner').html("<div style='background-color: grey'><center style='color: white; font-weight: bold;'>PENDING VERIFICATION AND APPROVAL</center></div>");
  }
  if ((obj[0].is_verified == 2) || (obj[0].is_approved == 2)){
    $('#createstatusBanner').html("<div style='background-color: red'><center style='color: white; font-weight: bold;'>EVENT PROPOSAL REJECTED</center></div>");
  }
  
  fetchCommentsLevel1AddReport(obj[0].event_id);

  if ((obj[0].verified_timestamp == "") && (obj[0].approved_timestamp == "")) {
    document.getElementById('report_epv').innerHTML = "Not verified yet";
    document.getElementById('report_epa').innerHTML = "Not approved yet";
  }
  if ((obj[0].verified_timestamp != "") && (obj[0].approved_timestamp == "")) {
    document.getElementById('report_epv').innerHTML = moment(dateVerfied).format('D MMMM Y');
    document.getElementById('report_epa').innerHTML = "Not approved yet.";
  }
  if ((obj[0].verified_timestamp != "") && (obj[0].approved_timestamp != "")) {
    document.getElementById('report_epv').innerHTML = moment(obj[0].verified_timestamp).format('D MMMM Y');
    document.getElementById('report_epa').innerHTML = moment(obj[0].approved_timestamp).format('D MMMM Y');
  }



  $('#report_observations').val("");
  $('#report_challenges').val("");
  $('#report_complaints').val("");
  //$('#report_audience_category').val("");
  $('#report_members').val("");

  $('#addbuttonreport').show();

  //$('#reportverifyformdiv').html("<button class='uk-button uk-button-default uk-modal-close' type='button'>Cancel</button> <button class='uk-button uk-button-secondary' type='button' onclick='addNewReport()>Add Report</button>");

}

function fetchCommentsLevel1AddReport(eventID){
  
  var theUrl = "databasehandler.php?cmd=38&eventid=" + eventID;

    $.ajax(theUrl,
      {
        async: true,
        complete: fetchCommentsLevel1AddReportComplete
      });

}
  
function fetchCommentsLevel1AddReportComplete(xhr, status){
  console.log(xhr);
  var obj = JSON.parse(xhr.responseText);

  console.log("Comments:", obj);

  var commentInsert = ""
  $('#commentHold').html("");
  for(var i = 0; i < obj.length; i++){
    console.log(obj[i].firstname + " " + obj[i].lastname + " " + obj[i].action_date +  " " + obj[i].action + " " + obj[i].comment_type + " " + obj[i].comment);
  }


  for(var i = 0; i < obj.length; i++){

    commentInsert = commentInsert + "<div>";
    commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: capitalize'> "+obj[i].firstname+" "+obj[i].firstname+" </div>";
    commentInsert = commentInsert + "<div class='uk-panel'> "+moment(obj[i].action_date).format('D MMMM Y hh:mm:ss')+" </div>";
    commentInsert = commentInsert + "</div>";
    
    commentInsert = commentInsert + "<div>";
    
    if(obj[i].action == "verify"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: green'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    if(obj[i].action == "approve"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: green'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    if(obj[i].action == "deny"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: red'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    commentInsert = commentInsert + "</div>";

    commentInsert = commentInsert + "<div>";
    commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: capitalize'> "+obj[i].comment+" </div>";
    commentInsert = commentInsert + "</div>";

  }



  // $('#commentsHold').html(commentInsert);
  document.getElementById('commentsAddReport1').innerHTML = commentInsert;


}

function level1ReportView(val) {
  fetchCommentsLevel1ViewReport(val)
  console.log('modal to edit: ', val);
  var theUrl = "databasehandler.php?cmd=31&eventid=" + val;
  //sessionStorage.report_event_id = val;
  $.ajax(theUrl,
    {
      async: true,
      complete: level1ReportViewComplete
    });

  // $('#modalpop').click();
}

function level1ReportViewComplete(xhr, status) {

  var obj = JSON.parse(xhr.responseText);

  sessionStorage.pullreportid = obj.report_id;
  sessionStorage.pullverified = obj.is_verified;
  sessionStorage.pullapproved = obj.reportapprove;
  reportHelp();

  console.log("objectdeets", obj);

  UIkit.modal('#modal-overflow-2-report').show();


  document.getElementById('report_eventtitle_1').innerHTML = obj.eventtitle;
  document.getElementById('report_date_organized_1').innerHTML = moment(obj.date_to_be_organized).format('D MMMM Y');
  document.getElementById('report_region_1').innerHTML = obj.regionname;
  document.getElementById('report_town_1').innerHTML = obj.town;
  document.getElementById('report_audience_category_1').innerHTML = obj.audience_category;
  document.getElementById('report_audience_attendance_1').innerHTML = obj.expected_audience_attendance;
  document.getElementById('event_topic2').innerHTML = obj.eventtopic;
  document.getElementById('members').innerHTML = obj.team_members;



  var logistics = obj.logistics;
  var strlenLogistics = obj.logistics.length;

  // document.getElementById('team_challenges').innerHTML = logistics.substring(0, strlenLogistics - 1);

  $('#report_logisticsTable_1').html("");
  var logisticsView = obj.logistics.split(',');
  for(var i = 0; i < logisticsView.length; i++){

    if(logisticsView[i] != ""){
        tabledata = "<tr>"+
        "<td style='text-transform: uppercase'> "+(i+1)+". "+logisticsView[i]+"</td>"+
        "</tr>";
    $('#report_logisticsTable_1').append(tabledata);
    }

  }

  $('#report_modeTable_1').html("");
  var modeOfOutreachView = obj.mode_of_outreach.split(',');
  for(var i = 0; i < modeOfOutreachView.length; i++){

    if(modeOfOutreachView[i] != ""){
          tabledata = "<tr>"+
          "<td style='text-transform: uppercase'> "+(i+1)+". "+modeOfOutreachView[i]+"</td>"+
          "</tr>";
        $('#report_modeTable_1').append(tabledata);
    }

  }


  document.getElementById('report_1s').innerHTML = obj.event_summary;

  document.getElementById('report_2s').innerHTML = obj.complaints_raised;

  document.getElementById('report_3s').innerHTML = moment(obj.date_reported).format('D MMMM Y');

  document.getElementById('report_4s').innerHTML = obj.team_challenges;


  if(obj.report_approve == 0){
    $('#report2_statusBanner').html("<div style='background-color: grey'><center style='color: white; font-weight: bold;'>Pending Approval</center></div>");
  }
  if(obj.report_approve == 1){
    $('#report2_statusBanner').html("<div style='background-color: green'><center style='color: white; font-weight: bold;'>APPROVED</center></div>");
  }
  if(obj.report_approve == 2){
    $('#report2_statusBanner').html("<div style='background-color: red'><center style='color: white; font-weight: bold;'>REJECTED</center></div>");
  }




  var picValues = "";
  $('#report_photoss').html("");

  picValues = picValues + "<div class='uk-child-width-1-3@m' uk-grid uk-lightbox='animation: slide'>";

  var jsonarray = JSON.parse(obj.picture_paths);
  for (var i = 0; i < jsonarray.length; i++) {
    var obj2 = jsonarray[i];

    //obj2 contains picture names.
    // $('#pictureContainer').html("<img src='uploads/"+5+"_"+as+"/"+"Awesome-Dining-Room-Colors-85-In-home-design-ideas-budget-with-Dining-Room-Colors.jpg'"+"/>");

    var user_id = "" + obj.creator;
    var event_header = "" + obj.event_id;
    var picture_header = "" + obj2;

    var fold_header = obj.folder_paths;
 
    picValues = picValues + "<div>";
    picValues = picValues + "<a onclick='#' class='uk-inline' href='uploads/" + fold_header + "/" + picture_header + "' caption='Outreach Photo'>";
    picValues = picValues + "<img style='height: 40%; width: 40%;' src='uploads/" + fold_header + "/" + picture_header + "'>";
    picValues = picValues + "</a>";
    picValues = picValues + "</div>";

  }


  picValues = picValues + "</div>";

  
  document.getElementById('report_photoss').innerHTML = picValues;

  if(obj.report_approve == 0){
    $('#reportformdivbuttons').html("<button onclick='deleteReport(" + obj.report_id + ")' class='uk-button uk-button-danger uk-modal-close' type='button''>Delete Report</button><span> </span><button class='uk-button uk-button-default uk-modal-close' type='button'>Cancel</button>");
  }else {
    $('#reportformdivbuttons').html("<button class='uk-button uk-button-default uk-modal-close' type='button'>Cancel</button>");
  }
  
}

function fetchCommentsLevel1ViewReport(eventID){
  
  var theUrl = "databasehandler.php?cmd=38&eventid=" + eventID;

    $.ajax(theUrl,
      {
        async: true,
        complete: fetchCommentsLevel1ViewReportComplete
      });

}
  
function fetchCommentsLevel1ViewReportComplete(xhr, status){
  console.log(xhr);
  var obj = JSON.parse(xhr.responseText);

  console.log("Comments:", obj);

  var commentInsert = ""
  $('#commentHold').html("");
  for(var i = 0; i < obj.length; i++){
    console.log(obj[i].firstname + " " + obj[i].lastname + " " + obj[i].action_date +  " " + obj[i].action + " " + obj[i].comment_type + " " + obj[i].comment);
  }


  for(var i = 0; i < obj.length; i++){

    commentInsert = commentInsert + "<div>";
    commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: capitalize'> "+obj[i].firstname+" "+obj[i].firstname+" </div>";
    commentInsert = commentInsert + "<div class='uk-panel'> "+moment(obj[i].action_date).format('D MMMM Y hh:mm:ss')+" </div>";
    commentInsert = commentInsert + "</div>";
    
    commentInsert = commentInsert + "<div>";
    
    if(obj[i].action == "verify"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: green'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    if(obj[i].action == "approve"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: green'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    if(obj[i].action == "deny"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: red'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    commentInsert = commentInsert + "</div>";

    commentInsert = commentInsert + "<div>";
    commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: capitalize'> "+obj[i].comment+" </div>";
    commentInsert = commentInsert + "</div>";

  }



  // $('#commentsHold').html(commentInsert);
  document.getElementById('commentsViewReport2').innerHTML = commentInsert;


}

function loadViewEventReport(xhr, status) {
  var obj = JSON.parse(xhr.responseText);

  event.preventDefault();
  //console.log(obj);

  UIkit.modal('#modal-report').show();

  var dform = new Date(obj.date_to_be_organized);

  document.getElementById('report_title').innerHTML = "View Report";

  document.getElementById('report_eventtitle').innerHTML = obj.eventtitle;
  document.getElementById('report_date_organized').innerHTML = moment(dform).format('D MMMM Y');
  document.getElementById('report_region').innerHTML = obj.regionname;
  document.getElementById('report_town').innerHTML = obj.town;
  document.getElementById('report_checks').innerHTML = obj.eventtitle;
  document.getElementById('report_audience_category').innerHTML = obj.audience_category;
  document.getElementById('report_audience_attendance').innerHTML = obj.expected_audience_attendance;
  var logistics = obj.logistics;
  var strlenLogistics = obj.logistics.length;
  document.getElementById('report_logistics').innerHTML = logistics.substring(0, strlenLogistics - 1);

  var mode = obj.mode_of_outreach;
  var strlenMode = obj.mode_of_outreach.length;
  document.getElementById('report_mode_of_outreach').innerHTML = mode.substring(0, strlenMode - 1);


  var dateVerfied = new Date(obj.verified_timestamp);
  var dateApproved = new Date(obj.approved_timestamp);


  if ((obj.verified_timestamp == "") && (obj.approved_timestamp == "")) {
    document.getElementById('report_checks').innerHTML = "This event has not yet been verified nor approved.";
  }
  if ((obj.verified_timestamp != "") && (obj.approved_timestamp == "")) {
    document.getElementById('report_checks').innerHTML = "This event has been previously verified on: " + moment(dateVerfied).format('D MMMM Y') + ". This event is still pending approval.";
  }
  if ((obj.verified_timestamp != "") && (obj.approved_timestamp != "")) {
    document.getElementById('report_checks').innerHTML = "This event has been previously verified on: " + moment(dateVerfied).format('D MMMM Y') + " and approved on: " + moment(dateApproved).format('D MMMM Y');
  }


  document.getElementById('report_observations').value = obj.event_summary;
  document.getElementById('report_challenges').value = obj.team_challenges;
  document.getElementById('report_complaints').value = obj.complaints_raised;
  //document.getElementById('report_audience_category').value = obj.audience_category;
  document.getElementById('report_members').value = obj.team_members;


  $('#addbuttonreport').hide();
  //$('#reportverifyformdiv').html("<button class='uk-button uk-button-default uk-modal-close' type='button'>Cancel</button>");//<button class='uk-button uk-button-secondary' type='button' onclick='#'>Edit Report</button>");
}

function viewReportModal(val) {

  var theUrl = "databasehandler.php?cmd=31&eventid=" + val;
  sessionStorage.report_event_id = val;
  $.ajax(theUrl,
    {
      async: true,
      complete: loadViewEventReport
    });

}

/////////////LEVEL 1 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 1 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 1 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 1 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 1 FUNCTIONALITY///////////////////////////////////////

/////////////LEVEL 2 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 2 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 2 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 2 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 2 FUNCTIONALITY///////////////////////////////////////

function _level2cancel(){
  window.location.href="level2H.html";
}

function denyReport() {
  var comments = $('#commentsForRDeny').val();

  var theUrl = "databasehandler.php?cmd=37&reportid=" + sessionStorage.denyreportId + "&comments=" + comments + "&commenter=" + sessionStorage.userid;
  $.ajax(theUrl,
    {
      async: true,
      complete: denyReportComplete
    });

  $('#commentsForRDeny').val("");
}

function denyReportComplete(xhr, status) {

  console.log(xhr);

  global7();

  $.notify({
    icon: "info_outline",
    message: "Report Denied Successfully."

  }, {
      type: 'success',
      timer: 2000,
      placement: {
        from: 'top',
        align: 'right'
      }
    });
}

function denyReportModal(id) {
  sessionStorage.denyreportId = id;

  event.preventDefault();
  UIkit.modal('#modal-overflow-rdeny-comments').show();

}

function help() {
  verifier(sessionStorage.pullreportid, sessionStorage.pullverified, sessionStorage.pullapproved);
}

function level2View(val) {
  console.log('modal to edit: ', val);
  fetchCommentsLevel2View(val)
  var theUrl = "databasehandler.php?cmd=6&eventid=" + val;

  $.ajax(theUrl,
    {
      async: true,
      complete: level2ViewComplete
    });

  // $('#modalpop').click();
}

function level2ViewComplete(xhr, status) {
  console.log(xhr);
  var obj = JSON.parse(xhr.responseText);

  sessionStorage.pullreportid = obj[0].event_id;
  sessionStorage.pullverified = obj[0].is_verified;
  sessionStorage.pullapproved = obj[0].is_approved;
  help();

  console.log(obj);

  $('#logisticsTable').html("");
  $('#modeTable').html("");



  UIkit.modal('#modal-overflow-2').show();
  UIkit.modal('#modal-overflow-comments');

  document.getElementById('eventtitle').innerHTML=obj[0].eventtitle;
  document.getElementById('date_organized').innerHTML=moment(obj[0].date_to_be_organized).format('D MMMM Y');
  document.getElementById('region').innerHTML=obj[0].regionname;
  document.getElementById('town').innerHTML=obj[0].town;
  document.getElementById('audience_category').innerHTML=obj[0].audience_category;
  document.getElementById('audience_attendance').innerHTML=obj[0].expected_audience_attendance;
  document.getElementById('event_topic2modal').innerHTML=obj[0].eventtopic;


  var logisticsView = obj[0].logistics.split(',');
  for(var i = 0; i < logisticsView.length; i++){

    if(logisticsView[i] != ""){
        tabledata = "<tr>"+
        "<td style='text-transform: uppercase'> "+(i+1)+". "+logisticsView[i]+"</td>"+
        "</tr>";
    $('#logisticsTable').append(tabledata);
    }

  }

  var modeOfOutreachView = obj[0].mode_of_outreach.split(',');
  for(var i = 0; i < modeOfOutreachView.length; i++){

    if(modeOfOutreachView[i] != ""){
          tabledata = "<tr>"+
          "<td style='text-transform: uppercase'> "+(i+1)+". "+modeOfOutreachView[i]+"</td>"+
          "</tr>";
        $('#modeTable').append(tabledata);
    }

  }




  var mode = obj[0].mode_of_outreach;
  var strlenMode = obj[0].mode_of_outreach.length;
  // document.getElementById('complaints_raised').innerHTML = mode.substring(0, strlenMode - 1);


  var dateVerfied = new Date(obj[0].verified_timestamp);
  var dateApproved = new Date(obj[0].approved_timestamp);

  
  if(obj[0].is_verified == 1){
    $('#statusBanner').html("<div style='background-color: green'><center style='color: white; font-weight: bold;'>VERIFIED</center></div>");
  }
  if ((obj[0].is_verified == 1) && (obj[0].is_approved == 1)){
    $('#statusBanner').html("<div style='background-color: green'><center style='color: white; font-weight: bold;'>VERIFIED & APPROVED</center></div>");
  }
  if ((obj[0].is_verified == 0) && (obj[0].is_approved == 0)){
    $('#statusBanner').html("<div style='background-color: grey'><center style='color: white; font-weight: bold;'>PENDING VERIFICATION AND APPROVAL</center></div>");
  }
  if ((obj[0].is_verified == 2) || (obj[0].is_approved == 2)){
    $('#statusBanner').html("<div style='background-color: red'><center style='color: white; font-weight: bold;'>EVENT PROPOSAL REJECTED</center></div>");
  }
  

  if ((obj[0].verified_timestamp == "") && (obj[0].approved_timestamp == "")) {
    document.getElementById('epv').innerHTML = "Not verified yet";
    document.getElementById('epa').innerHTML = "Not approved yet";
  }
  if ((obj[0].verified_timestamp != "") && (obj[0].approved_timestamp == "")) {
    document.getElementById('epv').innerHTML = moment(dateVerfied).format('D MMMM Y');
    document.getElementById('epa').innerHTML = "Not approved yet.";
  }
  if ((obj[0].verified_timestamp != "") && (obj[0].approved_timestamp != "")) {
    document.getElementById('epv').innerHTML = moment(obj[0].verified_timestamp).format('D MMMM Y');
    document.getElementById('epa').innerHTML = moment(obj[0].approved_timestamp).format('D MMMM Y');
  }


}

function fetchCommentsLevel2View(eventID){
  
  var theUrl = "databasehandler.php?cmd=38&eventid=" + eventID;

    $.ajax(theUrl,
      {
        async: true,
        complete: fetchCommentsLevel2ViewComplete
      });

}
  
function fetchCommentsLevel2ViewComplete(xhr, status){
  console.log(xhr);
  var obj = JSON.parse(xhr.responseText);

  console.log("Comments:", obj);

  var commentInsert = ""
  $('#commentHold').html("");
  for(var i = 0; i < obj.length; i++){
    console.log(obj[i].firstname + " " + obj[i].lastname + " " + obj[i].action_date +  " " + obj[i].action + " " + obj[i].comment_type + " " + obj[i].comment);
  }


  for(var i = 0; i < obj.length; i++){

    commentInsert = commentInsert + "<div>";
    commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: capitalize'> "+obj[i].firstname+" "+obj[i].firstname+" </div>";
    commentInsert = commentInsert + "<div class='uk-panel'> "+moment(obj[i].action_date).format('D MMMM Y hh:mm:ss')+" </div>";
    commentInsert = commentInsert + "</div>";
    
    commentInsert = commentInsert + "<div>";
  
    if(obj[i].action == "verify"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: green'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    if(obj[i].action == "approve"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: green'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    if(obj[i].action == "deny"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: red'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    commentInsert = commentInsert + "</div>";

    commentInsert = commentInsert + "<div>";
    commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: capitalize'> "+obj[i].comment+" </div>";
    commentInsert = commentInsert + "</div>";

  }



  // $('#commentsHold').html(commentInsert);
  document.getElementById('commentsView2').innerHTML = commentInsert;


}

function level2ReportView(val) {
  console.log('modal to edit: ', val);
  
  var theUrl = "databasehandler.php?cmd=27&reportid=" + val;
  //sessionStorage.report_event_id = val;
  $.ajax(theUrl,
    {
      async: true,
      complete: level2ReportViewComplete
    });

  // $('#modalpop').click();
}

function level2ReportViewComplete(xhr, status) {
  console.log(xhr);
  var obj = JSON.parse(xhr.responseText);

  sessionStorage.pullreportid = obj[0].report_id;
  sessionStorage.pullverified = obj[0].is_verified;
  sessionStorage.pullapproved = obj[0].reportapprove;
  reportHelp();

  console.log("object", obj);

  // var dateOrganized = new Date(obj[0].date_to_be_organized);

  // console.log("HERExx", dateOrganized);

  UIkit.modal('#modal-overflow-2-report').show();


  document.getElementById('report_eventtitle_2').innerHTML = obj[0].eventtitle;
  document.getElementById('report_date_organized_2').innerHTML = moment(obj[0].date_to_be_organized).format('D MMMM Y');
  document.getElementById('report_region_2').innerHTML = obj[0].regionname;
  document.getElementById('report_town_2').innerHTML = obj[0].town;
  document.getElementById('report_audience_category_2').innerHTML = obj[0].audience_category;
  document.getElementById('report_audience_attendance_2').innerHTML = obj[0].expected_audience_attendance;
  document.getElementById('event_topicsreport2').innerHTML = obj[0].eventtopic;
  document.getElementById('membersrepo2').innerHTML = obj[0].team_members;
  var logistics = obj[0].logistics;
  var strlenLogistics = obj[0].logistics.length;

  // document.getElementById('team_challenges').innerHTML = logistics.substring(0, strlenLogistics - 1);
  $('#report_logisticsTable_2').html("");
  var logisticsView = obj[0].logistics.split(',');
  for(var i = 0; i < logisticsView.length; i++){

    if(logisticsView[i] != ""){
      tabledata = "<tr>"+
      "<td style='text-transform: uppercase'> "+(i+1)+". "+logisticsView[i]+"</td>"+
      "</tr>";
     $('#report_logisticsTable_2').append(tabledata);
    }
      
  }

  $('#report_modeTable_2').html("");
  var modeOfOutreachView = obj[0].mode_of_outreach.split(',');
  for(var i = 0; i < modeOfOutreachView.length; i++){

    if(modeOfOutreachView[i] != ""){
          tabledata = "<tr>"+
          "<td style='text-transform: uppercase'> "+(i+1)+". "+modeOfOutreachView[i]+"</td>"+
          "</tr>";
        $('#report_modeTable_2').append(tabledata);
    }
  }



  fetchCommentsLevel2Report(obj[0].event_id);
  fetchCommentsLevel3Report(obj[0].event_id);

  if(obj[0].reportapprove == 0){
    $('#statusBannerReport').html("<div style='background-color: grey'><center style='color: white; font-weight: bold;'>Pending Approval</center></div>");
  }
  if(obj[0].reportapprove == 1){
    $('#statusBannerReport').html("<div style='background-color: green'><center style='color: white; font-weight: bold;'>APPROVED</center></div>");
  }
  if(obj[0].reportapprove == 2){
    $('#statusBannerReport').html("<div style='background-color: red'><center style='color: white; font-weight: bold;'>REJECTED</center></div>");
  }

  document.getElementById('report_1').innerHTML=obj[0].event_summary;
  console.log("as");
  console.log(obj[0].event_summary);
  document.getElementById('report_2').innerHTML=obj[0].complaints_raised;
  console.log(obj[0].eventcomplaints_raised_summary);
  document.getElementById('report_3').innerHTML= moment(obj[0].date_reported).format('D MMMM Y') ;
  console.log(obj[0].date_reported);
  document.getElementById('report_4').innerHTML=obj[0].team_challenges;
  console.log(obj[0].team_challenges);



  var picValues = "";
  $('#report_photos').html("");

  picValues = picValues + "<div class='uk-child-width-1-3@m' uk-grid uk-lightbox='animation: slide'>";

    var jsonarray = JSON.parse(obj[0].picture_paths);
    for(var i = 0; i < jsonarray.length; i++) {
      var obj2 = jsonarray[i];

      //obj2 contains picture names.
      // $('#pictureContainer').html("<img src='uploads/"+5+"_"+as+"/"+"Awesome-Dining-Room-Colors-85-In-home-design-ideas-budget-with-Dining-Room-Colors.jpg'"+"/>");

      var user_id = ""+obj[0].creator;
      var event_header = "" + obj[0].event_id;
      var picture_header = ""+obj2;

      var fold_header = obj[0].folder_paths;


      picValues = picValues + "<div>";
      picValues = picValues + "<a onclick='#' class='uk-inline' href='uploads/"+fold_header+"/"+picture_header+"' caption='Outreach Photo'>";
      picValues = picValues + "<img style='height: 40%; width: 40%;' src='uploads/"+fold_header+"/"+picture_header+"'>";
      picValues = picValues + "</a>";
      picValues = picValues + "</div>";


    }

  picValues = picValues + "</div>";

  //$('#report_photos').html();
  document.getElementById('report_photos').innerHTML = picValues;

  if (obj[0].reportapprove == 0) {
    approvebutton = "<button class='uk-button uk-button-default' type='button' style='background-color: green; color: white;' onclick='ApproveReportToggle("+obj[0].report_id+",0)'>Approve</button><button class='uk-button uk-button-default uk-modal-close' type='button'>Cancel</button>";
    document.getElementById('approveformdivbuttons').innerHTML = approvebutton;
  }else{
    approvebutton = "<button class='uk-button uk-button-default uk-modal-close' type='button'>Cancel</button>";
    document.getElementById('approveformdivbuttons').innerHTML = approvebutton;
  }
  
}

function fetchCommentsLevel2Report(eventID){
  var theUrl = "databasehandler.php?cmd=38&eventid=" + eventID;

    $.ajax(theUrl,
      {
        async: true,
        complete: fetchCommentsLevel2ReportComplete
      });

}
  
function fetchCommentsLevel2ReportComplete(xhr, status){

  console.log(xhr);
  var obj = JSON.parse(xhr.responseText);

  console.log("Comments:", obj);

  var commentInsert = ""
  $('#commentHold').html("");
  for(var i = 0; i < obj.length; i++){
    console.log(obj[i].firstname + " " + obj[i].lastname + " " + obj[i].action_date +  " " + obj[i].action + " " + obj[i].comment_type + " " + obj[i].comment);
  }


  for(var i = 0; i < obj.length; i++){

    commentInsert = commentInsert + "<div>";
    commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: capitalize'> "+obj[i].firstname+" "+obj[i].firstname+" </div>";
    commentInsert = commentInsert + "<div class='uk-panel'> "+moment(obj[i].action_date).format('D MMMM Y hh:mm:ss')+" </div>";
    commentInsert = commentInsert + "</div>";
    
    commentInsert = commentInsert + "<div>";
    if(obj[i].action == "verify"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: green'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    if(obj[i].action == "approve"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: green'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    if(obj[i].action == "deny"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: red'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    commentInsert = commentInsert + "</div>";

    commentInsert = commentInsert + "<div>";
    commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: capitalize'> "+obj[i].comment+" </div>";
    commentInsert = commentInsert + "</div>";

  }



  // $('#commentsHold').html(commentInsert);
  document.getElementById('commentsViewReport2').innerHTML = commentInsert;


}

function reportHelp() {
  reportApprover(sessionStorage.pullreportid, sessionStorage.pullverified, sessionStorage.pullapproved);
}

function reportApprover(id, verifyCheck, approveCheck) {
  if (approveCheck == 1) {
    $('#approvereportformdivbuttons').html("<button class='uk-button uk-button-default uk-modal-close' type='button'>Cancel</button>");
  }
  if (approveCheck == 0) {
    $('#approvereportformdivbuttons').html("<button class='uk-button uk-button-default uk-modal-close' type='button'>Cancel</button><button onclick='ApproveReportToggle(" + id + "," + approveCheck + ")' class='uk-button uk-button-default uk-modal-close' type='button' style='background-color: green; color: white;'>Verify</button>");
  }
}

function verifier(id, verifyCheck, approveCheck) {
  if (approveCheck == 2) {
    $('#verifyformdivbuttons').html("<button class='uk-button uk-button-default uk-modal-close' type='button'>Cancel</button>");
  }
  if (approveCheck == 1) {
    $('#verifyformdivbuttons').html("<button class='uk-button uk-button-default uk-modal-close' type='button'>Cancel</button>");
  }
  if ((approveCheck == 0) && (verifyCheck == 0)) {
    $('#verifyformdivbuttons').html("<button class='uk-button uk-button-default uk-modal-close' type='button'>Cancel</button><button onclick='verifyEventToggle(" + id + "," + verifyCheck + ")' class='uk-button uk-button-default uk-modal-close' type='button' style='background-color: green; color: white;'>Verify</button>");
  }
  if ((approveCheck == 0) && (verifyCheck == 1)) {
    $('#verifyformdivbuttons').html("<button class='uk-button uk-button-default uk-modal-close' type='button'>Cancel</button><button onclick='verifyEventToggle(" + id + "," + verifyCheck + ")' class='uk-button uk-button-default uk-modal-close' type='button' style='background-color: green; color: white;'>UnVerify</button>");
  }
  if ((approveCheck == 0) && (verifyCheck == 2)) {
    $('#verifyformdivbuttons').html("<button class='uk-button uk-button-default uk-modal-close' type='button'>Cancel</button><button onclick='verifyEventToggle(" + id + "," + verifyCheck + ")' class='uk-button uk-button-default uk-modal-close' type='button' style='background-color: green; color: white;'>Undo Reject</button>");
  }
}

function verifyEventToggle(id, verState) {
  sessionStorage.verifyingId = id;
  sessionStorage.verifyingState = verState;

  // event.preventDefault();
  UIkit.modal('#modal-overflow-comments').show();

}

function verifyEvent() {
  var comments = $('#commentsForVerification').val();
  var theUrl = "databasehandler.php?cmd=5&eventid=" + sessionStorage.verifyingId + "&verify=" + sessionStorage.verifyingState + "&verifycomments=" + comments + "&commenter=" + sessionStorage.userid;
  $.ajax(theUrl,
    {
      async: true,
      complete: global2
    });

  $('#commentsForVerification').val("");
}

/////////////LEVEL 2 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 2 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 2 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 2 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 2 FUNCTIONALITY///////////////////////////////////////

/////////////LEVEL 3 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 3 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 3 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 3 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 3 FUNCTIONALITY///////////////////////////////////////

function _level3cancel() {
  window.location.href = "level2H.html";
}

function approvehelp(){
  approver(sessionStorage.pullreportid, sessionStorage.pullverified, sessionStorage.pullapproved);
}

function approver(id, verifyCheck, approveCheck){
  if(approveCheck == 1){
    $('#approveformdivbuttons').html("<button class='uk-button uk-button-default uk-modal-close' type='button'>Cancel</button>");
  }
  if(approveCheck == 0){
    $('#approveformdivbuttons').html("<button class='uk-button uk-button-default uk-modal-close' type='button'>Cancel</button><button onclick='approveEventToggle(" + id + "," + approveCheck + ")' class='uk-button uk-button-default uk-modal-close' type='button' style='background-color: green; color: white;'>Approve</button>");
  }
}

function ApproveReportToggle(id, approveState) {

  sessionStorage.approvingReportId = id;
  sessionStorage.approvingReportState = approveState;

  UIkit.modal('#modal-overflow-report-comments').show();



}

function approveReport() {

  var comments = $('#commentsForReportApproval').val();

  var theUrl = "databasehandler.php?cmd=28&reportid=" + sessionStorage.approvingReportId + "&approval=" + sessionStorage.approvingReportState + "&verificationComments=" + comments + "&commenter=" + sessionStorage.userid;

  $.ajax(theUrl,
    {
      async: true,
      complete: global7
    });

  $('#commentsForReportApproval').val("");
}

function approveEventToggle(id, approveState) {

  sessionStorage.approvingId = id;
  sessionStorage.approvingState = approveState;

  UIkit.modal('#modal-overflow-comments').show();


}

function approveEvent() {

  var comments = $('#commentsForApproval').val();

  var theUrl = "databasehandler.php?cmd=4&eventid=" + sessionStorage.approvingId + "&approve=" + sessionStorage.approvingState + "&approveComments=" + comments + "&commenter=" +sessionStorage.userid;

  $.ajax(theUrl,
    {
      async: true,
      complete: global3
    });

  $('#commentsForApproval').val("");
}

function deleteUsers(val) {
  console.log('users', val);
  var theUrl = "databasehandler.php?cmd=20&userid=" + val + "&myid=" + sessionStorage.userid;

  $.ajax(theUrl,
    {
      async: true,
      complete: deleteUsersComplete
    });
}

function deleteUsersComplete(xhr, status) {
  console.log(xhr);
  var obj = JSON.parse(xhr.responseText);

  console.log(obj);
  //level2usersdatatable.ajax.reload();
  $.notify({
    icon: "info_outline",
    message: "User Deactivated Successfully."

  }, {
      type: 'success',
      timer: 2000,
      placement: {
        from: 'top',
        align: 'right'
      }
    });

}

function level3View(val) {
  console.log('modal to view: ', val);
  fetchCommentsLevel3Event(val);
  var theUrl = "databasehandler.php?cmd=6&eventid=" + val;

  $.ajax(theUrl,
    {
      async: true,
      complete: level3ViewComplete
    });

  // $('#modalpop').click();
}

function level3ViewComplete(xhr, status) {
  console.log(xhr);
  var obj = JSON.parse(xhr.responseText);
  console.log(obj);
  sessionStorage.pullreportid = obj[0].event_id;
  sessionStorage.pullverified = obj[0].is_verified;
  sessionStorage.pullapproved = obj[0].is_approved;
  approvehelp();

  UIkit.modal('#modal-overflow-3').show();

  $('#logisticsTable').html("");
  $('#modeTable').html("");

  document.getElementById('eventtitle').innerHTML=obj[0].eventtitle;
  document.getElementById('date_organized').innerHTML=moment(obj[0].date_to_be_organized).format('D MMMM Y');
  document.getElementById('region').innerHTML=obj[0].regionname;
  document.getElementById('town').innerHTML=obj[0].town;
  document.getElementById('audience_category').innerHTML=obj[0].audience_category;
  document.getElementById('audience_attendance').innerHTML=obj[0].expected_audience_attendance;
  document.getElementById('event_topicslevel3').innerHTML=obj[0].eventtopic;
  

  var logisticsView = obj[0].logistics.split(',');
  for(var i = 0; i < logisticsView.length; i++){

    if(logisticsView[i] != ""){
      tabledata = "<tr>"+
      "<td style='text-transform: uppercase'> "+(i+1)+". "+logisticsView[i]+"</td>"+
      "</tr>";
  $('#logisticsTable').append(tabledata);
    }
       


  }

  var modeOfOutreachView = obj[0].mode_of_outreach.split(',');
  for(var i = 0; i < modeOfOutreachView.length; i++){

    if(modeOfOutreachView[i] != ""){
          tabledata = "<tr>"+
          "<td style='text-transform: uppercase'> "+(i+1)+". "+modeOfOutreachView[i]+"</td>"+
          "</tr>";
        $('#modeTable').append(tabledata);
    }

  }




  var mode = obj[0].mode_of_outreach;
  var strlenMode = obj[0].mode_of_outreach.length;
  // document.getElementById('complaints_raised').innerHTML = mode.substring(0, strlenMode - 1);


  var dateVerfied = new Date(obj[0].verified_timestamp);
  var dateApproved = new Date(obj[0].approved_timestamp);

  
  if(obj[0].is_verified == 1){
    $('#statusBanner').html("<div style='background-color: green'><center style='color: white; font-weight: bold;'>VERIFIED</center></div>");
  }
  if ((obj[0].is_verified == 1) && (obj[0].is_approved == 1)){
    $('#statusBanner').html("<div style='background-color: green'><center style='color: white; font-weight: bold;'>VERIFIED & APPROVED</center></div>");
  }
  if ((obj[0].is_verified == 0) && (obj[0].is_approved == 0)){
    $('#statusBanner').html("<div style='background-color: grey'><center style='color: white; font-weight: bold;'>PENDING VERIFICATION AND APPROVAL</center></div>");
  }
  if ((obj[0].is_verified == 2) || (obj[0].is_approved == 2)){
    $('#statusBanner').html("<div style='background-color: red'><center style='color: white; font-weight: bold;'>EVENT PROPOSAL REJECTED</center></div>");
  }
  


}

function fetchCommentsLevel3Event(eventID){

  var theUrl = "databasehandler.php?cmd=38&eventid=" + eventID;

  $.ajax(theUrl,
    {
      async: true,
      complete: fetchCommentsLevel3EventComplete
    });

}
  
function fetchCommentsLevel3EventComplete(xhr, status){
  
  console.log(xhr);
  var obj = JSON.parse(xhr.responseText);

  console.log("Comments:", obj);

  var commentInsert = ""
  $('#commentHold').html("");
  for(var i = 0; i < obj.length; i++){
    console.log(obj[i].firstname + " " + obj[i].lastname + " " + obj[i].action_date +  " " + obj[i].action + " " + obj[i].comment_type + " " + obj[i].comment);
  }


  for(var i = 0; i < obj.length; i++){

    commentInsert = commentInsert + "<div>";
    commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: capitalize'> "+obj[i].firstname+" "+obj[i].firstname+" </div>";
    commentInsert = commentInsert + "<div class='uk-panel'> "+moment(obj[i].action_date).format('D MMMM Y hh:mm:ss')+" </div>";
    commentInsert = commentInsert + "</div>";
    
    commentInsert = commentInsert + "<div>";
    if(obj[i].action == "verify"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: green'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    if(obj[i].action == "approve"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: green'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    if(obj[i].action == "deny"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: red'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    commentInsert = commentInsert + "</div>";

    commentInsert = commentInsert + "<div>";
    commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: capitalize'> "+obj[i].comment+" </div>";
    commentInsert = commentInsert + "</div>";

  }



  // $('#commentsHold').html(commentInsert);
  document.getElementById('commentsView3').innerHTML = commentInsert;


}

function generateReport(){
  if ($('#addnewdateselected').val() == "") {

    $.notify({
      icon: "info_outline",
      message: "Please Select Start Date."

    }, {
        type: 'danger',
        timer: 2000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
  } else if ($('#addenddateselected').val() == "") {
    $.notify({
      icon: "info_outline",
      message: "Please Select End Date."

    }, {
        type: 'danger',
        timer: 2000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
  } else {
    var sdate = $('#addnewdateselected').val();
    var edate = $('#addenddateselected').val();
    var url = "TCPDF-master/report.php?start=" + sdate + "&end=" + edate +"&reporter="+sessionStorage.userid;
    var win = window.open(url, '_blank');
    win.focus();
    //location.href = "report.php?start=1&end=2&reporter=3";
  }
}

function level3ReportView(val) {
  console.log('modal to edit: ', val);
  var theUrl = "databasehandler.php?cmd=27&reportid=" + val;

  $.ajax(theUrl,
    {
      async: true,
      complete: level3ReportViewComplete
    });

  // $('#modalpop').click();
}

function level3ReportViewComplete(xhr, status) {
  console.log(xhr);
  var obj = JSON.parse(xhr.responseText);

  sessionStorage.pullreportid = obj[0].report_id;
  sessionStorage.pullverified = obj[0].is_verified;
  sessionStorage.pullapproved = obj[0].reportapprove;
  reportHelp();

  console.log(obj);

  var dateOrganized = new Date(obj[0].date_to_be_organized);

  UIkit.modal('#modal-overflow-2-report').show();

  document.getElementById('report_eventtitle_2').innerHTML = obj[0].eventtitle;
  document.getElementById('report_date_organized_2').innerHTML = moment(obj[0].date_to_be_organized).format('D MMMM Y');
  document.getElementById('report_region_2').innerHTML = obj[0].regionname;
  document.getElementById('report_town_2').innerHTML = obj[0].town;
  document.getElementById('report_audience_category_2').innerHTML = obj[0].audience_category;
  document.getElementById('report_audience_attendance_2').innerHTML = obj[0].expected_audience_attendance;
  var logistics = obj[0].logistics;
  var strlenLogistics = obj[0].logistics.length;

  // document.getElementById('team_challenges').innerHTML = logistics.substring(0, strlenLogistics - 1);

  var logisticsView = obj[0].logistics.split(',');
  for(var i = 0; i < logisticsView.length; i++){

        tabledata = "<tr>"+
        "<td style='text-transform: uppercase'>"+logisticsView[i]+"</td>"+
        "</tr>";
    $('#report_logisticsTable_2').append(tabledata);


  }

  var modeOfOutreachView = obj[0].mode_of_outreach.split(',');
  for(var i = 0; i < modeOfOutreachView.length; i++){

       
          tabledata = "<tr>"+
          "<td style='text-transform: uppercase'>"+modeOfOutreachView[i]+"</td>"+
          "</tr>";
        $('#report_modeTable_2').append(tabledata);

  }

  if ((obj.verified_timestamp == "") && (obj[0].approved_timestamp == "")) {
    document.getElementById('report_epv_2').innerHTML = "Not verified yet";
    document.getElementById('report_epa_2').innerHTML = "Not approved yet";
  }
  if ((obj.verified_timestamp != "") && (obj[0].approved_timestamp == "")) {
    document.getElementById('report_epv_2').innerHTML = moment(dateVerfied).format('D MMMM Y');
    document.getElementById('report_epa_2').innerHTML = "Not approved yet.";
  }
  if ((obj.verified_timestamp != "") && (obj[0].approved_timestamp != "")) {
    document.getElementById('report_epv_2').innerHTML = moment(moment(obj[0].verified_timestamp).format('D MMMM Y')).format('D MMMM Y');
    document.getElementById('report_epa_2').innerHTML = moment(moment(obj[0].approved_timestamp).format('D MMMM Y')).format('D MMMM Y');
  }

  fetchCommentsLevel3Report(obj[0].event_id);

  if(obj[0].reportapprove == 0){
    $('#statusBannerReport').html("<div style='background-color: grey'><center style='color: white; font-weight: bold;'>Pending Approval</center></div>");
  }
  if(obj[0].reportapprove == 1){
    $('#statusBannerReport').html("<div style='background-color: green'><center style='color: white; font-weight: bold;'>APPROVED</center><center style='color: white;'>Report verifier's comments: "+obj[0].reportverificationcomments+"</center></div>");
  }
  if(obj[0].reportapprove == 2){
    $('#statusBannerReport').html("<div style='background-color: red'><center style='color: white; font-weight: bold;'>REJECTED</center><center style='color: white;'> Verifiers comments: "+obj[0].reportverificationcomments+"</center></div>");
  }

  document.getElementById('report_1').innerHTML=obj[0].event_summary;
  console.log(obj[0].event_summary);
  document.getElementById('report_2').innerHTML=obj[0].complaints_raised;
  console.log(obj[0].eventcomplaints_raised_summary);
  document.getElementById('report_3').innerHTML= moment(obj[0].date_reported).format('D MMMM Y') ;
  console.log(obj[0].date_reported);
  document.getElementById('report_4').innerHTML=obj[0].team_challenges;
  console.log(obj[0].team_challenges);


  var picValues = "";
  $('#report_photos').html("");

  picValues = picValues + "<div class='uk-child-width-1-3@m' uk-grid uk-lightbox='animation: slide'>";

    var jsonarray = JSON.parse(obj[0].picture_paths);
    for(var i = 0; i < jsonarray.length; i++) {
      var obj2 = jsonarray[i];

      //obj2 contains picture names.
      // $('#pictureContainer').html("<img src='uploads/"+5+"_"+as+"/"+"Awesome-Dining-Room-Colors-85-In-home-design-ideas-budget-with-Dining-Room-Colors.jpg'"+"/>");

      var user_id = ""+obj[0].creator;
      var event_header = "" + obj[0].event_id;
      var picture_header = ""+obj2;

      var fold_header = obj[0].folder_paths;


      picValues = picValues + "<div>";
      picValues = picValues + "<a onclick='#' class='uk-inline' href='uploads/"+fold_header+"/"+picture_header+"' caption='Outreach Photo'>";
      picValues = picValues + "<img style='height: 40%; width: 40%;' src='uploads/"+fold_header+"/"+picture_header+"'>";
      picValues = picValues + "</a>";
      picValues = picValues + "</div>";


    }

  picValues = picValues + "</div>";

  //$('#report_photos').html();
  document.getElementById('report_photos').innerHTML = picValues;

  if (obj[0].reportapprove == 0) {
    approvebutton = "<button class='uk-button uk-button-default' type='button' style='background-color: green; color: white;' onclick='ApproveReportToggle("+obj[0].report_id+",0)'>Approve</button><button class='uk-button uk-button-default uk-modal-close' type='button'>Cancel</button>";
    document.getElementById('approveformdivbuttons').innerHTML = approvebutton;
  }else{
    approvebutton = "<button class='uk-button uk-button-default uk-modal-close' type='button'>Cancel</button>";
    document.getElementById('approveformdivbuttons').innerHTML = approvebutton;
  }
  

}

function fetchCommentsLevel3Report(eventID){
  
  var theUrl = "databasehandler.php?cmd=38&eventid=" + eventID;

    $.ajax(theUrl,
      {
        async: true,
        complete: fetchCommentsLevel3ReportComplete
      });

}
    
function fetchCommentsLevel3ReportComplete(xhr, status){
  
  console.log(xhr);
  var obj = JSON.parse(xhr.responseText);

  console.log("3Comments:", obj);

  var commentInsert = ""
  $('#commentsReport3').html("");
  for(var i = 0; i < obj.length; i++){
    console.log(obj[i].firstname + " " + obj[i].lastname + " " + obj[i].action_date +  " " + obj[i].action + " " + obj[i].comment_type + " " + obj[i].comment);
  }


  for(var i = 0; i < obj.length; i++){

    commentInsert = commentInsert + "<div>";
    commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: capitalize'> "+obj[i].firstname+" "+obj[i].firstname+" </div>";
    commentInsert = commentInsert + "<div class='uk-panel'> "+moment(obj[i].action_date).format('D MMMM Y hh:mm:ss')+" </div>";
    commentInsert = commentInsert + "</div>";
    
    commentInsert = commentInsert + "<div>";
    if(obj[i].action == "verify"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: green'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    if(obj[i].action == "approve"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: green'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    if(obj[i].action == "deny"){
      commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: uppercase; color: red'> "+obj[i].action+" "+obj[i].comment_type+" </div>";
    }
    commentInsert = commentInsert + "</div>";

    commentInsert = commentInsert + "<div>";
    commentInsert = commentInsert + "<div class='uk-panel' style='text-transform: capitalize'> "+obj[i].comment+" </div>";
    commentInsert = commentInsert + "</div>";

  }



  // $('#commentsHold').html(commentInsert);
  document.getElementById('commentsReport3').innerHTML = commentInsert;


}
  
function reactivateUsers(val) {
  console.log('users', val);
  var theUrl = "databasehandler.php?cmd=21&userid=" + val + "&myid=" + sessionStorage.userid;

  $.ajax(theUrl,
    {
      async: true,
      complete: reactivateUsersComplete
    });
}

function reactivateUsersComplete(xhr, status) {
  console.log(xhr);

  //level2usersdatatable.ajax.reload();
  $.notify({
    icon: "info_outline",
    message: "User Reactivated Successfully."

  }, {
      type: 'success',
      timer: 2000,
      placement: {
        from: 'top',
        align: 'right'
      }
    });

}

function reassignEventToggle(id,creator,region) {
  // /event.preventDefault();

  sessionStorage.reassignId = id;
  sessionStorage.reassigncreatorId = creator;
  sessionStorage.regionId = region;

  var theUrl = "databasehandler.php?cmd=34&region=" + region;

  $.ajax(theUrl,
  {
    async: true,
    complete: reassignEventToggleComplete
  });

}

function reassignEventToggleComplete(xhr,status){
  var obj = JSON.parse(xhr.responseText);
  console.log(obj);

  var userValues = "";
  $('#reassignMember').html("");    

  userValues = userValues + "<select id='reassignMemberName' class='form-control' data-style='btn' title='Select User'><option value='0'>Select User</option>";
  for (var i = 0; i < obj.length; i++) {
    var user_id = obj[i].userid;
    var user_name = obj[i].firstname + ' ' + obj[i].lastname;
    if (user_id == sessionStorage.reassigncreatorId) {
      userValues = userValues + ""; 
    }else{
      userValues = userValues + "<option value='" + user_id + "'>" + user_name + "</option>"; 
    }
    
  }
  userValues = userValues + "</select>";

  document.getElementById('reassignMember').innerHTML = userValues;

  UIkit.modal('#modal-overflow-reassign').show();
}

function reassignEvent() {

  var comments = $('#commentsForReassign').val();
  var newteammember = $('#reassignMemberName').val();

  var theUrl = "databasehandler.php?cmd=33&eventid=" + sessionStorage.reassignId + "&reporter=" + newteammember + "&reason=" + comments;

  $.ajax(theUrl,
    {
      async: true,
      complete: reassignEventComplete
    });

  $('#commentsForReassign').val("");
}

function reassignEventComplete(xhr, status) {

  console.log(xhr);

  $.notify({
    icon: "info_outline",
    message: "Event Reassigned Successfully."

  }, {
      type: 'success',
      timer: 2000,
      placement: {
        from: 'top',
        align: 'right'
      }
    });
}

/////////////LEVEL 3 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 3 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 3 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 3 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 3 FUNCTIONALITY///////////////////////////////////////

/////////////LEVEL 4 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 4 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 4 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 4 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 4 FUNCTIONALITY///////////////////////////////////////

function dashEventsDisplay(val) {
  console.log('evend it:', val);
  var theUrl = "databasehandler.php?cmd=6&eventid=" + val;

  $.ajax(theUrl,
    {
      async: true,
      complete: dashEventsDisplayComplete
    });

  // $('#modalpop').click();
}

function dashEventsDisplayComplete(xhr, status) {
  console.log(xhr);
  var obj = JSON.parse(xhr.responseText);


  // console.log(typeof(obj[0].picture_paths));
  console.log(obj);

  var picValues = "";
  $('#pictureContainer').html("");

  var dform = new Date(obj[0].date_organized);


  console.log("show dashboard events modal");
  UIkit.modal('#dasheventsdisplay').show();

  //$('#report_id').val(obj[0].report_id);
  // $('#eventtitle').innerHTML(obj[0].eventtitle);
  document.getElementById('eventtitle').innerHTML = obj[0].eventtitle;
  document.getElementById('date_organized').innerHTML = moment(dform).format('D MMMM Y');
  document.getElementById('region').innerHTML = obj[0].region;
  document.getElementById('town').innerHTML = obj[0].town;
  document.getElementById('audience_category').innerHTML = obj[0].audience_category;
  document.getElementById('audience_attendance').innerHTML = obj[0].audience_attendance;
  document.getElementById('team_challenges').innerHTML = obj[0].team_challenges;
  document.getElementById('complaints_raised').innerHTML = obj[0].complaints_raised;
  document.getElementById('event_summary').innerHTML = obj[0].event_summary;

  picValues = picValues + "<div class='uk-child-width-expand@s uk-text-center' uk-grid uk-lightbox='animation: slide'>";

  var jsonarray = JSON.parse(obj[0].picture_paths);
  for (var i = 0; i < jsonarray.length; i++) {
    var obj2 = jsonarray[i];

    var user_id = "" + obj[0].reporter;
    var event_header = "" + obj[0].eventtitle;
    var picture_header = "" + obj2;


    picValues = picValues + "<div>";
    picValues = picValues + "<a onclick='closemodal1()' class='uk-inline' href='uploads/" + user_id + "_" + event_header + "/" + picture_header + "' caption='Caption 1'>";
    picValues = picValues + "<img style='height: 40%; width: 40%;' src='uploads/" + user_id + "_" + event_header + "/" + picture_header + "'/>";
    picValues = picValues + "</a>";
    picValues = picValues + "</div>";

  }
  picValues = picValues + "</div>";
  document.getElementById('pictureContainerLevel4users').innerHTML = picValues;

}

function dashUsersDisplay(val) {
  console.log('users', val);
  var theUrl = "databasehandler.php?cmd=18&userid=" + val;

  $.ajax(theUrl,
    {
      async: true,
      complete: dashUsersDisplayComplete
    });

  // $('#modalpop').click();
}

function dashUsersDisplayComplete(xhr, status) {
  console.log(xhr);

  var obj = JSON.parse(xhr.responseText);

  console.log(obj);

  var picValues = "";
  $('#pictureContainer').html("");
  //console.log(obj[0].report_id);
  var dform = new Date(obj[0].date_organized);


  // $('#modalshow').click();
  UIkit.modal('#dashusersdisplay').show();


  document.getElementById('eventtitle').innerHTML = obj[0].firstname + " " + obj[0].lastname;
  document.getElementById('date_organized').innerHTML = obj[0].email;

  document.getElementById('region').innerHTML = obj[0].region;
  document.getElementById('town').innerHTML = obj[0].level;

}

function dashGraphEventData(sdate, edate) {
  var theUrl = "databasehandler.php?cmd=15";
  if ((typeof (sdate) === 'undefined') && (typeof (edate) === 'undefined')) {
    theUrl;
  } else {
    theUrl += "&sdate=" + sdate + "&edate=" + edate;
  }

  $.getJSON(theUrl, function (data) {

    Highcharts.chart('eventcontainer', {
      chart: {
        zoomType: 'x'
      },
      title: {
        text: 'Events Per Day'
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
      },
      xAxis: {
        type: 'datetime',
        visible: false
      },
      yAxis: {
        title: {
          text: 'Events'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        type: 'area',
        name: 'Number of Events',
        data: data
      }]
    });
  });
}

function dashGraphAudienceData(sdate, edate) {
  var theUrl = "databasehandler.php?cmd=16";
  if ((typeof (sdate) === 'undefined') && (typeof (edate) === 'undefined')) {
    theUrl;
  } else {
    theUrl += "&sdate=" + sdate + "&edate=" + edate;
  }

  $.getJSON(theUrl, function (data) {
    //var piedata = JSON.parse(data);
    console.log(data);
    Highcharts.chart('eventaudiencecontainer', {
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45
        }
      },
      title: {
        text: 'Audience Categories'
      },
      subtitle: {
        text: 'Sum of Categories'
      },
      plotOptions: {
        pie: {
          innerSize: 100,
          depth: 45
        }
      },
      series: [{
        name: 'Number of events tailored to',
        data: data
      }]
    });
  });
}

function dashGraphUserData(sdate, edate) {
  var theUrl = "databasehandler.php?cmd=17";
  if ((typeof (sdate) === 'undefined') && (typeof (edate) === 'undefined')) {
    theUrl;
  } else {
    theUrl += "&sdate=" + sdate + "&edate=" + edate;
  }

  $.getJSON(theUrl, function (data) {

    Highcharts.chart('eventusercontainer', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Outreach Categories Per Region'
      },
      xAxis: {
        categories: data.categories
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total Audience Attended'
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
      },
      plotOptions: {
        column: {
          stacking: 'percent'
        }
      },
      series: data.series
    });
  });
}

function fillDashRegionFigures(sdate, edate) {

  var theUrl = "databasehandler.php?cmd=10";
  if ((typeof (sdate) === 'undefined') && (typeof (edate) === 'undefined')) {
    theUrl;
  } else {
    theUrl += "&sdate=" + sdate + "&edate=" + edate;
  }

  $.ajax(theUrl,
    {
      async: true,
      complete: fillDashRegionFiguresComplete
    });

}

function fillDashRegionFiguresComplete(xhr, status) {

  $('#dashboardtablebody').html('<th><td> Region</td><td class="text-right">Events Hosted</td><td class="text-right">Percentage %</td></th>');

  var obj = JSON.parse(xhr.responseText);
  // console.log("obj", obj);

  for (var i = 0; i < obj.length; i++) {
    $('#dashboardtablebody').append("<tr><td></td><td>" + obj[i].regname + "</td><td class='text-right'>" + obj[i].figures + "</td><td class='text-right'>" + obj[i].percentage + "</td></tr><tr>");
  }

}

function fillDashTotalEvents(sdate, edate) {

  var theUrl = "databasehandler.php?cmd=11";
  if ((typeof (sdate) == 'undefined') && (typeof (edate) === 'undefined')) {
    theUrl;
  } else {
    theUrl += "&sdate=" + sdate + "&edate=" + edate;
  }

  $.ajax(theUrl,
    {
      async: true,
      complete: fillDashTotalEventsComplete
    });

}

function fillDashTotalEventsComplete(xhr, status) {

  var obj = JSON.parse(xhr.responseText);
  // console.log("obj", obj);

  $('#totalEventsHoted').html("<p style='font-weight: bold; font-size: 1.3em;'>" + obj[0].total + "<p>");
  // document.getElementById('totalEventsHoted').value = obj.total;



}

function fillDashTotalAttendees(sdate, edate) {

  var theUrl = "databasehandler.php?cmd=13";
  if ((typeof (sdate) === 'undefined') && (typeof (edate) === 'undefined')) {
    theUrl;
  } else {
    theUrl += "&sdate=" + sdate + "&edate=" + edate;
  }

  $.ajax(theUrl,
    {
      async: true,
      complete: fillDashTotalAttendeesComplete
    });

}

function fillDashTotalAttendeesComplete(xhr, status) {

  var obj = JSON.parse(xhr.responseText);
  // console.log("obj", obj);

  $('#totalAttendees').html("<p style='font-weight: bold; font-size: 1.3em;'>" + obj[0].total + "<p>");
  // document.getElementById('totalEventsHoted').value = obj.total;



}

function fillDashCommonPlace(sdate, edate) {

  var theUrl = "databasehandler.php?cmd=14";
  if ((typeof (sdate) === 'undefined') && (typeof (edate) === 'undefined')) {
    theUrl;
  } else {
    theUrl += "&sdate=" + sdate + "&edate=" + edate;
  }

  $.ajax(theUrl,
    {
      async: true,
      complete: fillDashCommonPlaceComplete
    });

}

function fillDashCommonPlaceComplete(xhr, status) {

  var obj = JSON.parse(xhr.responseText);
  console.log("obj", obj);

  $('#commonAudience').html("<p style='font-weight: bold; font-size: 1.3em;'>" + obj[0].audience_category + "<p>");


}

function loadDashData() {
  var sdate = $('#addnewdateselected').val();
  var edate = $('#addenddateselected').val();

  fillDashRegionFigures(sdate, edate);
  fillDashTotalEvents(sdate, edate);
  fillDashTotalAttendees(sdate, edate);
  fillDashCommonPlace(sdate, edate);
  dashGraphEventData(sdate, edate);
  dashGraphAudienceData(sdate, edate);
  dashGraphUserData(sdate, edate);
}

function regionfillDashTotalEvents(sdate, edate, region) {

  var theUrl = "databasehandler.php?cmd=11";
  if (typeof (region) === 'undefined') {
    theUrl;
  } else {
    theUrl += "&sdate=" + sdate + "&edate=" + edate + "&region=" + region;
  }

  $.ajax(theUrl,
    {
      async: true,
      complete: fillDashTotalEventsComplete
    });

}

function regionfillDashTotalAttendees(sdate, edate, region) {

  var theUrl = "databasehandler.php?cmd=13";
  if (typeof (region) === 'undefined') {
    theUrl;
  } else {
    theUrl += "&sdate=" + sdate + "&edate=" + edate + "&region=" + region;
  }

  $.ajax(theUrl,
    {
      async: true,
      complete: fillDashTotalAttendeesComplete
    });

}

function regionfillDashCommonPlace(sdate, edate, region) {
  var theUrl = "databasehandler.php?cmd=14";
  if (typeof (region) === 'undefined') {
    theUrl;
  } else {
    theUrl += "&sdate=" + sdate + "&edate=" + edate + "&region=" + region;
  }

  $.ajax(theUrl,
    {
      async: true,
      complete: fillDashCommonPlaceComplete
    });
}

function regionloadDashData(region) {
  var sdate = $('#addnewdateselected').val();
  var edate = $('#addenddateselected').val();

  if (region == 0) { 
    fillDashTotalEvents(sdate, edate);
    fillDashTotalAttendees(sdate, edate);
    fillDashCommonPlace(sdate, edate);
  } else {
    regionfillDashTotalEvents(sdate, edate, region);
    regionfillDashTotalAttendees(sdate, edate, region);
    regionfillDashCommonPlace(sdate, edate, region);
  }
}

function searchdash() {
  if ($('#addnewdateselected').val() == "") {

    $.notify({
      icon: "info_outline",
      message: "Please Select Start Date."

    }, {
        type: 'danger',
        timer: 2000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
  } else if ($('#addenddateselected').val() == "") {
    $.notify({
      icon: "info_outline",
      message: "Please Select End Date."

    }, {
        type: 'danger',
        timer: 2000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
  } else {
    loadDashData();
    $('#searchregionarea').show();
    $('#datafield').show();
  }

}

/////////////LEVEL 4 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 4 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 4 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 4 FUNCTIONALITY///////////////////////////////////////
/////////////LEVEL 4 FUNCTIONALITY///////////////////////////////////////