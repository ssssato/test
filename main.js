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
const btn = document.getElementById('btn');

index = 1;

//statusボタンを作成する関数
const createStsBtn = () => {
    //ボタンを作成
    const statusBtn = document.createElement('button');
    //1,IDを付与、なくてもいい
    statusBtn.id = "status" + index;
    
    //作成したbuttonに名前をつける
    statusBtn.textContent = '作業中';
    //ボタン押下時の処理を追加
    statusBtn.addEventListener('click',() => {
            if(statusBtn.textContent === "完了"){
                statusBtn.textContent = "作業中";
            }
            else if(statusBtn.textContent === "作業中"){
                statusBtn.textContent = "完了";
            }
            else{
                console.log("error");
            }
    });
    
    return statusBtn;

}

//deleteボタンを作成する関数
const createDltBtn = (_index) => {
    //ボタンを作成
    const deleteBtn = document.createElement('button');
    //IDを付与
    deleteBtn.id = "delete" + _index;
    //作成したbuttonに名前をつける
    deleteBtn.textContent = '削除';
    //ボタン押下時の処理を追加
    deleteBtn.addEventListener('click',() => {
        //削除ボタンの要素を取得
        let dlt = document.getElementById('delete' + _index);
        
        //削除ボタンの親要素(td)を取得
        let deletion = dlt.parentNode;
        //その親要素(tr)を取得
        let x = deletion.parentNode;
        //さらに親要素(table)を取得
        let y = x.parentNode;
        //削除
        y.removeChild(x);
    });
    
    return deleteBtn;


}

//手順２
//追加ボタン押下時に実行する関数を定義
btn.addEventListener('click', add => {
    //テーブルの要素を作る
    const addItem = document.createElement('tr');
    const addItem1 = document.createElement('td');
    const addItem2 = document.createElement('td');
    const addItem3 = document.createElement('td');
    const addItem4 = document.createElement('td');

    //textにinputタグに入力された文字列を取得して代入
    let text = document.getElementById('task').value;

    //addItem1の文字列にindexを代入
    addItem1.textContent = index;
    //addItem2の文字列にtextを代入
    addItem2.textContent = text;    
    

    //createStsBtnを呼び出してStatusボタン生成
    //createStsBtn();

    //createDltBtnを呼び出してDeleteボタン生成
    //createDltBtn();


    //addItem3と4の位置に作成したボタンを紐づける
    addItem3.appendChild(createStsBtn()); 
    addItem4.appendChild(createDltBtn(index));

    //作ったテーブルにaddItem1と2を追加
    addItem.appendChild(addItem1);
    addItem.appendChild(addItem2); 
    addItem.appendChild(addItem3);
    addItem.appendChild(addItem4);

    //元々あるtableタグの中にaddItemを紐づける
    testTable.appendChild(addItem);

    //indexをインクリメント
    index++;
});

//手順３
//上記関数にフォームの値を取得して、その要素をHTMLに追加する処理を実装
//createElement、appendChild、textContentなどを使用します

//作業中ボタン要素を取ってくる関数
const getStsBtn = (Index) => {
    //ラジオボタンの作業中の要素取得
    let done = document.getElementById('status' + Index);
    td
    let done2 = done.parentNode;
    tr
    let done3 = done2.parentNode;
};

work.addEventListener('click', add => {
    getStsBtn(index);
    done3.style.display = "none";
});