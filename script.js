$(function () {

    $("#word").keyup(function () {
        const inputWord = $(this).val();

        if (!inputWord.trim()) {
            // Input is empty
            $("#palindrome-message").hide();
            return
        }

        $("#query").text(inputWord);

        if (isPalindrome(inputWord)) {
            // show result if input is palindrome and add a css class
            $("#result").html("is a palindrome!");
            $("#palindrome-message").removeClass("message-red").addClass("message-green");

        } else {
            // show result if input is not palindrome and add a css class
            $("#result").html("is not a palindrome.");
            $("#palindrome-message").addClass("message-red");
        }

        $("#palindrome-message").show();
    });

});

function isPalindrome(word) {
    return word.toLowerCase() === word.split('').reverse().join('');
}
