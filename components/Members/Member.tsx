import classes from "./Member.module.css";
import Image, { StaticImageData } from "next/image";

interface MemberProps {
  name: string;
  role: string;
  imgSrc: StaticImageData;
}

function Member({ name, role, imgSrc }: MemberProps) {
  return (
    <div className={classes.member}>
      <Image className={classes.image} src={imgSrc} alt="kwisniewska" />
      <div className={classes.details}>
        <p className={classes.memberName}>{name}</p>
        <span className={classes.dot}> &#8226;</span>
        <p className={classes.memberRole}>{role}</p>
      </div>
    </div>
  );
}

export default Member;
