$(document).ready(function() {
    $(".project-list > .project").each(function() {
        var project = $(this);
        var repo = project.attr("repo");
        $.getJSON("https://api.github.com/repos/" + repo, function(data) {
            var author = "";
            if (data.owner.login != "opower") {
                author = '<div class="author"><a href="' + data.owner.html_url + '">' + data.owner.login + '</a></div>';
            }
            project.append(
                '<h4><a href="' + data.html_url + '">' + data.name + '</a></h4>' +
                '<div class="description">' + data.description + '</div>' +
                '<div class="stats">' +
                    author +
                    '<div class="language">' + data.language + '</div>' +
                    '<div class="updatedon">Updated on ' + new Date(data.updated_at).toLocaleDateString() + '</div>' +
                    '<div class="forks">' + data.forks_count + ' forks</div>' +
                    '<div class="watchers">' + data.watchers_count + ' watchers</div>' +
                '</div>');
        });
    });
});
