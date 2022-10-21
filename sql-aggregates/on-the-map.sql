select count("countryId") as "cityCount",
"countries"."name" as "country"
from "cities"
join "countries" using ("countryId")
group by "countryId";
