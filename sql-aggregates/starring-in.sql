select count("genreId") as "genre",
"genres"."name"
from "filmGenre"
join "castMembers" using ("filmId")
join "genres" using ("genreId")
where "actorId" = 178
group by "genreId";
