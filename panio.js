// 音符文件对照表
var musicList = {
    '#':{
        '1':{link:'sound45',button:null},
        '2':{link:'sound44',button:null},
        '3':{link:'sound43',button:null},
        '4':{link:'sound42',button:null},
        '5':{link:'sound41',button:null},
        '6':{link:'sound40',button:null},
        '7':{link:'sound39',button:null}
    },
    '$':{
        '1':{link:'sound38',button:null},
        '2':{link:'sound37',button:null},
        '3':{link:'sound36',button:null},
        '4':{link:'sound35',button:null},
        '5':{link:'sound34',button:null},
        '6':{link:'sound33',button:null},
        '7':{link:'sound32',button:null}
    },
    '@':{
        '1':{link:'sound31',button:null},
        '2':{link:'sound30',button:null},
        '3':{link:'sound29',button:null},
        '4':{link:'sound28',button:null},
        '5':{link:'sound27',button:null},
        '6':{link:'sound26',button:null},
        '7':{link:'sound25',button:null}
    },
    '&':{
        '1':{link:'sound8',button:null},
        '2':{link:'sound7',button:null},
        '3':{link:'sound6',button:null},
        '4':{link:'sound5',button:null},
        '5':{link:'sound4',button:null},
        '6':{link:'sound3',button:null},
        '7':{link:'sound2',button:null}
    }
};
var musicBox = document.getElementById('audio-box');


playMusic(tiankongzhicheng,100)
function audioPlay(music){
    var baseUrl = './piano/';
    var type = '.mp3';
    var group = music.substr(0,1);
    var sound = music.substr(-1);
    var link = musicList[group][sound].link;
    var audio = document.createElement('audio');
    var button = musicList[group][sound].button ;
    musicBox.appendChild(audio);
    audio.src = baseUrl+link+type;
    audio.play();
    focusOn(button)
    setTimeout(function(){
        musicBox.removeChild(audio);
    },3000)
}
function focusOn(button){
    button.classList.add('focus');
    setTimeout(function(){
        button.classList.remove('focus')
    }.bind(button),1000)
}
// 根据按钮获得相应的字母；
function parseKeyCode(keyCode){
    if(keyCode>=65 && keyCode<=90){
        var alphabet = String.fromCharCode(parseInt(keyCode));
        return parseToMusic(alphabet.toLocaleLowerCase());
    }else if(keyCode>=48 && keyCode<=57){
        return parseToMusic(String(keyCode-48));
    }else{
        return parseToMusic(keyCode)
    }
    function parseToMusic(key){
        // 对应两种button
        switch(key){
            // row1
            case '1':return '#1';
            case '2':return '#2';
            case '3':return '#3';
            case '4':return '#4';
            case '5':return '#5';
            case '6':return '#6';
            case '7':return '#7';
            // row2
            case 'q':return '$1';
            case 'w':return '$2';
            case 'e':return '$3';
            case 'r':return '$4';
            case 't':return '$5';
            case 'y':return '$6';
            case 'u':return '$7';
            // row3
            case 'a':return '@1';
            case 's':return '@2';
            case 'd':return '@3';
            case 'f':return '@4';
            case 'g':return '@5';
            case 'h':return '@6';
            case 'j':return '@7';
            // row4
            case 'z':return '&1';
            case 'x':return '&2';
            case 'c':return '&3';
            case 'v':return '&4';
            case 'b':return '&5';
            case 'n':return '&6';
            case 'm':return '&7';
            
        }
    }
}
function playMusic(musicArr,interval,callback){
    var i = 0 ;
    var deff = interval ? interval : 400;
    play()
    function play(){
        setTimeout(function(){
            var music = parseKeyCode(musicArr.split('')[i])
            music && audioPlay(music);
            i++;
            if(i<musicArr.length){
                play()
            }else{
                callback && callback();
            }
        },deff)
    }
}
