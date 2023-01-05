import classes from "./Members.module.css";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import Member from "./Member";
import MEMBERS from "../../data/MEMBERS";

function Members() {
  return (
    <section id="members" className={classes.members}>
      <div className={classes.title}>
        <SectionTitle>Skład</SectionTitle>
      </div>
      {MEMBERS.map((member) => {
        return (
          <Member
            key={member.id}
            name={member.name}
            role={member.role}
            imgSrc={member.image}
          />
        );
      })}
    </section>
  );
}

export default Members;
