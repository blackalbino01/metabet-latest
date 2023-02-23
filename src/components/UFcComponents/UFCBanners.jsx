import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UFCContainer } from "./UFC.style";

const UFCBanners = ({ data, background_img }) => {
  const navigate = useNavigate();
  let title = data?.event?.title;

  return (
    <div
      onClick={() =>
        navigate(`/event/${data.group}/${title.replace(/[^a-zA-Z0-9-]/g, "-")}`)
      }
    >
      <UFCContainer background={background_img}></UFCContainer>
    </div>
  );
};

export default UFCBanners;
