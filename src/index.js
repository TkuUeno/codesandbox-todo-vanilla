import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;

  if (inputText !== "") {
    document.getElementById("add-text").value = "";

    createIncompleteList(inputText);
  }
};

// 完了リストから指定のリストを削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  //
  // divタグを作成し、子要素を追加
  //
  const div = document.createElement("div");
  div.className = "list-row";
  // // pタグのテキストに入力値を格納
  const p = document.createElement("p");
  p.innerText = text;
  div.appendChild(p);
  // // 完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押されたボタンの親の親タグをリストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODOの内容テキスト
    const text = addTarget.firstElementChild.innerText;

    console.log(addTarget);

    // div以下を初期化
    addTarget.textContent = null;
    // pタグのテキストに入力値を格納
    const p = document.createElement("p");
    p.innerText = text;
    div.appendChild(p);

    // // 戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押されたボタンの親の親タグをリストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // TODOの内容テキスト
      const text = deleteTarget.firstElementChild.querySelector("p").innerText;

      createIncompleteList(text);
    });

    div.appendChild(backButton);
    // liにdivを追加
    const li = document.createElement("li");
    li.appendChild(div);
    // 完了したTODOのリストに追加
    document.getElementById("complete-list").appendChild(li);
  });
  div.appendChild(completeButton);

  // // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });
  div.appendChild(deleteButton);

  //
  // liにdivを追加
  //
  const li = document.createElement("li");
  li.appendChild(div);

  //
  // 未完了のリストに追加
  //
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
