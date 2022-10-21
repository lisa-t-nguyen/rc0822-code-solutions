select "title",
avg("replacementCost") as "averageReplacement"
from "films"
group by "title";
