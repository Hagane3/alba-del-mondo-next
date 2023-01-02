import classes from "./SectionTitle.module.css";

interface SectionTitleProps {
  children: string;
}

function SectionTitle(props: SectionTitleProps) {
  return <h1 className={classes.sectionTitle}>{props.children}</h1>;
}

export default SectionTitle;
