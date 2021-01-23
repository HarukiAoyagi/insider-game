/**
 * ページが開かれたとき以下の挙動を行う
 * 
 * 1. クエリストリングのvalueの値を取得する
 * 2. 手順1で取得した値を復号化する
 * 3. 画面に名前・役職（・お題）を表示させる
 */
window.onload = onInit()

function onInit() {
    let params = window.location.search
    
}