$(function() {
  'use strict';
  var sa = 'http://localhost:3000';

	$('#login').on('click', function(e) {
	  e.preventDefault();
	  $.ajax({
	    url: sa + '/login',
	    contentType: 'application/json',
	    processData: false,
	    data: JSON.stringify({
	     credentials: {
	       email: $('#login-email').val(),
	       password: $('#login-password').val()
	     }
	   }),
	    dataType: 'json',
	    method: 'POST'
	  }).done(function(data, textStatus, jqxhr) {
	    simpleStorage.set('token', data.token);
	    simpleStorage.set('userId', data.user_id);
			$('#login-modal').modal('hide');
	    $('#show-login-modal').addClass('hide');
	    $('#logout-button').removeClass('hide');
			$('#user-profile').removeClass('hide');
	  }).fail(function(jqxhr) {
			console.error(jqxhr);
	    console.log('Email or Password incorrect, please try again.');
	  });
	}); // end login

}); // end onload
