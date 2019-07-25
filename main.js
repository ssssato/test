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

//
index = 1;

let arr = [];

//statusボタンを作成する関数
const createStsBtn = () => {
    //ボタンを作成
    const statusBtn = document.createElement('button');
    //1,IDを付与、なくてもいい
    statusBtn.id = "status" + index;
    //不要な処理なのでは？
    
    //作成したbuttonに名前をつける
    statusBtn.textContent = '作業中';

    //作業中ボタン用のＩＤを付与
    statusBtn.className = 'doing';

    //ボタン押下時の処理を追加
    statusBtn.addEventListener('click',() => {
            if(statusBtn.textContent === "完了"){
                statusBtn.textContent = "作業中";
                //作業中ボタン用のＩＤを付与
                statusBtn.className = 'doing';
            }
            else if(statusBtn.textContent === "作業中"){
                statusBtn.textContent = "完了";
                //完了ボタン用のＩＤを付与する
                statusBtn.className = 'comp';
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
        //let dlt = document.getElementById('delete' + _index);
        //取得しなくとも、deleteBtnを使えばＯＫ！！
        
        //削除ボタンの親要素(td)を取得
        let deletion = deleteBtn.parentNode;
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

    //入力された文字列を初期化
    document.getElementById('task').value = '';

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

    arr.length = 0;

    //for文
    //IDでstatus1から現在のstatus+indexまで順に要素を取得す
    for (var i=1; i<=index; i++) {
        let statusDoing = document.getElementById('status'+i).textContent;
        arr.push({comment:addItem2.textContent,status:statusDoing});
    }

    
    /*const statusDoingNodeLists = document.getElementsByClassName('doing');
    
    const statusDoings = Array.from(statusDoingNodeLists);
    let len = statusDoings.length;
    console.log(statusDoings);
    for (var i = 0; i<=len; i++) {
            arr.push({comment:addItem2.textContent,status:statusDoings});
    }*/
    console.log(arr);

    //indexをインクリメント
    index++;
});

//手順３
//上記関数にフォームの値を取得して、その要素をHTMLに追加する処理を実装
//createElement、appendChild、textContentなどを使用します

/*
//作業中ボタン要素を取ってくる関数
↑
良い方針だが、最初は少しややこしくなりかねないので、一旦保留→151行目から217行目で直した
const getStsBtn = (Index) => {
    //ラジオボタンの作業中の要素取得
    let done = document.getElementById('status' + Index);
    td
    let done2 = done.parentNode;
    tr
    let done3 = done2.parentNode;
};
*/

//①statusボタンのIDがcompになっている列を非表示させる関数
const hideComp = () => {
    //statusボタンのＩＤがcompになっているボタンの要素を取得
    const compNodeLists = document.getElementsByClassName('comp');
    
    //compsがNodeListsという特殊な配列のため、通常の配列に変換
    const comps = Array.from(compNodeLists);

    //comps配列のループ処理
    comps.forEach(comp => {
        //ボタン要素から親要素へたどっていく
        const parentComp = comp.parentNode.parentNode;

        //列要素を非表示にする
        parentComp.style.display = "none";
    });
};

//②statusボタンのIDがdoingになっている列を表示させる関数
const openDoing = () => {
    //statusボタンのＩＤがdoingになっているボタンの要素を取得
    const doingNodeLists = document.getElementsByClassName('doing');
    
    //doingsがNodeListsという特殊な配列のため、通常の配列に変換
    const doings = Array.from(doingNodeLists);
        
    //doings配列のループ処理
    doings.forEach(doing => {
    //ボタン要素から親要素へたどっていく
    const parentDoing = doing.parentNode.parentNode;

    //列要素を表示にする
    parentDoing.style.display = "";
    });     
};

//③statusボタンのIDがdoingになっている列を非表示にさせる関数
const hideDoing = () => {
    //statusボタンのＩＤがdoingになっているボタンの要素を取得
    const doingNodeLists = document.getElementsByClassName('doing');
    
    //doingsがNodeListsという特殊な配列のため、通常の配列に変換
    const doings = Array.from(doingNodeLists);

    //doings配列のループ処理
    doings.forEach(doing => {
        //ボタン要素から親要素へたどっていく
        const parentDoing = doing.parentNode.parentNode;

        //列要素を非表示にする
        parentDoing.style.display = "none";
    });
};

//④statusボタンのIDがcompになっている列を表示させる関数
const openComp = () => {
    //statusボタンのＩＤがcompになっているボタンの要素を取得
    const compNodeLists = document.getElementsByClassName('comp');
    
    //compsがNodeListsという特殊な配列のため、通常の配列に変換
    const comps = Array.from(compNodeLists);

    //comps配列のループ処理
    comps.forEach(comp => {
        //ボタン要素から親要素へたどっていく
        const parentComp = comp.parentNode.parentNode;

        //列要素を表示にする
        parentComp.style.display = "";
    });
};

//作業中のラジオボタン押下時の処理
    //statusボタンのＩＤがcompになっている列を非表示にさせる
    //同時に
    //statusボタンのＩＤがdoingになっている列を表示させる
const radioWork = document.getElementById('work');
radioWork.addEventListener('click', add => {
    hideComp();
    openDoing();
});

//完了のラジオボタン押下時の処理
    //statusボタンのＩＤがdoingになっている列を非表示にさせる
    //同時に
    //statusボタンのＩＤがcompになっている列を表示させる
const radioDone = document.getElementById('done');
radioDone.addEventListener('click', add => {
    hideDoing();
    openComp();
});

//すべてのラジオボタン押下時の処理
    //statusボタンのＩＤがcompになっている列を表示にさせる
    //同時に
    //statusボタンのＩＤがdoingになっている列を表示させる
const radioAll = document.getElementById('all');
radioAll.addEventListener('click', add => {
    openComp();
    openDoing();
});

//以下を関数を利用して書き換えた
/*
//作業中のラジオボタン押下時の処理
    //statusボタンのＩＤがcompになっている列を非表示にさせる
    //同時に
    //statusボタンのＩＤがdoingになっている列を表示させる
const radioWork = document.getElementById('work');
radioWork.addEventListener('click', add => {
//statusボタンのＩＤがcompになっている列を非表示にさせる部分
    //statusボタンのＩＤがcompになっているボタンの要素を取得
    const compNodeLists = document.getElementsByClassName('comp');
    
    //compsがNodeListsという特殊な配列のため、通常の配列に変換
    const comps = Array.from(compNodeLists);

    //comps配列のループ処理
    comps.forEach(comp => {
        //ボタン要素から親要素へたどっていく
        const parentComp = comp.parentNode.parentNode;

        //列要素を非表示にする
        parentComp.style.display = "none";
    });

//statusボタンのＩＤがdoingになっている列を表示させる部分
    //statusボタンのＩＤがdoingになっているボタンの要素を取得
    const doingNodeLists = document.getElementsByClassName('doing');
    
    //doingsがNodeListsという特殊な配列のため、通常の配列に変換
    const doings = Array.from(doingNodeLists);
        
    //doings配列のループ処理
    doings.forEach(doing => {
    //ボタン要素から親要素へたどっていく
    const parentDoing = doing.parentNode.parentNode;

    //列要素を表示にする
    parentDoing.style.display = "";
    });    
});



//完了のラジオボタン押下時の処理
    //statusボタンのＩＤがdoingになっている列を非表示にさせる
    //同時に
    //statusボタンのＩＤがcompになっている列を表示させる
const radioDone = document.getElementById('done');
radioDone.addEventListener('click', add => {
//statusボタンのＩＤがdoingになっている列を非表示にさせる部分
    //statusボタンのＩＤがdoingになっているボタンの要素を取得
    const doingNodeLists = document.getElementsByClassName('doing');
    
    //doingsがNodeListsという特殊な配列のため、通常の配列に変換
    const doings = Array.from(doingNodeLists);

    //doings配列のループ処理
    doings.forEach(doing => {
        //ボタン要素から親要素へたどっていく
        const parentDoing = doing.parentNode.parentNode;

        //列要素を非表示にする
        parentDoing.style.display = "none";
    });

//statusボタンのＩＤがcompになっている列を表示させる部分
     //statusボタンのＩＤがcompになっているボタンの要素を取得
     const compNodeLists = document.getElementsByClassName('comp');
    
     //compsがNodeListsという特殊な配列のため、通常の配列に変換
     const comps = Array.from(compNodeLists);
 
     //comps配列のループ処理
     comps.forEach(comp => {
         //ボタン要素から親要素へたどっていく
         const parentComp = comp.parentNode.parentNode;
 
         //列要素を表示にする
         parentComp.style.display = "";
     });
});


//すべてのラジオボタン押下時の処理
    //statusボタンのＩＤがcompになっている列を表示にさせる
    //同時に
    //statusボタンのＩＤがdoingになっている列を表示させる
const radioAll = document.getElementById('all');
radioAll.addEventListener('click', add => {
    //statusボタンのＩＤがcompになっているボタンの要素を取得
    const compNodeLists = document.getElementsByClassName('comp');
    //statusボタンのＩＤがdoingになっているボタンの要素を取得
    const doingNodeLists = document.getElementsByClassName('doing');

    //compsがNodeListsという特殊な配列のため、通常の配列に変換
    const comps = Array.from(compNodeLists);
    //doingsがNodeListsという特殊な配列のため、通常の配列に変換
    const doings = Array.from(doingNodeLists);

    //comps配列のループ処理
    comps.forEach(comp => {
        //ボタン要素から親要素へたどっていく
        const parentComp = comp.parentNode.parentNode;

        //列要素を表示にする
        parentComp.style.display = "";
    });

    //doings配列のループ処理
    doings.forEach(doing => {
        //ボタン要素から親要素へたどっていく
        const parentDoing = doing.parentNode.parentNode;

        //列要素を表示にする
        parentDoing.style.display = "";
    });
});
*/
