// Run once to populate the database: npx tsx src/lib/seed.ts
import { getDb } from "./db";
import { stores } from "./schema";

const seedData = [
  // ── KOLLAM ──
  { name: "Akshaya Community Pharmacy - Anchalummoodu",    district: "Kollam",           address: "No 1, Akshaya Community Pharmacy Building, Anchalummoodu, Kollam",       phone: "+91 94473 04447", lat: 8.9325, lng: 76.5526, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - NH 66 Kavandu",    district: "Kollam",           address: "NH 66, Kavandu, Kollam, Kerala 691003",                                   phone: "+91 95393 99964", lat: 8.9219, lng: 76.5586, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - High School Jn",   district: "Kollam",           address: "High School Junction, Kollam, Kerala 691009",                             phone: "+91 94475 16367", lat: 8.8930, lng: 76.6040, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - Madannada",        district: "Kollam",           address: "Opp. Westside Chandanayazhikam Arcade, near Cocopeat Garden, Madannada",  phone: "+91 90745 61335", lat: 8.8774, lng: 76.5970, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - Kottankulangara",  district: "Kollam",           address: "Kottankulangara, Chavara, Kollam",                                        phone: "+91 96455 73111", lat: 8.9570, lng: 76.6060, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - Kollam-Theni Hwy", district: "Kollam",           address: "Junction, Kollam–Theni Highway, Kollam",                                 phone: "+91 97470 06549", lat: 8.8844, lng: 76.5989, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - Kottiyam",         district: "Kollam",           address: "K-Mall, Mayyanad–Kottiyam Road, Kottiyam, Kollam",                       phone: "+91 88911 61222", lat: 8.9478, lng: 76.6490, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - Karipuram",        district: "Kollam",           address: "817, Karipuram–Cheerankavu Road, Kollam",                                phone: "",               lat: 8.8808, lng: 76.5970, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - Thevalakkara",     district: "Kollam",           address: "Chenankara, Thevalakkara Road, Kollam",                                  phone: "+91 98719 14660", lat: 9.0115, lng: 76.5650, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - Karunagappally",   district: "Kollam",           address: "Hospital Junction, Karunagappally, Kollam, Kerala 690518",               phone: "",               lat: 9.0581, lng: 76.5383, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - Kottarakkara",     district: "Kollam",           address: "Kottathala, Kottarakkara–Sasthamcotta Road, Kottarakkara, Kerala 691506",phone: "+91 96451 57851", lat: 9.0010, lng: 76.7800, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - Kottarakkara 2",   district: "Kollam",           address: "2PR8+J4W, Kottarakkara–Sasthamcotta Road, Kottarakkara, Kerala 691506",  phone: "+91 94472 80505", lat: 9.0050, lng: 76.7850, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - Kallummood",       district: "Kollam",           address: "P.O., Akshaya Community Pharmacy, Kallummood Junction, Kollam",          phone: "+91 94952 41449", lat: 8.9000, lng: 76.6000, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - Pathanapuram",     district: "Kollam",           address: "3VR4+VH2, College Road, Pathanapuram, Kollam",                           phone: "",               lat: 9.1096, lng: 76.8509, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - Punalur",          district: "Kollam",           address: "Aradhana Medicals, Opp. Govt. Hospital, Punalur, Kerala 691305",         phone: "",               lat: 9.0070, lng: 76.9260, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - NH 66 South",      district: "Kollam",           address: "NH 66, Kollam, Kerala",                                                  phone: "",               lat: 8.9100, lng: 76.5700, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - SH 6",             district: "Kollam",           address: "Nadakapadickal Buildings, SH 6, Kollam",                                phone: "",               lat: 8.8700, lng: 76.5700, discount: "Up to 50%" },
  // ── THIRUVANANTHAPURAM ──
  { name: "Akshaya Community Pharmacy - Kanjiramkulam",    district: "Thiruvananthapuram", address: "Shop, Kanjiramkulam, Thiruvananthapuram, Kerala",                     phone: "+91 62389 67953", lat: 8.3830, lng: 77.0710, discount: "Up to 60%" },
  { name: "Akshaya Community Pharmacy - Pappanamcode",     district: "Thiruvananthapuram", address: "Kanyakumari Road, Vinayaka Nagar, Pappanamcode, Thiruvananthapuram 695040", phone: "+91 94002 27775", lat: 8.4641, lng: 76.9553, discount: "Up to 60%" },
  { name: "Akshaya Community Pharmacy - Mamom",            district: "Thiruvananthapuram", address: "Mamom Road, Thiruvananthapuram, Kerala",                              phone: "+91 87147 92104", lat: 8.5280, lng: 76.9400, discount: "Up to 60%" },
  { name: "Akshaya Community Pharmacy - Kazhakkoottam",    district: "Thiruvananthapuram", address: "Kottayathu Kavu, Near Sainik School, Kazhakkoottam, Kerala 695582",  phone: "+91 95395 37868", lat: 8.5680, lng: 76.8740, discount: "Up to 60%" },
  { name: "Akshaya Community Pharmacy - Nedumangad",       district: "Thiruvananthapuram", address: "Sathram Junction, Near Shivan Kovil, Nedumangad, Kerala 695541",     phone: "+91 81298 01081", lat: 8.6000, lng: 77.0010, discount: "Up to 60%" },
  { name: "Akshaya Community Pharmacy - Kilimanoor",       district: "Thiruvananthapuram", address: "Arjun Towers, Opp. Pvt Bus Stand, Kilimanoor Panchayath, Kerala",   phone: "",               lat: 8.7135, lng: 76.8547, discount: "Up to 60%" },
  { name: "Akshaya Community Pharmacy - N Fort Rd",        district: "Thiruvananthapuram", address: "X82R+R4G, N Fort Road, Thiruvananthapuram",                          phone: "+91 96455 80444", lat: 8.5010, lng: 76.9530, discount: "Up to 60%" },
  { name: "Akshaya Community Pharmacy - Concord Tower",    district: "Thiruvananthapuram", address: "65MW+922, Concord Tower, Thiruvananthapuram",                        phone: "",               lat: 8.5190, lng: 76.9400, discount: "Up to 60%" },
  // ── ALAPPUZHA ──
  { name: "Akshaya Community Pharmacy - Oachira",          district: "Alappuzha",        address: "Ochira Road, Opp. Malabar Hotel, Oachira, Kerala 690526",               phone: "",               lat: 9.1342, lng: 76.5130, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - Maruthankuzhi",    district: "Alappuzha",        address: "Asset Business Center, Maruthankuzhy Bridge, Alappuzha",                phone: "+91 94007 74464", lat: 9.2150, lng: 76.5320, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - Karthikappally",   district: "Alappuzha",        address: "Kp.10/270, Karthikappally–Nangiyarkullangara Road, Alappuzha",          phone: "+91 73060 25654", lat: 9.1960, lng: 76.5200, discount: "Up to 50%" },
  { name: "Akshaya Community Pharmacy - Kadampanad",       district: "Alappuzha",        address: "3MRM+4PW, Kadampanad Ground Road, Alappuzha",                           phone: "+91 70345 29221", lat: 9.2608, lng: 76.5486, discount: "Up to 50%" },
];

async function seed() {
  console.log("Seeding database with", seedData.length, "stores...");
  await getDb().insert(stores).values(seedData).onConflictDoNothing();
  console.log("Done.");
  process.exit(0);
}

seed().catch((e) => { console.error(e); process.exit(1); });
