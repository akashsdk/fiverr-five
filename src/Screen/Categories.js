import React, { useState } from "react";
import "./Categories.css";
import "../Others/MoviesScreen.css";
import { ReloadOutlined } from "@ant-design/icons";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import MoviesCart from "../Cart/MoviesCart";

import Img1 from "../Data/Movie Pic-1.jpeg";
import Img2 from "../Data/Pic-2.jpeg";
import Img3 from "../Data/Pic-3.jpeg";
import Img4 from "../Data/Pic-4.jpeg";
import Img5 from "../Data/Pic-5.jpeg";
import Img6 from "../Data/Pic-6.jpeg";
import Img7 from "../Data/Pic-7.jpeg";
import Img8 from "../Data/Pic-8.jpeg";
import Img9 from "../Data/Pic-9.jpeg";
import Img10 from "../Data/Pic-10.jpeg";
import Img11 from "../Data/Pic-11.jpeg";
import Img12 from "../Data/web-1.jpeg";
import Img13 from "../Data/web-2.jpeg";
import Img14 from "../Data/web-3.jpeg";
import Img15 from "../Data/web-4.jpeg";
import Img16 from "../Data/web-5.jpeg";
import Img17 from "../Data/web-6.jpeg";
import Img18 from "../Data/web-7.jpeg";
import Img19 from "../Data/web-8.jpeg";
import Img20 from "../Data/web-9.jpeg";
import Img21 from "../Data/web-10.jpeg";
import Img22 from "../Data/web-11.jpeg";

export default function Categories() {
  const [showAll, setShowAll] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("");
  const [mainCatalogue, setMainCatalogue] = useState("");
  const [Catalogue, setCatalogue] = useState("");
  const [IMD, setIMD] = useState("");

  const movies = [
    {
      mainCatalogue: "Exclusives Movies",
      Img: Img1,
      Name: "DeAr (2024)",
      Catalogue: "Drama, Family, Romance",
      Language: "Tamil",
      IMD: "6.8",
      Released: "Apr 11, 2024 (India)",
      Director: "Anand Ravichandran",
      Writer: "Anand Ravichandran",
      Plot: "A newly married couple faces challenges when the wife snoring interrupts the husband sleep. Their struggles depict the compromises needed for a lasting marriage.",
    },
    {
      mainCatalogue: "Exclusives Movies",
      Img: Img2,
      Name: "A Chef's Deadly Revenge (2024)",
      Catalogue: "Thriller",
      Language: "English",
      IMD: "5.3",
      Released: "Apr 27, 2024 (United States)",
      Director: "Alexandre Carrière",
      Writer: "Erica Lane",
      Plot: "A woman moves to a new town and opens her own gourmet restaurant after escaping from an abusive relationship.",
    },
    {
      mainCatalogue: "Exclusives Movies",
      Img: Img3,
      Name: "Exhuma (2024)",
      Catalogue: "Horror, Mystery, Thriller",
      Language: "English, Korean, Japanese",
      IMD: "7.2",
      Released: "Feb 22, 2024 (South Korea)",
      Director: "Jae-hyun Jang",
      Writer: "Jae-hyun Jang",
      Plot: "The process of excavating an ominous grave unleashes dreadful consequences buried underneath.",
    },
    {
      mainCatalogue: "Exclusives Movies",
      Img: Img4,
      Name: "Fractured (2019)",
      Catalogue: "Thriller",
      Language: "English",
      IMD: "6.4",
      Released: "Oct 11, 2019 (United States)",
      Director: "Brad Anderson",
      Writer: "Alan B. McElroy",
      Plot: "A couple stops at a gas station, where their 6 y.o. daughter's arm is fractured. They hurry to a hospital. Something strange is going on there. The wife and daughter go missing.",
    },
    {
      mainCatalogue: "Exclusives Movies",
      Img: Img5,
      Name: "Maayakumari (2023)",
      Catalogue: "Thriller",
      Language: "Bengali",
      IMD: "6.4",
      Released: "Jan 13, 2023 (India)",
      Director: "Arindam Sil",
      Writer: "N/A",
      Plot: "The plot of the film will travel between different eras of Bengali cinema.",
    },
    {
      mainCatalogue: "Exclusives Movies",
      Img: Img6,
      Name: "Padmaavat (2018)",
      Catalogue: "Drama, History, Romance",
      Language: "Hindi",
      IMD: "7.0",
      Released: "Jan 25, 2018 (India)",
      Director: "Sanjay Leela Bhansali",
      Writer: "Prakash Kapadia",
      Plot: "Their subjects until an ambitious Sultan hears of Padmavati's beauty and forms an obsessive love for the Queen of Mewar.",
    },
    {
      mainCatalogue: "Exclusives Movies",
      Img: Img7,
      Name: "The Fellowship of the Ring (2001)",
      Catalogue: "Action, Adventure, Drama",
      Language: "English",
      IMD: "8.8",
      Released: "Dec 19, 2001 (New Zealand)",
      Director: "Peter Jackson",
      Writer: "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
      Plot: "A meek Hobbit from the Shire and eight set out on a journey to destroy the powerful One Ring.",
    },
    {
      mainCatalogue: "Exclusives Movies",
      Img: Img8,
      Name: "Makmum (2019)",
      Catalogue: "Horror",
      Language: "Indonesian",
      IMD: "5.1",
      Released: "Aug 15, 2019 (Indonesia)",
      Director: "Hadrah Daeng Ratu",
      Writer: "Alim Sudio, Vidya Talisa Ariestya, Riza Pahlevi",
      Plot: "Horror",
    },
    {
      mainCatalogue: "Exclusives Movies",
      Img: Img9,
      Name: "Bhimaa (2024)",
      Catalogue: "Action",
      Language: "Telugu, Tamil, Malayalam",
      IMD: "6.1",
      Released: "Mar 08, 2024 (India)",
      Director: "Harsha",
      Writer: "Ajju Mahakali",
      Plot: "Mysterious incidents at a historical temple bring a detective to a small town to investigate. He seeks the truth behind the strange happenings.",
    },
    {
      mainCatalogue: "Exclusives Movies",
      Img: Img10,
      Name: "The Fall Guy (2024)",
      Catalogue: "Action, Comedy, Drama",
      Language: "English",
      IMD: "7.3",
      Released: "May 03, 2024 (United States)",
      Director: "David Leitch",
      Writer: "Drew Pearce, Glen A. Larson",
      Plot: "A down-and-out stuntman must find the missing star of his ex-girlfriend's blockbuster film.",
    },
    {
      mainCatalogue: "Exclusives Movies",
      Img: Img11,
      Name: "One-Eyed Jack (2019)",
      Catalogue: "Crime, Drama, Thriller",
      Language: "Korean",
      IMD: "5.9",
      Released: "Sep 20, 2019 (South Korea)",
      Director: "Oh-Kwang Kwon",
      Writer: "Yeong-man Heo, Oh-Kwang Kwon",
      Plot: "Crime, Drama, Thriller",
    },
    {
      mainCatalogue: "Exclusives Shows",
      Img: Img12,
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
      Img: Img13,
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
      Img: Img14,
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
      Img: Img15,
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
      Img: Img16,
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
      Img: Img17,
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
      Img: Img18,
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
      Img: Img19,
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
      Img: Img20,
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
      Img: Img21,
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
      Img: Img22,
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
    if (mainCatalogue) {
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.mainCatalogue.toLowerCase() === mainCatalogue.toLowerCase()
      );
    }
    if (Catalogue) {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.Catalogue.toLowerCase() === Catalogue.toLowerCase()
      );
    }
    if (IMD) {
      filteredMovies = filteredMovies.filter((movie) => movie.IMD === IMD);
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

  const handleFilter = (filterValue) => {
    switch (filterValue) {
      case "All Shows":
        setMainCatalogue("Exclusives Shows");
        setShowAll(false);
        break;
      case "All Movies":
        setMainCatalogue("Exclusives Movies");
        setShowAll(false);
        break;
      case "Drama":
        setCatalogue("Drama");
        setShowAll(false);
        break;
      case "Thriller":
        setCatalogue("Thriller");
        setShowAll(false);
        break;
      case "Comedy":
        setCatalogue("Comedy");
        setShowAll(false);
        break;
      case "Horror":
        setCatalogue("Horror");
        setShowAll(false);
        break;
      case "Hindi":
        setSearchLanguage("Hindi");
        setShowAll(false);
        break;
      case "English":
        setSearchLanguage("English");
        setShowAll(false);
        break;
      case "Bangla":
        setSearchName("");
        setSearchLanguage("Bengali");
        setShowAll(false);
        break;
      case "Latest":
        setSearchName("");
        setSearchLanguage("");
        setShowAll(true);
        break;
      case "Detective":
        setSearchName("");
        setSearchLanguage("");
        setShowAll(false);
        break;
      default:
        break;
    }
    
  };

  return (
    <div className="body">
      <Header />
      <div className="box">
        <div className="Categories-Body">
          <div className="Categories-Top-Box">
            <button
              className="Categories-Top-Button"
              onClick={() => handleFilter("All Shows")}
            >
              All Shows
            </button>
            <button
              className="Categories-Top-Button"
              onClick={() => handleFilter("All Movies")}
            >
              All Movies
            </button>
            <button
              className="Categories-Top-Button"
              onClick={() => handleFilter("Drama")}
            >
              Drama
            </button>
            <button
              className="Categories-Top-Button"
              onClick={() => handleFilter("Thriller")}
            >
              Thriller
            </button>
            <button
              className="Categories-Top-Button"
              onClick={() => handleFilter("Comedy")}
            >
              Comedy
            </button>
            <button
              className="Categories-Top-Button"
              onClick={() => handleFilter("Horror")}
            >
              Horror
            </button>
            <button
              className="Categories-Top-Button"
              onClick={() => handleFilter("Hindi")}
            >
              Hindi
            </button>
            <button
              className="Categories-Top-Button"
              onClick={() => handleFilter("English")}
            >
              English
            </button>
            <button
              className="Categories-Top-Button"
              onClick={() => handleFilter("Bangla")}
            >
              Bangla
            </button>
            <button
              className="Categories-Top-Button"
              onClick={() => handleFilter("Latest")}
            >
              Latest
            </button>
            <button
              className="Categories-Top-Button"
              onClick={() => handleFilter("Detective")}
            >
              Detective
            </button>
          </div>

          <div className="MoviesScreen-Body">
            <div className="MoviesScreen-Box">
              <div className="MoviesScreen-Div">
                <input
                  className="MoviesScreen-Input"
                  placeholder="Short by Name"
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
        </div>
        <Footer />
      </div>
    </div>
  );
}
