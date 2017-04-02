// 创造对象
var audioGroup = document.createElement('div');
var buttonGroup = document.createElement('div');
audioGroup.id = 'audio-group';
buttonGroup.id = 'button-group';
// 链接属性
var baseUrl = './piano/';
for(var item in musicList){
    for(var key in musicList[item]){
        var audio = document.createElement('audio');
        audio.src = baseUrl + musicList[item][key].link + '.mp3';
        audioGroup.appendChild(audio);
        var button = document.createElement('button');
        button.innerText = item+key;
        button.className = 'audio-control';
        buttonGroup.appendChild(button);
        musicList[item][key].button = button;
        var music = item+key;
        (function(music){
            button.onclick = function(){
                audioPlay(music);
            }
        })(music)
    }

    
}


document.body.insertBefore(buttonGroup,document.body.firstChild);
document.body.insertBefore(audioGroup,document.body.firstChild);
document.addEventListener('keydown',function(e){
    var music = parseKeyCode(e.keyCode);//把keycode解析为音符
    music && audioPlay(music);
});
