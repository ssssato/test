//このファイルにボタン押下時の処理など、様々な処理を記述する。
//まずはDOM操作について調べてみてください！！
//今回では、ページ遷移させずにページの外観を変化させていきます
//（シングルページアプリケーション（SPA）のようなものです。）
//そのためにJavaScriptでHTMLの要素を操作する必要があります。（DOM操作）

/*-------------------------------------------------------------
[サブ課題]
追加ボタン押下時の処理を追加
追加ボタン押下時にはフォームに入力された内容を表示される必要があります。
完成形は通し番号とコメントと状態を表示させる必要がありますが、
まずは入力された内容だけ表示させてみましょう！！
-------------------------------------------------------------*/

//手順１
//document.getElementById()という関数を用いて追加ボタンのDOM要素を取得
//※HTMLファイルも少しいじる必要があります。
let btn = document.getElementById('btn');

index = 1;
//手順２
//追加ボタン押下時に実行する関数を定義
btn.addEventListener('click', add => {
    //テーブルの要素を作る
    let addItem = document.createElement('tr');
    let addItem1 = document.createElement('td');
    let addItem2 = document.createElement('td');
    let addItem3 = document.createElement('button');
    let addItem4 = document.createElement('button');

    //textにnputタグに入力された文字列を取得して代入
    let text = document.getElementById('task').value;

    //addItem1の文字列にindexを代入
    addItem1.textContent = index;
    //addItem2の文字列にtextを代入
    addItem2.textContent = text;
    
    //作成したbuttonに名前をつける
    addItem3.textContent = "作業中";
    addItem4.textContent = "削除";

    //作ったテーブルにaddItem1と2を追加
    addItem.appendChild(addItem1);
    addItem.appendChild(addItem2); 
    addItem.appendChild(addItem3);
    addItem.appendChild(addItem4);

    //元々あるatbleタグの中にaddItemを紐づける
    testTable.appendChild(addItem);

    //indexを増加
    index++;
})

//手順３
//上記関数にフォームの値を取得して、その要素をHTMLに追加する処理を実装
//createElement、appendChild、textContentなどを使用します
