import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import Loading from "../Loading/Loading";
import { FootballLeaguesContainer } from "./FootballLeagues.style";

const SerieA = ({ group_type }) => {
  const { fetchData, response, loading } = useAxios();

  const getEvent = async () => {
    await fetchData({
      method: "GET",
      url: `https://dull-puce-wildebeest-belt.cyclic.app/getGroup/group/type/${group_type}`,
    });
  };

  useEffect(() => {
    getEvent();
    window.scrollTo(0, 0);
  }, []);

  console.log("res", response);
  return (
    <FootballLeaguesContainer>
      <div className="football-loading-wrapper">
        <h1>Serie A</h1>
        {loading ? (
          <div className="loading">
            <Loading />
          </div>
        ) : response?.length > 0 ? (
          <div className="football-league-conainer">
            {loading ? (
              <div className="loading">
                <Loading />
              </div>
            ) : (
              response?.map((item, index) => (
                <div className="card" key={index}>
                  <div className="card__header">
                    <img src={item?.featuredImg} alt={item?.titleOfBlog} />
                  </div>
                  <div className="card__body">
                    <span className="tag tag-color">{item?.authorName}</span>
                    <h3>{item?.titleOfBlog}</h3>
                    <p>{item?.description}</p>
                  </div>
                  <div className="card__footer">
                    <Link to={`edit/${item._id}`}>
                      <button>Edit</button>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="no-blog-founded">
            <h2>No Event Founded</h2>
          </div>
        )}
      </div>
    </FootballLeaguesContainer>
  );
};

export default SerieA;
