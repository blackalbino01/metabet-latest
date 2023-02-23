import React, { useEffect } from "react";
import Loading from "../components/Loading/Loading";
import UFCBanners from "../Components/UFcComponents/UFCBanners";
import { useAxios } from "../hooks/useAxios";
import { UFCFeaturedBanners } from "../JasonData/FeaturedBannerData";

const UFC = () => {
  const { fetchData, response, loading } = useAxios();

  const getBanners = async () => {
    await fetchData({
      method: "GET",
      url: "http://localhost:5002/getGroup/group/UFC",
    });
  };

  useEffect(() => {
    getBanners();
    window.scrollTo(0, 0);
    // console.log("UFC", response);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : response?.length > 0 ? (
        <div className="blogs-conainer">
          {loading ? (
            <div className="loading">
              <Loading />
            </div>
          ) : (
            response?.map((item, index) => (
              <UFCBanners
                key={index}
                background_img={item?.event.banner}
                data={item}
              />
            ))
          )}
        </div>
      ) : (
        <div className="no-blog-founded">
          <h2>No Blog Founded</h2>
        </div>
      )}
    </>
  );
};

export default UFC;
