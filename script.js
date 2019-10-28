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


        $("#container").show();
        $("#container").empty();

        let word_list = inputWord.toLocaleLowerCase().split('');
        $.each(word_list, function (index, value) {
            //TODO
            if (value === word_list[word_list.length - 1]) {
                $("#container").append("<span id='c" + index + "'>" + value + "</span>");
            }
            else {
                $("#container").append("<span id='d" + index + "'>" + value + "</span>");
            }
        });
    });
});

function isPalindrome(word) {
    let word_low = word.toLowerCase();
    let word_list = word_low.split('');
    return word_low === word_list.reverse().join('');
}

// Another way to check if input is palindrome
// source: https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/
// function isPalindrome(str) {
//     let re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     let len = str.length;
//     for (let i = 0; i < len/2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
