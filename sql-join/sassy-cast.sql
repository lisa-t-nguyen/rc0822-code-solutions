select "firstName",
"lastName",
"films"."title" as "film"
from "actors"
join "castMembers" using ("actorId")
join "films" using ("filmId")
where "title" = 'Jersey Sassy';
