import React from "react";
import "./Home.scss";
import Navbar from "../../component/Navbar/Navbar"
import cr1 from "../../assets/msg890718968-14704.jpg";
import cr2 from "../../assets/msg890718968-14697.jpg";
import cr3 from "../../assets/msg890718968-14686.jpg";
import cr4 from "../../assets/msg890718968-14695.jpg";
import cr5 from "../../assets/msg890718968-14692.jpg";
import cr6 from "../../assets/msg890718968-14689.jpg";
import cr7 from "../../assets/msg890718968-14699.jpg";




function Home() {
  return (
    <div className="home-page">

      <Navbar />

      <div className="scroller">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={cr1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={cr2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={cr3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={cr4} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={cr5} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={cr6} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="content">

        <h3 style={{ color: "var(--red)", textAlign: "center" }}>"That they might have life, and that they might have it more abundantly"</h3>

        <br></br>
        <hr></hr>

        <h2>About Us</h2>

        <p>Hope is non government, non-profit, non religious organization. It is an initiative of the Claretian Missionaries of the Bangalore Province which is committed to "the needs of the people especially the marginalized for the integral growth and development'. </p>

        <br></br>

        <h2>Vision</h2>

        <p>Hope Recovery Centre visions addiction free society for a better humanity.</p>
        <br></br>

        <h2>Mission</h2>

        <ul>
          <li>

            <p>To inspire and empower people affected by alcoholism and drug addiction towards better family and social living. </p>
          </li>
          <li>
            <p>Aims at creating a ADDICTION FREE SOCIETY through prevention, treatment and rehabilitation. </p>
          </li>
          <li>
            <p>promoting healthily values of life and humanity.</p>
          </li>
          <li>
            <p>Rehabilitating the victims of alcohol, drug abuse and their affected families. </p>
          </li>
        </ul>





        <br>
        </br>

        <div className="item">
          <div className="left">
            <img src="https://www.belgaummirror.com/wp-content/uploads/2022/09/Pradeep-Korea.jpg" alt="" />
          </div>
          <div className="right">
            <h4>FR. PRADEEP CORREA </h4>
            <p>Fr Pradeep Correa, the determined director of Hope Recovery Centre at Peerandwadi, Belagavi, who has cured large number of liquor and other addicts , especially the yougsters, is celebrating his golden birthday today.

              Selfless, modest, devoted and prayerful priest Fr Correa is admired and sought after by scores of families across Belagavi , Southern Maharashtra and Goa region. He has brought hopes in lives of several families who had otherwise lost hope. A teetotaller and blessed with jovial nature Fr Pradeep has been serving Hope Recovery Centre since 2010 and has brought in transformation of liquor addicts . People of every religion, caste and creed visit Hope Centre that has treated thousands of addicted people from the region with a very higher success rate.
            </p>
          </div>
        </div>

        <hr />




        <div className="item">
          <div className="left">
            <img src={cr7} alt="" />
          </div>
          <div className="right">
            <h4>CONTACT US</h4>
            <p><strong>Address:</strong> Hope Recovery Center,
              Janatha Plot, Opp to KLS School,
              Piranwadi Village & Post, Belgaum 590014
              <br />
              <strong>Phone:</strong> 0831- 2400150
              <br></br>
              <strong>Mobile:</strong> +91 6364812853
              <br></br>

              <strong>Email:</strong> hopepiranwadi@gmail.com
            </p>
          </div>
        </div>

        {/* <div className="item">
        <div className="left">
            <img src="	https://dharmasthaladrc.com/wp-content/uploads/2018/11/about-us.png" alt="" />
        </div>
        <div className="right">
            <h4>ಪೂಜ್ಯರ ಸಂದೇಶ</h4>
            <p>Jana Jagruthi Vedike, a forum creating awareness against bad habits, is a precious of Shri Kshetra Dharmasthala Dharmadhikari Dr. D. Veerendra Heggade. Realizing the hazards caused by alcohol addiction venerable Dr. D. Veerendra Heggade discussed the matter with the renowned personalities of the society. The collective opinion is the result of shaping a peoples’ forum to eradicate alcoholism. The social agitation to create a society free from all bad habits started in 1991. In this direction ‘Jana Jagruthi Vedike’ was born in 1992. Now, the forum has spread its programmes throughout the Karnataka State prompting various institutions, self-help groups to raise their voice against alcoholism and related habits.</p>
        </div>
    </div>

    <div className="item">
        <div className="left">
            <img src="	https://dharmasthaladrc.com/wp-content/uploads/2019/03/hemavathi-veerendra-heggade-1.jpg" alt="" />
        </div>
        <div className="right">
            <h4>ಮಾತಾಶ್ರೀಯವರ ಸಂದೇಶ</h4>
            <p>Jana Jagruthi Vedike, a forum creating awareness against bad habits, is a precious of Shri Kshetra Dharmasthala Dharmadhikari Dr. D. Veerendra Heggade. Realizing the hazards caused by alcohol addiction venerable Dr. D. Veerendra Heggade discussed the matter with the renowned personalities of the society. The collective opinion is the result of shaping a peoples’ forum to eradicate alcoholism. The social agitation to create a society free from all bad habits started in 1991. In this direction ‘Jana Jagruthi Vedike’ was born in 1992. Now, the forum has spread its programmes throughout the Karnataka State prompting various institutions, self-help groups to raise their voice against alcoholism and related habits.
</p>
        </div>
    </div>

    <div className="item">
        <div className="left">
            <img src="https://dharmasthaladrc.com/wp-content/uploads/2020/12/Ramaswamy-photo.jpg" alt="" />
        </div>
        <div className="right">
            <h4>ನೂತನ ರಾಜ್ಯಾಧ್ಯಕ್ಷರ ನೇಮಕ</h4>
            <p>ಪೂಜ್ಯ ಡಾ| ಡಿ. ವೀರೇಂದ್ರ ಹೆಗ್ಗಡೆಯವರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ದಿನಾಂಕ: ೧೪.೦೭.೨೦೧೯ ರಂದು ನಡೆದ ರಾಜ್ಯ ಜನಜಾಗೃತಿ ವೇದಿಕೆಯ ಕಾರ್ಯಕಾರಿ ಮಂಡಳಿ ಸಭೆಯಲ್ಲಿ ಕಳೆದ ೪ ವರ್ಷಗಳಿಂದ ವೇದಿಕೆಯ ರಾಜ್ಯಾಧ್ಯಕ್ಷರಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸಿರುವ ಶ್ರೀ ಸತೀಶ್ ಹೊನ್ನವಳ್ಳಿಯವರು ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ ಜಿಲ್ಲೆಯ ಶ್ರೀ ವಿ. ರಾಮಸ್ವಾಮಿಯವರಿಗೆ ತಮ್ಮ ಅಧಿಕಾರವನ್ನು ಹಸ್ತಾಂತರಿಸಿರುತ್ತಾರೆ. ಜನಜಾಗೃತಿ ವೇದಿಕೆಯ ನೂತನ ರಾಜ್ಯಾಧ್ಯಕ್ಷರಾಗಿ ಆಯ್ಕೆಯಾಗಿರುವ ಶ್ರೀ ವಿ. ರಾಮಸ್ವಾಮಿಯವರು ಬೆಂಗಳೂರಿನ ನೆಲಮಂಗಲದ ಪ್ರಸಿದ್ಧ ಉದ್ಯಮಿಯಾಗಿರುತ್ತಾರೆ. ರಾಜ್ಯಾಧ್ಯಕ್ಷರು ಪ್ರಾಸ್ತಾವಿಕ ನುಡಿಗಳನ್ನಾಡುತ್ತಾ ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರದ ಜನಜಾಗೃತಿ ವೇದಿಕೆ ಅಧ್ಯಕ್ಷನಾಗಿರುವ ನಾನು ಶ್ರೀ ಕ್ಷೇತ್ರ ಧರ್ಮಸ್ಥಳದ ರುಡ್ ಸೆಟ್ ಸಂಸ್ಥೆಯ ಫಲಾನುಭವಿಯಾಗಿರುತ್ತೇನೆ. ನನ್ನ ವ್ಯಾವಹಾರಿಕ ಬದುಕು ಪೂಜ್ಯರ ಆಶೀರ್ವಾದದಿಂದಲೇ  ಆರಂಭವಾಗಿದೆ. ನನ್ನ ಇಂದಿನ ಯಶಸ್ವಿ ಪರಮ ಪೂಜ್ಯ ಖಾವಂದರಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ. ಪೂಜ್ಯರು ನನ್ನಂತಹ ಸಾವಿರಾರು ಮಂದಿಗೆ ಸ್ವ ಉದ್ಯೋಗ ಮಾಡಲು ದೇಶದಲ್ಲಿ ೫೨೩ ರುಡ್ ಸೆಟ್ ಸಂಸ್ಥೆಗಳನ್ನು ಸ್ಥಾಪಿಸಿದ್ದಾರೆ. ಈ ಮೂಲಕ ಬಹಳಷ್ಟು ಮಂದಿ ಧನ್ಯತೆಯಿಂದ ಜೀವನ ನಡೆಸಲು ಸಾಧ್ಯವಾಗಿದೆ.
</p>
        </div>
    </div> */}

      </div>

    </div>
  );
}

export default Home;
