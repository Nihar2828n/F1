
import "./Landing.css";

export default function Landing() {
  return (
    <section className="landing">
      <video
        className="landing-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/landing.mp4" type="video/mp4" />
      </video>

      <div className="landing-overlay" />

      <div className="landing-content">
        <h1>
          <span className="hey">Hey, I’m</span><br />
          <span className="name">Nihar Vasavada</span>
        </h1>

        <div className="socials">
          <a href="https://github.com/NIHAR2828N" target="_blank">GitHub</a>
          <a href="https://x.com/N_I_H_A_R_2_8" target="_blank">X</a>
          <a href="https://instagram.com/Nihar_vasavada" target="_blank">IG</a>
          <a href="https://linkedin.com/in/YOURUSERNAME" target="_blank">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}