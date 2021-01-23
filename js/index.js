
/**
 * このページへアクセスされたとき以下の挙動を行う
 *
 * 1. ローカルストレージに格納されている値を取得する
 * 2. 手順1で取得した値をtextareaにセットする
 */
// ページ読み込み完了後にonInitファンクションを実行
window.onload = function () {
    let strageKey = "strage"
    // ローカルストレージの値を取得
    let playerName = localStorage.getItem(strageKey)
    // テキストエリアにローカルストレージの値を設定
    document.getElementById("members").value = playerName

    console.log(playerName)

    document.getElementById('done').onclick = function () {
        // キー生成
        const playedData = 'before'
    
        // テキストエリアの値を取得
        let beforeMember = members.getItem(playerName)
    
        // テキストエリアの値をローカルストレージに格納
        localStorage.setItem(playerName, beforeMember)
    
        // ページ遷移
        window.location.href = 'share.html'
    }
}


/**
 * ボタン押下時以下の挙動を行う
 *
 * 1. textareaに入力されている値を取得する
 * 2. 手順1で取得した値をローカルストレージに格納する
 * 3. share.htmlへ遷移する
 */
// 次へボタンクリック後にonClickファンクションを実行
