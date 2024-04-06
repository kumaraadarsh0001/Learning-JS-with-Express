// DNS Module
import dns from "dns";

("Address");
dns.lookup("geekyshows.com", (error, address, family) => {
  if (error) throw error;
  console.log(address);
  console.log(family);
});

("Records");
dns.resolve("geekyshows.com", "MX", (error, records) => {
  if (error) throw error;
  console.log(records);
});
