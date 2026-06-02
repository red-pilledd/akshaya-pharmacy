export type Store = {
  id: number;
  name: string;
  district: "Kollam" | "Thiruvananthapuram" | "Alappuzha";
  address: string;
  phone: string;
  lat: number;
  lng: number;
  discount: string;
};

export const stores: Store[] = [
  // Kollam
  { id: 1, name: "Akshaya Community Pharmacy - Kollam Main", district: "Kollam", address: "Main Road, Kollam Town, Kerala 691001", phone: "+91 94470 00001", lat: 8.8932, lng: 76.6141, discount: "Up to 50%" },
  { id: 2, name: "Akshaya Community Pharmacy - Paravur", district: "Kollam", address: "Paravur Junction, Kollam, Kerala 691301", phone: "+91 94470 00002", lat: 9.0520, lng: 76.5220, discount: "Up to 45%" },
  { id: 3, name: "Akshaya Community Pharmacy - Punalur", district: "Kollam", address: "Punalur Town Centre, Kerala 691305", phone: "+91 94470 00003", lat: 9.0070, lng: 76.9260, discount: "Up to 50%" },
  { id: 4, name: "Akshaya Community Pharmacy - Kundara", district: "Kollam", address: "Kundara Town, Kollam, Kerala 691501", phone: "+91 94470 00004", lat: 8.9920, lng: 76.6890, discount: "Up to 40%" },
  { id: 5, name: "Akshaya Community Pharmacy - Kottarakkara", district: "Kollam", address: "Kottarakkara Junction, Kerala 691506", phone: "+91 94470 00005", lat: 9.0010, lng: 76.7780, discount: "Up to 55%" },
  { id: 6, name: "Akshaya Community Pharmacy - Chavara", district: "Kollam", address: "Chavara South, Kollam, Kerala 691583", phone: "+91 94470 00006", lat: 8.9570, lng: 76.6090, discount: "Up to 45%" },
  { id: 7, name: "Akshaya Community Pharmacy - Karunagappally", district: "Kollam", address: "Karunagappally Town, Kerala 690518", phone: "+91 94470 00007", lat: 9.0600, lng: 76.5370, discount: "Up to 50%" },
  { id: 8, name: "Akshaya Community Pharmacy - Perinad", district: "Kollam", address: "Perinad Junction, Kollam, Kerala 691601", phone: "+91 94470 00008", lat: 8.9290, lng: 76.5930, discount: "Up to 40%" },

  // Thiruvananthapuram
  { id: 9, name: "Akshaya Community Pharmacy - Trivandrum Central", district: "Thiruvananthapuram", address: "MG Road, Trivandrum, Kerala 695001", phone: "+91 94470 00009", lat: 8.5241, lng: 76.9366, discount: "Up to 60%" },
  { id: 10, name: "Akshaya Community Pharmacy - Pattom", district: "Thiruvananthapuram", address: "Pattom Palace Road, Trivandrum, Kerala 695004", phone: "+91 94470 00010", lat: 8.5380, lng: 76.9310, discount: "Up to 55%" },
  { id: 11, name: "Akshaya Community Pharmacy - Kazhakuttam", district: "Thiruvananthapuram", address: "Kazhakuttam Junction, Kerala 695582", phone: "+91 94470 00011", lat: 8.5680, lng: 76.8740, discount: "Up to 50%" },
  { id: 12, name: "Akshaya Community Pharmacy - Attingal", district: "Thiruvananthapuram", address: "Attingal Town, Kerala 695101", phone: "+91 94470 00012", lat: 8.6930, lng: 76.8170, discount: "Up to 45%" },
  { id: 13, name: "Akshaya Community Pharmacy - Neyyattinkara", district: "Thiruvananthapuram", address: "Neyyattinkara Town, Kerala 695121", phone: "+91 94470 00013", lat: 8.3980, lng: 77.0870, discount: "Up to 50%" },
  { id: 14, name: "Akshaya Community Pharmacy - Varkala", district: "Thiruvananthapuram", address: "Varkala Town, Kerala 695141", phone: "+91 94470 00014", lat: 8.7320, lng: 76.7160, discount: "Up to 45%" },
  { id: 15, name: "Akshaya Community Pharmacy - Nedumangad", district: "Thiruvananthapuram", address: "Nedumangad Town, Kerala 695541", phone: "+91 94470 00015", lat: 8.6000, lng: 77.0010, discount: "Up to 40%" },
  { id: 16, name: "Akshaya Community Pharmacy - Vellayani", district: "Thiruvananthapuram", address: "Vellayani, Trivandrum, Kerala 695522", phone: "+91 94470 00016", lat: 8.4640, lng: 76.9720, discount: "Up to 55%" },
  { id: 17, name: "Akshaya Community Pharmacy - Nemom", district: "Thiruvananthapuram", address: "Nemom, Trivandrum, Kerala 695020", phone: "+91 94470 00017", lat: 8.4770, lng: 76.9450, discount: "Up to 50%" },

  // Alappuzha
  { id: 18, name: "Akshaya Community Pharmacy - Alappuzha Town", district: "Alappuzha", address: "Mullakkal Road, Alappuzha, Kerala 688001", phone: "+91 94470 00018", lat: 9.4981, lng: 76.3388, discount: "Up to 50%" },
  { id: 19, name: "Akshaya Community Pharmacy - Cherthala", district: "Alappuzha", address: "Cherthala Town, Kerala 688524", phone: "+91 94470 00019", lat: 9.6862, lng: 76.3386, discount: "Up to 45%" },
  { id: 20, name: "Akshaya Community Pharmacy - Kayamkulam", district: "Alappuzha", address: "Kayamkulam Town, Kerala 690502", phone: "+91 94470 00020", lat: 9.1741, lng: 76.5015, discount: "Up to 50%" },
  { id: 21, name: "Akshaya Community Pharmacy - Mavelikkara", district: "Alappuzha", address: "Mavelikkara Town, Kerala 690101", phone: "+91 94470 00021", lat: 9.2608, lng: 76.5486, discount: "Up to 55%" },
  { id: 22, name: "Akshaya Community Pharmacy - Haripad", district: "Alappuzha", address: "Haripad Town, Kerala 690514", phone: "+91 94470 00022", lat: 9.2336, lng: 76.4713, discount: "Up to 45%" },
  { id: 23, name: "Akshaya Community Pharmacy - Ambalapuzha", district: "Alappuzha", address: "Ambalapuzha, Kerala 688561", phone: "+91 94470 00023", lat: 9.3900, lng: 76.3600, discount: "Up to 40%" },
  { id: 24, name: "Akshaya Community Pharmacy - Karthikappally", district: "Alappuzha", address: "Karthikappally, Kerala 690516", phone: "+91 94470 00024", lat: 9.1960, lng: 76.5200, discount: "Up to 50%" },
];

export const districts = ["Kollam", "Thiruvananthapuram", "Alappuzha"] as const;

export function getStoresByDistrict(district: Store["district"]) {
  return stores.filter((s) => s.district === district);
}
