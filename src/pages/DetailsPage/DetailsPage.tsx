import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const DetailsPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const handleback = () => {
    navigate(-1);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleback}>
        Back
      </button>
      <h1>{name}</h1>
    </div>
  );
};
