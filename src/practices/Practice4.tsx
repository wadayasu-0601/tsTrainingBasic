export const Practice4 = () => {
  const calcTotalFee = (num) => {
    const total = num * 4.4;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(1000);

  return (
    <div>
      <p>練習問題</p>
      <button onClick={onClickPractice}>設定ファイル</button>
    </div>
  );
};
