var win;

function new_form() {
    var x, y;
    x = (window.outerWidth - 400) / 2 + window.screenX;
    y = (window.outerHeight - 300) / 2 + window.screenY;
    
    win = window.open('', 'w1', 'height=300, width=400, left=' + x + ', top=' + y);
    
    win.document.write('<h2>Заголовок текста</h2>');
    win.document.write('<p>JavaScript - это круто!</p>');
    win.document.write('<p align="center"><a href="https://dstu.education" target="_blank">ДонГТУ</a></p>');
    win.document.write('<p align="center"><input type="button" value="Закрыть" name="B1" onclick="opener.exit(opener.win);"></p>');
}

function exit(param) {
    if (param) {
        param.alert('Внимание! Окно будет закрыто!');
        param.close();
    }
}