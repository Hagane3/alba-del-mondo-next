import classes from "./Dot.module.css";

interface Props {
  changeRepertoire: (id: number) => void;
  id: number;
}

function Dot({ changeRepertoire, id }: Props) {
  return (
    <div
      className={classes.dot}
      onClick={() => {
        changeRepertoire(id);
      }}
    ></div>
  );
}

export default Dot;
