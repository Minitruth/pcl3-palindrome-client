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
            // TODO
            //this is a test
        } else {
            // TODO
        }

        $("#palindrome-message").show();
    });

});

function isPalindrome(word) {
    return word.toLowerCase() === word.split('').reverse().join('');
}
