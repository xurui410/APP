window.onload = function(){
    //获取文本框，文本域，按钮
    var text1 = document.getElementById('text1');
    var text2 = document.getElementById('text2');
    var btn = document.getElementById('btn');
    var content = document.getElementById('content');

    //按钮的点击事件

    btn.onclick = function(){
        //创建、获取divItem
        var divItem = document.createElement('div');
        content.appendChild(divItem);
        divItem.className = 'item';
        content.insertBefore(divItem,content.firstChild);

        //创建第一个div
        var divTop = document.createElement('div');
        divTop.className = 'top';
        divItem.appendChild(divTop);

        var span = document.createElement('span');
        divTop.appendChild(span);
        span.innerHTML = text1.value + '说:' +text2.value;

        var btn = document.createElement('input');
        btn.id = 'btn';
        btn.type = 'button';
        btn.value = '删除';
        divTop.appendChild(btn);

        text1.innerHTML = text1.value;
        text1.value = '';
        text2.innerHTML = text2.value;
        text2.value = '';


        //创建第二个div
        var div = document.createElement('div');
        divItem.appendChild(div);

        var date = new Date();
        var m = date.getMonth()+1;
        var d = date.getDate();
        var h = date.getHours();
        var m2 = date.getMinutes();
        div.innerHTML = m+"月" + d+"日  " + h +":" + m2;

        //删除动作
        btn.onclick = function(){
            this.parentNode.parentNode.remove();
        }
    }
}

































/**
 * Created by lenovo on 2019/5/16.
 */
