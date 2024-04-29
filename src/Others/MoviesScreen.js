import React, { useState } from "react";
import "./MoviesScreen.css";
import MoviesCart from "../Cart/MoviesCart";
import { SearchOutlined } from "@ant-design/icons";

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

export default function MoviesScreen() {
  const [showAll, setShowAll] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("");


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
            placeholder="Movie Name"
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
            <SearchOutlined />
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
