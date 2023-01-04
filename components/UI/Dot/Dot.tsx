import classes from "./Dot.module.css";

interface Props {
  changeRepertoire: (id: number) => void;
  id: number;
  activeId: number;
}

function Dot({ changeRepertoire, id, activeId }: Props) {
  const isActive = id === activeId;

  return (
    <div
      className={`${classes.dot} ${isActive ? classes.active : ""}`}
      onClick={() => {
        changeRepertoire(id);
      }}
    ></div>
  );
}

export default Dot;
