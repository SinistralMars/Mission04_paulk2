$('#btnSubmit').click(function () {

    /*Get percentage from form adjust weights and then store to a total percent*/
    var percent = (($("#assignments").val() * .5) + ($("#quizzes").val() * .1) + ($("#groupProjects").val() * .1) + ($("#intex").val() * .1)
        + ($("#midterm").val() * .1) + ($("#final").val() * .1));
    var letter

    // If else tree checking and assigning correct value for the grade to return to page
    if (percent >= 94) {
        letter = 'A'
    } else if (percent >= 90) {
        letter = 'A-'
    } else if (percent >= 87) {
        letter = 'B+'
    } else if (percent >= 84) {
        letter = 'B'
    } else if (percent >= 80) {
        letter = 'B-'
    } else if (percent >= 77) {
        letter = 'C+'
    } else if (percent >= 74) {
        letter = 'C'
    } else if (percent >= 70) {
        letter = 'C-'
    } else if (percent >= 67) {
        letter = 'D+'
    } else if (percent >= 64) {
        letter = 'D'
    } else if (percent >= 60) {
        letter = 'D-'
    } else {
        letter = 'E'
    }

    // Feeds correct letter to header in form
    $('#gradeAnswer').html(letter)
})