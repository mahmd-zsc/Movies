import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";

// Assuming the type definition for a movie object
type Movie = {
  id: number;
  title: string;
  description: string;
  rating: number;
};

// Assuming the watched array contains elements of type Movie
function Watched() {
  let watched: Movie[] = useSelector((state: any) => state.watched);

  return (
    <div className="grid container m-auto px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-20">
      {watched.map((movie: Movie) => (
        <Card key={movie.id} movie={movie} condition={false} />
      ))}
    </div>
  );
}

export default Watched;
