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
   const domains = ['email.com', 'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];

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

         break;
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

// problem number 03:
function checkDigitsInName(str) {
   let hasNumber = false;

   if (typeof str !== "string") {
      return "Invalid Input";
   }

   for (const char of str) {
      if(!Number.isNaN(Number(char))) {
         hasNumber = true;
         break;
      }
   }

   return hasNumber;
}

// problem number 04:
function calculateFinalScore(person) {
   let isEligible, testScore, schoolGrade, isFFamily, finalScore;

   if (Array.isArray(person)) {
      return "Invalid Input";
   }

   if (typeof person !== "object") {
      return "Invalid Input";
   }


   testScore = person.testScore ? person.testScore > 50 ? 50 : person.testScore : 0;
   schoolGrade = person.schoolGrade ? person.schoolGrade > 30 ? 30 : person.schoolGrade : 0;
   isFFamily = person.isFFamily ? 20 : 0;

   finalScore = testScore + schoolGrade + isFFamily;

   isEligible = finalScore > 80 ? true : false;

   return isEligible;
}

// problem number 05:
function waitingTime(arry, srlNumber) {
   let timeNeeded, averageTime, remainingPerson;

   if (!Array.isArray(arry) || typeof srlNumber !== "number") {
      return "Invalid Input";
   }

   if (srlNumber < arry.length) {
      timeNeeded = 0;
      return timeNeeded;
   }

   let totalTime = 0;
   for (const item of arry) {
      totalTime += item;
   }

   averageTime = totalTime / arry.length;
   remainingPerson = srlNumber - 1 - arry.length;
   timeNeeded = Math.round(averageTime * remainingPerson);

   return timeNeeded;
}

