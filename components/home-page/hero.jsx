import Image from "next/image";
import classes from "./hero.module.css";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.webp"
          alt="An image showing Jayesh"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Jayesh</h1>
      <p>This is a blog about web development</p>
    </section>
  );
}

export default Hero;
