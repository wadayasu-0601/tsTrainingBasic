export const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(getTotalFee(total));
  };

  return (
    <div>
      <p>練習問題</p>
      <button onClick={onClickPractice}>練習問題3</button>
    </div>
  );
};
