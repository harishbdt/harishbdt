let userRole = "admin";
let accessLevel;

if (userRole === "admin") { 
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
        case "manager":
            userCategory = "Manager";
            break;
            case "subscriber":
                userCategory = "Subscriber";
                break;
                default:
                    userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

console.log("Authentication Status:", authenticationStatus);

let personType = "Employee";
let authorizedService;

switch (personType) {
    case "Employee":
        authorizedService = "Access to Dietary Services";
        break;
        case "Enrolled":
            authorizedService = "Access to Dietary services & one-on-one interaction";
            break;
            case "Subscriber":
                authorizedService = "Partial Access to Dietary Services";
                break;
                case "Non-Subscriber":
                    authorizedService = "Enroll to Access the services";
                    break;
                    default:
                        authorizedService = "Unknown User Type. Please Enroll First!";
}

console.log("User Authorized Service Message:", authorizedService);