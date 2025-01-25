// サンプルコード: ユーザーの年齢を検証し、適切なメッセージを返す
function validateUserAge(user) {
    if (user && user.name && user.age) {
      if (typeof user.age !== 'number') {
        console.log('エラー: 年齢が無効です');
      } else {
        if (user.age < 18) {
          console.log('未成年のユーザーです: ' + user.name);
        } else if (user.age >= 18 && user.age < 65) {
          console.log('成人ユーザーです: ' + user.name);
        } else {
          console.log('シニアユーザーです: ' + user.name);
        }
      }
    } else {
      console.log('エラー: 不完全なユーザー情報');
    }
  }
  
/*
問題点

名前の重要性を無視:
関数名が曖昧で、具体的に「何をする関数なのか」が分かりにくい。
変数名やメッセージも具体性に欠けるため、コードの意図が読み取りづらい。

やりたいことベースで分けられていない:
一つの関数で複数の役割を担っており、検証やメッセージ出力が混在している。

早期リターンの欠如:
条件分岐がネストされており、コードの読みやすさが低下している。
不必要な処理を避けるための早期終了が使われていない。
*/