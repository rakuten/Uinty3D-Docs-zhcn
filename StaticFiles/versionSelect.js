 $(document).ready(function(){
        $('#versionList').change(function(){
        var tv = $(this).val();
        var version = $('.version'); //list of all elements with class 'version'
        $(version).each(function(){
          if (this.id != tv) {
            $(this).hide();
          } else {
            $(this).show();
          }
        });

      });
    $('#versionList').trigger('change'); //select 1st element of the list and triggers the change
  });