$(document).ready(function() {
	$('#add_profile').on('submit', function(event) {
		event.preventDefault();
		var url = 'https://api.github.com/users/' + $('#username').val();

		$.get(url, function(user) {
			$('<div class="clearfix" id="profile"><img src="' + user.avatar_url + '"><div id="user">Username: ' + user.login + '</div><div id="followers">Followers: ' + user.followers + '</div><div id="repos">Repos: ' + user.public_repos + '</div></div>').prependTo("#profiles").slideDown();
		}).fail(function() {
			alert('Invalid username ' + $('#username').val());
		}).always(function() {
			$('#username').val("");
		});
	});
});