select "firstName",
"lastName",
"amount" as "amountSpent"
from "customers"
join "payments" using ("customerId")
order by "amount" desc
limit 10;
