// Load users from localStorage or fallback to defaults
let USERS = JSON.parse(localStorage.getItem("USERS")) || [
  { name: "Volt", email: "voltflare3@gmail.com", password: "volt#dev99", vsid: "9643" },
  { name: "TestUser", email: "test@mail.com", password: "abcd", vsid: "3175" }
];
  
// Save users to localStorage
function saveUsers() {
  localStorage.setItem("USERS", JSON.stringify(USERS));
}

// Helper: generate random VSID
function generateVSID() {
  return "VSID" + Math.floor(1000 + Math.random() * 9000);
}
