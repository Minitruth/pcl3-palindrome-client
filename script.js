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
            // show result if input is palindrome and change css class
            $("#result").html("is a palindrome!");
            $("#palindrome-message")
                .addClass("message-green")
                .removeClass("message-red");

        } else {
            // show result if input is not palindrome and add a css class
            $("#result").html("is not a palindrome!");
            $("#palindrome-message")
                .addClass("message-red")
                .removeClass("message-green");
        }

        $("#palindrome-message").show();
    });

});

function isPalindrome(word) {
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
}
