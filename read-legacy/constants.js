// Client ID and API key from the Developer Console
const CLIENT_ID =
  "1022293236575-r7cr32hc8glacv33jqdrpv9mrdiarm0o.apps.googleusercontent.com";
const API_KEY = "AIzaSyDhQZiYRLkeplfxYw3yR8S70gi2BioIV-4";

// Drive API key - used for initial attempt at 
// const DRIVE_API_KEY = API_KEY;
// const DRIVE_API_KEY = 'AIzaSyDQMkAkA06Qb2tccxk6gQWUfAH209G1ABQ';

const JOURNAL_PHOTOS_FOLDER_ID = "1tJefmHtQLEJrVFON0VNTXXg4YPb1tAQQ"


const LEGACY_DOCUMENT_IDS = [
  {"My W Days Journal": "1wsDGBh5RfEOzUtejxEa2nMKeBsk551hNO81EcyKsN-E"},
  {"Journey Journal": "1QK9Q9-cM6kl9m9bNfVdGgw5bRw0Pzfc1OU9qDJIiDfk"},
  {"2020": "1213oI7-Euc-oiHt1Za13Ry51CR7dkIErWhSPRePDsOI"},
  {"2021" : "1zTOib1qVNALMteQ24GfFjLDL3zGqOckY9G-5kbBs-Sk"},
  {"2021 part 2" : "1-oMglsIqUGYgP09BI3M4YJWcxdFTNvlb8L7H9b801Y8"},
  {"2022" : "1t_-G7Ri6IlenzpGMQz7hGbusSjo3Hjav5NF_taJJd_M"},
  {"2022 pt. 2 (10/8-)":"1iX22M7NaSQcu6VbdUuJMpaRP5eWK5UyxuDQAdJSn5QM"},
  {"2023" : "1TAVUgbB8ouC9I_oW2-d1fRpv6GL8RBys4hbks05ZR3k"},
  {"2023 pt. 2 (10/3-)" : "1iDe_sD7IguxkJ0rmbkBEkevbkfviZbXRwPoftCiWOMs"},
  {"2024" : "1ot1yMK-cIskMPeShdSIulwmKvcFCWlppwbKIbBW1GFA"},
  {"2024 pt. 2 (9/01-)" : "11fBU3SAJclfTOuygr1BfIqVmK52NgWX5l1ZgWIyEUbE"},
  {"2025" : "1pQ4fle91yd3G1EIF0yPcUMZtLnCyNW3R6pYMP6TOryY"},
]

// Gets most recent document ID
const DOCUMENT_ID = LEGACY_DOCUMENT_IDS[LEGACY_DOCUMENT_IDS.length - 1][Object.keys(LEGACY_DOCUMENT_IDS[LEGACY_DOCUMENT_IDS.length - 1])[0]]
// If you want to continue using a different year, put it here. For example, here is 2023


const DEFAULT_IMAGE_LINK = "https://drive.google.com/uc?export=view&id="

const SPREADSHEET_ID = "1JVT42lKAqDMxJRm5vYpW4_VewZNHIlbsogk9QfpK9aE";

// const BACKUP_SHEET = '2023'
const BACKUP_SHEET = '2024'


const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];