const paymentStatusFor = (amountPaid, registrationFee) => {
  if (amountPaid === 0) return "Unpaid";
  if (amountPaid < registrationFee) return "Partial";
  return "Paid";
};

const registrations = [
  { id: 1, registrationNumber: "CS27-0001", registrationDate: "2027-02-10T08:30:00Z", participantName: "Juan Dela Cruz", contactNumber: "09171234501", email: "juan.delacruz@example.com", address: "Sorsogon City", carMakeModel: "Toyota Supra", plateNumber: "SOC 1001", registrationType: "Exhibitor", status: "Confirmed", registrationFee: 2500, amountPaid: 2500 },
  { id: 2, registrationNumber: "CS27-0002", registrationDate: "2027-02-10T09:15:00Z", participantName: "Maria Santos", contactNumber: "09171234502", email: "maria.santos@example.com", address: "Legazpi City", carMakeModel: "Honda Civic Type R", plateNumber: "LEG 1002", registrationType: "Competitor", status: "Confirmed", registrationFee: 3000, amountPaid: 1500 },
  { id: 3, registrationNumber: "CS27-0003", registrationDate: "2027-02-10T09:45:00Z", participantName: "Rafael Garcia", contactNumber: "09171234503", email: "rafael.garcia@example.com", address: "Naga City", carMakeModel: "Nissan Skyline GT-R", plateNumber: "NAG 1003", registrationType: "VIP", status: "Confirmed", registrationFee: 4000, amountPaid: 4000 },
  { id: 4, registrationNumber: "CS27-0004", registrationDate: "2027-02-10T10:20:00Z", participantName: "Ana Reyes", contactNumber: "09171234504", email: "ana.reyes@example.com", address: "Sorsogon City", carMakeModel: "Mazda MX-5", plateNumber: "SOC 1004", registrationType: "Exhibitor", status: "Confirmed", registrationFee: 2500, amountPaid: 0 },
  { id: 5, registrationNumber: "CS27-0005", registrationDate: "2027-02-10T10:50:00Z", participantName: "Carlos Mendoza", contactNumber: "09171234505", email: "carlos.mendoza@example.com", address: "Daraga, Albay", carMakeModel: "Toyota GR86", plateNumber: "ALB 1005", registrationType: "Competitor", status: "Confirmed", registrationFee: 3000, amountPaid: 3000 },
  { id: 6, registrationNumber: "CS27-0006", registrationDate: "2027-02-10T11:10:00Z", participantName: "Liza Villanueva", contactNumber: "09171234506", email: "liza.villanueva@example.com", address: "Iriga City", carMakeModel: "BMW M3", plateNumber: "CAM 1006", registrationType: "VIP", status: "Confirmed", registrationFee: 4000, amountPaid: 2000 },
  { id: 7, registrationNumber: "CS27-0007", registrationDate: "2027-02-10T11:35:00Z", participantName: "Miguel Flores", contactNumber: "09171234507", email: "miguel.flores@example.com", address: "Bulan, Sorsogon", carMakeModel: "Ford Mustang", plateNumber: "SOC 1007", registrationType: "Exhibitor", status: "Confirmed", registrationFee: 2500, amountPaid: 2500 },
  { id: 8, registrationNumber: "CS27-0008", registrationDate: "2027-02-10T12:05:00Z", participantName: "Patricia Gonzales", contactNumber: "09171234508", email: "patricia.gonzales@example.com", address: "Tabaco City", carMakeModel: "Subaru WRX STI", plateNumber: "ALB 1008", registrationType: "Competitor", status: "Confirmed", registrationFee: 3000, amountPaid: 1000 },
  { id: 9, registrationNumber: "CS27-0009", registrationDate: "2027-02-10T12:30:00Z", participantName: "Enrico Bautista", contactNumber: "09171234509", email: "enrico.bautista@example.com", address: "Naga City", carMakeModel: "Mitsubishi Lancer Evo", plateNumber: "CAM 1009", registrationType: "VIP", status: "Confirmed", registrationFee: 4000, amountPaid: 4000 },
  { id: 10, registrationNumber: "CS27-0010", registrationDate: "2027-02-10T13:00:00Z", participantName: "Jasmine Cruz", contactNumber: "09171234510", email: "jasmine.cruz@example.com", address: "Legazpi City", carMakeModel: "Volkswagen Golf GTI", plateNumber: "LEG 1010", registrationType: "Exhibitor", status: "Confirmed", registrationFee: 2500, amountPaid: 500 },
  { id: 11, registrationNumber: "CS27-0011", registrationDate: "2027-02-11T08:25:00Z", participantName: "Noel Ramirez", contactNumber: "09171234511", email: "noel.ramirez@example.com", address: "Sorsogon City", carMakeModel: "Toyota Celica", plateNumber: "SOC 1011", registrationType: "Competitor", status: "CheckedIn", registrationFee: 3000, amountPaid: 3000 },
  { id: 12, registrationNumber: "CS27-0012", registrationDate: "2027-02-11T08:55:00Z", participantName: "Camille Rivera", contactNumber: "09171234512", email: "camille.rivera@example.com", address: "Pilar, Sorsogon", carMakeModel: "Honda NSX", plateNumber: "SOC 1012", registrationType: "VIP", status: "CheckedIn", registrationFee: 4000, amountPaid: 4000 },
  { id: 13, registrationNumber: "CS27-0013", registrationDate: "2027-02-11T09:20:00Z", participantName: "Daniel Ortega", contactNumber: "09171234513", email: "daniel.ortega@example.com", address: "Daet, Camarines Norte", carMakeModel: "Hyundai Elantra N", plateNumber: "CN 1013", registrationType: "Exhibitor", status: "CheckedIn", registrationFee: 2500, amountPaid: 1250 },
  { id: 14, registrationNumber: "CS27-0014", registrationDate: "2027-02-11T09:50:00Z", participantName: "Bianca Navarro", contactNumber: "09171234514", email: "bianca.navarro@example.com", address: "Legazpi City", carMakeModel: "Audi S3", plateNumber: "LEG 1014", registrationType: "Competitor", status: "CheckedIn", registrationFee: 3000, amountPaid: 3000 },
  { id: 15, registrationNumber: "CS27-0015", registrationDate: "2027-02-11T10:15:00Z", participantName: "Gabriel Lim", contactNumber: "09171234515", email: "gabriel.lim@example.com", address: "Naga City", carMakeModel: "Mercedes-AMG A45", plateNumber: "NAG 1015", registrationType: "VIP", status: "CheckedIn", registrationFee: 4000, amountPaid: 3500 },
  { id: 16, registrationNumber: "CS27-0016", registrationDate: "2027-02-11T10:40:00Z", participantName: "Sofia Castillo", contactNumber: "09171234516", email: "sofia.castillo@example.com", address: "Gubat, Sorsogon", carMakeModel: "Mazda RX-7", plateNumber: "SOC 1016", registrationType: "Exhibitor", status: "CheckedIn", registrationFee: 2500, amountPaid: 2500 },
  { id: 17, registrationNumber: "CS27-0017", registrationDate: "2027-02-11T11:05:00Z", participantName: "Mark Aquino", contactNumber: "09171234517", email: "mark.aquino@example.com", address: "Iriga City", carMakeModel: "Nissan Silvia S15", plateNumber: "CAM 1017", registrationType: "Competitor", status: "Pending", registrationFee: 3000, amountPaid: 0 },
  { id: 18, registrationNumber: "CS27-0018", registrationDate: "2027-02-11T11:35:00Z", participantName: "Angela Torres", contactNumber: "09171234518", email: "angela.torres@example.com", address: "Sorsogon City", carMakeModel: "Toyota 86", plateNumber: "SOC 1018", registrationType: "VIP", status: "Pending", registrationFee: 4000, amountPaid: 1000 },
  { id: 19, registrationNumber: "CS27-0019", registrationDate: "2027-02-11T12:10:00Z", participantName: "Kevin Velasco", contactNumber: "09171234519", email: "kevin.velasco@example.com", address: "Virac, Catanduanes", carMakeModel: "Ford Fiesta ST", plateNumber: "CAT 1019", registrationType: "Exhibitor", status: "Pending", registrationFee: 2500, amountPaid: 2500 },
  { id: 20, registrationNumber: "CS27-0020", registrationDate: "2027-02-11T12:45:00Z", participantName: "Katrina Diaz", contactNumber: "09171234520", email: "katrina.diaz@example.com", address: "Tabaco City", carMakeModel: "Honda S2000", plateNumber: "ALB 1020", registrationType: "Competitor", status: "Pending", registrationFee: 3000, amountPaid: 1500 },
  { id: 21, registrationNumber: "CS27-0021", registrationDate: "2027-02-11T13:20:00Z", participantName: "Luis Fernandez", contactNumber: "09171234521", email: "luis.fernandez@example.com", address: "Naga City", carMakeModel: "Porsche 911", plateNumber: "NAG 1021", registrationType: "VIP", status: "Pending", registrationFee: 4000, amountPaid: 0 },
  { id: 22, registrationNumber: "CS27-0022", registrationDate: "2027-02-11T13:50:00Z", participantName: "Andrea Mercado", contactNumber: "09171234522", email: "andrea.mercado@example.com", address: "Legazpi City", carMakeModel: "Mini Cooper S", plateNumber: "LEG 1022", registrationType: "Exhibitor", status: "Pending", registrationFee: 2500, amountPaid: 1000 },
  { id: 23, registrationNumber: "CS27-0023", registrationDate: "2027-02-12T08:30:00Z", participantName: "Paolo Ramos", contactNumber: "09171234523", email: "paolo.ramos@example.com", address: "Sorsogon City", carMakeModel: "Chevrolet Camaro", plateNumber: "SOC 1023", registrationType: "Competitor", status: "Cancelled", registrationFee: 3000, amountPaid: 0 },
  { id: 24, registrationNumber: "CS27-0024", registrationDate: "2027-02-12T09:05:00Z", participantName: "Erika Pascual", contactNumber: "09171234524", email: "erika.pascual@example.com", address: "Donsol, Sorsogon", carMakeModel: "BMW Z4", plateNumber: "SOC 1024", registrationType: "VIP", status: "Cancelled", registrationFee: 4000, amountPaid: 2000 },
  { id: 25, registrationNumber: "CS27-0025", registrationDate: "2027-02-12T09:40:00Z", participantName: "Vincent Morales", contactNumber: "09171234525", email: "vincent.morales@example.com", address: "Panganiban, Catanduanes", carMakeModel: "Toyota MR2", plateNumber: "CAT 1025", registrationType: "Exhibitor", status: "Cancelled", registrationFee: 2500, amountPaid: 2500 },
];

export const REGISTRATIONS = registrations.map((registration) => ({
  ...registration,
  paymentStatus: paymentStatusFor(registration.amountPaid, registration.registrationFee),
}));

export async function getRegistrations({
  participantName = "",
  type = "",
  status = "",
  page = 1,
  pageSize = 10,
} = {}) {
  await new Promise((resolve) => setTimeout(resolve, 400));

  const normalizedName = participantName.trim().toLowerCase();
  const rows = REGISTRATIONS.filter((registration) =>
    (!normalizedName || registration.participantName.toLowerCase().includes(normalizedName)) &&
    (!type || registration.registrationType === type) &&
    (!status || registration.status === status)
  );

  const totalCount = rows.length;
  const safePage = Math.max(1, Number(page) || 1);
  const safePageSize = Math.max(1, Number(pageSize) || 10);
  const totalPages = Math.max(1, Math.ceil(totalCount / safePageSize));
  const start = (safePage - 1) * safePageSize;

  return {
    items: rows.slice(start, start + safePageSize),
    page: safePage,
    pageSize: safePageSize,
    totalCount,
    totalPages,
  };
}

export async function getSummary() {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const totalFees = REGISTRATIONS.reduce(
    (total, registration) => total + registration.registrationFee,
    0
  );
  const totalPayments = REGISTRATIONS.reduce(
    (total, registration) => total + registration.amountPaid,
    0
  );

  return {
    totalRegistrations: REGISTRATIONS.length,
    confirmed: REGISTRATIONS.filter((registration) => registration.status === "Confirmed").length,
    checkedIn: REGISTRATIONS.filter((registration) => registration.status === "CheckedIn").length,
    pending: REGISTRATIONS.filter((registration) => registration.status === "Pending").length,
    cancelled: REGISTRATIONS.filter((registration) => registration.status === "Cancelled").length,
    totalFees,
    totalPayments,
    uncollectedPayments: totalFees - totalPayments,
  };
}