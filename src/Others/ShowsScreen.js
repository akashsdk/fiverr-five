import React, { useState } from "react";
import "./MoviesScreen.css";
import MoviesCart from "../Cart/MoviesCart";
import { ReloadOutlined } from "@ant-design/icons";

import Img1 from "../Data/web-1.jpeg";
import Img2 from "../Data/web-2.jpeg";
import Img3 from "../Data/web-3.jpeg";
import Img4 from "../Data/web-4.jpeg";
import Img5 from "../Data/web-5.jpeg";
import Img6 from "../Data/web-6.jpeg";
import Img7 from "../Data/web-7.jpeg";
import Img8 from "../Data/web-8.jpeg";
import Img9 from "../Data/web-9.jpeg";
import Img10 from "../Data/web-10.jpeg";
import Img11 from "../Data/web-11.jpeg";

export default function ShowsScreen() {
  const [showAll, setShowAll] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("");

  const movies = [
    {
      mainCatalogue: "Exclusives Shows",
      Img: Img1,
      Name: "Adv. Achinta Aich (2024)",
      Catalogue: "Drama",
      Language: "Bengali",
      IMD: "7.9",
      Released: "Apr 26, 2024 (India)",
      Seasons: "01",
      Network: "Hoichoi",
      Stars: "Saswata Chatterjee, Ritwick Chakraborty, Surangana Banerjee",
      Plot: "Achinta's pursuit of justice exposes a web of secrets and sins concealing the truth.",
    },
    {
      mainCatalogue: "Exclusives Shows",
      Img: Img2,
      Name: "Knuckles (2024)",
      Catalogue: "Action, Adventure, Comedy",
      Language: "English",
      IMD: "6.5",
      Released: "Apr 26, 2024 (United States)",
      Seasons: "01",
      Network: "Paramount+",
      Stars: " Idris Elba, Adam Pally, Stockard Channing",
      Plot: "Knuckles the Echidna teaches deputy Wade Whipple the techniques of the Echidna warrior.",
    },
    {
      mainCatalogue: "Exclusives Shows",
      Img: Img3,
      Name: "Goodbye Earth (2024)",
      Catalogue: "Drama, Sci-Fi, Thriller",
      Language: "Korean",
      IMD: "4.5",
      Released: "Apr 26, 2024 (Korea)",
      Seasons: "01",
      Network: "Netflix",
      Stars: "Harrison Xu, Eugene Ko, Yuuki Luna",
      Plot: " An examination of despair and hope in individuals aware of an asteroid hurtling towards Earth, signifying the end of the world.",
    },
    {
      mainCatalogue: "Exclusives Shows",
      Img: Img4,
      Name: "Balakot & Beyond (2024)",
      Catalogue: "Action",
      Language: "Hindi",
      IMD: "8.2",
      Released: "Apr 25, 2024 (India)",
      Seasons: "01",
      Network: "JioCinema",
      Stars: " Shahid Malik, Jason Tham, Umar Sharif",
      Plot: "Post the deadly Pulwama attacks, Kashyap and his team strike back with a fitting reply. In the age of hybrid warfar.",
    },
    {
      mainCatalogue: "Exclusives Shows",
      Img: Img5,
      Name: "Dead Boy Detectives (2024)",
      Catalogue: "Action, Adventure, Comedy",
      Language: "English",
      IMD: "7.6",
      Released: "Apr 25, 2024 (United States)",
      Seasons: "01",
      Network: "Netflix",
      Stars: "George Rexstrew, Jayden Revri, Kassius Nelson",
      Plot: "Charles Rowland and Edwin Paine decided not to enter the afterlife to stay on Earth.",
    },
    {
      mainCatalogue: "Exclusives Shows",
      Img: Img6,
      Name: "House of the Owl (2024)",
      Catalogue: "Drama",
      Language: "Japanese",
      IMD: "8.0",
      Released: " Apr 24, 2024 (Japan)",
      Seasons: "01",
      Network: "Disney+",
      Stars: "Stars: Mackenyu, Min Tanaka, Eugene Nomura",
      Plot: "At the height of his career and powers, Japan's master fixer, who has guided politicians and business heads through some of Japan's biggest scandals.",
    },
    {
      mainCatalogue: "Exclusives Shows",
      Img: Img7,
      Name: "Red Eye (2024)",
      Catalogue: "Action, Thriller",
      Language: "English",
      IMD: "6.9",
      Released: "Apr 21, 2024 (United Kingdom)",
      Seasons: "01",
      Network: "ITVX",
      Stars: "Richard Armitage, Jing Lusi, Lesley Sharp",
      Plot: "London police officer DC Hana Li is escorting Dr Matthew Nolan back to Beijing where he has been accused of a crime.",
    },
    {
      mainCatalogue: "Exclusives Shows",
      Img: Img8,
      Name: "Private Bodyguard (2024)",
      Catalogue: "Drama",
      Language: "Indonesian",
      IMD: "N/A",
      Released: "Mar 08, 2024 (Indonesia)",
      Seasons: "01",
      Network: "N/A",
      Stars: "Kevin Faulky, Annisa Kaila, Dina Lorenza",
      Plot: "Four young brothers known as the 4 Princes, are surprised when their father adopts an orphaned girl named Fely.",
    },
    {
      mainCatalogue: "Exclusives Shows",
      Img: Img9,
      Name: "Raisinghani vs Raisinghani (2024)",
      Catalogue: "Drama",
      Language: "Hindi",
      IMD: "6.1",
      Released: "Feb 12, 2024 (India)",
      Seasons: "01",
      Network: "Sony Liv",
      Stars: "Priyanka Dutta, Jennifer Winget, Karan Wahi",
      Plot: "Anushka is a sharp but ethical lawyer who works with Virat, her ambitious colleague, in her father's law firm",
    },
    {
      mainCatalogue: "Exclusives Shows",
      Img: Img10,
      Name: "American Horror Story (2011)",
      Catalogue: "Drama, Horror, Sci-Fi",
      Language: "English",
      IMD: "8.0",
      Released: "Oct 05, 2011 (United States)",
      Seasons: "13",
      Network: "FX",
      Stars: "Lady Gaga, Kathy Bates, Angela Bassett",
      Plot: "An anthology series centering on different characters and locations, including a house with a murderous past, an insane asylum.",
    },
    {
      mainCatalogue: "Exclusives Shows",
      Img: Img11,
      Name: "Shōgun (2024)",
      Catalogue: "Adventure, Drama, History",
      Language: "English, Japanese",
      IMD: "9.0",
      Released: "Feb 27, 2024 (United States)",
      Seasons: "01",
      Network: "Hulu",
      Stars: "Cosmo Jarvis, Anna Sawai, Tadanobu Asano",
      Plot: "When a mysterious European ship is found marooned in a nearby fishing village, Lord Yoshii Toranaga discovers secrets that could tip the scales of power and devastate his enemies.",
    },
  ];

  const filterMovies = () => {
    let filteredMovies = movies;
    if (searchName) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.Name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    if (searchLanguage) {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.Language.toLowerCase() === searchLanguage.toLowerCase()
      );
    }
    return filteredMovies;
  };

  const renderMovies = () => {
    const filteredMovies = filterMovies();
    if (showAll) {
      return filteredMovies.map((movie, index) => (
        <MoviesCart key={index} {...movie} />
      ));
    } else {
      return filteredMovies
        .slice(0, 10)
        .map((movie, index) => <MoviesCart key={index} {...movie} />);
    }
  };

  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className="MoviesScreen-Body">
      <div className="MoviesScreen-Box">
        <div className="MoviesScreen-Div">
          <input
            className="MoviesScreen-Input"
            placeholder="Shows Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <select
            className="MoviesScreen-Select"
            value={searchLanguage}
            onChange={(e) => setSearchLanguage(e.target.value)}
          >
            <option value="">Language</option>
            <option value="Bengali">Bengali</option>
            <option value="Hindi">Hindi</option>
            <option value="French">French</option>
            <option value="English">English</option>
            <option value="Japanese">Japanese</option>
            <option value="Korean">Korean</option>
            <option value="Spanish">Spanish</option>
            <option value="Tamil">Tamil</option>
            <option value="Telugu">Telugu</option>
          </select>
          <button className="MoviesScreen-Button2" onClick={handleReload}>
            <ReloadOutlined />
            Show All
          </button>
        </div>
      </div>
      <div className="MoviesScreen-Container">{renderMovies()}</div>
      <div>
        {showAll ? (
          <button
            className="MoviesScreen-Button"
            onClick={() => setShowAll(false)}
          >
            See less
          </button>
        ) : (
          <button
            className="MoviesScreen-Button"
            onClick={() => setShowAll(true)}
          >
            See more
          </button>
        )}
      </div>
    </div>
  );
}
