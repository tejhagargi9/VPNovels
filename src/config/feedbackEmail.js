import emailjs from "@emailjs/browser";

// Function to send rejection email
const FeedbackEmail = (templateParams) => {
  const serviceID = "service_o46mf8c"; // Replace with your EmailJS service ID
  const templateID = "template_bz11wdv"; // Replace with your EmailJS template ID
  const publicKey = "tro_5vp1cPjWN8SC4"; // Replace with your EmailJS user ID

  return emailjs.send(serviceID, templateID, templateParams, publicKey);
};

export default FeedbackEmail;
