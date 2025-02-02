const months = ["Jan", "March", "April", "June"];
// 0 addition
months.splice(1, 0, "Feb");
console.log(months);

// 1 remplacer
months.splice(4, 1, "May");
console.log(months);

// suppression
months.splice(1, 1);
console.log(months);
