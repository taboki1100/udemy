// 年齢の検証とメッセージ生成を分ける
function isValidUser(user) {
  if (!user || !user.name || typeof user.age !== 'number' || user.age < 0) {
    return false;
  }
  return true;
}

function getUserCategoryMessage(user) {
  if (user.age < 18) {
    return `未成年のユーザーです: ${user.name}`;
  }
  if (user.age < 65) {
    return `成人ユーザーです: ${user.name}`;
  }
  return `シニアユーザーです: ${user.name}`;
}

// メインのユーザー年齢検証関数
function validateUserAge(user) {
  if (!isValidUser(user)) {
    console.log('エラー: 不完全なユーザー情報または無効な年齢');
    return;
  }

  const message = getUserCategoryMessage(user);
  console.log(message);
}

// 使用例
validateUserAge({ name: '太郎', age: 25 }); // 成人ユーザーです: 太郎
validateUserAge({ name: '', age: 17 });    // エラー: 不完全なユーザー情報または無効な年齢
validateUserAge({ name: '花子', age: 70 }); // シニアユーザーです: 花子

/* 
改善点の解説

名前の重要性:
isValidUser や getUserCategoryMessage など、関数名が具体的で何をするか一目で分かる。
変数名やログメッセージも明確で意図を伝える。

やりたいことベースで分ける:
検証 (isValidUser) とメッセージ生成 (getUserCategoryMessage) を分離して、それぞれが単一の責任を持つようにした。
validateUserAge はメインロジックをシンプルに保ち、他の関数を呼び出す役割のみ。


早期リターン:
ユーザー情報が無効な場合、すぐにエラーメッセージを出力して処理を終了。
ネストされた条件分岐を排除して、コードの読みやすさを向上。
*/