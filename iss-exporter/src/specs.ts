export const specs: Spec[] = [
    {
        name: "AIRLOCK000001",
        category: "EVA",
        description: "Supplies power through the Umbilical Interface Assembly (UIA) to the spacesuits (EMU 1), Voltage",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000002",
        category: "EVA",
        description: "Supplies power through the Umbilical Interface Assembly (UIA) to the spacesuits (EMU 1), Current",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000003",
        category: "EVA",
        description: "Supplies power through the Umbilical Interface Assembly (UIA) to the spacesuits (EMU 2), Voltage",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000004",
        category: "EVA",
        description: "Supplies power through the Umbilical Interface Assembly (UIA) to the spacesuits (EMU 2), Current",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000005",
        category: "EVA",
        description: "In-flight Refill Unit (IRU), Voltage",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000006",
        category: "EVA",
        description: "In-flight Refill Unit (IRU), Current",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000007",
        category: "EVA",
        description: "Supplies power to the spacesuits (EVA Mobility Unit, EMU 1), Voltage",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000008",
        category: "EVA",
        description: "Supplies power to the spacesuits (EVA Mobility Unit, EMU 1), Current",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000009",
        category: "EVA",
        description: "Supplies power to the spacesuits (EVA Mobility Unit, EMU 2), Voltage",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000010",
        category: "EVA",
        description: "Supplies power to the spacesuits (EVA Mobility Unit, EMU 2), Current",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000011",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 1 Voltage",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000012",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 1 Current",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000013",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 2 Voltage",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000014",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 2 Current",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000015",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 3 Voltage",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000016",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 3 Current",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000017",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 4 Voltage",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000018",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 4 Current",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000019",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 1 Status",
        unit: null,
        parse(this: Spec, value) {
            return this.labels?.[value] || value;
        },
        format: "0=Normal|1=No Data|2=Missing Data|3=Extra Data",
        labels: {
            0: "Normal",
            1: "No Data",
            2: "Missing Data",
            3: "Extra Data"
        }
    },
    {
        name: "AIRLOCK000020",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 2 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Normal|1=No Data|2=Missing Data|3=Extra Data",
        labels: {
            0: "Normal",
            1: "No Data",
            2: "Missing Data",
            3: "Extra Data"
        }
    },
    {
        name: "AIRLOCK000021",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 3 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Normal|1=No Data|2=Missing Data|3=Extra Data",
        labels: {
            0: "Normal",
            1: "No Data",
            2: "Missing Data",
            3: "Extra Data"
        }
    },
    {
        name: "AIRLOCK000022",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 4 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Normal|1=No Data|2=Missing Data|3=Extra Data",
        labels: {
            0: "Normal",
            1: "No Data",
            2: "Missing Data",
            3: "Extra Data"
        }
    },
    {
        name: "AIRLOCK000023",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 1 Channel 1 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000024",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 1 Channel 2 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000025",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 1 Channel 3 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000026",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 1 Channel 4 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000027",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 1 Channel 5 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000028",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 1 Channel 6 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000029",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 2 Channel 1 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000030",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 2 Channel 2 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000031",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 2 Channel 3 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000032",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 2 Channel 4 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000033",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 2 Channel 5 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000034",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 2 Channel 6 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000035",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 3 Channel 1 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000036",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 3 Channel 2 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000037",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 3 Channel 3 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000038",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 3 Channel 4 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000039",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 3 Channel 5 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000040",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 3 Channel 6 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000041",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 4 Channel 1 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000042",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 4 Channel 2 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000043",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 4 Channel 3 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000044",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 4 Channel 4 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000045",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 4 Channel 5 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000046",
        category: "EVA",
        description: "Battery Charger Assembly (BCA) 4 Channel 6 Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=No History - a charge has not been initiated yet|1=Presently charging|2=Task completed normally|3=Task terminated due to stop switch being toggled|4=Task terminated due to an open circuit error|5=Task terminated due to Wrong Batt or Hi-imp|6=Task terminated due to an over-temperature error|7=Amp-hour capacity test result OK|8=Amp-hour capacity test error|9=Task terminated due to low charge slope error|10=Task terminated due to power error|11=Task terminated due to reverse-polarity error|12=Task terminated due to a short-circuit error|13=Task terminated due to a time-out error|14=Task terminated due to an external-temperature error|15=Discharge|16=Wait on Discharge|17=Wait on Charge",
        labels: {
            0: "No History - a charge has not been initiated yet",
            1: "Presently charging",
            2: "Task completed normally",
            3: "Task terminated due to stop switch being toggled",
            4: "Task terminated due to an open circuit error",
            5: "Task terminated due to Wrong Batt or Hi-imp",
            6: "Task terminated due to an over-temperature error",
            7: "Amp-hour capacity test result OK",
            8: "Amp-hour capacity test error",
            9: "Task terminated due to low charge slope error",
            10: "Task terminated due to power error",
            11: "Task terminated due to reverse-polarity error",
            12: "Task terminated due to a short-circuit error",
            13: "Task terminated due to a time-out error",
            14: "Task terminated due to an external-temperature error",
            15: "Discharge",
            16: "Wait on Discharge",
            17: "Wait on Charge"
        }
    },
    {
        name: "AIRLOCK000047",
        category: "EVA",
        description: "Pumps atmosphere from Airlock into Node one during depress, voltage status.",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "AIRLOCK000048",
        category: "EVA",
        description: "Pumps atmosphere from Airlock into Node one during depress, switch status.",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=PUMP OFF CMD|1=PUMP ON CMD",
        labels: {
            0: "PUMP OFF CMD",
            1: "PUMP ON CMD"
        }
    },
    {
        name: "AIRLOCK000049",
        category: "ETHOS",
        description: "Crewlock Pressure",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000050",
        category: "ETHOS",
        description: "Hi P O2 Supply valve position",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=CLOSED|1=OPEN|2=IN-TRANSIT|3=FAILED",
        labels: {
            0: "CLOSED",
            1: "OPEN",
            2: "IN-TRANSIT",
            3: "FAILED"
        }
    },
    {
        name: "AIRLOCK000051",
        category: "ETHOS",
        description: "Lo P O2 Supply Valve position",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=CLOSED|1=OPEN|2=IN-TRANSIT|3=FAILED",
        labels: {
            0: "CLOSED",
            1: "OPEN",
            2: "IN-TRANSIT",
            3: "FAILED"
        }
    },
    {
        name: "AIRLOCK000052",
        category: "ETHOS",
        description: "N2 Supply Valve position",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=CLOSED|1=OPEN|2=IN-TRANSIT|3=FAILED",
        labels: {
            0: "CLOSED",
            1: "OPEN",
            2: "IN-TRANSIT",
            3: "FAILED"
        }
    },
    {
        name: "AIRLOCK000053",
        category: "ETHOS",
        description: "Airlock Air Conditioner State",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=RESET|1=DRAIN|2=DRYOUT|3=EIB OFF|4=OFF|5=ON|6=STARTUP|7=TEST",
        labels: {
            0: "RESET",
            1: "DRAIN",
            2: "DRYOUT",
            3: "EIB OFF",
            4: "OFF",
            5: "ON",
            6: "STARTUP",
            7: "TEST"
        }
    },
    {
        name: "AIRLOCK000054",
        category: "ETHOS",
        description: "Airlock Pressure",
        unit: "PSI",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "AIRLOCK000055",
        category: "ETHOS",
        description: "Airlock Hi P O2 Tank Pressure",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "AIRLOCK000056",
        category: "ETHOS",
        description: "Airlock Lo P O2 Tank Pressure",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "AIRLOCK000057",
        category: "ETHOS",
        description: "Airlock N2 Tank Pressure",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "AIRLOCK000058",
        category: "CDH",
        description: "Airlock Multiplexer/Demultiplexer (MDM) on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "NODE1000001",
        category: "CDH",
        description: "Node 1 Multiplexer/Demultiplexer (MDM) 1 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "NODE1000002",
        category: "CDH",
        description: "Node 1 Multiplexer/Demultiplexer (MDM) 2 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "NODE2000001",
        category: "ETHOS",
        description: "Coolant water quantity (Node 2), MT",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "NODE2000002",
        category: "ETHOS",
        description: "Coolant water quantity (Node 2), LT",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "NODE2000003",
        category: "ETHOS",
        description: "Node 2 Air Conditioner State",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=RESET|1=DRAIN|2=DRYOUT|3=EIB OFF|4=OFF|5=ON|6=STARTUP|7=TEST",
        labels: {
            0: "RESET",
            1: "DRAIN",
            2: "DRYOUT",
            3: "EIB OFF",
            4: "OFF",
            5: "ON",
            6: "STARTUP",
            7: "TEST"
        }
    },
    {
        name: "NODE2000004",
        category: "CDH",
        description: "Node 2 Multiplexer/Demultiplexer (MDM) 2 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "NODE2000005",
        category: "CDH",
        description: "Node 2 Multiplexer/Demultiplexer (MDM) 1 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "NODE2000006",
        category: "ETHOS",
        description: "Air Cooling Fluid Temp (Node 2)",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "NODE2000007",
        category: "ETHOS",
        description: "Avionics Cooling Fluid Temp (Node 2)",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "NODE3000001",
        category: "ETHOS",
        description: "Node 3 ppO2",
        unit: "PSIA",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "NODE3000002",
        category: "ETHOS",
        description: "Node 3 ppN2",
        unit: "PSIA",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "NODE3000003",
        category: "ETHOS",
        description: "Node 3 ppCO2",
        unit: "PSIA",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "NODE3000004",
        category: "ETHOS",
        description: "Urine Processor State",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "2=STOP|4=SHUTDOWN|8=MAINTENANCE|16=NORMAL|32=STANDBY|64=IDLE|128=SYSTEM INITIALIZED",
        labels: {
            2: "STOP",
            4: "SHUTDOWN",
            8: "MAINTENANCE",
            16: "NORMAL",
            32: "STANDBY",
            64: "IDLE",
            128: "SYSTEM INITIALIZED"
        }
    },
    {
        name: "NODE3000005",
        category: "ETHOS",
        description: "Urine Tank Qty",
        unit: "PCT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "NODE3000006",
        category: "ETHOS",
        description: "Water Processor State",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "1=STOP|2=SHUTDOWN|3=STANDBY|4=PROCESS|5=HOT SERVICE|6=FLUSH|7=WARM SHUTDOWN",
        labels: {
            1: "STOP",
            2: "SHUTDOWN",
            3: "STANDBY",
            4: "PROCESS",
            5: "HOT SERVICE",
            6: "FLUSH",
            7: "WARM SHUTDOWN"
        }
    },
    {
        name: "NODE3000007",
        category: "ETHOS",
        description: "Water Processor Step",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=NONE|1=VENT|2=HEATUP|3=PURGE|4=FLOW|5=TEST|6=TEST_SV_1|7=TEST_SV_2|8=SERVICE",
        labels: {
            0: "NONE",
            1: "VENT",
            2: "HEATUP",
            3: "PURGE",
            4: "FLOW",
            5: "TEST",
            6: "TEST_SV_1",
            7: "TEST_SV_2",
            8: "SERVICE"
        }
    },
    {
        name: "NODE3000008",
        category: "ETHOS",
        description: "Waste Water Tank Qty",
        unit: "PCT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "NODE3000009",
        category: "ETHOS",
        description: "Clean Water Tank Qty",
        unit: "PCT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "NODE3000010",
        category: "ETHOS",
        description: "Oxygen Generator State",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "1=PROCESS|2=STANDBY|3=SHUTDOWN|4=STOP|5=VENT_DOME|6=INERT_DOME|7=FAST_SHUTDOWN|8=N2_PURGE_SHUTDOWN",
        labels: {
            1: "PROCESS",
            2: "STANDBY",
            3: "SHUTDOWN",
            4: "STOP",
            5: "VENT_DOME",
            6: "INERT_DOME",
            7: "FAST_SHUTDOWN",
            8: "N2_PURGE_SHUTDOWN"
        }
    },
    {
        name: "NODE3000011",
        category: "ETHOS",
        description: "O2 Production rate",
        unit: "LBM/D",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "NODE3000012",
        category: "ETHOS",
        description: "Avionics Cooling Fluid Temp (Node 3)",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "NODE3000013",
        category: "ETHOS",
        description: "Air Cooling Fluid Temp (Node 3)",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "NODE3000014",
        category: "CDH",
        description: "Hub Control Zone (HCZ) Multiplexer/Demultiplexer 2 (MDM) on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "NODE3000015",
        category: "CDH",
        description: "Node 3 Multiplexer/Demultiplexer (MDM) 2 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "NODE3000016",
        category: "CDH",
        description: "Hub Control Zone (HCZ) Multiplexer/Demultiplexer 1 (MDM) on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "NODE3000017",
        category: "ETHOS",
        description: "Coolant water quantity (Node 3)",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "NODE3000018",
        category: "ETHOS",
        description: "Node 3 Air Conditioner State",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=RESET|1=DRAIN|2=DRYOUT|3=EIB OFF|4=OFF|5=ON|6=STARTUP|7=TEST",
        labels: {
            0: "RESET",
            1: "DRAIN",
            2: "DRYOUT",
            3: "EIB OFF",
            4: "OFF",
            5: "ON",
            6: "STARTUP",
            7: "TEST"
        }
    },
    {
        name: "NODE3000019",
        category: "ETHOS",
        description: "Coolant water quantity (Node 3)",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "NODE3000020",
        category: "CDH",
        description: "Node 3 Multiplexer/Demultiplexer (MDM) 1 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "P1000001",
        category: "SPARTAN",
        description: "Loop B Pump Flowrate (kg/hr)",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "P1000002",
        category: "SPARTAN",
        description: "Loop B PM Out Press (kPa)",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "P1000003",
        category: "SPARTAN",
        description: "Loop B PM Out Temp (deg C)",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "P1000004",
        category: "CATO",
        description: "S-Band Radio Frequency Group (RFG 2) Azimuth Gimbal Position",
        unit: "DEG",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "P1000005",
        category: "CATO",
        description: "S-Band Radio Frequency Group (RFG 2) Elevation Gimbal Position",
        unit: "DEG",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "P1000006",
        category: "CDH",
        description: "P1 Truss Multiplexer/Demultiplexer (MDM) 1 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "P1000007",
        category: "CATO",
        description: "S-Band Radio Frequency Group (RFG 2), on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "P1000008",
        category: "CDH",
        description: "Port Thermal Radiator (STR) Multiplexer/Demultiplexer (MDM) on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "P1000009",
        category: "CDH",
        description: "P1 Truss Multiplexer/Demultiplexer (MDM) 2 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "P3000001",
        category: "CDH",
        description: "P3 Truss Multiplexer/Demultiplexer (MDM) 1 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "P3000002",
        category: "CDH",
        description: "P3 Truss Multiplexer/Demultiplexer (MDM) 2 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "P4000001",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 2A - Drive Voltage",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "P4000002",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 2A - Drive Current",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "P4000003",
        category: "CDH",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 2A Multiplexer/Demultiplexer (MDM) 120 Volt On-Off Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Not Enabled|1=Enabled",
        labels: {
            0: "Not Enabled",
            1: "Enabled"
        }
    },
    {
        name: "P4000004",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - ¥Solar Array - 4A - Drive Voltage",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "P4000005",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 4A - Drive Current",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "P4000006",
        category: "CDH",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 4A Multiplexer/Demultiplexer (MDM) 120 Volt On-Off Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Not Enabled|1=Enabled",
        labels: {
            0: "Not Enabled",
            1: "Enabled"
        }
    },
    {
        name: "P4000007",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 2A - Beta Gimble Assembly (BGA) Position (degrees)",
        unit: "DEG",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "P4000008",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 4A - Beta Gimble Assembly (BGA) Position (degrees)",
        unit: "DEG",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "P6000001",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 4B - Drive Voltage",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "P6000002",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 4B - Drive Current",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "P6000003",
        category: "CDH",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 4B Multiplexer/Demultiplexer (MDM) 120 Volt On-Off Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Not Enabled|1=Enabled",
        labels: {
            0: "Not Enabled",
            1: "Enabled"
        }
    },
    {
        name: "P6000004",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 2B - Drive Voltage",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "P6000005",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 2B - Drive Current",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "P6000006",
        category: "CDH",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 2B Multiplexer/Demultiplexer (MDM) 120 Volt On-Off Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Not Enabled|1=Enabled",
        labels: {
            0: "Not Enabled",
            1: "Enabled"
        }
    },
    {
        name: "P6000007",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 4B - Beta Gimble Assembly (BGA) Position (degrees)",
        unit: "DEG",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "P6000008",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 2B - Beta Gimble Assembly (BGA) Position (degrees)",
        unit: "DEG",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "RUSSEG000001",
        category: "VVO",
        description: "Russian Segment Station Mode - Service Module (SM)",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "1=Crew Rescue|2=Survival|3=Reboost|4=Proximity Operations|5=EVA|6=Microgravity|7=Standard",
        labels: {
            1: "Crew Rescue",
            2: "Survival",
            3: "Reboost",
            4: "Proximity Operations",
            5: "EVA",
            6: "Microgravity",
            7: "Standard"
        }
    },
    {
        name: "RUSSEG000002",
        category: "VVO",
        description: "First Kurs Equipment Kit Operating",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undetermined State|1=SM KURS Equipment Set1 Operating-RS",
        labels: {
            0: "Undetermined State",
            1: "SM KURS Equipment Set1 Operating-RS"
        }
    },
    {
        name: "RUSSEG000003",
        category: "VVO",
        description: "Second Kurs Equipment Kit Operating",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undetermined State|1=SM KURS Equipment Set2 Operating-RS",
        labels: {
            0: "Undetermined State",
            1: "SM KURS Equipment Set2 Operating-RS"
        }
    },
    {
        name: "RUSSEG000004",
        category: "VVO",
        description: "Service Module Kurs P1, P2 Failure - Russian Segment",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undeterminated State|1=SM KURS P1, P2 Failure-RS",
        labels: {
            0: "Undeterminated State",
            1: "SM KURS P1, P2 Failure-RS"
        }
    },
    {
        name: "RUSSEG000005",
        category: "VVO",
        description: "Distance from Service Module (SM) Kurs (Range)",
        unit: "M",
        parse: Number,
        format: "{0:d0}",
    },
    {
        name: "RUSSEG000006",
        category: "VVO",
        description: "Rate from Service Module (SM) Kurs (Range Rate)",
        unit: "M/S",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "RUSSEG000007",
        category: "VVO",
        description: "Service Module (SM) Kurs-P Test Mode - Russian Segment",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undetermined State|1=SM KURS-P Test Mode-RS",
        labels: {
            0: "Undetermined State",
            1: "SM KURS-P Test Mode-RS"
        }
    },
    {
        name: "RUSSEG000008",
        category: "VVO",
        description: "Service Module (SM) Kurs-P 'Capture' Signal Availability",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undetermined State|1=SM KURS-P Capture Signal -RS",
        labels: {
            0: "Undetermined State",
            1: "SM KURS-P Capture Signal -RS"
        }
    },
    {
        name: "RUSSEG000009",
        category: "VVO",
        description: "Service Module (SM) Kurs-P Target Acquisition Signal - Russian Segment",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undetermined State|1=SM KURS-P Target Acquisition Signal-RS",
        labels: {
            0: "Undetermined State",
            1: "SM KURS-P Target Acquisition Signal-RS"
        }
    },
    {
        name: "RUSSEG000010",
        category: "VVO",
        description: "Service Module (SM) Kurs-P Functional Mode Signal - Russian Segment",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undetermined State|1=SM KURS-P Functional Mode Signal-RS",
        labels: {
            0: "Undetermined State",
            1: "SM KURS-P Functional Mode Signal-RS"
        }
    },
    {
        name: "RUSSEG000011",
        category: "VVO",
        description: "Service Module (SM) Kurs-P Standby Mode - Russian Segment",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undetermined State|1=SM KURS-P In Standby Mode-RS",
        labels: {
            0: "Undetermined State",
            1: "SM KURS-P In Standby Mode-RS"
        }
    },
    {
        name: "RUSSEG000012",
        category: "VVO",
        description: "Service Module Docking Flag",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undetermined State|1=SM Docking Flag-RS",
        labels: {
            0: "Undetermined State",
            1: "SM Docking Flag-RS"
        }
    },
    {
        name: "RUSSEG000013",
        category: "VVO",
        description: "Service Module (SM) Forward Docking Port Engaged",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undetermined State|1=SM Docking Port Engaged from Xfer Side-RS",
        labels: {
            0: "Undetermined State",
            1: "SM Docking Port Engaged from Xfer Side-RS"
        }
    },
    {
        name: "RUSSEG000014",
        category: "VVO",
        description: "Service Module (SM) Aft Docking Port Engaged",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undetermined State|1=SM Docking Port Engaged from Instr Compartment Side-RS",
        labels: {
            0: "Undetermined State",
            1: "SM Docking Port Engaged from Instr Compartment Side-RS"
        }
    },
    {
        name: "RUSSEG000015",
        category: "VVO",
        description: "Service Module (SM) Nadir (Down-looking) Docking Port Engaged - Along Y-Axis",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undetermined State|1=SM Docking Port Engaged Below (along SM -Y Axis)-RS",
        labels: {
            0: "Undetermined State",
            1: "SM Docking Port Engaged Below (along SM -Y Axis)-RS"
        }
    },
    {
        name: "RUSSEG000016",
        category: "VVO",
        description: "Functional Cargo Block (FGB) Nadir (Down-looking) Docking Port Engaged - Along Y-Axis",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undetermined State|1=FGB Bottom Docking Port Engaged (along SM -Y Axis)-RS",
        labels: {
            0: "Undetermined State",
            1: "FGB Bottom Docking Port Engaged (along SM -Y Axis)-RS"
        }
    },
    {
        name: "RUSSEG000017",
        category: "VVO",
        description: "Service Module (SM) Nadir (Down-looking) Universal Docking Module (UDM) Docking Port Engaged - Along Y-Axis",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undetermined State|1=SM Bottom UDM Docking Port Engaged (along SM -Y Axis)-RS",
        labels: {
            0: "Undetermined State",
            1: "SM Bottom UDM Docking Port Engaged (along SM -Y Axis)-RS"
        }
    },
    {
        name: "RUSSEG000018",
        category: "VVO",
        description: "Mini Research Module (MRM) 1 Docking Port Engaged - Russian Segment",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undetermined State|1=MRM1 Docking Port Engaged-RS",
        labels: {
            0: "Undetermined State",
            1: "MRM1 Docking Port Engaged-RS"
        }
    },
    {
        name: "RUSSEG000019",
        category: "VVO",
        description: "Mini Research Module (MRM) 2 Docking Port Engaged - Russian Segment",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undetermined State|1=MRM2 Docking Port Engaged-RS",
        labels: {
            0: "Undetermined State",
            1: "MRM2 Docking Port Engaged-RS"
        }
    },
    {
        name: "RUSSEG000020",
        category: "VVO",
        description: "Service Module - Docked Vehicle Hooks Closed - Russian Segment",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undetermined State|1=Docked Vehicle Hooks Closed-RS",
        labels: {
            0: "Undetermined State",
            1: "Docked Vehicle Hooks Closed-RS"
        }
    },
    {
        name: "RUSSEG000021",
        category: "VVO",
        description: "Service Module - Russian Guidance, Navigation, and Control - Active Attitude Mode - Russian Segment",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Inertial Attitude|1=LVLH SM|2=Solar Orientation|3=Current LVLH|4=Current Inertial Attitude|5=Damping|6=TEA|7=X-POP",
        labels: {
            0: "Inertial Attitude",
            1: "LVLH SM",
            2: "Solar Orientation",
            3: "Current LVLH",
            4: "Current Inertial Attitude",
            5: "Damping",
            6: "TEA",
            7: "X-POP"
        }
    },
    {
        name: "RUSSEG000022",
        category: "VVO",
        description: "Service Module - Russian Guidance, Navigation, and Control - Motion Control - Russian Segment",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undetermined State|1=SM SUDN Controls the Motion (RS master)-RS",
        labels: {
            0: "Undetermined State",
            1: "SM SUDN Controls the Motion (RS master)-RS"
        }
    },
    {
        name: "RUSSEG000023",
        category: "VVO",
        description: "Service Module - Russian Guidance, Navigation, and Control - Prepared to Free Drift Mode Transition - Russian Segment",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Undetermined State|1=SM SUDN Prepared to Free Drift Mode Transition-RS",
        labels: {
            0: "Undetermined State",
            1: "SM SUDN Prepared to Free Drift Mode Transition-RS"
        }
    },
    {
        name: "RUSSEG000024",
        category: "VVO",
        description: "Service Module - Russian Guidance, Navigation, and Control - Thruster Operation Mode Terminated - Russian Segment",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Pre-Starting Procedure Or Thruster Operation Readiness|1=Thruster Operation Mode is Terminated",
        labels: {
            0: "Pre-Starting Procedure Or Thruster Operation Readiness",
            1: "Thruster Operation Mode is Terminated"
        }
    },
    {
        name: "RUSSEG000025",
        category: "ADCO/VVO",
        description: "Service Module - Russian Guidance, Navigation, and Control - Current Dynamic Mode - Russian Segment",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=0 - Reserv|1=1 - Thrusters|2=2 - Gyrodines|3=3 - Gyrodines with Desaturation on American Method|4=4 - Gyrodines with Desaturation on Russian Method|5=5 - Translational Thrusters Operating|6=6 - Thrusters help CMG (desaturate CMG)|7=7 - Free Drift Mode",
        labels: {
            0: "0 - Reserv",
            1: "1 - Thrusters",
            2: "2 - Gyrodines",
            3: "3 - Gyrodines with Desaturation on American Method",
            4: "4 - Gyrodines with Desaturation on Russian Method",
            5: "5 - Translational Thrusters Operating",
            6: "6 - Thrusters help CMG (desaturate CMG)",
            7: "7 - Free Drift Mode"
        }
    },
    {
        name: "S0000001",
        category: "SPARTAN/VVO",
        description: "Starboard Thermal Radiator Rotating Joint (TRRJ) Position (degrees)",
        unit: "DEG",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "S0000002",
        category: "SPARTAN/VVO",
        description: "Port Thermal Radiator Rotating Joint (TRRJ) Position (degrees)",
        unit: "DEG",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "S0000003",
        category: "SPARTAN/VVO",
        description: "Solar Alpha Rotary Joint (SARJ) Starboard Joint Angle Position (degrees)",
        unit: "DEG",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "S0000004",
        category: "SPARTAN/VVO",
        description: "Solar Alpha Rotary Joint (SARJ) Port Joint Angle Position (degrees)",
        unit: "DEG",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "S0000005",
        category: "VVO",
        description: "Solar Alpha Rotary Joint (SARJ) Port Joint Angle Commanded Position (degrees)",
        unit: "DEG",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "S0000006",
        category: "VVO",
        description: "External Thermal Control System (ETCS) - Thermal Radiator Rotating Joint (TRRJ) - Loop B - Software mode",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "1=STANDBY|2=RESTART|3=CHECKOUT|4=DIRECTED_POSITION|5=AUTOTRACK|6=BLIND|7=SHUTDOWN|8=SWITCHOVER",
        labels: {
            1: "STANDBY",
            2: "RESTART",
            3: "CHECKOUT",
            4: "DIRECTED_POSITION",
            5: "AUTOTRACK",
            6: "BLIND",
            7: "SHUTDOWN",
            8: "SWITCHOVER"
        }
    },
    {
        name: "S0000007",
        category: "VVO",
        description: "External Thermal Control System (ETCS) - Thermal Radiator Rotating Joint (TRRJ) - Loop A - Software mode",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "1=STANDBY|2=RESTART|3=CHECKOUT|4=DIRECTED_POSITION|5=AUTOTRACK|6=BLIND|7=SHUTDOWN|8=SWITCHOVER",
        labels: {
            1: "STANDBY",
            2: "RESTART",
            3: "CHECKOUT",
            4: "DIRECTED_POSITION",
            5: "AUTOTRACK",
            6: "BLIND",
            7: "SHUTDOWN",
            8: "SWITCHOVER"
        }
    },
    {
        name: "S0000008",
        category: "VVO",
        description: "External Primary Solar Alpha Rotary Joint (SARJ) Port Mode",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "1=STANDBY|2=RESTART|3=CHECKOUT|4=DIRECTED_POSITION|5=AUTOTRACK|6=BLIND|7=SHUTDOWN|8=SWITCHOVER",
        labels: {
            1: "STANDBY",
            2: "RESTART",
            3: "CHECKOUT",
            4: "DIRECTED_POSITION",
            5: "AUTOTRACK",
            6: "BLIND",
            7: "SHUTDOWN",
            8: "SWITCHOVER"
        }
    },
    {
        name: "S0000009",
        category: "VVO",
        description: "External Primary Solar Alpha Rotary Joint (SARJ) Starboard Mode",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "1=STANDBY|2=RESTART|3=CHECKOUT|4=DIRECTED_POSITION|5=AUTOTRACK|6=BLIND|7=SHUTDOWN|8=SWITCHOVER",
        labels: {
            1: "STANDBY",
            2: "RESTART",
            3: "CHECKOUT",
            4: "DIRECTED_POSITION",
            5: "AUTOTRACK",
            6: "BLIND",
            7: "SHUTDOWN",
            8: "SWITCHOVER"
        }
    },
    {
        name: "S0000010",
        category: "CDH",
        description: "External Control Zone Multiplexer/Demultiplexer (MDM) 1 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "S0000011",
        category: "CDH",
        description: "S0 Truss Multiplexer/Demultiplexer (MDM) 1 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "S0000012",
        category: "CDH",
        description: "External Control Zone Multiplexer/Demultiplexer (MDM) 2 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "S0000013",
        category: "CDH",
        description: "S0 Truss Multiplexer/Demultiplexer (MDM) 2 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "S1000001",
        category: "SPARTAN",
        description: "Loop A Pump Flowrate (kg/hr)",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "S1000002",
        category: "SPARTAN",
        description: "Loop A PM Out Press (kPa)",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "S1000003",
        category: "SPARTAN",
        description: "Loop A PM Out Temp (deg C)",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "S1000004",
        category: "CATO",
        description: "S-Band Radio Frequency Group (RFG 1) Azimuth Gimbal Position",
        unit: "DEG",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "S1000005",
        category: "CATO/VVO",
        description: "S-Band Radio Frequency Group (RFG 1) Elevation Gimbal Position",
        unit: "DEG",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "S1000006",
        category: "CDH",
        description: "Starboard Thermal Radiator (STR) Multiplexer/Demultiplexer (MDM) on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "S1000007",
        category: "CDH",
        description: "S1 Truss Multiplexer/Demultiplexer (MDM) 1 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "S1000008",
        category: "CDH",
        description: "S1 Truss Multiplexer/Demultiplexer (MDM) 2 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "S1000009",
        category: "CATO",
        description: "S-Band Radio Frequency Group (RFG 1), on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "S3000001",
        category: "CDH",
        description: "S3 Truss Multiplexer/Demultiplexer (MDM) 1 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "S3000002",
        category: "CDH",
        description: "S3 Truss Multiplexer/Demultiplexer (MDM) 2 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "S4000001",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 1A - Drive Voltage",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "S4000002",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 1A - Drive Current",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "S4000003",
        category: "CDH",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 1A Multiplexer/Demultiplexer (MDM) 120 Volt On-Off Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Not Enabled|1=Enabled",
        labels: {
            0: "Not Enabled",
            1: "Enabled"
        }
    },
    {
        name: "S4000004",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 3B - Drive Voltage",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "S4000005",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 3B - Drive Current",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "S4000006",
        category: "CDH",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 3A Multiplexer/Demultiplexer (MDM) 120 Volt On-Off Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Not Enabled|1=Enabled",
        labels: {
            0: "Not Enabled",
            1: "Enabled"
        }
    },
    {
        name: "S4000007",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 1A - Beta Gimble Assembly (BGA) Position (degrees)",
        unit: "DEG",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "S4000008",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 3A - Beta Gimble Assembly (BGA) Position (degrees)",
        unit: "DEG",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "S6000001",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 3B - Drive Voltage",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "S6000002",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 3B - Drive Current",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "S6000003",
        category: "CDH",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 3B Multiplexer/Demultiplexer (MDM) 120 Volt On-Off Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Not Enabled|1=Enabled",
        labels: {
            0: "Not Enabled",
            1: "Enabled"
        }
    },
    {
        name: "S6000004",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 1B - Drive Voltage",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "S6000005",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 1B - Drive Current",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "S6000006",
        category: "CDH",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 1B Multiplexer/Demultiplexer (MDM) 120 Volt On-Off Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Not Enabled|1=Enabled",
        labels: {
            0: "Not Enabled",
            1: "Enabled"
        }
    },
    {
        name: "S6000007",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 3B - Beta Gimble Assembly (BGA) Position (degrees)",
        unit: "DEG",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "S6000008",
        category: "SPARTAN",
        description: "Photovolatic Control Unit (PVCU) - Solar Array - 1B - Beta Gimble Assembly (BGA) Position (degrees)",
        unit: "DEG",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "TIME_000001",
        category: null,
        description: "Greenwich Mean Time (GMT)",
        unit: "MS",
        parse(value) {
            return value
        },
        format: "%mT"
    },
    {
        name: "TIME_000002",
        category: null,
        description: "Year",
        unit: "YR",
        parse: Number,
        format: "{0:d0}",
    },
    {
        name: "USLAB000001",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG)-1 On-Line",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=NOT IN USE|1=IN USE",
        labels: {
            0: "NOT IN USE",
            1: "IN USE"
        }
    },
    {
        name: "USLAB000002",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG)-2 On-Line",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=NOT IN USE|1=IN USE",
        labels: {
            0: "NOT IN USE",
            1: "IN USE"
        }
    },
    {
        name: "USLAB000003",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG)-3 On-Line",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=NOT IN USE|1=IN USE",
        labels: {
            0: "NOT IN USE",
            1: "IN USE"
        }
    },
    {
        name: "USLAB000004",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG)-4 On-Line",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=NOT IN USE|1=IN USE",
        labels: {
            0: "NOT IN USE",
            1: "IN USE"
        }
    },
    {
        name: "USLAB000005",
        category: "ADCO",
        description: "Number of Control Moment Gyroscope (CMG)s Online",
        unit: "ND",
        parse: Number,
        format: "{0:d0}",
    },
    {
        name: "USLAB000006",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG) Control Torque - Roll (N-m)",
        unit: "FT-LB",
        parse: Number,
        format: "{0:f4}",
    },
    {
        name: "USLAB000007",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG) Control Torque - Pitch (N-m)",
        unit: "FT-LB",
        parse: Number,
        format: "{0:f4}",
    },
    {
        name: "USLAB000008",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG) Control Torque - Yaw (N-m)",
        unit: "FT-LB",
        parse: Number,
        format: "{0:f4}",
    },
    {
        name: "USLAB000009",
        category: "ADCO",
        description: "Active Control Moment Gyroscope (CMG) Momentum (Nms)",
        unit: "FT-LB-S",
        parse: Number,
        format: "{0:d0}",
    },
    {
        name: "USLAB000010",
        category: "ADCO/VVO",
        description: "Control Moment Gyroscope (CMG) Momentum Percentage (%)",
        unit: "PCT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "USLAB000011",
        category: "ADCO",
        description: "Desaturation Request (Enabled/Inhibited)",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=ENABLED|1=INHIBITED",
        labels: {
            0: "ENABLED",
            1: "INHIBITED"
        }
    },
    {
        name: "USLAB000012",
        category: "ADCO/VVO",
        description: "US Guidance, Navigation and Control (GNC) Mode",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Default|1=WAIT|2=RESERVED|3=STANDBY|4=CMG ATTITUDE CONTROL|5=CMG/THRUSTER ASSIST ATTITUDE CONTROL|6=USER DATA GENERATION|7=FREEDRIFT",
        labels: {
            0: "Default",
            1: "WAIT",
            2: "RESERVED",
            3: "STANDBY",
            4: "CMG ATTITUDE CONTROL",
            5: "CMG/THRUSTER ASSIST ATTITUDE CONTROL",
            6: "USER DATA GENERATION",
            7: "FREEDRIFT"
        }
    },
    {
        name: "USLAB000013",
        category: "ADCO",
        description: "US Attitude Source",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=NONE|1=GPS1|2=GPS2|3=Russian_Attitude|4=Ku_Band",
        labels: {
            0: "NONE",
            1: "GPS1",
            2: "GPS2",
            3: "Russian_Attitude",
            4: "Ku_Band"
        }
    },
    {
        name: "USLAB000014",
        category: "ADCO",
        description: "US Rate Source",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=NONE|1=RGA1|2=RGA2|3=RUSSIAN",
        labels: {
            0: "NONE",
            1: "RGA1",
            2: "RGA2",
            3: "RUSSIAN"
        }
    },
    {
        name: "USLAB000015",
        category: "ADCO",
        description: "US State Vector Source",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=NO_SOURCE|1=Unused|2=Unused|3=RUSSIAN|4=GPS1_DETERMINISTIC|5=GPS2_DETERMINISTIC|6=GROUND",
        labels: {
            0: "NO_SOURCE",
            1: "Unused",
            2: "Unused",
            3: "RUSSIAN",
            4: "GPS1_DETERMINISTIC",
            5: "GPS2_DETERMINISTIC",
            6: "GROUND"
        }
    },
    {
        name: "USLAB000016",
        category: "ADCO",
        description: "Attitude Controller Type",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=ATTITUDE HOLD|1=TEA",
        labels: {
            0: "ATTITUDE HOLD",
            1: "TEA"
        }
    },
    {
        name: "USLAB000017",
        category: "ADCO",
        description: "Attitude Control Reference Frame",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=LVLH|1=Inertial|2=XPOP",
        labels: {
            0: "LVLH",
            1: "Inertial",
            2: "XPOP"
        }
    },
    {
        name: "USLAB000018",
        category: "ADCO",
        description: "US Current Local Vertical Local Horizontal (LVLH) Attitude Quaternion Component 0",
        unit: "ND",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "USLAB000019",
        category: "ADCO",
        description: "US Current Local Vertical Local Horizontal (LVLH) Attitude Quaternion Component 1",
        unit: "ND",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "USLAB000020",
        category: "ADCO",
        description: "US Current Local Vertical Local Horizontal (LVLH) Attitude Quaternion Component 2",
        unit: "ND",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "USLAB000021",
        category: "ADCO",
        description: "US Current Local Vertical Local Horizontal (LVLH) Attitude Quaternion Component 3",
        unit: "ND",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "USLAB000022",
        category: "ADCO",
        description: "US Attitude Roll Error (deg)",
        unit: "RAD",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "USLAB000023",
        category: "ADCO",
        description: "US Attitude Pitch Error (deg)",
        unit: "RAD",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "USLAB000024",
        category: "ADCO",
        description: "US Attitude Yaw Error (deg)",
        unit: "RAD",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "USLAB000025",
        category: "ADCO",
        description: "US Inertial Attitude Rate X (deg/s)",
        unit: "RAD/S",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "USLAB000026",
        category: "ADCO",
        description: "US Inertial Attitude Rate Y (deg/s)",
        unit: "RAD/S",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "USLAB000027",
        category: "ADCO",
        description: "US Inertial Attitude Rate Z (deg/s)",
        unit: "RAD/S",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "USLAB000028",
        category: "ADCO",
        description: "US Commanded Attitude Quaternion Component 0",
        unit: "ND",
        parse: Number,
        format: "{0:f6}",
    },
    {
        name: "USLAB000029",
        category: "ADCO",
        description: "US Commanded Attitude Quaternion Component 1",
        unit: "ND",
        parse: Number,
        format: "{0:f6}",
    },
    {
        name: "USLAB000030",
        category: "ADCO",
        description: "US Commanded Attitude Quaternion Component 2",
        unit: "ND",
        parse: Number,
        format: "{0:f6}",
    },
    {
        name: "USLAB000031",
        category: "ADCO",
        description: "US Commanded Attitude Quaternion Component 3",
        unit: "ND",
        parse: Number,
        format: "{0:f6}",
    },
    {
        name: "USLAB000032",
        category: "ADCO/TOPO",
        description: "US Guidance, Navigation and Control (GNC) J2000 Propagated State Vector - X (km)",
        unit: "FT",
        parse: Number,
        format: "{0:f9}",
    },
    {
        name: "USLAB000033",
        category: "ADCO/TOPO",
        description: "US Guidance, Navigation and Control (GNC) J2000 Propagated State Vector - Y (km)",
        unit: "FT",
        parse: Number,
        format: "{0:f9}",
    },
    {
        name: "USLAB000034",
        category: "ADCO/TOPO",
        description: "US Guidance, Navigation and Control (GNC) J2000 Propagated State Vector - Z (km)",
        unit: "FT",
        parse: Number,
        format: "{0:f9}",
    },
    {
        name: "USLAB000035",
        category: "ADCO/TOPO",
        description: "US Guidance, Navigation and Control (GNC) J2000 Propagated State Vector - X (m/s)",
        unit: "FT/S",
        parse: Number,
        format: "{0:f9}",
    },
    {
        name: "USLAB000036",
        category: "ADCO/TOPO",
        description: "US Guidance, Navigation and Control (GNC) J2000 Propagated State Vector - Y (m/s)",
        unit: "FT/S",
        parse: Number,
        format: "{0:f9}",
    },
    {
        name: "USLAB000037",
        category: "ADCO/TOPO",
        description: "US Guidance, Navigation and Control (GNC) J2000 Propagated State Vector - Z (m/s)",
        unit: "FT/S",
        parse: Number,
        format: "{0:f9}",
    },
    {
        name: "USLAB000038",
        category: "ADCO",
        description: "Active Control Moment Gyroscope (CMG) Momentum Capacity (Nms)",
        unit: "FT-LB-S",
        parse: Number,
        format: "{0:d0}",
    },
    {
        name: "USLAB000039",
        category: "ADCO",
        description: "ISS Total Mass (kg)",
        unit: "KG",
        parse: Number,
        format: "{0:d0}",
    },
    {
        name: "USLAB000040",
        category: "ADCO",
        description: "Solar Beta Angle (degrees)",
        unit: "DEG",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "USLAB000041",
        category: "ADCO",
        description: "Loss of CMG Attitude Control (LOAC) Caution Message In Alarm",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=FALSE|1=TRUE",
        labels: {
            0: "FALSE",
            1: "TRUE"
        }
    },
    {
        name: "USLAB000042",
        category: "ADCO",
        description: "Loss of ISS Attitude Control (LOAC) Caution Message In Alarm",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=FALSE|1=TRUE",
        labels: {
            0: "FALSE",
            1: "TRUE"
        }
    },
    {
        name: "USLAB000043",
        category: "ADCO",
        description: "Global Positioning System (GPS-1) Ops Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=DOING POSITION FIXES|1=SV TIMING|2=APPROXIMATE TIMING|3=GPS TIME|4=NEED INITIALIZATION|5=GDOP NEEDED|6=BAD TIMING|7=NO USABLE SV|8=ONLY 1 USABLE SVs|9=ONLY 2 USABLE SVs|10=ONLY 3 USABLE SVs|11=BAD INTEGRITY|12=NO VEL AVAIL|13=UNUSABLE FIX",
        labels: {
            0: "DOING POSITION FIXES",
            1: "SV TIMING",
            2: "APPROXIMATE TIMING",
            3: "GPS TIME",
            4: "NEED INITIALIZATION",
            5: "GDOP NEEDED",
            6: "BAD TIMING",
            7: "NO USABLE SV",
            8: "ONLY 1 USABLE SVs",
            9: "ONLY 2 USABLE SVs",
            10: "ONLY 3 USABLE SVs",
            11: "BAD INTEGRITY",
            12: "NO VEL AVAIL",
            13: "UNUSABLE FIX"
        }
    },
    {
        name: "USLAB000044",
        category: "ADCO",
        description: "Global Positioning System (GPS-2) Ops Status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=DOING POSITION FIXES|1=SV TIMING|2=APPROXIMATE TIMING|3=GPS TIME|4=NEED INITIALIZATION|5=GDOP NEEDED|6=BAD TIMING|7=NO USABLE SV|8=ONLY 1 USABLE SVs|9=ONLY 2 USABLE SVs|10=ONLY 3 USABLE SVs|11=BAD INTEGRITY|12=NO VEL AVAIL|13=UNUSABLE FIX",
        labels: {
            0: "DOING POSITION FIXES",
            1: "SV TIMING",
            2: "APPROXIMATE TIMING",
            3: "GPS TIME",
            4: "NEED INITIALIZATION",
            5: "GDOP NEEDED",
            6: "BAD TIMING",
            7: "NO USABLE SV",
            8: "ONLY 1 USABLE SVs",
            9: "ONLY 2 USABLE SVs",
            10: "ONLY 3 USABLE SVs",
            11: "BAD INTEGRITY",
            12: "NO VEL AVAIL",
            13: "UNUSABLE FIX"
        }
    },
    {
        name: "USLAB000045",
        category: "ADCO",
        description: "Spin Motor Spin Bearing Temperature - Control Moment Gyroscope (CMG) 1 (deg C)",
        unit: "DEGF",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "USLAB000046",
        category: "ADCO",
        description: "Spin Motor Spin Bearing Temperature - Control Moment Gyroscope (CMG) 2 (deg C)",
        unit: "DEGF",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "USLAB000047",
        category: "ADCO",
        description: "Spin Motor Spin Bearing Temperature - Control Moment Gyroscope (CMG) 3 (deg C)",
        unit: "DEGF",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "USLAB000048",
        category: "ADCO",
        description: "Spin Motor Spin Bearing Temperature - Control Moment Gyroscope (CMG) 4 (deg C)",
        unit: "DEGF",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "USLAB000049",
        category: "ADCO",
        description: "Hall Resolver Spin Bearing Temperature - Control Moment Gyroscope (CMG) 1 (deg C)",
        unit: "DEGF",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "USLAB000050",
        category: "ADCO",
        description: "Hall Resolver Spin Bearing Temperature - Control Moment Gyroscope (CMG) 2 (deg C)",
        unit: "DEGF",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "USLAB000051",
        category: "ADCO",
        description: "Hall Resolver Spin Bearing Temperature - Control Moment Gyroscope (CMG) 3 (deg C)",
        unit: "DEGF",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "USLAB000052",
        category: "ADCO",
        description: "Hall Resolver Spin Bearing Temperature - Control Moment Gyroscope (CMG) 4 (deg C)",
        unit: "DEGF",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "USLAB000053",
        category: "ETHOS",
        description: "Lab ppO2",
        unit: "PSIA",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "USLAB000054",
        category: "ETHOS",
        description: "Lab ppN2",
        unit: "PSIA",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "USLAB000055",
        category: "ETHOS",
        description: "Lab ppCO2",
        unit: "PSIA",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "USLAB000056",
        category: "ETHOS",
        description: "Coolant water quantity, LT (Lab)",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "USLAB000057",
        category: "ETHOS",
        description: "Coolant water quantity, MT (Lab)",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "USLAB000058",
        category: "ETHOS",
        description: "Cabin pressure",
        unit: "PSI",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "USLAB000059",
        category: "ETHOS",
        description: "Cabin temperature",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "USLAB000060",
        category: "ETHOS",
        description: "Avionics Cooling Fluid Temp (Lab)",
        unit: "CNT",
        parse: Number,
        format: "{0:f1}",
    },
    {
        name: "USLAB000061",
        category: "ETHOS",
        description: "Air Cooling Fluid Temp (Lab)",
        unit: "CNT",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "USLAB000062",
        category: "ETHOS",
        description: "Vacuum Resource System Valve Position",
        unit: "CNT",
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=FAIL|1=OPEN|2=CLSD|3=TRNS",
        labels: {
            0: "FAIL",
            1: "OPEN",
            2: "CLSD",
            3: "TRNS"
        }
    },
    {
        name: "USLAB000063",
        category: "ETHOS",
        description: "Vacuum Exhaust System Valve Position",
        unit: "CNT",
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=FAIL|1=OPEN|2=CLSD|3=TRNS",
        labels: {
            0: "FAIL",
            1: "OPEN",
            2: "CLSD",
            3: "TRNS"
        }
    },
    {
        name: "USLAB000064",
        category: "ETHOS",
        description: "Lab Port Air Conditioner State",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=RESET|1=DRAIN|2=DRYOUT|3=EIB OFF|4=OFF|5=ON|6=STARTUP|7=TEST",
        labels: {
            0: "RESET",
            1: "DRAIN",
            2: "DRYOUT",
            3: "EIB OFF",
            4: "OFF",
            5: "ON",
            6: "STARTUP",
            7: "TEST"
        }
    },
    {
        name: "USLAB000065",
        category: "ETHOS",
        description: "Lab Starboard Air Conditioner State",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=RESET|1=DRAIN|2=DRYOUT|3=EIB OFF|4=OFF|5=ON|6=STARTUP|7=TEST",
        labels: {
            0: "RESET",
            1: "DRAIN",
            2: "DRYOUT",
            3: "EIB OFF",
            4: "OFF",
            5: "ON",
            6: "STARTUP",
            7: "TEST"
        }
    },
    {
        name: "USLAB000066",
        category: "CDH",
        description: "Command and Control (C&C) Multiplexer/Demultiplexer (MDM) 1 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "USLAB000067",
        category: "CDH",
        description: "Command and Control (C&C) Multiplexer/Demultiplexer (MDM) 2 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "USLAB000068",
        category: "CDH",
        description: "Command and Control (C&C) Multiplexer/Demultiplexer (MDM) 3 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "USLAB000069",
        category: "CDH",
        description: "Internal Control Zone Multiplexer/Demultiplexer (MDM) 1 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "USLAB000070",
        category: "CDH",
        description: "Internal Control Zone Multiplexer/Demultiplexer (MDM) 2 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "USLAB000071",
        category: "CDH",
        description: "Payload (PL) Multiplexer/Demultiplexer (MDM) 1 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "USLAB000072",
        category: "CDH",
        description: "Payload (PL) Multiplexer/Demultiplexer (MDM) 2 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "USLAB000073",
        category: "CDH",
        description: "Guidance, Navigation and Control (GNC) Multiplexer/Demultiplexer 1 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "USLAB000074",
        category: "CDH",
        description: "Guidance, Navigation and Control (GNC) Multiplexer/Demultiplexer 2 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "USLAB000075",
        category: "CDH",
        description: "Power Mangement Controller Unit (PMCU) 1 Multiplexer/Demultiplexer 1 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "USLAB000076",
        category: "CDH",
        description: "Power Mangement Controller Unit (PMCU) 2 Multiplexer/Demultiplexer 1 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "USLAB000077",
        category: "CDH",
        description: "US Lab Multiplexer/Demultiplexer (MDM) 1 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "USLAB000078",
        category: "CDH",
        description: "US Lab Multiplexer/Demultiplexer (MDM) 2 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "USLAB000079",
        category: "CDH",
        description: "US Lab Multiplexer/Demultiplexer (MDM) 3 on-off status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "USLAB000080",
        category: "CDH",
        description: "Permanent Multipurpose Module - System Power voltage status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "USLAB000081",
        category: "VVO",
        description: "Attitude Maneuver In Progress status",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=FALSE|1=TRUE",
        labels: {
            0: "FALSE",
            1: "TRUE"
        }
    },
    {
        name: "USLAB000082",
        category: "ODIN",
        description: "Standard Command Counter - Count of standard commands received by the ISS Command and Control Computer",
        unit: "INTEGR",
        parse: Number,
        format: "{0:d0}",
    },
    {
        name: "USLAB000083",
        category: "ODIN",
        description: "Data Load Command Counter - Count of data load commands received by the ISS Command and Control Computer",
        unit: "INTEGR",
        parse: Number,
        format: "{0:d0}",
    },
    {
        name: "USLAB000084",
        category: "ODIN",
        description: "ISS Command and Control Multiplexer/Demultiplexer Onboard Time (course)",
        unit: "S",
        parse(value) {
            return value
        },
        format: "%sT"
    },
    {
        name: "USLAB000085",
        category: "ODIN",
        description: "ISS Command and Control Multiplexer/Demultiplexer Onboard Time (fine)",
        unit: "S",
        parse: Number,
        format: "{0:f7}",
    },
    {
        name: "USLAB000086",
        category: "ODIN/VVO",
        description: "ISS Station Mode",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "1=Standard|2=Microgravity|4=Reboost|8=Proximity_Ops|16=External_Ops|32=Survival|64=ASCR|127=all_modes",
        labels: {
            1: "Standard",
            2: "Microgravity",
            4: "Reboost",
            8: "Proximity_Ops",
            16: "External_Ops",
            32: "Survival",
            64: "ASCR",
            127: "all_modes"
        }
    },
    {
        name: "USLAB000087",
        category: "ODIN",
        description: "# Laptops active and connected to the Primary Command and Control (C&C) Multiplexer/Demultiplexer (MDM)",
        unit: "INTEGR",
        parse: Number,
        format: "{0:d0}",
    },
    {
        name: "USLAB000088",
        category: "CATO",
        description: "Ku-Band Video Downlink Channel 1 Activity",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=INACTIVE|1=ACTIVE",
        labels: {
            0: "INACTIVE",
            1: "ACTIVE"
        }
    },
    {
        name: "USLAB000089",
        category: "CATO",
        description: "Ku-Band Video Downlink Channel 2 Activity",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=INACTIVE|1=ACTIVE",
        labels: {
            0: "INACTIVE",
            1: "ACTIVE"
        }
    },
    {
        name: "USLAB000090",
        category: "CATO",
        description: "Ku-Band Video Downlink Channel 3 Activity",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=INACTIVE|1=ACTIVE",
        labels: {
            0: "INACTIVE",
            1: "ACTIVE"
        }
    },
    {
        name: "USLAB000091",
        category: "CATO",
        description: "Ku-Band Video Downlink Channel 4 Activity",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=INACTIVE|1=ACTIVE",
        labels: {
            0: "INACTIVE",
            1: "ACTIVE"
        }
    },
    {
        name: "USLAB000092",
        category: "CATO",
        description: "Active String of S-Band",
        unit: "INTEGR",
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "1=String 1|2=String 2",
        labels: {
            1: "String 1",
            2: "String 2"
        }
    },
    {
        name: "USLAB000093",
        category: "CATO",
        description: "Internal Audio Controller (IAC) - IAC-1 Active/Backup Indication",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Backup|1=Active",
        labels: {
            0: "Backup",
            1: "Active"
        }
    },
    {
        name: "USLAB000094",
        category: "CATO",
        description: "Internal Audio Controller (IAC) - IAC-2 Active/Backup Indication",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Backup|1=Active",
        labels: {
            0: "Backup",
            1: "Active"
        }
    },
    {
        name: "USLAB000095",
        category: "CATO",
        description: "Video Source Routed to Downlink 1",
        unit: "INTEGR",
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0= -|1=S3AFT|2=S1UPOB|3=SCU1 Mux|4=S1LOOB|5=JPM a|6=JPM b|7=S1UPIB|8=S1LOIB|9=COL 1|10=COL 2|11=P1UPIB|12=SCU2 Mux|13=NOD3S|14=P1LOIB|15=SCU1 Test|16=WETA112|17=ORB1|18=ORB2|19=P1LOOB|20=SCU2 Test|21=P3AFT|22=Payload Rack|23=VTR1|24=VTR2|25=NOD2LO|26=WETA115|28=LAB S|31=POA PL3|32=POA|33=SPDMS1|34=SPDMS2|35=MBS CLPA|36=SPDMLEE|37=MAST|40=BLEE|43=BELB|48=TELB|50=MSS PL3|51=TLEE|52=Lab AVU1|53=Lab AVU2|54=Cup AVU1|55=Cup AVU2|56=OTCM1|57=BODY1|58=OTCM2|59=BODY2|60=SSRMS PL1|61=SSRMS PL2|62=SSRMS PL3|63=MSS PL1|64=MSS PL2|65=LAB1D3|66=LAB1P2|67=LAB1P4|68=LABCAM|69=LAB1O5|70=LAB1O4|71=LAB1O3|72=LAB1O2|73=LAB1O1|74=LAB1S1|75=LAB1S2|76=LAB1S3|77=A/L CAM|78=LAB1S4|79=N1 CAM|80=N3 CAM",
        labels: {
            0: " -",
            1: "S3AFT",
            2: "S1UPOB",
            3: "SCU1 Mux",
            4: "S1LOOB",
            5: "JPM a",
            6: "JPM b",
            7: "S1UPIB",
            8: "S1LOIB",
            9: "COL 1",
            10: "COL 2",
            11: "P1UPIB",
            12: "SCU2 Mux",
            13: "NOD3S",
            14: "P1LOIB",
            15: "SCU1 Test",
            16: "WETA112",
            17: "ORB1",
            18: "ORB2",
            19: "P1LOOB",
            20: "SCU2 Test",
            21: "P3AFT",
            22: "Payload Rack",
            23: "VTR1",
            24: "VTR2",
            25: "NOD2LO",
            26: "WETA115",
            28: "LAB S",
            31: "POA PL3",
            32: "POA",
            33: "SPDMS1",
            34: "SPDMS2",
            35: "MBS CLPA",
            36: "SPDMLEE",
            37: "MAST",
            40: "BLEE",
            43: "BELB",
            48: "TELB",
            50: "MSS PL3",
            51: "TLEE",
            52: "Lab AVU1",
            53: "Lab AVU2",
            54: "Cup AVU1",
            55: "Cup AVU2",
            56: "OTCM1",
            57: "BODY1",
            58: "OTCM2",
            59: "BODY2",
            60: "SSRMS PL1",
            61: "SSRMS PL2",
            62: "SSRMS PL3",
            63: "MSS PL1",
            64: "MSS PL2",
            65: "LAB1D3",
            66: "LAB1P2",
            67: "LAB1P4",
            68: "LABCAM",
            69: "LAB1O5",
            70: "LAB1O4",
            71: "LAB1O3",
            72: "LAB1O2",
            73: "LAB1O1",
            74: "LAB1S1",
            75: "LAB1S2",
            76: "LAB1S3",
            77: "A/L CAM",
            78: "LAB1S4",
            79: "N1 CAM",
            80: "N3 CAM"
        }
    },
    {
        name: "USLAB000096",
        category: "CATO",
        description: "Video Source Routed to Downlink 2",
        unit: "INTEGR",
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0= -|1=S3AFT|2=S1UPOB|3=SCU1 Mux|4=S1LOOB|5=JPM a|6=JPM b|7=S1UPIB|8=S1LOIB|9=COL 1|10=COL 2|11=P1UPIB|12=SCU2 Mux|13=NOD3S|14=P1LOIB|15=SCU1 Test|16=WETA112|17=ORB1|18=ORB2|19=P1LOOB|20=SCU2 Test|21=P3AFT|22=Payload Rack|23=VTR1|24=VTR2|25=NOD2LO|26=WETA115|28=LAB S|31=POA PL3|32=POA|33=SPDMS1|34=SPDMS2|35=MBS CLPA|36=SPDMLEE|37=MAST|40=BLEE|43=BELB|48=TELB|50=MSS PL3|51=TLEE|52=Lab AVU1|53=Lab AVU2|54=Cup AVU1|55=Cup AVU2|56=OTCM1|57=BODY1|58=OTCM2|59=BODY2|60=SSRMS PL1|61=SSRMS PL2|62=SSRMS PL3|63=MSS PL1|64=MSS PL2|65=LAB1D3|66=LAB1P2|67=LAB1P4|68=LABCAM|69=LAB1O5|70=LAB1O4|71=LAB1O3|72=LAB1O2|73=LAB1O1|74=LAB1S1|75=LAB1S2|76=LAB1S3|77=A/L CAM|78=LAB1S4|79=N1 CAM|80=N3 CAM",
        labels: {
            0: " -",
            1: "S3AFT",
            2: "S1UPOB",
            3: "SCU1 Mux",
            4: "S1LOOB",
            5: "JPM a",
            6: "JPM b",
            7: "S1UPIB",
            8: "S1LOIB",
            9: "COL 1",
            10: "COL 2",
            11: "P1UPIB",
            12: "SCU2 Mux",
            13: "NOD3S",
            14: "P1LOIB",
            15: "SCU1 Test",
            16: "WETA112",
            17: "ORB1",
            18: "ORB2",
            19: "P1LOOB",
            20: "SCU2 Test",
            21: "P3AFT",
            22: "Payload Rack",
            23: "VTR1",
            24: "VTR2",
            25: "NOD2LO",
            26: "WETA115",
            28: "LAB S",
            31: "POA PL3",
            32: "POA",
            33: "SPDMS1",
            34: "SPDMS2",
            35: "MBS CLPA",
            36: "SPDMLEE",
            37: "MAST",
            40: "BLEE",
            43: "BELB",
            48: "TELB",
            50: "MSS PL3",
            51: "TLEE",
            52: "Lab AVU1",
            53: "Lab AVU2",
            54: "Cup AVU1",
            55: "Cup AVU2",
            56: "OTCM1",
            57: "BODY1",
            58: "OTCM2",
            59: "BODY2",
            60: "SSRMS PL1",
            61: "SSRMS PL2",
            62: "SSRMS PL3",
            63: "MSS PL1",
            64: "MSS PL2",
            65: "LAB1D3",
            66: "LAB1P2",
            67: "LAB1P4",
            68: "LABCAM",
            69: "LAB1O5",
            70: "LAB1O4",
            71: "LAB1O3",
            72: "LAB1O2",
            73: "LAB1O1",
            74: "LAB1S1",
            75: "LAB1S2",
            76: "LAB1S3",
            77: "A/L CAM",
            78: "LAB1S4",
            79: "N1 CAM",
            80: "N3 CAM"
        }
    },
    {
        name: "USLAB000097",
        category: "CATO",
        description: "Video Source Routed to Downlink 3",
        unit: "INTEGR",
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0= -|1=S3AFT|2=S1UPOB|3=SCU1 Mux|4=S1LOOB|5=JPM a|6=JPM b|7=S1UPIB|8=S1LOIB|9=COL 1|10=COL 2|11=P1UPIB|12=SCU2 Mux|13=NOD3S|14=P1LOIB|15=SCU1 Test|16=WETA112|17=ORB1|18=ORB2|19=P1LOOB|20=SCU2 Test|21=P3AFT|22=Payload Rack|23=VTR1|24=VTR2|25=NOD2LO|26=WETA115|28=LAB S|31=POA PL3|32=POA|33=SPDMS1|34=SPDMS2|35=MBS CLPA|36=SPDMLEE|37=MAST|40=BLEE|43=BELB|48=TELB|50=MSS PL3|51=TLEE|52=Lab AVU1|53=Lab AVU2|54=Cup AVU1|55=Cup AVU2|56=OTCM1|57=BODY1|58=OTCM2|59=BODY2|60=SSRMS PL1|61=SSRMS PL2|62=SSRMS PL3|63=MSS PL1|64=MSS PL2|65=LAB1D3|66=LAB1P2|67=LAB1P4|68=LABCAM|69=LAB1O5|70=LAB1O4|71=LAB1O3|72=LAB1O2|73=LAB1O1|74=LAB1S1|75=LAB1S2|76=LAB1S3|77=A/L CAM|78=LAB1S4|79=N1 CAM|80=N3 CAM",
        labels: {
            0: " -",
            1: "S3AFT",
            2: "S1UPOB",
            3: "SCU1 Mux",
            4: "S1LOOB",
            5: "JPM a",
            6: "JPM b",
            7: "S1UPIB",
            8: "S1LOIB",
            9: "COL 1",
            10: "COL 2",
            11: "P1UPIB",
            12: "SCU2 Mux",
            13: "NOD3S",
            14: "P1LOIB",
            15: "SCU1 Test",
            16: "WETA112",
            17: "ORB1",
            18: "ORB2",
            19: "P1LOOB",
            20: "SCU2 Test",
            21: "P3AFT",
            22: "Payload Rack",
            23: "VTR1",
            24: "VTR2",
            25: "NOD2LO",
            26: "WETA115",
            28: "LAB S",
            31: "POA PL3",
            32: "POA",
            33: "SPDMS1",
            34: "SPDMS2",
            35: "MBS CLPA",
            36: "SPDMLEE",
            37: "MAST",
            40: "BLEE",
            43: "BELB",
            48: "TELB",
            50: "MSS PL3",
            51: "TLEE",
            52: "Lab AVU1",
            53: "Lab AVU2",
            54: "Cup AVU1",
            55: "Cup AVU2",
            56: "OTCM1",
            57: "BODY1",
            58: "OTCM2",
            59: "BODY2",
            60: "SSRMS PL1",
            61: "SSRMS PL2",
            62: "SSRMS PL3",
            63: "MSS PL1",
            64: "MSS PL2",
            65: "LAB1D3",
            66: "LAB1P2",
            67: "LAB1P4",
            68: "LABCAM",
            69: "LAB1O5",
            70: "LAB1O4",
            71: "LAB1O3",
            72: "LAB1O2",
            73: "LAB1O1",
            74: "LAB1S1",
            75: "LAB1S2",
            76: "LAB1S3",
            77: "A/L CAM",
            78: "LAB1S4",
            79: "N1 CAM",
            80: "N3 CAM"
        }
    },
    {
        name: "USLAB000098",
        category: "CATO",
        description: "Video Source Routed to Downlink 4",
        unit: "INTEGR",
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0= -|1=S3AFT|2=S1UPOB|3=SCU1 Mux|4=S1LOOB|5=JPM a|6=JPM b|7=S1UPIB|8=S1LOIB|9=COL 1|10=COL 2|11=P1UPIB|12=SCU2 Mux|13=NOD3S|14=P1LOIB|15=SCU1 Test|16=WETA112|17=ORB1|18=ORB2|19=P1LOOB|20=SCU2 Test|21=P3AFT|22=Payload Rack|23=VTR1|24=VTR2|25=NOD2LO|26=WETA115|28=LAB S|31=POA PL3|32=POA|33=SPDMS1|34=SPDMS2|35=MBS CLPA|36=SPDMLEE|37=MAST|40=BLEE|43=BELB|48=TELB|50=MSS PL3|51=TLEE|52=Lab AVU1|53=Lab AVU2|54=Cup AVU1|55=Cup AVU2|56=OTCM1|57=BODY1|58=OTCM2|59=BODY2|60=SSRMS PL1|61=SSRMS PL2|62=SSRMS PL3|63=MSS PL1|64=MSS PL2|65=LAB1D3|66=LAB1P2|67=LAB1P4|68=LABCAM|69=LAB1O5|70=LAB1O4|71=LAB1O3|72=LAB1O2|73=LAB1O1|74=LAB1S1|75=LAB1S2|76=LAB1S3|77=A/L CAM|78=LAB1S4|79=N1 CAM|80=N3 CAM",
        labels: {
            0: " -",
            1: "S3AFT",
            2: "S1UPOB",
            3: "SCU1 Mux",
            4: "S1LOOB",
            5: "JPM a",
            6: "JPM b",
            7: "S1UPIB",
            8: "S1LOIB",
            9: "COL 1",
            10: "COL 2",
            11: "P1UPIB",
            12: "SCU2 Mux",
            13: "NOD3S",
            14: "P1LOIB",
            15: "SCU1 Test",
            16: "WETA112",
            17: "ORB1",
            18: "ORB2",
            19: "P1LOOB",
            20: "SCU2 Test",
            21: "P3AFT",
            22: "Payload Rack",
            23: "VTR1",
            24: "VTR2",
            25: "NOD2LO",
            26: "WETA115",
            28: "LAB S",
            31: "POA PL3",
            32: "POA",
            33: "SPDMS1",
            34: "SPDMS2",
            35: "MBS CLPA",
            36: "SPDMLEE",
            37: "MAST",
            40: "BLEE",
            43: "BELB",
            48: "TELB",
            50: "MSS PL3",
            51: "TLEE",
            52: "Lab AVU1",
            53: "Lab AVU2",
            54: "Cup AVU1",
            55: "Cup AVU2",
            56: "OTCM1",
            57: "BODY1",
            58: "OTCM2",
            59: "BODY2",
            60: "SSRMS PL1",
            61: "SSRMS PL2",
            62: "SSRMS PL3",
            63: "MSS PL1",
            64: "MSS PL2",
            65: "LAB1D3",
            66: "LAB1P2",
            67: "LAB1P4",
            68: "LABCAM",
            69: "LAB1O5",
            70: "LAB1O4",
            71: "LAB1O3",
            72: "LAB1O2",
            73: "LAB1O1",
            74: "LAB1S1",
            75: "LAB1S2",
            76: "LAB1S3",
            77: "A/L CAM",
            78: "LAB1S4",
            79: "N1 CAM",
            80: "N3 CAM"
        }
    },
    {
        name: "USLAB000099",
        category: "CATO",
        description: "Space-To-Space Radio (UHF) 1 Power",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "USLAB000100",
        category: "CATO",
        description: "Space-To-Space Radio (UHF) 2 Power",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Off-Ok|1=Not-Off Ok|3=Not-Off Failed",
        labels: {
            0: "Off-Ok",
            1: "Not-Off Ok",
            3: "Not-Off Failed"
        }
    },
    {
        name: "USLAB000101",
        category: "CATO",
        description: "Space-To-Space Radio Frame Sync Lock",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Frame Sync unlocked|1=Frame Sync locked",
        labels: {
            0: "Frame Sync unlocked",
            1: "Frame Sync locked"
        }
    },
    {
        name: "USLAB000102",
        category: "TOPO",
        description: "State vector time tag",
        unit: "S",
        parse(value) {
            return value
        },
        format: "%sT"
    },
    {
        name: "Z1000001",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG)-1 Vibration (g)",
        unit: "G",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "Z1000002",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG)-2 Vibration (g)",
        unit: "G",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "Z1000003",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG)-3 Vibration (g)",
        unit: "G",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "Z1000004",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG)-4 Vibration (g)",
        unit: "G",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "Z1000005",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG)-1 Spin Motor Current (amps)",
        unit: "AMP",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "Z1000006",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG)-2 Spin Motor Current (amps)",
        unit: "AMP",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "Z1000007",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG)-3 Spin Motor Current (amps)",
        unit: "AMP",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "Z1000008",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG)-4 Spin Motor Current (amps)",
        unit: "AMP",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "Z1000009",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG) 1 Wheel Speed (rpm)",
        unit: "RPM",
        parse: Number,
        format: "{0:d0}",
    },
    {
        name: "Z1000010",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG) 2 Wheel Speed (rpm)",
        unit: "RPM",
        parse: Number,
        format: "{0:d0}",
    },
    {
        name: "Z1000011",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG) 3 Wheel Speed (rpm)",
        unit: "RPM",
        parse: Number,
        format: "{0:d0}",
    },
    {
        name: "Z1000012",
        category: "ADCO",
        description: "Control Moment Gyroscope (CMG) 4 Wheel Speed (rpm)",
        unit: "RPM",
        parse: Number,
        format: "{0:d0}",
    },
    {
        name: "Z1000013",
        category: "CATO",
        description: "Ku-Band Transmit",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=RESET|1=NORMAL",
        labels: {
            0: "RESET",
            1: "NORMAL"
        }
    },
    {
        name: "Z1000014",
        category: "CATO",
        description: "Ku-Band SGANT Elevation Position",
        unit: "DEG",
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "Z1000015",
        category: "CATO",
        description: "Ku-Band SGANT Cross-Elevation Position",
        unit: null,
        parse: Number,
        format: "{0:f2}",
    },
    {
        name: "CSAMT000001",
        category: "CSA",
        description: "MSS MT Position Float",
        unit: "cm",
        parse: Number,
        format: "Position, centimeters from 0",
    },
    {
        name: "CSAMT000002",
        category: "CSA",
        description: "MSS MT Utility Port ID (which Worksite MT is connected to, WS1 though WS8)",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "1=WS1 | 2=WS2 | 3=WS3 | 4=WS4 | 5=WS5 | 6=WS6 |7=WS7 |8=WS8",
        labels: {
            1: "WS1",
            2: "WS2",
            3: "WS3",
            4: "WS4",
            5: "WS5",
            6: "WS6",
            7: "WS7",
            8: "WS8"
        }
    },
    {
        name: "CSASSRMS001",
        category: "CSA",
        description: "MSS EDCD SSRMS Base Location",
        unit: null,
        parse(value) {
            return value
        },
        format: null
    },
    {
        name: "CSASSRMS002",
        category: "CSA",
        description: "MSS EDCD SSRMS Base Location",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "1=Lab | 2=Node3 | 4=Node2 | 7=MBS PDGF 1 | 8=MBS PDGF 2 | 11=MBS PDGF 3 | 13=MBS PDGF 4 | 14=FGB | 16=POA | 19=SSRMS Tip LEE | 63=Undefined",
        labels: {
            1: "Lab",
            2: "Node3",
            4: "Node2",
            7: "MBS PDGF 1",
            8: "MBS PDGF 2",
            11: "MBS PDGF 3",
            13: "MBS PDGF 4",
            14: "FGB",
            16: "POA",
            19: "SSRMS Tip LEE",
            63: "Undefined"
        }
    },
    {
        name: "CSASSRMS003",
        category: "CSA",
        description: "MSS EDCD SSRMS Operating Base (Which LEE is Base)",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Lee A | 5=Lee B",
        labels: {
            0: "Lee A",
            5: "Lee B"
        }
    },
    {
        name: "CSASSRMS004",
        category: "CSA",
        description: "SSRMS SR Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASSRMS005",
        category: "CSA",
        description: "SSRMS SY Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASSRMS006",
        category: "CSA",
        description: "SSRMS SP Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASSRMS007",
        category: "CSA",
        description: "SSRMS EP Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASSRMS008",
        category: "CSA",
        description: "SSRMS WP Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASSRMS009",
        category: "CSA",
        description: "SSRMS WY Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASSRMS010",
        category: "CSA",
        description: "SSRMS WR Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASSRMS011",
        category: "CSA",
        description: "MSS OCS Payload Status SSRMS Tip LEE",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Released|1=Captive|2=Captured",
        labels: {
            0: "Released",
            1: "Captive",
            2: "Captured"
        }
    },
    {
        name: "CSASPDM0001",
        category: "CSA",
        description: "MSS OCS Base Location SPDM",
        unit: null,
        parse(value) {
            return value
        },
        format: null
    },
    {
        name: "CSASPDM0002",
        category: "CSA",
        description: "MSS OCS Base Location SPDM",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "1=Lab | 2=Node3 | 4=Node2 | 7=MBS PDGF 1 | 8=MBS PDGF 2 | 11=MBS PDGF 3 | 13=MBS PDGF 4 | 14=FGB | 16=POA | 19=SSRMS Tip LEE | 63=Undefined",
        labels: {
            1: "Lab",
            2: "Node3",
            4: "Node2",
            7: "MBS PDGF 1",
            8: "MBS PDGF 2",
            11: "MBS PDGF 3",
            13: "MBS PDGF 4",
            14: "FGB",
            16: "POA",
            19: "SSRMS Tip LEE",
            63: "Undefined"
        }
    },
    {
        name: "CSASPDM0003",
        category: "CSA",
        description: "MSS OCS SPDM 1 SR Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASPDM0004",
        category: "CSA",
        description: "MSS OCS SPDM 1 SY Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASPDM0005",
        category: "CSA",
        description: "MSS OCS SPDM 1 SP Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASPDM0006",
        category: "CSA",
        description: "MSS OCS SPDM 1 EP Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASPDM0007",
        category: "CSA",
        description: "MSS OCS SPDM 1 WP Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASPDM0008",
        category: "CSA",
        description: "MSS OCS SPDM 1 WY Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASPDM0009",
        category: "CSA",
        description: "MSS OCS SPDM 1 WR Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASPDM0010",
        category: "CSA",
        description: "MSS Payload Status OCS SPDM Arm 1 OTCM",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Released|1=Captive|2=Captured",
        labels: {
            0: "Released",
            1: "Captive",
            2: "Captured"
        }
    },
    {
        name: "CSASPDM0011",
        category: "CSA",
        description: "MSS OCS SPDM 2 SR Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASPDM0012",
        category: "CSA",
        description: "MSS OCS SPDM 2 SY Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASPDM0013",
        category: "CSA",
        description: "MSS OCS SPDM 2 SP Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASPDM0014",
        category: "CSA",
        description: "MSS OCS SPDM 2 EP Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASPDM0015",
        category: "CSA",
        description: "MSS OCS SPDM 2 WP Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASPDM0016",
        category: "CSA",
        description: "MSS OCS SPDM 2 WY Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASPDM0017",
        category: "CSA",
        description: "MSS OCS SPDM 2 WR Measured Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASPDM0018",
        category: "CSA",
        description: "MSS Payload Status OCS SPDM Arm 2 OTCM?",
        unit: null,
        parse(value) {
            return value
        },
        format: null
    },
    {
        name: "CSASPDM0019",
        category: "CSA",
        description: "MSS Payload Status OCS SPDM Arm 2 OTCM",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Released|1=Captive|2=Captured",
        labels: {
            0: "Released",
            1: "Captive",
            2: "Captured"
        }
    },
    {
        name: "CSASPDM0020",
        category: "CSA",
        description: "MSS OCS SPDM Body Roll Joint Position",
        unit: "DEG",
        parse: Number,
        format: "Angle",
    },
    {
        name: "CSASPDM0021",
        category: "CSA",
        description: "MSS Payload Status OCS SPDM Body?",
        unit: null,
        parse(value) {
            return value
        },
        format: null
    },
    {
        name: "CSASPDM0022",
        category: "CSA",
        description: "MSS Payload Status OCS SPDM Body",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Released|1=Captive|2=Captured",
        labels: {
            0: "Released",
            1: "Captive",
            2: "Captured"
        }
    },
    {
        name: "CSAMBS00001",
        category: "CSA",
        description: "MSS OCS Payload Status MBS MCAS?",
        unit: null,
        parse(value) {
            return value
        },
        format: null
    },
    {
        name: "CSAMBS00002",
        category: "CSA",
        description: "MSS OCS Payload Status MBS MCAS",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Released|1=Captured",
        labels: {
            0: "Released",
            1: "Captured"
        }
    },
    {
        name: "CSAMBA00003",
        category: "CSA",
        description: "MSS OCS Payload Status MBS POA?",
        unit: null,
        parse(value) {
            return value
        },
        format: null
    },
    {
        name: "CSAMBA00004",
        category: "CSA",
        description: "MSS OCS Payload Status MBS POA",
        unit: null,
        parse(value) {
            return this.labels?.[value] || value;
        },
        format: "0=Released|1=Captive|2=Captured",
        labels: {
            0: "Released",
            1: "Captive",
            2: "Captured"
        }
    }
];

interface Spec {
    name: string;
    category: string | null;
    description: string;
    unit: string | null;
    parse: (value: string) => any;
    format: string | null;
    labels?: { [key: string]: string };
}
