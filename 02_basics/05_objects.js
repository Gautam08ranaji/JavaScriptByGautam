// ------------------------------OBJECT DESTRUCTURE AND API INTRO --------------------------------------
const course = {

    subject: "JavaScript",
    priice: 3999,
    faculty: "Gautam Rana"
}

const { faculty: teacher } = course
// console.log(faculty);  // if another name is described then prior name will not work directlt
// console.log(teacher);
// console.log(course.faculty);

const navbar = ({ company }) => {

}

navbar(company = "hitesh")


//-------------------------------------API  JSON----------------------------------//

// {
//     "name": "gautam",
//     "age":  25,
//     "address": "abcd"
// }

[
    {},
    {},
    {}
]


{ "results": [{ "gender": "female", "name": { "title": "Mrs", "first": "Celestine", "last": "Garcia" }, "location": { "street": { "number": 5802, "name": "Rue de la Mairie" }, "city": "Nantes", "state": "Loire", "country": "France", "postcode": 47500, "coordinates": { "latitude": "-15.3761", "longitude": "176.7089" }, "timezone": { "offset": "+5:00", "description": "Ekaterinburg, Islamabad, Karachi, Tashkent" } }, "email": "celestine.garcia@example.com", "login": { "uuid": "255a9a98-6b02-4325-92c9-1a33812bbfe4", "username": "organicbutterfly699", "password": "revolver", "salt": "Qaimkv3k", "md5": "6e474049d8de92dd27b36ce2aa69ba3b", "sha1": "7c2d596158ff60b53638b4515dd8b9b2478f848e", "sha256": "960a429010c0d75ac6335c8152b0fd313c0feccf184103340acb3a7523032d25" }, "dob": { "date": "1958-05-20T02:15:27.022Z", "age": 67 }, "registered": { "date": "2006-08-22T16:41:30.760Z", "age": 18 }, "phone": "01-17-79-82-28", "cell": "06-29-27-16-60", "id": { "name": "INSEE", "value": "2580464895074 92" }, "picture": { "large": "https://randomuser.me/api/portraits/women/51.jpg", "medium": "https://randomuser.me/api/portraits/med/women/51.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/51.jpg" }, "nat": "FR" }], "info": { "seed": "9d445afdd308f290", "results": 1, "page": 1, "version": "1.4" } }