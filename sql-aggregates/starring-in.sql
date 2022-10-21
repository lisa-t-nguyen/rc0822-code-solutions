select count("filmId") as "films",
"genres"."name" as "genre"
from "filmGenre"
join "castMembers" using ("filmId")
join "genres" using ("genreId")
join "actors" using ("actorId")
where "firstName" = 'Lisa' and "lastName" = 'Monroe'
group by "genreId";
