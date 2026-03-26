import React from "react";

const ExerciseImage: React.FC<{ exerciseId: string }> = ({ exerciseId }) => {
  const apiKey = "b9d278b1a3msh7a79c7cc98cc57fp1196bfjsnb44e23d08bc4"; // Replace with your actual RapidAPI key
  const resolution = "1080"; // Adjust based on your user's plan
  const imageUrl = `https://exercisedb.p.rapidapi.com/image?exerciseId=${exerciseId}&resolution=${resolution}&rapidapi-key=${apiKey}`;

  return (
    <img
      src={imageUrl}
      alt="Exercise animation"
      width={resolution}
      height="auto"
      style={{ borderRadius: "8px" }}
    />
  );
};

export default ExerciseImage;
