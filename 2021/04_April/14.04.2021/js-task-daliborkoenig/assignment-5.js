/*

Assignment 5

Write a program that accepts 2 arguments.

The 1st argument will be an array. We will call this argument "database".

The 2nd argument will be a string. We will call this argument "id".

The program must:

1) Check that the "database" argument is an array. If it is not an array,
it should return undefined

2) Check that the "id" argument is a string. If it is not a string,
it should return undefined

3) Look through through each object in the database, and return the object of the person
whose ID matches the ID in the database.

The result should be an object.

For example:

database = [
    {
        "name": "Johnson",
        "id": "123"
    },
    {
        "name": "Dwayne",
        "id": "124"
    }
]

id = 124

Result:
    {
        "name": "Dwayne",
        "id": "124"
    }

When you have finished writing your program, you can test it with id, and sampleData below.

*/

const id = "AA723A97-1564-0257-A06C-E1841DDA9A55";

const sampleData = [{
        "name": "Fredericka",
        "company": "Et Commodo At Foundation",
        "address": "Ap #764-9400 Elit. Road",
        "email": "id.sapien.Cras@Duisgravida.ca",
        "id": "45484E95-8678-4D2A-5B4D-4AA6282668C6"
    },
    {
        "name": "Elvis",
        "company": "Et Consulting",
        "address": "Ap #606-6704 Egestas. St.",
        "email": "ligula@Integertincidunt.org",
        "id": "1B7D0A4A-FB1E-3219-0D97-4DFF31C40CF1"
    },
    {
        "name": "Perry",
        "company": "Ligula Aliquam Erat PC",
        "address": "281-6118 Ultricies Ave",
        "email": "aliquam@sitametmetus.edu",
        "id": "EC0C1E7F-1A92-DEA9-0F45-A0E83F5B07BD"
    },
    {
        "name": "Rafael",
        "company": "Cras Eget Nisi Consulting",
        "address": "Ap #947-8154 Nec Road",
        "email": "ipsum.ac.mi@elitdictumeu.com",
        "id": "BB2F9BA3-A9D7-24D4-00F5-BA6C08C9F9B3"
    },
    {
        "name": "Brenna",
        "company": "Ante LLP",
        "address": "Ap #730-3743 Arcu. Av.",
        "email": "Suspendisse.dui.Fusce@malesuadaInteger.edu",
        "id": "AE441431-7766-F4B8-D7B2-4BC3F57880B1"
    },
    {
        "name": "Basia",
        "company": "Mauris Erat Eget Limited",
        "address": "9114 Lacus. Rd.",
        "email": "lorem.luctus.ut@lacusQuisque.com",
        "id": "0F54F06C-4EA7-3975-4D60-23E9F5F2A7FC"
    },
    {
        "name": "Kaitlin",
        "company": "Id Mollis Ltd",
        "address": "910-2536 Penatibus Road",
        "email": "libero.lacus.varius@quistristiqueac.ca",
        "id": "91F377E7-E7FE-138E-7F68-3BED3486BCC5"
    },
    {
        "name": "Marvin",
        "company": "Iaculis Lacus Pede PC",
        "address": "533-4214 Lorem, Av.",
        "email": "penatibus@risus.edu",
        "id": "466B282A-570A-6C7F-5551-A67C3F5AD4BF"
    },
    {
        "name": "Ezekiel",
        "company": "Adipiscing Elit LLP",
        "address": "P.O. Box 192, 1894 Dui. Avenue",
        "email": "placerat.augue.Sed@iaculisodio.com",
        "id": "3413DC10-1491-8FFC-805B-B8EE2CE6AF0B"
    },
    {
        "name": "Lionel",
        "company": "Montes LLC",
        "address": "121-7060 In Av.",
        "email": "dictum.eleifend.nunc@hymenaeosMaurisut.edu",
        "id": "3623B3DD-2278-CD40-CD62-E0B7EBEE888E"
    },
    {
        "name": "Sopoline",
        "company": "Turpis Consulting",
        "address": "Ap #321-9700 Adipiscing, Rd.",
        "email": "pellentesque.tellus.sem@risusa.net",
        "id": "505006DD-8B13-ADFC-57A5-1A64490A555A"
    },
    {
        "name": "Gretchen",
        "company": "Amet Ante Vivamus Corporation",
        "address": "P.O. Box 379, 8423 Tristique Rd.",
        "email": "lectus@libero.co.uk",
        "id": "0422FF97-F832-04E3-5BEE-4C0E96B43E51"
    },
    {
        "name": "Declan",
        "company": "Justo Praesent Luctus Corporation",
        "address": "888-5854 Est Rd.",
        "email": "Phasellus.libero.mauris@turpis.org",
        "id": "456714BE-44B8-996F-090E-F8FA9650A591"
    },
    {
        "name": "Octavia",
        "company": "Eget Associates",
        "address": "Ap #372-4396 Sed Avenue",
        "email": "leo@faucibusMorbi.co.uk",
        "id": "7CB3DCE3-39FA-BE76-B578-BD4CB14C80BD"
    },
    {
        "name": "Dexter",
        "company": "Metus LLP",
        "address": "Ap #326-597 Luctus Ave",
        "email": "non@ametorci.co.uk",
        "id": "70E3B0FE-F6CB-E859-C956-0BDDA0CC94B8"
    },
    {
        "name": "Kenyon",
        "company": "Accumsan Ltd",
        "address": "523-2116 A St.",
        "email": "posuere.enim.nisl@dictumeu.edu",
        "id": "804559EF-1FAD-9E06-702B-508012A9898B"
    },
    {
        "name": "Whilemina",
        "company": "Et Ipsum Cursus Corporation",
        "address": "Ap #261-1661 Nunc Av.",
        "email": "non.lorem@amet.edu",
        "id": "9C19C86D-14E9-C1E5-7738-0B85600A7CD4"
    },
    {
        "name": "Maggy",
        "company": "Lorem Sit Inc.",
        "address": "P.O. Box 498, 5368 Donec Avenue",
        "email": "fringilla.cursus@Crasvulputate.net",
        "id": "B063606F-A41E-9EE5-3049-7D97E3E0D230"
    },
    {
        "name": "Quamar",
        "company": "Erat Vitae Ltd",
        "address": "Ap #110-5411 Nunc St.",
        "email": "scelerisque@dignissimlacusAliquam.org",
        "id": "9AF5EE5A-5315-6F4C-C947-65545D896C91"
    },
    {
        "name": "Tyrone",
        "company": "Nunc Commodo Auctor LLC",
        "address": "6218 Quisque Rd.",
        "email": "aliquam.arcu@perconubia.net",
        "id": "59B55382-5AE4-0C8B-F3C6-422C3B5AAAD3"
    },
    {
        "name": "Carolyn",
        "company": "Donec Est Corp.",
        "address": "Ap #144-8411 Habitant Road",
        "email": "fermentum.fermentum.arcu@maurissapien.com",
        "id": "C6BE8B89-8084-9D45-1C00-EC1816308664"
    },
    {
        "name": "Nicholas",
        "company": "Arcu Iaculis Enim Associates",
        "address": "P.O. Box 572, 8674 Tellus St.",
        "email": "fermentum.fermentum.arcu@dignissimmagna.com",
        "id": "AA723A97-1564-0257-A06C-E1841DDA9A55"
    },
    {
        "name": "Xander",
        "company": "Erat LLC",
        "address": "560-1386 Accumsan Rd.",
        "email": "Nunc.sed@nonsollicitudina.edu",
        "id": "6ED5ED64-13A2-170D-80E4-9A6E11AB1616"
    },
    {
        "name": "Kiara",
        "company": "Dui In Sodales LLC",
        "address": "Ap #603-285 Neque Road",
        "email": "ullamcorper@augueeutellus.co.uk",
        "id": "57E81169-925B-3044-EE6A-32FAFEA07BA1"
    },
    {
        "name": "Raya",
        "company": "Magna Incorporated",
        "address": "1981 Duis Street",
        "email": "at.pretium@nequeet.com",
        "id": "B8C1F162-34BB-27EE-23F9-B26D2933A2F3"
    },
    {
        "name": "Raymond",
        "company": "Porttitor Vulputate Posuere Corp.",
        "address": "P.O. Box 581, 9990 Dictum. Street",
        "email": "Quisque.fringilla@orciluctuset.net",
        "id": "1FEAC3F4-AB72-8B55-67B8-79B1A19ADE19"
    },
    {
        "name": "Serina",
        "company": "A Felis Company",
        "address": "P.O. Box 760, 5044 Semper Rd.",
        "email": "Duis.at@massa.edu",
        "id": "2996B650-523D-8459-0DF0-DF88052730BD"
    },
    {
        "name": "Dara",
        "company": "Arcu Et Pede LLP",
        "address": "4956 Nullam Avenue",
        "email": "hendrerit.id@nuncIn.net",
        "id": "A89F2D92-8C7F-55B8-D930-BD83573BA31B"
    },
    {
        "name": "Shannon",
        "company": "Dui LLC",
        "address": "P.O. Box 700, 9385 Risus. Ave",
        "email": "Aliquam.ornare@sagittislobortis.ca",
        "id": "324A113D-8BAB-1E2A-8D62-DAAF7F585366"
    }
]

function matchId(database,id){
    let matchId = []
    if (Array.isArray(database) && typeof id === 'string'){
      for(i=0;i<database.length;i++){
        if (database[i].id !== id){
            continue
        }
        matchId.push(database[i])
    }
      return matchId
    }
    else {
      return undefined
    }
}

console.log(matchId(sampleData,id));

