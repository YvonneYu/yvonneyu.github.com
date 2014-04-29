
$(document).ready(function() {
    var globalLang,
        contain,
        f2eTitle,
        engLink,
        chineseLink;

    function setEn(){
        globalLang = "en";
        contain.load("en-index.html");
        f2eTitle.text('Front-End Engineer');
        chineseLink.removeClass('selected');
        engLink.addClass('selected');
    }

    function setChinese(){
        globalLang = "zh-tw";
        contain.load("ch-index.html");
        f2eTitle.text('前端工程師');
        chineseLink.addClass('selected');
        engLink.removeClass('selected');
    }

    (function(){
            globalLang = globalLang ? globalLang :
            (window.navigator.userLanguage || window.navigator.language);
            contain = contain || $("#mainContain");
            f2eTitle = f2eTitle || $("#f2eTitle");
            engLink = engLink || $('#engLink');
            chineseLink = chineseLink || $('#chineseLink');
            var relang = globalLang.toLowerCase();
        if (relang == "zh-tw"){
            setChinese();
        } else {
            setEn();
        }

        $('#chineseLink').on('click touchend', function (){
            console.log('toggle');
            if (globalLang != "zh-tw") {
                setChinese();
            }
        })

        $('#engLink').on('click touchend', function (){
            console.log('toggle engLink');
            if (globalLang != "en") {
                setEn();
            }
        })
    })();

});