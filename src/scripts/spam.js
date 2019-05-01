let emailsOnDOM = document.getElementById("emails");

let spamList = [];
customers.forEach(customer =>{
    let eachEmail = customer.contacts.email.filter(email => {
        return email.includes(".com");
    });
    spamList = spamList.concat(eachEmail);
});
console.log(spamList);
emailsOnDOM.innerHTML += `
<h2>${spamList.join("<hr>")}</h2>
`;
