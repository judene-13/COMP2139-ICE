function loadComments(projectId) {
    $.ajax({
        url: '/ProjectManagement/ProjectComment/GetComments?projectId=' + projectId,
        method: 'GET',
        success: function (data) {
            var html = '';
            if(data.length === 0) {
                html = '<p>No comments yet.</p>';
            } else {
                data.forEach(c => {
                    html += '<div class="comment mb-2 p-2 border rounded">';
                    html += '<p>' + c.content + '</p>';
                    html += '<span><b>Posted on:</b> ' + new Date(c.createdDate).toLocaleString() + '</span>';
                    html += '</div>';
                });
            }
            $('#commentsList').html(html);
        },
        error: function () {
            $('#commentsList').html('<p>Error loading comments.</p>');
        }
    });
}

$(document).ready(function () {
    var projectId = $('#projectComments input[name="ProjectId"]').val();

    $('#addCommentForm').submit(function (e) {
        e.preventDefault();
        var formData = {
            ProjectId: projectId,
            Content: $('#projectComments textarea[name="Content"]').val()
        };

        $.ajax({
            url: '/ProjectManagement/ProjectComment/AddComment',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function (response) {
                if (response.success) {
                    $('#projectComments textarea[name="Content"]').val('');
                    loadComments(projectId);
                } else {
                    alert(response.message || 'Failed to post comment.');
                }
            },
            error: function (xhr, status, error) {
                alert("Error: " + error);
            }
        });
    });
});
