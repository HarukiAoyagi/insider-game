/**
 * ページが開かれた時以下の挙動を行う
 * 
 * 1. お題を決める　例：自転車
 * 2. ローカルストレージの値を取得する
 * 3. 改行区切りで配列へ格納する
 * {
 *   name: やぎさん,
 *   role: undefined,
 *   odai: 自転車
 * }
 * 4. 配列内のroleにランダムで1,2,3と重複しないように割り当てる
 * 5. オブジェクトをStringに変換する
 * 6. Stringを暗号化する
 * 7. 次のような形式にする
 *     やぎさん：{現在開いているページのドメイン以下の部分}/role.html?value={暗号化された値}
 * 8. 画面に表示させる
 */

// お題を決める
let themaArray = ["自転車", "車", "カレンダー", "目覚まし時計", "砂時計", "コンパス", "影", "季節", "旅行"];
let thema = themaArray[Math.floor(Math.random() * themaArray.length)];

// ローカルストレージの値を取得
let playerName = localStorage.getItem(strageKey)

// 改行区切りで配列を格納
let 


/**
 * リンクをまとめてコピーボタンが謳歌された時以下の挙動を行う
 *
 * 1. URL一覧をクリップボードにコピーする
 */