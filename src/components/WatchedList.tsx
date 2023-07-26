import React, { useEffect } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import Card from "./card";

// Assuming the type definition for a movie object
type Movie = {
  id: number;
  title: string;
  description: string;
  rating: number;
};

// Assuming the watchedlist array contains elements of type Movie
function WatchedList() {
  let watchedlist: Movie[] = useSelector((state: any) => state.watchedList);

  return (
    <div className="grid container m-auto px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-20">
      {watchedlist.map((movie: Movie) => (
        <Card key={movie.id} movie={movie} condition={true} />
      ))}
    </div>
  );
}

export default WatchedList;
