export interface StartUhrzeitEndeUhrzeit {
    startUhrzeit: string;
    endeUhrzeit: string;
}

export const intervallnummern = new Map<string, StartUhrzeitEndeUhrzeit>([
    // Block 1 - 00:00 - 06:00
    ["1", { startUhrzeit: "00:00", endeUhrzeit: "00:15" }],
    ["2", { startUhrzeit: "00:15", endeUhrzeit: "00:30" }],
    ["3", { startUhrzeit: "00:30", endeUhrzeit: "00:45" }],
    ["4", { startUhrzeit: "00:45", endeUhrzeit: "01:00" }],
    ["5", { startUhrzeit: "01:00", endeUhrzeit: "01:15" }],
    ["6", { startUhrzeit: "01:15", endeUhrzeit: "01:30" }],
    ["7", { startUhrzeit: "01:30", endeUhrzeit: "01:45" }],
    ["8", { startUhrzeit: "01:45", endeUhrzeit: "02:00" }],
    ["9", { startUhrzeit: "02:00", endeUhrzeit: "02:15" }],
    ["10", { startUhrzeit: "02:15", endeUhrzeit: "02:30" }],
    ["11", { startUhrzeit: "02:30", endeUhrzeit: "02:45" }],
    ["12", { startUhrzeit: "02:45", endeUhrzeit: "03:00" }],
    ["13", { startUhrzeit: "03:00", endeUhrzeit: "03:15" }],
    ["14", { startUhrzeit: "03:15", endeUhrzeit: "03:30" }],
    ["15", { startUhrzeit: "03:30", endeUhrzeit: "03:45" }],
    ["16", { startUhrzeit: "03:45", endeUhrzeit: "04:00" }],
    ["17", { startUhrzeit: "04:00", endeUhrzeit: "04:15" }],
    ["18", { startUhrzeit: "04:15", endeUhrzeit: "04:30" }],
    ["19", { startUhrzeit: "04:30", endeUhrzeit: "04:45" }],
    ["20", { startUhrzeit: "04:45", endeUhrzeit: "05:00" }],
    ["21", { startUhrzeit: "05:00", endeUhrzeit: "05:15" }],
    ["22", { startUhrzeit: "05:15", endeUhrzeit: "05:30" }],
    ["23", { startUhrzeit: "05:30", endeUhrzeit: "05:45" }],
    ["24", { startUhrzeit: "05:45", endeUhrzeit: "06:00" }],
    // Block 2 - 06:00 - 10:00
    ["25", { startUhrzeit: "06:00", endeUhrzeit: "06:15" }],
    ["26", { startUhrzeit: "06:15", endeUhrzeit: "06:30" }],
    ["27", { startUhrzeit: "06:30", endeUhrzeit: "06:45" }],
    ["28", { startUhrzeit: "06:45", endeUhrzeit: "07:00" }],
    ["29", { startUhrzeit: "07:00", endeUhrzeit: "07:15" }],
    ["30", { startUhrzeit: "07:15", endeUhrzeit: "07:30" }],
    ["31", { startUhrzeit: "07:30", endeUhrzeit: "07:45" }],
    ["32", { startUhrzeit: "07:45", endeUhrzeit: "08:00" }],
    ["33", { startUhrzeit: "08:00", endeUhrzeit: "08:15" }],
    ["34", { startUhrzeit: "08:15", endeUhrzeit: "08:30" }],
    ["35", { startUhrzeit: "08:30", endeUhrzeit: "08:45" }],
    ["36", { startUhrzeit: "08:45", endeUhrzeit: "09:00" }],
    ["37", { startUhrzeit: "09:00", endeUhrzeit: "09:15" }],
    ["38", { startUhrzeit: "09:15", endeUhrzeit: "09:30" }],
    ["39", { startUhrzeit: "09:30", endeUhrzeit: "09:45" }],
    ["40", { startUhrzeit: "09:45", endeUhrzeit: "10:00" }],
    // Block 3 - 10:00 - 15:00
    ["41", { startUhrzeit: "10:00", endeUhrzeit: "10:15" }],
    ["42", { startUhrzeit: "10:15", endeUhrzeit: "10:30" }],
    ["43", { startUhrzeit: "10:30", endeUhrzeit: "10:45" }],
    ["44", { startUhrzeit: "10:45", endeUhrzeit: "11:00" }],
    ["45", { startUhrzeit: "11:00", endeUhrzeit: "11:15" }],
    ["46", { startUhrzeit: "11:15", endeUhrzeit: "11:30" }],
    ["47", { startUhrzeit: "11:30", endeUhrzeit: "11:45" }],
    ["48", { startUhrzeit: "11:45", endeUhrzeit: "12:00" }],
    ["49", { startUhrzeit: "12:00", endeUhrzeit: "12:15" }],
    ["50", { startUhrzeit: "12:15", endeUhrzeit: "12:30" }],
    ["51", { startUhrzeit: "12:30", endeUhrzeit: "12:45" }],
    ["52", { startUhrzeit: "12:45", endeUhrzeit: "13:00" }],
    ["53", { startUhrzeit: "13:00", endeUhrzeit: "13:15" }],
    ["54", { startUhrzeit: "13:15", endeUhrzeit: "13:30" }],
    ["55", { startUhrzeit: "13:30", endeUhrzeit: "13:45" }],
    ["56", { startUhrzeit: "13:45", endeUhrzeit: "14:00" }],
    ["57", { startUhrzeit: "14:00", endeUhrzeit: "14:15" }],
    ["58", { startUhrzeit: "14:15", endeUhrzeit: "14:30" }],
    ["59", { startUhrzeit: "14:30", endeUhrzeit: "14:45" }],
    ["60", { startUhrzeit: "14:45", endeUhrzeit: "15:00" }],
    // Block 4 - 15:00 - 19:00
    ["61", { startUhrzeit: "15:00", endeUhrzeit: "15:15" }],
    ["62", { startUhrzeit: "15:15", endeUhrzeit: "15:30" }],
    ["63", { startUhrzeit: "15:30", endeUhrzeit: "15:45" }],
    ["64", { startUhrzeit: "15:45", endeUhrzeit: "16:00" }],
    ["65", { startUhrzeit: "16:00", endeUhrzeit: "16:15" }],
    ["66", { startUhrzeit: "16:15", endeUhrzeit: "16:30" }],
    ["67", { startUhrzeit: "16:30", endeUhrzeit: "16:45" }],
    ["68", { startUhrzeit: "16:45", endeUhrzeit: "17:00" }],
    ["69", { startUhrzeit: "17:00", endeUhrzeit: "17:15" }],
    ["70", { startUhrzeit: "17:15", endeUhrzeit: "17:30" }],
    ["71", { startUhrzeit: "17:30", endeUhrzeit: "17:45" }],
    ["72", { startUhrzeit: "17:45", endeUhrzeit: "18:00" }],
    ["73", { startUhrzeit: "18:00", endeUhrzeit: "18:15" }],
    ["74", { startUhrzeit: "18:15", endeUhrzeit: "18:30" }],
    ["75", { startUhrzeit: "18:30", endeUhrzeit: "18:45" }],
    ["76", { startUhrzeit: "18:45", endeUhrzeit: "19:00" }],
    // Block 5 - 19:00 - 24:00
    ["77", { startUhrzeit: "19:00", endeUhrzeit: "19:15" }],
    ["78", { startUhrzeit: "19:15", endeUhrzeit: "19:30" }],
    ["79", { startUhrzeit: "19:30", endeUhrzeit: "19:45" }],
    ["80", { startUhrzeit: "19:45", endeUhrzeit: "20:00" }],
    ["81", { startUhrzeit: "20:00", endeUhrzeit: "20:15" }],
    ["82", { startUhrzeit: "20:15", endeUhrzeit: "20:30" }],
    ["83", { startUhrzeit: "20:30", endeUhrzeit: "20:45" }],
    ["84", { startUhrzeit: "20:45", endeUhrzeit: "21:00" }],
    ["85", { startUhrzeit: "21:00", endeUhrzeit: "21:15" }],
    ["86", { startUhrzeit: "21:15", endeUhrzeit: "21:30" }],
    ["87", { startUhrzeit: "21:30", endeUhrzeit: "21:45" }],
    ["88", { startUhrzeit: "21:45", endeUhrzeit: "22:00" }],
    ["89", { startUhrzeit: "22:00", endeUhrzeit: "22:15" }],
    ["90", { startUhrzeit: "22:15", endeUhrzeit: "22:30" }],
    ["91", { startUhrzeit: "22:30", endeUhrzeit: "22:45" }],
    ["92", { startUhrzeit: "22:45", endeUhrzeit: "23:00" }],
    ["93", { startUhrzeit: "23:00", endeUhrzeit: "23:15" }],
    ["94", { startUhrzeit: "23:15", endeUhrzeit: "23:30" }],
    ["95", { startUhrzeit: "23:30", endeUhrzeit: "23:45" }],
    ["96", { startUhrzeit: "23:45", endeUhrzeit: "24:00" }],
]);
