select sum("amount") as "spent",
"customers"."firstName",
"customers"."lastName"
from "payments"
join "customers" using ("customerId")
group by "customerId"
order by "spent" desc;
