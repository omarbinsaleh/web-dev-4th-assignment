// problem number 01:
function calculateTax(income, expenses) {
   const taxRate = 0.2;
   let taxableAmount = 0;

   if (income < 0 || expenses < 0 || income < expenses) {
      return "Invalid Input";
   }

   taxableAmount = (income - expenses) * taxRate;

   return taxableAmount;
};

// problem number 02:
function sendNotification(email) {
   let message, userName, domain;
   let isValid = true;
   const domains = ['email.com', 'gamil.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];

   if (typeof email !== "string" || !email.includes("@")) {
      isValid = false;
      message = "Invalid Email";
      return message;
   };

   for (const domain of domains) {
      if (email.includes(domain)) {
         if (email[email.indexOf(domain) - 1] !== "@") {
            isValid = false;
         }
      }
   }

   if (email.split("@").length > 2) {
      isValid = false;
      message = "Invalid Email"
      return message;
   } 
   else {
      userName = email.split("@")[0];
      domain = email.split("@")[1];

      if (!domains.includes(domain)) {
         isValid = false
         message = "Invalid Email"
         return message;
      }

      if (userName.includes("@") || domain.includes("@")) {
         isValid = false;
      };
   };

   if (!isValid) {
      message = "Invalid Email"
   };

   message = `${userName} has sent you an email from ${domain}`

   return message
}

const output = sendNotification("omarbinsal@eh44gmail.com");
console.log(output)

